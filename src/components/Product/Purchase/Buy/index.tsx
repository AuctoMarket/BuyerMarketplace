import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Button from '../../../Button';
import ProductPrice from '../../Price';
import NumberInput from '../../../NumberInput';

import { ProductType, type Product } from '../../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: Pick<Product, 'price'> & {
    quantity: number;
    availableQuantity: number;
    type?: Product['type'];
  };
  onChangeQuantity: (quantity: number) => void;
  onBuy: () => void;
  onAddToCart: () => void;
}

function ProductPurchaseBuy({
  className,
  data: { price, quantity, availableQuantity, type },
  onChangeQuantity,
  onBuy,
  onAddToCart,
  ...rest
}: Props) {
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
          {/* <span className={styles['available-quantity']}>
            {availableQuantity} pieces available
          </span> */}
        </div>
      </div>

      <div className={styles['btn-buy-container']}>
        <Button
          className={styles['button']}
          theme="white"
          onClick={onBuy}
          disabled={availableQuantity <= 0}
        >
          {type === ProductType.BuyNow ? 'Buy' : 'Pre Order Now'}
        </Button>
      </div>

      <div className={styles['btn-chat-container']}>
        <Button
          className={styles['button']}
          theme="black"
          onClick={onAddToCart}
          disabled={availableQuantity <= 0}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductPurchaseBuy;
