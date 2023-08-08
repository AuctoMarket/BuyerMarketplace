import React, { ComponentProps, useContext, useState } from 'react';

import styles from './index.module.scss';
import Button from '../../../Button';
import ProductPrice from '../../Price';
import { PopupContext } from '../../../Popup';
import Checkout from '../../../Checkout';

import type { Product } from '../../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: Pick<Product, 'price'>;
}

function ProductPurchaseBetaBuy({
  className,
  data: { price },
  ...rest
}: Props) {
  const { togglePopup } = useContext(PopupContext);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price * quantity);

  const handleQuantityChange = (value: number) => {
    // allow value to be from 0 to 12
    const newValue = Math.min(Math.max(value, 0), 12);
    setQuantity(newValue);
    const boxOf6s = Math.floor(newValue / 6);
    setTotalPrice(price * newValue - boxOf6s * 100);
  };
  const handleBuy = () => {
    togglePopup && togglePopup(true, <Checkout data={{ totalPrice }} />);
  };

  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['row-1']}>
        <label className={styles['label']}>Price:</label>
        <ProductPrice
          className={styles['price']}
          data={{ price: totalPrice }}
        />
      </div>
      <div className={styles['row-2']}>
        <label className={styles['label']}>Quantity:</label>
        <input
          type="number"
          className={styles['quantity']}
          value={Number(quantity).toString()}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleQuantityChange(Number(event.target.value))
          }
        />
      </div>
      <div className={styles['row-3']}>
        <Button
          className={styles['button']}
          theme="black"
          onClick={() => handleBuy()}
        >
          Buy
        </Button>
      </div>
    </div>
  );
}

export default ProductPurchaseBetaBuy;
