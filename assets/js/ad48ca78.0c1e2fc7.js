"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[49968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const l={id:"middleware",title:"Middleware"},r=void 0,o={unversionedId:"zio-http/dsl/middleware",id:"zio-http/dsl/middleware",title:"Middleware",description:"Before introducing middleware, let us understand why they are needed.",source:"@site/docs/zio-http/dsl/middleware.md",sourceDirName:"zio-http/dsl",slug:"/zio-http/dsl/middleware",permalink:"/zio-http/dsl/middleware",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/dsl/middleware.md",tags:[],version:"current",frontMatter:{id:"middleware",title:"Middleware"},sidebar:"ecosystem-sidebar",previous:{title:"Cookies",permalink:"/zio-http/dsl/cookies"},next:{title:"Socket",permalink:"/zio-http/dsl/socket/"}},s={},d=[{value:"The polluted code violates the principle of &quot;Separation of concerns&quot;",id:"the-polluted-code-violates-the-principle-of-separation-of-concerns",level:4},{value:"Need for middlewares and handling &quot;aspects&quot;",id:"need-for-middlewares-and-handling-aspects",level:2},{value:"Cleaned up code using middleware to address cross-cutting concerns like auth, request/response logging, etc.",id:"cleaned-up-code-using-middleware-to-address-cross-cutting-concerns-like-auth-requestresponse-logging-etc",level:4},{value:"Middleware in zio-http",id:"middleware-in-zio-http",level:2},{value:"Attaching middleware to Http",id:"attaching-middleware-to-http",level:4},{value:"A simple middleware example",id:"a-simple-middleware-example",level:4},{value:"Combining middlewares",id:"combining-middlewares",level:2},{value:"Using <code>++</code> combinator",id:"using--combinator",level:3},{value:"A simple example using <code>++</code> combinator",id:"a-simple-example-using--combinator",level:4},{value:"Conditional application of middlewares",id:"conditional-application-of-middlewares",level:2},{value:"A complete example of a middleware",id:"a-complete-example-of-a-middleware",level:2},{value:"A few &quot;Out of the box&quot; middlewares",id:"a-few-out-of-the-box-middlewares",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Before introducing middleware, let us understand why they are needed."),(0,i.kt)("p",null,"Consider the following example where we have two endpoints within HttpApp"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET a single user by id"),(0,i.kt)("li",{parentName:"ul"},"GET all users")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'private val app = Http.collectZIO[Request] {\n  case Method.GET -> !! / "users" / id =>\n    // core business logic  \n    dbService.lookupUsersById(id).map(Response.json(_.json))\n  case Method.GET -> !! / "users"    =>\n    // core business logic  \n    dbService.paginatedUsers(pageNum).map(Response.json(_.json))\n}\n')),(0,i.kt)("h4",{id:"the-polluted-code-violates-the-principle-of-separation-of-concerns"},'The polluted code violates the principle of "Separation of concerns"'),(0,i.kt)("p",null,"As our application grows, we want to code the following aspects like"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Basic Auth"),(0,i.kt)("li",{parentName:"ul"},"Request logging"),(0,i.kt)("li",{parentName:"ul"},"Response logging"),(0,i.kt)("li",{parentName:"ul"},"Timeout and retry")),(0,i.kt)("p",null,"For both of our example endpoints, our core business logic gets buried under boilerplate like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"(for {\n    // validate user\n    _    <- MyAuthService.doAuth(request)\n    // log request\n    _    <- logRequest(request)\n    // core business logic\n    user <- dbService.lookupUsersById(id).map(Response.json(_.json))\n    resp <- Response.json(user.toJson)\n    // log response\n    _    <- logResponse(resp)                \n} yield resp)\n        .timeout(2.seconds)\n        .retryN(5)\n")),(0,i.kt)("p",null,"Imagine repeating this for all our endpoints!!!"),(0,i.kt)("p",null,"So there are two problems with this approach"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We are dangerously coupling our business logic with cross-cutting concerns (like applying timeouts)"),(0,i.kt)("li",{parentName:"ul"},"Also, addressing these concerns will require updating code for every single route in the system. For 100 routes we will need to repeat 100 timeouts!!!"),(0,i.kt)("li",{parentName:"ul"},"For example, any change related to a concern like the logging mechanism from logback to log4j2 may cause changing signature of ",(0,i.kt)("inlineCode",{parentName:"li"},"log(..)")," function in 100 places."),(0,i.kt)("li",{parentName:"ul"},"On the other hand, this also makes testing core business logic more cumbersome.")),(0,i.kt)("p",null,"This can lead to a lot of boilerplate clogging our neatly written endpoints affecting readability, thereby leading to increased maintenance costs."),(0,i.kt)("h2",{id:"need-for-middlewares-and-handling-aspects"},'Need for middlewares and handling "aspects"'),(0,i.kt)("p",null,'If we refer to Wikipedia for the definition of an "',(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Aspect_(computer_programming)"},"Aspect"),'" we can glean the following points.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An aspect of a program is a feature linked to many other parts of the program (",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"most common example, logging")),")., "),(0,i.kt)("li",{parentName:"ul"},"But it is not related to the program's primary function (",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"core business logic")),") "),(0,i.kt)("li",{parentName:"ul"},"An aspect crosscuts the program's core concerns (",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"for example logging code intertwined with core business logic")),"),  "),(0,i.kt)("li",{parentName:"ul"},'Therefore, it can violate the principle of "separation of concerns" which tries to encapsulate unrelated functions. (',(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Code duplication and maintenance nightmare")),")")),(0,i.kt)("p",null,"Or in short, aspect is a common concern required throughout the application, and its implementation could lead to repeated boilerplate code and in violation of the principle of separation of concerns."),(0,i.kt)("p",null,"There is a paradigm in the programming world called ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Aspect-oriented_programming"},"aspect-oriented programming")," that aims for modular handling of these common concerns in an application. "),(0,i.kt)("p",null,'Some examples of common "aspects" required throughout the application'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"logging,"),(0,i.kt)("li",{parentName:"ul"},"timeouts (preventing long-running code)"),(0,i.kt)("li",{parentName:"ul"},"retries (or handling flakiness for example while accessing third party APIs)"),(0,i.kt)("li",{parentName:"ul"},"authenticating a user before using the REST resource (basic, or custom ones like OAuth / single sign-on, etc).")),(0,i.kt)("p",null,"This is where middleware comes to the rescue.\nUsing middlewares we can compose out-of-the-box middlewares (or our custom middlewares) to address the above-mentioned concerns using ++ and @@ operators as shown below."),(0,i.kt)("h4",{id:"cleaned-up-code-using-middleware-to-address-cross-cutting-concerns-like-auth-requestresponse-logging-etc"},"Cleaned up code using middleware to address cross-cutting concerns like auth, request/response logging, etc."),(0,i.kt)("p",null,"Observe, how we can address multiple cross-cutting concerns using neatly composed middlewares, in a single place."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\n\n// compose basic auth, request/response logging, timeouts middlewares\nval composedMiddlewares = RequestHandlerMiddlewares.basicAuth("user","pw") ++ \n        RequestHandlerMiddlewares.debug ++ \n        RequestHandlerMiddlewares.timeout(5.seconds) \n')),(0,i.kt)("p",null,"And then we can attach our composed bundle of middlewares to an Http using ",(0,i.kt)("inlineCode",{parentName:"p"},"@@")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val app = Http.collectZIO[Request] {\n  case Method.GET -> !! / "users" / id =>\n    // core business logic  \n    dbService.lookupUsersById(id).map(Response.json(_.json))\n  case Method.GET -> !! / "users"    =>\n    // core business logic  \n    dbService.paginatedUsers(pageNum).map(Response.json(_.json))\n} @@ composedMiddlewares // attach composedMiddlewares to the app using @@\n')),(0,i.kt)("p",null,"Observe how we gained the following benefits by using middlewares"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Readability"),": de-cluttering business logic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Modularity"),": we can manage aspects independently without making changes in 100 places. For example, ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"replacing the logging mechanism from logback to log4j2 will require a change in one place, the logging middleware."),(0,i.kt)("li",{parentName:"ul"},"replacing the authentication mechanism from OAuth to single sign-on will require changing the auth middleware"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Testability"),": we can test our aspects independently.")),(0,i.kt)("h2",{id:"middleware-in-zio-http"},"Middleware in zio-http"),(0,i.kt)("p",null,"A middleware helps in addressing common crosscutting concerns without duplicating boilerplate code."),(0,i.kt)("h4",{id:"attaching-middleware-to-http"},"Attaching middleware to Http"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@@")," operator is used to attach a middleware to an Http. Example below shows a middleware attached to an HttpApp"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val app = Http.collect[Request] {\n  case Method.GET -> !! / name => Response.text(s"Hello $name")\n}\nval appWithMiddleware = app @@ RequestHandlerMiddlewares.debug\n')),(0,i.kt)("p",null,"Logically the code above translates to ",(0,i.kt)("inlineCode",{parentName:"p"},"Middleware.debug(app)")),(0,i.kt)("h4",{id:"a-simple-middleware-example"},"A simple middleware example"),(0,i.kt)("p",null,"Let us consider a simple example using out-of-the-box middleware called ",(0,i.kt)("inlineCode",{parentName:"p"},"addHeader"),"\nWe will write a middleware that will attach a custom header to the response. "),(0,i.kt)("p",null,"We create a middleware that appends an additional header to the response indicating whether it is a Dev/Prod/Staging environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\n\nlazy val patchEnv = RequestHandlerMiddlewares.addHeader("X-Environment", "Dev")\n')),(0,i.kt)("p",null,"A test ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," with attached middleware:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val app = Http.collect[Request] {\n  case Method.GET -> !! / name => Response.text(s"Hello $name")\n}\nval appWithMiddleware = app @@ patchEnv\n')),(0,i.kt)("p",null,"Start the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"Server.serve(appWithMiddleware).provide(Server.default)\n")),(0,i.kt)("p",null,'Fire a curl request, and we see an additional header added to the response indicating the "Dev" environment:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -i http://localhost:8080/Bob\n\nHTTP/1.1 200 OK\ncontent-type: text/plain\nX-Environment: Dev\ncontent-length: 12\n\nHello Bob\n")),(0,i.kt)("h2",{id:"combining-middlewares"},"Combining middlewares"),(0,i.kt)("p",null,"Middlewares can be combined using several special operators like ",(0,i.kt)("inlineCode",{parentName:"p"},"++"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},">>>")),(0,i.kt)("h3",{id:"using--combinator"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"++")," combinator"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},">>>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"++")," are aliases for ",(0,i.kt)("inlineCode",{parentName:"p"},"andThen"),". It combines two middlewares."),(0,i.kt)("p",null,"For example, if we have three middlewares f1, f2, f3"),(0,i.kt)("p",null,"f1 ++ f2 ++ f3 applies on an ",(0,i.kt)("inlineCode",{parentName:"p"},"http"),", from left to right with f1 first followed by others, like this "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"  f3(f2(f1(http)))\n")),(0,i.kt)("h4",{id:"a-simple-example-using--combinator"},"A simple example using ",(0,i.kt)("inlineCode",{parentName:"h4"},"++")," combinator"),(0,i.kt)("p",null,"Start with imports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.http._\nimport zio.http.RequestHandlerMiddlewares.basicAuth\nimport zio._\n")),(0,i.kt)("p",null,"A user app with single endpoint that welcomes a user:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val userApp = Http.collect[Request] { case Method.GET -> !! / "user" / name / "greet" =>\n  Response.text(s"Welcome to the ZIO party! ${name}")\n}\n')),(0,i.kt)("p",null,"A basicAuth middleware with hardcoded user pw and another patches response with environment value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val basicAuthMW = basicAuth("admin", "admin")\nval patchEnv = RequestHandlerMiddlewares.addHeader("X-Environment", "Dev")\n// apply combined middlewares to the userApp\nval appWithMiddleware = userApp @@ (basicAuthMW ++ patchEnv)\n')),(0,i.kt)("p",null,"Start the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"Server.serve(appWithMiddleware).provide(Server.default)\n")),(0,i.kt)("p",null,"Fire a curl request with an incorrect user/password combination:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -i --user admin:wrong http://localhost:8080/user/admin/greet\n\nHTTP/1.1 401 Unauthorized\nwww-authenticate: Basic\nX-Environment: Dev\ncontent-length: 0\n")),(0,i.kt)("p",null,"We notice in the response that first basicAuth middleware responded ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 401 Unauthorized")," and then patch middleware attached a ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Environment: Dev")," header. "),(0,i.kt)("h2",{id:"conditional-application-of-middlewares"},"Conditional application of middlewares"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"when")," applies middleware only if the condition function evaluates to true\n-",(0,i.kt)("inlineCode",{parentName:"li"},"whenZIO")," applies middleware only if the condition function(with effect) evaluates")),(0,i.kt)("h2",{id:"a-complete-example-of-a-middleware"},"A complete example of a middleware"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,'Detailed example showing "debug" and "addHeader" middlewares')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\nimport zio._\n\nimport java.io.IOException\nimport java.util.concurrent.TimeUnit\n\nobject Example extends ZIOAppDefault {\n  val app: App[Any] =\n    Http.collectZIO[Request] {\n      // this will return result instantly\n      case Method.GET -> !! / "text" => ZIO.succeed(Response.text("Hello World!"))\n      // this will return result after 5 seconds, so with 3 seconds timeout it will fail\n      case Method.GET -> !! / "long-running" => ZIO.succeed(Response.text("Hello World!")).delay(5.seconds)\n    }\n\n  val middlewares =\n    RequestHandlerMiddlewares.debug ++ // print debug info about request and response \n      RequestHandlerMiddlewares.addHeader("X-Environment", "Dev") // add static header   \n\n  override def run =\n    Server.serve(app @@ middlewares).provide(Server.default)\n}\n'))),(0,i.kt)("h3",{id:"a-few-out-of-the-box-middlewares"},'A few "Out of the box" middlewares'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/advanced-examples/middleware_basic_auth"},"Basic Auth")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/advanced-examples/middleware_cors"},"CORS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zio.github.io/zio-http/docs/v1.x/examples/advanced-examples/middleware_csrf"},"CSRF"))))}u.isMDXComponent=!0}}]);