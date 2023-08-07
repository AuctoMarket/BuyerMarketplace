import React, { ComponentProps } from 'react';

import styles from './index.module.scss';

import type { Product } from '../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: Pick<Product, 'title'>;
}

function ProductTitle({ className, data: { title }, ...rest }: Props) {
  return (
    <div className={`${styles['product-title']} ${className}`} {...rest}>
      {title}
    </div>
  );
}

export default ProductTitle;
