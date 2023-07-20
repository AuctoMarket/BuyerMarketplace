import React from 'react';
import { render, screen } from '@testing-library/react';

import LogoVerticalFullColor from '..';

test('renders LogoVerticalFullColor', () => {
  render(<LogoVerticalFullColor />);
  const component = screen.getByAltText('logo-vertical-full-color');
  expect(component).toBeInTheDocument();
});
