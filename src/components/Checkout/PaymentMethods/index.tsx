import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import SectionHeading from '../SectionHeading';
import { Form, Radio } from 'react-daisyui';

export interface PaymentMethodsData {
  paymentMethod: string;
}

interface Props extends ComponentProps<'div'> {
  data: PaymentMethodsData;
  onChangeData: (data: PaymentMethodsData) => void;
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
    onChangeData({ paymentMethod: event.target.value });
  };

  return (
    <div className={`${className} payment-method`} {...rest}>
      <SectionHeading data={{ number: '3', text: 'Payment Method' }} />

      <div className={styles['payment-method-container']}>
        <div className={styles['description']}>
          <div>Please enter your payment details.</div>
          <div className={styles['note']}>
            *Require Fields
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
              value={data.paymentMethod}
              checked={data.paymentMethod === 'card'}
              onChange={handleChangePaymentMethod}
              size="xs"
              data-testid="card"
            />
            <span>
              Card Payment
              <small>*2% Payment Processing Fee</small>
            </span>
          </Form.Label>

          <Form.Label className={styles['label']}>
            <Radio
              className={styles['radio']}
              name="option"
              value={data.paymentMethod}
              checked={data.paymentMethod === 'paynow'}
              onChange={handleChangePaymentMethod}
              size="xs"
              data-testid="paynow"
            />
            <span>PayNow</span>
          </Form.Label>
        </Form>
      </div>
    </div>
  );
}

export default PaymentMethods;
