import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Button from '../../../Button';
import ProductPrice from '../../Price';

interface Props extends ComponentProps<'div'> {
  data: { currentBid: number; numBids: number };
}

function ProductPurchaseBid({
  className,
  data: { currentBid, numBids },
  ...rest
}: Props) {
  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['row-1']}>
        <div className={styles['col-1']}>
          <label className={styles['label']}>Current Bid:</label>
          <ProductPrice
            className={styles['price']}
            data={{ price: currentBid }}
          />
        </div>
        <div className={styles['col-2']}>
          <label className={styles['label']}>No. of Bids:</label>
          <div className={styles['price']}>{numBids}</div>
        </div>
      </div>
      <div className={styles['row-2']}>
        <Button className={styles['button']} theme="white">
          Bid
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

export default ProductPurchaseBid;
