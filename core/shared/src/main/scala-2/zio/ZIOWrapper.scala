package zio

case class ZIOWrapper[R, E, A](zio: ZIO[R, E, A]) {

}
