package zio.test

import zio._
import zio.internal.macros.{LayerMacroUtils, ProvideMethod}

import scala.reflect.macros.whitebox

class SpecLayerWhiteboxMacros(val c: whitebox.Context) extends LayerMacroUtils[whitebox.Context] {

  type ZSpec[-R, +E, +T] = Spec[R, E]

  def provideSomeSharedAutoImpl[R: c.WeakTypeTag, E](
    layer: c.Expr[ZLayer[_, E, _]]*
  ): c.Expr[Spec[_, E]] = {
    provideBaseAutoImpl[ZSpec, R, E, TestSuccess](layer, "provideSomeLayerShared", ProvideMethod.ProvideSomeShared)
  }

}
