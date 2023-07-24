import React from 'react';
import { render, screen } from '@testing-library/react';

import Purchase from '..';

test('renders Purchase', () => {
  render(
    <Purchase
      data={{
        currentBid: 1,
        numBids: 1,
        buyNowPrice: 1,
      }}
      role="test"
    />,
  );
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
