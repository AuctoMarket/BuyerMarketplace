import React, { ComponentProps } from 'react';

import styles from './index.module.scss';

interface Props extends ComponentProps<'div'> {
  data: { title: string };
}

function ProductTitle({ className, data: { title }, ...rest }: Props) {
  return (
    <div className={`${styles['product-title']} ${className}`} {...rest}>
      {title}
    </div>
  );
}

export default ProductTitle;
