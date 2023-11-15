import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { Users } from './pages/users';
import { Products } from './pages/products';
import { Layout } from './components/layout';
import { Login } from './pages/login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
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
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
