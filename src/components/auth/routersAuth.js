import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Cocina from './Cocina';

export const routersauth = createBrowserRouter([
    {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/Cocina',
        element: <Cocina />,
      },
    ],
  },
]);
