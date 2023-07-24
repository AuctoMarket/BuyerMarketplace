import React from 'react';
import { render, screen } from '@testing-library/react';

import Input from '..';

test('renders Input', () => {
  render(<Input role="test" />);
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
