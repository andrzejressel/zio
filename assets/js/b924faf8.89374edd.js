"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[69805],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},41198:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={id:"index",title:"Introduction to ZIO's Built-in Services"},a=void 0,s={unversionedId:"reference/services/index",id:"reference/services/index",title:"Introduction to ZIO's Built-in Services",description:"ZIO already provides four built-in services:",source:"@site/docs/reference/services/index.md",sourceDirName:"reference/services",slug:"/reference/services/",permalink:"/reference/services/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/services/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO's Built-in Services"},sidebar:"reference-sidebar",previous:{title:"Interruption Model",permalink:"/reference/interruption/"},next:{title:"Console",permalink:"/reference/services/console"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ZIO already provides four built-in services:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/reference/services/console"},"Console"))," \u2014 Operations for reading/writing strings from/to the standard input, output, and error console."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/reference/services/clock"},"Clock"))," \u2014 Contains some functionality related to time and scheduling."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/reference/services/random"},"Random"))," \u2014 Provides utilities to generate random numbers."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/reference/services/system"},"System"))," \u2014 Contains several useful functions related to system environments and properties.")),(0,o.kt)("p",null,"When we use these services we don't need to provide their corresponding environment explicitly. ZIO provides built-in live version of ZIO services to our effects, so we do not need to provide them manually."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\nobject MainApp extends ZIOAppDefault {\n  val myApp: ZIO[Any, IOException, Unit] = \n    for {\n      date <- Clock.currentDateTime\n      _    <- ZIO.logInfo(s"Application started at $date")\n      _    <- Console.print("Enter your name: ")\n      name <- Console.readLine\n      _    <- Console.printLine(s"Hello, $name!")\n    } yield ()\n\n  def run = myApp\n}\n')))}d.isMDXComponent=!0}}]);