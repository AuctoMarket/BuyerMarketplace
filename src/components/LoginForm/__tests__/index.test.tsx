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

// Test for toggling password visibility for desktop version
test('toggles password visibility for desktop version', () => {
  render(<LoginForm />);

  const passwordInput = screen.getByPlaceholderText('Password');
  const visibilityIcon = screen.getByTestId('password-visibility-icon');

  fireEvent.mouseDown(visibilityIcon);
  expect(passwordInput).toHaveAttribute('type', 'text');

  fireEvent.mouseUp(visibilityIcon);
  expect(passwordInput).toHaveAttribute('type', 'password');
});

// Test for toggling password visibility for mobile version
test('toggles password visibility for mobile version', () => {
  render(<LoginForm />);

  const passwordInput = screen.getByPlaceholderText('Password');
  const visibilityIcon = screen.getByTestId('password-visibility-icon');

  fireEvent.touchStart(visibilityIcon);
  expect(passwordInput).toHaveAttribute('type', 'text');

  fireEvent.touchEnd(visibilityIcon);
  expect(passwordInput).toHaveAttribute('type', 'password');
});
