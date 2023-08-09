import React, { ComponentProps } from 'react';
import styles from './index.module.scss';
import Verified from '../../Verified';
import Icon from '../../Icon';
import type { Seller } from '../../../types/seller.type';

interface Props extends ComponentProps<'div'> {
  data: {
    seller: Seller;
  };
}

export function Card({ className, data: { seller }, ...rest }: Props) {
  return (
    <div className={`${styles['seller-card']}`} {...rest}>
      <div className={`${styles['seller-avatar']}`}>
        <img src={seller.avatar} alt="avatar" />
      </div>
      <div className={`${styles['seller-name']}`}>
        <p>{seller.name}</p> {seller.isVerified && <Verified />}
      </div>
      <div className={`${styles['seller-follow']}`}>
        <p>{seller.numFollowers} followers</p>
      </div>
      <div className={`${styles['seller-more']}`}>
        <Icon name="more" />
      </div>
      <div className={`${styles['seller-bookmark']}`}>
        <Icon name="bookmark1" />
      </div>
      <div className={`${styles['seller-number']}`}>
        <p>{seller.numFollowers}</p>
      </div>
    </div>
  );
}

export default Card;
