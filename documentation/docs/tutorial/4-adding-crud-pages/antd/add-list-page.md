---
id: index
title: 1. Adding List Page
tutorial:
  order: 0
  prev: false
  next: tutorial/adding-crud-pages/{preferredUI}/add-edit-page
---

In [Unit 2.4](/docs/tutorial/getting-started/antd/generate-crud-pages/), we created the CRUD pages automatically with Inferencer, and now we will do it manually by using the code generated by Inferencer to customize those pages freely.

## Creating the list page

First, we need to create our file, named `list.tsx`, under the `src/pages/blog-posts` folder. We will then copy the list page code generated by Inferencer and paste it into the file; for this, follow these steps:

1. Navigate to <a href="http://localhost:3000/blog-posts" rel="noopener noreferrer nofollow">localhost:3000/blog-posts</a> in your browser.

2. Click on the "Show Code" button in the bottom right corner of the page.

3. You will see the list page code that was generated by Inferencer. Copy it by clicking on the "Copy" button.

4. Paste the code into the newly created `list.tsx` file.

You can see an example list page generated by Inferencer below:

```tsx live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts
setInitialRoutes(["/blog-posts"]);

import { ErrorComponent, ThemedLayoutV2, RefineThemes, notificationProvider } from "@refinedev/antd";
import { Refine } from "@refinedev/core";
import { AntdInferencer } from "@refinedev/inferencer/antd";
import routerBindings, { NavigateToResource } from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { ConfigProvider } from "antd";
import "@refinedev/antd/dist/reset.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ConfigProvider theme={RefineThemes.Blue}>
        <Refine
          routerProvider={routerBindings}
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          notificationProvider={notificationProvider}
          resources={[
            {
              name: "blog_posts",
              list: "/blog-posts",
              show: "/blog-posts/show/:id",
              create: "/blog-posts/create",
              edit: "/blog-posts/edit/:id",
            },
          ]}
        >
          <Routes>
            <Route
              element={
                <ThemedLayoutV2>
                  <Outlet />
                </ThemedLayoutV2>
              }
            >
              <Route index element={<NavigateToResource resource="blog_posts" />} />

              {/* highlight-start */}
              <Route path="blog-posts">
                <Route index element={<AntdInferencer />} />
                <Route path="show/:id" element={<AntdInferencer />} />
                <Route path="edit/:id" element={<AntdInferencer />} />
                <Route path="create" element={<AntdInferencer />} />
              </Route>
              {/* highlight-end */}
              <Route path="*" element={<ErrorComponent />} />
            </Route>
          </Routes>
        </Refine>
      </ConfigProvider>
    </BrowserRouter>
  );
};

render(<App />);
```

## Understanding the List Component

### Hooks and Components in List Page

