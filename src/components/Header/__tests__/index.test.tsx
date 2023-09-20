import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '..';

describe('<Header />', () => {
  test('renders Header with guest', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const text = screen.getByAltText('logo-horizontal-inverted-color');

    expect(text).toBeInTheDocument();
  });

  test('renders Header when logged in', () => {
    localStorage.setItem(
      'userData',
      JSON.stringify({ email: 'test@test.com', buyer_id: 'test' }),
    );
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const text = screen.getByAltText('logo-horizontal-inverted-color');

    expect(text).toBeInTheDocument();
  });

  test('renders Header with mobile logo', () => {
    window.innerWidth = 640;
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const text = screen.getByAltText('logo-color');

    expect(text).toBeInTheDocument();
  });
});
