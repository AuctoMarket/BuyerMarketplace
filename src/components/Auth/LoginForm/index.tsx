// src/components/LoginForm/index.tsx
import React, { ComponentProps, useState } from 'react';

import styles from './index.module.scss';
import Icon from '../../Icon';
import Logo from '../../Logo';
import Input from '../../Input';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import useAuth from '../../../hooks/useAuth';
import useQueryParams from '../../../hooks/useQueryParams';

interface Props extends ComponentProps<'div'> {
  onLogin?: () => void;
  onContinueAsGuest?: () => void;
}

const LoginForm = ({
  className,
  onLogin,
  onContinueAsGuest,
  ...rest
}: Props) => {
  const queryParams = useQueryParams();
  const [isServerError, setIsServerError] = useState(false);
  const [error, setError] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailError = validateEmail(event.target.value);
    const newError = isServerError
      ? { email: '', password: '' }
      : { ...error, email: emailError };

    setEmail(event.target.value);
    setError(newError);
    setIsServerError(false);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newError = isServerError
      ? { email: '', password: '' }
      : { ...error, password: '' };

    setPassword(event.target.value);
    setError(newError);
    setIsServerError(false);
  };

  const validateEmail = (email: string) => {
    // Regular expression to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Incorrect email format, please enter a valid email address.';
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async () => {
    if (error.email || error.password) {
      return;
    }

    if (!email.trim() || !password.trim()) {
      return;
    }

    try {
      await login(email, password);

      onLogin?.();
    } catch (error: any) {
      const newError = {
        email: error.message,
        password: error.message,
      };

      setError(newError);
      setIsServerError(true);
    }
  };

  const handleContinueAsGuest = () => {
    onContinueAsGuest?.();
  };

  return (
    <div className={`${className} ${styles['container']}`} {...rest}>
      <Logo className={styles['logo']} type="horizontal" theme="color" slogan />

      <div className={styles['text-1']}>Your collectors account.</div>

      <div className={styles['text-2']}>
        Login to your collectors account to gain
        <br /> access to all things collectible.
      </div>

      <div className={styles['group-input']}>
        <div className={styles['email']}>
          <Input
            className={styles['email-input']}
            theme="white"
            placeholder="Email"
            type="text"
            onChange={handleChangeEmail}
            role="input-email-adress"
          />

          {error.email && (
            <div className={`${styles['login-form-error-message']}`}>
              {error.email}
            </div>
          )}
        </div>

        <div className={styles['password']}>
          <Input
            className={styles['password-input']}
            theme="white"
            placeholder="Password"
            type={!showPassword ? 'password' : 'text'}
            onChange={handleChangePassword}
          />

          <Icon
            name="password-visibility"
            className={styles.visibilityIcon}
            data-testid="password-visibility-icon"
            onClick={togglePasswordVisibility}
          />

          {error.password && (
            <div className={`${styles['login-form-error-message']}`}>
              {error.password}
            </div>
          )}
        </div>
      </div>

      <Link
        className={styles['register']}
        to={`/auth/signup?continueAsGuest=${
          queryParams.get('continueAsGuest') || false
        }&redirectUrl=${encodeURIComponent(
          queryParams.get('redirectUrl') as string,
        )}`}
      >
        Don't have an account? Join us here.
      </Link>

      {onContinueAsGuest && (
        <Link
          className={styles['as-guest']}
          to="#"
          onClick={handleContinueAsGuest}
        >
          Continue as a guest.
        </Link>
      )}

      <Button
        theme="black"
        className={styles['login-button']}
        onClick={handleLogin}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
