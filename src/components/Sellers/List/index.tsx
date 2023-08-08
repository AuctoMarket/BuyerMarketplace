import React, { ComponentProps } from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import Icon from '../../Icon';
import Seller from '../Card';

interface Props extends ComponentProps<'div'> {}

export function Sellers({ className, ...rest }: Props) {
  const sellers = [
    {
      name: 'Seller Name 1',
      avatar: '/images/product/product-1-image-1.png',
      follow: '74',
      numberbookmark: 12,
    },
    {
      name: 'Seller Name 1',
      avatar: '/images/product/product-1-image-1.png',
      follow: '74',
      numberbookmark: 12,
    },
    {
      name: 'Seller Name 1',
      avatar: '/images/product/product-1-image-1.png',
      follow: '74',
      numberbookmark: 12,
    },
    {
      name: 'Seller Name 1',
      avatar: '/images/product/product-1-image-1.png',
      follow: '74',
      numberbookmark: 12,
    },
    {
      name: 'Seller Name 1',
      avatar: '/images/product/product-1-image-1.png',
      follow: '74',
      numberbookmark: 12,
    },
  ];

  return (
    <div className={`${styles['container']}`} {...rest}>
      <div className={styles['heading']}>
        Featured Sellers
        <Link to={`/sellers/123/products`}>
          See more feature sellers
          <Icon name="arrow-right" />
        </Link>
      </div>
      <div className={`${styles['list-container']}`}>
        {sellers.map((seller, index) => (
          <Link to={`/seller/`} key={index}>
            <Seller data={{ seller }} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sellers;
