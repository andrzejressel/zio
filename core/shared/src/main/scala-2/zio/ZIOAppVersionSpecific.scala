package zio

private[zio] trait ZIOAppVersionSpecific {

  /**
   * This implicit conversion macro will ensure that the provided ZIO effect
   * does not require more than the provided environment.
   *
   * If it is missing requirements, it will report a descriptive error message.
   * Otherwise, the effect will be returned unmodified.
   */
  implicit def validateEnv[R1, R, E, A](zio: ZIO[R, E, A])(implicit s: NotGiven[Int]): ZIO[R1, E, A] =
    macro internal.macros.LayerMacros.validate[R1, R]

}

final class NotGiven[+A] private ()

trait NotGivenLowPriority {
  implicit def default[A]: NotGiven[A] = NotGiven.value
}

object NotGiven extends NotGivenLowPriority {
  val value: NotGiven[Nothing] = new NotGiven[Nothing]
  implicit def amb1[A](implicit ev: A): NotGiven[A] = ???
  implicit def amb2[A](implicit ev: A): NotGiven[A] = ???
}