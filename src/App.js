import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';
import { routerNoAuth } from './components/noauth/routerNoAuth';
import routersAuth from './components/auth/routersAuth';
import Login from './components/noauth/Login';
import Service from './components/auth/Service';
import Home from './components/auth/Home';
import Users from './components/auth/Users';
import Products from './components/auth/Products';
import Kitchen from './components/auth/Kitchen';
import OrderProducts from './components/auth/OrderProducts';
import StatusService from './components/auth/StatusService';
import Admin from './components/auth/Admin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/service',
    element: <Service />,
    children: [
      {
        path: '/service/orderproducts',
        element: <OrderProducts />,
      },
      {
        path: '/service/statusservice',
        element: <StatusService />,
      },
    ],
  },
  {
    path: '/kitchen',
    element: <Kitchen />,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: '/admin/users',
        element: <Users />,
      },
      {
        path: '/admin/products',
        element: <Products />,
      },
    ],
  },
]);

function App() {
  const [user, setUser] = useState(undefined);

  return <RouterProvider router={router} />;
}

/* function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <RouterProvider router={routersAuth} />
      ) : (
        <RouterProvider router={routerNoAuth} />
      )}
    </div>
  );
}
 */
export default App;
