import React from 'react';
import { render, screen } from '@testing-library/react';

import Seller from '..';

describe('Seller', () => {
  const data = {
    seller: {
      name: 'Test',
      avatar: 'ImageTest',
      follow: '74',
      numberbookmark: 7,
    },
  };

  test('renders Seller', async () => {
    render(<Seller data={data} role="seller" />);

    const category = await screen.findByRole('seller');
    expect(category).toBeInTheDocument();
  });
});
