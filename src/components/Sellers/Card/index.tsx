import React, { ComponentProps } from 'react';
import styles from './index.module.scss';
import Image from '../../Image';
import Verified from '../../Verified';

interface Props extends ComponentProps<'div'> {
  data: {
    seller: {
      name: string;
      avatar: string;
      follow: string;
      numberbookmark: number;
    };
  };
}

export function Card({ className, data: { seller }, ...rest }: Props) {
  return (
    <div className={`${styles['seller-card']}`} {...rest}>
      <div className={`${styles['seller-avatar']}`}>
        <Image src={seller.avatar} alt={seller.name} />
      </div>
      <div className={`${styles['seller-name']}`}>
        <p>{seller.name}</p> <Verified />
      </div>
      <div className={`${styles['seller-follow']}`}>
        <p>{seller.follow} followers</p>
      </div>
      <div className={`${styles['seller-more']}`}>
        <Image src="images/seller/more.png" alt="more" />
      </div>
      <div className={`${styles['seller-bookmark']}`}>
        <Image src="images/seller/bookmark1.png" alt="bookmark1" />
      </div>
      <div className={`${styles['seller-number']}`}>
        <p>{seller.follow}</p>
      </div>
    </div>
  );
}

export default Card;
