"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[60682],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,y=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const o={id:"websocketframe",title:"WebSocketFrame"},i=void 0,c={unversionedId:"zio-http/dsl/socket/websocketframe",id:"zio-http/dsl/socket/websocketframe",title:"WebSocketFrame",description:"In the WebSocket protocol, communication happens using frames. ZIO",source:"@site/docs/zio-http/dsl/socket/websocketframe.md",sourceDirName:"zio-http/dsl/socket",slug:"/zio-http/dsl/socket/websocketframe",permalink:"/zio-http/dsl/socket/websocketframe",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/dsl/socket/websocketframe.md",tags:[],version:"current",frontMatter:{id:"websocketframe",title:"WebSocketFrame"},sidebar:"ecosystem-sidebar",previous:{title:"Socket",permalink:"/zio-http/dsl/socket/"},next:{title:"Template",permalink:"/zio-http/dsl/template"}},l={},s=[{value:"Text",id:"text",level:2},{value:"Binary",id:"binary",level:2},{value:"Continuation",id:"continuation",level:2},{value:"Close",id:"close",level:2},{value:"Constructing Close with just status",id:"constructing-close-with-just-status",level:3},{value:"Constructing Close with status and a reason",id:"constructing-close-with-status-and-a-reason",level:3},{value:"Ping",id:"ping",level:2},{value:"Pong",id:"pong",level:2},{value:"Pattern Matching on WebSocketFrame",id:"pattern-matching-on-websocketframe",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In the ",(0,r.yg)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6455"},"WebSocket")," protocol, communication happens using frames. ZIO\nHTTP's ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-http/blob/main/zio-http/src/main/scala/zio/socket/WebSocketFrame.scala"},"WebSocketFrame"),"\nis the representation of those frames. The domain defines the following type of frames:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Text"),(0,r.yg)("li",{parentName:"ul"},"Binary"),(0,r.yg)("li",{parentName:"ul"},"Continuation"),(0,r.yg)("li",{parentName:"ul"},"Close"),(0,r.yg)("li",{parentName:"ul"},"Ping"),(0,r.yg)("li",{parentName:"ul"},"Pong")),(0,r.yg)("h2",{id:"text"},"Text"),(0,r.yg)("p",null,"To create a Text frame that models textual data in the WebSocket protocol, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"text")," constructor."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nWebSocketFrame.text("Hello from ZIO-HTTP")\n')),(0,r.yg)("h2",{id:"binary"},"Binary"),(0,r.yg)("p",null,"To create a Binary frame that models raw binary data, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"binary")," constructor."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.Chunk\nimport java.nio.charset.StandardCharsets\n\nWebSocketFrame.binary(Chunk.fromArray("Hello from ZIO-HTTP".getBytes(StandardCharsets.UTF_16)))\n')),(0,r.yg)("h2",{id:"continuation"},"Continuation"),(0,r.yg)("p",null,"To create a Continuation frame to model a continuation fragment of the previous message, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"continuation"),"\nconstructor."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'WebSocketFrame.continuation(Chunk.fromArray("Hello from ZIO-HTTP".getBytes(StandardCharsets.UTF_16)))\n')),(0,r.yg)("h2",{id:"close"},"Close"),(0,r.yg)("p",null,"To create a Close frame for a situation where the connection needs to be closed, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"close")," constructor.\nThe constructor requires two arguments:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Status"),(0,r.yg)("li",{parentName:"ul"},"Optional reason.")),(0,r.yg)("h3",{id:"constructing-close-with-just-status"},"Constructing Close with just status"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"WebSocketFrame.close(1000)\n")),(0,r.yg)("h3",{id:"constructing-close-with-status-and-a-reason"},"Constructing Close with status and a reason"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'WebSocketFrame.close(1000, Some("Normal Closure"))\n')),(0,r.yg)("p",null,"More information on status codes can be found\nin ",(0,r.yg)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6455#section-7.4"},"Section 7.4")," of IETF's Data Tracker."),(0,r.yg)("h2",{id:"ping"},"Ping"),(0,r.yg)("p",null,"Ping models heartbeat in the WebSocket protocol. The server or the client can at any time, after a successful handshake,\nsend a ping frame."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"WebSocketFrame.ping\n")),(0,r.yg)("h2",{id:"pong"},"Pong"),(0,r.yg)("p",null,"Pong models the second half of the heartbeat in the WebSocket protocol. Upon receiving ",(0,r.yg)("a",{parentName:"p",href:"#ping"},"ping"),", a pong needs to be\nsent back."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"WebSocketFrame.ping\n")),(0,r.yg)("h3",{id:"pattern-matching-on-websocketframe"},"Pattern Matching on WebSocketFrame"),(0,r.yg)("p",null,"ZIO HTTP envisions the WebSocketFrame as a ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tagged_union"},"Sum")," type, which allows\nexhaustive pattern matching to be performed on it."),(0,r.yg)("p",null,"You can do pattern matching on the WebSocketFrame type in the following way:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val frame: WebSocketFrame = ...\n\nframe match {\n  case WebSocketFrame.Binary(bytes) => ???\n  case WebSocketFrame.Text(text) => ???\n  case WebSocketFrame.Close(status, reason) => ???\n  case WebSocketFrame.Ping => ???\n  case WebSocketFrame.Pong => ???\n  case WebSocketFrame.Continuation(buffer) => ???\n}\n")))}m.isMDXComponent=!0}}]);