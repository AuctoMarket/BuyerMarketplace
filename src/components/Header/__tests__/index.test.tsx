import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '..';

// Test if the header is rendered
test('renders Header', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  const text = screen.getByAltText('logo-horizontal-inverted-color');
  expect(text).toBeInTheDocument();
});

// Test if login and signup buttons are rendered when the user is not logged in
test('renders login and signup buttons when user is not logged in', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  const loginButton = screen.getByTestId('login-desktop-button');
  const signupButton = screen.getByTestId('signup-desktop-button');
  expect(loginButton).toBeInTheDocument();
  expect(signupButton).toBeInTheDocument();
});

// Test if mobile login and signup buttons are rendered when the user is not logged in
test('renders mobile login and signup buttons when user is not logged in', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  const mobileLoginButton = screen.getByTestId('login-mobile-button');
  const mobileSignupButton = screen.getByTestId('signup-mobile-button');
  expect(mobileLoginButton).toBeInTheDocument();
  expect(mobileSignupButton).toBeInTheDocument();
});
