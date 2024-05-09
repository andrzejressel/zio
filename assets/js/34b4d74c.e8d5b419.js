"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[88616],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),y=a,m=p["".concat(u,".").concat(y)]||p[y]||d[y]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},88443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const i={id:"creating-data-sources",title:"Creating Data Sources"},o=void 0,s={unversionedId:"zio-query/creating-data-sources",id:"zio-query/creating-data-sources",title:"Creating Data Sources",description:"To construct a ZQuery that executes a request, you first need to create a DataSource. A DataSource[R, A] requires an environment R and is capable of executing requests of type A. It is defined in terms of:",source:"@site/docs/zio-query/creating-data-sources.md",sourceDirName:"zio-query",slug:"/zio-query/creating-data-sources",permalink:"/zio-query/creating-data-sources",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-query/creating-data-sources.md",tags:[],version:"current",frontMatter:{id:"creating-data-sources",title:"Creating Data Sources"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Query",permalink:"/zio-query/"},next:{title:"Creating Queries",permalink:"/zio-query/creating-queries"}},u={},l=[],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"To construct a ",(0,a.yg)("inlineCode",{parentName:"p"},"ZQuery")," that executes a request, you first need to create a ",(0,a.yg)("inlineCode",{parentName:"p"},"DataSource"),". A ",(0,a.yg)("inlineCode",{parentName:"p"},"DataSource[R, A]")," requires an environment ",(0,a.yg)("inlineCode",{parentName:"p"},"R")," and is capable of executing requests of type ",(0,a.yg)("inlineCode",{parentName:"p"},"A"),". It is defined in terms of:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"an ",(0,a.yg)("inlineCode",{parentName:"li"},"identifier")," that uniquely identifies the data source"),(0,a.yg)("li",{parentName:"ul"},"an effectual function ",(0,a.yg)("inlineCode",{parentName:"li"},"runAll")," from a ",(0,a.yg)("inlineCode",{parentName:"li"},"Chunk[Chunk[A]]")," of requests to a ",(0,a.yg)("inlineCode",{parentName:"li"},"CompletedRequestMap")," of requests and results")),(0,a.yg)("p",null,"The outer ",(0,a.yg)("inlineCode",{parentName:"p"},"Chunk")," represents batches of requests that must be performed sequentially. The inner ",(0,a.yg)("inlineCode",{parentName:"p"},"Chunk")," represents a batch of requests that can be performed in parallel. This allows data sources to introspect on all the requests being executed and optimize the query."),(0,a.yg)("p",null,"Let's consider ",(0,a.yg)("inlineCode",{parentName:"p"},"getUserNameById")," from the previous example."),(0,a.yg)("p",null,"We need to define a corresponding request type that extends ",(0,a.yg)("inlineCode",{parentName:"p"},"Request")," for a given response type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"case class GetUserName(id: Int) extends Request[Throwable, String]\n")),(0,a.yg)("p",null,"Now let's build the corresponding ",(0,a.yg)("inlineCode",{parentName:"p"},"DataSource"),". We will create a ",(0,a.yg)("inlineCode",{parentName:"p"},"Batched")," data source that executes requests that can be performed in parallel in batches but does not further optimize batches of requests that must be performed sequentially. We need to implement the following functions:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"lazy val UserDataSource = new DataSource.Batched[Any, GetUserName] {\n  val identifier: String = ???\n  def run(requests: Chunk[GetUserName])(implicit trace: Trace): ZIO[Any, Nothing, CompletedRequestMap] = ???\n}\n")),(0,a.yg)("p",null,'We will use "UserDataSource" as our identifier. This name should not be reused for other data sources.'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'val identifier: String = "UserDataSource"\n')),(0,a.yg)("p",null,"We will define two different behaviors depending on whether we receive a single request or multiple requests at once. For each request, we need to insert into the result map a value of type ",(0,a.yg)("inlineCode",{parentName:"p"},"Exit")," (",(0,a.yg)("inlineCode",{parentName:"p"},"fail")," for an error and ",(0,a.yg)("inlineCode",{parentName:"p"},"succeed")," for a success)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"def run(requests: Chunk[GetUserName]): ZIO[Any, Nothing, CompletedRequestMap] =\n  requests.toList match {\n    case request :: Nil =>\n      // get user by ID e.g. SELECT name FROM users WHERE id = $id\n      val result: Task[String] = ???\n      result.exit.map(CompletedRequestMap.single(request, _))\n    case batch =>\n      // get multiple users at once e.g. SELECT id, name FROM users WHERE id IN ($ids)\n      val result: Task[List[(Int, String)]] = ???\n      result.foldCause(\n        CompletedRequestMap.failCause(requests, _),\n        CompletedRequestMap.fromIterableWith(_)(kv => GetUserName(kv._1), kv => Exit.succeed(kv._2))\n      )\n  }\n")),(0,a.yg)("p",null,"Now to build a ",(0,a.yg)("inlineCode",{parentName:"p"},"ZQuery"),", we can use ",(0,a.yg)("inlineCode",{parentName:"p"},"ZQuery.fromRequest")," and just pass the request and the data source:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"def getUserNameById(id: Int): ZQuery[Any, Throwable, String] =\n  ZQuery.fromRequest(GetUserName(id))(UserDataSource)\n")),(0,a.yg)("p",null,"To run a ",(0,a.yg)("inlineCode",{parentName:"p"},"ZQuery"),", simply use ",(0,a.yg)("inlineCode",{parentName:"p"},"ZQuery#run")," which will return a ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO[R, E, A]"),"."))}d.isMDXComponent=!0}}]);