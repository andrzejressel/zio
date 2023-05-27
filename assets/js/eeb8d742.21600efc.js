"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[50082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[f]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"refm",title:"RefM"},i=void 0,p={unversionedId:"datatypes/concurrency/refm",id:"version-1.x/datatypes/concurrency/refm",title:"RefM",description:"RefM[A] models a mutable reference to a value of type A in which we can store immutable data, and update it atomically and effectfully.",source:"@site/versioned_docs/version-1.x/datatypes/concurrency/refm.md",sourceDirName:"datatypes/concurrency",slug:"/datatypes/concurrency/refm",permalink:"/version-1.x/datatypes/concurrency/refm",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/concurrency/refm.md",tags:[],version:"1.x",frontMatter:{id:"refm",title:"RefM"},sidebar:"datatypes-sidebar",previous:{title:"ZRefM",permalink:"/version-1.x/datatypes/concurrency/zrefm"},next:{title:"Promise",permalink:"/version-1.x/datatypes/concurrency/promise"}},l={},s=[],c={toc:s},f="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RefM[A]")," models a ",(0,r.kt)("strong",{parentName:"p"},"mutable reference")," to a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," in which we can store ",(0,r.kt)("strong",{parentName:"p"},"immutable")," data, and update it atomically ",(0,r.kt)("strong",{parentName:"p"},"and")," effectfully."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Note:"))),(0,r.kt)("p",{parentName:"blockquote"},"Almost all of ",(0,r.kt)("inlineCode",{parentName:"p"},"RefM")," operations are the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),". We suggest reading ",(0,r.kt)("a",{parentName:"p",href:"/version-1.x/datatypes/concurrency/ref"},(0,r.kt)("inlineCode",{parentName:"a"},"Ref"))," at first if you are not familiar with ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),".")),(0,r.kt)("p",null,"Let's explain how we can update a shared state effectfully with ",(0,r.kt)("inlineCode",{parentName:"p"},"RefM"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," method and all other related methods get an effectful operation and then run they run these effects to change the shared state. This is the main difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"RefM")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ref"),". "),(0,r.kt)("p",null,"In the following example, we should pass in ",(0,r.kt)("inlineCode",{parentName:"p"},"updateEffect")," to it which is the description of an update operation. So ",(0,r.kt)("inlineCode",{parentName:"p"},"RefM")," is going to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"refM")," by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateEffect"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nfor {\n  refM   <- RefM.make("current")\n  updateEffect = IO.effectTotal("update")\n  _ <- refM.update(_ => updateEffect)\n  value <- refM.get\n} yield assert(value == "update")\n')),(0,r.kt)("p",null,"In real-world applications, there are cases where we want to run an effect, e.g. query a database, and then update the shared state. This is where ",(0,r.kt)("inlineCode",{parentName:"p"},"RefM")," can help us to update the shared state in a more actor model fashion. We have a shared mutable state but for every different command or message, and we want execute our effect and update the state. "),(0,r.kt)("p",null,"We can pass in an effectful program into every single update. All of them will be done parallel, but the result will be sequenced in such a fashion that they only touched the state at different times, and we end up with a consistent state at the end."),(0,r.kt)("p",null,"In the following example, we are going to send ",(0,r.kt)("inlineCode",{parentName:"p"},"getAge")," request to usersApi for each user and updating the state respectively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val meanAge =\n  for {\n    ref <- RefM.make(0)\n    _ <- IO.foreachPar(users) { user =>\n      ref.update(sumOfAges =>\n        api.getAge(user).map(_ + sumOfAges)\n      )\n    }\n    v <- ref.get\n  } yield (v / users.length)\n")))}u.isMDXComponent=!0}}]);