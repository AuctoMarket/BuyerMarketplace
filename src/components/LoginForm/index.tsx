// src/components/LoginForm/index.tsx
import React, { useState, useContext } from 'react';
import styles from './index.module.scss';
import { PopupContext } from '../Popup'; // Import the PopupContext
import SignupForm from '../SignupForm';

interface LoginFormProps {
  onLogin?: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const { togglePopup } = useContext(PopupContext); // Use the PopupContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(''); // Clear any previous error message when user starts typing
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setError(''); // Clear any previous error message when user starts typing
  };

  const validateEmail = (email: string) => {
    // Regular expression to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    // Regular expression to check password format
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = async () => {
    // Perform input validation
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Validate password format
    if (!validatePassword(password)) {
      setError(
        'Password should be longer than 6 characters, with at least 1 letter, 1 number, and 1 symbol.',
      );
      return;
    }

    // Call the onLogin prop to handle the login action
    if (onLogin) {
      onLogin(email, password);
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

  const handleContAsGuestClick = () => {
    if (togglePopup) {
      togglePopup(false);
    }
  };

  return (
    <>
      <div className={styles['login-title']}>Login</div>
      {error && (
        <div className={styles.error} data-testid="error-message">
          {error}
        </div>
      )}
      <div className={styles.inputGroup}>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.passwordInput}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <span
            className={styles.visibilityIcon}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
      </div>
      <div className={styles.links}>
        {/* Use the handleSignupClick function to open the signup form in a popup */}
        <button className={styles.a} onClick={handleSignupClick}>
          Not a user? Sign up here!
        </button>
        <button className={styles.a} onClick={handleContAsGuestClick}>
          Continue as a guest!
        </button>
      </div>
      <div className={styles.btnGroup}>
        {/* Add the data-testid attribute to the login button */}
        <button
          className={styles.loginBtn}
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
