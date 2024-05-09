"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[80793],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>h});var o=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return a?o.createElement(h,i(i({ref:t},p),{},{components:a})):o.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(58168),n=(a(96540),a(15680));const r={id:"index",title:"Introduction to ZIO Schema",sidebar_label:"Introduction"},i=void 0,s={unversionedId:"zio-schema/index",id:"zio-schema/index",title:"Introduction to ZIO Schema",description:"ZIO Schema is a ZIO-based library for modeling the schema of data structures as first-class values.",source:"@site/docs/zio-schema/index.md",sourceDirName:"zio-schema",slug:"/zio-schema/",permalink:"/zio-schema/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Schema",sidebar_label:"Introduction"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO SQS",permalink:"/zio-sqs/"},next:{title:"Motivation",permalink:"/zio-schema/motivation"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What Problems Does ZIO Schema Solve?",id:"what-problems-does-zio-schema-solve",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Resources",id:"resources",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,o.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-schema"},"ZIO Schema")," is a ",(0,n.yg)("a",{parentName:"p",href:"https://zio.dev"},"ZIO"),"-based library for modeling the schema of data structures as first-class values."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Development-green.svg",alt:"Development"}))," ",(0,n.yg)("img",{parentName:"p",src:"https://github.com/zio/zio-schema/workflows/CI/badge.svg",alt:"CI Badge"})," ",(0,n.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-schema_2.13/"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-schema_2.13.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,n.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-schema_2.13/"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-schema_2.13.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,n.yg)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-schema-docs_2.13"},(0,n.yg)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-schema-docs_2.13/javadoc.svg",alt:"javadoc"}))," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-schema"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-schema?style=social",alt:"ZIO Schema"}))),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"ZIO Schema helps us to solve some of the most common problems in distributed computing, such as serialization, deserialization, and data migration."),(0,n.yg)("p",null,"It turns a compiled-time construct (the type of a data structure) into a runtime construct (a value that can be read, manipulated, and composed at runtime). A schema is a structure of a data type. ZIO Schema reifies the concept of structure for data types. It makes a high-level description of any data type and makes them first-class values."),(0,n.yg)("p",null,"Creating a schema for a data type helps us to write codecs for that data type. So this library can be a host of functionalities useful for writing codecs and protocols like JSON, Protobuf, CSV, and so forth."),(0,n.yg)("h2",{id:"what-problems-does-zio-schema-solve"},"What Problems Does ZIO Schema Solve?"),(0,n.yg)("p",null,"With schema descriptions that can be automatically derived for case classes and sealed traits, ",(0,n.yg)("em",{parentName:"p"},"ZIO Schema")," will be going to provide powerful features for free:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Metaprogramming without macros, reflection, or complicated implicit derivations.",(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},"Creating serialization and deserialization codecs for any supported protocol (JSON, Protobuf, etc.)"),(0,n.yg)("li",{parentName:"ol"},"Deriving standard type classes (",(0,n.yg)("inlineCode",{parentName:"li"},"Eq"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"Show"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"Ordering"),", etc.) from the structure of the data"),(0,n.yg)("li",{parentName:"ol"},"Default values for data types"))),(0,n.yg)("li",{parentName:"ol"},"Automate ETL (Extract, Transform, Load) pipelines",(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},"Diffing: diffing between two values of the same type"),(0,n.yg)("li",{parentName:"ol"},"Patching: applying a diff to a value to update it"),(0,n.yg)("li",{parentName:"ol"},"Migration: migrating values from one type to another"))),(0,n.yg)("li",{parentName:"ol"},"Computations as data: Not only we can turn types into values, but we can also turn computations into values. This opens up a whole new world of possibilities concerning distributed computing.")),(0,n.yg)("p",null,"When our data structures need to be serialized, deserialized, persisted, or transported across the wire, then ",(0,n.yg)("em",{parentName:"p"},"ZIO Schema")," lets us focus on data modeling and automatically tackle all the low-level, messy details for us."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"ZIO Schema")," is used by a growing number of ZIO libraries, including ",(0,n.yg)("a",{parentName:"p",href:"https://zio.dev/zio-flow"},"ZIO Flow"),", ",(0,n.yg)("a",{parentName:"p",href:"https://zio-redis"},"ZIO Redis"),", ",(0,n.yg)("a",{parentName:"p",href:"https://zio.dev/zio-sql"},"ZIO SQL")," and ",(0,n.yg)("a",{parentName:"p",href:"https://zio.dev/zio-dynamodb"},"ZIO DynamoDB"),"."),(0,n.yg)("h2",{id:"installation"},"Installation"),(0,n.yg)("p",null,"In order to use this library, we need to add the following lines in our ",(0,n.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-schema"          % "1.1.0"\nlibraryDependencies += "dev.zio" %% "zio-schema-avro"     % "1.1.0"\nlibraryDependencies += "dev.zio" %% "zio-schema-bson"     % "1.1.0"\nlibraryDependencies += "dev.zio" %% "zio-schema-json"     % "1.1.0"\nlibraryDependencies += "dev.zio" %% "zio-schema-msg-pack" % "1.1.0"\nlibraryDependencies += "dev.zio" %% "zio-schema-protobuf" % "1.1.0"\nlibraryDependencies += "dev.zio" %% "zio-schema-thrift"   % "1.1.0"\nlibraryDependencies += "dev.zio" %% "zio-schema-zio-test" % "1.1.0"\n\n// Required for the automatic generic derivation of schemas\nlibraryDependencies += "dev.zio" %% "zio-schema-derivation" % "1.1.0"\nlibraryDependencies += "org.scala-lang" % "scala-reflect"  % scalaVersion.value % "provided"\n')),(0,n.yg)("h2",{id:"example"},"Example"),(0,n.yg)("p",null,"In this simple example first, we create a schema for ",(0,n.yg)("inlineCode",{parentName:"p"},"Person")," and then run the ",(0,n.yg)("em",{parentName:"p"},"diff")," operation on two instances of the ",(0,n.yg)("inlineCode",{parentName:"p"},"Person")," data type, and finally, we encode a Person instance using ",(0,n.yg)("em",{parentName:"p"},"Protobuf")," protocol:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stream._\nimport zio.schema.codec.{BinaryCodec, ProtobufCodec}\nimport zio.schema.{DeriveSchema, Schema}\n\nimport java.io.IOException\n\nfinal case class Person(name: String, age: Int)\n\nobject Person {\n  implicit val schema: Schema[Person]    = DeriveSchema.gen\n  val protobufCodec: BinaryCodec[Person] = ProtobufCodec.protobufCodec\n}\n\nobject Main extends ZIOAppDefault {\n  def run: ZIO[Any, IOException, Unit] =\n    ZStream\n      .succeed(Person("John", 43))\n      .via(Person.protobufCodec.streamEncoder)\n      .runCollect\n      .flatMap(x =>\n        Console.printLine(s"Encoded data with protobuf codec: ${toHex(x)}")\n      )\n\n  def toHex(chunk: Chunk[Byte]): String =\n    chunk.map("%02X".format(_)).mkString\n}\n')),(0,n.yg)("p",null,"Here is the output of running the above program:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"Encoded data with protobuf codec: 0A044A6F686E102B\n")),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=GfNiDaL5aIM"},"Zymposium - ZIO Schema")," by John A. De Goes, Adam Fraser, and Kit Langton (May 2021)"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=lJziseYKvHo&t=481s"},"ZIO SCHEMA: A Toolkit For Functional Distributed Computing")," by Dan Harris (Functional Scala 2021)"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ClePN4P9_pg"},"Creating Declarative Query Plans With ZIO Schema")," by Dan Harris (ZIO World 2022)"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=oRLkb6mqvVM"},"Describing Data...with free applicative functors (and more)")," by Kris Nuttycombe (Scala World) on the idea behind the ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/nuttycom/xenomorph"},"xenomorph")," library")))}d.isMDXComponent=!0}}]);