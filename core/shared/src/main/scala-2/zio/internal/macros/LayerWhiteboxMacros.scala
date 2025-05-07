package zio.internal.macros

import zio.ZLayer

import scala.reflect.macros.whitebox

private[zio] class LayerWhiteboxMacros(val c: whitebox.Context) extends LayerMacroUtils[whitebox.Context] {

  def provideSomeAutoImpl[F[_, _, _], R: c.WeakTypeTag, E, A](
    layer: c.Expr[ZLayer[_, E, _]]*
  ): c.Expr[F[_, E, A]] =
    provideBaseAutoImpl[F, R, E, A](layer, "provideLayer", ProvideMethod.ProvideSome)

}
