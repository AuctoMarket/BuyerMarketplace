import React from 'react';
import { render, screen } from '@testing-library/react';

import Verified from '..';

test('renders Verified', () => {
  render(<Verified />);
  const text = screen.getByAltText('verified');
  expect(text).toBeInTheDocument();
});
