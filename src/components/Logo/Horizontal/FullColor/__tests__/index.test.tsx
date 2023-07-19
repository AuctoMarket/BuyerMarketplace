import React from 'react';
import { render, screen } from '@testing-library/react';

import LogoHorizontalFullColor from '..';

test('renders LogoHorizontalFullColor', () => {
  render(<LogoHorizontalFullColor />);
  const component = screen.getByAltText('logo-horizontal-full-color');
  expect(component).toBeInTheDocument();
});
