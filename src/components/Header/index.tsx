import React, { ComponentProps } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './index.module.scss';
import Logo from '../Logo';
import List from '../List';
import Icon from '../Icon';
import useAuth from '../../hooks/useAuth';
import responsive from '../../utils/responsive';

interface Props extends ComponentProps<'div'> {}

function Header({ className, ...rest }: Props) {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <div className={`${styles['header']} ${className}`} {...rest}>
      <div className={styles['header-content']}>
        <Link className={styles['logo']} to="/">
          <Logo
            type={!responsive.isSm() ? 'horizontal' : undefined}
            theme={!responsive.isSm() ? 'inverted-color' : 'color'}
          />
        </Link>

        <List
          className={styles['navbar-right']}
          items={[
            <Link className={styles['browse']} to="/">
              Browse
            </Link>,
            <Link className={styles['about-us']} to="/about-us">
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
                <Link
                  className={styles['sign-in']}
                  to={`/auth/login?redirectUrl=${encodeURIComponent(
                    `${location.pathname}${location.search}`,
                  )}`}
                >
                  Sign In
                </Link>
              ) : (
                <Icon className={styles['icon-user']} name="user" />
              ),
            ],
          ]}
        />
      </div>
    </div>
  );
}

export default Header;
