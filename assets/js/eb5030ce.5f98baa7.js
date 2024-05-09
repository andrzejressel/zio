"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[35060],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=r,g=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},34589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const o={id:"global-shared-state",title:"Global Shared State Using Ref",sidebar_label:"Global Shared State"},i=void 0,l={unversionedId:"reference/state-management/global-shared-state",id:"reference/state-management/global-shared-state",title:"Global Shared State Using Ref",description:"One of the common use cases for Ref is to manage the state of applications, especially in concurrent environments. We can use the Ref data type, which is a purely functional description of a mutable reference.",source:"@site/docs/reference/state-management/global-shared-state.md",sourceDirName:"reference/state-management",slug:"/reference/state-management/global-shared-state",permalink:"/reference/state-management/global-shared-state",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/state-management/global-shared-state.md",tags:[],version:"current",frontMatter:{id:"global-shared-state",title:"Global Shared State Using Ref",sidebar_label:"Global Shared State"},sidebar:"reference-sidebar",previous:{title:"Recursion",permalink:"/reference/state-management/recursion"},next:{title:"Fiber-local State",permalink:"/reference/state-management/fiber-local-state"}},s={},c=[{value:"Counter Example",id:"counter-example",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"One of the common use cases for ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," is to manage the state of applications, especially in concurrent environments. We can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," data type, which is a purely functional description of a mutable reference."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Note:")),(0,r.yg)("p",{parentName:"blockquote"},"In this section, we will only cover the basic usage of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," data type. To learn more details about the ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref"),", especially its usage in concurrent programming, please refer to the ",(0,r.yg)("a",{parentName:"p",href:"/reference/concurrency/ref"},(0,r.yg)("inlineCode",{parentName:"a"},"Ref"))," page on the concurrency section.")),(0,r.yg)("p",null,"In the previous page, we have learned how to use recursive functions to manage the state of our application. However, this approach has the following drawbacks:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"We cannot share the state between multiple fibers."),(0,r.yg)("li",{parentName:"ul"},"Sometime, writing the application logic is a bit tedious. It is somehow awkward to pass the state using function parameters.")),(0,r.yg)("p",null,"Thanks to the ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," data type, we can easily use the ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," data type to manage the state of our application, whether we need concurrency or not."),(0,r.yg)("p",null,"In the previous section, we learned that we can have state management, even for effectful operations. Here is the last example we tried:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ndef inputNames: ZIO[Any, String, List[String]] = {\n  def loop(names: List[String]): ZIO[Any, String, List[String]] = {\n    Console.readLine("Please enter a name or `q` to exit: ").orDie.flatMap {\n      case "q" =>\n        ZIO.succeed(names)\n      case name =>\n        loop(names appended name)\n    }\n  }\n\n  loop(List.empty[String])\n}\n')),(0,r.yg)("p",null,"This code can be rewritten using the ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," type, which is simpler than the previous one:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ndef getNames: ZIO[Any, String, List[String]] =\n  Ref.make(List.empty[String])\n    .flatMap { ref =>\n      Console\n        .readLine("Please enter a name or \'q\' to exit: ")\n        .orDie\n        .repeatWhileZIO {\n          case "q" => ZIO.succeed(false)\n          case name => ref.update(_ appended name).as(true)\n        } *> ref.get\n    }\n')),(0,r.yg)("p",null,'First, we created a mutable reference to the initial state value, which is an empty list. Then, we read from the console repeatedly until the user enters the "q" command. Finally, we got the value of the reference and returned it.'),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Note:")),(0,r.yg)("p",{parentName:"blockquote"},"All the operations on the ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," data type are effectful. So when we are reading from or writing to a ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref"),", we are performing an effectful operation.")),(0,r.yg)("p",null,"Now that we have learned how to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," data type, we can use it to manage the state concurrently. For example, assume while we are reading from the console, we have another fiber that is trying to update the state from a different source:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ndef getNames: ZIO[Any, String, List[String]] =\n  for {\n    ref <- Ref.make(List.empty[String])\n    f1 <- Console\n      .readLine("Please enter a name or \'q\' to exit: ")\n      .orDie\n      .repeatWhileZIO {\n        case "q"  => ZIO.succeed(false)\n        case name => ref.update(_ appended name).as(true)\n      }.fork \n      f2 <- ZIO.foreachDiscard(Seq("John", "Jane", "Joe", "Tom")) { name =>\n        ref.update(_ appended name) *> ZIO.sleep(1.second)\n      }\n      .fork\n    _ <- f1.join\n    _ <- f2.join\n    v <- ref.get\n  } yield v\n')),(0,r.yg)("h2",{id:"counter-example"},"Counter Example"),(0,r.yg)("p",null,"Let's write a counter using the ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," data type:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ncase class Counter(value: Ref[Int]) {\n  def inc: UIO[Unit] = value.update(_ + 1)\n  def dec: UIO[Unit] = value.update(_ - 1)\n  def get: UIO[Int] = value.get\n}\n\nobject Counter {\n  def make: UIO[Counter] = Ref.make(0).map(Counter(_))\n}\n")),(0,r.yg)("p",null,"Here is the usage example of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Counter"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run =\n    for {\n      c <- Counter.make\n      _ <- c.inc\n      _ <- c.inc\n      _ <- c.dec\n      _ <- c.inc\n      v <- c.get\n      _ <- ZIO.debug(s"This counter has a value of $v.")\n    } yield ()\n}\n')),(0,r.yg)("p",null,"We can use this counter in a concurrent environment, e.g. in a RESTful API to count the number of requests. But for just an example, let's concurrently update the counter:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run =\n    for {\n      c <- Counter.make\n      _ <- c.inc <&> c.inc <&> c.dec <&> c.inc\n      v <- c.get\n      _ <- ZIO.debug(s"This counter has a value of $v.")\n    } yield ()\n}\n')))}m.isMDXComponent=!0}}]);