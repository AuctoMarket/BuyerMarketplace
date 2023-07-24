import React from 'react';
import { render, screen } from '@testing-library/react';

import Title from '..';

test('renders Title', () => {
  render(<Title data={{ title: 'test' }} role="test" />);
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
