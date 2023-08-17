import React, { useState, ComponentProps } from 'react';

import styles from './index.module.scss';
import Input from '../../../Input';

interface Props extends ComponentProps<'div'> {}

export function ContactDetailContent() {
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [phone, setPhone] = useState('');
  const [telegram, setTelegram] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const handleEmailConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailConfirm(event.target.value);
  };

  const handleTelegram = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelegram(event.target.value);
  };

  const validateEmail = (email: string) => {
    // Regular expression to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Regular expression to check email format
    const phoneRegex = /^(?:\+\d{1,3}\s*)?(?:\(\d{1,}\))?(?:[\s-]*\d+[\s-]*)+$/;
    return phoneRegex.test(phone);
  };

  const validateEmailConfirm = (email: string, emailConfirm: string) => {
    // Regular expression to check email format
    const phoneRegex = /^(?:\+\d{1,3}\s*)?(?:\(\d{1,}\))?(?:[\s-]*\d+[\s-]*)+$/;
    return phoneRegex.test(phone) && email === emailConfirm;
  };

  const validateTelegram = (telegram: string) => {
    const telegramRegex = /^@[A-Za-z0-9_]{5,}$/;
    return telegramRegex.test(telegram);
  };

  return (
    <div className={`${styles['contact-detail-content-container']}`}>
      <div className={`${styles['contact-detail-content']}`}>
        <p className={`${styles['contact-detail-content-header']}`}>
          Please enter your contact details.
        </p>
        <div className={`${styles['contact-detail-content-text']}`}>
          <p>*Require Fields</p>
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
            value={email}
            onChange={handleEmailChange}
            role="input-email-adress"
          />
          {email.trim() !== '' && !validateEmail(email) && (
            <p
              role="contact-detail-error-message-email"
              className={`${styles['contact-detail-error-message']}`}
            >
              Invalid email
            </p>
          )}
        </div>
        <div className={`${styles['contact-detail-input-phone-number']}`}>
          <p>Phone Number*</p>
          <Input
            className={styles['input-phone-number']}
            type="text"
            theme="white"
            value={phone}
            onChange={handlePhoneChange}
            role="input-phone-number"
          />
          {phone.trim() !== '' && !validatePhone(phone) && (
            <p className={`${styles['contact-detail-error-message']}`}>
              Invalid phone
            </p>
          )}
        </div>
        <div className={`${styles['contact-detail-input-confirm-email']}`}>
          <p>Confirm Email Address*</p>
          <Input
            className={styles['input-confirm-email']}
            type="text"
            theme="white"
            value={emailConfirm}
            onChange={handleEmailConfirm}
            role="input-confirm-email"
          />
          {emailConfirm.trim() !== '' &&
            !validateEmailConfirm(email, emailConfirm) && (
              <p className={`${styles['contact-detail-error-message']}`}>
                Invalid Email Confirm
              </p>
            )}
        </div>
        <div className={`${styles['contact-detail-input-telegram']}`}>
          <p>Telegram Handle (optional)</p>
          <Input
            className={styles['input-confirm-telegram']}
            type="text"
            theme="white"
            value={telegram}
            onChange={handleTelegram}
            role="contact-detail-input-telegram"
          />
          {telegram.trim() !== '' && !validateTelegram(telegram) && (
            <p className={`${styles['contact-detail-error-message']}`}>
              Invalid Telegram
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactDetailContent;
