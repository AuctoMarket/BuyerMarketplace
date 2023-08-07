import React, { createContext } from 'react';

import styles from './index.module.scss';

interface PopupContextProps {
  popupOpen?: boolean;
  popupContent?: React.ReactNode;
  togglePopup?: (popupOpen: boolean, popupContent?: React.ReactNode) => void;
}

const PopupContext = createContext<PopupContextProps>({});

function Popup() {
  const { popupOpen, togglePopup, popupContent } =
    React.useContext(PopupContext);

  if (!popupOpen) {
    return null;
  }

  const handleClick = () => {
    if (togglePopup) {
      togglePopup(false);
    }
  };

  return (
    <div role="dialog" className="popupContainer">
      <div className={styles.popupContent}>
        {popupContent}
        <button className={styles.closeBtn} onClick={handleClick}>
          &times;
        </button>
      </div>
    </div>
  );
}

export { PopupContext };
export default Popup;
