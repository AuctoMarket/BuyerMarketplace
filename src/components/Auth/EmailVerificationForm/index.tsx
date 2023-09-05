import React, { ComponentProps, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Logo from '../../Logo';
import Input from '../../Input';
import Button from '../../Button';
import useAuth from '../../../hooks/useAuth';

interface Props extends ComponentProps<'div'> {
  onVerifyEmail?: () => void;
}

function VerifyEmailForm({ className, onVerifyEmail, ...rest }: Props) {
  const [timeLeft, setTimeLeft] = useState(30);
  const [otpInputs, setOTPInput] = useState(['', '', '', '', '', '']);
  const [OTP, setOTP] = useState('');
  const [error, setError] = useState('');
  const { user, otpVerify } = useAuth();

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOtpInputChange = (index: number, value: string) => {
    const newOTPInputs = [...otpInputs];
    newOTPInputs[index] = value;
    setOTPInput(newOTPInputs);
  };

  const handleSubmit = async () => {
    const otpValue = otpInputs.join('');
    if (otpValue) {
      setOTP(otpValue);
      //Call API verify Email
      try {
        await otpVerify('test', OTP);

        onVerifyEmail?.();
      } catch (error: any) {
        setError(error.message);
      }
    }
  };

  return (
    <div className={`${className} ${styles['container']}`} {...rest}>
      <Logo className={styles['logo']} type="horizontal" theme="color" slogan />

      <div className={styles['title']}>Verify your email</div>

      <div className={styles['info']}>
        In order to verify your email address, we
        <br /> sent an otp to the following email: {user.email}
      </div>

      <div className={styles['group-input']}>
        {otpInputs.map((inputValue, index) => (
          <Input
            key={index}
            className={styles[`input-${index + 1}`]}
            theme="white"
            maxLength={1}
            value={inputValue}
            onChange={(e) => handleOtpInputChange(index, e.target.value)}
          />
        ))}
      </div>

      {error && <div className={`${styles['error-message']}`}>{error}</div>}

      <Link className={styles['resend']} to={'#'}>
        Didn't receive it? Resend OTP in {timeLeft}s
      </Link>

      <Button className={styles['submit']} theme="black" onClick={handleSubmit}>
        SUBMIT
      </Button>
    </div>
  );
}

export default VerifyEmailForm;
