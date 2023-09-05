import React, { ComponentProps, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Icon from '../../Icon';
import Input from '../../Input';
import Button from '../../Button';
import Logo from '../../Logo';
import useAuth from '../../../hooks/useAuth';
import useQueryParams from '../../../hooks/useQueryParams';

interface Props extends ComponentProps<'div'> {
  onSignup?: () => void;
}

const SignupForm = ({ className, onSignup, ...rest }: Props) => {
  const queryParams = useQueryParams();
  const [error, setError] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup } = useAuth();

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailError = validateEmail(event.target.value);
    const newError = { ...error, email: emailError };

    setEmail(event.target.value);
    setError(newError);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordError = validatePassword(event.target.value);
    const newError = { ...error, password: passwordError };

    setPassword(event.target.value);
    setError(newError);
  };

  const handleChangeConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const confirmPasswordError = validateConfirmPassword(
      event.target.value,
      password,
    );
    const newError = { ...error, confirmPassword: confirmPasswordError };

    setConfirmPassword(event.target.value);
    setError(newError);
  };

  const validateEmail = (email: string) => {
    // Regular expression to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Incorrect email format, please enter a valid email address.';
    }
  };

  const validatePassword = (password: string) => {
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;

    if (password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }

    if (!digitRegex.test(password)) {
      return 'Password must contain at least 1 digit (0-9).';
    }

    if (!specialCharRegex.test(password)) {
      return 'Password must contain at least 1 special character.';
    }
  };

  const validateConfirmPassword = (
    confirmPassword: string,
    password: string,
  ) => {
    if (confirmPassword !== password) {
      return 'Passwords do not match. Please check that they are the same.';
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword,
    );
  };

  const handleSignup = async () => {
    if (error.email || error.password || error.confirmPassword) {
      return;
    }

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      return;
    }

    try {
      await signup(email, password);

      onSignup?.();
    } catch (error: any) {
      const newError = {
        ...error,
        email: error.message,
      };

      setError(newError);
    }
  };

  return (
    <div className={`${className} ${styles['container']}`} {...rest}>
      <Logo className={styles['logo']} type="horizontal" theme="color" slogan />

      <div className={styles['text-1']}>Become an aucto collector.</div>

      <div className={styles['text-2']}>
        Create an account to get exclusive access to
        <br /> the hottest collectibles at the best prices.
      </div>

      <div className={styles['group-input']}>
        <div className={styles['email']}>
          <Input
            className={styles['email-input']}
            theme="white"
            placeholder="Email"
            type="text"
            value={email}
            onChange={handleChangeEmail}
            role="input-email-adress"
          />

          {error.email && (
            <div className={`${styles['signup-form-error-message']}`}>
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
            value={password}
            onChange={handleChangePassword}
          />
          <Icon
            name="password-visibility"
            className={styles.visibilityIcon}
            data-testid="password-visibility-icon"
            onClick={togglePasswordVisibility}
          />

          {error.password && (
            <div className={`${styles['signup-form-error-message']}`}>
              {error.password}
            </div>
          )}
        </div>

        <div className={styles['confirm-password']}>
          <Input
            className={styles['confirm-password-input']}
            theme="white"
            placeholder="Confirm password"
            type={!showConfirmPassword ? 'password' : 'text'}
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
          />

          <Icon
            name="password-visibility"
            className={styles.visibilityIcon}
            data-testid="password-visibility-icon"
            onClick={toggleConfirmPasswordVisibility}
          />

          {error.confirmPassword && (
            <div className={`${styles['signup-form-error-message']}`}>
              {error.confirmPassword}
            </div>
          )}
        </div>
      </div>

      <Link
        className={styles['login']}
        to={`/auth/login?continueAsGuest=${
          queryParams.get('continueAsGuest') || false
        }&redirectUrl=${encodeURIComponent(
          queryParams.get('redirectUrl') as string,
        )}`}
      >
        Have an account? Login here.
      </Link>

      <Button
        theme="black"
        className={styles['signup-button']}
        onClick={handleSignup}
      >
        Sign up
      </Button>
    </div>
  );
};

export default SignupForm;
