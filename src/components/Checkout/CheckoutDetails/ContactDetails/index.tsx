import React, { useState, ComponentProps } from 'react';

import styles from './index.module.scss';
import Input from '../../../Input';
import ContactDetailHeader from '../Header';

interface Props extends ComponentProps<'div'> {}

export function ContactDetailContent() {
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [phone, setPhone] = useState('');
  const [telegram, setTelegram] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    const errorMessage = validateEmail(email);
    setError(errorMessage);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
    const errorMessage = validatePhone(phone);
    setError(errorMessage);
  };
  const handleEmailConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailConfirm(event.target.value);
    const errorMessage = validateEmailConfirm(email, emailConfirm);
    setError(errorMessage);
  };

  const handleTelegram = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelegram(event.target.value);
    const errorMessage = validateTelegram(telegram);
    setError(errorMessage);
  };

  const validateEmail = (email: string) => {
    // Regular expression to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Email invalid';
    return '';
  };

  const validatePhone = (phone: string) => {
    // Regular expression to check email format
    const phoneRegex = /^(?:\+\d{1,3}\s*)?(?:\(\d{1,}\))?(?:[\s-]*\d+[\s-]*)+$/;
    if (!phoneRegex.test(phone)) return 'Phone invalid';
    return '';
  };

  const validateEmailConfirm = (email: string, emailConfirm: string) => {
    // Regular expression to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailConfirm)) return 'Email invalid';
    if (email === emailConfirm) return 'Email confirm not match with email';
    return '';
  };

  const validateTelegram = (telegram: string) => {
    const telegramRegex = /^@[A-Za-z0-9_]{5,}$/;
    if (telegramRegex.test(telegram)) return 'Telegram invalid';
    return '';
  };

  return (
    <>
      <ContactDetailHeader data={{ number: '1', text: 'Contact Details' }} />
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
            {error && (
              <div className={`${styles['contact-detail-error-message']}`}>
                {error}
              </div>
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
            {error && (
              <div className={`${styles['contact-detail-error-message']}`}>
                {error}
              </div>
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
            {error && (
              <div className={`${styles['contact-detail-error-message']}`}>
                {error}
              </div>
            )}{' '}
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
            {error && (
              <div className={`${styles['contact-detail-error-message']}`}>
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetailContent;
