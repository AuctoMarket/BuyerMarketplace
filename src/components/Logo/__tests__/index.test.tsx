import React from 'react';
import { render, screen } from '@testing-library/react';

import Logo from '..';

test('renders Logo', () => {
  render(<Logo type="horizontal" theme="white" />);
  const text = screen.getByAltText('logo-horizontal-white');
  expect(text).toBeInTheDocument();
});
