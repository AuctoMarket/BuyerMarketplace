import React from 'react';
import { render, screen } from '@testing-library/react';

import Star from '..';

test('renders Star without any props', () => {
  render(<Star />);
  const text = screen.getByAltText('star-white');
  expect(text).toBeInTheDocument();
});

test('renders Star with theme is black', () => {
  render(<Star theme="black" />);
  const text = screen.getByAltText('star-black');
  expect(text).toBeInTheDocument();
});
