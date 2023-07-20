import React from 'react';
import { render, screen } from '@testing-library/react';

import HoldingPage from '..';

test('renders HoldingPage', () => {
  render(<HoldingPage />);
  const text1 = screen.getByText('Collectible Marketplace');
  const text2 = screen.getByText('Launching in late 2023');
  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});
