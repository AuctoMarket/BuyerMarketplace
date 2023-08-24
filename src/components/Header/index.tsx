import React, { ComponentProps, useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Logo from '../Logo';
import List from '../List';
import Icon from '../Icon';
import Dropdown from '../Dropdown';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';
import useAuth from '../../hooks/useAuth';
import { PopupContext } from '../../components/Popup';

interface Props extends ComponentProps<'div'> {}

function Header({ className, ...rest }: Props) {
  const { togglePopup } = useContext(PopupContext);
  const { user, login, signup, guest, setGuest } = useAuth();

  const openLoginForm = () => {
    if (togglePopup) {
      togglePopup(
        true,
        <LoginForm
          onLogin={handleLogin}
          onContinueAsGuest={handleContinueAsGuest}
        />,
      );
    }
  };

  const openSignupForm = () => {
    if (togglePopup) {
      togglePopup(true, <SignupForm onSignup={handleSignup} />);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    await login(email, password);

    // Close the login popup after successful login
    if (togglePopup) {
      togglePopup(false);
    }
  };

  const handleSignup = async (email: string, password: string) => {
    await signup(email, password);

    // Close the signup popup after successful signup
    if (togglePopup) {
      togglePopup(false);
    }
  };

  const handleContinueAsGuest = () => {
    setGuest(true);
    if (togglePopup) {
      togglePopup(false);
    }
  };

  return (
    <div className={`${styles['header']} ${className}`} {...rest}>
      <List
        className={styles['navbar-left-mobile']}
        items={[
          <Dropdown
            className={styles['dropdown']}
            items={[
              <Link to="/">Marketplace</Link>,
              <Link to="https://t.me/auctomarketplace" target="_blank">
                Contact Us
              </Link>,
            ]}
          >
            <Icon name="menu" />
          </Dropdown>,
        ]}
      />

      <Link className={styles['logo']} to="/">
        <Logo type="horizontal" theme="inverted-color" />
      </Link>

      <List
        className={styles['navbar-right']}
        items={[
          ...(!user && !guest
            ? [
                <button
                  className={`${styles['button']} ${styles['login']}`}
                  onClick={openLoginForm}
                  key="login"
                  data-testid="login-desktop-button"
                >
                  Login
                </button>,
                <button
                  className={`${styles['button']} ${styles['signup']}`}
                  onClick={openSignupForm}
                  key="signup"
                  data-testid="signup-desktop-button"
                >
                  Signup
                </button>,
              ]
            : []),
          <Dropdown
            className={styles['dropdown']}
            items={[
              <Link to="/" key="marketplace">
                Marketplace
              </Link>,
              <Link
                to="https://t.me/auctomarketplace"
                target="_blank"
                key="contact"
              >
                Contact Us
              </Link>,
            ]}
            key="dropdown"
          >
            <Icon name="menu" />
          </Dropdown>,
        ]}
      />

      {!user && !guest && (
        <List
          className={styles['navbar-right-mobile']}
          items={[
            <button
              className={`${styles['mobile-button']} ${styles['login']}`}
              onClick={openLoginForm}
              data-testid="login-mobile-button"
            >
              Login
            </button>,
            <button
              className={`${styles['mobile-button']} ${styles['signup']}`}
              onClick={openSignupForm}
              data-testid="signup-mobile-button"
            >
              Signup
            </button>,
          ]}
        />
      )}
    </div>
  );
}

export default Header;
