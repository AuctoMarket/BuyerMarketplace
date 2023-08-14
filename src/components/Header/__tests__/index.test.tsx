import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '..';

test('renders Header', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  const text = screen.getByAltText('logo-horizontal-inverted-color');
  expect(text).toBeInTheDocument();
});
