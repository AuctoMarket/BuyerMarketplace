import React, { ComponentProps, useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';

import styles from './index.module.scss';
import Logo from '../../Logo';
import Button from '../../Button';
import useAuth from '../../../hooks/useAuth';

interface Props extends ComponentProps<'div'> {
  onVerifyEmail?: () => void;
}

function VerifyEmailForm({ className, onVerifyEmail, ...rest }: Props) {
  const [timeLeft, setTimeLeft] = useState(30);
  const [optSends, setOtpSends] = useState(0);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const { user, resendOtp, validateOtp } = useAuth();

  useEffect(() => {
    if (optSends === 0 && user?.buyer_id) {
      resendOtp(user.buyer_id);
      setOtpSends(optSends + 1);
    }
  }, [optSends, user?.buyer_id, resendOtp]);

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

  const handleChangeOtp = (value: string) => {
    setOtp(value);
    setError('');
  };

  const handleResendOtp = async () => {
    if (timeLeft === 0) {
      try {
        await resendOtp(user.buyer_id);
        setTimeLeft(30);
        setOtpSends(optSends + 1);
        setOtp('');
        setError('');
      } catch (error: any) {
        setError(error.message);
      }
    }
  };

  const handleSubmit = async () => {
    if (otp.length !== 6 || error) {
      return;
    }

    try {
      await validateOtp(user.buyer_id, otp);

      onVerifyEmail?.();
    } catch (error: any) {
      setError(error.message);
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
        <OtpInput
          numInputs={6}
          inputType="number"
          value={otp}
          onChange={handleChangeOtp}
          renderInput={(props) => (
            <input {...props} className={styles['input']} />
          )}
        />
      </div>

      {error && <div className={`${styles['error-message']}`}>{error}</div>}

      <div
        className={`${styles['resend']} ${
          timeLeft ? styles['resend-disabled'] : ''
        }`}
        onClick={handleResendOtp}
      >
        Didn't receive it? Resend OTP{timeLeft > 0 && ` in ${timeLeft}s`}
      </div>

      <Button className={styles['submit']} theme="black" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default VerifyEmailForm;
