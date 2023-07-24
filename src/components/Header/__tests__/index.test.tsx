import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '..';

test('renders Header', () => {
  render(<Header />);
  const text = screen.getByAltText('logo-horizontal-inverted-color');
  expect(text).toBeInTheDocument();
});
