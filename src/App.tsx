import React, { useEffect, useState, ReactNode } from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  RouteObject,
  RouterProvider,
  useLocation,
} from 'react-router-dom';

import CheckoutPage from './pages/checkout';
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

const ScrollToTop = ({ children }: any) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

const App = () => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [popupContent, setPopupContent] = useState<ReactNode>(null);
  const togglePopup = (isPopupOpen: boolean, popupContent?: ReactNode) => {
    setPopupOpen(isPopupOpen);
    setPopupContent(popupContent);
  };

  return (
    <PopupContext.Provider value={{ popupOpen, popupContent, togglePopup }}>
      <Popup />

      <RouterProvider
        router={createRouter([
          {
            path: '/checkout',
            element: (
              <ScrollToTop>
                <CheckoutPage />
              </ScrollToTop>
            ),
          },
          {
            path: '/orders/:id/payment-complete',
            element: (
              <ScrollToTop>
                <OrderPaymentStatusPage />
              </ScrollToTop>
            ),
          },
          {
            path: '/products/:id',
            element: (
              <ScrollToTop>
                <ProductPage />
              </ScrollToTop>
            ),
          },
          {
            path: '/',
            element: (
              <ScrollToTop>
                <HomePage />
              </ScrollToTop>
            ),
          },
        ])}
      />
    </PopupContext.Provider>
  );
};

export default App;
