import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { Users } from './pages/users';
import { Products } from './pages/products';

function App() {
  const Layout = () => {};

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
}

export default App;
