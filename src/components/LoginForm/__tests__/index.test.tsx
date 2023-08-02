import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../../LoginForm';
import { PopupContext } from '../../Popup'; // Import the PopupContext

describe('LoginForm', () => {
  it('renders LoginForm', () => {
    // Render the LoginForm component with the PopupContext.Provider
    render(
      <PopupContext.Provider
        value={{ togglePopup: jest.fn(), popupOpen: false, popupContent: null }}
      >
        <LoginForm />
      </PopupContext.Provider>,
    );

    // Find elements based on their placeholders or text content
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('LOGIN');

    // Check if elements are present on the screen
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  // Test for empty fields
  it('displays an error message for empty fields', () => {
    // Render the LoginForm component with the PopupContext.Provider
    render(
      <PopupContext.Provider
        value={{ togglePopup: jest.fn(), popupOpen: false, popupContent: null }}
      >
        <LoginForm />
      </PopupContext.Provider>,
    );

    // Find the login button and click it without filling the fields
    const loginButton = screen.getByText('LOGIN');
    fireEvent.click(loginButton);

    // Check if the error message is displayed
    const errorMessage = screen.getByText('Please fill in all fields.');
    expect(errorMessage).toBeInTheDocument();
  });
});
