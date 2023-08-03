import React from 'react';

import styles from './index.module.scss';

import type { Product } from '../../../types/product.type';

interface Props extends React.ComponentProps<'div'> {
  data: Pick<Product, 'price'>;
}

function ProductPrice({ className, data: { price }, ...rest }: Props) {
  return (
    <div className={`${styles['product-price']} ${className}`} {...rest}>
      ${new Intl.NumberFormat('en-SG').format(price)}
    </div>
  );
}

export default ProductPrice;
