import React, { useState, ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Input from '../../../Input';

import type { DeliveryMethodsData } from '../../../../types/checkout.type';

interface Props extends ComponentProps<'div'> {
  data: DeliveryMethodsData['normalDelivery'];
  onChangeData: (data: DeliveryMethodsData['normalDelivery']) => void;
}

export function NormalDelivery({
  className,
  data,
  onChangeData,
  ...rest
}: Props) {
  const [error, setError] = useState<{
    address1?: string;
    address2?: string;
    postalCode?: string;
  }>({});

  const handleAddress1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const address1 = event.target.value;
    const errorAddress1 = validateAddress(address1);

    setError({ ...error, address1: errorAddress1 });
    onChangeData({ ...data, address1 });
  };

  const handleAddress2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const address2 = event.target.value;
    const errorAddress2 = validateAddress(address2);

    setError({ ...error, address2: errorAddress2 });
    onChangeData({ ...data, address2 });
  };

  const handlePostalCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const postalCode = event.target.value;
    const errorPostalCode = validatePostal(postalCode);

    setError({ ...error, postalCode: errorPostalCode });
    onChangeData({ ...data, postalCode });
  };

  const validateAddress = (address: string) => {
    if (address.trim() === '') {
      return 'Address is required';
    }
  };

  const validatePostal = (postalCode: string) => {
    if (postalCode.trim() === '') {
      return 'Postal Code is required';
    }
  };

  return (
    <div className={`${className} ${styles['delivery-1-container']}`} {...rest}>
      <div className={`${styles['delivery-1-content']}`}>
        <p className={`${styles['delivery-1-content-header']}`}>
          Please enter your contact details.
        </p>
        <div className={`${styles['delivery-1-content-text']}`}>
          <p>*Require Fields</p>
        </div>
      </div>
      <div className={`${styles['delivery-1-input']}`}>
        <div className={`${styles['delivery-1-input-left']}`}>
          <div className={`${styles['delivery-1-input-address-1']}`}>
            <p>Address Line 1*</p>
            <Input
              className={styles['delivery-1-input-address-1']}
              type="text"
              theme="white"
              value={data.address1}
              onChange={handleAddress1Change}
              role="input-address-1"
            />
            {error.address1 && (
              <div className={`${styles['delivery-1-error-message']}`}>
                {error.address1}
              </div>
            )}
          </div>

          <div className={`${styles['contact-detail-input-address-2']}`}>
            <p>Address Line 2</p>
            <Input
              className={styles['input-address-2']}
              type="text"
              theme="white"
              onChange={handleAddress2Change}
              value={data.address2}
              role="input-address-2"
            />
            {error.address2 && (
              <div className={`${styles['delivery-1-error-message']}`}>
                {error.address2}
              </div>
            )}
          </div>
        </div>

        <div className={`${styles['delivery-1-input-right']}`}>
          <div className={`${styles['delivery-1-input-postal-code']}`}>
            <p>Postal Code*</p>
            <Input
              className={styles['input-postal-code']}
              type="text"
              theme="white"
              value={data.postalCode}
              onChange={handlePostalCodeChange}
              role="input-postal-code"
            />
            {error.postalCode && (
              <div className={`${styles['delivery-1-error-message']}`}>
                {error.postalCode}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`${styles['delivery-method-information']}`}>
        <p>
          Once payment is completed, you will receive an email to schedule the
          delivery date and time. If you have any questions, you can reach out
          to us on telegram
        </p>
        <Link
          className={`${styles['delivery-method-information-contact']}`}
          to="https://t.me/auctomarketplace"
          target="_blank"
        >
          @auctomarketplace
        </Link>
      </div>
    </div>
  );
}

export default NormalDelivery;
