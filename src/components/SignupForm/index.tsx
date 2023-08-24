import React, { useState, useContext } from 'react';
import styles from './index.module.scss'; // You can create the CSS module file for SignupForm
import { PopupContext } from '../Popup'; // Import the PopupContext
import LoginForm from '../LoginForm';
import Icon from '../Icon';

interface SignupFormProps {
  onSignup?: (email: string, password: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const { togglePopup } = useContext(PopupContext); // Use the PopupContext

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isMouseUp, setIsMouseUp] = useState(false);
  const [isMouseUp2, setIsMouseUp2] = useState(false);

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

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(event.target.value);
    setPasswordError('');
    setError('');
  };

  const validateEmail = (email: string) => {
    // Regular expression to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const lengthRegex = /^.{8,}$/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;

    if (!lengthRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters long.');
      return false;
    }

    if (!digitRegex.test(password)) {
      setPasswordError('Password must contain at least 1 digit (0-9).');
      return false;
    }

    if (!specialCharRegex.test(password)) {
      setPasswordError('Password must contain at least 1 special character.');
      return false;
    }

    // If all conditions pass, the password is valid
    setPasswordError('');
    return true;
  };

  const handleSignup = async () => {
    // Perform input validation
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setEmailError(
        'Incorrect email format. Please enter a valid email address.',
      );
      return;
    }

    // Validate password format
    if (!validatePassword(password)) {
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordError(
        'Passwords do not match. Please check that they are the same.',
      );
      return;
    }

    try {
      // Call the onSignup prop to handle the signup action
      if (onSignup) {
        await onSignup(email, password);
      }
    } catch (error) {
      setEmailError('Email is already in use. Please use another email.');
      setError('');
      return;
    }
  };

  const handleLoginClick = () => {
    if (togglePopup) {
      togglePopup(true, <LoginForm />);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleMouseDown = () => {
    setIsMouseUp(false);
    setShowPassword(true); // Password is visible when mouse is down
  };

  const handleMouseUp = () => {
    setIsMouseUp(true);
    setShowPassword(false); // Password is hidden when mouse is released
  };

  const handleMouseDown2 = () => {
    setIsMouseUp2(false);
    setShowConfirmPassword(true); // Password is visible when mouse is down
  };

  const handleMouseUp2 = () => {
    setIsMouseUp2(true);
    setShowConfirmPassword(false); // Password is hidden when mouse is released
  };

  const handleContextMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.preventDefault(); // Prevent the default context menu
  };

  return (
    <>
      <div className={styles['signup-title']}>Sign Up</div>
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
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
      </div>
      <div className={styles.inputGroup}>
        {passwordError && (
          <div className={styles.error} data-testid="password-error-message">
            {passwordError}
          </div>
        )}
        <div className={styles.passwordInput}>
          <input
            type={isMouseUp || !showPassword ? 'password' : 'text'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <Icon
            name="password-visibility"
            className={styles.visibilityIcon}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onContextMenu={handleContextMenu}
            onClick={togglePasswordVisibility}
            data-testid="password-visibility-icon"
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.passwordInput}>
          <input
            type={isMouseUp2 || !showConfirmPassword ? 'password' : 'text'}
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm Password"
          />
          <Icon
            name="password-visibility"
            className={styles.visibilityIcon}
            onMouseDown={handleMouseDown2}
            onMouseUp={handleMouseUp2}
            onTouchStart={handleMouseDown2}
            onTouchEnd={handleMouseUp2}
            onContextMenu={handleContextMenu}
            onClick={togglePasswordVisibility}
            data-testid="password-visibility-icon-2"
          />
        </div>
      </div>
      <div className={styles.links}>
        {/* Use the onLoginClick prop to handle the "Login here" link click */}
        <button className={styles.a} onClick={handleLoginClick}>
          Already have an account? Login here!
        </button>
      </div>
      <div className={styles.btnGroup}>
        <button
          className={styles.signupBtn}
          onClick={handleSignup}
          data-testid="signup-button"
        >
          SIGN UP
        </button>
      </div>
    </>
  );
};

export default SignupForm;
