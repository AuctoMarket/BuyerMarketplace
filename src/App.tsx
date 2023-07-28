import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProductPage from './pages/product';
import HoldingPage from './pages/holding';
import Popup, { PopupContext } from './components/Popup';

const router = createBrowserRouter([
  {
    path: '/products/:id',
    element: <ProductPage />,
  },
  {
    path: '/',
    element: <HoldingPage />,
  },
]);

function App() {
  const [popupContent, setPopupContent] = React.useState<React.ReactNode>(null);
  const [popupOpen, setPopupOpen] = React.useState<boolean>(false);
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

      <RouterProvider router={router} />
    </PopupContext.Provider>
  );
}

export default App;
