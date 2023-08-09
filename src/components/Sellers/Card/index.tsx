import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Image from '../../Image';
import Icon from '../../Icon';
import Verified from '../../Verified';

import type { Seller } from '../../../types/seller.type';

interface Props extends ComponentProps<'div'> {
  data: {
    index: string;
    seller: Seller;
  };
}

export function Card({ className, data: { index, seller }, ...rest }: Props) {
  return (
    <div className={styles['seller-card']} {...rest}>
      {seller.avatar && (
        <div className={styles['seller-avatar']}>
          <Image src={seller.avatar} alt="avatar" />
        </div>
      )}
      <div className={styles['seller-name']}>
        {seller.name} {seller.isVerified && <Verified />}
      </div>
      <div className={styles['seller-follow']}>
        {seller.numFollowers} followers
      </div>
      <div className={styles['seller-more']}>
        <Icon name="more" />
      </div>
      <div className={styles['seller-bookmark']}>
        <Icon name="bookmark" />
        <div className={styles['seller-index']}>{index}</div>
      </div>
    </div>
  );
}

export default Card;
