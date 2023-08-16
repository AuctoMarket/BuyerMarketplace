import React, { ComponentProps, useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Logo from '../Logo';
import List from '../List';
import Icon from '../Icon';
import Dropdown from '../Dropdown';
import { PopupContext } from '../../components/Popup';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';
import { useAuth } from '../../hooks/useAuth';

interface Props extends ComponentProps<'div'> {}

function Header({ className, ...rest }: Props) {
  const { togglePopup } = useContext(PopupContext);
  const { user, login, signup } = useAuth();

  const openLoginForm = () => {
    if (togglePopup) {
      togglePopup(true, <LoginForm onLogin={handleLogin} />);
    }
  };
  const openSignupForm = () => {
    if (togglePopup) {
      togglePopup(true, <SignupForm onSignup={handleSignup} />);
    }
  };
  const handleLogin = (email: string, password: string) => {
    // Handle user session or UI updates here
    login(email, password);
    console.log('User logged in:', email);

    // Close the login popup after successful login
    if (togglePopup) {
      togglePopup(false);
    }
  };
  const handleSignup = async (email: string, password: string) => {
    const responseStatus = await signup(email, password);
    console.log(responseStatus);

    // Close the signup popup after successful signup
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
      <List className={styles['navbar-right']} items={[]}>
        {!user ? (
          <>
            <button
              className={`${styles['button']} ${styles['login']}`}
              onClick={openLoginForm}
            >
              Login
            </button>
            <button
              className={`${styles['button']} ${styles['signup']}`}
              onClick={openSignupForm}
            >
              Signup
            </button>
          </>
        ) : (
          <Dropdown
            className={styles['dropdown']}
            items={[
              <Link to="/">Marketplace</Link>,
              <Link to="https://t.me/auctomarketplace" target="_blank">
                Contact Us
              </Link>,
              <Link to="/profile">Profile</Link>,
            ]}
          >
            <Icon name="menu" />
          </Dropdown>
        )}
      </List>

      {!user && (
        <List
          className={styles['navbar-right-mobile']}
          items={[
            <button
              className={`${styles['button']} ${styles['login']}`}
              onClick={openLoginForm}
            >
              Login
            </button>,
            <button
              className={`${styles['button']} ${styles['signup']}`}
              onClick={openSignupForm}
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
