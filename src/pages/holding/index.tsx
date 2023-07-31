import React, { useContext } from 'react';
import styles from './index.module.scss';
import Layout from '../../components/Layout';
import Logo from '../../components/Logo';
import LoginForm from '../../components/LoginForm';
import { PopupContext } from '../../components/Popup'; // Import the PopupContext

function HoldingPage() {
  const { togglePopup } = useContext(PopupContext); // Use the PopupContext

  // Function to handle the login button click
  const handleLoginClick = () => {
    // Call the togglePopup function with isPopupOpen set to true
    // and pass in the content you want to display in the login popup
    togglePopup(true, <LoginForm />); // Assuming you have a LoginForm component for the login form
  };

  return (
    <Layout className={styles.layout} header={false}>
      <div className={styles['holding-page']}>
        <div className={styles['logo']}>
          <Logo type="horizontal" theme="full-color" />
          <Logo type="vertical" theme="full-color" />
        </div>
        <div className={styles['text']}>
          <div className={styles['text-1']}>Collectible Marketplace</div>
          <div className={styles['text-2']}>Launching in late 2023</div>
        </div>
        {/* Add the Login button */}
        <button className={styles['login-button']} onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </Layout>
  );
}

export default HoldingPage;
