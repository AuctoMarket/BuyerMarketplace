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
  fireEvent.change(passwordInput, { target: { value: 'abc123!' } });

  const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
  fireEvent.change(confirmPasswordInput, { target: { value: 'abc123!' } });

  const signupButton = screen.getByTestId('signup-button');
  fireEvent.click(signupButton);

  const errorMessage = screen.getByTestId('error-message');
  expect(errorMessage).toHaveTextContent('Please enter a valid email address.');
});

// Test for invalid password - password not longer than 6 characters
test('displays an error message for invalid password', () => {
  render(<SignupForm />);
  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'valid_email@gmail.com' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: 'abcd' } });

  const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
  fireEvent.change(confirmPasswordInput, { target: { value: 'abcd' } });

  const signupButton = screen.getByTestId('signup-button');
  fireEvent.click(signupButton);

  const errorMessage = screen.getByTestId('error-message');
  expect(errorMessage).toHaveTextContent(
    'Password should be longer than 6 characters, with at least 1 letter, 1 number, and 1 symbol.',
  );
});

// Test for invalid password - password does not have a letter
test('displays an error message for password without a letter', () => {
  render(<SignupForm />);
  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'valid_email@gmail.com' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: '123456' } });

  const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
  fireEvent.change(confirmPasswordInput, { target: { value: '123456' } });

  const signupButton = screen.getByTestId('signup-button');
  fireEvent.click(signupButton);

  const errorMessage = screen.getByTestId('error-message');
  expect(errorMessage).toHaveTextContent(
    'Password should be longer than 6 characters, with at least 1 letter, 1 number, and 1 symbol.',
  );
});

// Test for invalid password - password does not have a number
test('displays an error message for password without a number', () => {
  render(<SignupForm />);
  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'valid_email@gmail.com' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: 'abcdef' } });

  const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
  fireEvent.change(confirmPasswordInput, { target: { value: 'abcdef' } });

  const signupButton = screen.getByTestId('signup-button');
  fireEvent.click(signupButton);

  const errorMessage = screen.getByTestId('error-message');
  expect(errorMessage).toHaveTextContent(
    'Password should be longer than 6 characters, with at least 1 letter, 1 number, and 1 symbol.',
  );
});

// Test for invalid password - password does not have a symbol
test('displays an error message for password without a symbol', () => {
  render(<SignupForm />);
  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'valid_email@gmail.com' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: '123abc' } });

  const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
  fireEvent.change(confirmPasswordInput, { target: { value: '123abc' } });

  const signupButton = screen.getByTestId('signup-button');
  fireEvent.click(signupButton);

  const errorMessage = screen.getByTestId('error-message');
  expect(errorMessage).toHaveTextContent(
    'Password should be longer than 6 characters, with at least 1 letter, 1 number, and 1 symbol.',
  );
});

// Test for invalid password - password does not match
test('displays an error message for passwords that do not match', () => {
  render(<SignupForm />);
  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'valid_email@gmail.com' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: '123abc!' } });

  const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
  fireEvent.change(confirmPasswordInput, { target: { value: '123acb!' } });

  const signupButton = screen.getByTestId('signup-button');
  fireEvent.click(signupButton);

  const errorMessage = screen.getByTestId('error-message');
  expect(errorMessage).toHaveTextContent('Passwords do not match.');
});
