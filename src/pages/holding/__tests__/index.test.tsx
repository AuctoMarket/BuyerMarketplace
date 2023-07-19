import React from 'react';
import { render, screen } from '@testing-library/react';

import HoldingPage from '..';

test('renders HoldingPage', () => {
  render(<HoldingPage />);
  const text = screen.getByText(
    'Thank you for your interest, we are currently making some changes and will be back shortly!',
  );
  expect(text).toBeInTheDocument();
});
