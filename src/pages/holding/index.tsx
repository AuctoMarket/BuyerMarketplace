import React, { useState } from 'react';
import styles from './index.module.scss';
import Layout from '../../components/Layout';
import Logo from '../../components/Logo';
import Popup from '../../components/Popup'; // Import the Popup component
import LoginForm from '../../components/LoginForm';

function HoldingPage() {
  // State to manage the visibility of the popup
  const [showPopup, setShowPopup] = useState(false);

  // Function to toggle the visibility of the popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Function to handle the login action
  const handleLogin = (email: string, password: string) => {
    // Perform login logic here
    // For now, just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);
    setShowPopup(false); // Close the popup after successful login
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
        <button className={styles['login-btn']} onClick={togglePopup}>
          Login
        </button>
      </div>
      {showPopup && (
        <Popup
          onClose={togglePopup}
          content={<LoginForm onLogin={handleLogin} />}
        />
      )}
      {/* Render the Popup component with the LoginForm as its content when showPopup is true */}
    </Layout>
  );
}

export default HoldingPage;
