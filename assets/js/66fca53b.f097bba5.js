"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[67668],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,i(i({ref:r},l),{},{components:t})):a.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49728:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const o={id:"rmanaged",title:"RManaged"},i=void 0,s={unversionedId:"datatypes/resource/rmanaged",id:"version-1.x/datatypes/resource/rmanaged",title:"RManaged",description:"RManaged[R, A] is a type alias for ZManaged[R, Throwable, A], which represents a managed resource that requires an R, and may fail with a Throwable value, or succeed with an A.",source:"@site/versioned_docs/version-1.x/datatypes/resource/rmanaged.md",sourceDirName:"datatypes/resource",slug:"/datatypes/resource/rmanaged",permalink:"/version-1.x/datatypes/resource/rmanaged",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/resource/rmanaged.md",tags:[],version:"1.x",frontMatter:{id:"rmanaged",title:"RManaged"},sidebar:"datatypes-sidebar",previous:{title:"TaskManaged",permalink:"/version-1.x/datatypes/resource/task-managed"},next:{title:"UManaged",permalink:"/version-1.x/datatypes/resource/umanaged"}},p={},c=[],l={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"RManaged[R, A]")," is a type alias for ",(0,n.kt)("inlineCode",{parentName:"p"},"ZManaged[R, Throwable, A]"),", which represents a managed resource that requires an ",(0,n.kt)("inlineCode",{parentName:"p"},"R"),", and may fail with a ",(0,n.kt)("inlineCode",{parentName:"p"},"Throwable")," value, or succeed with an ",(0,n.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"RManaged")," type alias is defined as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"type RManaged[-R, +A] = ZManaged[R, Throwable, A]\n")))}u.isMDXComponent=!0}}]);