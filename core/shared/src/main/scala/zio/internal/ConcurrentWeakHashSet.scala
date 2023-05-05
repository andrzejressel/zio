package zio.internal

import zio.internal.ConcurrentWeakHashSet.Ref

import java.lang.ref.WeakReference
import scala.collection.mutable
import java.util.concurrent.locks.ReentrantLock
import java.lang.ref.ReferenceQueue
import java.util.concurrent.atomic.AtomicInteger

private[zio] object ConcurrentWeakHashSet {

  private[internal] final val MaxConcurrencyLevel: Int     = 1 << 16
  private[internal] final val MaxSegmentSize: Int          = 1 << 30
  private[internal] final val DefaultInitialCapacity: Int  = 16
  private[internal] final val DefaultLoadFactor: Float     = 0.75f
  private[internal] final val DefaultConcurrencyLevel: Int = 16

  /**
   * Reference node that links elements in the set with the same hash code
   *
   * @param hash
   *   hash code of the element
   * @param element
   *   value passed to the weak reference
   * @param queue
   *   reference queue that will be used to track garbage collected elements
   * @param nextRef
   *   next reference node in the chain
   * @tparam V
   *   type of the element
   */
  protected class Ref[V](
    val hash: Int,
    element: V,
    queue: ReferenceQueue[V],
    var nextRef: Ref[V]
  ) extends WeakReference[V](element, queue)

  /**
   * Access options for the update operation.
   */
  protected sealed trait UpdateOption
  protected object UpdateOption {
    case object RestructureBefore extends UpdateOption
    case object RestructureAfter  extends UpdateOption
    case object SkipIfEmpty       extends UpdateOption
    case object Resize            extends UpdateOption
  }

  /**
   * Supported results of the update operation.
   */
  protected sealed trait UpdateResult
  protected object UpdateResult {
    case object None          extends UpdateResult
    case object AddElement    extends UpdateResult
    case object RemoveElement extends UpdateResult
  }

  /**
   * Base class for all update operations.
   */
  protected abstract class UpdateOperation[V](val options: UpdateOption*) {
    def execute(oldRef: Ref[V]): UpdateResult
  }

  /**
   * Calculates the shift for configuration parameters. The shift is used to
   * calculate the size of the segments and the size of the reference array. The
   * algorithm is based on Bit Twiddling Hacks for rounding up to the next
   * highest power of 2.
   */
  private[internal] def calculateShift(value: Int, maxValue: Int): Int = {
    var v = value.min(maxValue) - 1
    v |= v >> 1
    v |= v >> 2
    v |= v >> 4
    v |= v >> 8
    v |= v >> 16
    31 - Integer.numberOfLeadingZeros(v + 1)
  }

}

/**
 * A `Set` data type that uses weak references to store its elements in highly
 * concurrent environment. This is faster alternative to
 * `Collections.synchronizedSet(Collections.newSetFromMap(new WeakHashMapA, *
 * java.lang.Boolean))`.
 *
 * Implementation of this class is a combination of some existing solutions:
 *   - `ConcurrentHashMap` from JDK 7 - for concurrency control using segments
 *   - `WeakHashMap` - for storing weak references to elements
 *   - `ConcurrentReferenceHashMap` from Spring Framework - the reference map
 *     that combines references & with concurrent segments
 *
 * This implementation offers better performance than synchronized set for
 * concurrent operations, but might be a little bit slower for serial
 * (single-threaded only) access.
 *
 * @param initialCapacity
 *   initial size of the set (default
 *   [[ConcurrentWeakHashSet.DefaultInitialCapacity]])
 * @tparam V
 *   type of the elements stored in the set
 */
