/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Login from './Login';

export const routerNoAuth = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
]);
