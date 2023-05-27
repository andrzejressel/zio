"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[48687],{3905:(n,t,e)=>{e.d(t,{Zo:()=>d,kt:()=>h});var a=e(67294);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function s(n,t){if(null==n)return{};var e,a,i=function(n,t){if(null==n)return{};var e,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var l=a.createContext({}),A=function(n){var t=a.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},d=function(n){var t=A(n.components);return a.createElement(l.Provider,{value:t},n.children)},c="mdxType",u={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(n,t){var e=n.components,i=n.mdxType,r=n.originalType,l=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),c=A(e),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return e?a.createElement(h,o(o({ref:t},d),{},{components:e})):a.createElement(h,o({ref:t},d))}));function h(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var r=e.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=n,s[c]="string"==typeof n?n:i,o[1]=s;for(var A=2;A<r;A++)o[A]=e[A];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},72857:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>A});var a=e(87462),i=(e(67294),e(3905));const r={id:"abstraction-diagrams",title:"ZIO Prelude Abstraction Diagrams",sidebar_label:"Abstraction Diagrams"},o=void 0,s={unversionedId:"zio-prelude/abstraction-diagrams",id:"zio-prelude/abstraction-diagrams",title:"ZIO Prelude Abstraction Diagrams",description:"Absorption",source:"@site/docs/zio-prelude/abstraction-diagrams.md",sourceDirName:"zio-prelude",slug:"/zio-prelude/abstraction-diagrams",permalink:"/zio-prelude/abstraction-diagrams",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/abstraction-diagrams.md",tags:[],version:"current",frontMatter:{id:"abstraction-diagrams",title:"ZIO Prelude Abstraction Diagrams",sidebar_label:"Abstraction Diagrams"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Prelude",permalink:"/zio-prelude/"},next:{title:"Introduction",permalink:"/zio-prelude/functional-abstractions/"}},l={},A=[{value:"Absorption",id:"absorption",level:2},{value:"Associative",id:"associative",level:2},{value:"AssociativeBoth",id:"associativeboth",level:2},{value:"AssociativeCompose",id:"associativecompose",level:2},{value:"AssociativeEither",id:"associativeeither",level:2},{value:"AssociativeFlatten",id:"associativeflatten",level:2},{value:"Equal",id:"equal",level:2}],d={toc:A},c="wrapper";function u(n){let{components:t,...e}=n;return(0,i.kt)(c,(0,a.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"absorption"},"Absorption"),(0,i.kt)("mermaid",{value:"classDiagram\n  Absorption~A~ <|-- DistributiveAbsorption~A~\n  Absorption~A~ <|-- Involution~A~\n  Absorption~A~ <|-- Noncontradiction~A~\n  Absorption~A~ <|-- ExcludedMiddle~A~\n  class Absorption~A~{\n    () or(=> A, => A): A\n    () and(=> A, => A): A\n  }\n  class DistributiveAbsorption~A~{\n    Boolean\n    Set[A]\n  }\n  class Involution~A~{\n    Boolean\n    () complement(=> A): A\n  }\n  class Noncontradiction~A~{\n    Boolean\n    () complement(=> A): A\n    () bottom: A\n  }\n  class ExcludedMiddle~A~{\n    Boolean\n    () complement(=> A): A\n    () top: A\n  }"}),(0,i.kt)("h2",{id:"associative"},"Associative"),(0,i.kt)("mermaid",{value:"classDiagram\n  Associative~A~ <|-- Commutative~A~\n  Associative~A~ <|-- Idempotent~A~\n  Associative~A~ <|-- Identity~A~\n  Identity~A~ <|-- Inverse~A~\n  class Associative~A~{\n    Either[E, A: Associative]\n    F[A: Associative]: Derive[_, Associative]\n    First[A]\n    Last[A]\n    NonEmptyChunk[A]\n    NonEmptyList[A]\n    These[A: Associative, B: Associative]\n    \u2768T1: Associative, ..., T22: Associative\u2769\n    Validation[E, A: Associative]\n    ZNonEmptySet[A, B: Associative]\n\n    () combine(=> A, => A): A\n  }\n  class Commutative~A~{\n    And\n    F[A: Commutative]: Derive[_, Commutative]\n    Either[E: Commutative, A: Commutative]\n    Or\n    Map[K, V: Commutative]\n    Max[A: Ord]\n    Max[Boolean]\n    Max[Byte/Char/Double/Float/Int/Long/Short]\n    Min[A: Ord]\n    Min[Boolean]\n    Min[Byte/Char/Double/Float/Int/Long/Short]\n    NonEmptySet[A]\n    Option[A: Commutative]\n    Prod[Boolean]\n    Prod[Byte/Char/Double/Float/Int/Long/Short]\n    Set[A]\n    Sum[Boolean]\n    Sum[Byte/Char/Double/Float/Int/Long/Short]\n    These[A: Commutative, B: Commutative]\n    \u2768T1: Commutative, ..., T22: Commutative\u2769\n    Validation[E, A: Commutative]\n    ZSet[A, B: Commutative]\n    ZNonEmptySet[A, B: Commutative]\n\n    () commute: Commutative[A]\n  }\n  class Idempotent~A~{\n    And\n    F[A: Idempotent]: Derive[_, Idempotent]\n    Or\n    Map[K, V: Idempotent]\n    Max[Boolean]\n    Max[Byte/Char/Double/Float/Int/Long/Short]\n    Min[Boolean]\n    Min[Byte/Char/Double/Float/Int/Long/Short]\n    NonEmptySet[A]\n    Option[A: Idempotent]\n    Prod[Boolean]\n    Set[A]\n    Sum[Boolean]\n    These[A: Idempotent, B: Idempotent]\n    \u2768T1: Idempotent, ..., T22: Idempotent\u2769\n    Validation[E, A: Idempotent]\n    ZSet[A, B: Idempotent]\n    ZNonEmptySet[A, B: Idempotent]\n\n    () combineIdempotent(=> A, => A)(Equal[A]): A\n    () idempotent(Equal[A]): Idempotent[A]\n  }\n  class Identity~A~{\n    F[A: Identity]: Derive[_, Identity]\n    Chunk[A]\n    Either[E, A: Identity]\n    List[A]\n    Map[K, V: Associative]\n    Max[Boolean]\n    Max[Byte/Char/Double/Float/Int/Long/Short]\n    Min[Boolean]\n    Min[Byte/Char/Double/Float/Int/Long/Short]\n    Option[A: Associative]\n    Prod[Byte/Char/Double/Float/Int/Long/Short]\n    String\n    \u2768T1: Identity, ..., T22: Identity\u2769\n    Validation[E, A: Identity]\n    Vector[A]\n    ZSet[A, B: Associative]\n\n    () identity: A\n  }\n  class Inverse~A~{\n    And\n    F[A: Inverse]: Derive[_, Inverse]\n    Or\n    Prod[Boolean]\n    Set[A]\n    Sum[Boolean]\n    Sum[Byte/Char/Double/Float/Int/Long/Short]\n    \u2768T1: Inverse, ..., T22: Inverse\u2769\n\n    () inverse(=> A, => A): A\n  }"}),(0,i.kt)("h2",{id:"associativeboth"},"AssociativeBoth"),(0,i.kt)("mermaid",{value:"classDiagram\n  AssociativeBoth~F<_>~ <|-- CommutativeBoth~F<_>~\n  AssociativeBoth~F<_>~ <|-- IdentityBoth~F<_>~\n  class AssociativeBoth~F<_>~{\n    Fiber[E, +*]\n    STM[R, E, +*]\n\n    () both[A,B](=> F[A], => F[B]): F[(A,B)]\n  }\n  class CommutativeBoth~F<_>~{\n    Chunk[+*]\n    Exit[E, +*]\n    Id[+*]\n    List[+*]\n    NonEmptyChunk[+*]\n    Option[+*]\n    AndF[Schedule[R, E, +*]]\n    OrF[Schedule[R, E, +*]]\n    Vector[+*]\n    ZIO[R, E, +*]\n    Failure[ZIO[R, E, +*]]\n    ZLayer[R, E, +*]\n    ZManaged[R, E, +*]\n    Failure[ZManaged[R, E, +*]]\n    ZSink[R, E, I, I, +*]\n    ZStream[R, E, +*]\n  }\n  class IdentityBoth~F<_>~{\n    Either[L, +*]\n    Failure[Either[+*, R]]\n    Option[+*]\n    Future[+*]\n    Id[+*]\n    List[+*]\n    Try[+*]\n \n    () any: F[Any]\n  }"}),(0,i.kt)("h2",{id:"associativecompose"},"AssociativeCompose"),(0,i.kt)("mermaid",{value:"classDiagram\n  AssociativeCompose~=>:[-_, +_]~ <|-- IdentityCompose~=>:[-_, +_]~\n  AssociativeCompose~=>:[-_, +_]~ <|-- BothCompose~=>:[-_, +_]~\n  AssociativeCompose~=>:[-_, +_]~ <|-- EitherCompose~=>:[-_, +_]~\n  BothCompose <|-- ApplicationCompose~=>:[-_, +_]~\n  class AssociativeCompose~=>:[-_, +_]~{\n    () compose[A, B, C](B =>: C, A =>: B): A =>: C\n  }\n  class IdentityCompose~=>:[-_, +_]~{\n    Function[-*, +*]\n    URIO[-*, +*]\n\n    () identity[A]: A =>: A\n  }\n  class BothCompose~=>:[-_, +_]~{\n    URIO[-*, +*] [ :*: = Tuple2 ]\n  \n    (type) :*:[+_, +_]\n    () fromFirst[A]: (A :*: Any) =>: A\n    () fromSecond[B]: (Any :*: B) =>: B\n    () toBoth[A, B, C](A =>: B)(A =>: C): A =>: (B :*: C)\n  }\n  class ApplicationCompose~=>:[-_, +_]~{\n    Function[-*, +*] [ :*: = Tuple2 ; --\x3e: = Function ]\n    \n    (type) --\x3e:[-_, +_]\n    () application[A, B]: ((A --\x3e: B) :*: A) =>: B\n    () curry[A, B, C]((A :*: B) =>: C): A =>: (B --\x3e: C)\n    () uncurry[A, B, C](A =>: (B --\x3e: C)): (A :*: B) =>: C\n  }\n  class EitherCompose~=>:[-_, +_]~{\n    Function[-*, +*] [ :+: = Either ]\n    URIO[-*, +*] [ :+: = Either ]\n    \n    (type) :+:[+_, +_]\n    () toLeft[A]: A =>: (A :+: Nothing)\n    () toRight[B]: B =>: (Nothing :+: B)\n    () fromEither[A, B, C](=> A =>: C)(=> B =>: C): (A :+: B) =>: C\n  }"}),(0,i.kt)("h2",{id:"associativeeither"},"AssociativeEither"),(0,i.kt)("mermaid",{value:"classDiagram\n  AssociativeEither~F<_>~ <|-- CommutativeEither~F<_>~\n  AssociativeEither~F<_>~ <|-- IdentityEither~F<_>~\n  class AssociativeEither~F<_>~{\n    Either[L, +*]\n    Exit[E, +*]\n    Fiber[E, +*]\n    Schedule[R, E, +*]\n    Try[+*]\n    ZLayer[R, E, +*]\n    ZManaged[R, E, +*]\n    \n    () either[A, B](=> F[A], => F[B]): F[Either[A, B]]\n  }\n  class CommutativeEither~F<_>~{\n    Future[+*]\n    ZIO[R, E, +*] \n    ZSink[R, E, I, L, +*]\n    ZStream[R, E, +*]\n    Equal[-*]\n  }\n  class IdentityEither~F<_>~{\n    Option[+*]\n    Equal[-*]\n    Hash[-*]\n    Ord[-*]\n\n    () none: F[Nothing]\n  }"}),(0,i.kt)("h2",{id:"associativeflatten"},"AssociativeFlatten"),(0,i.kt)("mermaid",{value:"classDiagram\n  AssociativeFlatten~F<+_>~ <|-- IdentityFlatten~F<_>~\n  class AssociativeFlatten~F<+_>~{\n    Map[K, +*]\n    \n    () flatten[A](F[F[A]]): F[A]\n  }\n  class IdentityFlatten~F<+_>~{\n    Cause[+*]\n    Chunk[+*]\n    Either[L, +*]\n    Exit[E, +*]\n    Future[+*]\n    Id[+*]\n    List[+*]\n    NonEmptyChunk[+*]\n    Option[+*]\n    Try[+*]\n    Vector[+*]\n    ZIO[R, E, +*]\n    ZManaged[R, E, +*]\n    ZStream[R, E, +*]\n\n    () any: F[Any]\n  }"}),(0,i.kt)("h2",{id:"equal"},"Equal"),(0,i.kt)("mermaid",{value:"classDiagram\n  Equal~-A~ <|-- Hash~-A~\n  Equal~-A~ <|-- PartialOrd~-A~\n  PartialOrd~-A~ <|-- Ord~-A~\n  class Equal~A~{\n    Chunk[A: Equal]\n    Either[A: Equal, B: Equal]\n    Exit[E: Equal, A: Equal]\n    F[A: Equal]: DeriveEqual[_]\n    List[A: Equal]\n    NonEmptyChunk[A: Equal]\n    NonEmptyList[A: Equal]\n    Option[A: Equal]\n    ParSeq[A: Equal]\n    These[A: Equal, B: Equal]\n    Try[A: Equal]\n    \u2768T1: Equal, ..., T22: Equal\u2769\n    Validation[E, A: Equal]\n    Vector[A: Equal]\n    ZNonEmptySet[A, B: Equal]\n    ZSet[A, B: Equal]\n\n    () both[B](=> Equal[B]): Equal[(A, B)]\n    () bothWith[B, C](=> Equal[B])(C => (A, B)): Equal[C]\n    () contramap[B](B => A): Equal[B]\n    () either[B](=> Equal[B]): Equal[Either[A, B]]\n    () eitherWith[B, C](=> Equal[B])(C => Either[A, B]): Equal[C]\n    () equal(A, A): Boolean\n    () notEqual(A, A): Boolean\n    () toScala[A1 <: A]: scala.math.Equiv[A1]\n  }\n  class Hash~-A~ {\n    Boolean\n    Byte\n    Cause[A]\n    Char\n    Chunk[A: Hash]\n    Class[_]\n    Double\n    Either[A: Hash, B: Hash]\n    F[A: Hash]: Derive[_, Hash]\n    Fiber.Id\n    Float\n    Int\n    List[A: Hash]\n    Long\n    Map[A, B: Hash]\n    NonEmptyChunk[A: Hash]\n    NonEmptyList[A: Hash]\n    NonEmptySet[A]\n    Nothing\n    Option[A: Hash]\n    Ordering\n    ParMap[A, B: Hash]\n    ParSeq[A: Hash]\n    ParSet[A]\n    PartialOrdering\n    Set[A]\n    Short\n    String\n    These[A: Hash, B: Hash]\n    \u2768T1: Hash, ..., T22: Hash\u2769\n    Unit\n    Validation[E: Hash, A: Hash]\n    Vector[A: Hash]\n    ZNonEmptySet[A, B: Hash]\n    ZSet[A, B: Hash]\n    ZTrace\n\n    () both[B](Hash[B]): Hash[(A, B)]\n    () bothWith[B, C](Hash[B])(C => (A, B)): Hash[C]\n    () contramap[B](B => A): Hash[B]\n    () either[B](Hash[B]): Hash[Either[A, B]]\n    () eitherWith[B, C](Hash[B])(C => Either[A, B]): Hash[C]\n    () hash(A): Int\n  }\n  class PartialOrd~-A~ {\n    Chunk[A: PartialOrd]\n    Either[A: PartialOrd, B: PartialOrd]\n    F[A: PartialOrd]: Derive[_, PartialOrd]\n    List[A: PartialOrd]\n    Map[A, B: Equal]\n    NonEmptyChunk[A: PartialOrd]\n    NonEmptyList[A: PartialOrd]\n    NonEmptySet[A]\n    Option[A: PartialOrd]\n    ParMap[A, B: Equal]\n    ParSeq[A: PartialOrd]\n    ParSet[A]\n    PartialOrdering\n    Set[A]\n    \u2768T1: PartialOrd, ..., T22: PartialOrd\u2769\n    Vector[A: PartialOrd]\n    ZNonEmptySet[A, B: PartialOrd]\n    ZSet[A, B: PartialOrd]\n\n    () both[B](=> PartialOrd[B]): PartialOrd[(A, B)]\n    () bothWith[B, C](=> PartialOrd[B])(C => (A, B)): PartialOrd[C]\n    () compare(A, A): PartialOrdering\n    () contramap[B](B => A): PartialOrd[B]\n    () either[B](=> PartialOrd[B]): PartialOrd[Either[A, B]]\n    () eitherWith[B, C](=> PartialOrd[B])(C => Either[A, B]): PartialOrd[C]\n    () mapPartialOrdering(PartialOrdering => PartialOrdering): PartialOrd[A]\n\n  }\n  class Ord~-A~ {\n    Boolean\n    Byte\n    Char\n    Chunk[A: Ord]\n    Double\n    Either[A: Ord, B: Ord]\n    F[A: Ord]: Derive[_, Ord]\n    Fiber.Id\n    Float\n    Int\n    List[A: Ord]\n    Long\n    NonEmptyChunk[A: Ord]\n    NonEmptyList[A: Ord]\n    Nothing\n    Option[A: Ord]\n    ParSeq[A: Ord]\n    Ordering\n    Short\n    String\n    \u2768T1: Ord, ..., T22: Ord\u2769\n    Unit\n    Vector[A: Ord]\n\n    () both[B](=> Ord[B]): Ord[(A, B)]\n    () bothWith[B, C](=> Ord[B])(C => (A, B)): Ord[C]\n    () compare(A, A): Ordering\n    () contramap[B](B => A): Ord[B]\n    () either[B](=> Ord[B]): Ord[Either[A, B]]\n    () eitherWith[B, C](=> Ord[B])(C => Either[A, B]): Ord[C]\n    () mapOrdering(Ordering => Ordering): Ord[A]\n    () reverse: Ord[A]\n    () toScala[A1 <: A]: scala.math.Ordering[A1]\n  }"}))}u.isMDXComponent=!0}}]);