// src/components/LoginForm/index.tsx
import React, { useState } from 'react';

import styles from './index.module.scss';
import Icon from '../Icon';
import Image from '../Image';
import Input from '../Input';
import { Link } from 'react-router-dom';
import Button from '../Button';
import useAuth from '../../hooks/useAuth';

interface LoginFormProps {
  onLogin?: (email: string, password: string) => void;
  onContinueAsGuest?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLogin,
  onContinueAsGuest,
}) => {
  const [error, setError] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { guest, toggleGuest } = useAuth();

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clearError = {
      email: '',
    };
    setError(clearError);
    setEmail(event.target.value);
    const emailError = validateEmail(email);
    const newError = { ...error, email: emailError };
    setError(newError);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clearError = {
      password: '',
    };
    setError(clearError);
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    // Perform input validation
    if (!email.trim() || !password.trim()) {
      const newError = {
        email: 'Please fill in all fields.',
        password: 'Please fill in all fields.',
      };
      setError(newError);
      return;
    }
    if (error.email || error.password) {
      return;
    }

    try {
      // Call the onSignup prop to handle the signup action
      if (onLogin) {
        await onLogin(email, password);
      }
    } catch (error) {
      const newError = {
        email: 'Incorrect email or password.',
        password: 'Incorrect email or password.',
      };
      setError(newError);
      return;
    }
  };

  const handleContinueAsGuest = async () => {
    if (onContinueAsGuest) {
      if (onContinueAsGuest) {
        onContinueAsGuest();
        toggleGuest();
      }
    }
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
  return (
    <>
      <div className={styles['container']}>
        <Image
          className={styles['logo']}
          src="images/logo/horizontal/slogan/slogan-color.png"
        />
        <div className={styles['text-1']}>Your collectors account.</div>
        <div className={styles['text-2']}>
          Login to your collectors account to gain access to all things
          collectible.{' '}
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
            ></Input>
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
            ></Input>
            {error.password && (
              <div className={`${styles['login-form-error-message']}`}>
                {error.password}
              </div>
            )}
            <Icon
              name="password-visibility"
              className={styles.visibilityIcon}
              data-testid="password-visibility-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>
        <Link className={styles['register']} to="/auth/signup">
          Dont have an account? Join us here.
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
    </>
  );
};

export default LoginForm;
