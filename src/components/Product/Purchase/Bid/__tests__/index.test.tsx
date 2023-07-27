import React from 'react';
import { render, screen } from '@testing-library/react';

import Bid from '..';

test('renders Bid', () => {
  render(
    <Bid
      data={{
        currentBid: 1,
        numBids: 1,
      }}
      role="test"
    />,
  );
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
