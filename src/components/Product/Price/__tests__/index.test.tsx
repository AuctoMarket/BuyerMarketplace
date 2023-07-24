import React from 'react';
import { render, screen } from '@testing-library/react';

import Price from '..';

test('renders Price', () => {
  render(<Price data={{ price: 1 }} role="test" />);
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
