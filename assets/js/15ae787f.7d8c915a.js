"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[84509],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},f="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,u=f["".concat(l,".").concat(m)]||f[m]||v[m]||i;return t?n.createElement(u,a(a({ref:r},p),{},{components:t})):n.createElement(u,a({ref:r},p))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76919:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const i={id:"overview_performance",title:"Performance"},a=void 0,c={unversionedId:"overview/overview_performance",id:"version-1.x/overview/overview_performance",title:"Performance",description:"zio has excellent performance, featuring a hand-optimized, low-level interpreter that achieves zero allocations for right-associated binds, and minimal allocations for left-associated binds.",source:"@site/versioned_docs/version-1.x/overview/performance.md",sourceDirName:"overview",slug:"/overview/overview_performance",permalink:"/version-1.x/overview/overview_performance",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/overview/performance.md",tags:[],version:"1.x",frontMatter:{id:"overview_performance",title:"Performance"},sidebar:"overview-sidebar",previous:{title:"Background",permalink:"/version-1.x/overview/overview_background"},next:{title:"Platforms",permalink:"/version-1.x/overview/overview_platforms"}},l={},s=[],p={toc:s},f="wrapper";function v(e){let{components:r,...t}=e;return(0,o.kt)(f,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"zio")," has excellent performance, featuring a hand-optimized, low-level interpreter that achieves zero allocations for right-associated binds, and minimal allocations for left-associated binds."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"benchmarks")," project may be used to compare ",(0,o.kt)("inlineCode",{parentName:"p"},"IO")," with other effect monads, including ",(0,o.kt)("inlineCode",{parentName:"p"},"Future")," (which is not an effect monad but is included for reference), Monix ",(0,o.kt)("inlineCode",{parentName:"p"},"Task"),", and Cats ",(0,o.kt)("inlineCode",{parentName:"p"},"IO"),"."),(0,o.kt)("p",null,"As of the time of this writing, ",(0,o.kt)("inlineCode",{parentName:"p"},"IO")," is significantly faster than or at least comparable to all other purely functional solutions."))}v.isMDXComponent=!0}}]);