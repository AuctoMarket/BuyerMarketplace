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
import EmailVerificationPage from './pages/auth/email-verification';
import ProductsPage from './pages/products';
import ProductDetailsPage from './pages/products/details';
import CheckoutPage from './pages/checkout';
import OrderPaymentStatusPage from './pages/orders/payment-status';
import AboutUsPage from './pages/about-us';
import CartPage from './pages/cart';
import Popup, { PopupContext } from './components/Popup';
import {
  getCartItemsFromLocalStorage,
  setCartItemsToLocalStorage,
  CartContext,
} from './hooks/useCart';

import type { CartItem } from './types/cart.type';

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
  const [cartItems, setCartItems] = useState<CartItem[]>(
    getCartItemsFromLocalStorage(),
  );

  useEffect(() => {
    setCartItemsToLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <PopupContext.Provider value={{ popupOpen, popupContent, togglePopup }}>
      <Popup />

      <CartContext.Provider value={{ cartItems, setCartItems }}>
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
              path: '/auth/email-verification',
              element: (
                <ScrollToTop>
                  <EmailVerificationPage />
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
              path: '/products',
              element: (
                <ScrollToTop>
                  <ProductsPage />
                </ScrollToTop>
              ),
            },
            {
              path: '/products/:id',
              element: (
                <ScrollToTop>
                  <ProductDetailsPage />
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
              path: '/cart',
              element: (
                <ScrollToTop>
                  <CartPage />
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
              path: '/about-us',
              element: (
                <ScrollToTop>
                  <AboutUsPage />
                </ScrollToTop>
              ),
            },
          ])}
        />
      </CartContext.Provider>
    </PopupContext.Provider>
  );
};

export default App;
