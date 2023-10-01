import React, { ComponentProps } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './index.module.scss';
import Logo from '../Logo';
import List from '../List';
import Icon from '../Icon';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import responsive from '../../utils/responsive';

interface Props extends ComponentProps<'div'> {}

function Header({ className, ...rest }: Props) {
  const location = useLocation();
  const { user } = useAuth();
  const { cartItems } = useCart();

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
            <Link className={styles['browse']} to="/products">
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
            <Link className={styles['shopping-card']} to={'/cart'}>
              <Icon className={styles['icon-card']} name="shopping-cart" />
              {cartItems.length > 0 && (
                <div className={styles['item-number']}>
                  <span>{cartItems.length}</span>
                </div>
              )}
            </Link>,
          ]}
        />
      </div>
    </div>
  );
}

export default Header;
