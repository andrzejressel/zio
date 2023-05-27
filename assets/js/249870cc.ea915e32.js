"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[99368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"resources",title:"ZIO Prelude Resources",sidebar_label:"Resources"},s=void 0,i={unversionedId:"zio-prelude/resources",id:"zio-prelude/resources",title:"ZIO Prelude Resources",description:"- Refactoring Functional Type Classes - slides by John De Goes and Adam Fraser,",source:"@site/docs/zio-prelude/resources.md",sourceDirName:"zio-prelude",slug:"/zio-prelude/resources",permalink:"/zio-prelude/resources",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/resources.md",tags:[],version:"current",frontMatter:{id:"resources",title:"ZIO Prelude Resources",sidebar_label:"Resources"},sidebar:"ecosystem-sidebar",previous:{title:"ZPure",permalink:"/zio-prelude/zpure/"},next:{title:"ZIO Process",permalink:"/zio-process/"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.slideshare.net/jdegoes/refactoring-functional-type-classes"},"Refactoring Functional Type Classes")," - slides by John De Goes and Adam Fraser,"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/OwmHgL9F_9Q"},"SF Scala: Reimagining Functional Type Classes")," - a talk by John A. De Goes and Adam Fraser"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/OzoMofqsPg8"},"Exploring ZIO Prelude The game-changer for type classes in Scala")," - talk by Jorge V\xe1squez"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://justinhj.github.io/2020/08/02/whats-ap-with-zio-prelude.html"},"What's Ap with ZIO Prelude?")," - an article by justinhj"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=OwmHgL9F_9Q"},"SF Scala: Reimagining Functional Type Classes")," John A. De Goes and Adam Fraser (August 2020) \u2014 In this presentation, John A. De Goes and Adam Fraser introduce a new Scala library with a completely different factoring of functional type classes\u2014one which throws literally everything away and starts from a clean slate. In this new factoring, type classes leverage Scala\u2019s strengths, including variance and modularity. Pieces fit together cleanly and uniformly, and in a way that satisfies existing use cases, but enables new ones never before possible. Finally, type classes are named, organized, and described in a way that makes teaching them easier, without compromising on algebraic principles."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Sinde_P7nmY"},"The Terror-Free Guide To Introducing Functional Scala At Work")," by Jorge Vasquez (December 2020) \u2014 Too often, our applications are dominated by boilerplate that's not fun to write or test, and that makes our business logic complicated. In object-oriented programming, classes and interfaces help us with abstraction to reduce boilerplate. But, in functional programming, we use type classes. Historically, type classes in functional programming have been very complex and confusing, partially because they import ideas from Haskell that don't make sense in Scala, and partially because of their esoteric origins in category theory. In this presentation, Jorge V\xe1squez presents a new library called ZIO Prelude, which offers a distinctly Scala take on Functional Abstractions, and you will learn how you can eliminate common types of boilerplate by using it. Come see how you can improve your happiness and productivity with a new take on what it means to do functional programming in Scala!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.slideshare.net/jv2301/the-terrorfree-guide-to-introducing-functional-scala-at-work"},"The Terror-Free Guide to Introducing Functional Scala at Work")," - slides by Jorge V\xe1squez,"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=69ngoqVXKPI"},"ZIO WORLD - ZIO Prelude")," by Jorge Vasquez (March 2020) \u2014 In this talk, Jorge Vasques discusses his work bringing refined newtypes to ZIO Prelude, which are working natively on Scala 3 with a beautiful syntax and DSL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=M3HmROwOoRU"},"Zymposium - ZIO Prelude")," by Adam Fraser and Kit Langton (May 2021) \u2014 We'll see how ZIO Prelude gives us the tools for solving some common problems in day-to-day development. We'll also see how ZIO Prelude provides a set of abstractions we can use for inspiration when implementing our own data types but never forces us to use these abstractions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=97Yc0Ub9aZ8"},"Zymposium - Prelude Redux (Type-classes without Type-classes)")," by Adam and Kit Langton (May 2021) \u2014 We will see how thinking in terms of producers and consumers of values can give us powerful insights into the structure of our programs and how we can use these to develop composable operators for own data types, regardless of whether or not we choose to depend on a library like ZIO Prelude.")))}d.isMDXComponent=!0}}]);