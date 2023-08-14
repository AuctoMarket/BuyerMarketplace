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
    // numFollowers,
  },
  ...rest
}: Props) {
  return (
    <div className={`${styles['product-seller-info']} ${className}`} {...rest}>
      <div className={styles['avatar']}>
        <img src={avatar} alt="avatar" />
      </div>

      <div className={styles['details']}>
        <div className={styles['name']}>{name}</div>

        {isVerified && (
          <div className={styles['verified']}>
            Aucto Verified <Verified />
          </div>
        )}

        {/* {numFollowers && (
          <div className={styles['followers']}>{numFollowers} Followers</div>
        )} */}
      </div>
    </div>
  );
}

export default ProductSellerInfo;
