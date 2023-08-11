import React from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

import ProductPage from './pages/product';
import HoldingPage from './pages/holding';
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
            path: '/products/:id',
            element: <ProductPage />,
          },
          {
            path: '/',
            element: <HoldingPage />,
          },
        ])}
      />
    </PopupContext.Provider>
  );
}

export default App;
