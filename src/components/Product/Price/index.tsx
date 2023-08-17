import React from 'react';

import styles from './index.module.scss';

import type { Product } from '../../../types/product.type';

interface Props extends React.ComponentProps<'div'> {
  data: Pick<Product, 'price'>;
}

function ProductPrice({ className, data: { price }, ...rest }: Props) {
  const priceInDollars = price / 10;

  return (
    <div className={`${styles['product-price']} ${className}`} {...rest}>
      $
      {new Intl.NumberFormat(
        'en-SG',
        priceInDollars % 1 !== 0
          ? {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }
          : {},
      ).format(priceInDollars)}
    </div>
  );
}

export default ProductPrice;
