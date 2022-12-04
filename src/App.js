import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Login from './components/noauth/Login';
import Dashboard from './components/auth/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

function App() {
  const [user, setUser] = useState(undefined);

  return <RouterProvider router={router} />;
}

export default App;
