import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import List from '../../List';
import Card from '../Card';
import Button from '../../Button';

import type { Product } from '../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: {
    products: Product[];
  };
  onShowMore: () => void;
  showMoreText?: string;
}

export function ProductRecommended({
  className,
  data: { products },
  onShowMore,
  showMoreText = 'Show more',
  ...rest
}: Props) {
  const handleShowMore = () => {
    onShowMore();
  };

  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['heading']}>Recommended for you</div>

      <div className={styles['list-container']}>
        <List
          className={styles['list']}
          items={products.map((product, index) => (
            <Link to={`/products/${product.id}`}>
              <Card data={product} key={index} />
            </Link>
          ))}
        />
      </div>

      <div className={styles['show-more-container']}>
        <Button
          className={styles['show-more']}
          theme="black"
          onClick={handleShowMore}
        >
          {showMoreText}
        </Button>
      </div>
    </div>
  );
}

export default ProductRecommended;
