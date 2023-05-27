"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"aspects",title:"Aspects"},i="Aspects",s={unversionedId:"zio-aws/aspects",id:"zio-aws/aspects",title:"Aspects",description:"It is possible to define aspects of type AwsCallAspect[R] that can modify the behavior of the AWS client modules. This can be used for example",source:"@site/docs/zio-aws/aspects.md",sourceDirName:"zio-aws",slug:"/zio-aws/aspects",permalink:"/zio-aws/aspects",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-aws/aspects.md",tags:[],version:"current",frontMatter:{id:"aspects",title:"Aspects"},sidebar:"ecosystem-sidebar",previous:{title:"HTTP",permalink:"/zio-aws/http"},next:{title:"Examples",permalink:"/zio-aws/examples"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aspects"},"Aspects"),(0,a.kt)("p",null,"It is possible to define ",(0,a.kt)("em",{parentName:"p"},"aspects")," of type ",(0,a.kt)("inlineCode",{parentName:"p"},"AwsCallAspect[R]")," that can modify the behavior of the AWS client modules. This can be used for example\nto add logging or metrics to the AWS clients and it's also the recommended way to handle retries or apply rate limiting and other similar patterns."),(0,a.kt)("p",null,"The library contains two default aspects, implementing logging and metrics on top of ZIO 2's core capabilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val callLogging: AwsCallAspect[Any]\ndef callDuration(prefix: String, boundaries: MetricKeyType.Histogram.Boundaries): AwsCallAspect[Any]\n")),(0,a.kt)("p",null,"To define an aspect, create an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"AwsCallAspect")," trait:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val callLogging: AwsCallAspect[Any] =\n    new AwsCallAspect[Any] {\n      override final def apply[R, E >: AwsError, A <: Described[_]](\n          f: ZIO[R, E, A]\n      )(implicit trace: Trace): ZIO[R, E, A] = {\n        f.either.timed\n          .flatMap {\n            case (duration, Right(r)) =>\n              ZIO.succeed(r)\n            case (duration, Left(error)) =>\n              Console\n                .printLine(\n                  s"AWS call FAILED in $duration with $error"\n                )\n                .ignore *> ZIO.fail(error)\n          }\n      }\n    }\n// callLogging: AwsCallAspect[Any] = repl.MdocSession$MdocApp$$anon$1@2ac186c1\n')),(0,a.kt)("p",null,"This aspect can attached to a ",(0,a.kt)("em",{parentName:"p"},"client layer")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@@")," operator. Multiple aspects can be composed with ",(0,a.kt)("inlineCode",{parentName:"p"},">>>"),"."),(0,a.kt)("p",null,"To see a full example, check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vigoo/zio-aws/blob/master/examples/example2/src/main/scala/Main.scala"},"example #2"),"."))}m.isMDXComponent=!0}}]);