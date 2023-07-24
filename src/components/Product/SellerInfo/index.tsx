import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Verified from '../../Verified';

interface Props extends ComponentProps<'div'> {
  data: {
    avatar: string;
    name: string;
    isVerified: boolean;
    numReviews: number;
  };
}

function ProductSellerInfo({
  className,
  data: { avatar, name, isVerified, numReviews },
  ...rest
}: Props) {
  return (
    <div className={`${styles['product-seller-info']} ${className}`} {...rest}>
      <div className={styles['avatar']}>
        <img src={avatar} alt="avatar" />
      </div>

      <div className={styles['details']}>
        <div className={styles['name']}>
          <div>{name}</div>
          {isVerified && <Verified />}
        </div>

        <div className={styles['reviews']}>{numReviews} Reviews</div>
      </div>
    </div>
  );
}

export default ProductSellerInfo;
