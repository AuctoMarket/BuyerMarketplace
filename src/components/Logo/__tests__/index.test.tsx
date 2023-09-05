import React from 'react';
import { render, screen } from '@testing-library/react';

import Logo from '..';

describe('Logo', () => {
  test('renders Logo', async () => {
    render(<Logo theme="white" />);

    const logo = await screen.findByAltText('logo-white');
    expect(logo).toBeInTheDocument();
  });

  test('renders Logo with type vertical', async () => {
    render(<Logo type="vertical" theme="white" />);

    const logo = await screen.findByAltText('logo-vertical-white');
    expect(logo).toBeInTheDocument();
  });

  test('renders Logo with horizontal slogan', async () => {
    render(<Logo type="horizontal" slogan theme="white" />);

    const logo = await screen.findByAltText('logo-horizontal-slogan-white');
    expect(logo).toBeInTheDocument();
  });
});
