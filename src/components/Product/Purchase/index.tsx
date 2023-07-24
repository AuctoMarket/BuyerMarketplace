import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Button from '../../Button';
import ProductPrice from '../Price';

interface Props extends ComponentProps<'div'> {
  data: { currentBid: number; numBids: number; buyNowPrice: number };
}

function ProductPurchase({
  className,
  data: { currentBid, numBids, buyNowPrice },
  ...rest
}: Props) {
  return (
    <div className={`${styles['product-purchase']} ${className}`} {...rest}>
      <div>
        <div>
          <label>Current Bid:</label>
          <ProductPrice data={{ price: currentBid }} />
        </div>
        <div>
          <label>No. of Bids:</label>
          <div>{numBids}</div>
        </div>
      </div>
      <div>
        <Button theme="white">Bid</Button>
        <Button theme="color">Buy for ${buyNowPrice}</Button>
      </div>
      <div>
        <Button theme="black">Chat with seller</Button>
      </div>
    </div>
  );
}

export default ProductPurchase;
