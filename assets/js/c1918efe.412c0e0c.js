"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[98845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"caliban",title:"Caliban"},i=void 0,l={unversionedId:"ecosystem/community/caliban",id:"ecosystem/community/caliban",title:"Caliban",description:"Caliban is a purely functional library for creating GraphQL servers and clients in Scala.",source:"@site/docs/ecosystem/community/caliban.md",sourceDirName:"ecosystem/community",slug:"/ecosystem/community/caliban",permalink:"/ecosystem/community/caliban",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/community/caliban.md",tags:[],version:"current",frontMatter:{id:"caliban",title:"Caliban"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Ecosystem Community Libraries",permalink:"/ecosystem/community/"},next:{title:"Distage",permalink:"/ecosystem/community/distage"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ghostdogpr.github.io/caliban/"},"Caliban")," is a purely functional library for creating GraphQL servers and clients in Scala."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Key features of Caliban"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Purely Functional")," \u2014 All interfaces are pure and types are referentially transparent."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type Safety")," \u2014 Schemas are type safe and derived at compile time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Minimal Boilerplate")," \u2014 No need to manually define a schema for every type in your API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Excellent Interoperability")," \u2014 Out-of-the-box support for major HTTP server libraries, effect types, JSON libraries, and more.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "com.github.ghostdogpr" %% "caliban" % "1.1.0"\n')),(0,a.kt)("p",null,"Caliban also have lots of optional modules to inter-operate with other various libraries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "com.github.ghostdogpr" %% "caliban-http4s"     % "1.1.0" // routes for http4s\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-akka-http"  % "1.1.0" // routes for akka-http\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-play"       % "1.1.0" // routes for play\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-finch"      % "1.1.0" // routes for finch\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-zio-http"   % "1.1.0" // routes for zio-http\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-cats"       % "1.1.0" // interop with cats effect\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-monix"      % "1.1.0" // interop with monix\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-tapir"      % "1.1.0" // interop with tapir\nlibraryDependencies += "com.github.ghostdogpr" %% "caliban-federation" % "1.1.0" // interop with apollo federation\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"First, to define Caliban API, we should define data models using case classes and ADTs. Then the Caliban can derive the whole GraphQL schema from these data models:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala",metastring:"modc:silent:nest","modc:silent:nest":!0},'import caliban.GraphQL.graphQL\nimport caliban.schema.Annotations.GQLDescription\nimport caliban.{RootResolver, ZHttpAdapter}\nimport zhttp.http._\nimport zhttp.service.Server\nimport zio.{ExitCode, ZEnv, ZIO}\n\nimport scala.language.postfixOps\n\nsealed trait Role\n\nobject Role {\n  case object SoftwareDeveloper       extends Role\n  case object SiteReliabilityEngineer extends Role\n  case object DevOps                  extends Role\n}\n\ncase class Employee(\n    name: String,\n    role: Role\n)\n\ncase class EmployeesArgs(role: Role)\ncase class EmployeeArgs(name: String)\n\ncase class Queries(\n    @GQLDescription("Return all employees with specific role")\n    employees: EmployeesArgs => List[Employee],\n    @GQLDescription("Find an employee by its name")\n    employee: EmployeeArgs => Option[Employee]\n)\nobject CalibanExample extends zio.App {\n\n  val employees = List(\n    Employee("Alex", Role.DevOps),\n    Employee("Maria", Role.SoftwareDeveloper),\n    Employee("James", Role.SiteReliabilityEngineer),\n    Employee("Peter", Role.SoftwareDeveloper),\n    Employee("Julia", Role.SiteReliabilityEngineer),\n    Employee("Roberta", Role.DevOps)\n  )\n\n  val myApp = for {\n    interpreter <- graphQL(\n      RootResolver(\n        Queries(\n          args => employees.filter(e => args.role == e.role),\n          args => employees.find(e => e.name == args.name)\n        )\n      )\n    ).interpreter\n    _ <- Server\n      .start(\n        port = 8088,\n        http = Http.route { case _ -> Root / "api" / "graphql" =>\n          ZHttpAdapter.makeHttpService(interpreter)\n        }\n      )\n      .forever\n  } yield ()\n\n  override def run(args: List[String]): ZIO[ZEnv, Nothing, ExitCode] =\n    myApp.exitCode\n\n}\n')),(0,a.kt)("p",null,"Now let's query all software developers using GraphQL query language:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query{\n  employees(role: SoftwareDeveloper){\n    name\n    role\n  }\n}\n")),(0,a.kt)("p",null,"Here is the ",(0,a.kt)("em",{parentName:"p"},"curl")," request of this query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl 'http://localhost:8088/api/graphql' --data-binary '{\"query\":\"query{\\n employees(role: SoftwareDeveloper){\\n name\\n role\\n}\\n}\"}'\n")),(0,a.kt)("p",null,"And the response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data" : {\n    "employees" : [\n      {\n        "name" : "Maria",\n        "role" : "SoftwareDeveloper"\n      },\n      {\n        "name" : "Peter",\n        "role" : "SoftwareDeveloper"\n      }\n    ]\n  }\n}\n')),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=mzqsXklbmfM&t=2849s"},"Zymposium - Caliban")," by Adam Fraser, Kit Langton and Pierre Ricadat \u2014 We will be building full-stack applications with the special guest international man of mystery Pierre Ricadat. Pierre will be walking us through Caliban, a GraphQL library in Scala that just had its 1.0 release. We'll be seeing how easy it can be to upgrade an existing application to use GraphQL with the power of Caliban!")))}u.isMDXComponent=!0}}]);