"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[37132],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={id:"remoting",title:"Remoting"},a=void 0,s={unversionedId:"zio-actors/remoting",id:"zio-actors/remoting",title:"Remoting",description:"Remoting makes it possible to lookup for actors that reside on another ActorSystems.",source:"@site/docs/zio-actors/remoting.md",sourceDirName:"zio-actors",slug:"/zio-actors/remoting",permalink:"/zio-actors/remoting",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-actors/remoting.md",tags:[],version:"current",frontMatter:{id:"remoting",title:"Remoting"},sidebar:"ecosystem-sidebar",previous:{title:"Supervision",permalink:"/zio-actors/supervision"},next:{title:"Persistence",permalink:"/zio-actors/persistence"}},c={},l=[{value:"Serialization",id:"serialization",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Remoting makes it possible to lookup for actors that reside on another ",(0,o.kt)("inlineCode",{parentName:"p"},"ActorSystems"),".\nThe configuration is done by providing address and port in configuration file\n(",(0,o.kt)("a",{parentName:"p",href:"/zio-actors/basics#configuration"},"see Configuration section"),") that the ",(0,o.kt)("inlineCode",{parentName:"p"},"ActorSystem")," will be bound to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.actors._\n\nfor {\n  _ <- ActorSystem("mySystem")\n} yield ()\n')),(0,o.kt)("p",null,"Then we can ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," actors from another ActorSystem and send messages thanks to underlying socket communication."),(0,o.kt)("h2",{id:"serialization"},"Serialization"),(0,o.kt)("p",null,'Currently serialization is done via Java Serialization.\nUser defined messages are serialized "as is" except for ',(0,o.kt)("inlineCode",{parentName:"p"},"ActorRefs"),",\nwhich are serialized into actor's absolute path and deserialized into a remote ",(0,o.kt)("inlineCode",{parentName:"p"},"ActorRef")," pointing to the original one:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"diagram",src:r(24550).Z,width:"748",height:"326"})))}u.isMDXComponent=!0},24550:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/remote-8afa99f4d76522de7862a2f92d17d777.svg"}}]);