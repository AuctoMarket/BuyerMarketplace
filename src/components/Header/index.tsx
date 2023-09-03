import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Logo from '../Logo';
import List from '../List';
import Icon from '../Icon';
import useAuth from '../../hooks/useAuth';

interface Props extends ComponentProps<'div'> {}

function Header({ className, ...rest }: Props) {
  const { user } = useAuth();

  return (
    <div className={`${styles['header']} ${className}`} {...rest}>
      <Link className={styles['logo']} to="/">
        <Logo type="horizontal" theme="inverted-color" />
      </Link>

      <List
        className={styles['navbar-right']}
        items={[
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
          ...[
            !user ? (
              <Link className={styles['sign-in']} to="/auth/login">
                Sign In
              </Link>
            ) : (
              <Link to="#">
                <Icon className={styles['icon-user']} name="user" />
              </Link>
            ),
          ],
        ]}
      />
    </div>
  );
}

export default Header;
