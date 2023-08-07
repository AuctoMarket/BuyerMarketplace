import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PreLaunchSalePage from './pages/pre-launch-sale';
import HoldingPage from './pages/holding';
import Popup, { PopupContext } from './components/Popup';

const router = createBrowserRouter([
  {
    path: '/pre-launch-sale',
    element: <PreLaunchSalePage />,
  },
  {
    path: '/',
    element: <HoldingPage />,
  },
]);

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

      <RouterProvider router={router} />
    </PopupContext.Provider>
  );
}

export default App;
