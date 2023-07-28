import React from 'react';
import { render, screen } from '@testing-library/react';

import Images from '..';

test('renders Images', () => {
  render(<Images data={{ type: 'normal', images: [] }} role="test" />);
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
