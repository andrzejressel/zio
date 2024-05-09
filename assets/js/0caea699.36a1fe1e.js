"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[31161],{15680:(e,a,t)=>{t.d(a,{xA:()=>l,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),k=r,g=m["".concat(c,".").concat(k)]||m[k]||d[k]||o;return t?n.createElement(g,s(s({ref:a},l),{},{components:t})):n.createElement(g,s({ref:a},l))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=k;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},39166:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const o={id:"akka-interop",title:"Akka Interop"},s=void 0,i={unversionedId:"zio-actors/akka-interop",id:"zio-actors/akka-interop",title:"Akka Interop",description:"Akka Interop gives you the ability to send and receive messages between zio actors and akka typed actors.",source:"@site/docs/zio-actors/akka-interop.md",sourceDirName:"zio-actors",slug:"/zio-actors/akka-interop",permalink:"/zio-actors/akka-interop",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-actors/akka-interop.md",tags:[],version:"current",frontMatter:{id:"akka-interop",title:"Akka Interop"},sidebar:"ecosystem-sidebar",previous:{title:"Persistence",permalink:"/zio-actors/persistence"},next:{title:"Examples",permalink:"/zio-actors/examples"}},c={},p=[],l={toc:p},m="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Akka Interop gives you the ability to send and receive messages between zio actors and akka typed actors."),(0,r.yg)("p",null,"To use Akka Interops you need in your ",(0,r.yg)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sbt"},'libraryDependencies += "dev.zio" %% "zio-actors-akka-interop" % "0.1.0"\n')),(0,r.yg)("p",null,"Imports required for example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.actors.Actor.Stateful\nimport zio.actors.{ ActorSystem, ActorRef, Context, Supervisor }\nimport zio.actors.akka.{ AkkaTypedActor, AkkaTypedActorRefLocal }\nimport zio.{ ZIO, IO, Runtime }\n\nimport akka.actor.typed\nimport akka.actor.typed.Behavior\nimport akka.actor.typed.scaladsl.Behaviors\nimport akka.actor.typed.Scheduler\nimport akka.util.Timeout\n\nimport scala.concurrent.duration._\n")),(0,r.yg)("p",null,"Case class for messages that zio actor send and receive from akka actor:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"sealed trait TypedMessage[+_]\ncase class PingToZio(zioReplyToActor: ActorRef[ZioMessage], msg: String) extends TypedMessage[Unit]\ncase class PingFromZio(zioSenderActor: ActorRef[ZioMessage]) extends TypedMessage[Unit]\n\nsealed trait ZioMessage[+_]\ncase class PongFromAkka(msg: String) extends ZioMessage[Unit]\ncase class Ping(akkaActor: AkkaTypedActorRefLocal[TypedMessage]) extends ZioMessage[Unit]\n")),(0,r.yg)("p",null,"For zio actor basics, (",(0,r.yg)("a",{parentName:"p",href:"/zio-actors/basics#usage"},"Basics section"),").\nHere's the ",(0,r.yg)("inlineCode",{parentName:"p"},"Stateful")," implementation for our zio actor:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val handler = new Stateful[Any, String, ZioMessage] {\n  override def receive[A](state: String, msg: ZioMessage[A], context: Context): IO[Throwable, (String, A)] =\n    msg match {             \n      case PongFromAkka(msg) => ZIO.succeed((msg, ()))\n      case Ping(akkaActor) =>\n              for {\n                 self <- context.self[ZioMessage]\n                 _    <- akkaActor ! PingFromZio(self)\n               } yield (state, ())\n      case _=> ZIO.fail(new Exception("fail"))\n    }\n}\n')),(0,r.yg)("p",null,"Akka actors (",(0,r.yg)("a",{parentName:"p",href:"https://doc.akka.io/docs/akka/current/typed/actor-lifecycle.html#creating-actors"},"Creation akka actors"),"),\nneed a behavior, to define the messages to be handled, in this case send and receive messages to zio actor:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'object TestBehavior {\n    lazy val zioRuntime = Runtime.default\n    def apply(): Behavior[TypedMessage[_]] =\n      Behaviors.receiveMessage { message =>\n        message match {                  \n          case PingToZio(zioReplyToActor, msgToZio) => \n            zio.Unsafe.unsafe { implicit unsafe =>\n              zioRuntime.unsafe.run(zioReplyToActor ! PongFromAkka(msgToZio))\n            }\n          case PingFromZio(zioSenderActor)          =>\n            zio.Unsafe.unsafe { implicit unsafe => \n              zioRuntime.unsafe.run(zioSenderActor ! PongFromAkka("Pong from Akka"))\n            }\n        }\n        Behaviors.same\n      }\n  } \n')),(0,r.yg)("p",null,"We are ready to start sending messages from zio to akka, or vice versa via ",(0,r.yg)("inlineCode",{parentName:"p"},"fire-and-forget")," interaction pattern,\nbut first we need to create a ZIO value with the created akka ActorRef(or ActorSystem), using ",(0,r.yg)("inlineCode",{parentName:"p"},"AkkaTypedActor.make"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'for {\n  akkaSystem <- ZIO.succeed(typed.ActorSystem(TestBehavior(), "akkaSystem"))\n  system     <- ActorSystem("zioSystem")\n  akkaActor  <- AkkaTypedActor.make(akkaSystem)\n  zioActor   <- system.make("zioActor", Supervisor.none, "", handler)\n  _          <- akkaActor ! PingToZio(zioActor, "Ping from Akka")\n  _          <- zioActor ! Ping(akkaActor)\n} yield ()\n')),(0,r.yg)("p",null,"There's also ",(0,r.yg)("inlineCode",{parentName:"p"},"ask")," interaction pattern, that provides a way to send a message to an akka actor and expect a response.\nIt's performed via ",(0,r.yg)("inlineCode",{parentName:"p"},"?")," method, and needs a parameter of type ",(0,r.yg)("inlineCode",{parentName:"p"},"typed.ActorRef[R] => T")," (",(0,r.yg)("inlineCode",{parentName:"p"},"R")," represents the response type,\n",(0,r.yg)("inlineCode",{parentName:"p"},"T")," is the message type), with implicit values for ",(0,r.yg)("inlineCode",{parentName:"p"},"akka.util.Timeout"),"  and ",(0,r.yg)("inlineCode",{parentName:"p"},"akka.actor.typed.Scheduler"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'sealed trait AskMessage[+_]\ncase class PingAsk(value: Int, replyTo: typed.ActorRef[Int]) extends AskMessage[Int]\n\nobject AskTestBehavior {\n    def apply(): Behavior[AskMessage[_]] =\n      Behaviors.receiveMessage { message =>\n        message match {\n          case PingAsk(value, replyTo) => replyTo ! (value * 2)\n        }\n        Behaviors.same\n      }\n  }\n\ndef PingAskDeferred(value: Int): typed.ActorRef[Int] => PingAsk \n       = (hiddenRef: typed.ActorRef[Int]) => PingAsk(value, hiddenRef)\n       \nimport scala.concurrent.duration.DurationInt \nimplicit val timeout: Timeout = 3.seconds\n         \nfor {\n  akkaAskSystem <- ZIO.succeed(typed.ActorSystem(AskTestBehavior(), "akkaSystem"))\n  akkaActor <- AkkaTypedActor.make(akkaAskSystem)\n  result    <- (akkaActor ? PingAskDeferred(1000)) (timeout, akkaAskSystem.scheduler)\n} yield result == 2000\n')))}d.isMDXComponent=!0}}]);