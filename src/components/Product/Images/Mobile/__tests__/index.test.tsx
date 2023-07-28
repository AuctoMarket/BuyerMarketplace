import React from 'react';
import { render, screen } from '@testing-library/react';

import Mobile from '..';

test('renders Mobile', () => {
  render(<Mobile data={{ type: 'normal', images: [] }} role="test" />);
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
