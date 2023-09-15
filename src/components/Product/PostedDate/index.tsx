import React from 'react';
import dayjs from 'dayjs';

import styles from './index.module.scss';

import type { Product } from '../../../types/product.type';

interface Props extends React.ComponentProps<'div'> {
  data: {
    postedDate: Product['postedDate'];
    showText?: boolean;
  };
}

function ProductPostedDate({
  className,
  data: { postedDate, showText = true },
  ...rest
}: Props) {
  return (
    <div className={`${styles['product-posted-date']} ${className}`} {...rest}>
      {showText && 'Posted'} {dayjs(postedDate).fromNow()}
    </div>
  );
}

export default ProductPostedDate;
