"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71717],{83994:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>m});r(67294);var n=r(3905),o=r(53787),a=r(50551);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"Router Provider"},u=void 0,d={unversionedId:"core/providers/router-provider/index",id:"core/providers/router-provider/index",title:"Router Provider",description:"Refine provides a simple interface from the routerProvider prop to infer the resource from route, pass, parse and sync the query parameters and handle navigation operations. This provider and its properties are optional but recommended to get the most out of Refine.",source:"@site/docs/core/providers/router-provider/index.md",sourceDirName:"core/providers/router-provider",slug:"/core/providers/router-provider/",permalink:"/docs/core/providers/router-provider/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/providers/router-provider/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1703076847,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{title:"Router Provider"},sidebar:"mainSidebar",previous:{title:"Notification Provider",permalink:"/docs/core/providers/notification-provider/"},next:{title:"<Authenticated />",permalink:"/docs/core/components/authenticated/"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Creating a router provider",id:"creating-a-router-provider",level:2},{value:"<code>go</code>",id:"go",level:3},{value:"<code>back</code>",id:"back",level:3},{value:"<code>parse</code>",id:"parse",level:3},{value:"<code>Link</code>",id:"link",level:3},{value:"Source Code for the Existing Router Providers",id:"source-code-for-the-existing-router-providers",level:3},{value:"Legacy Router Provider",id:"legacy-router-provider",level:2}],h={toc:m};function f(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",p(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Refine provides a simple interface from the ",(0,n.kt)("inlineCode",{parentName:"p"},"routerProvider")," prop to infer the resource from route, pass, parse and sync the query parameters and handle navigation operations. This provider and its properties are optional but recommended to get the most out of Refine."),(0,n.kt)("p",null,"Rather than restricting and limiting our users to specific routing libraries or practices, we have designed the ",(0,n.kt)("inlineCode",{parentName:"p"},"routerProvider")," interface to communicate with the router libraries rather than managing them."),(0,n.kt)("admonition",{title:"Out of the Box Router Providers",type:"simple"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/react-router-v6"},"React Router V6")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/nextjs-router"},"Next.js Router")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/remix"},"Remix Router")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@refinenative/expo-router"},"Expo Router (Community)")))),(0,n.kt)("p",null,"A router provider may contain the following methods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const routerProvider: {\n    go?: () => ({\n        to?: string;\n        query?: Record<string, unknown>;\n        hash?: string;\n        options?: {\n            keepQuery?: boolean;\n            keepHash?: boolean;\n        };\n        type?: "push" | "replace" | "path";\n    }) => void | string;\n    back?: () => () => void;\n    parse?: () => () => {\n        resource?: IResourceItem;\n        id?: BaseKey;\n        action?: Action;\n        pathname?: string;\n        params?: {\n            filters?: CrudFilters;\n            sorters?: CrudSorting;\n            current?: number;\n            pageSize?: number;\n            [key: string]: any;\n        }\n    };\n    Link?: React.ComponentType<{ to: string; children?: React.ReactNode; }>;\n};\n')),(0,n.kt)("p",null,"You can create your own router provider or easily customize the existing ones to suit your needs. The existing implementations are pretty simple and straightforward. Do not hesitate to check the source code of the existing router providers when creating your own."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"To activate router provider in Refine, we have to pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"routerProvider")," to the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine />")," component:"),(0,n.kt)(o.Z,{defaultValue:"react-router-v6",values:[{label:"React Router V6",value:"react-router-v6"},{label:"Next.js Router",value:"nextjs"},{label:"Remix Router",value:"remix"},{label:"React Router V5 (Legacy)",value:"react-router"},{label:"React Location (Legacy)",value:"react-location"}],mdxType:"Tabs"},(0,n.kt)(a.Z,{value:"react-router-v6",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\n\nimport { BrowserRouter } from "react-router-dom";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        // highlight-next-line\n        routerProvider={routerProvider}\n        /* ... */\n      >\n        {/* ... */}\n      </Refine>\n    </BrowserRouter>\n  );\n};\n'))),(0,n.kt)(a.Z,{value:"react-router",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerProvider from "@pankod/refine-react-router";\n\nconst App: React.FC = () => {\n  return <Refine legacyRouterProvider={routerProvider} />;\n};\n'))),(0,n.kt)(a.Z,{value:"react-location",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerProvider from "@pankod/refine-react-location";\n\nconst App: React.FC = () => {\n  return <Refine legacyRouterProvider={routerProvider} />;\n};\n'))),(0,n.kt)(a.Z,{value:"nextjs",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/_app.tsx"',title:'"pages/_app.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/nextjs-router";\nimport { AppProps } from "next/app";\n\nfunction MyApp({ Component, pageProps }: AppProps): JSX.Element {\n  return (\n    <Refine routerProvider={routerProvider}>\n      <Component {...pageProps} />\n    </Refine>\n  );\n}\n'))),(0,n.kt)(a.Z,{value:"remix",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/root.tsx"',title:'"app/root.tsx"'},'import type { MetaFunction } from "@remix-run/node";\nimport { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/remix-router";\n\nexport const meta: MetaFunction = () => ({\n  charset: "utf-8",\n  title: "New Remix + Refine App",\n  viewport: "width=device-width,initial-scale=1",\n});\n\nexport default function App() {\n  return (\n    <html lang="en">\n      <head>\n        <Meta />\n        <Links />\n      </head>\n      <body>\n        <Refine routerProvider={routerProvider}>\n          <Outlet />\n        </Refine>\n        <ScrollRestoration />\n        <Scripts />\n        <LiveReload />\n      </body>\n    </html>\n  );\n}\n')))),(0,n.kt)("h2",{id:"creating-a-router-provider"},"Creating a router provider"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"routerProvider")," methods are designed to be as simple as possible and to be compatible with any router library. Refine also exports some helper functions to make it easier to create a customized ",(0,n.kt)("inlineCode",{parentName:"p"},"routerProvider"),"."),(0,n.kt)("h3",{id:"go"},(0,n.kt)("inlineCode",{parentName:"h3"},"go")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"go")," method is used to navigate to a specific page. It accepts a ",(0,n.kt)("inlineCode",{parentName:"p"},"to")," parameter, which is the path of the page to navigate to; the ",(0,n.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"hash"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"options")," parameters to customize the navigation; and the ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," parameter is used to specify the type of navigation, which can be either ",(0,n.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"replace")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"path"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," type returns the path to navigate, which can be used in links or redirects. The ",(0,n.kt)("inlineCode",{parentName:"p"},"push")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"replace")," types navigate to the path."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"to")," parameter is ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," by default. In this case, we expect the ",(0,n.kt)("inlineCode",{parentName:"p"},"go")," function to use the current path and add the ",(0,n.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"hash")," parameters to it."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"query")," parameter is passed as an object to let the router library handle the query string. In our implementations, we use the ",(0,n.kt)("inlineCode",{parentName:"p"},"qs")," library to stringify the query object, which supports nested objects. The ",(0,n.kt)("inlineCode",{parentName:"p"},"query")," is also parsed in the ",(0,n.kt)("inlineCode",{parentName:"p"},"parse")," method of the ",(0,n.kt)("inlineCode",{parentName:"p"},"routerProvider"),", which allows us to implement custom ways of stringifying and parsing the queries."),(0,n.kt)("h3",{id:"back"},(0,n.kt)("inlineCode",{parentName:"h3"},"back")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"back")," method is used to navigate back to the previous page. It has no parameters and has no return value."),(0,n.kt)("h3",{id:"parse"},(0,n.kt)("inlineCode",{parentName:"h3"},"parse")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"parse")," method is used to parse the current path and return the current ",(0,n.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"action")," of the page as well as the ",(0,n.kt)("inlineCode",{parentName:"p"},"pathname")," and the ",(0,n.kt)("inlineCode",{parentName:"p"},"params"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"params")," is an object that contains both the URL parameters and the query parameters. We use the ",(0,n.kt)("inlineCode",{parentName:"p"},"qs")," library to parse the query string and return the query parameters as an object, but you can use any other library or implement your own way of parsing the query string."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"resource")," is the name of the resource that is used in the current page and also defined in the ",(0,n.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine />")," component. This can be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there's no matching resource route."),(0,n.kt)("p",null,"Matching the resource route can be done with the help of the ",(0,n.kt)("inlineCode",{parentName:"p"},"matchResourceFromRoute")," function from the ",(0,n.kt)("inlineCode",{parentName:"p"},"@refinedev/core")," package."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"id")," is the id of the record that is used in the current page. This can be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there's no matching parameter."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"action")," is the name of the action that is used in the current page. This can be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there's no matching route for a resource action."),(0,n.kt)("h3",{id:"link"},(0,n.kt)("inlineCode",{parentName:"h3"},"Link")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Link")," component is used to create links to other pages. It accepts a ",(0,n.kt)("inlineCode",{parentName:"p"},"to")," parameter which is the path of the page to navigate to. It's meant to be used internally in UI packages and other parts of Refine to complement the router library. It's not meant to be used directly in the application."),(0,n.kt)("h3",{id:"source-code-for-the-existing-router-providers"},"Source Code for the Existing Router Providers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/react-router-v6/src/bindings.tsx"},"React Router V6")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/nextjs-router/src/pages/bindings.tsx"},"Next.js Router")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/remix/src/bindings.tsx"},"Remix Router"))),(0,n.kt)("h2",{id:"legacy-router-provider"},"Legacy Router Provider"),(0,n.kt)("p",null,"Refine's v4 release is backward compatible and supports the legacy router provider implementations until v5 comes out. The legacy router provider implementations are still available at ",(0,n.kt)("inlineCode",{parentName:"p"},"/legacy")," paths in the router provider packages. For example, the legacy router provider implementation for React Router V6 is available at ",(0,n.kt)("inlineCode",{parentName:"p"},"@refinedev/react-router-v6/legacy"),"."),(0,n.kt)("p",null,"If you want to use a legacy router provider, you can pass them to the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine />")," component using the ",(0,n.kt)("inlineCode",{parentName:"p"},"legacyRouterProvider")," prop."))}f.isMDXComponent=!0}}]);