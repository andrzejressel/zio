"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1564],{15680:(e,o,t)=>{t.d(o,{xA:()=>m,yg:()=>d});var r=t(96540);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var o=r.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},m=function(e){var o=p(e.components);return r.createElement(s.Provider,{value:o},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},g=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),g=n,d=c["".concat(s,".").concat(g)]||c[g]||u[g]||a;return t?r.createElement(d,l(l({ref:o},m),{},{components:t})):r.createElement(d,l({ref:o},m))}));function d(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=g;var i={};for(var s in o)hasOwnProperty.call(o,s)&&(i[s]=o[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},36428:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(58168),n=(t(96540),t(15680));const a={id:"zio-temporal",title:"ZIO Temporal"},l=void 0,i={unversionedId:"ecosystem/community/zio-temporal",id:"ecosystem/community/zio-temporal",title:"ZIO Temporal",description:"ZIO Temporal is a ZIO library for Temporal, a microservice workflow orchestration platform.",source:"@site/docs/ecosystem/community/zio-temporal.md",sourceDirName:"ecosystem/community",slug:"/ecosystem/community/zio-temporal",permalink:"/ecosystem/community/zio-temporal",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/community/zio-temporal.md",tags:[],version:"current",frontMatter:{id:"zio-temporal",title:"ZIO Temporal"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Slick Interop",permalink:"/ecosystem/community/zio-slick-interop"},next:{title:"ZIO Test Akka HTTP",permalink:"/ecosystem/community/zio-test-akka-http"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Examples",id:"examples",level:2},{value:"Want more?",id:"want-more",level:2}],m={toc:p},c="wrapper";function u(e){let{components:o,...t}=e;return(0,n.yg)(c,(0,r.A)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://zio-temporal.vhonta.dev/"},"ZIO Temporal")," is a ZIO library for Temporal, a microservice workflow orchestration platform."),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"ZIO Temporal is a ZIO library based on the Temporal Java-SDK. ZIO Temporal brings first-class Scala & ZIO support with additional compile-time checks that Java SDK lacks."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://temporal.io/"},"Temporal")," platform helps to eliminate complex errors or retry logic, avoid callbacks, and ensure that every workflow you start completes. Temporal delivers durable execution for your services and applications."),(0,n.yg)("h2",{id:"installation"},"Installation"),(0,n.yg)("p",null,"To use the library, we need to add the following dependency:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.vhonta" %% "zio-temporal-core" % "0.4.0"\n')),(0,n.yg)("h2",{id:"examples"},"Examples"),(0,n.yg)("p",null,'Here we have one ZIO app with two "modules". One is the worker that executes the workflow activity, and the other is the Client that sends the request to the Temporal platform. To run the sample, it\'s required to download ',(0,n.yg)("a",{parentName:"p",href:"https://docs.temporal.io/cli"},"Temporal cli")," (recommended for development)."),(0,n.yg)("p",null,"Run the Temporal server on one shell:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"temporal server start-dev --ip 0.0.0.0 --db-filename /tmp/temporal.db\n")),(0,n.yg)("p",null,"Now we can run the sample application, which is based on Temporal Java SDK docs using ",(0,n.yg)("a",{parentName:"p",href:"https://scala-cli.virtuslab.org"},"scala-cli"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},'//> using scala "3.3.0"\n\n//> using lib "dev.zio::zio:2.0.16"\n//> using lib "dev.vhonta::zio-temporal-core:0.4.0"\n//> using lib "dev.zio::zio-logging:2.1.14"\n//> using lib "dev.zio::zio-logging-slf4j2-bridge:2.1.14"\n\nimport zio.*\nimport zio.temporal.*\nimport zio.temporal.worker.*\nimport zio.temporal.workflow.*\nimport zio.logging.*\n\n// This is our workflow interface\n@workflowInterface\ntrait EchoWorkflow:\n\n  @workflowMethod\n  def echo(str: String): String\n\n// Workflow implementation\nclass EchoWorkflowImpl extends EchoWorkflow:\n  private val logger = ZWorkflow.makeLogger\n\n  override def echo(str: String): String =\n    logger.info(s"Worker: Received \\"$str\\"")\n    s"ACK: $str"\n\n// Main Application\nobject Main extends ZIOAppDefault:\n  val taskQueue = "echo-queue"\n\n  // Worker implementation\n  val setupWorker = ZWorkerFactory.newWorker(taskQueue) @@\n    ZWorker.addWorkflow[EchoWorkflowImpl].fromClass\n\n  // Client implementation\n  def invokeWorkflow(msg: String) = ZIO.serviceWithZIO[ZWorkflowClient]: client =>\n    for\n      uuid <- Random.nextUUID\n      workflowID = s"echo-$uuid"\n      echoWorkflow <- client\n                        .newWorkflowStub[EchoWorkflow]\n                        .withTaskQueue(taskQueue)\n                        .withWorkflowId(workflowID)\n                        .withWorkflowRunTimeout(2.seconds)\n                        .withRetryOptions(ZRetryOptions.default.withMaximumAttempts(3))\n                        .build\n      _   <- ZIO.logInfo(s"Will submit message \\"$msg\\" with workflow ID $workflowID")\n      res <- ZWorkflowStub.execute(echoWorkflow.echo(msg))\n      _   <- ZIO.logInfo(s"Greeting received: $res")\n    yield res\n\n  // Logging configuration\n  val logFilter: LogFilter[String] = LogFilter.logLevelByName(\n    LogLevel.Info,\n    "io.grpc.netty" -> LogLevel.Warning,\n    "io.netty"      -> LogLevel.Warning,\n    "io.temporal"   -> LogLevel.Error,\n  )\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] =\n    Runtime.removeDefaultLoggers >>> consoleLogger(ConsoleLoggerConfig(LogFormat.colored, logFilter))\n\n  // ZIO Main Program\n  def run: ZIO[ZIOAppArgs & Scope, Any, Any] =\n    val program =\n      for\n        args           <- getArgs\n        msg             = if args.isEmpty then "testMsg" else args.mkString(" ")\n        _              <- setupWorker\n        _              <- ZWorkerFactory.setup\n        _              <- ZWorkflowServiceStubs.setup()\n        workflowResult <- invokeWorkflow(msg)\n        _              <- ZIO.logInfo(s"The workflow result: $workflowResult")\n      yield ExitCode.success\n\n    program\n      .provideSome[ZIOAppArgs & Scope](\n        ZWorkflowServiceStubsOptions.make,\n        ZWorkflowClientOptions.make,\n        ZWorkerFactoryOptions.make,\n        ZWorkflowClient.make,\n        ZWorkflowServiceStubs.make,\n        ZWorkerFactory.make,\n        slf4j.bridge.Slf4jBridge.initialize,\n      )\n')),(0,n.yg)("p",null,"Generates the output:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},'\u276f scli zio-temporal.scala\ntimestamp=2023-06-28T09:27:21.171306+02:00 level=INFO thread=zio-fiber-4 message="ZWorkerFactory started"\ntimestamp=2023-06-28T09:27:21.238575+02:00 level=INFO thread=zio-fiber-4 message="Will submit message "testMsg" with workflow ID echo-82026831-91df-4138-b862-710d87b3ebb4"\ntimestamp=2023-06-28T09:27:21.5684+02:00   level=INFO thread=zio-fiber-183 message="Worker: Received "testMsg""\ntimestamp=2023-06-28T09:27:21.645988+02:00 level=INFO thread=zio-fiber-4 message="Greeting received: ACK: testMsg"\ntimestamp=2023-06-28T09:27:21.6473+02:00   level=INFO thread=zio-fiber-4 message="The workflow result: ACK: testMsg"\ntimestamp=2023-06-28T09:27:21.705634+02:00 level=INFO thread=zio-fiber-4 message="ZWorkerFactory shutdownNow initiated..."\n')),(0,n.yg)("p",null,"Results of the execution can also be seen in the ",(0,n.yg)("a",{parentName:"p",href:"http://localhost:8233"},"Temporal UI")," running locally or the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/temporalio/tctl"},"tctl")," tool:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},'\u276f tctl workflow observe --workflow_id echo-81ef73da-d54d-492a-8f91-78e888dcebc8\nProgress:\n  1, 2023-04-18T20:34:00Z, WorkflowExecutionStarted\n  2, 2023-04-18T20:34:00Z, WorkflowTaskScheduled\n  3, 2023-04-18T20:34:00Z, WorkflowTaskStarted\n  4, 2023-04-18T20:34:00Z, WorkflowTaskCompleted\n  5, 2023-04-18T20:34:00Z, WorkflowExecutionCompleted\n\nResult:\n  Run Time: 1 seconds\n  Status: COMPLETED\n  Output: ["ACK: testMsg"]\n')),(0,n.yg)("h2",{id:"want-more"},"Want more?"),(0,n.yg)("p",null,"You can find more complex and end-to-end example projects in ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/vitaliihonta/zio-temporal-samples"},"zio-temporal-samples")," repo."))}u.isMDXComponent=!0}}]);