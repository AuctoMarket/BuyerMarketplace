import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import './index.scss';
import App from './App';
import HoldingPage from './pages/holding';
import reportWebVitals from './reportWebVitals';

const router = createHashRouter([
  {
    path: '/product',
    element: <App />,
  },
  {
    path: '/',
    element: <HoldingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
