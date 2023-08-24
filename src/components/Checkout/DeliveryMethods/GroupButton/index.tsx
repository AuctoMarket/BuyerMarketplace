import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Button from '../../../Button';
import { DeliveryMethod } from '../../../../types/order.type';

interface Props extends ComponentProps<'div'> {
  data: DeliveryMethod;
  onChangeData: (data: DeliveryMethod) => void;
}

export function GroupButton({ data, onChangeData, ...rest }: Props) {
  const handleChangeDeliveryMethod = (deliveryMethod: DeliveryMethod) => {
    if (data === deliveryMethod) {
      return;
    }

    onChangeData(deliveryMethod);
  };

  return (
    <div className={`${styles['delivery-method-button']}`} {...rest}>
      <Button
        className={`${styles['button-self-collection']} ${
          data === DeliveryMethod.SelfCollection && styles['selected']
        }`}
        theme="gray"
        onClick={() =>
          handleChangeDeliveryMethod(DeliveryMethod.SelfCollection)
        }
        data-testid="btn-1"
      >
        <div className={styles['text-button-1']}>Self-collection</div>
      </Button>
      <Button
        className={`${styles['button-delivery-1']} ${
          data === DeliveryMethod.StandardDelivery && styles['selected']
        }`}
        theme="gray"
        onClick={() =>
          handleChangeDeliveryMethod(DeliveryMethod.StandardDelivery)
        }
        data-testid="btn-2"
      >
        <div className={styles['text-button-1']}>
          <p>Delivery</p>
          <p className={styles['text-button-2']}>(1-3 business days)</p>
        </div>
      </Button>
    </div>
  );
}

export default GroupButton;
