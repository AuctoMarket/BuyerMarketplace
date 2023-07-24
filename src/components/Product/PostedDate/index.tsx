import React from 'react';

import styles from './index.module.scss';

interface Props extends React.ComponentProps<'div'> {
  data: {
    postedDate: string;
  };
}

function ProductPostedDate({ className, data, ...rest }: Props) {
  return (
    <div className={`${styles['product-posted-date']} ${className}`} {...rest}>
      Posted {data.postedDate}
    </div>
  );
}

export default ProductPostedDate;
