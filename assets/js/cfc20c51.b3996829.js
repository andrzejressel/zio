"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[45642],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>f});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,f=p["".concat(s,".").concat(h)]||p[h]||m[h]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(58168),o=(n(96540),n(15680));const a={id:"thrift",title:"Apache Thrift Codecs",sidebar_label:"Apache Thrift"},i=void 0,c={unversionedId:"zio-schema/derivations/codecs/thrift",id:"zio-schema/derivations/codecs/thrift",title:"Apache Thrift Codecs",description:"Introduction",source:"@site/docs/zio-schema/derivations/codecs/thrift.md",sourceDirName:"zio-schema/derivations/codecs",slug:"/zio-schema/derivations/codecs/thrift",permalink:"/zio-schema/derivations/codecs/thrift",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/derivations/codecs/thrift.md",tags:[],version:"current",frontMatter:{id:"thrift",title:"Apache Thrift Codecs",sidebar_label:"Apache Thrift"},sidebar:"ecosystem-sidebar",previous:{title:"Apache Avro",permalink:"/zio-schema/derivations/codecs/avro"},next:{title:"BSON",permalink:"/zio-schema/derivations/codecs/bson"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"BinaryCodec",id:"binarycodec",level:2},{value:"Example",id:"example",level:2}],l={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"Apache Thrift is an open-source framework that allows seamless communication and data sharing between different programming languages and platforms. In this section, we will explore how to derive Apache Thrift codecs from a ZIO Schema."),(0,o.yg)("h2",{id:"installation"},"Installation"),(0,o.yg)("p",null,"To derive Apache Thrift codecs from a ZIO Schema, we need to add the following dependency to our ",(0,o.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-schema-thrift" % "1.1.0"\n')),(0,o.yg)("h2",{id:"binarycodec"},"BinaryCodec"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"ThriftCodec")," object inside the ",(0,o.yg)("inlineCode",{parentName:"p"},"zio.schema.codec")," package provides the ",(0,o.yg)("inlineCode",{parentName:"p"},"thriftCodec")," operator which allows us to derive Protobuf codecs from a ZIO Schema:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"object ThriftCodec {\n  implicit def thriftCodec[A](implicit schema: Schema[A]): BinaryCodec[A] = ???\n}\n")),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("p",null,"Let's try an example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.schema.codec._\nimport zio.schema.{DeriveSchema, Schema}\n\ncase class Person(name: String, age: Int)\n\nobject Person {\n  implicit val schema: Schema[Person] =\n    DeriveSchema.gen\n    \n  implicit val thriftCodec: BinaryCodec[Person] =\n    ThriftCodec.thriftCodec(schema)\n}\n\nobject Main extends ZIOAppDefault {\n  def run = for {\n    _ <- ZIO.debug("Apache Thrift Codec Example:")\n    person: Person = Person("John", 42)\n    encoded: Chunk[Byte] = Person.thriftCodec.encode(person)\n    _ <- ZIO.debug(s"person object encoded to Thrift\'s binary format: ${toHex(encoded)}")\n    decoded <- ZIO.fromEither(Person.thriftCodec.decode(encoded))\n    _ <- ZIO.debug(s"Thrift object decoded to Person class: $decoded")\n  } yield ()\n\n  def toHex(bytes: Chunk[Byte]): String =\n    bytes.map("%02x".format(_)).mkString(" ")\n}\n')),(0,o.yg)("p",null,"Here is the output of running the above program:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"Apache Thrift Codec Example: \nperson object encoded to Thrift's binary format: 0b 00 01 00 00 00 04 4a 6f 68 6e 08 00 02 00 00 00 2a 00\nThrift object decoded to Person class: Person(John,42)\n")))}m.isMDXComponent=!0}}]);