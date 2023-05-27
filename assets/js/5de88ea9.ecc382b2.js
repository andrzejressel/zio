"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[54807],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),s=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(o.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,d=u["".concat(o,".").concat(g)]||u[g]||h[g]||c;return t?n.createElement(d,l(l({ref:a},p),{},{components:t})):n.createElement(d,l({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=g;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<c;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},58064:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const c={id:"catching",title:"Catching",sidebar_label:"1. Catching"},l=void 0,i={unversionedId:"reference/error-management/recovering/catching",id:"reference/error-management/recovering/catching",title:"Catching",description:"Catching Failures",source:"@site/docs/reference/error-management/recovering/catching.md",sourceDirName:"reference/error-management/recovering",slug:"/reference/error-management/recovering/catching",permalink:"/reference/error-management/recovering/catching",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/recovering/catching.md",tags:[],version:"current",frontMatter:{id:"catching",title:"Catching",sidebar_label:"1. Catching"},sidebar:"reference-sidebar",previous:{title:"Sequential and Parallel Errors",permalink:"/reference/error-management/sequential-and-parallel-errors"},next:{title:"2. Fallback",permalink:"/reference/error-management/recovering/fallback"}},o={},s=[{value:"Catching Failures",id:"catching-failures",level:2},{value:"Catching Defects",id:"catching-defects",level:2},{value:"Catching Causes",id:"catching-causes",level:2},{value:"Catching Traces",id:"catching-traces",level:2},{value:"Catching Non-Fatal",id:"catching-non-fatal",level:2}],p={toc:s},u="wrapper";function h(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"catching-failures"},"Catching Failures"),(0,r.kt)("p",null,"If we want to catch and recover from all ",(0,r.kt)("em",{parentName:"p"},"typed error")," and effectfully attempt recovery, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#catchAll")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def catchAll[R1 <: R, E2, A1 >: A](h: E => ZIO[R1, E2, A1]): ZIO[R1, E2, A1]\n}\n")),(0,r.kt)("p",null,"We can recover from all errors while reading a file and then fallback to another operation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval z: ZIO[Any, IOException, Array[Byte]] =\n  readFile("primary.json").catchAll(_ =>\n    readFile("backup.json"))\n')),(0,r.kt)("p",null,"In the callback passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#catchAll"),", we may return an effect with a different error type (or perhaps ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing"),"), which will be reflected in the type of effect returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#catchAll"),"."),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#catchAll")," operator, the match cases should be exhaustive. Remember our ",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," function again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nsealed trait AgeValidationException extends Exception\ncase class NegativeAgeException(age: Int) extends AgeValidationException\ncase class IllegalAgeException(age: Int)  extends AgeValidationException\n\ndef validate(age: Int): ZIO[Any, AgeValidationException, Int] =\n  if (age < 0)\n    ZIO.fail(NegativeAgeException(age))\n  else if (age < 18)\n    ZIO.fail(IllegalAgeException(age))\n  else ZIO.succeed(age)\n")),(0,r.kt)("p",null,"In the following example, we covered all the cases for the ",(0,r.kt)("inlineCode",{parentName:"p"},"catchAll")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval result: ZIO[Any, Nothing, Int] =\n  validate(20)\n  .catchAll {\n    case NegativeAgeException(age) =>\n      ZIO.debug(s"negative age: $age").as(-1)\n    case IllegalAgeException(age) =>\n      ZIO.debug(s"illegal age: $age").as(-1)\n  }\n')),(0,r.kt)("p",null,"If we forget to catch all cases and the match fails, the original ",(0,r.kt)("strong",{parentName:"p"},"failure")," will be lost and replaced by a ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchError")," ",(0,r.kt)("strong",{parentName:"p"},"defect"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'object MainApp extends ZIOAppDefault {\n  val result: ZIO[Any, Nothing, Int] =\n    validate(15)\n      .catchAll {\n        case NegativeAgeException(age) =>\n          ZIO.debug(s"negative age: $age").as(-1)\n//        case IllegalAgeException(age) =>\n//          ZIO.debug(s"illegal age: $age").as(-1)\n      }\n\n  def run = result\n}\n')),(0,r.kt)("p",null,"Another important note about ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#catchAll")," is that this operator only can recover from ",(0,r.kt)("em",{parentName:"p"},"failures"),". So it can't recover from defects or fiber interruptions."),(0,r.kt)("p",null,"Let's try what happens if we ",(0,r.kt)("inlineCode",{parentName:"p"},"catchAll")," on a dying effect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val die: ZIO[Any, String, Nothing] =\n    ZIO.dieMessage("Boom!") *> ZIO.fail("Oh uh!")\n\n  def run = die.catchAll(_ => ZIO.unit)\n}\n')),(0,r.kt)("p",null,"Also, if we have a fiber interruption, we can't catch that using this operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val interruptedEffect: ZIO[Any, String, Nothing] =\n    ZIO.interrupt *> ZIO.fail("Oh uh!")\n\n  def run = interruptedEffect.catchAll(_ => ZIO.unit)\n}\n')),(0,r.kt)("p",null,"If we want to catch and recover from only some types of exceptions and effectfully attempt recovery, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#catchSome")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def catchSome[R1 <: R, E1 >: E, A1 >: A](pf: PartialFunction[E, ZIO[R1, E1, A1]]): ZIO[R1, E1, A1]\n}\n")),(0,r.kt)("p",null,"In the following example, we are only catching failure of type ",(0,r.kt)("inlineCode",{parentName:"p"},"FileNotFoundException"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval data: ZIO[Any, IOException, Array[Byte]] =\n  readFile("primary.data").catchSome {\n    case _ : FileNotFoundException =>\n      readFile("backup.data")\n  }\n')),(0,r.kt)("h2",{id:"catching-defects"},"Catching Defects"),(0,r.kt)("p",null,"Like catching failures, ZIO has two operators to catch ",(0,r.kt)("em",{parentName:"p"},"defects"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def catchAllDefect[R1 <: R, E1 >: E, A1 >: A](h: Throwable => ZIO[R1, E1, A1]): ZIO[R1, E1, A1]\n\n  def catchSomeDefect[R1 <: R, E1 >: E, A1 >: A](pf: PartialFunction[Throwable, ZIO[R1, E1, A1]]): ZIO[R1, E1, A1]\n}\n")),(0,r.kt)("p",null,"Let's try the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#catchAllDefect")," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nZIO.dieMessage("Boom!")\n  .catchAllDefect {\n    case e: RuntimeException if e.getMessage == "Boom!" =>\n      ZIO.debug("Boom! defect caught.")\n    case _: NumberFormatException =>\n      ZIO.debug("NumberFormatException defect caught.")\n    case _ =>\n      ZIO.debug("Unknown defect caught.")\n  }\n')),(0,r.kt)("p",null,"We should note that using these operators, we can only recover from a dying effect, and it cannot recover from a failure or fiber interruption."),(0,r.kt)("p",null,"A defect is an error that cannot be anticipated in advance, and there is no way to respond to it. Our rule of thumb is to not recover defects since we don't know about them. We let them crash the application. Although, in some cases, we might need to reload a part of the application instead of killing the entire application."),(0,r.kt)("p",null,"Assume we have written an application that can load plugins at runtime. During the runtime of the plugins, if a defect occurs, we don't want to crash the entire application; rather, we log all defects and then reload the plugin."),(0,r.kt)("h2",{id:"catching-causes"},"Catching Causes"),(0,r.kt)("p",null,"So far, we have only studied how to catch ",(0,r.kt)("em",{parentName:"p"},"failures")," and ",(0,r.kt)("em",{parentName:"p"},"defects"),". But what about ",(0,r.kt)("em",{parentName:"p"},"fiber interruptions")," or how about the specific combination of these errors?"),(0,r.kt)("p",null,"There are two ZIO operators useful for catching causes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def catchAllCause[R1 <: R, E2, A1 >: A](h: Cause[E] => ZIO[R1, E2, A1]): ZIO[R1, E2, A1]\n\n  def catchSomeCause[R1 <: R, E1 >: E, A1 >: A](pf: PartialFunction[Cause[E], ZIO[R1, E1, A1]]): ZIO[R1, E1, A1]\n}\n")),(0,r.kt)("p",null,"With the help of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#catchAllCause")," operator we can catch all errors of an effect and recover from them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval exceptionalEffect = ZIO.attempt(???)\n\nexceptionalEffect.catchAllCause {\n  case Cause.Empty =>\n    ZIO.debug("no error caught")\n  case Cause.Fail(value, _) =>\n    ZIO.debug(s"a failure caught: $value")\n  case Cause.Die(value, _) =>\n    ZIO.debug(s"a defect caught: $value")\n  case Cause.Interrupt(fiberId, _) =>\n    ZIO.debug(s"a fiber interruption caught with the fiber id: $fiberId")\n  case Cause.Stackless(cause: Cause.Die, _) =>\n    ZIO.debug(s"a stackless defect caught: ${cause.value}")\n  case Cause.Stackless(cause: Cause[_], _) =>\n    ZIO.debug(s"an unknown stackless defect caught: ${cause.squashWith(identity)}")\n  case Cause.Then(left, right) =>\n    ZIO.debug(s"two consequence causes caught")\n  case Cause.Both(left, right) =>\n    ZIO.debug(s"two parallel causes caught")\n}\n')),(0,r.kt)("p",null,"Additionally, there is a partial version of this operator called ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#catchSomeCause"),", which can be used when we don't want to catch all causes, but some of them."),(0,r.kt)("h2",{id:"catching-traces"},"Catching Traces"),(0,r.kt)("p",null,"The two ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#catchAllTrace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#catchSomeTrace")," operators are useful to catch the typed error as well as stack traces of exceptional effects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def catchAllTrace[R1 <: R, E2, A1 >: A](\n    h: ((E, Trace)) => ZIO[R1, E2, A1]\n  ): ZIO[R1, E2, A1]\n\n  def catchSomeTrace[R1 <: R, E1 >: E, A1 >: A](\n    pf: PartialFunction[(E, Trace), ZIO[R1, E1, A1]]\n  ): ZIO[R1, E1, A1]\n}\n")),(0,r.kt)("p",null,"In the below example, let's try to catch a failure on the line number 4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nZIO\n  .fail("Oh uh!")\n  .catchAllTrace {\n    case ("Oh uh!", trace)\n      if trace.toJava\n        .map(_.getLineNumber)\n        .headOption\n        .contains(4) =>\n      ZIO.debug("caught a failure on the line number 4")\n    case _ =>\n      ZIO.debug("caught other failures")\n  }\n')),(0,r.kt)("h2",{id:"catching-non-fatal"},"Catching Non-Fatal"),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#catchNonFatalOrDie")," to recover from all non-fatal errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def catchNonFatalOrDie[R1 <: R, E2, A1 >: A](\n    h: E => ZIO[R1, E2, A1]\n  )(implicit ev1: CanFail[E], ev2: E <:< Throwable): ZIO[R1, E2, A1]\n}\n")),(0,r.kt)("p",null,"In case of occurring any ",(0,r.kt)("a",{parentName:"p",href:"#catching-traces"},"fatal error"),", it will die."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'openFile("data.json").catchNonFatalOrDie(_ => openFile("backup.json"))\n')))}h.isMDXComponent=!0}}]);