import React, { ComponentProps, useContext } from 'react';

import styles from './index.module.scss';
import Button from '../../../Button';
import ButtonLink from '../../../Button/Link';
import ProductPrice from '../../Price';

import type { Product } from '../../../../types/product.type';

import { PopupContext } from '../../../Popup';
import LoginForm from '../../../LoginForm';
import { useAuth } from '../../../../hooks/useAuth';

interface Props extends ComponentProps<'div'> {
  data: Pick<Product, 'price'>;
}

function ProductPurchaseBuy({ className, data: { price }, ...rest }: Props) {
  const { togglePopup } = useContext(PopupContext);
  const { user, login, guest, setGuest } = useAuth();

  const handleContinueAsGuest = () => {
    setGuest(true);
    if (togglePopup) {
      togglePopup(false);
    }
  };

  const openLoginForm = () => {
    if (!user && !guest && togglePopup) {
      togglePopup(
        true,
        <LoginForm
          onLogin={handleLogin}
          onContinueAsGuest={handleContinueAsGuest}
        />,
      );
    } else if (!user && !guest && togglePopup) {
      // If neither user nor guest is logged in, open the login form
      togglePopup(
        true,
        <LoginForm
          onLogin={handleLogin}
          onContinueAsGuest={handleContinueAsGuest}
        />,
      );
    } else {
      // Handle the action when the user is logged in and clicks the Buy button
      // For example, navigate to the checkout page
      console.log('User is logged in. Perform Buy action.');
    }
  };

  const handleLogin = async (email: string, password: string) => {
    await login(email, password);

    // Handle user session or UI updates here
    console.log('User logged in:', email);

    // Close the login popup after successful login
    if (togglePopup) {
      togglePopup(false);
    }
  };

  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['row-1']}>
        <div className={styles['col-1']}>
          <label className={styles['label']}>Price:</label>
          <ProductPrice className={styles['price']} data={{ price }} />
        </div>
      </div>
      <div className={styles['row-2']}>
        <Button
          className={styles['button']}
          theme="white"
          onClick={openLoginForm}
        >
          Buy
        </Button>
      </div>
      <div className={styles['row-3']}>
        <ButtonLink
          className={styles['button']}
          theme="black"
          to={`https://t.me/auctomarketplace`}
          target="_blank"
        >
          Chat with us
        </ButtonLink>
      </div>
    </div>
  );
}

export default ProductPurchaseBuy;
