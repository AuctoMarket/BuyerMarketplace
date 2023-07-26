import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import ProductSellerInfo from '../SellerInfo';
import ProductTitle from '../Title';
import ProductPostedDate from '../PostedDate';
import ProductPrice from '../Price';

interface Props extends ComponentProps<'div'> {
  data: {
    id: string;
    type: string;
    image: string;
    title: string;
    sellerInfo: {
      name: string;
      avatar: string;
      isVerified: boolean;
      numFollowers: number;
    };
    purchase: {
      currentBid: number;
      numBids: number;
      buyNowPrice: number;
    };
    postedDate: string;
  };
}

function ProductCard({ className, data, ...rest }: Props) {
  return (
    <div className={`${styles['product-card']} ${className}`} {...rest}>
      <div className={styles['header']}>
        <ProductSellerInfo
          className={styles['product-seller-info']}
          data={data.sellerInfo}
        />
      </div>
      <div className={styles['content']}>
        {data.type === 'pre-order' && (
          <div className={styles['pre-order']}>Pre-Order</div>
        )}
        <img
          className={styles['product-image']}
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className={styles['footer']}>
        <ProductTitle
          className={styles['product-title']}
          data={{ title: data.title }}
        />
        <ProductPostedDate
          className={styles['product-posted-date']}
          data={{ postedDate: data.postedDate }}
        />
        <ProductPrice
          className={styles['product-price']}
          data={{ price: data.purchase.currentBid }}
        />
      </div>
    </div>
  );
}

export default ProductCard;
