import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import List from '../../List';
import Card from '../Card';

interface Props extends ComponentProps<'div'> {
  data: {
    products: {
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
    }[];
    sellerInfo: {
      id: string;
      name: string;
      avatar: string;
      isVerified: boolean;
      numFollowers: number;
    };
  };
}

export function ProductMoreFromSeller({ className, data, ...rest }: Props) {
  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['heading']}>
        More from <strong>{data.sellerInfo.name}</strong>
      </div>
      <div className={styles['list-container']}>
        <List
          className={styles['list']}
          items={data.products.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        />
      </div>
    </div>
  );
}

export default ProductMoreFromSeller;
