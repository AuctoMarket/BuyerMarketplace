import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import List from '../../List';
import Card from '../Card';
import Button from '../../Button';
import Icon from '../../Icon';

import type { Product } from '../../../types/product.type';
import type { Seller } from '../../../types/seller.type';

interface Props extends ComponentProps<'div'> {
  data: {
    products: Product[];
    seller: Seller;
  };
  showMoreButton?: {
    text: string;
    onClick: () => void;
  };
}

function ProductRecommended({
  className,
  data: { products, seller },
  showMoreButton,
  ...rest
}: Props) {
  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['heading']}>
        Recommended for you
        <Link to={'/recommendations'}>
          See all recommendations
          <Icon name="arrow-right" />
        </Link>
      </div>

      <div className={styles['list-container']}>
        <List
          className={styles['list']}
          items={products.map((product, index) => (
            <Link to={`/products/${product.id}`}>
              <Card data={{ product, seller }} key={index} />
            </Link>
          ))}
        />
      </div>

      {showMoreButton && (
        <div className={styles['show-more-container']}>
          <Button
            className={styles['show-more']}
            theme="black"
            onClick={showMoreButton.onClick}
          >
            {showMoreButton.text}
          </Button>
        </div>
      )}
    </div>
  );
}

export default ProductRecommended;
