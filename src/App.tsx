import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HoldingPage from './pages/holding';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HoldingPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
