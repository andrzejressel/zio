"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[23858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,m=c["".concat(o,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"http",title:"Http"},l=void 0,p={unversionedId:"zio-http/dsl/http",id:"zio-http/dsl/http",title:"Http",description:"Http is a functional domain that models HTTP applications. It\u2019s polymorphic on input and output type.",source:"@site/docs/zio-http/dsl/http.md",sourceDirName:"zio-http/dsl",slug:"/zio-http/dsl/http",permalink:"/zio-http/dsl/http",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/dsl/http.md",tags:[],version:"current",frontMatter:{id:"http",title:"Http"},sidebar:"ecosystem-sidebar",previous:{title:"Server",permalink:"/zio-http/dsl/server"},next:{title:"Request",permalink:"/zio-http/dsl/request"}},o={},s=[{value:"Creating an HTTP Application",id:"creating-an-http-application",level:2},{value:"HTTP application that always succeeds",id:"http-application-that-always-succeeds",level:3},{value:"HTTP application that always fails",id:"http-application-that-always-fails",level:3},{value:"HTTP application from a partial function",id:"http-application-from-a-partial-function",level:3},{value:"HTTP application from a total function",id:"http-application-from-a-total-function",level:3},{value:"Transforming Http Applications",id:"transforming-http-applications",level:2},{value:"Transforming the output",id:"transforming-the-output",level:3},{value:"Transforming the input",id:"transforming-the-input",level:3},{value:"Chaining handlers",id:"chaining-handlers",level:3},{value:"Folding a handler",id:"folding-a-handler",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"Catch all errors",id:"catch-all-errors",level:3},{value:"Mapping the error",id:"mapping-the-error",level:3},{value:"Composition of HTTP applications",id:"composition-of-http-applications",level:2},{value:"Using <code>++</code>",id:"using-",level:3},{value:"Using <code>&lt;&gt;</code>",id:"using--1",level:3},{value:"Using <code>&gt;&gt;&gt;</code>",id:"using--2",level:3},{value:"Using <code>&lt;&lt;&lt;</code>",id:"using--3",level:3},{value:"Providing environments",id:"providing-environments",level:2},{value:"Attaching Middleware",id:"attaching-middleware",level:2},{value:"Unit testing",id:"unit-testing",level:2},{value:"Special Constructors for Http and Handler",id:"special-constructors-for-http-and-handler",level:2},{value:"Handler.ok",id:"handlerok",level:3},{value:"Handler.text",id:"handlertext",level:3},{value:"Handler.status",id:"handlerstatus",level:3},{value:"Handler.error",id:"handlererror",level:3},{value:"Handler.response",id:"handlerresponse",level:3},{value:"Special operators on Handler",id:"special-operators-on-handler",level:2},{value:"withMethod",id:"withmethod",level:3},{value:"patch",id:"patch",level:3},{value:"Converting an <code>Http</code> to <code>App</code>",id:"converting-an-http-to-app",level:2},{value:"Running an App",id:"running-an-app",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Http")," is a functional domain that models HTTP applications. It\u2019s polymorphic on input and output type."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Http[-R, +E, -A, +B]")," models a function from ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO[R, Option[E], Handler[R, E, A, B]]"),".\nWhen a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," is evaluated against an ",(0,r.kt)("inlineCode",{parentName:"p"},"Http[R,E,A,B]"),", it can either succeed with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler"),", fail with\na ",(0,r.kt)("inlineCode",{parentName:"p"},"Some[E]")," or if ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," is not defined in the application, fail with ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Handler[-R, +E, -A, +B]")," models a function that takes an ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", possibly failing with an ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," and using\na ZIO effect. A handler can always succeed with a value (or fail) no matter what its input is."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Http")," on the other hand can decide to not handle a particular input, so it adds input based ",(0,r.kt)("em",{parentName:"p"},"routing")," on top of\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," type."),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Http")," provides several operators and constructors to model the application as per your use case."),(0,r.kt)("h2",{id:"creating-an-http-application"},"Creating an HTTP Application"),(0,r.kt)("h3",{id:"http-application-that-always-succeeds"},"HTTP application that always succeeds"),(0,r.kt)("p",null,"To create an HTTP application that always returns the same response and never fails, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"succeed"),"\nconstructor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.http._\n\nval app1: Http[Any, Nothing, Any, Int] = Handler.succeed(1).toHttp\n")),(0,r.kt)("h3",{id:"http-application-that-always-fails"},"HTTP application that always fails"),(0,r.kt)("p",null,"To create an HTTP application that always fails with the given error, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fail")," constructor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val app2: Http[Any, Error, Any, Nothing] = Handler.fail(new Error("Error_Message")).toHttp\n')),(0,r.kt)("p",null,"HTTP applications can also be created from total and partial functions. These are some constructors to create HTTP\napplications from total as well as partial functions."),(0,r.kt)("h3",{id:"http-application-from-a-partial-function"},"HTTP application from a partial function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Http.collect")," can create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Http[Any, Nothing, A, B]")," from a ",(0,r.kt)("inlineCode",{parentName:"p"},"PartialFunction[A, B]"),". In case the input is not defined\nfor the partial function, the application will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," type error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val app3: Http[Any, Nothing, String, String] =\n  Http.collect[String] {\n    case "case 1" => "response 1"\n    case "case 2" => "response 2"\n  }\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Http.collectZIO")," can be used to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Http[R, E, A, B]")," from a partial function that returns a ZIO effect,\ni.e ",(0,r.kt)("inlineCode",{parentName:"p"},"PartialFunction[A, ZIO[R, E, B]"),". This constructor is used when the output is effectful."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val app4: Http[Any, Nothing, String, String] =\n  Http.collectZIO[String] {\n    case "case 1" => ZIO.succeed("response 1")\n  }\n')),(0,r.kt)("h3",{id:"http-application-from-a-total-function"},"HTTP application from a total function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Handler.fromFunction")," can create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Http[Any, Nothing, A, B]")," from a function ",(0,r.kt)("inlineCode",{parentName:"p"},"f: A=>B"),". This can be converted to\na ",(0,r.kt)("inlineCode",{parentName:"p"},"Http")," which always routes to that given ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," by using ",(0,r.kt)("inlineCode",{parentName:"p"},"toHttp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val app5: Http[Any, Nothing, Int, Int] =\n  Handler.fromFunction[Int](i => i + 1).toHttp\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Handler.fromFunctionZIO")," can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Http[R, E, A, B]")," from a function that returns a ZIO effect,\ni.e ",(0,r.kt)("inlineCode",{parentName:"p"},"f: A => ZIO[R, E, B]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val app6: Http[Any, Nothing, Int, Int] =\n  Handler.fromFunctionZIO[Int](i => ZIO.succeed(i + 1)).toHttp\n")),(0,r.kt)("h2",{id:"transforming-http-applications"},"Transforming Http Applications"),(0,r.kt)("p",null,"Http operators are used to transform one or more HTTP applications to create a new HTTP application. Http domain\nprovides plenty of such powerful operators."),(0,r.kt)("h3",{id:"transforming-the-output"},"Transforming the output"),(0,r.kt)("p",null,"To transform the output of the HTTP application, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," operator . It takes a function ",(0,r.kt)("inlineCode",{parentName:"p"},"f: B=>C")," to convert\na ",(0,r.kt)("inlineCode",{parentName:"p"},"Http[R,E,A,B]"),"to ",(0,r.kt)("inlineCode",{parentName:"p"},"Http[R,E,A,C]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val app7: Http[Any, Nothing, Any, String] = Handler.succeed("text").toHttp\nval app8: Http[Any, Nothing, Any, Int] = app7.map(s => s.length())\n')),(0,r.kt)("p",null,"To transform the output of the HTTP application effectfully, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"mapZIO")," operator. It takes a\nfunction ",(0,r.kt)("inlineCode",{parentName:"p"},"B => ZIO[R1, E1, C]")," to convert a ",(0,r.kt)("inlineCode",{parentName:"p"},"Http[R,E,A,B]")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Http[R,E,A,C]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val app9: Http[Any, Nothing, Any, Int] = app7.mapZIO(s => ZIO.succeed(s.length()))\n")),(0,r.kt)("h3",{id:"transforming-the-input"},"Transforming the input"),(0,r.kt)("p",null,"To transform the input of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler"),", you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"contramap")," operator.\nBefore passing the input on to the HTTP application, ",(0,r.kt)("inlineCode",{parentName:"p"},"contramap")," applies a function ",(0,r.kt)("inlineCode",{parentName:"p"},"xa: X => A")," on it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val handler1: Handler[Any, Nothing, String, String] = Handler.fromFunction[String](s => s + ' ' + s)\nval app10: Http[Any, Nothing, Int, String] = handler1.contramap[Int](_.toString).toHttp\n")),(0,r.kt)("p",null,"To transform the input of the handler effectfully, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"contramapZIO")," operator. Before passing the\ninput on to the HTTP application, ",(0,r.kt)("inlineCode",{parentName:"p"},"contramapZIO")," applies a function ",(0,r.kt)("inlineCode",{parentName:"p"},"xa: X => ZIO[R1, E1, A]")," on it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val app11: Http[Any, Any, Int, String] = handler1.contramapZIO[Any, Any, Int](a => ZIO.succeed(a.toString)).toHttp\n")),(0,r.kt)("h3",{id:"chaining-handlers"},"Chaining handlers"),(0,r.kt)("p",null,"To chain two handlers applications, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap")," operator.It creates a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler[R1, E1, A1, C1]")," from the\noutput\nof a ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler[R,E,A,B]"),", using a function ",(0,r.kt)("inlineCode",{parentName:"p"},"f: B => Handler[R1, E1, A1, C1]"),". ",(0,r.kt)("inlineCode",{parentName:"p"},">>=")," is an alias for flatMap."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val handler2: Handler[Any, Nothing, Any, String] = Handler.succeed("text1")\nval handler3: Handler[Any, Nothing, Any, String] = handler2 >>= (s => Handler.succeed(s + " text2"))\n')),(0,r.kt)("h3",{id:"folding-a-handler"},"Folding a handler"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"foldHandler")," lets you handle the success and failure values of a handler. It takes in two functions, one for\nfailure and one for success, and one more handler."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the handler fails with ",(0,r.kt)("inlineCode",{parentName:"li"},"E")," the first function will be executed with ",(0,r.kt)("inlineCode",{parentName:"li"},"E"),","),(0,r.kt)("li",{parentName:"ul"},"If the application succeeds with ",(0,r.kt)("inlineCode",{parentName:"li"},"B"),", the second function will be executed with ",(0,r.kt)("inlineCode",{parentName:"li"},"B")," and")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val handler4: Handler[Any, String, String, String] = Handler.fromFunctionHandler[String] {\n  case "case" => Handler.fail("1")\n  case _ => Handler.succeed("2")\n}\nval handler5: Handler[Any, Nothing, String, String] = handler4.foldHandler(e => Handler.succeed(e), s => Handler.succeed(s))\n')),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"These are several ways in which error handling can be done in both the ",(0,r.kt)("inlineCode",{parentName:"p"},"Http")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," domains."),(0,r.kt)("h3",{id:"catch-all-errors"},"Catch all errors"),(0,r.kt)("p",null,"To catch all errors in case of failure of an HTTP application, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"catchAllZIO")," operator. It pipes the error to\na\nfunction ",(0,r.kt)("inlineCode",{parentName:"p"},"f: E => Http[R1, E1, A1, B1]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val app12: Http[Any, Throwable, Any, Nothing] = Handler.fail(new Throwable("Error_Message")).toHttp\nval app13: Http[Any, Nothing, Any, Option[Throwable]] = app12.catchAllZIO(e => ZIO.succeed(Option(e)))\n')),(0,r.kt)("h3",{id:"mapping-the-error"},"Mapping the error"),(0,r.kt)("p",null,"To transform the failure of an HTTP application, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"mapError")," operator. It pipes the error to a\nfunction ",(0,r.kt)("inlineCode",{parentName:"p"},"ee: E => E1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val app14: Http[Any, Throwable, Any, Nothing] = Handler.fail(new Throwable("Error_Message")).toHttp\nval app15: Http[Any, Option[Throwable], Any, Nothing] = app14.mapError(e => Option(e))\n')),(0,r.kt)("h2",{id:"composition-of-http-applications"},"Composition of HTTP applications"),(0,r.kt)("p",null,"HTTP applications can be composed using several special operators."),(0,r.kt)("h3",{id:"using-"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"++")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"++")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultWith"),". While using ",(0,r.kt)("inlineCode",{parentName:"p"},"++"),", if the first HTTP application returns ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," the second HTTP\napplication will be evaluated, ignoring the result from the first. If the first HTTP application is failing with\na ",(0,r.kt)("inlineCode",{parentName:"p"},"Some[E]")," the second HTTP application won't be evaluated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val app16: Http[Any, Nothing, String, String] = Http.collect[String] {\n  case "case 1" => "response 1"\n  case "case 2" => "response 2"\n}\nval app17: Http[Any, Nothing, String, String] = Http.collect[String] {\n  case "case 3" => "response 3"\n  case "case 4" => "response 4"\n}\nval app18: Http[Any, Nothing, String, String] = app16 ++ app17\n')),(0,r.kt)("h3",{id:"using--1"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"<>")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<>")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"orElse"),". While using ",(0,r.kt)("inlineCode",{parentName:"p"},"<>"),", if the first handler fails with ",(0,r.kt)("inlineCode",{parentName:"p"},"Some[E]"),", the second handler will be\nevaluated, ignoring the result from the first. This operator is not available on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Http")," level, to keep the rules of\napplying middlewares simple."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val handler6: Handler[Any, Nothing, Any, Int] = Handler.fail(1) <> Handler.succeed(2)\n")),(0,r.kt)("h3",{id:"using--2"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},">>>")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},">>>")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"andThen"),". It runs the first HTTP application and pipes the output into the other handler.\nThe right side must be a ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler"),", it cannot perform further routing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val app19: Http[Any, Nothing, Int, Int] = Handler.fromFunction[Int](a => a + 1).toHttp\nval handler7: Handler[Any, Nothing, Int, Unit] = Handler.fromFunctionZIO[Int](b => ZIO.debug(b * 2))\nval app20: Http[Any, Nothing, Int, Unit] = app19 >>> handler7\n")),(0,r.kt)("h3",{id:"using--3"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"<<<")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<<<")," is the alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"compose"),". Compose is similar to andThen, but it is only available on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," level.\nIt runs the second handler and pipes the output to the first handler."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val handler8: Handler[Any, Nothing, Int, Int] = Handler.fromFunction[Int](a => a + 1)\nval handler9: Handler[Any, Nothing, Int, Int] = Handler.fromFunction[Int](b => b * 2)\nval handler10: Handler[Any, Nothing, Int, Int] = handler8 <<< handler9\n")),(0,r.kt)("h2",{id:"providing-environments"},"Providing environments"),(0,r.kt)("p",null,"There are many operators to provide the HTTP application with its required environment, they work the same as the ones\non ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO"),"."),(0,r.kt)("h2",{id:"attaching-middleware"},"Attaching Middleware"),(0,r.kt)("p",null,"Middlewares are essentially transformations that one can apply to any ",(0,r.kt)("inlineCode",{parentName:"p"},"Http")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," to produce a new one. To\nattach middleware\nto the HTTP application, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"middleware")," operator. ",(0,r.kt)("inlineCode",{parentName:"p"},"@@")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"middleware"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RequestHandlerMiddleware")," applies to ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler"),"s converting a HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),". You can apply\na ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestHandlerMiddleware")," to both ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Http"),".\nWhen applying it to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Http"),", it is equivalent to applying it to all handlers the ",(0,r.kt)("inlineCode",{parentName:"p"},"Http")," can route to.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"HttpAppMiddleware")," applies only to ",(0,r.kt)("inlineCode",{parentName:"p"},"Http"),"s and they are capable of change the routing behavior."),(0,r.kt)("h2",{id:"unit-testing"},"Unit testing"),(0,r.kt)("p",null,"Since an HTTP application ",(0,r.kt)("inlineCode",{parentName:"p"},"Http[R, E, A, B]")," is a function from ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO[R, Option[E], B]"),", we can write unit tests\njust like we do for normal functions."),(0,r.kt)("p",null,"The below snippet tests an app that takes ",(0,r.kt)("inlineCode",{parentName:"p"},"Int")," as input and responds by adding 1 to the input."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test.Assertion.equalTo\nimport zio.test.{test, _}\n\nobject Spec extends ZIOSpecDefault {\n\n  def spec = suite("http")(\n    test("1 + 1 = 2") {\n      val app: Http[Any, Nothing, Int, Int] = Handler.fromFunction[Int](_ + 1).toHttp\n      assertZIO(app.runZIO(1))(equalTo(2))\n    }\n  )\n}\n')),(0,r.kt)("h1",{id:"what-is-app"},"What is App?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"App[-R]")," is a type alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"Http[R, Response, Request, Response]"),".\nZIO HTTP server runs ",(0,r.kt)("inlineCode",{parentName:"p"},"App[E]")," only. It is an application that takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," as an input, and it either produces\na successful ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," or in case of failure it produces also a ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", representing the failure message to be sent\nback."),(0,r.kt)("h2",{id:"special-constructors-for-http-and-handler"},"Special Constructors for Http and Handler"),(0,r.kt)("p",null,"These are some special constructors for ",(0,r.kt)("inlineCode",{parentName:"p"},"Http")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler"),":"),(0,r.kt)("h3",{id:"handlerok"},"Handler.ok"),(0,r.kt)("p",null,"Creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," that always responds with a 200 status code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"Handler.ok\n")),(0,r.kt)("h3",{id:"handlertext"},"Handler.text"),(0,r.kt)("p",null,"Creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," that always responds with the same plain text."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'Handler.text("Text Response")\n')),(0,r.kt)("h3",{id:"handlerstatus"},"Handler.status"),(0,r.kt)("p",null,"Creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," that always responds with the same status code and empty data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"Handler.status(Status.Ok)\n")),(0,r.kt)("h3",{id:"handlererror"},"Handler.error"),(0,r.kt)("p",null,"Creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," that always fails with the given ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpError"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"Handler.error(HttpError.Forbidden())\n")),(0,r.kt)("h3",{id:"handlerresponse"},"Handler.response"),(0,r.kt)("p",null,"Creates an ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," that always responds with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"Handler.response(Response.ok)\n")),(0,r.kt)("h2",{id:"special-operators-on-handler"},"Special operators on Handler"),(0,r.kt)("p",null,"These are some special operators for ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler"),"s."),(0,r.kt)("h3",{id:"withmethod"},"withMethod"),(0,r.kt)("p",null,"Overwrites the method in the incoming request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val handler11 = Handler.fromFunction((request: Request) => Response.text(request.method.toString))\nhandler11.withMethod(Method.POST)\n")),(0,r.kt)("h3",{id:"patch"},"patch"),(0,r.kt)("p",null,"Patches the response produced by the request handler using a ",(0,r.kt)("inlineCode",{parentName:"p"},"Patch"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val handler12 = Handler.response(Response.text("Hello World!"))\nval handler13 = handler12.patch(Response.Patch.withStatus(Status.Accepted))\n')),(0,r.kt)("h2",{id:"converting-an-http-to-app"},"Converting an ",(0,r.kt)("inlineCode",{parentName:"h2"},"Http")," to ",(0,r.kt)("inlineCode",{parentName:"h2"},"App")),(0,r.kt)("p",null,"If you want to run an ",(0,r.kt)("inlineCode",{parentName:"p"},"Http[R, E, A, B]")," app on the ZIO HTTP server you need to convert it to ",(0,r.kt)("inlineCode",{parentName:"p"},"App[R]")," using\noperators like ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"contramap"),", etc."),(0,r.kt)("p",null,"Custom errors can be converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"mapError")," or you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"withDefaultErrorHandling")," to convert\nall custom errors into internal server error responses."),(0,r.kt)("p",null,"If a ",(0,r.kt)("inlineCode",{parentName:"p"},"Http")," can never fail (has ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing")," as its error type), there is no need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"withDefaultErrorHandling"),"\nor ",(0,r.kt)("inlineCode",{parentName:"p"},"mapError"),"."),(0,r.kt)("h2",{id:"running-an-app"},"Running an App"),(0,r.kt)("p",null,"ZIO HTTP server needs an ",(0,r.kt)("inlineCode",{parentName:"p"},"App[R]")," for running. We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Server.serve()")," method to bootstrap the server with\nan ",(0,r.kt)("inlineCode",{parentName:"p"},"App[R]"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object HelloWorld extends ZIOAppDefault {\n  val app: App[Any] = Handler.ok.toHttp\n\n  override def run = Server.serve(app).provide(Server.default)\n} \n")))}u.isMDXComponent=!0}}]);