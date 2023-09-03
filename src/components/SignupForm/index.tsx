import React, { useState } from 'react';
import styles from './index.module.scss'; // You can create the CSS module file for SignupForm
import Icon from '../Icon';
import Input from '../Input';
import Button from '../Button';
import Image from '../Image';
import { Link } from 'react-router-dom';

interface SignupFormProps {
  onSignup?: (email: string, password: string) => void;
  onContinueAsGuest?: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({
  onSignup,
  onContinueAsGuest,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clearError = {
      email: '',
    };
    setError(clearError);
    setEmail(event.target.value);
    const emailError = validateEmail(email);
    const newError = { ...error, email: emailError };
    setError(newError);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clearError = {
      password: '',
    };
    setError(clearError);
    setPassword(event.target.value);
    const passwordError = validatePassword(password);
    const newError = { ...error, password: passwordError };
    setError(newError);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const clearError = {
      confirmPassword: '',
    };
    setError(clearError);
    setConfirmPassword(event.target.value);
    const confirmPasswordError = validateConfirmPassword(
      confirmPassword,
      password,
    );
    const newError = { ...error, confirmPassword: confirmPasswordError };
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
    const lengthRegex = /^.{8,}$/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;

    if (!lengthRegex.test(password)) {
      return 'Password must be at least 8 characters long.';
    } else if (!digitRegex.test(password)) {
      return 'Password must contain at least 1 digit (0-9).';
    } else if (!specialCharRegex.test(password)) {
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

  const handleSignup = async () => {
    // Perform input validation
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      const newError = {
        email: 'Please fill in all fields.',
        password: 'Please fill in all fields.',
        confirmPassword: 'Please fill in all fields.',
      };
      setError(newError);
      return;
    }
    if (error.email || error.password || error.confirmPassword) {
      return;
    }
    try {
      // Call the onSignup prop to handle the signup action
      if (onSignup) {
        await onSignup(email, password);
      }
    } catch (errors) {
      const newError = {
        ...error,
        confirmPassword: 'Email is already in use. Please use another email.',
      };
      setError(newError);
      return;
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

  return (
    <>
      <div className={styles['container']}>
        <Image
          className={styles['logo']}
          src="images/logo/horizontal/slogan/slogan-color.png"
        />
        <div className={styles['text-1']}>Become an aucto collector.</div>
        <div className={styles['text-2']}>
          Create an account to get exclusive access to the hottest collectibles
          at the best prices.
        </div>
        <div className={styles['group-input']}>
          <div className={styles['email']}>
            <Input
              className={styles['email-input']}
              theme="white"
              placeholder="Email"
              type="text"
              onChange={handleEmailChange}
              role="input-email-adress"
            ></Input>
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
              onChange={handlePasswordChange}
            ></Input>
            {error.password && (
              <div className={`${styles['signup-form-error-message']}`}>
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
          <div className={styles['confirm-password']}>
            <Input
              className={styles['confirm-password-input']}
              theme="white"
              placeholder="Confirm password"
              type={!showConfirmPassword ? 'password' : 'text'}
              onChange={handleConfirmPasswordChange}
            ></Input>
            {error.confirmPassword && (
              <div className={`${styles['signup-form-error-message']}`}>
                {error.confirmPassword}
              </div>
            )}
            <Icon
              name="password-visibility"
              className={styles.visibilityIcon}
              data-testid="password-visibility-icon"
              onClick={toggleConfirmPasswordVisibility}
            />
          </div>
        </div>
        <Link className={styles['register']} to="/auth/login">
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
    </>
  );
};

export default SignupForm;
