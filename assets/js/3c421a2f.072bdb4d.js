"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[27065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"streaming-response",title:"Streaming Response Example",sidebar_label:"Streaming Response"},s=void 0,i={unversionedId:"zio-http/examples/advanced/streaming-response",id:"zio-http/examples/advanced/streaming-response",title:"Streaming Response Example",description:"",source:"@site/docs/zio-http/examples/advanced/streaming-response.md",sourceDirName:"zio-http/examples/advanced",slug:"/zio-http/examples/advanced/streaming-response",permalink:"/zio-http/examples/advanced/streaming-response",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/examples/advanced/streaming-response.md",tags:[],version:"current",frontMatter:{id:"streaming-response",title:"Streaming Response Example",sidebar_label:"Streaming Response"},sidebar:"ecosystem-sidebar",previous:{title:"Streaming File",permalink:"/zio-http/examples/advanced/streaming-file"},next:{title:"WebSocket Server",permalink:"/zio-http/examples/advanced/websocket-server"}},p={},c=[],l={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.{http, _}\nimport zio.stream.ZStream\nimport zio.http._\n\n/**\n * Example to encode content using a ZStream\n */\nobject StreamingResponse extends ZIOAppDefault {\n  // Starting the server (for more advanced startup configuration checkout `HelloWorldAdvanced`)\n  def run = Server.serve(app).provide(Server.default)\n\n  // Create a message as a Chunk[Byte]\n  def message                    = Chunk.fromArray("Hello world !\\r\\n".getBytes(Charsets.Http))\n  // Use `Http.collect` to match on route\n  def app: HttpApp[Any, Nothing] = Http.collect[Request] {\n\n    // Simple (non-stream) based route\n    case Method.GET -> !! / "health" => Response.ok\n\n    // ZStream powered response\n    case Method.GET -> !! / "stream" =>\n      http.Response(\n        status = Status.Ok,\n        headers = Headers(Header.ContentLength(message.length.toLong)),\n        body = Body.fromStream(ZStream.fromChunk(message)), // Encoding content using a ZStream\n      )\n  }\n}\n')))}d.isMDXComponent=!0}}]);