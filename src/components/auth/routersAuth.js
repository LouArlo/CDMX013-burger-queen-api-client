import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Kitchen from './Kitchen';
import Service from './Service';
import Admin from './Admin';
import OrderProducts from './OrderProducts';
import StatusService from './StatusService';
import Users from './Users';
import Products from './Products';

const routersAuth = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/home/service',
        element: <Service />,
        children: [
          {
            path: '/home/service/orderproducts',
            element: <OrderProducts />,
          },
          {
            path: '/home/service/statusservice',
            element: <StatusService />,
          },
        ],
      },
      {
        path: '/home/kitchen',
        element: <Kitchen />,
      },
      {
        path: '/home/admin',
        element: <Admin />,
        children: [
          {
            path: '/home/admin/users',
            element: <Users />,
          },
          {
            path: '/home/admin/products',
            element: <Products />,
          },
        ],
      },
    ],
  },
]);

export default routersAuth;
