import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Icon from '../../Icon';
import Card from '../Card';

import type { Seller } from '../../../types/seller.type';

interface Props extends ComponentProps<'div'> {
  data: {
    sellers: Seller[];
  };
}

function FeaturedSellers({ className, data: { sellers }, ...rest }: Props) {
  return (
    <div className={`${className} ${styles['container']}`} {...rest}>
      <div className={styles['heading']}>
        Featured Sellers
        <Link to="/sellers/featured">
          See more featured sellers
          <Icon name="arrow-right" />
        </Link>
      </div>
      <div className={styles['list-container']}>
        {sellers.map((seller, index) => (
          <Link to={`/seller/${seller.id}`} key={index}>
            <Card data={{ index: `0${index + 1}`, seller }} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FeaturedSellers;
