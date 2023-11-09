### what new things did i learn during this project

- a different way to use react-router-dom, i've always used it in a component structured way, for example:

  ```tsx
  // what i call "component structured way"

  <BrowserRouter>
    <Routes>
      <Route ... />
      <Route ... />
      <Route ... />
    </Routes>
  </BrowserRouter>

  // the way that i learned during this project
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/users',
      element: <Users />,
    },
    {
      path: '/products',
      element: <Products />,
    },
  ]);

  return <RouterProvider router={router} />;

  ```

###
