import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Rating from '../../Rating';
import ReadMore from '../../ReadMore';

import type { Product } from '../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: Partial<Pick<Product, 'condition'>> &
    Pick<Product, 'description'> & {
      readMore?: boolean;
    };
}

function ProductDetails({
  className,
  data: { condition, description, readMore = true },
  ...rest
}: Props) {
  return (
    <div className={`${styles['product-details']} ${className}`} {...rest}>
      {condition && (
        <div className={styles['condition']}>
          <div className={styles['label']}>Condition:</div>
          <Rating className={styles['rating']} rate={condition} />
        </div>
      )}

      <div className={styles['description']}>
        <ReadMore showAll={!readMore}>{description}</ReadMore>
      </div>
    </div>
  );
}

export default ProductDetails;
