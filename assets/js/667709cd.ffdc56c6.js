"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[26173],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>f});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,f=m["".concat(p,".").concat(c)]||m[c]||g[c]||i;return a?r.createElement(f,o(o({ref:t},s),{},{components:a})):r.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},82150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(58168),n=(a(96540),a(15680));const i={id:"from-cats-effect",title:"How to Migrate from Cats Effect to ZIO?",sidebar_label:"Migration from Cats Effect"},o=void 0,l={unversionedId:"guides/migrate/from-cats-effect",id:"guides/migrate/from-cats-effect",title:"How to Migrate from Cats Effect to ZIO?",description:"Cats IO[A] can be easily replaced with ZIO's Task[A] (an alias for ZIO[Any, Throwable, A]).",source:"@site/docs/guides/migrate/from-cats-effect.md",sourceDirName:"guides/migrate",slug:"/guides/migrate/from-cats-effect",permalink:"/guides/migrate/from-cats-effect",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/migrate/from-cats-effect.md",tags:[],version:"current",frontMatter:{id:"from-cats-effect",title:"How to Migrate from Cats Effect to ZIO?",sidebar_label:"Migration from Cats Effect"},sidebar:"guides-sidebar",previous:{title:"Migration From Akka",permalink:"/guides/migrate/from-akka"},next:{title:"Migration from Monix",permalink:"/guides/migrate/from-monix"}},p={},d=[{value:"Methods on cats.FlatMap.Ops",id:"methods-on-catsflatmapops",level:3}],s={toc:d},m="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Cats ",(0,n.yg)("inlineCode",{parentName:"p"},"IO[A]")," can be easily replaced with ZIO's ",(0,n.yg)("inlineCode",{parentName:"p"},"Task[A]")," (an alias for ",(0,n.yg)("inlineCode",{parentName:"p"},"ZIO[Any, Throwable, A]"),").\nTranslation should be relatively straightforward. Below, you'll find tables showing the ZIO equivalents of\nvarious ",(0,n.yg)("inlineCode",{parentName:"p"},"cats.*"),"'s methods."),(0,n.yg)("h3",{id:"methods-on-catsflatmapops"},"Methods on cats.FlatMap.Ops"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"cats"),(0,n.yg)("th",{parentName:"tr",align:null},"ZIO"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"flatMap")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"flatMap"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"flatten")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"flatten"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"productREval")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"zipRight"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"productLEval")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"zipLeft"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"mproduct")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"zipPar"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"flatTap")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"tap"))))))}g.isMDXComponent=!0}}]);