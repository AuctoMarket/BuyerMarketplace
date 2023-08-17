import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Button from '../../../Button';
import ButtonLink from '../../../Button/Link';
import ProductPrice from '../../Price';
import NumberInput from '../../../NumberInput';

import type { Product } from '../../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: Pick<Product, 'price' | 'quantity'> & {
    buyQuantity: number;
    onChangeBuyQuantity: (quantity: number) => void;
  };
}

function ProductPurchaseBuy({
  className,
  data: { price, quantity, buyQuantity, onChangeBuyQuantity },
  ...rest
}: Props) {
  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['price-container']}>
        <label className={styles['label']}>Price:</label>
        <ProductPrice className={styles['price']} data={{ price }} />
      </div>
      <div className={styles['quantity-container']}>
        <label className={styles['label']}>Quantity:</label>
        <div>
          <NumberInput
            className={styles['quantity']}
            value={buyQuantity}
            onChangeValue={onChangeBuyQuantity}
          />
          <span className={styles['available-quantity']}>
            {quantity} pieces available
          </span>
        </div>
      </div>
      <div className={styles['btn-buy-container']}>
        <Button className={styles['button']} theme="white">
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
