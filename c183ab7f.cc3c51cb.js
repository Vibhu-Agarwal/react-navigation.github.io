(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{385:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(468)),i={id:"tab-actions",title:"TabActions reference",sidebar_label:"TabActions"},c={id:"version-5.x/tab-actions",title:"TabActions reference",description:"`TabActions` is an object containing methods for generating actions specific to tab-based navigators. Its methods expand upon the actions available in [`NavigationActions`](navigation-actions.md).",source:"@site/versioned_docs/version-5.x/tab-actions.md",permalink:"/docs/tab-actions",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/tab-actions.md",version:"5.x",sidebar_label:"TabActions",sidebar:"version-5.x/docs",previous:{title:"DrawerActions reference",permalink:"/docs/drawer-actions"},next:{title:"Custom routers",permalink:"/docs/custom-routers"}},s=[{value:"jumpTo",id:"jumpto",children:[]}],p={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"TabActions")," is an object containing methods for generating actions specific to tab-based navigators. Its methods expand upon the actions available in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/navigation-actions"}),Object(o.b)("inlineCode",{parentName:"a"},"NavigationActions")),"."),Object(o.b)("p",null,"The following actions are supported:"),Object(o.b)("h3",{id:"jumpto"},"jumpTo"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"jumpTo")," action can be used to jump to an existing route in the tab navigator."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name")," - ",Object(o.b)("em",{parentName:"li"},"string")," - Name of the route to jump to."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"params")," - ",Object(o.b)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",Object(o.b)("inlineCode",{parentName:"li"},"route.params"),").")),Object(o.b)("samp",{id:"tab-actions"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { TabActions } from '@react-navigation/native';\n\nconst jumpToAction = TabActions.jumpTo('Profile', { user: 'Satya' });\n\nnavigation.dispatch(jumpToAction);\n")))}b.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||l[m]||o;return n?a.a.createElement(d,c({ref:t},p,{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);