"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[18401],{20919:(e,t,n)=>{n.r(t),n.d(t,{default:()=>me});var a=n(96540),l=n(69024),o=n(89532);const r=a.createContext(null);function s(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(r);if(null===e)throw new o.dV("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(l.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(40870),m=n(24581),u=n(58168),b=n(21312),v=n(39022);function p(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,b.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&a.createElement(v.A,(0,u.A)({},t,{subLabel:a.createElement(b.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(v.A,(0,u.A)({},n,{subLabel:a.createElement(b.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function f(){const{metadata:e}=c();return a.createElement(p,{previous:e.previous,next:e.next})}function h(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=h(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}const E=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=h(e))&&(a&&(a+=" "),a+=t);return a};var g=n(44586),A=n(75489),L=n(48295),C=n(17559),N=n(55597),_=n(32252);const T={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(b.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(b.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is not the most current version.")}};function x(e){const t=T[e.versionMetadata.banner];return a.createElement(t,e)}function k(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(b.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(A.A,{to:n,onClick:l},a.createElement(b.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function H(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,g.A)(),{pluginId:o}=(0,L.vT)({failfast:!0}),{savePreferredVersionName:r}=(0,N.g1)(o),{latestDocSuggestion:s,latestVersionSuggestion:c}=(0,L.HW)(o),i=s??(d=c).docs.find((e=>e.id===d.mainDocId));var d;return a.createElement("div",{className:E(t,C.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(x,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(k,{versionLabel:c.label,to:i.path,onClick:()=>r(c.name)})))}function y(e){let{className:t}=e;const n=(0,_.r)();return n.banner?a.createElement(H,{className:t,versionMetadata:n}):null}function U(e){let{className:t}=e;const n=(0,_.r)();return n.badge?a.createElement("span",{className:(0,d.A)(t,C.G.docs.docVersionBadge,"badge badge--secondary")},a.createElement(b.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(b.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function M(e){let{lastUpdatedBy:t}=e;return a.createElement(b.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function I(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:C.G.common.lastUpdated},a.createElement(b.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(w,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(M,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var B=n(42873),O=n(22323);const V={lastUpdated:"lastUpdated_vwxv"};function S(e){return a.createElement("div",{className:(0,d.A)(C.G.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(O.A,e)))}function D(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,d.A)(C.G.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(B.A,{editUrl:t})),a.createElement("div",{className:(0,d.A)("col",V.lastUpdated)},(n||l)&&a.createElement(I,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function G(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:o,tags:r}=e,s=r.length>0,i=!!(t||n||o);return s||i?a.createElement("footer",{className:(0,d.A)(C.G.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(S,{tags:r}),i&&a.createElement(D,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:l})):null}var P=n(41422),R=n(65195);const F={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function z(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.A)({type:"button"},n,{className:(0,d.A)("clean-btn",F.tocCollapsibleButton,!t&&F.tocCollapsibleButtonExpanded,n.className)}),a.createElement(b.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const j={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function q(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:o}=e;const{collapsed:r,toggleCollapsed:s}=(0,P.u)({initialState:!0});return a.createElement("div",{className:(0,d.A)(j.tocCollapsible,!r&&j.tocCollapsibleExpanded,n)},a.createElement(z,{collapsed:r,onClick:s}),a.createElement(P.N,{lazy:!0,className:j.tocCollapsibleContent,collapsed:r},a.createElement(R.A,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}const $={tocMobile:"tocMobile_ITEo"};function W(){const{toc:e,frontMatter:t}=c();return a.createElement(q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.A)(C.G.docs.docTocMobile,$.tocMobile)})}var Y=n(25229);function Z(){const{toc:e,frontMatter:t}=c();return a.createElement(Y.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:C.G.docs.docTocDesktop})}var J=n(38141),K=n(14057);function Q(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.A)(C.G.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(J.A,{as:"h1"},n)),a.createElement(K.A,null,t))}var X=n(81754),ee=n(99169),te=n(86025);function ne(e){return a.createElement("svg",(0,u.A)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ae={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function le(){const e=(0,te.A)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(A.A,{"aria-label":(0,b.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(ne,{className:ae.breadcrumbHomeIcon})))}const oe={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function re(e){let{children:t,href:n,isLast:l}=e;const o="breadcrumbs__link";return l?a.createElement("span",{className:o,itemProp:"name"},t):n?a.createElement(A.A,{className:o,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:o},t)}function se(e){let{children:t,active:n,index:l,addMicrodata:o}=e;return a.createElement("li",(0,u.A)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.A)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ce(){const e=(0,X.OF)(),t=(0,ee.Dt)();return e?a.createElement("nav",{className:(0,d.A)(C.G.docs.docBreadcrumbs,oe.breadcrumbsContainer),"aria-label":(0,b.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(le,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(se,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(re,{href:t.href,isLast:l},t.label))})))):null}const ie={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function de(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),l=e.hide_table_of_contents,o=!l&&t.length>0;return{hidden:l,mobile:o?a.createElement(W,null):void 0,desktop:!o||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(Z,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.A)("col",!n.hidden&&ie.docItemCol)},a.createElement(y,null),a.createElement("div",{className:ie.docItemContainer},a.createElement("article",null,a.createElement(ce,null),a.createElement(U,null),n.mobile,a.createElement(Q,null,t),a.createElement(G,null)),a.createElement(f,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function me(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(s,{content:e.content},a.createElement(l.e3,{className:t},a.createElement(i,null),a.createElement(de,null,a.createElement(n,null))))}},25229:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(58168),l=n(96540),o=n(40870),r=n(65195);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function d(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,o.A)(s.tableOfContents,"thin-scrollbar",t)},l.createElement(r.A,(0,a.A)({},n,{linkClassName:c,linkActiveClassName:i})))}},65195:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(58168),l=n(96540),o=n(6342);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.p)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=i(s,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?l.createElement("ul",{className:o?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const b=l.memo(u);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...v}=e;const p=(0,o.p)(),f=d??p.tableOfContents.minHeadingLevel,h=u??p.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:h});return m((0,l.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:f,maxHeadingLevel:h}}),[c,i,f,h])),l.createElement(b,(0,a.A)({toc:E,className:n,linkClassName:c},v))}}}]);