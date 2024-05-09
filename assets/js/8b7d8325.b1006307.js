"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[16800],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||o;return t?a.createElement(u,i(i({ref:n},p),{},{components:t})):a.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66347:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const o={id:"websocket",title:"WebSocket Example",sidebar_label:"WebSocket Server & Client"},i=void 0,s={unversionedId:"zio-http/examples/websocket",id:"zio-http/examples/websocket",title:"WebSocket Example",description:"This example shows how to create a WebSocket server using ZIO Http and how to write a client to connect to it.",source:"@site/docs/zio-http/examples/websocket.md",sourceDirName:"zio-http/examples",slug:"/zio-http/examples/websocket",permalink:"/zio-http/examples/websocket",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/examples/websocket.md",tags:[],version:"current",frontMatter:{id:"websocket",title:"WebSocket Example",sidebar_label:"WebSocket Server & Client"},sidebar:"ecosystem-sidebar",previous:{title:"HTML Templating",permalink:"/zio-http/examples/html-templating"},next:{title:"Streaming",permalink:"/zio-http/examples/streaming"}},l={},c=[{value:"Server",id:"server",level:2},{value:"Client",id:"client",level:2},{value:"WebSocket Echo",id:"websocket-echo",level:2}],p={toc:c},d="wrapper";function h(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This example shows how to create a WebSocket server using ZIO Http and how to write a client to connect to it."),(0,r.yg)("h2",{id:"server"},"Server"),(0,r.yg)("p",null,"First we define a ",(0,r.yg)("inlineCode",{parentName:"p"},"WebSocketApp")," that will handle the WebSocket connection.\nThe ",(0,r.yg)("inlineCode",{parentName:"p"},"Handler.webSocket")," constructor gives access to the ",(0,r.yg)("inlineCode",{parentName:"p"},"WebSocketChannel"),". The channel can be used to receive messages from the client and send messages back.\nWe use the ",(0,r.yg)("inlineCode",{parentName:"p"},"receiveAll")," method, to pattern match on the different channel events that could occur.\nThe most important events are ",(0,r.yg)("inlineCode",{parentName:"p"},"Read")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"UserEventTriggered"),". The ",(0,r.yg)("inlineCode",{parentName:"p"},"Read")," event is triggered when the client sends a message to the server. The ",(0,r.yg)("inlineCode",{parentName:"p"},"UserEventTriggered")," event is triggered when the connection is established.\nWe can identify the successful connection of a client by receiving a ",(0,r.yg)("inlineCode",{parentName:"p"},"UserEventTriggered(UserEvent.HandshakeComplete)")," event. And if the client sends us a text message, we will receive a ",(0,r.yg)("inlineCode",{parentName:"p"},"Read(WebSocketFrame.Text(<text>))")," event."),(0,r.yg)("p",null,"Our WebSocketApp will handle the following events send by the client:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'If the client connects to the server, we will send a "Greetings!" message to the client.'),(0,r.yg)("li",{parentName:"ul"},'If the client sends "foo", we will send a "bar" message back to the client.'),(0,r.yg)("li",{parentName:"ul"},'If the client sends "bar", we will send a "foo" message back to the client.'),(0,r.yg)("li",{parentName:"ul"},'If the client sends "end", we will close the connection.'),(0,r.yg)("li",{parentName:"ul"},"If the client sends any other message, we will send the same message back to the client 10 times.")),(0,r.yg)("p",null,"For the client to establish a connection with the server, we offer the ",(0,r.yg)("inlineCode",{parentName:"p"},"/subscriptions")," endpoint."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala",metastring:'title="zio-http-example/src/main/scala/example/WebSocketAdvanced.scala" "',title:'"zio-http-example/src/main/scala/example/WebSocketAdvanced.scala"','"':!0},'import zio._\n\nimport zio.http.ChannelEvent.{ExceptionCaught, Read, UserEvent, UserEventTriggered}\nimport zio.http._\nimport zio.http.codec.PathCodec.string\n\nobject WebSocketAdvanced extends ZIOAppDefault {\n\n  val socketApp: WebSocketApp[Any] =\n    Handler.webSocket { channel =>\n      channel.receiveAll {\n        case Read(WebSocketFrame.Text("end"))                =>\n          channel.shutdown\n\n        // Send a "bar" if the client sends a "foo"\n        case Read(WebSocketFrame.Text("foo"))                =>\n          channel.send(Read(WebSocketFrame.text("bar")))\n\n        // Send a "foo" if the client sends a "bar"\n        case Read(WebSocketFrame.Text("bar"))                =>\n          channel.send(Read(WebSocketFrame.text("foo")))\n\n        // Echo the same message 10 times if it\'s not "foo" or "bar"\n        case Read(WebSocketFrame.Text(text))                 =>\n          channel\n            .send(Read(WebSocketFrame.text(s"echo $text")))\n            .repeatN(10)\n            .catchSomeCause { case cause =>\n              ZIO.logErrorCause(s"failed sending", cause)\n            }\n\n        // Send a "greeting" message to the client once the connection is established\n        case UserEventTriggered(UserEvent.HandshakeComplete) =>\n          channel.send(Read(WebSocketFrame.text("Greetings!")))\n\n        // Log when the channel is getting closed\n        case Read(WebSocketFrame.Close(status, reason))      =>\n          Console.printLine("Closing channel with status: " + status + " and reason: " + reason)\n\n        // Print the exception if it\'s not a normal close\n        case ExceptionCaught(cause)                          =>\n          Console.printLine(s"Channel error!: ${cause.getMessage}")\n\n        case _ =>\n          ZIO.unit\n      }\n    }\n\n  val app: HttpApp[Any] =\n    Routes(\n      Method.GET / "greet" / string("name") -> handler { (name: String, _: Request) =>\n        Response.text(s"Greetings ${name}!")\n      },\n      Method.GET / "subscriptions"          -> handler(socketApp.toResponse),\n    ).toHttpApp\n\n  override val run = Server.serve(app).provide(Server.default)\n}\n')),(0,r.yg)("p",null,"A few things worth noting:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Server.default")," starts a server on port 8080."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"socketApp.toResponse")," converts the ",(0,r.yg)("inlineCode",{parentName:"li"},"WebSocketApp")," to a ",(0,r.yg)("inlineCode",{parentName:"li"},"Response"),", so we can serve it with ",(0,r.yg)("inlineCode",{parentName:"li"},"handler"),".")),(0,r.yg)("h2",{id:"client"},"Client"),(0,r.yg)("p",null,"The client will connect to the server and send a message to the server every time the user enters a message in the console.\nFor this we will use the ",(0,r.yg)("inlineCode",{parentName:"p"},"Console.readLine")," method to read a line from the console. We will then send the message to the server using the ",(0,r.yg)("inlineCode",{parentName:"p"},"WebSocketChannel.send")," method.\nBut since we don't want to reconnect to the server every time the user enters a message, we will use a ",(0,r.yg)("inlineCode",{parentName:"p"},"Queue")," to store the messages. We will then use the ",(0,r.yg)("inlineCode",{parentName:"p"},"Queue.take")," method to take a message from the queue and send it to the server, whenever a new message is available.\nAdding a new message to the queue, as well as sending the messages to the server, should happen in a loop in the background. For this we will use the operators ",(0,r.yg)("inlineCode",{parentName:"p"},"forever")," (looping) and ",(0,r.yg)("inlineCode",{parentName:"p"},"forkDaemon")," (fork to a background fiber)."),(0,r.yg)("p",null,"Again we will use the ",(0,r.yg)("inlineCode",{parentName:"p"},"Handler.webSocket")," constructor to define how to handle messages and create a ",(0,r.yg)("inlineCode",{parentName:"p"},"WebSocketApp"),". But this time, instead of serving the ",(0,r.yg)("inlineCode",{parentName:"p"},"WebSocketApp")," we will use the ",(0,r.yg)("inlineCode",{parentName:"p"},"connect")," method to establish a connection to the server.\nAll we need for that, is the URL of the server. In our case it's ",(0,r.yg)("inlineCode",{parentName:"p"},'"ws://localhost:8080/subscriptions"'),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala",metastring:'title="zio-http-example/src/main/scala/example/WebSocketAdvanced.scala" "',title:'"zio-http-example/src/main/scala/example/WebSocketAdvanced.scala"','"':!0},'import zio._\n\nimport zio.http.ChannelEvent.{ExceptionCaught, Read, UserEvent, UserEventTriggered}\nimport zio.http._\nimport zio.http.codec.PathCodec.string\n\nobject WebSocketAdvancedClient extends ZIOAppDefault {\n\n  def sendChatMessage(message: String): ZIO[Queue[String], Throwable, Unit] =\n    ZIO.serviceWithZIO[Queue[String]](_.offer(message).unit)\n\n  def processQueue(channel: WebSocketChannel): ZIO[Queue[String], Throwable, Unit] = {\n    for {\n      queue <- ZIO.service[Queue[String]]\n      msg   <- queue.take\n      _     <- channel.send(Read(WebSocketFrame.Text(msg)))\n    } yield ()\n  }.forever.forkDaemon.unit\n\n  private def webSocketHandler: ZIO[Queue[String] with Client with Scope, Throwable, Response] =\n    Handler.webSocket { channel =>\n      for {\n        _ <- processQueue(channel)\n        _ <- channel.receiveAll {\n          case Read(WebSocketFrame.Text(text)) =>\n            Console.printLine(s"Server: $text")\n          case _                               =>\n            ZIO.unit\n        }\n      } yield ()\n    }.connect("ws://localhost:8080/subscriptions")\n\n  override val run =\n    (for {\n      _ <- webSocketHandler\n      _ <- Console.readLine.flatMap(sendChatMessage).forever.forkDaemon\n      _ <- ZIO.never\n    } yield ())\n      .provideSome[Scope](\n        Client.default,\n        ZLayer(Queue.bounded[String](100)),\n      )\n\n}\n')),(0,r.yg)("p",null,"While we access here ",(0,r.yg)("inlineCode",{parentName:"p"},"Queue[String]")," via the ZIO environment, you should use a service in a real world application, that requires a queue as one of its constructor dependencies.\nSee ",(0,r.yg)("a",{parentName:"p",href:"https://zio.dev/reference/service-pattern/"},"ZIO Services")," for more information."),(0,r.yg)("h2",{id:"websocket-echo"},"WebSocket Echo"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala",metastring:'title="zio-http-example/src/main/scala/example/WebSocketEcho.scala" showLineNumbers"',title:'"zio-http-example/src/main/scala/example/WebSocketEcho.scala"','showLineNumbers"':!0},'package example\n\nimport zio._\n\nimport zio.http.ChannelEvent.Read\nimport zio.http._\nimport zio.http.codec.PathCodec.string\n\nobject WebSocketEcho extends ZIOAppDefault {\n  private val socketApp: WebSocketApp[Any] =\n    Handler.webSocket { channel =>\n      channel.receiveAll {\n        case Read(WebSocketFrame.Text("FOO")) =>\n          channel.send(Read(WebSocketFrame.Text("BAR")))\n        case Read(WebSocketFrame.Text("BAR")) =>\n          channel.send(Read(WebSocketFrame.Text("FOO")))\n        case Read(WebSocketFrame.Text(text))  =>\n          channel.send(Read(WebSocketFrame.Text(text))).repeatN(10)\n        case _                                =>\n          ZIO.unit\n      }\n    }\n\n  private val app: HttpApp[Any] =\n    Routes(\n      Method.GET / "greet" / string("name") -> handler { (name: String, _: Request) =>\n        Response.text(s"Greetings {$name}!")\n      },\n      Method.GET / "subscriptions"          -> handler(socketApp.toResponse),\n    ).toHttpApp\n\n  override val run = Server.serve(app).provide(Server.default)\n}\n')))}h.isMDXComponent=!0}}]);