private[zio] class ConcurrentWeakHashSet[V](
  initialCapacity: Int = ConcurrentWeakHashSet.DefaultInitialCapacity
) extends mutable.Set[V] { self =>

  private val shift =
    ConcurrentWeakHashSet.calculateShift(this.concurrencyLevel, ConcurrentWeakHashSet.MaxConcurrencyLevel)
  private val segments: Array[Segment] = {
    val size                     = 1 << shift
    val roundedUpSegmentCapacity = ((this.initialCapacity + size - 1L) / size).toInt
    val initialSize =
      1 << ConcurrentWeakHashSet.calculateShift(roundedUpSegmentCapacity, ConcurrentWeakHashSet.MaxSegmentSize)
    val segments        = new Array[Segment](size)
    val resizeThreshold = (initialSize * this.loadFactor).toInt
    var idx             = 0
    while (idx < segments.length) {
      segments(idx) = new Segment(initialSize, resizeThreshold)
      idx += 1
    }
    segments
  }

  /**
   * You can override this method to provide custom load factor for the set.
   *
   * @return
   *   load factor for the set that defines how fast it will grow (default
   *   [[ConcurrentWeakHashSet.DefaultLoadFactor]])
   */
  protected def loadFactor: Float =
    ConcurrentWeakHashSet.DefaultLoadFactor

  /**
   * You can override this method to provide custom concurrency level for the
   * set.
   *
   * @return
   *   approximate number of threads that will access the set concurrently
   *   (default [[ConcurrentWeakHashSet.DefaultConcurrencyLevel]])
   */
  protected def concurrencyLevel: Int =
    ConcurrentWeakHashSet.DefaultConcurrencyLevel

  /**
   * Enforce cleanup of dead references in the set. By default cleanup is
   * performed automatically when the set is modified, but some operations (like
   * e.g. `size`) do not modify the set and therefore do not trigger cleanup.
   */
  def gc(): Unit = {
    val iterator = this.segments.iterator
    while (iterator.hasNext) iterator.next().restructureIfNecessary(false)
  }

  /**
   * Get estimated number of elements in the set. This method does not perform
   * cleanup of dead references, so it might return a little bit higher value
   * than the actual number of elements.
   *
   * @return
   *   estimated number of elements in the set
   */
  override def size(): Int = {
    var sum      = 0
    val iterator = this.segments.iterator
    while (iterator.hasNext) sum += iterator.next().size()
    sum
  }

  /**
   * Check if the set is empty.
   *
   * @return
   *   `true` if the set is empty, `false` otherwise
   * @see
   *   [[ConcurrentWeakHashSet.size]]
   */
  override def isEmpty: Boolean = {
    val iterator = this.segments.iterator
    while (iterator.hasNext) if (iterator.next().size() > 0) return false
    true
  }

  /**
   * @return
   *   specialized iterator that excludes dead references
   */
  override def iterator: Iterator[V] =
    new ConcurrentWeakHashSetIterator()

  /**
   * Check if the set contains the specified element.
   *
   * @param element
   *   element to check
   * @return
   *   `true` if the set contains the specified element, `false` otherwise
   */
  override def contains(element: V): Boolean =
    if (element == null) false
    else {
      val reference     = getReference(element)
      val storedElement = if (reference ne null) reference.get() else null
      storedElement != null
    }

  /**
   * Add given elements to the set.
   *
   * @param elements
   *   elements to add
   * @return
   *   `true` if the element was added, `false` otherwise
   * @see
   *   [[ConcurrentWeakHashSet.add]]
   */
  def addAll(elements: Iterable[V]): Unit = {
    val iterator = elements.iterator
    while (iterator.hasNext) this.add(iterator.next())
  }

  /**
   * Add given element to the set.
   *
   * @param element
   *   element to add
   * @return
   *   instance of the set
   */
  override def addOne(element: V): this.type = {
    this.add(element)
    this
  }

  /**
   * Add given element to the set. Remember that this method does not support
   * `null` elements, because it's not a valid value for `WeakReference`.
   *
   * @param element
   *   not-null element to add
   * @return
   *   `true` if the element was added, `false` otherwise
   * @throws IllegalArgumentException
   *   if the element is `null`
   */
  override def add(element: V): Boolean = {
    if (element == null) throw new IllegalArgumentException("ConcurrentWeakHashSet does not support null elements.")
    this.update(
      element,
      new ConcurrentWeakHashSet.UpdateOperation[V](
        ConcurrentWeakHashSet.UpdateOption.RestructureBefore,
        ConcurrentWeakHashSet.UpdateOption.Resize
      ) {
        override def execute(oldRef: Ref[V]): ConcurrentWeakHashSet.UpdateResult =
          if (oldRef == null || oldRef.get() != element)
            ConcurrentWeakHashSet.UpdateResult.AddElement
          else
            ConcurrentWeakHashSet.UpdateResult.None
      }
    )
  }

  /**
   * Remove given element from the set.
   *
   * @param element
   *   element to remove
   * @return
   *   instance of the set
   * @see
   *   [[ConcurrentWeakHashSet.remove]]
   */
  override def subtractOne(element: V): ConcurrentWeakHashSet.this.type = {
    this.remove(element)
    this
  }

  /**
   * Remove given element from the set.
   *
   * @param element
   *   element to remove
   * @return
   *   `true` if the element was removed, `false` otherwise
   */
  override def remove(element: V): Boolean =
    this.update(
      element,
      new ConcurrentWeakHashSet.UpdateOperation[V](
        ConcurrentWeakHashSet.UpdateOption.RestructureAfter,
        ConcurrentWeakHashSet.UpdateOption.SkipIfEmpty
      ) {
        override def execute(oldRef: Ref[V]): ConcurrentWeakHashSet.UpdateResult =
          if (oldRef != null && oldRef.get() == element)
            ConcurrentWeakHashSet.UpdateResult.RemoveElement
          else
            ConcurrentWeakHashSet.UpdateResult.None
      }
    )

  /**
   * Remove all elements from the set.
   */
  override def clear(): Unit =
    this.segments.foreach(segment => segment.clear())

  /**
   * Enhanced hashing same as in standard ConcurrentHashMap (Wang/Jenkins
   * algorithm)
   */
  private def getHash(element: V): Int = {
    var hash = if (element != null) element.hashCode() else 0
    hash += (hash << 15) ^ 0xffffcd7d
    hash ^= (hash >>> 10)
    hash += (hash << 3)
    hash ^= (hash >>> 6)
    hash += (hash << 2) + (hash << 14)
    hash ^= (hash >>> 16)
    hash
  }

  /**
   * Get segment for matched range of hashes.
   */
  private def getSegment(hash: Int): Segment =
    this.segments((hash >>> (32 - this.shift)) & (this.segments.length - 1))

  /**
   * Get reference node for given element from matched segment.
   * @see
   *   [[ConcurrentWeakHashSet.getSegment]]
   */
  private def getReference(element: V): Ref[V] = {
    val hash    = this.getHash(element)
    val segment = this.getSegment(hash)
    segment.getReference(element, hash)
  }

  /**
   * Perform update operation on matched reference for provided element in the
   * set.
   */
  private def update(element: V, update: ConcurrentWeakHashSet.UpdateOperation[V]): Boolean = {
    val hash    = this.getHash(element)
    val segment = this.getSegment(hash)
    segment.update(hash, element, update)
  }

  /**
   * Segment of the set that is responsible for a range of hashes. Locking
   * mechanism is backed by ReentrantLock and dead references are cleaned up
   * through ReferenceQueue.
   */
  private class Segment(initialSize: Int, var resizeThreshold: Int) extends ReentrantLock {

    private val queue        = new ReferenceQueue[V]()
    private val counter      = new AtomicInteger(0)
    @volatile var references = new Array[Ref[V]](this.initialSize)

    /**
     * Get reference from this segment for given element and hash.
     */
    def getReference(element: V, hash: Int): Ref[V] = {
      if (this.counter.get() == 0) return null
      val localReferences = this.references // read volatile
      val index           = this.getIndex(localReferences, hash)
      val head            = localReferences(index)
      this.findInChain(head, element, hash)
    }

    /**
     * Get hash position in the references array.
     */
    private def getIndex(refs: Array[_], hash: Int): Int =
      hash & (refs.length - 1)

    /**
     * Look for reference with given value in the chain.
     */
    private def findInChain(headReference: Ref[V], element: V, hash: Int): Ref[V] = {
      var currentReference = headReference
      while (currentReference ne null) {
        if (currentReference.hash == hash && currentReference.get() == element) {
          return currentReference
        }
        currentReference = currentReference.nextRef
      }
      null
    }

    /**
     * Perform update operation on matched reference for provided element in the
     * set.
     */
    def update(hash: Int, element: V, update: ConcurrentWeakHashSet.UpdateOperation[V]): Boolean = {
      val resize = update.options.contains(ConcurrentWeakHashSet.UpdateOption.Resize)
      if (update.options.contains(ConcurrentWeakHashSet.UpdateOption.RestructureBefore)) {
        this.restructureIfNecessary(resize)
      }
      val skipIfEmpty = update.options.contains(ConcurrentWeakHashSet.UpdateOption.SkipIfEmpty)
      if (skipIfEmpty && this.counter.get() == 0) {
        return update.execute(null) ne ConcurrentWeakHashSet.UpdateResult.None
      }
      this.lock()
      try {
        val index     = this.getIndex(this.references, hash)
        val head      = this.references(index)
        val storedRef = this.findInChain(head, element, hash)
        update.execute(storedRef) match {
          case ConcurrentWeakHashSet.UpdateResult.None =>
            false
          case ConcurrentWeakHashSet.UpdateResult.AddElement =>
            val newRef = new Ref[V](hash, element, this.queue, head)
            this.references(index) = newRef
            this.counter.incrementAndGet()
            true
          case ConcurrentWeakHashSet.UpdateResult.RemoveElement =>
            var previousRef = null.asInstanceOf[Ref[V]]
            var currentRef  = storedRef
            while (currentRef ne null) {
              if (currentRef.get() == element) {
                this.counter.decrementAndGet()
                if (previousRef == null) {
                  this.references(index) = currentRef.nextRef // start chain with next ref
                } else {
                  previousRef.nextRef = currentRef.nextRef // skip current ref
                }
                currentRef = null
              } else {
                previousRef = currentRef
                currentRef = currentRef.nextRef
              }
            }
            true
        }
      } finally {
        this.unlock()
        if (update.options.contains(ConcurrentWeakHashSet.UpdateOption.RestructureAfter)) {
          this.restructureIfNecessary(resize)
        }
      }
    }

    /**
     * Check if segment needs to be resized and perform resize if necessary.
     */
    def restructureIfNecessary(allowResize: Boolean): Unit = {
      val currentCount = this.counter.get()
      val needsResize  = allowResize && (currentCount > 0 && currentCount >= this.resizeThreshold)
      val ref          = this.queue.poll().asInstanceOf[Ref[V]]
      if ((ref ne null) || needsResize) {
        this.restructure(allowResize, ref)
      }
    }

    /**
     * Restructure segment by resizing references array and purging dead
     * references. Given position in the segment is removed if reference was
     * queued for cleanup by GC or the reference is null or empty.
     */
    private def restructure(allowResize: Boolean, firstRef: Ref[V]): Unit = {
      this.lock()
      try {
        val toPurge =
          if (firstRef ne null) {
            val refs       = mutable.Set[Ref[V]]()
            var refToPurge = firstRef
            while (refToPurge ne null) {
              refs.add(refToPurge)
              refToPurge = this.queue.poll().asInstanceOf[Ref[V]]
            }
            refs
          } else Set[Ref[V]]()

        val countAfterRestructure = this.counter.get() - toPurge.size
        val needsResize           = (countAfterRestructure > 0 && countAfterRestructure >= this.resizeThreshold)
        var restructureSize       = this.references.length
        val resizing              = allowResize && needsResize && restructureSize < ConcurrentWeakHashSet.MaxSegmentSize

        if (resizing) {
          restructureSize = restructureSize << 1
        }

        val restructured = if (resizing) new Array[Ref[V]](restructureSize) else this.references

        for (idx <- this.references.indices) {
          var currentRef = this.references(idx)
          if (!resizing) {
            restructured(idx) = null
          }
          while (currentRef ne null) {
            if (!toPurge.contains(currentRef)) {
              val currentRefValue = currentRef.get()
              if (currentRefValue != null) {
                val currentRefIndex = this.getIndex(restructured, currentRef.hash)
                val previousRef     = restructured(currentRefIndex)
                restructured(currentRefIndex) = new Ref(currentRef.hash, currentRefValue, this.queue, previousRef)
              }
            }
            currentRef = currentRef.nextRef
          }
        }

        if (resizing) {
          this.references = restructured
          this.resizeThreshold = (restructured.length * loadFactor).toInt
        }

        this.counter.set(0.max(countAfterRestructure))
      } finally {
        this.unlock()
      }
    }

    /**
     * Reset segment to initial state.
     */
    def clear(): Unit = {
      if (this.counter.get() == 0) return
      this.lock()
      try {
        this.references = new Array[Ref[V]](this.initialSize)
        this.resizeThreshold = (this.references.length * self.loadFactor).toInt
        this.counter.set(0)
      } finally {
        this.unlock()
      }
    }

    /**
     * Get cached number of elements in the segment.
     */
    def size(): Int =
      this.counter.get()

  }

  /**
   * Iterator that excludes dead references.
   */
  private class ConcurrentWeakHashSetIterator extends Iterator[V] {

    private var segmentIndex: Int         = 0
    private var referenceIndex: Int       = 0
    private var references: Array[Ref[V]] = _
    private var reference: Ref[V]         = _
    private var nextElement: V            = null.asInstanceOf[V]
    private var lastElement: V            = null.asInstanceOf[V]

    /* Initialize iterator state */
    this.moveToNextSegment()

    override def hasNext: Boolean = {
      this.moveToNextReferenceIfNecessary()
      this.nextElement != null
    }

    override def next(): V = {
      moveToNextReferenceIfNecessary()
      if (this.nextElement == null) throw new NoSuchElementException()
      this.lastElement = this.nextElement
      this.nextElement = null.asInstanceOf[V]
      this.lastElement
    }

    /**
     * Move to next reference in the segment.
     */
    private def moveToNextReferenceIfNecessary(): Unit =
      while (this.nextElement == null) {
        moveToNextReference()
        if (this.reference == null) return
        this.nextElement = this.reference.get()
      }

    /**
     * Lookup for the next non-dead reference in the chain or move to next
     * reference/segment.
     */
    private def moveToNextReference(): Unit = {
      if (this.reference ne null) {
        this.reference = this.reference.nextRef
      }
      while (this.reference == null && (this.references ne null)) {
        if (this.referenceIndex >= this.references.length) {
          this.moveToNextSegment()
          this.referenceIndex = 0
        } else {
          this.reference = this.references(this.referenceIndex)
          this.referenceIndex += 1
        }
      }
    }

    /**
     * Lookup for the next non-empty segment.
     */
    private def moveToNextSegment(): Unit = {
      this.reference = null
      this.references = null
      if (this.segmentIndex < self.segments.length) {
        this.references = self.segments(this.segmentIndex).references
        this.segmentIndex += 1
      }
    }
  }

}
