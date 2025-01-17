import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Kitchen from './Kitchen';
import Service from './Service';
import Admin from './Admin';
import StatusService from './StatusService';
import Users from './Users';
import Products from './Products';
import Desayunos from './Desayunos';
import Almuerzos from './Almuerzos';
import Orders from './Orders';

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
            path: '/home/service/desayunos',
            element: <Desayunos />,
          },
          {
            path: '/home/service/almuerzos',
            element: <Almuerzos />,
          },
          {
            path: '/home/service/statusservice',
            element: <StatusService />,
          },
          {
            path: '/home/service/orders',
            element: <Orders />,
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
