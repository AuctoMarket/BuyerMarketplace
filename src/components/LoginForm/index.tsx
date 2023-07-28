// src/components/LoginForm/index.tsx
import React, { useState } from 'react';
import styles from './index.module.scss';

interface LoginFormProps {
  onLogin?: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
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

  const handleLogin = () => {
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

  return (
    <>
      <div className={styles['login-title']}>Login</div>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.inputGroup}>
        {/* <label htmlFor="email">Email:</label> */}
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
      </div>
      <div className={styles.inputGroup}>
        {/* <label htmlFor="password">Password:</label> */}
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
        <a href="#">Forgot your password?</a>
        <a href="#">Not a user? Sign up here!</a>
      </div>
      <div className={styles.btnGroup}>
        <button className={styles.loginBtn} onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
};

export default LoginForm;
