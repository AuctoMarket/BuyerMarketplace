import React, { ComponentProps, useContext } from 'react';

import styles from './index.module.scss';
import Button from '../../../Button';
import ButtonLink from '../../../Button/Link';
import ProductPrice from '../../Price';
import NumberInput from '../../../NumberInput';

import type { Product } from '../../../../types/product.type';

import { PopupContext } from '../../../Popup';
import LoginForm from '../../../LoginForm';
import { useAuth } from '../../../../hooks/useAuth';

interface Props extends ComponentProps<'div'> {
  data: Pick<Product, 'price'> & {
    buyQuantity: number;
    onChangeBuyQuantity: (quantity: number) => void;
    availableQuantity: number;
  };
}

function ProductPurchaseBuy({
  className,
  data: { price, buyQuantity, onChangeBuyQuantity, availableQuantity },
  ...rest
}: Props) {
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

    // Close the login popup after successful login
    if (togglePopup) {
      togglePopup(false);
    }
  };

  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['price-container']}>
        <label className={styles['label']}>Price:</label>
        <ProductPrice
          className={styles['price']}
          data={{ price: price * buyQuantity }}
        />
      </div>
      <div className={styles['quantity-container']}>
        <label className={styles['label']}>Quantity:</label>
        <div>
          <NumberInput
            className={styles['quantity']}
            value={buyQuantity}
            onChangeValue={onChangeBuyQuantity}
            min={1}
            max={availableQuantity}
          />
          <span className={styles['available-quantity']}>
            {availableQuantity} pieces available
          </span>
        </div>
      </div>
      <div className={styles['btn-buy-container']}>
        <Button
          className={styles['button']}
          theme="white"
          onClick={openLoginForm}
        >
          Buy
        </Button>
      </div>
      <div className={styles['btn-chat-container']}>
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
