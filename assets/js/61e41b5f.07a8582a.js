"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[83375],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>g});var t=a(96540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),c=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(a),s=l,g=h["".concat(p,".").concat(s)]||h[s]||m[s]||r;return a?t.createElement(g,o(o({ref:n},u),{},{components:a})):t.createElement(g,o({ref:n},u))}));function g(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[h]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},48619:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=a(58168),l=(a(96540),a(15680));const r={id:"channel-operations",title:"Channel Operations"},o=void 0,i={unversionedId:"reference/stream/zchannel/channel-operations",id:"reference/stream/zchannel/channel-operations",title:"Channel Operations",description:"Piping",source:"@site/docs/reference/stream/zchannel/channel-operations.md",sourceDirName:"reference/stream/zchannel",slug:"/reference/stream/zchannel/channel-operations",permalink:"/reference/stream/zchannel/channel-operations",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zchannel/channel-operations.md",tags:[],version:"current",frontMatter:{id:"channel-operations",title:"Channel Operations"},sidebar:"reference-sidebar",previous:{title:"Running a Channel",permalink:"/reference/stream/zchannel/running-a-channel"},next:{title:"Channel Interruption",permalink:"/reference/stream/zchannel/channel-interruption"}},p={},c=[{value:"Piping",id:"piping",level:2},{value:"Sequencing",id:"sequencing",level:2},{value:"Concatenating",id:"concatenating",level:2},{value:"Zipping",id:"zipping",level:2},{value:"Mapping",id:"mapping",level:2},{value:"Mapping The Terminal Done Value (<code>OutDone</code>)",id:"mapping-the-terminal-done-value-outdone",level:3},{value:"Mapping The Done Value of The Input Port (<code>InDone</code>)",id:"mapping-the-done-value-of-the-input-port-indone",level:3},{value:"Mapping The Error Value of The Output Port (<code>OutErr</code>)",id:"mapping-the-error-value-of-the-output-port-outerr",level:3},{value:"Mapping The Output Elements of a Channel (<code>OutElem</code>)",id:"mapping-the-output-elements-of-a-channel-outelem",level:3},{value:"Mapping The Input Elements of a Channel (<code>InElem</code>)",id:"mapping-the-input-elements-of-a-channel-inelem",level:3},{value:"Merging",id:"merging",level:2},{value:"Collecting",id:"collecting",level:2},{value:"Converting",id:"converting",level:2},{value:"concatMap",id:"concatmap",level:2},{value:"mergeMap",id:"mergemap",level:2},{value:"collect",id:"collect",level:2}],u={toc:c},h="wrapper";function m(e){let{components:n,...a}=e;return(0,l.yg)(h,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"piping"},"Piping"),(0,l.yg)("p",null,"The values from the output port of the first channel are passed to the input port of the second channel when we pipe a channel to another channel:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream._\n\n(ZChannel.writeAll(1,2,3) >>> (ZChannel.read[Int] <*> ZChannel.read[Int])).runCollect.debug\n// Output: (Chunk(),(1,2))\n")),(0,l.yg)("h2",{id:"sequencing"},"Sequencing"),(0,l.yg)("p",null,"In order to sequence channels, we can use the ",(0,l.yg)("inlineCode",{parentName:"p"},"ZChannel#flatMap")," operator. When we use the ",(0,l.yg)("inlineCode",{parentName:"p"},"flatMap")," operator, we have the ability to chain two channels together. After the first channel is finished, we can create a new channel based on the terminal value of the first channel:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stream._\n\nZChannel\n  .fromZIO(\n    Console.readLine("Please enter a number: ").map(_.toInt)\n  )\n  .flatMap {\n    case n if n < 0 => ZChannel.fail("Number must be positive")\n    case n          => ZChannel.writeAll((0 to n): _*)\n  }\n  .runCollect\n  .debug\n// Sample Output:\n// Please enter a number: 5\n// (Chunk(0,1,2,3,4,5),())\n')),(0,l.yg)("h2",{id:"concatenating"},"Concatenating"),(0,l.yg)("p",null,"Suppose there is a channel that creates a new channel for each element of the outer channel and emits them to the output port. We can use ",(0,l.yg)("inlineCode",{parentName:"p"},"concatOut")," to concatenate all the inner channels into a single channel:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.stream._\n\nZChannel\n  .writeAll("a", "b", "c")\n  .mapOut { l =>\n    ZChannel.writeAll((1 to 3).map(i => s"$l$i"):_*) \n  }\n  .concatOut\n  .runCollect\n  .debug\n// Output: (Chunk(a1,a2,a3,b1,b2,b3,c1,c2,c3),())\n')),(0,l.yg)("p",null,"We can do the same with ",(0,l.yg)("inlineCode",{parentName:"p"},"ZChannel.concatAll"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.stream._\n\nZChannel\n  .concatAll(\n    ZChannel\n      .writeAll("a", "b", "c")\n      .mapOut { l =>\n        ZChannel.writeAll((1 to 3).map(i => s"$l$i"): _*)\n      }\n  )\n  .runCollect\n  .debug\n  \n// Output: (Chunk(a1,a2,a3,b1,b2,b3,c1,c2,c3),())\n')),(0,l.yg)("h2",{id:"zipping"},"Zipping"),(0,l.yg)("p",null,"We have two categories of ",(0,l.yg)("inlineCode",{parentName:"p"},"zip")," operators: ordinary ",(0,l.yg)("inlineCode",{parentName:"p"},"zipXYZ")," operators which run sequentially, and parallel ",(0,l.yg)("inlineCode",{parentName:"p"},"zipXYZ")," operators which run in parallel."),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"zip"),"/",(0,l.yg)("inlineCode",{parentName:"li"},"<*>")," operator:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.stream._\n\nval first = ZChannel.write(1,2,3) *> ZChannel.succeed("Done!")\nval second = ZChannel.write(4,5,6) *> ZChannel.succeed("Bye!")\n\n(first <*> second).runCollect.debug\n// Output: (Chunk((1,2,3),(4,5,6)),(Done!,Bye!))\n')),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"zipRight"),"/",(0,l.yg)("inlineCode",{parentName:"li"},"*>")," operator:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},"(first *> second).runCollect.debug\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"zipLeft"),"/",(0,l.yg)("inlineCode",{parentName:"li"},"<*")," operator:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},"(first <* second).runCollect.debug\n")),(0,l.yg)("h2",{id:"mapping"},"Mapping"),(0,l.yg)("h3",{id:"mapping-the-terminal-done-value-outdone"},"Mapping The Terminal Done Value (",(0,l.yg)("inlineCode",{parentName:"h3"},"OutDone"),")"),(0,l.yg)("p",null,"The ordinary ",(0,l.yg)("inlineCode",{parentName:"p"},"map")," operator is used to map the done value of a channel:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream._\n\nZChannel.writeAll(1, 2, 3).map(_ => 5).runCollect.debug \n// (Chunk(1,2,3),5)\n")),(0,l.yg)("h3",{id:"mapping-the-done-value-of-the-input-port-indone"},"Mapping The Done Value of The Input Port (",(0,l.yg)("inlineCode",{parentName:"h3"},"InDone"),")"),(0,l.yg)("p",null,"To map the done value of the input port, we use the ",(0,l.yg)("inlineCode",{parentName:"p"},"contramap")," operator:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.stream._\n\n(ZChannel.succeed("5") >>>\n  ZChannel\n    .readWith(\n      (i: Int) => ZChannel.write(ZChannel.write(i)),\n      (_: Any) => ZChannel.unit,\n      (d: Int) => ZChannel.succeed(d * 2)\n    )\n    .contramap[String](_.toInt)).runCollect.debug\n// Output: (Chunk(),(10))\n')),(0,l.yg)("h3",{id:"mapping-the-error-value-of-the-output-port-outerr"},"Mapping The Error Value of The Output Port (",(0,l.yg)("inlineCode",{parentName:"h3"},"OutErr"),")"),(0,l.yg)("p",null,"To map the failure value of a channel, we use the ",(0,l.yg)("inlineCode",{parentName:"p"},"mapError")," operator:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stream._\n\nval channel =\n  ZChannel\n    .fromZIO(Console.readLine("Please enter you name: "))\n    .mapError(_.toString)\n')),(0,l.yg)("h3",{id:"mapping-the-output-elements-of-a-channel-outelem"},"Mapping The Output Elements of a Channel (",(0,l.yg)("inlineCode",{parentName:"h3"},"OutElem"),")"),(0,l.yg)("p",null,"To map the output elements of a channel, we use the ",(0,l.yg)("inlineCode",{parentName:"p"},"mapOutput")," operator:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream._\n\nZChannel.writeAll(1,2,3).mapOut(_ * 2).runCollect.debug\n// Output: (Chunk(2,4,6),())\n")),(0,l.yg)("h3",{id:"mapping-the-input-elements-of-a-channel-inelem"},"Mapping The Input Elements of a Channel (",(0,l.yg)("inlineCode",{parentName:"h3"},"InElem"),")"),(0,l.yg)("p",null,"To map the input elements of a channel, we use the ",(0,l.yg)("inlineCode",{parentName:"p"},"contramapIn")," operator:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.stream._\n\n(ZChannel.write("123") >>> ZChannel.read[Int].contramapIn[String](_.toInt * 2)).runCollect.debug\n// Output: (Chunk(),(246))\n')),(0,l.yg)("h2",{id:"merging"},"Merging"),(0,l.yg)("p",null,"Merge operators are used to merging multiple channels into a single channel. They are used to combine the output port of channels concurrently. Every time any of the channels produces a value, the output port of the resulting channel will produce a value."),(0,l.yg)("p",null,"Assume we have the following channel:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stream._\n\ndef iterate(\n    from: Int,\n    to: Int\n): ZChannel[Any, Any, Any, Any, Nothing, Int, Unit] =\n  if (from <= to)\n    ZChannel.write(from) *>\n      ZChannel.fromZIO(\n        Random\n          .nextLongBounded(1000)\n          .flatMap(delay => ZIO.sleep(Duration.fromMillis(delay)))\n      ) *> iterate(from + 1, to)\n  else ZChannel.unit\n")),(0,l.yg)("p",null,"Now let's merge some channels:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stream._\n\nZChannel\n  .mergeAllUnbounded(\n    ZChannel.writeAll(\n      iterate(1, 3),\n      iterate(4, 6),\n      iterate(6, 9)\n    )\n  )\n  .mapOutZIO(i => Console.print(i + " "))\n  .runDrain\n// Sample output: 1 4 6 7 8 2 3 5 6 9\n')),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"ZChannel.mergeAllUnbounded")," uses the maximum buffer size, which is ",(0,l.yg)("inlineCode",{parentName:"p"},"Int.MaxValue")," by default. This means that if we use this operator for long-running channels, which produce a lot of values, it can cause the program to run out of memory."),(0,l.yg)("p",null,"We have another operator called ",(0,l.yg)("inlineCode",{parentName:"p"},"ZChannel.mergeAll"),", which allows us to specify the buffer size, the concurrency level, and also the strategy for merging the channels."),(0,l.yg)("p",null,"Note that if we want to merge channels sequentially, we can use the ",(0,l.yg)("inlineCode",{parentName:"p"},"zip")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"flatMap")," operators:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream._\n\n(iterate(1, 3) <*> iterate(4, 6) <*> iterate(6, 9)).runCollect.debug\n// Output: (Chunk(1,2,3,4,5,6,7,8,9),())\n")),(0,l.yg)("h2",{id:"collecting"},"Collecting"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"collectElements")," collects all the elements of the channel along with its done value as a tuple and returns a new channel with a terminal value of that tuple:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream._\n\nZChannel.writeAll(1,2,3,4,5)\n  .collectElements\n  .runCollect\n  .debug\n// Output: (Chunk(),(Chunk(1,2,3,4,5),()))\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"emitCollect")," is like the ",(0,l.yg)("inlineCode",{parentName:"li"},"collectElements")," operator, but it emits the result of the collection to the output port of the new channel:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream._\n\nZChannel.writeAll(1,2,3,4,5)\n  .emitCollect\n  .runCollect\n  .debug\n// Output: (Chunk((Chunk(1,2,3,4,5),())),())\n")),(0,l.yg)("h2",{id:"converting"},"Converting"),(0,l.yg)("p",null,"We can convert a channel to other data types using the ",(0,l.yg)("inlineCode",{parentName:"p"},"ZChannel.toXYZ")," methods:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ZChannel#toStream")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ZChannel#toPipeline")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ZChannel#toSink")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ZChannel#toPull")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ZChannel#toQueue"))),(0,l.yg)("h2",{id:"concatmap"},"concatMap"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"concatMap")," is a combination of two operators: mapping and concatenation. Using this operator, we can map every emitted element of a channel (outer channel) to a new channel (inner channels), and then concatenate all the inner channels into a single channel. The concatenation is done ",(0,l.yg)("strong",{parentName:"p"},"sequentially"),", so we use this operator when the order of the elements is important:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.stream._\n\nZChannel\n  .writeAll("a", "b", "c")\n  .concatMap { l =>\n    def inner(from: Int, to: Int): ZChannel[Any, Any, Any, Any, Nothing, String, Unit] =\n      if (from <= to) ZChannel.write(s"$l$from") *> inner(from + 1, to)\n      else ZChannel.unit  \n    inner(0, 5)\n  }\n  .runCollect\n  .debug\n// Output: (Chunk(a0,a1,a2,a3,a4,a5,b0,b1,b2,b3,b4,b5,c0,c1,c2,c3,c4,c5),())\n')),(0,l.yg)("p",null,"In the above example, we create a new channel for every element of the outer channel. The new inner channel is responsible for emitting from zero to five with the label of the outer channel. When an inner channel is done, it moves to the next inner channel sequentially. There is a similar operator called ",(0,l.yg)("inlineCode",{parentName:"p"},"mergeMap")," that works in parallel and doesn't preserve the order of the elements."),(0,l.yg)("h2",{id:"mergemap"},"mergeMap"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"mergeMap")," is a combination of two operators: mapping and merging. Using this operator, we can map every emitted element of a channel (outer channel) to a new channel (inner channel), and then run all the inner channels in parallel and merge them into a single channel. The merge operation is done ",(0,l.yg)("strong",{parentName:"p"},"in parallel"),", so we use this operator when the order of the elements is not important, and we want to process all inner channels in parallel:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.stream._\nimport zio.stream.ZChannel._\n\nZChannel\n  .writeAll("a", "b", "c")\n  .mergeMap(8, 1, MergeStrategy.BackPressure) { l =>\n    def inner(\n        from: Int,\n        to: Int\n    ): ZChannel[Any, Any, Any, Any, Nothing, String, Unit] =\n      if (from <= to) ZChannel.write(s"$l$from") *> inner(from + 1, to)\n      else ZChannel.unit\n    inner(0, 5)\n  }\n  .runCollect\n  .debug\n// Non-deterministic output: (Chunk(a0,a1,a2,b0,b1,b2,b3,c0,b4,c1,a3,c2,b5,a4,c3,c4,a5,c5),())\n')),(0,l.yg)("h2",{id:"collect"},"collect"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"collect")," is a combination of two operations: filtering and mapping. Using this operator, we can filter the elements of a channel using a partial function, and then map the filtered elements:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream._\n\nZChannel\n  .writeAll((1 to 10): _*)\n  .collect { case i if i % 3 == 0 => i * 2 }\n  .runCollect\n  .debug\n// Output: (Chunk(6,12,18),())\n")))}m.isMDXComponent=!0}}]);