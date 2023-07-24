import React from 'react';
import { render, screen } from '@testing-library/react';

import PostedDate from '..';

test('renders PostedDate', () => {
  render(<PostedDate data={{ postedDate: 'test' }} role="test" />);
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
