"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[55249],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,f=s["".concat(c,".").concat(m)]||s[m]||h[m]||l;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={id:"composing-channels",title:"Composing Channels"},o=void 0,i={unversionedId:"reference/stream/zchannel/composing-channels",id:"reference/stream/zchannel/composing-channels",title:"Composing Channels",description:"We can write more complex channels by using read operators and composing them recursively.",source:"@site/docs/reference/stream/zchannel/composing-channels.md",sourceDirName:"reference/stream/zchannel",slug:"/reference/stream/zchannel/composing-channels",permalink:"/reference/stream/zchannel/composing-channels",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zchannel/composing-channels.md",tags:[],version:"current",frontMatter:{id:"composing-channels",title:"Composing Channels"},sidebar:"reference-sidebar",previous:{title:"Creating Channels",permalink:"/reference/stream/zchannel/creating-channels"},next:{title:"Running a Channel",permalink:"/reference/stream/zchannel/running-a-channel"}},c={},p=[{value:"Simple Echo Channel",id:"simple-echo-channel",level:2},{value:"Echo Channel Forever",id:"echo-channel-forever",level:2},{value:"Replicator Channel",id:"replicator-channel",level:2},{value:"Counter Channel",id:"counter-channel",level:2},{value:"Dedupe Channel",id:"dedupe-channel",level:2},{value:"Buffered Channel",id:"buffered-channel",level:2}],u={toc:p},s="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We can write more complex channels by using ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," operators and composing them recursively. "),(0,r.kt)("p",null,"Let's try some examples:"),(0,r.kt)("h2",{id:"simple-echo-channel"},"Simple Echo Channel"),(0,r.kt)("p",null,"Assume we want to read a value from the input port and then print it to the console, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZChannel.readWith")," operator to do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stream._\n\nval producer = \n  ZChannel.write(1)\n  \nval consumer = \n  ZChannel.readWith(\n    (i: Int) => ZChannel.fromZIO(Console.printLine("Consumed: " + i)),\n    (_: Any) => ZChannel.unit,\n    (_: Any) => ZChannel.unit\n  )\n\n(producer >>> consumer).run\n')),(0,r.kt)("h2",{id:"echo-channel-forever"},"Echo Channel Forever"),(0,r.kt)("p",null,"We can also recursively compose channels to create a more complex channel. In the following example, we are going to continuously read values from the console and write them back to the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stream.ZChannel\n\nimport java.io.IOException\n\nobject MainApp extends ZIOAppDefault {\n  val producer: ZChannel[Any, Any, Any, Any, IOException, String, Nothing] =\n    ZChannel\n      .fromZIO(Console.readLine("Please enter some text: "))\n      .flatMap(i => ZChannel.write(i) *> producer)\n\n  val consumer: ZChannel[Any, Any, String, Any, IOException, Nothing, Unit] =\n    ZChannel.readWith(\n      (i: String) => i match {\n        case "exit" => ZChannel.unit\n        case _ => ZChannel.fromZIO(Console.printLine("Consumed: " + i)) *> consumer\n      },\n      (_: Any) => ZChannel.unit,\n      (_: Any) => ZChannel.unit\n    )\n\n  def run = (producer >>> consumer).run\n}\n')),(0,r.kt)("h2",{id:"replicator-channel"},"Replicator Channel"),(0,r.kt)("p",null,"In this example, we are going to create a channel that replicates any input values to the output port."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stream._\n\nobject MainApp extends ZIOAppDefault {\n  lazy val doubler: ZChannel[Any, Any, Int, Any, Nothing, Int, Unit] =\n    ZChannel.readWith(\n      (i: Int) => ZChannel.writeAll(i, i) *> doubler,\n      (_: Any) => ZChannel.unit,\n      (_: Any) => ZChannel.unit\n    )\n  def run = (ZChannel.writeAll(1,2,3,4,5) >>> doubler).runCollect.debug\n}\n")),(0,r.kt)("h2",{id:"counter-channel"},"Counter Channel"),(0,r.kt)("p",null,"We can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref")," to create a channel with an updatable state. For example, we can create a channel that keeps track number of all the values that it has read and finally returns it as the done value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stream._\n\nobject MainApp extends ZIOAppDefault {\n  val counter = {\n      def count(c: Int): ZChannel[Any, Any, Int, Any, String, Int, Int] =\n        ZChannel.readWith(\n          (i: Int) => ZChannel.write(i) *> count(c + 1),\n          (_: Any) => ZChannel.fail("error"),\n          (_: Any) => ZChannel.succeed(c)\n        )\n\n      count(0)\n    }\n\n  def run = (ZChannel.writeAll(1, 2, 3, 4, 5) >>> counter).runCollect.debug\n}\n')),(0,r.kt)("h2",{id:"dedupe-channel"},"Dedupe Channel"),(0,r.kt)("p",null,"Sometimes we want to remove duplicate values from the input port. We need to have a state that keeps track of the values that have been seen. So if a value is seen for the first time, we can write it to the output port. If a value is duplicated, we can ignore it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stream._\n\nimport scala.collection.immutable.HashSet\n\nobject MainApp extends ZIOAppDefault {\n  val dedup =\n    ZChannel.fromZIO(Ref.make[HashSet[Int]](HashSet.empty)).flatMap { ref =>\n      lazy val inner: ZChannel[Any, Any, Int, Any, Nothing, Int, Unit] =\n        ZChannel.readWith(\n          (i: Int) =>\n            ZChannel\n              .fromZIO(ref.modify(s => (s contains i, s incl i)))\n              .flatMap {\n                case true  => ZChannel.unit\n                case false => ZChannel.write(i)\n              } *> inner,\n          (_: Any) => ZChannel.unit,\n          (_: Any) => ZChannel.unit\n        )\n      inner\n    }\n\n  def run =\n    (ZChannel.writeAll(1, 2, 2, 3, 3, 4, 2, 5, 5) >>> dedup).runCollect.debug\n}\n")),(0,r.kt)("h2",{id:"buffered-channel"},"Buffered Channel"),(0,r.kt)("p",null,"With help of ",(0,r.kt)("inlineCode",{parentName:"p"},"ZChannel.buffer")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ZChannel.bufferChunk"),", we can create a channel backed by a buffer."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the buffer is full, the channel puts the values in the buffer to the output port."),(0,r.kt)("li",{parentName:"ul"},"If the buffer is empty, the channel reads the value from the input port and puts it in the output port.")),(0,r.kt)("p",null,"Assume we have a channel written as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stream._\n\ndef buffered(input: Int) =\n  ZChannel\n    .fromZIO(Ref.make(input))\n    .flatMap { ref =>\n      ZChannel.buffer[Any, Int, Unit](\n        0,\n        i => if (i == 0) true else false,\n        ref\n      )\n    }\n")),(0,r.kt)("p",null,"If the buffer is empty (zero value), the ",(0,r.kt)("inlineCode",{parentName:"p"},"buffered")," channel passes the ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to the output port:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"(ZChannel.write(1) >>> buffered(0)).runCollect.debug\n")),(0,r.kt)("p",null,"If the buffer is full, the channel puts the value from the buffer to the output port:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"(ZChannel.write(1) >>> buffered(0)).runCollect.debug\n")))}h.isMDXComponent=!0}}]);