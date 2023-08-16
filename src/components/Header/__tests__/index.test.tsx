import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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
  const loginButton = screen.getByText('Login');
  const signupButton = screen.getByText('Signup');
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
  const mobileLoginButton = screen.getByText('Login');
  const mobileSignupButton = screen.getByText('Signup');
  expect(mobileLoginButton).toBeInTheDocument();
  expect(mobileSignupButton).toBeInTheDocument();
});

// Test clicking the login button triggers the login popup
test('opens login popup when clicking login button', async () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );

  const loginButton = screen.getByText('Login');
  loginButton.click();

  await waitFor(() => {
    const loginPopup = screen.getByText('Login');
    expect(loginPopup).toBeInTheDocument();
  });
});

// Test clicking the signup button triggers the signup popup
test('opens signup popup when clicking signup button', async () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );

  const signupButton = screen.getByText('Signup');
  signupButton.click();

  await waitFor(() => {
    const signupPopup = screen.getByText('Signup');
    expect(signupPopup).toBeInTheDocument();
  });
});
