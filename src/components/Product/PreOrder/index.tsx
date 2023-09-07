import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import List from '../../List';
import Card from '../Card/PreOrder';

import type { Product } from '../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: {
    products: Product[];
  };
}

function ProductPreOrder({ className, data: { products }, ...rest }: Props) {
  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['heading']}>Pre order:</div>
      <div className={styles['list-container']}>
        <List
          className={styles['list']}
          items={products.map((product, index) => (
            <Link
              className={styles['card-link']}
              to={`/products/${product.id}`}
            >
              <Card className={styles['card']} data={{ product }} key={index} />
            </Link>
          ))}
        />
      </div>
    </div>
  );
}

export default ProductPreOrder;
