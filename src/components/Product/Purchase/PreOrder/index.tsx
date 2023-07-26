import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Button from '../../../Button';
import ProductPrice from '../../Price';

interface Props extends ComponentProps<'div'> {
  data: { price: number };
}

function ProductPurchasePreOrder({
  className,
  data: { price },
  ...rest
}: Props) {
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
          Pre Order
        </Button>
      </div>
      <div className={styles['row-3']}>
        <Button className={styles['button']} theme="black">
          Chat with seller
        </Button>
      </div>
    </div>
  );
}

export default ProductPurchasePreOrder;
