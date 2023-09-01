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

  return (
    <div className={`${styles['header']} ${className}`} {...rest}>
      <Link className={styles['logo']} to="/">
        <Logo type="horizontal" theme="inverted-color" />
      </Link>
    </div>
  );
}

export default Header;
