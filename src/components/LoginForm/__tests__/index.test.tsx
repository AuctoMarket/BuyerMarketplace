import { render, fireEvent, screen } from '@testing-library/react';
import LoginForm from '../../LoginForm';

// Test for empty fields
test('displays an error message for empty fields', () => {
  render(<LoginForm />);

  const loginButton = screen.getByTestId('login-button');
  fireEvent.click(loginButton);

  const errorMessage = screen.getByTestId('error-message');
  expect(errorMessage).toHaveTextContent('Please fill in all fields.');
});

// Test for invalid email
test('displays an error message for invalid email format', () => {
  render(<LoginForm />);

  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'invalid_email' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: 'abc123!' } });

  const loginButton = screen.getByTestId('login-button');
  fireEvent.click(loginButton);

  const errorMessage = screen.getByTestId('error-message');
  expect(errorMessage).toHaveTextContent('Please enter a valid email address.');
});

// Test for invalid password - password not longer than 6 characters
test('displays an error message for invalid password', () => {
  render(<LoginForm />);

  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'valid_email@gmail.com' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: 'abcd' } });

  const loginButton = screen.getByTestId('login-button');
  fireEvent.click(loginButton);

  const errorMessage = screen.getByTestId('error-message');
  expect(errorMessage).toHaveTextContent(
    'Password should be longer than 6 characters, with at least 1 letter, 1 number, and 1 symbol.',
  );
});

// Test for invalid password - password does not have a letter
test('displays an error message for password without a letter', () => {
  render(<LoginForm />);

  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'valid_email@gmail.com' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: '123456' } });

  const loginButton = screen.getByTestId('login-button');
  fireEvent.click(loginButton);

  const errorMessage = screen.getByTestId('error-message');
  expect(errorMessage).toHaveTextContent(
    'Password should be longer than 6 characters, with at least 1 letter, 1 number, and 1 symbol.',
  );
});

// Test for invalid password - password does not have a number
test('displays an error message for password without a number', () => {
  render(<LoginForm />);

  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'valid_email@gmail.com' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: 'abcdef' } });

  const loginButton = screen.getByTestId('login-button');
  fireEvent.click(loginButton);

  const errorMessage = screen.getByTestId('error-message');
  expect(errorMessage).toHaveTextContent(
    'Password should be longer than 6 characters, with at least 1 letter, 1 number, and 1 symbol.',
  );
});

// Test for invalid password - password does not have a symbol
test('displays an error message for password without a symbol', () => {
  render(<LoginForm />);

  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'valid_email@gmail.com' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: 'abc123' } });

  const loginButton = screen.getByTestId('login-button');
  fireEvent.click(loginButton);

  const errorMessage = screen.getByTestId('error-message');
  expect(errorMessage).toHaveTextContent(
    'Password should be longer than 6 characters, with at least 1 letter, 1 number, and 1 symbol.',
  );
});
