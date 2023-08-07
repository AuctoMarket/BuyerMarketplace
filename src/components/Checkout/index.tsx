import React from 'react';

import styles from './index.module.scss';
import ProductPrice from '../Product/Price';
import Image from '../Image';

interface Props extends React.ComponentProps<'div'> {
  data: {
    totalPrice: number;
  };
}

function Checkout({ className, data: { totalPrice }, ...rest }: Props) {
  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['heading']}>Checkout</div>

      <div className={styles['price']}>
        <label className={styles['label']}>Total Order Price:</label>
        <ProductPrice
          className={styles['product-price']}
          data={{ price: totalPrice }}
        />
      </div>

      <Image
        className={styles['qr-code']}
        src="/images/beta/qr-code.png"
        alt="QR Code"
      />

      <div className={styles['description']}>
        Thank you for your interest! Please make a payment via PayNow and send a
        screenshot of the payment confirmation screen to{' '}
        <a href="https://t.me/auctomarketplace" target="blank">
          @auctomarketplace
        </a>{' '}
        on telegram to complete your purchase. We will confirm your order and
        discuss delivery/collection on telegram.
      </div>
    </div>
  );
}

export default Checkout;
