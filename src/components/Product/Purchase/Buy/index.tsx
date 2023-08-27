import React, { ComponentProps, useContext } from 'react';

import styles from './index.module.scss';
import Button from '../../../Button';
import ButtonLink from '../../../Button/Link';
import ProductPrice from '../../Price';
import NumberInput from '../../../NumberInput';
import LoginForm from '../../../LoginForm';
import useAuth from '../../../../hooks/useAuth';
import { PopupContext } from '../../../Popup';

import type { Product } from '../../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: Pick<Product, 'price'> & {
    quantity: number;
    availableQuantity: number;
  };
  onChangeQuantity: (quantity: number) => void;
  onBuy: () => void;
}

function ProductPurchaseBuy({
  className,
  data: { price, quantity, availableQuantity },
  onChangeQuantity,
  onBuy,
  ...rest
}: Props) {
  const { togglePopup } = useContext(PopupContext);
  const { user, login, guest, setGuest, signup } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    await login(email, password);
    togglePopup?.(false);
    onBuy();
  };

  const handleContinueAsGuest = () => {
    setGuest(true);
    togglePopup?.(false);
    onBuy();
  };

  const handleSignup = async (email: string, password: string) => {
    await signup(email, password);
    togglePopup?.(false);
    onBuy();
  };

  const handleBuy = () => {
    if (!user && !guest) {
      togglePopup?.(
        true,
        <LoginForm
          onLogin={handleLogin}
          onContinueAsGuest={handleContinueAsGuest}
          onSignup={handleSignup}
        />,
      );
    } else {
      onBuy();
    }
  };

  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['price-container']}>
        <label className={styles['label']}>Price:</label>
        <ProductPrice
          className={styles['price']}
          data={{ price: price * quantity }}
        />
      </div>
      <div className={styles['quantity-container']}>
        <label className={styles['label']}>Quantity:</label>
        <div>
          <NumberInput
            className={styles['quantity']}
            value={quantity}
            onChangeValue={onChangeQuantity}
            min={1}
            max={availableQuantity}
          />
          <span className={styles['available-quantity']}>
            {availableQuantity} pieces available
          </span>
        </div>
      </div>
      <div className={styles['btn-buy-container']}>
        <Button className={styles['button']} theme="white" onClick={handleBuy}>
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
