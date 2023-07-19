import React from 'react';
import { render, screen } from '@testing-library/react';

import LogoHorizontalWhite from '..';

test('renders LogoHorizontalWhite', () => {
  render(<LogoHorizontalWhite />);
  const component = screen.getByAltText('logo-horizontal-white');
  expect(component).toBeInTheDocument();
});
