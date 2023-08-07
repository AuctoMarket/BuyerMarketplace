import React from 'react';

import styles from './index.module.scss';

import type { Product } from '../../../types/product.type';

interface Props extends React.ComponentProps<'div'> {
  data: Pick<Product, 'postedDate'>;
}

function ProductPostedDate({
  className,
  data: { postedDate },
  ...rest
}: Props) {
  return (
    <div className={`${styles['product-posted-date']} ${className}`} {...rest}>
      Posted {postedDate.toLocaleDateString('en-SG')}
    </div>
  );
}

export default ProductPostedDate;
