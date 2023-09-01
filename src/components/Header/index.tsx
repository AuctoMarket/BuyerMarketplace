import React, { ComponentProps, useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Logo from '../Logo';
import List from '../List';
import Icon from '../Icon';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';
import useAuth from '../../hooks/useAuth';
import { PopupContext } from '../../components/Popup';

interface Props extends ComponentProps<'div'> {}

function Header({ className, ...rest }: Props) {
  const { togglePopup } = useContext(PopupContext);
  const { user, login, signup } = useAuth();

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

      <List
        className={styles['navbar-right']}
        items={[
          ...(!user
            ? [
                <Link className={styles['browse']} to="/">
                  Browse
                </Link>,
                <Link className={styles['about-us']} to="#">
                  About Us
                </Link>,
                <Link
                  className={styles['contact-us']}
                  to="https://t.me/auctomarketplace"
                  target="_blank"
                >
                  Contact Us
                </Link>,
                <Link className={styles['sign-in']} to="/auth/login">
                  Sign In
                </Link>,
              ]
            : [
                <Link className={styles['browse']} to="/">
                  Browse
                </Link>,
                <Link className={styles['about-us']} to="#" target="_blank">
                  About Us
                </Link>,
                <Link
                  className={styles['contact-us']}
                  to="https://t.me/auctomarketplace"
                  target="_blank"
                >
                  Contact Us
                </Link>,
                <Link to="#" target="_blank">
                  <Icon className={styles['icon-user']} name="user" />
                </Link>,
              ]),
        ]}
      />
    </div>
  );
}

export default Header;
