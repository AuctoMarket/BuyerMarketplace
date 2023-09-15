import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import List from '../../List';
import Card from '../Card';
import Icon from '../../Icon';
import ButtonLink from '../../Button/Link';

import type { Product } from '../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: {
    products: Product[];
    seeMore?: boolean;
  };
}

function ProductRecentlyAdded({
  className,
  data: { products, seeMore = true },
  ...rest
}: Props) {
  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['heading']}>
        Recently Added:
        {seeMore && (
          <Link to="/products">
            See all product
            <Icon name="arrow-right" />
          </Link>
        )}
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

      <ButtonLink
        className={styles['see-all-products']}
        theme="black"
        to={'/products'}
      >
        See all products
      </ButtonLink>
    </div>
  );
}

export default ProductRecentlyAdded;
