import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Login from './components/noauth/Login';
import Home from './components/auth/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

function App() {
  const [user, setUser] = useState(undefined);

  return <RouterProvider router={router} />;
}

export default App;
