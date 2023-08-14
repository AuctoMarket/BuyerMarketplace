import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Button from '../../../Button';
import ButtonLink from '../../../Button/Link';
import ProductPrice from '../../Price';

import type { Product } from '../../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: Pick<Product, 'price'>;
}

function ProductPurchaseBuy({ className, data: { price }, ...rest }: Props) {
  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['row-1']}>
        <div className={styles['col-1']}>
          <label className={styles['label']}>Price:</label>
          <ProductPrice className={styles['price']} data={{ price }} />
        </div>
      </div>
      <div className={styles['row-2']}>
        <Button className={styles['button']} theme="white">
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
