"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[64936],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),y=a,g=p["".concat(c,".").concat(y)]||p[y]||m[y]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},76644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const o={id:"counter",title:"Counter"},i=void 0,l={unversionedId:"reference/observability/metrics/counter",id:"reference/observability/metrics/counter",title:"Counter",description:"A Counter is a metric representing a single numerical value that may be incremented over time. A typical use of this metric would be to track the number of a certain type of request received.",source:"@site/docs/reference/observability/metrics/counter.md",sourceDirName:"reference/observability/metrics",slug:"/reference/observability/metrics/counter",permalink:"/reference/observability/metrics/counter",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/observability/metrics/counter.md",tags:[],version:"current",frontMatter:{id:"counter",title:"Counter"},sidebar:"reference-sidebar",previous:{title:"Introduction to ZIO Metrics",permalink:"/reference/observability/metrics/"},next:{title:"Gauge",permalink:"/reference/observability/metrics/gauge"}},c={},u=[{value:"API",id:"api",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Examples",id:"examples",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"A ",(0,a.yg)("inlineCode",{parentName:"p"},"Counter")," is a metric representing a single numerical value that may be incremented over time. A typical use of this metric would be to track the number of a certain type of request received."),(0,a.yg)("p",null,"With a counter, the quantity of interest is the cumulative value over time, as opposed to a ",(0,a.yg)("a",{parentName:"p",href:"/reference/observability/metrics/gauge"},"gauge")," where the quantity of interest is the value as of a specific point in time."),(0,a.yg)("h2",{id:"api"},"API"),(0,a.yg)("p",null,"With one of the following constructors, we can create a counter of ",(0,a.yg)("inlineCode",{parentName:"p"},"Long"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Double")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"Int")," type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"object Metric {\n  def counter(name: String): Counter[Long] = ???\n  def counterDouble(name: String): Counter[Double] = ???\n  def counterInt(name: String): Counter[Int] = ???\n}\n")),(0,a.yg)("h2",{id:"use-cases"},"Use Cases"),(0,a.yg)("p",null,"We use the counter metric type for any value that increases, such as request counts. Note that we should never use the counter for a value that can decrease."),(0,a.yg)("p",null,"So when we should use counters?"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When we want to track a value over time, that only goes up"),(0,a.yg)("li",{parentName:"ul"},"When we want to measure the increasing rate of something, how fast something is growing, such as request rates.")),(0,a.yg)("p",null,"Here are some of the use cases:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Request Counts"),(0,a.yg)("li",{parentName:"ul"},"Completed Tasks"),(0,a.yg)("li",{parentName:"ul"},"Error Counts")),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("p",null,"Create a counter named ",(0,a.yg)("inlineCode",{parentName:"p"},"countAll")," which is incremented by ",(0,a.yg)("inlineCode",{parentName:"p"},"1")," every time it is invoked:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.metrics._\nval countAll = Metric.counter("countAll").fromConst(1)\n')),(0,a.yg)("p",null,"Now the counter can be applied to any effect. Note, that the same aspect can be applied to more than one effect. In the example we would count the sum of executions of both effects in the for comprehension:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"val myApp = for {\n  _ <- ZIO.unit @@ countAll\n  _ <- ZIO.unit @@ countAll\n} yield ()\n")),(0,a.yg)("p",null,"Or we can apply them in recurrence situations:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'(zio.Random.nextLongBounded(10) @@ Metric.counter("request_counts")).repeatUntil(_ == 7)\n')),(0,a.yg)("p",null,"Create a counter named ",(0,a.yg)("inlineCode",{parentName:"p"},"countBytes")," that can be applied to effects having the output type ",(0,a.yg)("inlineCode",{parentName:"p"},"Double"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'val countBytes = Metric.counter("countBytes")\n')),(0,a.yg)("p",null,"Now we can apply it to effects producing ",(0,a.yg)("inlineCode",{parentName:"p"},"Double")," (in a real application the value might be the number of bytes read from a stream or something similar):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"val myApp = Random.nextLongBetween(0, 100) @@ countBytes\n")))}m.isMDXComponent=!0}}]);