- `<List/>` is a Refine component that is used for presentation purposes like showing the create button, page title etc.

  > For more information, refer to the [`<List/>` documentation&#8594](/docs/ui-integrations/ant-design/components/basic-views/list)

- `<Table/>` is a native **Ant Design** component. It renders records row by row as a table. It expects a `rowKey` prop as the unique key of the records. In the auto-generated list page code, Inferencer used `id` field as the `rowKey`.

  > For more information, refer to the [**Ant Design** `<Table/>` documentation&#8594](https://ant.design/components/table/)

- `useTable` hook fetches data from API, provides helper hooks for `<Table/>` component, enabling instant access to sorting, filtering, pagination with single line of code, and returns necessary `tableProps` values.

  > For more information, refer to the [`useTable` documentation&#8594](/docs/ui-integrations/ant-design/hooks/use-table)

- `<Table.Column/>` is a native **Ant Design** component that renders a column in the table with `dataIndex` and `render` props used to specify the record field and custom content, respectively, such as rendering `description` with `<MarkdownField/>`.

  > For more information, refer to the [`<MarkdownField/>` documentation&#8594](/docs/ui-integrations/ant-design/components/fields/markdown-field)

- `<EditButton/>` and `<ShowButton/>` are Refine components that are used to navigate to the edit and show pages of the record, respectively.

  > For more information, refer to the [`<EditButton/>`](/docs/ui-integrations/ant-design/components/buttons/edit-button) and [`<ShowButton/>` documentations&#8594](/docs/ui-integrations/ant-design/components/buttons/show-button)

### Handling Relationships

Each blog post includes the `category` field, which has an `id` property. This is a foreign key that points to the `categories` resource, which is different from the "blog_posts" resource.

There is a `title` field in the `categories` resource; to display it in the table, we can use the `useMany` hook provided by Refine.

This hook allows us to fetch data for multiple records in a single request by providing the `id`'s of the related records. In this case, we need to provide the `id`'s of the blog posts categories. It is particularly useful when we need to fetch related data for multiple records.

In the code below, each blog post record has a `category` field:

```ts title="https://api.fake-rest.refine.dev/blog_posts"
{
  ...
  "category": {
    "id": 1
  }
  ...
},
{
  ...
  "category": {
    "id": 2
  }
  ...
}
```

We can use the `useMany` hook to fetch the full category records for each of these blog posts like this:

```tsx
import { useMany } from "@refinedev/core";

const { data } = useMany({
  resource: "categories",
  ids: blogPosts.map((blogPost) => blogPost.category.id),
});
```

This will pass the `resource` and `ids` to the `dataProvider`'s `getMany` function. The `dataProvider` will then make a single request to the API to fetch the full records for each category related to the blog posts. The resulting `data` variable will be an array of category records, like this:

```ts
[
  {
    id: 1,
    title: "mock category title",
  },
  {
    id: 2,
    title: "another mock category title",
  },
];
```

We can then use this `data` array to display the `title` of each category in the table.

> For more information, refer to the [`useMany` documentation&#8594](/docs/data/hooks/use-many)

## Adding the List Page to the App

Now that we have created the list page, we can add it to the `App.tsx` file:

1. Open `src/App.tsx` file on your editor.

2. Import the created `BlogPostList` component.

3. Replace the `AntdInferencer` component with the `BlogPostList` component.

```tsx title="src/App.tsx"
import { ErrorComponent, ThemedLayoutV2, RefineThemes, notificationProvider } from "@refinedev/antd";
import { Refine } from "@refinedev/core";
import { AntdInferencer } from "@refinedev/inferencer/antd";
import routerBindings, { NavigateToResource } from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

//highlight-next-line
import { BlogPostList } from "pages/blog-posts/list";

import { ConfigProvider } from "antd";
import "@refinedev/antd/dist/reset.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ConfigProvider theme={RefineThemes.Blue}>
        <Refine
          routerProvider={routerBindings}
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          notificationProvider={notificationProvider}
          resources={[
            {
              name: "blog_posts",
              //highlight-next-line
              list: "/blog-posts",
              show: "/blog-posts/show/:id",
              create: "/blog-posts/create",
              edit: "/blog-posts/edit/:id",
            },
          ]}
        >
          <Routes>
            <Route
              element={
                <ThemedLayoutV2>
                  <Outlet />
                </ThemedLayoutV2>
              }
            >
              <Route index element={<NavigateToResource resource="blog_posts" />} />

              <Route path="blog-posts">
                {/* highlight-next-line */}
                <Route index element={<BlogPostList />} />
                <Route path="show/:id" element={<AntdInferencer />} />
                <Route path="edit/:id" element={<AntdInferencer />} />
                <Route path="create" element={<AntdInferencer />} />
              </Route>

              <Route path="*" element={<ErrorComponent />} />
            </Route>
          </Routes>
        </Refine>
      </ConfigProvider>
    </BrowserRouter>
  );
};
export default App;
```

Now, we can see the list page in the browser at <a href="http://localhost:3000/blog-posts" rel="noopener noreferrer nofollow">localhost:3000/blog-posts</a>

<br/>

<Checklist>

<ChecklistItem id="add-list-page-antd">
I have added the list page to the app.
</ChecklistItem>
<ChecklistItem id="add-list-page-antd-2">
I understood the list page components and hooks.
</ChecklistItem>
<ChecklistItem id="add-list-page-antd-3">
I understood the relationship handling.
</ChecklistItem>

</Checklist>
