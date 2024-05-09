"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[74231],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>m});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},y=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),c=s(t),f=i,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||r;return t?a.createElement(m,o(o({ref:n},y),{},{components:t})):a.createElement(m,o({ref:n},y))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},77676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(58168),i=(t(96540),t(15680));const r={id:"overview_index",title:"Summary"},o=void 0,l={unversionedId:"overview/overview_index",id:"version-1.0.18/overview/overview_index",title:"Summary",description:"ZIO is a library for asynchronous and concurrent programming that is based on pure functional programming.",source:"@site/versioned_docs/version-1.0.18/overview/index.md",sourceDirName:"overview",slug:"/overview/",permalink:"/1.0.18/overview/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/overview/index.md",tags:[],version:"1.0.18",frontMatter:{id:"overview_index",title:"Summary"},sidebar:"overview_sidebar",next:{title:"Creating Effects",permalink:"/1.0.18/overview/overview_creating_effects"}},p={},s=[{value:"ZIO",id:"zio",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"Next Steps",id:"next-steps",level:2}],y={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,a.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"ZIO is a library for asynchronous and concurrent programming that is based on pure functional programming. "),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"For background on how pure functional programming deals with effects like input and output, see the ",(0,i.yg)("a",{parentName:"p",href:"/1.0.18/overview/overview_background"},"Background")," section.")),(0,i.yg)("p",null,"At the core of ZIO is ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO"),", a powerful effect type inspired by Haskell's ",(0,i.yg)("inlineCode",{parentName:"p"},"IO")," monad. This data type lets you solve complex problems with simple, type-safe, testable, and composable code."),(0,i.yg)("h2",{id:"zio"},"ZIO"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO[R, E, A]")," data type has three type parameters:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"R")," - Environment Type"),". The effect requires an environment of type ",(0,i.yg)("inlineCode",{parentName:"li"},"R"),". If this type parameter is ",(0,i.yg)("inlineCode",{parentName:"li"},"Any"),", it means the effect has no requirements, because you can run the effect with any value (for example, the unit value ",(0,i.yg)("inlineCode",{parentName:"li"},"()"),")."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"E")," - Failure Type"),". The effect may fail with a value of type ",(0,i.yg)("inlineCode",{parentName:"li"},"E"),". Some applications will use ",(0,i.yg)("inlineCode",{parentName:"li"},"Throwable"),". If this type parameter is ",(0,i.yg)("inlineCode",{parentName:"li"},"Nothing"),", it means the effect cannot fail, because there are no values of type ",(0,i.yg)("inlineCode",{parentName:"li"},"Nothing"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"A")," - Success Type"),". The effect may succeed with a value of type ",(0,i.yg)("inlineCode",{parentName:"li"},"A"),". If this type parameter is ",(0,i.yg)("inlineCode",{parentName:"li"},"Unit"),", it means the effect produces no useful information, while if it is ",(0,i.yg)("inlineCode",{parentName:"li"},"Nothing"),", it means the effect runs forever (or until failure).")),(0,i.yg)("p",null,"For example, an effect of type ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO[Any, IOException, Byte]")," has no requirements, may fail with a value of type ",(0,i.yg)("inlineCode",{parentName:"p"},"IOException"),", or may succeed with a value of type ",(0,i.yg)("inlineCode",{parentName:"p"},"Byte"),"."),(0,i.yg)("p",null,"A value of type ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO[R, E, A]")," is like an effectful version of the following function type:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"R => Either[E, A]\n")),(0,i.yg)("p",null,"This function, which requires an ",(0,i.yg)("inlineCode",{parentName:"p"},"R"),", might produce either an ",(0,i.yg)("inlineCode",{parentName:"p"},"E"),", representing failure, or an ",(0,i.yg)("inlineCode",{parentName:"p"},"A"),", representing success. ZIO effects are not actually functions, of course, because they model complex effects, like asynchronous and concurrent effects."),(0,i.yg)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," data type is the only effect type in ZIO. However, there are a family of type aliases and companion objects that simplify common cases:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"UIO[A]")," \u2014 This is a type alias for ",(0,i.yg)("inlineCode",{parentName:"li"},"ZIO[Any, Nothing, A]"),", which represents an effect that has no requirements, and cannot fail, but can succeed with an ",(0,i.yg)("inlineCode",{parentName:"li"},"A"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"URIO[R, A]")," \u2014 This is a type alias for ",(0,i.yg)("inlineCode",{parentName:"li"},"ZIO[R, Nothing, A]"),", which represents an effect that requires an ",(0,i.yg)("inlineCode",{parentName:"li"},"R"),", and cannot fail, but can succeed with an ",(0,i.yg)("inlineCode",{parentName:"li"},"A"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Task[A]")," \u2014 This is a type alias for ",(0,i.yg)("inlineCode",{parentName:"li"},"ZIO[Any, Throwable, A]"),", which represents an effect that has no requirements, and may fail with a ",(0,i.yg)("inlineCode",{parentName:"li"},"Throwable")," value, or succeed with an ",(0,i.yg)("inlineCode",{parentName:"li"},"A"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"RIO[R, A]")," \u2014 This is a type alias for ",(0,i.yg)("inlineCode",{parentName:"li"},"ZIO[R, Throwable, A]"),", which represents an effect that requires an ",(0,i.yg)("inlineCode",{parentName:"li"},"R"),", and may fail with a ",(0,i.yg)("inlineCode",{parentName:"li"},"Throwable")," value, or succeed with an ",(0,i.yg)("inlineCode",{parentName:"li"},"A"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"IO[E, A]")," \u2014 This is a type alias for ",(0,i.yg)("inlineCode",{parentName:"li"},"ZIO[Any, E, A]"),", which represents an effect that has no requirements, and may fail with an ",(0,i.yg)("inlineCode",{parentName:"li"},"E"),", or succeed with an ",(0,i.yg)("inlineCode",{parentName:"li"},"A"),".")),(0,i.yg)("p",null,"These type aliases all have companion objects, and these companion objects have methods that can be used to construct values of the appropriate type."),(0,i.yg)("p",null,"If you are new to functional effects, we recommend starting with the ",(0,i.yg)("inlineCode",{parentName:"p"},"Task")," type, which has a single type parameter, and corresponds most closely to the ",(0,i.yg)("inlineCode",{parentName:"p"},"Future")," data type built into Scala's standard library."),(0,i.yg)("p",null,"If you are using ",(0,i.yg)("em",{parentName:"p"},"Cats Effect")," libraries, you may find the ",(0,i.yg)("inlineCode",{parentName:"p"},"RIO")," type useful, since it allows you to thread environments through third-party libraries and your application."),(0,i.yg)("p",null,"No matter what type alias you use in your application, ",(0,i.yg)("inlineCode",{parentName:"p"},"UIO")," can be useful for describing infallible effects, including those resulting from handling all errors."),(0,i.yg)("p",null,"Finally, if you are an experienced functional programmer, then direct use of the ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," data type is recommended, although you may find it useful to create your own family of type aliases in different parts of your application."),(0,i.yg)("h2",{id:"next-steps"},"Next Steps"),(0,i.yg)("p",null,"If you are comfortable with the ZIO data type, and its family of type aliases, the next step is learning how to ",(0,i.yg)("a",{parentName:"p",href:"/1.0.18/overview/overview_creating_effects"},"create effects"),"."))}u.isMDXComponent=!0}}]);