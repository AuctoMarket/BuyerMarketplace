import React from 'react';

import styles from './index.module.scss';
// import dayjs from 'dayjs';

interface Props extends React.ComponentProps<'div'> {
  data: {
    deliveryDate: Date;
  };
}

function ProductEstimatedDeliveryDate({
  className,
  data: { deliveryDate },
  ...rest
}: Props) {
  return (
    <div className={`${styles['product-posted-date']} ${className}`} {...rest}>
      {/* Estimated delivery {dayjs(deliveryDate).format('DD MMMM YYYY')} */}
      Pre orders will be delivered within 2 weeks of release date
    </div>
  );
}

export default ProductEstimatedDeliveryDate;
