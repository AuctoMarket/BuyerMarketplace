import React from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

import OrderPaymentStatusPage from './pages/orders/payment-status';
import ProductPage from './pages/product';
import HomePage from './pages/home';
import Popup, { PopupContext } from './components/Popup';

const createRouter = (routerObjects: RouteObject[]) => {
  if (process.env.REACT_APP_GITHUB_PAGES === 'true') {
    return createHashRouter(routerObjects);
  }

  return createBrowserRouter(routerObjects);
};

function App() {
  const [popupOpen, setPopupOpen] = React.useState<boolean>(false);
  const [popupContent, setPopupContent] = React.useState<React.ReactNode>(null);
  const togglePopup = (
    isPopupOpen: boolean,
    popupContent?: React.ReactNode,
  ) => {
    setPopupOpen(isPopupOpen);
    setPopupContent(popupContent);
  };

  return (
    <PopupContext.Provider value={{ popupOpen, popupContent, togglePopup }}>
      <Popup />

      <RouterProvider
        router={createRouter([
          {
            path: '/orders/:id/payment-status',
            element: <OrderPaymentStatusPage />,
          },
          {
            path: '/products/:id',
            element: <ProductPage />,
          },
          {
            path: '/',
            element: <HomePage />,
          },
        ])}
      />
    </PopupContext.Provider>
  );
}

export default App;
