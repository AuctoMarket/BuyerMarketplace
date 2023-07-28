// src/components/Popup/index.tsx
import React, { createContext } from 'react';
import styles from './index.module.scss';

interface PopupContextProps {
  popupOpen?: boolean;
  popupContent?: React.ReactNode;
  togglePopup: (isPopupOpen: boolean, popupContent?: React.ReactNode) => void;
}

const PopupContext = createContext<PopupContextProps>({
  popupOpen: false,
  popupContent: null,
  togglePopup: () => {},
});

function Popup() {
  const { popupOpen, togglePopup, popupContent } =
    React.useContext(PopupContext);

  if (!popupOpen) {
    return null;
  }

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        {popupContent}
        <button className={styles.closeBtn} onClick={() => togglePopup(false)}>
          &times;
        </button>
      </div>
    </div>
  );
}

export { PopupContext };
export default Popup;
