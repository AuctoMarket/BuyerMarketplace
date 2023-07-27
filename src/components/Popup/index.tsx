// src/components/Popup/index.tsx
import React from 'react';
import styles from './index.module.scss';

interface PopupProps {
  onClose: () => void;
  content: JSX.Element; // Accept a JSX element as content
}

const Popup: React.FC<PopupProps> = ({ onClose, content }) => {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        {content}
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Popup;
