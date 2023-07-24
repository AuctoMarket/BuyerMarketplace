import React from 'react';

import styles from './index.module.scss';

interface Props extends React.ComponentProps<'div'> {
  data: {
    price: number;
  };
}

function ProductPrice({ className, data, ...rest }: Props) {
  return (
    <div className={`${styles['product-price']} ${className}`} {...rest}>
      ${data.price}
    </div>
  );
}

export default ProductPrice;
