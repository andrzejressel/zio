"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[15056],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var r=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),f=l,d=c["".concat(p,".").concat(f)]||c[f]||u[f]||a;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(58168),l=(n(96540),n(15680));const a={id:"html-templating",title:"HTML Templating Example",sidebar_label:"HTML Templating"},o=void 0,i={unversionedId:"zio-http/examples/html-templating",id:"zio-http/examples/html-templating",title:"HTML Templating Example",description:"",source:"@site/docs/zio-http/examples/html-templating.md",sourceDirName:"zio-http/examples",slug:"/zio-http/examples/html-templating",permalink:"/zio-http/examples/html-templating",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/examples/html-templating.md",tags:[],version:"current",frontMatter:{id:"html-templating",title:"HTML Templating Example",sidebar_label:"HTML Templating"},sidebar:"ecosystem-sidebar",previous:{title:"Serving Static Files",permalink:"/zio-http/examples/serving-static-files"},next:{title:"WebSocket Server & Client",permalink:"/zio-http/examples/websocket"}},p={},s=[],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,l.yg)(c,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-scala",metastring:'title="zio-http-example/src/main/scala/example/HtmlTemplating.scala" showLineNumbers"',title:'"zio-http-example/src/main/scala/example/HtmlTemplating.scala"','showLineNumbers"':!0},'package example\n\nimport zio._\n\nimport zio.http._\n\nobject HtmlTemplating extends ZIOAppDefault {\n  // Importing everything from `zio.html`\n  import zio.http.template._\n\n  def app: HttpApp[Any] = {\n    // Html response takes in a `Html` instance.\n    Handler.html {\n\n      // Support for default Html tags\n      html(\n        // Support for child nodes\n        head(\n          title("ZIO Http"),\n        ),\n        body(\n          div(\n            // Support for css class names\n            css := "container text-align-left",\n            h1("Hello World"),\n            ul(\n              // Support for inline css\n              styles := "list-style: none",\n              li(\n                // Support for attributes\n                a(href := "/hello/world", "Hello World"),\n              ),\n              li(\n                a(href := "/hello/world/again", "Hello World Again"),\n              ),\n\n              // Support for Seq of Html elements\n              (2 to 10) map { i =>\n                li(\n                  a(href := s"/hello/world/i", s"Hello World $i"),\n                )\n              },\n            ),\n          ),\n        ),\n      )\n    }\n  }.toHttpApp\n\n  def run = Server.serve(app).provide(Server.default)\n}\n')))}u.isMDXComponent=!0}}]);