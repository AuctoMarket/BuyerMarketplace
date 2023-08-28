import React, { ComponentProps } from 'react';
import { Form, Radio } from 'react-daisyui';

import styles from './index.module.scss';
import SectionHeading from '../SectionHeading';

import { PaymentMethod } from '../../../types/order.type';

interface Props extends ComponentProps<'div'> {
  data: PaymentMethod;
  onChangeData: (data: PaymentMethod) => void;
}

export function PaymentMethods({
  className,
  data,
  onChangeData,
  ...rest
}: Props) {
  const handleChangePaymentMethod = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (data === event.target.value) {
      return;
    }

    onChangeData(event.target.value as PaymentMethod);
  };

  return (
    <div className={`${className} payment-method`} {...rest}>
      <SectionHeading data={{ number: '3', text: 'Payment Method' }} />

      <div className={styles['payment-method-container']}>
        <div className={styles['description']}>
          <div>Please enter your payment details.</div>
          <div className={styles['note']}>
            *Required Fields
            <br />
            Note that payment processing fees apply when paying with
            credit/debit card.
          </div>
        </div>

        <Form className={styles['form']}>
          <Form.Label className={styles['label']}>
            <Radio
              className={styles['radio']}
              name="option"
              value={PaymentMethod.PayNow}
              checked={data === PaymentMethod.PayNow}
              onChange={handleChangePaymentMethod}
              size="xs"
              data-testid="paynow"
            />
            <span>PayNow</span>
          </Form.Label>

          <Form.Label className={styles['label']}>
            <Radio
              className={styles['radio']}
              name="option"
              value={PaymentMethod.Card}
              checked={data === PaymentMethod.Card}
              onChange={handleChangePaymentMethod}
              size="xs"
              data-testid="card"
            />
            <span>
              Card Payment
              <small>*2% Payment Processing Fee</small>
            </span>
          </Form.Label>
        </Form>
      </div>
    </div>
  );
}

export default PaymentMethods;
