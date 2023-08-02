import React, { useState, useContext } from 'react';
import styles from './index.module.scss'; // You can create the CSS module file for SignupForm
import { PopupContext } from '../Popup'; // Import the PopupContext
import LoginForm from '../LoginForm';

interface SignupFormProps {
  onSignup?: (email: string, password: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const { togglePopup } = useContext(PopupContext); // Use the PopupContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(''); // Clear any previous error message when user starts typing
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setError(''); // Clear any previous error message when user starts typing
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(event.target.value);
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

  const handleSignup = () => {
    // Perform input validation
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
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

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Call the onSignup prop to handle the signup action
    if (onSignup) {
      onSignup(email, password);
    }
  };

  const handleLoginClick = () => {
    togglePopup(true, <LoginForm />);
  };

  return (
    <>
      <div className={styles['signup-title']}>Sign Up</div>
      {error && <div className={styles.error}>{error}</div>}
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
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm Password"
        />
      </div>
      <div className={styles.links}>
        {/* Use the onLoginClick prop to handle the "Login here" link click */}
        <a href="#" onClick={handleLoginClick}>
          Already have an account? Login here!
        </a>
      </div>
      <div className={styles.btnGroup}>
        <button className={styles.signupBtn} onClick={handleSignup}>
          SIGN UP
        </button>
      </div>
    </>
  );
};

export default SignupForm;
