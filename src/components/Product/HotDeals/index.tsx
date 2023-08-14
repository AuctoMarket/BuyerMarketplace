import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import List from '../../List';
import Card from '../Card/Horizontal';
import Icon from '../../Icon';

import type { Product } from '../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: {
    products: Product[];
  };
}

function ProductHotDeals({ className, data: { products }, ...rest }: Props) {
  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['heading']}>
        Hot Deals
        <Link to={'/hot-deals'}>
          See all deals
          <Icon name="arrow-right" />
        </Link>
      </div>

      <div className={styles['list-container']}>
        <List
          className={styles['list']}
          items={products.map((product, index) => (
            <Link to={`/products/${product.id}`}>
              <Card data={{ product }} key={index} />
            </Link>
          ))}
        />
      </div>
    </div>
  );
}

export default ProductHotDeals;
