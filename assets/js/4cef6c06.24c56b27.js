"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Nest.js Query",source:"https://github.com/refinedev/refine/tree/master/packages/nestjs-query"},l=void 0,p={unversionedId:"packages/data-providers/nestjs-query/index",id:"packages/data-providers/nestjs-query/index",title:"Nest.js Query",description:"Refine provides a data provider for APIs powered with Nest.js Query, a module for Nest.js that provides easier ways to build CRUD graphql APIs.",source:"@site/docs/packages/data-providers/nestjs-query/index.md",sourceDirName:"packages/data-providers/nestjs-query",slug:"/packages/data-providers/nestjs-query/",permalink:"/docs/packages/data-providers/nestjs-query/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/packages/data-providers/nestjs-query/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1703076847,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{title:"Nest.js Query",source:"https://github.com/refinedev/refine/tree/master/packages/nestjs-query"},sidebar:"mainSidebar",previous:{title:"Supabase",permalink:"/docs/packages/data-providers/supabase/"},next:{title:"NestJS CRUD",permalink:"/docs/packages/data-providers/nestjsx-crud/"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Realtime",id:"realtime",level:3},{value:"Authentication",id:"authentication",level:2},{value:"Example",id:"example",level:2}],d=(h="CodeSandboxExample",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var h;const m={toc:u};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Refine provides a data provider for APIs powered with ",(0,r.kt)("a",{parentName:"p",href:"https://doug-martin.github.io/nestjs-query/"},"Nest.js Query"),", a module for Nest.js that provides easier ways to build CRUD graphql APIs."),(0,r.kt)("admonition",{title:"Good to know",type:"simple"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This library uses ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jasonkuhrt/graphql-request"},(0,r.kt)("inlineCode",{parentName:"a"},"graphql-request@5"))," to handle the requests."),(0,r.kt)("li",{parentName:"ul"},"To learn more about data fetching in Refine, check out the ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides-concepts/data-fetching"},"Data Fetching")," guide."),(0,r.kt)("li",{parentName:"ul"},"To learn more about realtime features of Refine, check out the ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides-concepts/realtime"},"Realtime")," guide."))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @refinedev/nestjs-query\n")),(0,r.kt)("p",null,"If you're going to use realtime features, you'll also need to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-ws")," package to handle graphql subscriptions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i graphql-ws\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"We'll create a GraphQL Client with our API url and pass it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," function to create a data provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\nimport dataProvider, { GraphQLClient } from "@refinedev/nestjs-query";\n\n// highlight-next-line\nconst client = new GraphQLClient("https://api.example.com/graphql");\n\nconst App = () => (\n  <Refine\n    // highlight-next-line\n    dataProvider={dataProvider(client)}\n  >\n    {/* ... */}\n  </Refine>\n);\n')),(0,r.kt)("h3",{id:"realtime"},"Realtime"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/nestjs-query")," also provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"liveProvider")," to enable realtime features of Refine. These features are powered by GraphQL subscriptions and uses ",(0,r.kt)("a",{parentName:"p",href:"https://the-guild.dev/graphql/ws"},(0,r.kt)("inlineCode",{parentName:"a"},"graphql-ws"))," to handle the connections."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\n// highlight-next-line\nimport dataProvider, { GraphQLClient, liveProvider } from "@refinedev/nestjs-query";\n// highlight-next-line\nimport { createClient } from "graphql-ws";\n\nconst client = new GraphQLClient("https://api.example.com/graphql");\n// highlight-next-line\nconst wsClient = createClient({ url: "wss://api.example.com/graphql" });\n\nconst App = () => (\n  <Refine\n    dataProvider={dataProvider(client)}\n    // highlight-next-line\n    liveProvider={liveProvider(wsClient)}\n    options={{ liveMode: "auto" }}\n  >\n    {/* ... */}\n  </Refine>\n);\n')),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"If your API uses authentication, you can easily provide a custom fetcher for the requests and handle the authentication logic there. When creating a GraphQL Client, you can pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," function to the client options. This function will be used to append the authentication headers to the requests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="data-provider.tsx"',title:'"data-provider.tsx"'},'import graphqlDataProvider, { GraphQLClient } from "@refinedev/nestjs-query";\n\nconst client = new GraphQLClient(API_URL, {\n  fetch: (url: string, options: RequestInit) => {\n    return fetch(url, {\n      ...options,\n      headers: {\n        ...options.headers,\n        /**\n         * For demo purposes, we\'re using `localStorage` to access the token.\n         * You can use your own authentication logic here.\n         * In real world applications, you\'ll need to handle it in sync with your `authProvider`.\n         */\n        // highlight-next-line\n        Authorization: `Bearer ${localStorage.getItem("token")}`,\n      },\n    });\n  },\n});\n\n/**\n * Create the data provider with the custom client.\n */\nconst dataProvider = graphqlDataProvider(client);\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(d,{path:"data-provider-nestjs-query",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);