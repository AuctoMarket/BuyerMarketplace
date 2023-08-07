import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Verified from '../../Verified';

import type { Seller } from '../../../types/seller.type';

interface Props extends ComponentProps<'div'> {
  data: Seller;
}

function ProductSellerInfo({
  className,
  data: {
    avatar = '/images/no-photo.png',
    name = 'No name',
    isVerified,
    numFollowers = 0,
  },
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

        <div className={styles['followers']}>{numFollowers} Followers</div>
      </div>
    </div>
  );
}

export default ProductSellerInfo;
