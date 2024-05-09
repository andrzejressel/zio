"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[69948],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return n?i.createElement(f,s(s({ref:t},p),{},{components:n})):i.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},14266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(58168),r=(n(96540),n(15680));const a={id:"junit-integration",title:"Integrating ZIO Test with JUnit",sidebar_label:"JUnit Integration"},s=void 0,o={unversionedId:"reference/test/junit-integration",id:"reference/test/junit-integration",title:"Integrating ZIO Test with JUnit",description:"Unit testing is an essential practice in software development, enabling developers to validate the correctness and reliability of their code. JUnit, a widely adopted testing framework, has emerged as a standard choice for Java applications. With its robust features and extensive ecosystem, JUnit simplifies the process of writing and executing tests, empowering developers to deliver high-quality software.",source:"@site/docs/reference/test/junit-integration.md",sourceDirName:"reference/test",slug:"/reference/test/junit-integration",permalink:"/reference/test/junit-integration",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/junit-integration.md",tags:[],version:"current",frontMatter:{id:"junit-integration",title:"Integrating ZIO Test with JUnit",sidebar_label:"JUnit Integration"},sidebar:"reference-sidebar",previous:{title:"Running Tests",permalink:"/reference/test/running-tests"},next:{title:"Introduction",permalink:"/reference/test/assertions/"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Unit testing is an essential practice in software development, enabling developers to validate the correctness and reliability of their code. JUnit, a widely adopted testing framework, has emerged as a standard choice for Java applications. With its robust features and extensive ecosystem, JUnit simplifies the process of writing and executing tests, empowering developers to deliver high-quality software."),(0,r.yg)("p",null,"In this section, we will explore the integration of ZIO Test, a powerful testing library for functional programming in Scala, with JUnit. By combining the strengths of both frameworks, developers can efficiently test ZIO-based applications under different build tools and IDEs."),(0,r.yg)("p",null,"To streamline the testing process, a custom JUnit runner is provided specifically for running ZIO Test specifications. Thus, we can conduct testing of ZIO specs within alternative build tools, such as Maven, Gradle, Bazel, and various integrated development environments (IDEs)."),(0,r.yg)("p",null,"By adding the necessary dependency definition to the build tool, developers can effortlessly incorporate the ZIO Test JUnit runner:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-test-junit" % zioVersion % "test"\n')),(0,r.yg)("p",null,"To make our spec appear as a JUnit test to build tools and IDEs, we can simply extend ",(0,r.yg)("inlineCode",{parentName:"p"},"zio.test.junit.JUnitRunnableSpec"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.junit.JUnitRunnableSpec\n\nobject MySpec extends JUnitRunnableSpec {\n  def spec = suite("MySpec")(\n    test("test") {\n      for {\n        _ <- ZIO.unit\n      } yield assertCompletes\n    }\n  )\n}\n')),(0,r.yg)("p",null,"Now, we can run our spec from the command line by running ",(0,r.yg)("inlineCode",{parentName:"p"},"sbt test"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sbt:zio-quickstart-junit> test\n+ MySpec\n  + test\n1 tests passed. 0 tests failed. 0 tests ignored.\n\nExecuted in 215 ms\n\n[info] Completed tests\n[success] Total time: 1 s, completed Jun 13, 2023, 4:39:27 PM\n")),(0,r.yg)("p",null,"Or we can convert ",(0,r.yg)("inlineCode",{parentName:"p"},"MySpec")," object to a scala ",(0,r.yg)("inlineCode",{parentName:"p"},"class")," and annotate it with ",(0,r.yg)("inlineCode",{parentName:"p"},"@RunWith(classOf[ZTestJUnitRunner])"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import org.junit.runner.RunWith\nimport zio._\nimport zio.test.{test, _}\nimport zio.test.junit.ZTestJUnitRunner\n\n@RunWith(classOf[ZTestJUnitRunner])\nclass MySpec extends ZIOSpecDefault {\n  def spec = suite("MySpec")(\n    test("test") {\n      for {\n        _ <- ZIO.unit\n      } yield assertCompletes\n    }\n  )\n}\n')),(0,r.yg)("p",null,"To run the above test using ",(0,r.yg)("inlineCode",{parentName:"p"},"sbt test")," we also need to add the following line to our ",(0,r.yg)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "com.github.sbt" % "junit-interface" % "0.13.3" % Test\n')),(0,r.yg)("p",null,"Now, we can run our spec by running ",(0,r.yg)("inlineCode",{parentName:"p"},"sbt test")," from the command line:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sbt:zio-quickstart-junit> test\n+ MySpec\n  + test\n[info] Passed: Total 1, Failed 0, Errors 0, Passed 1\n[success] Total time: 1 s, completed Jun 13, 2023, 4:37:32 PM\n")),(0,r.yg)("p",null,"To see practical examples in action, we encourage you to check out ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-quickstarts/tree/master/zio-quickstart-junit-integration"},"the example code base")," provided in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-quickstarts/"},"ZIO Quickstarts")," project on GitHub. This code base will help you dive deeper into testing ZIO specs using JUnit within different build tools and IDEs, enabling you to enhance the quality and stability of your ZIO applications. Happy testing!"))}d.isMDXComponent=!0}}]);