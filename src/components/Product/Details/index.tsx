import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Rating from '../../Rating';
import ReadMore from '../../ReadMore';

interface Props extends ComponentProps<'div'> {
  data: {
    condition: number;
    description: string;
  };
}

function ProductDetails({
  className,
  data: { condition, description },
  ...rest
}: Props) {
  return (
    <div className={`${styles['product-details']} ${className}`} {...rest}>
      <div className={styles['condition']}>
        <div className={styles['label']}>Condition:</div>
        <Rating className={styles['rating']} rate={condition} />
      </div>

      <div className={styles['description']}>
        <ReadMore>{description}</ReadMore>
      </div>
    </div>
  );
}

export default ProductDetails;
