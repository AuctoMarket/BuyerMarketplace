import React from 'react';
import { render, screen } from '@testing-library/react';

import Logo from '..';

describe('Logo', () => {
  test('renders Logo', async () => {
    render(<Logo theme="white" />);

    const logo = await screen.findByAltText('logo-white');
    expect(logo).toBeInTheDocument();
  });

  test('renders Logo with type', async () => {
    render(<Logo type="horizontal" theme="white" />);

    const logo = await screen.findByAltText('logo-horizontal-white');
    expect(logo).toBeInTheDocument();
  });
});
