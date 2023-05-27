"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[44758],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(a),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},39271:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={id:"index",title:"Introduction"},s=void 0,r={unversionedId:"zio-prelude/functional-abstractions/index",id:"zio-prelude/functional-abstractions/index",title:"Introduction",description:"ZIO Prelude features a next generation approach to functional abstractions. This approach is based on the following ideas:",source:"@site/docs/zio-prelude/functional-abstractions/index.md",sourceDirName:"zio-prelude/functional-abstractions",slug:"/zio-prelude/functional-abstractions/",permalink:"/zio-prelude/functional-abstractions/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/functional-abstractions/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"ecosystem-sidebar",previous:{title:"Abstraction Diagrams",permalink:"/zio-prelude/abstraction-diagrams"},next:{title:"Introduction",permalink:"/zio-prelude/functional-abstractions/concrete-types/"}},l={},c=[{value:"Abstractions",id:"abstractions",level:2},{value:"Using Abstractions",id:"using-abstractions",level:2},{value:"Using Type Classes",id:"using-type-classes",level:2},{value:"Using Generic Programming",id:"using-generic-programming",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ZIO Prelude features a next generation approach to functional abstractions. This approach is based on the following ideas:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Algebraic")," - Abstractions should describe fundamental algebraic properties."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Compositional")," - These abstractions should describe properties that are orthogonal to each other, allowing definition of higher level abstractions as the composition of more basic ones."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Lawful")," - Abstractions should be defined in terms of laws.")),(0,i.kt)("p",null,"The functional abstractions in ZIO Prelude can be broadly divided into two categories."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/zio-prelude/functional-abstractions/concrete-types/"},"Abstractions For Concrete Types"))," - These abstractions define properties of concrete types, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"Int")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),", as well as ways of combining those values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/zio-prelude/functional-abstractions/parameterized-types/"},"Abstractions For Parameterized Types"))," - These abstractions define properties of parameterized types such as ",(0,i.kt)("inlineCode",{parentName:"li"},"List")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO")," and ways of combining them.")),(0,i.kt)("p",null,"As we will see, there is a deep symmetry between the abstractions defined on concrete and parameterized types, such as concepts of ",(0,i.kt)("em",{parentName:"p"},"associative operations"),", ",(0,i.kt)("em",{parentName:"p"},"commutative operations"),", and ",(0,i.kt)("em",{parentName:"p"},"identity"),". This reflects the fundamental nature of these algebraic properties and their ability to unify what were previously separate concepts."),(0,i.kt)("h2",{id:"abstractions"},"Abstractions"),(0,i.kt)("p",null,"An ",(0,i.kt)("em",{parentName:"p"},"abstraction")," describes some common structure that different data types share. In Scala, we can encode this using a trait that describes that common structure in terms of a set of operators as well as laws that those operators must follow."),(0,i.kt)("p",null,"For example, we can think of many data types that share the structure of having an associative combining operation. Integer addition is associative, as is string concatenation and list concatenation, among others."),(0,i.kt)("p",null,"We can describe this common structure using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Associative")," trait."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait Associative[A] {\n  def combine(left: => A, right: => A): A\n}\n")),(0,i.kt)("p",null,"We can then define various concrete values that extend this trait to describe how different data types share this common structure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val IntAssociative: Associative[Int] =\n  new Associative[Int] {\n    def combine(left: => Int, right: => Int): Int =\n      left + right\n  }\n// IntAssociative: Associative[Int] = repl.MdocSession$MdocApp$$anon$1@1d7f9594\n")),(0,i.kt)("p",null,"Note however that the signature of the trait is not sufficient to define the abstraction."),(0,i.kt)("p",null,"The signature merely says that we must take two ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values and return an ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," value. It doesn't say anything about what this combining operation is supposed to do with the value."),(0,i.kt)("p",null,"With just that signature we could do anything we want in the implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"combine")," such as subtracting one integer from the other, which is definitely not associative."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val IntNotAssociative: Associative[Int] =\n  new Associative[Int] {\n    def combine(left: => Int, right: => Int): Int =\n      left - right // don't do this\n  }\n// IntNotAssociative: Associative[Int] = repl.MdocSession$MdocApp$$anon$2@38e68022\n")),(0,i.kt)("p",null,"This shows that abstractions are not meaningful without laws. Abstractions describe some common structure that is shared between different data types but without laws we don't know what this structure is supposed to be."),(0,i.kt)("p",null,"In this case the law is that the combining operation must be associative, which we can write in pseudocode as."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"(a <> b) <> c === a <> (b <> c)\n")),(0,i.kt)("p",null,"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"<>")," represents the combining operation and ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," represent any possible combination of values of the given type."),(0,i.kt)("p",null,"Every abstraction in ZIO Prelude is described by a trait like the one above and is defined in terms of a set of laws."),(0,i.kt)("p",null,"ZIO Prelude provides ",(0,i.kt)("strong",{parentName:"p"},"instances for these abstractions")," for a variety of types from ZIO and the Scala standard library. ZIO Prelude also provides ",(0,i.kt)("strong",{parentName:"p"},"tools for testing")," that instances of an abstraction satisfy the appropriate laws."),(0,i.kt)("h2",{id:"using-abstractions"},"Using Abstractions"),(0,i.kt)("p",null,"There are several ways you can use the abstractions described in this library."),(0,i.kt)("p",null,"The first and most direct, which actually does not require depending on ZIO Prelude at all, is to use these abstractions as inspiration for defining operators on your own data type."),(0,i.kt)("p",null,"The common structure described by these abstractions exists independent of any library. You don't need ZIO Prelude to define an associative combining operation on your own data type."),(0,i.kt)("p",null,"However, thinking about whether an associative combining operation exists for your data type, and what it would look like, can help you write better code."),(0,i.kt)("p",null,"As a simple example, say you want to compute the average of values from some large data set, and you would like to split the work up between different concurrent processes or possibly even different nodes in a distributed network."),(0,i.kt)("p",null,"Your first stab at the accumulator for the running average might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class RunningAverage(value: Double)\n")),(0,i.kt)("p",null,"However, if you think about it for a minute you will realize that this data type does not support an associative combining operation for combining two averages. This is going to be a serious problem because it means the result is not going to be well-defined if you combine averages from different processes or nodes."),(0,i.kt)("p",null,"Thinking about the abstractions in ZIO Prelude you might come up with a representation like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class RunningAverage(sum: Double, count: Int) { self =>\n  def average: Double =\n    sum / count\n  def combine(that: RunningAverage): RunningAverage =\n    RunningAverage(self.sum + that.sum, self.count + that.count)\n}\n\nobject RunningAverage {\n  val empty: RunningAverage =\n    RunningAverage(0.0, 0)\n}\n")),(0,i.kt)("p",null,"Now this data type does have an associative combining operation. In fact the combining operation is both associative and commutative and has an identity element."),(0,i.kt)("p",null,"This will make it much easier for you to solve your problem because now the different processes or nodes can compute the averages for their partitions independently, and you can combine them in any order."),(0,i.kt)("p",null,"And you didn't need to use any code from ZIO Prelude to do this. ZIO Prelude was hopefully just a good source of ideas of different algebraic properties that can exist and how they can be important."),(0,i.kt)("p",null,"This is a great way to get started with functional abstractions. Your colleagues don't have to learn anything new, you just get to write better code because you are taking advantage of these algebraic properties."),(0,i.kt)("p",null,"This is also the approach taken by ZIO ecosystem libraries."),(0,i.kt)("p",null,"ZIO ecosystem libraries generally do not directly expose any functional abstractions but still expose a highly compositional interface because their design is based on algebraic properties like this. Users don't have to learn about these abstractions unless they want to, they just get to benefit from better library design."),(0,i.kt)("h2",{id:"using-type-classes"},"Using Type Classes"),(0,i.kt)("p",null,"The second way you can use the abstractions in ZIO Prelude is by leveraging the ",(0,i.kt)("em",{parentName:"p"},"type classes")," defined in the library to take the boilerplate out of your own code."),(0,i.kt)("p",null,"Type classes are a way of encoding functional abstractions in Scala and other programming languages. In the type class pattern, we take the same code as above but define the instances of the type class as ",(0,i.kt)("inlineCode",{parentName:"p"},"implicit"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.Chunk\n\ntrait Associative[A] {\n  def combine(left: => A, right: => A): A\n}\n\nobject Associative {\n\n  implicit val IntAssociative: Associative[Int] =\n    new Associative[Int] {\n      def combine(left: => Int, right: => Int): Int =\n        left + right\n    }\n\n  implicit def ListAssociative[A]: Associative[List[A]] =\n    new Associative[List[A]] {\n      def combine(left: => List[A], right: => List[A]): List[A] =\n        left ::: right\n    }\n}\n")),(0,i.kt)("p",null,"If the instance of the type class depends on other parameters, like the ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"ListAssociative")," we define it as an ",(0,i.kt)("inlineCode",{parentName:"p"},"implicit def"),". Otherwise, we define it as an ",(0,i.kt)("inlineCode",{parentName:"p"},"implicit val"),"."),(0,i.kt)("p",null,"We can think of the ",(0,i.kt)("inlineCode",{parentName:"p"},"implicit")," keyword as associating the type ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," with the value ",(0,i.kt)("inlineCode",{parentName:"p"},"IntAssociative"),". So now if we ask the Scala compiler for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Associative")," instance for ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," it will be able to find it."),(0,i.kt)("p",null,"In the type class pattern we also typically define extension methods that will be available on any data type for which an instance of the type class is defined."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"implicit final class AssociativeSyntax[A](private val self: A) {\n  def <>(that: => A)(implicit associative: Associative[A]): A =\n    associative.combine(self, that)\n}\n")),(0,i.kt)("p",null,"This machinery allows us to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"<>")," operator to combine values of any type as long as an ",(0,i.kt)("inlineCode",{parentName:"p"},"Associative")," instance is defined for it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val int: Int =\n  1 <> 2\n// int: Int = 3\n\nval list: List[Int] =\n  List(1, 2, 3) <> List(4, 5, 6)\n// list: List[Int] = List(1, 2, 3, 4, 5, 6)\n")),(0,i.kt)("p",null,"Of course, we didn't really need all of this machinery to add two numbers or concatenate two lists, but where this pattern gets powerful is when we can use it to combine more complex data types in a principled way."),(0,i.kt)("p",null,"For example, say we have an application where users can vote on content they are interested in learning more about. We might have a data structure to keep track of the number of votes for different topics like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"final case class Topic(value: String)\nfinal case class Votes(value: Int)\nfinal case class VoteMap(map: Map[Topic, Votes])\n")),(0,i.kt)("p",null,"A common thing we might want to do is combine two ",(0,i.kt)("inlineCode",{parentName:"p"},"VoteMap")," values, for example if the user has a local copy of the ",(0,i.kt)("inlineCode",{parentName:"p"},"VoteMap")," and we want to update it with a new batch of votes from the server."),(0,i.kt)("p",null,"We could do that manually like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"final case class Topic(value: String)\n\nfinal case class Votes(value: Int) { self =>\n  def combine(that: Votes): Votes =\n    Votes(self.value + that.value)\n}\n\nfinal case class VoteMap(map: Map[Topic, Votes]) { self =>\n  def combine(that: VoteMap): VoteMap =\n    VoteMap(that.map.foldLeft(self.map) { case (map, (topic, votes)) =>\n      map + (topic -> map.getOrElse(topic, Votes(0)).combine(votes))\n    })\n}\n")),(0,i.kt)("p",null,"This isn't the worst, but it isn't really the kind of code we want to be writing. We want to be thinking about the logic of our application rather than how to combine maps."),(0,i.kt)("p",null,"This is where ZIO Prelude can help."),(0,i.kt)("p",null,"The way we're combining these maps actually follows a pattern. If a key is in a single map we include it in the combined map with its associated key and if a key is in both maps we include it in the combined map with the result of combining the values associated with that key."),(0,i.kt)("p",null,"We might see that ourselves, but it would be hard to generalize that logic in a way that is worth factoring out. How often are we going to combine maps like this and what exactly does it mean to combine the keys?"),(0,i.kt)("p",null,"Let's look at how ZIO Prelude can help us clean this up."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude._\n\ncase class Topic(value: String)\n\ncase class Votes(value: Int)\n\nobject Votes {\n  implicit val VotesAssociative: Associative[Votes] =\n    new Associative[Votes] {\n      def combine(left: => Votes, right: => Votes): Votes =\n        Votes(left.value + right.value)\n    }\n}\n\ncase class VoteMap(map: Map[Topic, Votes])\n\nobject VoteMap {\n  implicit val VoteMapAssociative: Associative[VoteMap] =\n    new Associative[VoteMap] {\n      def combine(left: => VoteMap, right: => VoteMap): VoteMap =\n        VoteMap(left.map <> right.map)\n    }\n}\n")),(0,i.kt)("p",null,"All of that logic of combining the two maps just goes away!"),(0,i.kt)("p",null,"ZIO Prelude knows that we can define an associative combining operation for any two values of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Map[A, B]")," as long as there is an associative combining operation for the ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," values. All we have to do is tell ZIO Prelude how to combine the ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," values, which in this case is quite simple, and it can do the rest."),(0,i.kt)("p",null,"This is a great example of the practical value that ZIO Prelude can bring. It took this low level logic of how to combine these two maps and just handled it for us."),(0,i.kt)("h2",{id:"using-generic-programming"},"Using Generic Programming"),(0,i.kt)("p",null,"The third way you can use the abstractions in ZIO Prelude is by leveraging type classes to do generic programming at the level of these abstractions."),(0,i.kt)("p",null,'For example, you might find yourself doing a lot of "map reduce" type operations on collections like this.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'def wordCount(lines: List[String]): Int =\n  lines.map(_.split(" ").length).sum\n')),(0,i.kt)("p",null,"You might like this way of working with collections and wonder how you can generalize it."),(0,i.kt)("p",null,"A first step could be to recognize that ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," is just a particular combining operation that has an identity element. You could then use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity")," abstraction in ZIO Prelude to generalize over data types that support this kind of combining operation with an identity element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def mapReduce[A, B](as: List[A])(f: A => B)(implicit identity: Identity[B]): B =\n  ???\n")),(0,i.kt)("p",null,"You might want to go even further though and generalize over the collection type. You can clearly implement a similar operator for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector")," or another collection type so how do you generalize over that?"),(0,i.kt)("p",null,"You could do that with ZIO Prelude's ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," abstraction, which describes parameterized data types with some structure where the elements in the structure can be replaced while preserving the structure itself."),(0,i.kt)("p",null,"Using this, you could rewrite your operator like so."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def mapReduce[F[+_]: ForEach, A, B: Identity](as: F[A])(f: A => B): B =\n  ???\n")),(0,i.kt)("p",null,"This example illustrates some of the benefits as well as the pitfalls of generic programming using type classes."),(0,i.kt)("p",null,"If you want to do generic programming in terms of type classes, ZIO Prelude can go as far as you want to go."),(0,i.kt)("p",null,"However, there is a definite trade off in these three snippets."),(0,i.kt)("p",null,"The first one is overly specific but is understandable to any Scala programmer. The last one is beautiful and elegant if you understand the necessary concepts but incomprehensible otherwise."),(0,i.kt)("p",null,'In addition, there is a danger in using type classes to do generic programming that we reinvent the wheel. The generalized "map reduce" operator we developed is just the existing ',(0,i.kt)("inlineCode",{parentName:"p"},"foldMap")," operator from ZIO Prelude!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def mapReduce[F[+_]: ForEach, A, B: Identity](as: F[A])(f: A => B): B =\n  as.foldMap(f)\n")),(0,i.kt)("p",null,"This illustrates the risk that sufficiently general abstractions or operators are likely to already be defined by a functional programming library."),(0,i.kt)("p",null,'None of this is meant to argue against this style of generic programming but merely to point out that it is one of several ways to use these functional abstractions and none of them are necessarily "better" than others. The right approach to using these abstractions is the one that works for you and your team.'))}d.isMDXComponent=!0}}]);