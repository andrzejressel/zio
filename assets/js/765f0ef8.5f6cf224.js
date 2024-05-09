"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[68390],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,u=p["".concat(s,".").concat(f)]||p[f]||h[f]||i;return n?r.createElement(u,o(o({ref:t},m),{},{components:n})):r.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const i={id:"index",title:"ZIO Schema Operations",sidebar_label:"Operations"},o=void 0,c={unversionedId:"zio-schema/operations/index",id:"zio-schema/operations/index",title:"ZIO Schema Operations",description:"Once we have defined our schemas, we can use them to perform a variety of operations. In this section, we will explore some of the most common operations that we can perform on schemas.",source:"@site/docs/zio-schema/operations/index.md",sourceDirName:"zio-schema/operations",slug:"/zio-schema/operations/",permalink:"/zio-schema/operations/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/operations/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"ZIO Schema Operations",sidebar_label:"Operations"},sidebar:"ecosystem-sidebar",previous:{title:"Automatic Schema Derivation",permalink:"/zio-schema/automatic-schema-derivation"},next:{title:"The Default Value",permalink:"/zio-schema/operations/the-default-value"}},s={},l=[],m={toc:l},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Once we have defined our schemas, we can use them to perform a variety of operations. In this section, we will explore some of the most common operations that we can perform on schemas."),(0,a.yg)("p",null,"Before diving into the details, let's see a quick overview of the operations that we can perform on schemas:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"sealed trait Schema[A] {\n  self =>\n\n  type Accessors[Lens[_, _, _], Prism[_, _, _], Traversal[_, _]]\n\n  def ? : Schema[Option[A]]\n\n  def <*>[B](that: Schema[B]): Schema[(A, B)]\n\n  def <+>[B](that: Schema[B]): Schema[scala.util.Either[A, B]]\n\n  def defaultValue: scala.util.Either[String, A]\n\n  def annotations: Chunk[Any]\n\n  def ast: MetaSchema \n\n  def annotate(annotation: Any): Schema[A]\n\n  def coerce[B](newSchema: Schema[B]): Either[String, Schema[B]]\n\n  def diff(thisValue: A, thatValue: A): Patch[A]\n\n  def patch(oldValue: A, diff: Patch[A]): scala.util.Either[String, A]\n\n  def fromDynamic(value: DynamicValue): scala.util.Either[String, A] \n\n  def makeAccessors(b: AccessorBuilder): Accessors[b.Lens, b.Prism, b.Traversal]\n\n  def migrate[B](newSchema: Schema[B]): Either[String, A => scala.util.Either[String, B]]\n\n  def optional: Schema[Option[A]]\n\n  def ordering: Ordering[A]\n\n  def orElseEither[B](that: Schema[B]): Schema[scala.util.Either[A, B]]\n\n  def repeated: Schema[Chunk[A]]\n\n  def serializable: Schema[Schema[A]]\n\n  def toDynamic(value: A): DynamicValue\n\n  def transform[B](f: A => B, g: B => A): Schema[B]\n  \n  def transformOrFail[B](f: A => scala.util.Either[String, B], g: B => scala.util.Either[String, A]): Schema[B]\n\n  def validate(value: A)(implicit schema: Schema[A]): Chunk[ValidationError]\n\n  def zip[B](that: Schema[B]): Schema[(A, B)]\n}\n")))}h.isMDXComponent=!0}}]);