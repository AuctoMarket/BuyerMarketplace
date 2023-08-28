import React, { useState, ComponentProps } from 'react';

import styles from './index.module.scss';
import Input from '../../Input';
import SectionHeading from '../SectionHeading';
import useAuth from '../../../hooks/useAuth';

import type { ContactDetails } from '../../../types/order.type';

interface Props extends ComponentProps<'div'> {
  data: ContactDetails;
  onChangeData: (data: ContactDetails, isError: boolean) => void;
}

const isError = (error: any) => Object.values(error).some(Boolean);

const OrderContactDetails = ({
  className,
  data,
  onChangeData,
  ...rest
}: Props) => {
  const { user } = useAuth();
  const [error, setError] = useState<{
    email?: string;
    phoneNumber?: string;
    emailConfirm?: string;
    telegramHandle?: string;
  }>({});

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    const emailError = validateEmail(email);
    const newError = { ...error, email: emailError };

    setError(newError);
    onChangeData({ ...data, email }, isError(newError));
  };

  const handleChangePhoneNumber = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const phoneNumber = event.target.value;
    const phoneNumberError = validatePhoneNumber(phoneNumber);
    const newError = { ...error, phoneNumber: phoneNumberError };

    setError(newError);
    onChangeData({ ...data, phoneNumber }, isError(newError));
  };

  const handleChangeEmailConfirm = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const emailConfirm = event.target.value;
    const emailConfirmError = validateEmailConfirm(data.email, emailConfirm);
    const newError = { ...error, emailConfirm: emailConfirmError };

    setError(newError);
    onChangeData({ ...data, emailConfirm }, isError(newError));
  };

  const handleChangeTelegramHandle = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const telegramHandle = event.target.value;
    const telegramHandleError =
      telegramHandle !== ''
        ? validateTelegramHandle(telegramHandle)
        : undefined;
    const newError = { ...error, telegramHandle: telegramHandleError };

    setError(newError);
    onChangeData({ ...data, telegramHandle }, isError(newError));
  };

  const validateEmail = (email: string) => {
    // Regular expression to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Email invalid';
    }
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    // Regular expression to check phone number format
    const phoneNumberRegex = /^[8-9][0-9]{3}[-\s.]?[0-9]{4}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      return 'Phone number invalid';
    }
  };

  const validateEmailConfirm = (email: string, emailConfirm: string) => {
    const emailValidationError = validateEmail(email);
    if (emailValidationError) {
      return emailValidationError;
    }
    if (emailConfirm !== email) {
      return 'Email confirm does not not match with email';
    }
  };

  const validateTelegramHandle = (telegramHandle: string) => {
    const telegramHandleRegex = /^[A-Za-z0-9_]{5,}$/;
    if (!telegramHandleRegex.test(telegramHandle)) {
      return 'Telegram handle invalid';
    }
  };

  return (
    <div className={`${className} ${styles['contact-details']}`} {...rest}>
      <SectionHeading data={{ number: '1', text: 'Contact Details' }} />

      <div className={`${styles['contact-detail-content-container']}`}>
        <div className={`${styles['contact-detail-content']}`}>
          <p className={`${styles['contact-detail-content-header']}`}>
            Please enter your contact details.
          </p>
          <div className={`${styles['contact-detail-content-text']}`}>
            <p>*Required Fields</p>
            <p>An email receipt will be sent once the checkout is completed</p>
          </div>
        </div>
        <div className={`${styles['contact-detail-input']}`}>
          <div className={`${styles['contact-detail-input-email-adress']}`}>
            <p>Email Address*</p>
            <Input
              className={styles['input-email-adress']}
              type="text"
              theme="white"
              value={data.email}
              onChange={handleChangeEmail}
              role="input-email-adress"
              disabled={user?.buyer_id}
            />
            {error.email && (
              <div className={`${styles['contact-detail-error-message']}`}>
                {error.email}
              </div>
            )}
          </div>
          <div className={`${styles['contact-detail-input-phone-number']}`}>
            <p>Phone Number*</p>
            <Input
              className={styles['input-phone-number']}
              type="text"
              theme="white"
              value={data.phoneNumber}
              onChange={handleChangePhoneNumber}
              role="input-phone-number"
            />
            {error.phoneNumber && (
              <div className={`${styles['contact-detail-error-message']}`}>
                {error.phoneNumber}
              </div>
            )}
          </div>
          <div className={`${styles['contact-detail-input-confirm-email']}`}>
            <p>Confirm Email Address*</p>
            <Input
              className={styles['input-confirm-email']}
              type="text"
              theme="white"
              value={data.emailConfirm}
              onChange={handleChangeEmailConfirm}
              role="input-confirm-email"
              disabled={user?.buyer_id}
            />
            {error.emailConfirm && (
              <div className={`${styles['contact-detail-error-message']}`}>
                {error.emailConfirm}
              </div>
            )}
          </div>
          <div className={`${styles['contact-detail-input-telegram']}`}>
            <p>Telegram Handle (optional)</p>
            <Input
              className={styles['input-confirm-telegram']}
              type="text"
              theme="white"
              value={data.telegramHandle}
              onChange={handleChangeTelegramHandle}
              role="contact-detail-input-telegram"
            />
            {error.telegramHandle && (
              <div className={`${styles['contact-detail-error-message']}`}>
                {error.telegramHandle}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderContactDetails;
