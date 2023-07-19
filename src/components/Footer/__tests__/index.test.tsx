import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from '..';

test('renders Footer', () => {
  render(<Footer />);
  const text = screen.getByText('Copyright © 2023 Aucto. All rights reserved');
  expect(text).toBeInTheDocument();
});
