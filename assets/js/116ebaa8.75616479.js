"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[14734],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>m});var l=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,l,t=function(e,n){if(null==e)return{};var a,l,t={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=l.createContext({}),p=function(e){var n=l.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=p(e.components);return l.createElement(s.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),g=p(a),d=t,m=g["".concat(s,".").concat(d)]||g[d]||c[d]||o;return a?l.createElement(m,i(i({ref:n},u),{},{components:a})):l.createElement(m,i({ref:n},u))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[g]="string"==typeof e?e:t,i[1]=r;for(var p=2;p<o;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},43932:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var l=a(58168),t=(a(96540),a(15680));const o={id:"zflow",title:"Defining flows"},i="Defining flows",r={unversionedId:"zio-flow/zflow",id:"zio-flow/zflow",title:"Defining flows",description:"Overview",source:"@site/docs/zio-flow/zflow.md",sourceDirName:"zio-flow",slug:"/zio-flow/zflow",permalink:"/zio-flow/zflow",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-flow/zflow.md",tags:[],version:"current",frontMatter:{id:"zflow",title:"Defining flows"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Flow",permalink:"/zio-flow/"},next:{title:"Remote",permalink:"/zio-flow/remote"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Flow control",id:"flow-control",level:2},{value:"Logging",id:"logging",level:2},{value:"Variables",id:"variables",level:2},{value:"Iteration and recursion",id:"iteration-and-recursion",level:2},{value:"Fibers",id:"fibers",level:2},{value:"The external world",id:"the-external-world",level:2},{value:"Input",id:"input",level:3},{value:"Time",id:"time",level:3},{value:"Random",id:"random",level:3},{value:"Activities",id:"activities",level:3},{value:"Scheduling",id:"scheduling",level:2},{value:"Transactions",id:"transactions",level:2}],u={toc:p},g="wrapper";function c(e){let{components:n,...a}=e;return(0,t.yg)(g,(0,l.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"defining-flows"},"Defining flows"),(0,t.yg)("h2",{id:"overview"},"Overview"),(0,t.yg)("p",null,"ZIO Flow is based on defining executable workflows as values of the type ",(0,t.yg)("inlineCode",{parentName:"p"},"ZFlow[R, E, A]"),". This type is similar\nto ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO[R, E, A]")," in\nthat it represents a program as a value that can fail with the type ",(0,t.yg)("inlineCode",{parentName:"p"},"E")," or succeed with the type ",(0,t.yg)("inlineCode",{parentName:"p"},"A"),". The most important\ndifference is\nthat a ",(0,t.yg)("inlineCode",{parentName:"p"},"ZFlow")," value is ",(0,t.yg)("em",{parentName:"p"},"serializable"),", which means that it can be sent over the network for a remote ",(0,t.yg)("em",{parentName:"p"},"executor"),"."),(0,t.yg)("p",null,"When working with ",(0,t.yg)("inlineCode",{parentName:"p"},"ZFlow")," programs, another core concept of ZIO Flow is ",(0,t.yg)("em",{parentName:"p"},"remote values"),".\nThere ",(0,t.yg)("a",{parentName:"p",href:"/zio-flow/remote"},"is a separate section")," about working\nwith remote values and remote functions. In this section we will focus on how to define flows and we can assume that\nremote values and functions\nwork similarly to regular Scala values and functions."),(0,t.yg)("h2",{id:"flow-control"},"Flow control"),(0,t.yg)("p",null,"The basic building blocks of defining a ",(0,t.yg)("inlineCode",{parentName:"p"},"ZFlow")," workflow are similar to ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO"),". We can use ",(0,t.yg)("inlineCode",{parentName:"p"},"succeed")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"fail")," to create\na flow that finishes\nwith a result immediately:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.{ZNothing, durationInt}\nimport zio.flow._\n\nval flow1 = ZFlow.succeed(100)\n// flow1: ZFlow[Any, ZNothing, Int] = Return(\n//   value = Literal(value = Primitive(value = 100, standardType = int))\n// )\nval flow2 = ZFlow.fail("Failed")\n// flow2: ZFlow[Any, String, ZNothing] = Fail(\n//   error = Literal(value = Primitive(value = "Failed", standardType = string))\n// )\n')),(0,t.yg)("p",null,"Note that the above code does not run anything; it just defines workflows as serializable values of the type ",(0,t.yg)("inlineCode",{parentName:"p"},"ZFlow"),"\nthat can be later sent\nto an executor. In the future code examples we will not show the evaluated ",(0,t.yg)("inlineCode",{parentName:"p"},"ZFlow")," values as they can be very verbose."),(0,t.yg)("p",null,"The usual ",(0,t.yg)("inlineCode",{parentName:"p"},"map"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"flatMap"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"as"),", and variants of ",(0,t.yg)("inlineCode",{parentName:"p"},"zip")," are all available on ",(0,t.yg)("inlineCode",{parentName:"p"},"ZFlow")," so we can use ",(0,t.yg)("em",{parentName:"p"},"for comprehensions"),"\nto define them:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"val flow3 = \n    for {\n        a <- ZFlow.succeed(100)\n        b <- ZFlow.succeed(200)\n    } yield a + b\n")),(0,t.yg)("p",null,"To handle failures we have ",(0,t.yg)("inlineCode",{parentName:"p"},"catchAll"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"orElse"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"foldFlow")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"ensuring"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val flow4 = ZFlow.fail("Failed").ensuring(ZFlow.log("Flow 4 finished"))\nval flow5 = ZFlow.fail("Failed").orElse(ZFlow.succeed(1))\nval flow6 =\n  ZFlow\n    .fail("Failed")\n    .catchAll { (failure: Remote[String]) => \n      ZFlow.log(rs"Failed with $failure") *> ZFlow.succeed(1) \n    }\n')),(0,t.yg)("h2",{id:"logging"},"Logging"),(0,t.yg)("p",null,"The simplest way to interact with the outside world from a ZIO Flow program is to log a message:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val flow7 = ZFlow.log("Hello world")\n')),(0,t.yg)("p",null,"The logged message goes to the log output of the executor tagged by the running flow's identifier."),(0,t.yg)("h2",{id:"variables"},"Variables"),(0,t.yg)("p",null,"Persistent variables are named mutable slots belonging to a specific flow. They can be used to communicate between\ndifferent,\npossibly parallel steps of a flow, and to expose some observable flow state for debugging purposes. They are similar to\nthe ",(0,t.yg)("inlineCode",{parentName:"p"},"Ref")," data type in ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val flow8 = \n  for {\n    var1   <- ZFlow.newVar("var1", 100)\n    _      <- var1.update(_ + 1)\n    result <- var1.get\n  } yield result\n')),(0,t.yg)("h2",{id:"iteration-and-recursion"},"Iteration and recursion"),(0,t.yg)("p",null,"There are multiple ways to repeat the execution of a flow."),(0,t.yg)("p",null,"The simplest one is ",(0,t.yg)("inlineCode",{parentName:"p"},"replicate")," that repeats the flow a given number of times:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val flow9 = ZFlow.log("hello").replicate(10)\n')),(0,t.yg)("p",null,"A more complex way is using ",(0,t.yg)("inlineCode",{parentName:"p"},"iterate")," which allows you to define a ",(0,t.yg)("em",{parentName:"p"},"step function")," and a ",(0,t.yg)("em",{parentName:"p"},"condition"),"\nand repeats the flow until the condition becomes true. The initial value is the flow's result itself:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val flow10 = ZFlow.log("hello").as(1).iterate((x: Remote[Int]) => x + 1)(_ === 10) \n')),(0,t.yg)("p",null,"The result of the flow will be the final value of the iterated variable, in this case ",(0,t.yg)("inlineCode",{parentName:"p"},"10"),". Note the use of the triple\nequal operator (",(0,t.yg)("inlineCode",{parentName:"p"},"==="),") instead of the usual double (",(0,t.yg)("inlineCode",{parentName:"p"},"=="),"). This is a limitation of the ",(0,t.yg)("em",{parentName:"p"},"remote types"),",\ncovered ",(0,t.yg)("a",{parentName:"p",href:"remote"},"in the next section"),"."),(0,t.yg)("p",null,"Another two operators on flows are ",(0,t.yg)("inlineCode",{parentName:"p"},"recurseSimple")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"recurse"),". Why can't we just write recursive Scala functions as\nusual?\nLet's take the following example:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"def recursiveFlow1(n: Remote[Int]): ZFlow[Any, Nothing, Int] =\n  ZFlow.ifThenElse(n === 10)(\n    ifTrue = ZFlow.succeed(10),\n    ifFalse = recursiveFlow1(n + 1).map(_ + 1)\n  )\nval flow11Bad = recursiveFlow1(0)\n")),(0,t.yg)("p",null,"Note that we cannot use Scala ",(0,t.yg)("inlineCode",{parentName:"p"},"if () {} else {}")," expressions because they are not serializable. The ",(0,t.yg)("inlineCode",{parentName:"p"},"ifThenElse")," method\ndefined on ",(0,t.yg)("inlineCode",{parentName:"p"},"Remote[Boolean]"),"\nis an alternative of that, explained ",(0,t.yg)("a",{parentName:"p",href:"remote"},"in the next section"),".\nEven though the above code compiles, it is not serializable! ZIO Flow has no way to detect that the call\nto ",(0,t.yg)("inlineCode",{parentName:"p"},"recursiveFlow1")," is a recursion point\nand it would end up in a stack overflow."),(0,t.yg)("p",null,"The same example can be safely implemented by using the ",(0,t.yg)("inlineCode",{parentName:"p"},"recurseSimple")," operator:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"val flow11Good = \n  ZFlow.recurseSimple[Any, ZNothing, Int](0) { case (value, rec) =>\n    ZFlow.ifThenElse(value === 10)(\n      ifTrue = ZFlow.succeed(value),\n      ifFalse = rec(value + 1)\n    )\n  }\n")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"recurse")," is a slightly more complicated variant that allows the recursion body to have a different result type than the\ninitial value.\nThis usually requires specifying some type parameters by hand, so in simple cases ",(0,t.yg)("inlineCode",{parentName:"p"},"recurseSimple")," leads to cleaner code."),(0,t.yg)("p",null,"ZIO Flow also has ",(0,t.yg)("inlineCode",{parentName:"p"},"foreach")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"foreachPar")," to execute a flow for each element of a list:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val flow12 = ZFlow.foreach(List(1, 2, 3)) { x => ZFlow.log(rs"${x.toString}") }\nval flow13 = ZFlow.foreachPar(List(1, 2, 3)) { x => ZFlow.log(rs"${x.toString}") }\n')),(0,t.yg)("h2",{id:"fibers"},"Fibers"),(0,t.yg)("p",null,"ZIO Flow programs can fork ",(0,t.yg)("em",{parentName:"p"},"fibers")," for parallel execution, similar to how ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO")," programs does it. The ",(0,t.yg)("inlineCode",{parentName:"p"},"fork")," operator\nreturns\na value of ",(0,t.yg)("inlineCode",{parentName:"p"},"ExecutingFlow[E, A]")," which can be used to await or interrupt the execution of the child fiber."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"val flow14 =\n  for {\n    fiber1 <- ZFlow.sleep(5.minutes).fork\n    fiber2 <- ZFlow.sleep(1.hour).fork\n    _      <- fiber2.interrupt\n    _      <- fiber2.await\n  } yield ()\n")),(0,t.yg)("p",null,"It is often useful to ",(0,t.yg)("em",{parentName:"p"},"timeout")," after a given duration, for example when waiting for a fiber to finish. This can be done\nusing the ",(0,t.yg)("inlineCode",{parentName:"p"},"timeout")," operator:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"val flow15 = ZFlow.sleep(1.hour).timeout(10.seconds)\n")),(0,t.yg)("h2",{id:"the-external-world"},"The external world"),(0,t.yg)("p",null,"There are other ways for ZIO Flow programs to communicate with the external world than just logging messages. The main\ncategories are:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Getting an input for the execution of the flow"),(0,t.yg)("li",{parentName:"ul"},"Accessing some built-in services such as time and random generator"),(0,t.yg)("li",{parentName:"ul"},"Accessing external services")),(0,t.yg)("h3",{id:"input"},"Input"),(0,t.yg)("p",null,"ZIO Flow programs has a third type parameter, ",(0,t.yg)("inlineCode",{parentName:"p"},"R"),", which was not used in the above examples. This represents the ",(0,t.yg)("em",{parentName:"p"},"input"),"\nof the flow. When sending\na flow to an executor, if the R type is not ",(0,t.yg)("inlineCode",{parentName:"p"},"Any"),", you also have to provide an input value of type ",(0,t.yg)("inlineCode",{parentName:"p"},"R")," as a ",(0,t.yg)("em",{parentName:"p"},"parameter\nof the execution"),"."),(0,t.yg)("p",null,"To access this value from the flow, we can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"input")," operator:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"val flow16 = ZFlow.input[Int]\n// flow16: ZFlow[Int, ZNothing, Int] = Input()\n")),(0,t.yg)("p",null,"Note that the result type is now ",(0,t.yg)("inlineCode",{parentName:"p"},"ZFlow[Int, ZNothing, Int]"),". The flow will ",(0,t.yg)("em",{parentName:"p"},"read the input"),", and use it as its result."),(0,t.yg)("p",null,"When composing flows, you may want to eliminate the input requirement of a sub-flow. This can be done using\nthe ",(0,t.yg)("inlineCode",{parentName:"p"},"provide")," operator:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"val flow17 = ZFlow.input[Int].provide(100)\n// flow17: ZFlow[Any, ZNothing, Int] = Provide(\n//   value = Literal(value = Primitive(value = 100, standardType = int)),\n//   flow = Input()\n// )\n")),(0,t.yg)("p",null,"The result type is now ",(0,t.yg)("inlineCode",{parentName:"p"},"ZFlow[Any, ZNothing, Int]"),". This flow has no input requirement, and will always return ",(0,t.yg)("inlineCode",{parentName:"p"},"100"),"."),(0,t.yg)("h3",{id:"time"},"Time"),(0,t.yg)("p",null,"Getting the current time is an important operation for ZIO Flow workflows because it allows time based schedules,\ngenerating timestamps or expiration times, etc."),(0,t.yg)("p",null,"To get the current time as a remote value of ",(0,t.yg)("inlineCode",{parentName:"p"},"Instant"),", use:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"val flow18 = ZFlow.now\n")),(0,t.yg)("h3",{id:"random"},"Random"),(0,t.yg)("p",null,"The flow may need to generate random values like random numbers, UUIDs etc. The ",(0,t.yg)("inlineCode",{parentName:"p"},"ZFlow")," type has two random related\noperators:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val flow19 = ZFlow.random.map(double => rs"Random double: ${double.toString}")\nval flow20 = ZFlow.randomUUID.map(uuid => rs"Random UUID: ${uuid.toString}")\n')),(0,t.yg)("p",null,"There are higher level random functions exposed on ",(0,t.yg)("inlineCode",{parentName:"p"},"zio.flow.Random"),", reflecting the ZIO ",(0,t.yg)("inlineCode",{parentName:"p"},"Random")," service's\nfunctionalities:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"val flow21 = Random.nextIntBetween(10, 100)\nval flow22 = Random.nextString(16)\n")),(0,t.yg)("h3",{id:"activities"},"Activities"),(0,t.yg)("p",null,"The primary way to communicate with the external world is by using ",(0,t.yg)("em",{parentName:"p"},"activities"),". An activity is defined by the\ntype ",(0,t.yg)("inlineCode",{parentName:"p"},"Activity")," and\nit is a description of how to call an external service and how it should behave when it is used in ",(0,t.yg)("em",{parentName:"p"},"transactions"),".\nThe ",(0,t.yg)("a",{parentName:"p",href:"/zio-flow/activities"},"activities"),"\nsection explains in detail how to define and use activities."),(0,t.yg)("h2",{id:"scheduling"},"Scheduling"),(0,t.yg)("p",null,"We have seen that ZIO Flow programs can access the current time, and ways to repeat the execution of a part of the flow.\nOften we want to\neither delay the execution of something or repeat it at a given interval."),(0,t.yg)("p",null,"The two most simple operators are ",(0,t.yg)("inlineCode",{parentName:"p"},"sleep")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"waitTill"),". Sleep will delay the execution of the flow for a given\nduration:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"val flow23 = ZFlow.sleep(10.seconds)\n")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"waitTill")," operator will delay the execution of the flow until a given instant:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val flow24 = ZFlow.waitTill(Instant.parse("2022-12-12T10:00:00Z"))\n')),(0,t.yg)("p",null,"ZIO Flow also defines a data type for describing more complex schedules. This type is ",(0,t.yg)("inlineCode",{parentName:"p"},"ZFlowSchedule")," and it can be used\nas a parameter to\nthe ",(0,t.yg)("inlineCode",{parentName:"p"},"schedule")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"repeat")," opeators on ",(0,t.yg)("inlineCode",{parentName:"p"},"ZFlow"),":"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"schedule")," will execute the flow once, according to the given schedule"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"repeat")," will execute the flow immeditely and then repeat it according to the given schedule")),(0,t.yg)("p",null,"The following example logs a message every second:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val flow25 = ZFlow.log("hello").repeat(ZFlowSchedule.fixed(1.second))\n')),(0,t.yg)("p",null,"Other than fixed there are some other schedule contructors for defining hourly, daily or monthly schedules:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val flow26 = ZFlow.log("hello").repeat(ZFlowSchedule.everyHourAt(11, 0))\nval flow27 = ZFlow.log("hello").repeat(ZFlowSchedule.everyDayAt(15, 30, 0))\nval flow28 = ZFlow.log("hello").repeat(ZFlowSchedule.everyMonthAt(1, 12, 0, 0))\n')),(0,t.yg)("p",null,"It is possible to define more complex schedules by using the ",(0,t.yg)("inlineCode",{parentName:"p"},"or")," (or ",(0,t.yg)("inlineCode",{parentName:"p"},"|"),") operator. The following example will log a\nmessage every hour twice:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val flow29 = ZFlow.log("hello").repeat(\n  ZFlowSchedule.everyHourAt(11, 0) | ZFlowSchedule.everyHourAt(44, 30) \n)\n')),(0,t.yg)("p",null,"To limit the number of repetions of a schedule, use ",(0,t.yg)("inlineCode",{parentName:"p"},"maxCount"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val flow30 = ZFlow.log("hello").repeat(\n  ZFlowSchedule.fixed(1.second).maxCount(10)\n)\n')),(0,t.yg)("h2",{id:"transactions"},"Transactions"),(0,t.yg)("p",null,"ZIO Flow programs can modify variables and perform ",(0,t.yg)("em",{parentName:"p"},"activities")," in a ",(0,t.yg)("em",{parentName:"p"},"transactional way"),". When transactions are used in\na single fiber, it guarantees that in case of failure all the undoable activities performed within the transactions are\nrolled back."),(0,t.yg)("p",null,"To learn more about how activities can be rolled back ",(0,t.yg)("a",{parentName:"p",href:"activities"},"check the activities page"),"."),(0,t.yg)("p",null,"When using transactions in parallel running ZFlow fibers, the transactions are also tracking the usage of remote variables.\nIf two transactional fibers are modifying the same variable, one of them will ",(0,t.yg)("em",{parentName:"p"},"retry")," to make sure the whole transaction remains\nconsistent."),(0,t.yg)("p",null,"The following simple example shows how the traditional problem of parallel modification of a mutable variable can be solved using ZIO Flow transactions:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val flow31 =\n  for {\n    var1 <- ZFlow.newVar[Int]("var1", 10)\n    now  <- ZFlow.now\n    fib1 <- ZFlow.transaction { _ =>\n      for {\n        v1 <- var1.get\n        _ <- var1.set(v1 + 1)\n      } yield ()\n    }.fork\n    fib2 <- ZFlow.transaction { _ =>\n      for {\n        v1 <- var1.get\n        _ <- var1.set(v1 + 1)\n      } yield ()\n    }.fork\n    _  <- fib1.await\n    _  <- fib2.await\n    result <- var1.get\n  } yield result\n')),(0,t.yg)("p",null,"This will always return ",(0,t.yg)("inlineCode",{parentName:"p"},"12")," because in case of conflict one of the transactions will be retried."),(0,t.yg)("p",null,"It is also possible to ",(0,t.yg)("em",{parentName:"p"},"conditionally retry")," a transaction. By passing a remote boolean expression, the transaction will\nevaluate the condition and in case it is ",(0,t.yg)("inlineCode",{parentName:"p"},"false")," it will undo everything the transaction did and retry it. It also ",(0,t.yg)("em",{parentName:"p"},"suspends"),"\nthe execution of the retried transactions until any of the variables used in the transaction up to the evaluation of the condition\nchanges. This way it avoids repeated evaluation and failure of the flow."),(0,t.yg)("p",null,"The following example will retry the transaction two times:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'val flow32 =\n  for {\n    variable <- ZFlow.newVar("var", 0)\n    fiber <- ZFlow.transaction { tx =>\n               for {\n                 value <- variable.get\n                 _     <- ZFlow.log("Transaction executed")\n                 _     <- tx.retryUntil(value === 2)\n               } yield value\n             }.fork\n    _      <- ZFlow.sleep(1.second)\n    _      <- variable.set(1)\n    _      <- ZFlow.sleep(1.second)\n    _      <- variable.set(2)\n    _      <- ZFlow.log("Waiting for the transaction fiber to stop")\n    result <- fiber.await\n  } yield result\n')))}c.isMDXComponent=!0}}]);