import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Button from '../../../Button';
import { DeliveryMethod } from '../../../../types/checkout.type';

interface Props extends ComponentProps<'div'> {
  method: DeliveryMethod;
  onChangeMethod: (method: DeliveryMethod) => void;
}

export function GroupButton({ method, onChangeMethod, ...rest }: Props) {
  return (
    <div className={`${styles['delivery-method-button']}`} {...rest}>
      <Button
        className={`${styles['button-self-collection']} ${
          method === DeliveryMethod.SelfCollection && styles['selected']
        }`}
        theme="gray"
        onClick={() => onChangeMethod(DeliveryMethod.SelfCollection)}
        data-testid="btn-1"
      >
        <div className={styles['text-button-1']}>Self-collection</div>
      </Button>
      <Button
        className={`${styles['button-delivery-1']} ${
          method === DeliveryMethod.NormalDelivery && styles['selected']
        }`}
        theme="gray"
        onClick={() => onChangeMethod(DeliveryMethod.NormalDelivery)}
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
