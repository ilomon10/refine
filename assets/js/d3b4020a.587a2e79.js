"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(n),p=r,h=d["".concat(l,".").concat(p)]||d[p]||c[p]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var m=2;m<i;m++)a[m]=n[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>m,toc:()=>c});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Theme"},l=void 0,m={unversionedId:"ui-integrations/mantine/theming/index",id:"ui-integrations/mantine/theming/index",title:"Theme",description:"Mantine theme is an object where your application's colors, fonts, spacing, border-radius and other design tokens are stored. You can either create your own theme object or use themes that provide from Refine. Theme provides a way to your app's design to meet them.",source:"@site/docs/ui-integrations/mantine/theming/index.md",sourceDirName:"ui-integrations/mantine/theming",slug:"/ui-integrations/mantine/theming/",permalink:"/docs/ui-integrations/mantine/theming/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/mantine/theming/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1702899211,formattedLastUpdatedAt:"Dec 18, 2023",frontMatter:{title:"Theme"},sidebar:"mainSidebar",previous:{title:"useSelect",permalink:"/docs/ui-integrations/mantine/hooks/use-select/"},next:{title:"React Router v6",permalink:"/docs/router-integrations/react-router/"}},u={},c=[{value:"Predefined Themes",id:"predefined-themes",level:2},{value:"Theme customization",id:"theme-customization",level:2},{value:"Overriding the Refine themes",id:"overriding-the-refine-themes",level:3},{value:"Theme switching",id:"theme-switching",level:2}],d={toc:c};function p(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { List, Create, Edit, EditButton, useForm } from "@refinedev/mantine";\nimport { Table, Pagination, TextInput } from "@mantine/core";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nconst PostList: React.FC = () => {\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n      },\n      {\n        id: "actions",\n        header: "Actions",\n        accessorKey: "id",\n        cell: function render({ getValue }) {\n          return <EditButton hideText recordItemId={getValue() as number} />;\n        },\n      },\n    ],\n    [],\n  );\n\n  const {\n    getHeaderGroups,\n    getRowModel,\n    refineCore: { setCurrent, pageCount, current },\n  } = useTable({\n    columns,\n    refineCoreProps: {\n      initialPageSize: 5,\n    },\n  });\n\n  return (\n    <List>\n      <Table>\n        <thead>\n          {getHeaderGroups().map((headerGroup) => (\n            <tr key={headerGroup.id}>\n              {headerGroup.headers.map((header) => (\n                <th key={header.id}>\n                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n                </th>\n              ))}\n            </tr>\n          ))}\n        </thead>\n        <tbody>\n          {getRowModel().rows.map((row) => (\n            <tr key={row.id}>\n              {row.getVisibleCells().map((cell) => (\n                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>\n              ))}\n            </tr>\n          ))}\n        </tbody>\n      </Table>\n      <br />\n      <Pagination position="right" total={pageCount} page={current} onChange={setCurrent} />\n    </List>\n  );\n};\n\nconst PostEdit: React.FC = () => {\n  const { saveButtonProps, getInputProps } = useForm({\n    initialValues: {\n      title: "",\n    },\n    validate: {\n      title: (value) => (value.length < 2 ? "Too short title" : null),\n    },\n  });\n\n  return (\n    <Edit saveButtonProps={saveButtonProps}>\n      <form>\n        <TextInput mt={8} label="Title" placeholder="Title" {...getInputProps("title")} />\n      </form>\n    </Edit>\n  );\n};\n\nconst PostCreate: React.FC = () => {\n  const { saveButtonProps, getInputProps } = useForm({\n    initialValues: {\n      title: "",\n    },\n    validate: {\n      title: (value) => (value.length < 2 ? "Too short title" : null),\n    },\n  });\n\n  return (\n    <Create saveButtonProps={saveButtonProps}>\n      <form>\n        <TextInput mt={8} label="Title" placeholder="Title" {...getInputProps("title")} />\n      </form>\n    </Create>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n')),(0,o.kt)("p",null,"Mantine theme is an object where your application's colors, fonts, spacing, border-radius and other design tokens are stored. You can either create your own theme object or use themes that provide from Refine. Theme provides a way to your app's design to meet them."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/theming/theme-object/"},"Mantine documentation ","\u2192"))),(0,o.kt)("h2",{id:"predefined-themes"},"Predefined Themes"),(0,o.kt)("p",null,"If you don't want to use the default Mantine theme, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/packages/mantine/src/theme/index.ts#L186"},(0,o.kt)("inlineCode",{parentName:"a"},"RefineThemes"))," has predefined themes for you. You can import predefined themes from the ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/mantine")," package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { Blue, Purple, Magenta, Red, Orange, Yellow } = RefineThemes;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/mantine";\n\nimport { MantineProvider } from "@mantine/core";\n\nconst App: React.FC = () => {\n  return (\n    <MantineProvider theme={RefineThemes.Blue}>\n      <Refine\n      /* ... */\n      >\n        <ThemedLayoutV2>{/* ... */}</ThemedLayoutV2>\n      </Refine>\n    </MantineProvider>\n  );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/examples/themes/refine-themes-mantine/"},"You can see how themes change the look of the application in this example.")),(0,o.kt)("h2",{id:"theme-customization"},"Theme customization"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<MantineProvider/>")," component can be used to change the theme. It is not required if you decide to use the default theme. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"RefineThemes")," provided by Refine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n  ThemedLayoutV2,\n  notificationProvider,\n  ErrorComponent,\n  // highlight-next-line\n  RefineThemes,\n} from "@refinedev/mantine";\nimport { MantineProvider, Global } from "@mantine/core";\nimport { NotificationsProvider } from "@mantine/notifications";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\nconst App = () => {\n  return (\n    <MantineProvider\n      // highlight-next-line\n      theme={RefineThemes.Blue}\n      withNormalizeCSS\n      withGlobalStyles\n    >\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <BrowserRouter>\n          <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            notificationProvider={notificationProvider}\n            resources={[\n              {\n                name: "posts",\n                list: "/posts",\n                edit: "/posts/edit/:id",\n                create: "/posts/create",\n              },\n            ]}\n          >\n            <Routes>\n              <Route\n                element={\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                }\n              >\n                <Route path="posts">\n                  <Route index element={<PostList />} />\n                  <Route path="create" element={<PostCreate />} />\n                  <Route path="edit/:id" element={<PostEdit />} />\n                </Route>\n                <Route path="*" element={<ErrorComponent />} />\n              </Route>\n            </Routes>\n          </Refine>\n        </BrowserRouter>\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/theming/mantine-provider/"},(0,o.kt)("inlineCode",{parentName:"a"},"<MantineProvider/>")," documentation ","\u2192"))),(0,o.kt)("h3",{id:"overriding-the-refine-themes"},"Overriding the Refine themes"),(0,o.kt)("p",null,"You can override or extend the default Refine themes. You can also create your own theme. Let's see how you can do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n  ThemedLayoutV2,\n  notificationProvider,\n  ErrorComponent,\n  // highlight-next-line\n  RefineThemes,\n} from "@refinedev/mantine";\nimport { MantineProvider, Global } from "@mantine/core";\nimport { NotificationsProvider } from "@mantine/notifications";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\nconst App = () => {\n  return (\n    <MantineProvider\n      // highlight-start\n      theme={{\n        ...RefineThemes.Blue,\n        colors: {\n          brand: [\n            "#ECF9F8",\n            "#C9EEEC",\n            "#A6E2E1",\n            "#84D7D5",\n            "#61CCC9",\n            "#3EC1BD",\n            "#329A97",\n            "#257471",\n            "#194D4B",\n            "#0C2726",\n          ],\n        },\n        globalStyles: (theme: MantineTheme) => ({\n          body: {\n            backgroundColor: "#84D7D5",\n          },\n        }),\n      }}\n      // highlight-end\n      withNormalizeCSS\n      withGlobalStyles\n    >\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <BrowserRouter>\n          <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            notificationProvider={notificationProvider}\n            resources={[\n              {\n                name: "posts",\n                list: "/posts",\n                edit: "/posts/edit/:id",\n                create: "/posts/create",\n              },\n            ]}\n          >\n            <Routes>\n              <Route\n                element={\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                }\n              >\n                <Route path="posts">\n                  <Route index element={<PostList />} />\n                  <Route path="create" element={<PostCreate />} />\n                  <Route path="edit/:id" element={<PostEdit />} />\n                </Route>\n                <Route path="*" element={<ErrorComponent />} />\n              </Route>\n            </Routes>\n          </Refine>\n        </BrowserRouter>\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/theming/colors/"},"Mantine colors documentation ","\u2192"))),(0,o.kt)("h2",{id:"theme-switching"},"Theme switching"),(0,o.kt)("p",null,"You can switch between themes as Mantine mentioned in its documentation. You can see an example of using local storage to store the theme below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { ThemedLayoutV2, ErrorComponent, notificationProvider, RefineThemes } from "@refinedev/mantine";\n// highlight-start\nimport { NotificationsProvider } from "@mantine/notifications";\nimport {\n  MantineProvider,\n  Global,\n  useMantineColorScheme,\n  Header as MantineHeader,\n  Group,\n  ActionIcon,\n  ColorScheme,\n  ColorSchemeProvider,\n} from "@mantine/core";\nimport { useLocalStorage } from "@mantine/hooks";\n// highlight-end\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { IconSun, IconMoonStars } from "@tabler/icons";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\n// highlight-start\nconst Header = () => {\n  const { colorScheme, toggleColorScheme } = useMantineColorScheme();\n  const dark = colorScheme === "dark";\n\n  return (\n    <MantineHeader height={50} p="xs">\n      <Group position="right">\n        <ActionIcon\n          variant="outline"\n          color={dark ? "yellow" : "primary"}\n          onClick={() => toggleColorScheme()}\n          title="Toggle color scheme"\n        >\n          {dark ? <IconSun /> : <IconMoonStars />}\n        </ActionIcon>\n      </Group>\n    </MantineHeader>\n  );\n};\n// highlight-end\n\nconst App = () => {\n  // highlight-start\n  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({\n    key: "mantine-color-scheme",\n    defaultValue: "light",\n    getInitialValueInEffect: true,\n  });\n  // highlight-end\n\n  // highlight-start\n  const toggleColorScheme = (value?: ColorScheme) =>\n    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));\n  // highlight-end\n\n  return (\n    // highlight-start\n    <ColorSchemeProvider\n      colorScheme={colorScheme}\n      toggleColorScheme={toggleColorScheme}\n      // highlight-end\n    >\n      <MantineProvider\n        // highlight-next-line\n        theme={{\n          ...RefineThemes.Blue,\n          colorScheme: colorScheme,\n        }}\n        withNormalizeCSS\n        withGlobalStyles\n      >\n        <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n        <NotificationsProvider position="top-right">\n          <BrowserRouter>\n            <Refine\n              routerProvider={routerProvider}\n              dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n              notificationProvider={notificationProvider}\n              resources={[\n                {\n                  name: "posts",\n                  list: "/posts",\n                  edit: "/posts/edit/:id",\n                  create: "/posts/create",\n                },\n              ]}\n            >\n              <Routes>\n                <Route\n                  element={\n                    <ThemedLayoutV2\n                      // highlight-next-line\n                      Header={Header}\n                    >\n                      <Outlet />\n                    </ThemedLayoutV2>\n                  }\n                >\n                  <Route path="posts">\n                    <Route index element={<PostList />} />\n                    <Route path="create" element={<PostCreate />} />\n                    <Route path="edit/:id" element={<PostEdit />} />\n                  </Route>\n                  <Route path="*" element={<ErrorComponent />} />\n                </Route>\n              </Routes>\n            </Refine>\n          </BrowserRouter>\n        </NotificationsProvider>\n      </MantineProvider>\n    </ColorSchemeProvider>\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/guides/dark-theme"},"Mantine dark theme documentation ","\u2192"))),(0,o.kt)("p",null,"If you want to customize the default layout elements provided with ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/mantine")," package, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/custom-layout"},"Custom ThemedLayout")," tutorial."))}p.isMDXComponent=!0}}]);