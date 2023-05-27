"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[30407],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},34229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={id:"non-functional-requirements",title:"Non-functional Requirements"},i=void 0,l={unversionedId:"reference/architecture/non-functional-requirements",id:"reference/architecture/non-functional-requirements",title:"Non-functional Requirements",description:"Introduction",source:"@site/docs/reference/architecture/non-functional-requirements.md",sourceDirName:"reference/architecture",slug:"/reference/architecture/non-functional-requirements",permalink:"/reference/architecture/non-functional-requirements",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/architecture/non-functional-requirements.md",tags:[],version:"current",frontMatter:{id:"non-functional-requirements",title:"Non-functional Requirements"},sidebar:"reference-sidebar",previous:{title:"Programming Paradigms in ZIO",permalink:"/reference/architecture/programming-paradigms-in-zio"},next:{title:"Architectural Patterns",permalink:"/reference/architecture/architectural-patterns"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"1. Correctness",id:"1-correctness",level:2},{value:"2. Testability",id:"2-testability",level:2},{value:"3. Maintainability",id:"3-maintainability",level:2},{value:"4. Low Latency",id:"4-low-latency",level:2},{value:"5. High Throughput",id:"5-high-throughput",level:2},{value:"6. Robustness",id:"6-robustness",level:2},{value:"7. Resiliency",id:"7-resiliency",level:2},{value:"8. Efficiency",id:"8-efficiency",level:2},{value:"9. Developer Productivity",id:"9-developer-productivity",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Designing and architecting a software system is a complex task. We should consider both the functional and non-functional requirements of the system."),(0,r.kt)("p",null,"The functional requirements are the features of the system which are directly related to the business domain and its problems. They are the core of the system and the main reason why we are designing and building the application."),(0,r.kt)("p",null,'Non-functional requirements are characteristics of the system that are used to qualify it in terms of "what should the system be" rather than "what should the system do," e.g.:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-correctness"},"Correctness")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-testability"},"Testability")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-maintainability"},"Maintainability")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#4-low-latency"},"Low Latency")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#5-high-throughput"},"High Throughput")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#6-robustness"},"Robustness")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#7-resiliency"},"Resiliency")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#8-efficiency"},"Efficiency")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#9-developer-productivity"},"Developer Productivity"))),(0,r.kt)("p",null,"In this article, from the perspective of application architecture, we are going to look at some design elements that we can apply to our ZIO applications to make them more ergonomic and maintainable."),(0,r.kt)("h2",{id:"1-correctness"},"1. Correctness"),(0,r.kt)("p",null,"Correctness is the ability of a system to do what it is supposed to do. ZIO provides us correctness property through local reasoning because of referential transparency and its type-safety."),(0,r.kt)("p",null,"When we have referential transparency, we do not need to look at the whole program to understand the behavior of a piece of code. We can reason about the application behavior locally and then make sure that all components work together correctly, from button to top."),(0,r.kt)("p",null,"The type system of ZIO also prevents us to introduce common bugs at runtime. Here are two examples:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resource Management"),"\u2014 When we have a ZIO effect that has a type of ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO[Scope, IOException, FileInputStream]"),", we can be sure that this effect will open a resource, and we should care about closing it. So then by using ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.scoped(effect)")," we can be sure that the resource will be closed after the effect is executed and the type of effect will be changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO[Any, IOException, FileInputStream"),". To learn more about ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.scoped")," and resource management using ",(0,r.kt)("inlineCode",{parentName:"p"},"Scope"),", please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/reference/resource/scope"},"Scope")," of the ",(0,r.kt)("a",{parentName:"p",href:"/reference/resource/"},"resource management"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Error Management"),"\u2014 In ZIO errors are typed, so we can describe all possible errors that can happen in our effect. And from the correctness perspective, the type system helps us to be sure we have handled all errors or not. For example, if we have an effect of type ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO[Any, IOException, FileInputStream]"),", by looking at the effect type, we can be sure the effect is exceptional, and we should handle its error. To learn more about error management in ZIO, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/reference/error-management/"},"error management")," section."))),(0,r.kt)("h2",{id:"2-testability"},"2. Testability"),(0,r.kt)("p",null,"ZIO has a strong focus on testability which supports:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Property-based Checking"),(0,r.kt)("li",{parentName:"ol"},"Testing Effectful and Asynchronous Codes"),(0,r.kt)("li",{parentName:"ol"},"Testing Passages of Time"),(0,r.kt)("li",{parentName:"ol"},"Sharing Layers Between Specs"),(0,r.kt)("li",{parentName:"ol"},"Resource Management While Testing"),(0,r.kt)("li",{parentName:"ol"},"Dynamic Test Generation"),(0,r.kt)("li",{parentName:"ol"},"Test Aspects (AOP)"),(0,r.kt)("li",{parentName:"ol"},"Non-flaky Tests")),(0,r.kt)("p",null,"To learn more about testing in ZIO, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/reference/test/"},"testing")," section."),(0,r.kt)("h2",{id:"3-maintainability"},"3. Maintainability"),(0,r.kt)("p",null,"When we use ZIO, we take advantage of both functional and object-oriented programming paradigms to make our code maintainable:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"By using functional programming we can make sure that our code is correct, readable, testable, and reusable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The object-oriented programming paradigm helps us to make our code well-organized and highly cohesive by using objects, packages, and modules."))),(0,r.kt)("p",null,"The ZIO's support for type safety is another factor that makes our code maintainable, especially when we refactor our codes we can be sure that we are not breaking anything."),(0,r.kt)("h2",{id:"4-low-latency"},"4. Low Latency"),(0,r.kt)("p",null,"Latency is the time it takes for a request to be processed and a response to be returned. ZIO is designed to support low latency applications by providing various concurrency and parallelism tools such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.foreachPar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Fiber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue"),", etc. To learn more about concurrency and parallelism in ZIO, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/reference/concurrency/"},"concurrency")," section."),(0,r.kt)("h2",{id:"5-high-throughput"},"5. High Throughput"),(0,r.kt)("p",null,"ZIO fibers are lightweight threads (green threads). They are very cheap to create and destroy. So we can potentially have thousands of fibers running in parallel on a single machine, which helps us to achieve high throughput:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def doWork(n: Int): ZIO[Any, Nothing, Unit] =  ??? \n  \n  def run =\n    ZIO\n      .foreach(1 to 100000)(n => doWork(n).fork)\n      .flatMap(f => Fiber.collectAll(f).join)\n}\n")),(0,r.kt)("p",null,"Other than low-level concurrency tools like ",(0,r.kt)("inlineCode",{parentName:"p"},"Fiber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),", etc., ZIO Streams is a high-level abstraction for processing high-throughput data streams:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stream._\n\nobject MainApp extends ZIOAppDefault {\n  def doWork(n: Int): ZIO[Any, Nothing, Unit] =  ??? \n\n  def run =\n    ZStream\n      .fromIterable(1 to 100000)\n      .mapZIOParUnordered(Int.MaxValue)(doWork)\n      .runDrain\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The above examples are just for demonstration purposes. In real-world applications, depending on the nature of the problem to reach a better performance it may be better to control the level of parallelism instead of using unbounded parallelism.")),(0,r.kt)("p",null,"Another factor that helps us to achieve high throughput is the fact that we may have high workloads for some periods. In such cases, we can benefit from buffering the incoming requests instead of rejecting them and trying to process them later. We can use ",(0,r.kt)("a",{parentName:"p",href:"/reference/concurrency/queue"},(0,r.kt)("inlineCode",{parentName:"a"},"Queue"))," for this purpose or the ",(0,r.kt)("a",{parentName:"p",href:"/reference/stream/zstream/operations#buffering"},(0,r.kt)("inlineCode",{parentName:"a"},"ZStream#buffer")," operator"),"."),(0,r.kt)("p",null,"To learn more about ZIO Streams, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/reference/stream/"},"ZIO Streams")," section."),(0,r.kt)("h2",{id:"6-robustness"},"6. Robustness"),(0,r.kt)("p",null,"With the help of ZIO's error channel, we can write applications whose errors are fully specified and handled at the compile time. Having this feature helps us to make our applications more robust."),(0,r.kt)("p",null,"It also gives us the ability to lossless translation of errors from one domain to another. For example, when writing a web application, we can reliably translate errors inside the application to HTTP response codes. ZIO uses the compile to ensure that we have mapped all possible errors to HTTP response codes."),(0,r.kt)("p",null,"To learn more about error management in ZIO, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/reference/error-management/"},"error management")," section."),(0,r.kt)("h2",{id:"7-resiliency"},"7. Resiliency"),(0,r.kt)("p",null,"For resiliency, we can use ZIO's retry operator along with the retry policy to make our application resilient to failures. ",(0,r.kt)("inlineCode",{parentName:"p"},"Schedule")," is a powerful composable data type that helps us to compose multiple policies together and make a complex retry policy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  sealed trait DownloadError    extends Throwable\n  case object BandwidthExceeded extends DownloadError\n  case object NetworkError      extends DownloadError\n\n  // flaky api\n  def download(id: String): ZIO[Any, DownloadError, Array[Byte]] = ???\n\n  def isRecoverable(e: DownloadError): Boolean =\n    e match {\n      case BandwidthExceeded => false\n      case NetworkError      => true\n    }\n\n  val policy =\n    (Schedule.recurs(20) &&\n      Schedule.exponential(100.millis))\n      .whileInput(isRecoverable)\n\n  def run = download("123").retry(policy)\n}\n')),(0,r.kt)("p",null,"To learn more about resiliency and scheduling in ZIO, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/reference/schedule/"},"resiliency")," section."),(0,r.kt)("h2",{id:"8-efficiency"},"8. Efficiency"),(0,r.kt)("p",null,"ZIO is designed to be extraordinarily efficient. Let's take a look at some of the features that make ZIO efficient:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"ZIO Streams are pull-based, so the source of the stream starts producing elements only when the stream is consumed. This lazy semantic helps us to avoid unnecessary work and save resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'def downloadAsCsv(id: String): ZStream[Db, IOException, Byte] =\n  jdbc\n    .selectMany(sql"SELECT * FROM events WHERE userId = $id")\n    .map(toCSV)\n    .via(ZPipeline.utf8Encode)\n    .via(ZPipeline.gzip)\n')),(0,r.kt)("p",null,"In the above example, tries to consume a minimum amount of computation that is necessary. So if we use this workflow in a web application, when the client downloads half of the CSV file, only half of the data will be pulled from the database. So we can save resources and infrastructure costs."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"ZIO is designed to be interruptible (unlike the ",(0,r.kt)("inlineCode",{parentName:"li"},"Future")," in Scala). So we can cancel any running effect at any time. This feature enables us to have efficient high-level operators such as ",(0,r.kt)("inlineCode",{parentName:"li"},"ZIO#race")," on top of the ZIO interruption model. With ",(0,r.kt)("inlineCode",{parentName:"li"},"race")," we can run two different workflows in parallel and the loser of the workflow will be canceled:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val loaded = loadFromCache(productId).race(loadFromDb(productId))\n")),(0,r.kt)("p",null,"Or if we do a bunch of things in parallel and one of those things fails, all the other ones which are currently running in parallel will be canceled automatically:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val aggregated =\n  ZIO.foreach(account.statements) { statement =>\n    downloadStatement(statement.s3Bucket) \n  }.map(aggregateStatements(_))\n")),(0,r.kt)("p",null,"If we timeout a workflow in ZIO, once the timeout is reached, the workflow will be canceled automatically:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val timedOut = aggregated.timeout(10.seconds)\n")),(0,r.kt)("p",null,"So in the above example, all running workflows will be simultaneously canceled once the timeout is reached and all resources will be released."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Another ZIO feature that helps us to have efficient workflows is its resource management. ZIO provides a great model for resource management with the help of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Scope")," data type. ",(0,r.kt)("inlineCode",{parentName:"li"},"Scope")," is a contextual data type that whenever appears in the environment of an effect, denotes this effect will open one or more resources. Using ",(0,r.kt)("inlineCode",{parentName:"li"},"ZIO.scoped")," we can ensure that all resources enclosed in this operator will be automatically released once the effect is completed or interrupted:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport scala.io.BufferedSource\n\ndef source(name: String): ZIO[Scope, Throwable, BufferedSource] =\n  ZIO.acquireRelease(ZIO.attemptBlocking(scala.io.Source.fromFile(name)))(s => ZIO.succeedBlocking(s.close()))\n\nval fileContent: ZIO[Any, Throwable, String] =\n  ZIO.scoped {\n    source("file.txt").map(_.getLines()).map(_.mkString("\\n"))\n  }\n')),(0,r.kt)("p",null,"In the above example, if we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fileContent")," effect, we can be sure that the file handler will be released regardless of whether the effect is completed or interrupted."),(0,r.kt)("p",null,"To learn more about resource management in ZIO, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/reference/resource/scope"},"resource management")," section."),(0,r.kt)("h2",{id:"9-developer-productivity"},"9. Developer Productivity"),(0,r.kt)("p",null,"Developer experience and productivity are very important for choosing a technology for any large-scala and long-running project. Let's take a look at some features that make ZIO a great fit for developer productivity:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Referential Transparency and Purity"),(0,r.kt)("li",{parentName:"ol"},"Composable Data Types"),(0,r.kt)("li",{parentName:"ol"},"Type-safety and Compile time Error Checking"),(0,r.kt)("li",{parentName:"ol"},"Easy to Refactor"),(0,r.kt)("li",{parentName:"ol"},"Discoverability",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Dot completion when developing with IDEs"),(0,r.kt)("li",{parentName:"ol"},"Consistent naming conventions"))),(0,r.kt)("li",{parentName:"ol"},"Concise and Expressive API with Minimal Boilerplate"),(0,r.kt)("li",{parentName:"ol"},"Expressive Compiler Errors"),(0,r.kt)("li",{parentName:"ol"},"Empowering Meta-programming and Macros"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-maintainability"},"Maintainability")),(0,r.kt)("li",{parentName:"ol"},"Observability",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../ecosystem/officials/zio-logging.md"},"Logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../ecosystem/officials/zio-telemetry.md"},"Tracing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/observability/metrics/"},"Metrics")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/guides/migrate/zio-2.x-migration-guide#debugging"},"Debugging Facilities")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/guides/migrate/zio-2.x-migration-guide#compile-time-execution-tracing"},"Compile-time Execution Tracing")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/reference/di/automatic-layer-construction"},"Automatic Dependency Graph Generation")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/reference/test/"},"Testability")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=QDleESXlZJw"},"Programming Without Type Classes")),(0,r.kt)("li",{parentName:"ol"},"Rich Ecosystem",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Massive Amount of Libraries and Tools on JVM"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ecosystem/officials/"},"ZIO Official libraries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ecosystem/community/"},"ZIO community libraries"))))))}m.isMDXComponent=!0}}]);