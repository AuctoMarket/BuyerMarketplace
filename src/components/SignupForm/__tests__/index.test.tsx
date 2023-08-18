import { render, fireEvent, screen } from '@testing-library/react';
import SignupForm from '../../SignupForm';

// Test for empty fields
test('displays an error message for empty fields', () => {
  render(<SignupForm />);
  const signupButton = screen.getByTestId('signup-button');
  fireEvent.click(signupButton);

  const errorMessage = screen.getByTestId('error-message');
  expect(errorMessage).toHaveTextContent('Please fill in all fields.');
});

// Test for invalid email
test('displays an error message for invalid email format', () => {
  render(<SignupForm />);
  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'invalid_email' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: 'abcd1234!' } });

  const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
  fireEvent.change(confirmPasswordInput, { target: { value: 'abcd1234!' } });

  const signupButton = screen.getByTestId('signup-button');
  fireEvent.click(signupButton);

  const errorMessage = screen.getByTestId('email-error-message');
  expect(errorMessage).toHaveTextContent(
    'Incorrect email format. Please enter a valid email address.',
  );
});

// Test for invalid password - password not longer than 8 characters
test('displays an error message for invalid password', () => {
  render(<SignupForm />);
  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'valid_email@gmail.com' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: 'abcd12!' } });

  const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
  fireEvent.change(confirmPasswordInput, { target: { value: 'abcd12!' } });

  const signupButton = screen.getByTestId('signup-button');
  fireEvent.click(signupButton);

  const errorMessage = screen.getByTestId('password-error-message');
  expect(errorMessage).toHaveTextContent(
    'Password must be at least 8 characters long.',
  );
});

// Test for invalid password - password does not have a number
test('displays an error message for password without a number', () => {
  render(<SignupForm />);
  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'valid_email@gmail.com' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: 'abcdefg!' } });

  const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
  fireEvent.change(confirmPasswordInput, { target: { value: 'abcdefg!' } });

  const signupButton = screen.getByTestId('signup-button');
  fireEvent.click(signupButton);

  const errorMessage = screen.getByTestId('password-error-message');
  expect(errorMessage).toHaveTextContent(
    'Password must contain at least 1 digit (0-9).',
  );
});

// Test for invalid password - password does not have a symbol
test('displays an error message for password without a symbol', () => {
  render(<SignupForm />);
  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'valid_email@gmail.com' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: '123abcdef' } });

  const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
  fireEvent.change(confirmPasswordInput, { target: { value: '123abcdef' } });

  const signupButton = screen.getByTestId('signup-button');
  fireEvent.click(signupButton);

  const errorMessage = screen.getByTestId('password-error-message');
  expect(errorMessage).toHaveTextContent(
    'Password must contain at least 1 special character.',
  );
});

// Test for invalid password - password does not match
test('displays an error message for passwords that do not match', () => {
  render(<SignupForm />);
  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'valid_email@gmail.com' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: '1234abcd!' } });

  const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
  fireEvent.change(confirmPasswordInput, { target: { value: '123acb!' } });

  const signupButton = screen.getByTestId('signup-button');
  fireEvent.click(signupButton);

  const errorMessage = screen.getByTestId('password-error-message');
  expect(errorMessage).toHaveTextContent(
    'Passwords do not match. Please check that they are the same.',
  );
});

// Test for toggling password visibility for desktop version
test('toggles password visibility for desktop version', () => {
  render(<SignupForm />);

  const passwordInput = screen.getByPlaceholderText('Password');
  const visibilityIcon = screen.getByTestId('password-visibility-icon');

  const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
  const visibilityIcon2 = screen.getByTestId('password-visibility-icon-2');

  fireEvent.mouseDown(visibilityIcon);
  expect(passwordInput).toHaveAttribute('type', 'text');

  fireEvent.mouseUp(visibilityIcon);
  expect(passwordInput).toHaveAttribute('type', 'password');

  fireEvent.mouseDown(visibilityIcon2);
  expect(confirmPasswordInput).toHaveAttribute('type', 'text');

  fireEvent.mouseUp(visibilityIcon2);
  expect(confirmPasswordInput).toHaveAttribute('type', 'password');
});

// Test for toggling password visibility for mobile version
test('toggles password visibility for mobile version', () => {
  render(<SignupForm />);

  const passwordInput = screen.getByPlaceholderText('Password');
  const visibilityIcon = screen.getByTestId('password-visibility-icon');

  const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
  const visibilityIcon2 = screen.getByTestId('password-visibility-icon-2');

  fireEvent.touchStart(visibilityIcon);
  expect(passwordInput).toHaveAttribute('type', 'text');

  fireEvent.touchEnd(visibilityIcon);
  expect(passwordInput).toHaveAttribute('type', 'password');

  fireEvent.touchStart(visibilityIcon2);
  expect(confirmPasswordInput).toHaveAttribute('type', 'text');

  fireEvent.touchEnd(visibilityIcon2);
  expect(confirmPasswordInput).toHaveAttribute('type', 'password');
});
