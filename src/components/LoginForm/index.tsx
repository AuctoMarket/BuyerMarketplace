// src/components/LoginForm/index.tsx
import React, { useState, useContext } from 'react';
import styles from './index.module.scss';
import { PopupContext } from '../Popup';
import SignupForm from '../SignupForm';
import Icon from '../Icon';
import { useAuth } from '../../hooks/useAuth';

interface LoginFormProps {
  onLogin?: (email: string, password: string) => void;
  onContinueAsGuest?: () => void; // Add this prop
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLogin,
  onContinueAsGuest,
}) => {
  const { togglePopup } = useContext(PopupContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const { guest } = useAuth();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError('');
    setError('');
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError('');
    setError('');
  };

  const handleLogin = async () => {
    // Perform input validation
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Call the onSignup prop to handle the signup action
      if (onLogin) {
        await onLogin(email, password);
      }
    } catch (error) {
      setEmailError('Incorrect email or password.');
      setError('');
      return;
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSignupClick = () => {
    if (togglePopup) {
      togglePopup(true, <SignupForm />);
    }
  };

  const handleContinueAsGuestClick = () => {
    if (onContinueAsGuest) {
      onContinueAsGuest();
    }
    if (togglePopup) {
      togglePopup(false);
    }
  };

  const handleContextMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.preventDefault(); // Prevent the default context menu
  };

  return (
    <>
      <div className={styles['login-title']}>Login</div>
      <div className={styles.inputGroup}>
        {error && (
          <div className={styles.error} data-testid="error-message">
            {error}
          </div>
        )}
        {emailError && (
          <div className={styles.error} data-testid="email-error-message">
            {emailError}
          </div>
        )}
        <div className={styles.input}>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            autoCapitalize="none"
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        {passwordError && (
          <div className={styles.error} data-testid="password-error-message">
            {passwordError}
          </div>
        )}
        <div className={styles.passwordInput}>
          <input
            type={!showPassword ? 'password' : 'text'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <Icon
            name="password-visibility"
            className={styles.visibilityIcon}
            onClick={togglePasswordVisibility}
            onContextMenu={handleContextMenu}
            data-testid="password-visibility-icon"
          />
        </div>
      </div>
      <div className={styles.links}>
        {/* Use the handleSignupClick function to open the signup form in a popup */}
        <button
          className={styles.a}
          onClick={handleSignupClick}
          data-testid="signup-button"
        >
          Not a user? Sign up here!
        </button>
        {!guest && onContinueAsGuest && (
          <button className={styles.a} onClick={handleContinueAsGuestClick}>
            Continue as a guest!
          </button>
        )}
      </div>
      <div className={styles.btnGroup}>
        <button
          className={`${styles.loginBtn} ${styles.responsiveLoginBtn}`}
          onClick={handleLogin}
          data-testid="login-button"
        >
          LOGIN
        </button>
      </div>
    </>
  );
};

export default LoginForm;
