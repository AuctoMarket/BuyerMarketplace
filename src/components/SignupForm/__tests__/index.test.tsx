import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignupForm from '../../SignupForm';
import { PopupContext } from '../../Popup'; // Import the PopupContext

test('renders SignupForm', () => {
  // Render the SignupForm component with the PopupContext.Provider
  render(
    <PopupContext.Provider
      value={{ togglePopup: jest.fn(), popupOpen: false, popupContent: null }}
    >
      <SignupForm />
    </PopupContext.Provider>,
  );

  // Find elements based on their placeholders or text content
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const signupButton = screen.getByText('SIGN UP');

  // Check if elements are present on the screen
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(signupButton).toBeInTheDocument();
});

// Test for empty fields
test('displays an error message for empty fields', () => {
  // Render the SignupForm component with the PopupContext.Provider
  render(
    <PopupContext.Provider
      value={{ togglePopup: jest.fn(), popupOpen: false, popupContent: null }}
    >
      <SignupForm />
    </PopupContext.Provider>,
  );

  // Find the signup button and click it without filling the fields
  const signupButton = screen.getByText('SIGN UP');
  fireEvent.click(signupButton);

  // Check if the error message is displayed
  const errorMessage = screen.getByText('Please fill in all fields.');
  expect(errorMessage).toBeInTheDocument();
});
