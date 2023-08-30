import React, { useEffect, useState, ReactNode } from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  RouteObject,
  RouterProvider,
  useLocation,
} from 'react-router-dom';

import HomePage from './pages/home';
import LoginPage from './pages/auth/login';
import SignupPage from './pages/auth/signup';
import ProductPage from './pages/product';
import CheckoutPage from './pages/checkout';
import OrderPaymentStatusPage from './pages/orders/payment-status';
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
            path: '/',
            element: (
              <ScrollToTop>
                <HomePage />
              </ScrollToTop>
            ),
          },
          {
            path: '/auth/login',
            element: (
              <ScrollToTop>
                <LoginPage />
              </ScrollToTop>
            ),
          },
          {
            path: '/auth/signup',
            element: (
              <ScrollToTop>
                <SignupPage />
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
        ])}
      />
    </PopupContext.Provider>
  );
};

export default App;
