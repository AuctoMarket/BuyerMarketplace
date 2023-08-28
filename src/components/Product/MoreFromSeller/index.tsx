import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import List from '../../List';
import Card from '../Card';

import type { Product } from '../../../types/product.type';
import type { Seller } from '../../../types/seller.type';

interface Props extends ComponentProps<'div'> {
  data: {
    products: Product[];
    seller: Seller;
  };
}

function ProductMoreFromSeller({
  className,
  data: { products, seller },
  ...rest
}: Props) {
  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['heading']}>
        More from <strong>{seller.name}</strong>
      </div>
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

export default ProductMoreFromSeller;
