import React, { useState, ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Input from '../../../Input';

import type { DeliveryAddress } from '../../../../types/order.type';

interface Props extends ComponentProps<'div'> {
  data: DeliveryAddress;
  onChangeData: (data: DeliveryAddress, isError: boolean) => void;
}

const isError = (error: any) => {
  return Object.values(error).some(Boolean);
};

const StandardDelivery = ({
  className,
  data,
  onChangeData,
  ...rest
}: Props) => {
  const [error, setError] = useState<{
    addressLine1?: string;
    addressLine2?: string;
    postalCode?: string;
  }>({});

  const handleChangeAddress1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const addressLine1 = event.target.value;
    const errorAddress1 = validateAddress(addressLine1);
    const newError = { ...error, addressLine1: errorAddress1 };

    setError(newError);
    onChangeData({ ...data, addressLine1 }, isError(newError));
  };

  const handleChangeAddress2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const addressLine2 = event.target.value;
    const errorAddress2 = validateAddress(addressLine2);
    const newError = { ...error, addressLine2: errorAddress2 };

    setError(newError);
    onChangeData({ ...data, addressLine2 }, isError(newError));
  };

  const handleChangePostalCode = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const postalCode = event.target.value;
    const errorPostalCode = validatePostal(postalCode);
    const newError = { ...error, postalCode: errorPostalCode };

    setError(newError);
    onChangeData({ ...data, postalCode }, isError(newError));
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
    if (!/^\d{6}$/.test(postalCode)) {
      return 'Postal Code is invalid';
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
              value={data.addressLine1}
              onChange={handleChangeAddress1}
              role="input-address-1"
            />
            {error.addressLine1 && (
              <div className={`${styles['delivery-1-error-message']}`}>
                {error.addressLine1}
              </div>
            )}
          </div>

          <div className={`${styles['contact-detail-input-address-2']}`}>
            <p>Address Line 2</p>
            <Input
              className={styles['input-address-2']}
              type="text"
              theme="white"
              onChange={handleChangeAddress2}
              value={data.addressLine2}
              role="input-address-2"
            />
            {error.addressLine2 && (
              <div className={`${styles['delivery-1-error-message']}`}>
                {error.addressLine2}
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
              onChange={handleChangePostalCode}
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
        Once payment is completed, you will receive an email to schedule the
        delivery date and time. If you have any questions, you can reach out to
        us on telegram{' '}
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
};

export default StandardDelivery;
