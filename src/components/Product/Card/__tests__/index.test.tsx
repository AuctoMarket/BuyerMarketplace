import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from '..';

test('renders Card', () => {
  render(
    <Card
      data={{
        id: '1',
        type: 'normal',
        images: ['test'],
        title: 'test',
        sellerInfo: {
          name: 'test',
          avatar: 'test',
          isVerified: true,
          numFollowers: 1,
        },
        purchase: {
          currentBid: 1,
          numBids: 1,
          buyNowPrice: 1,
        },
        postedDate: 'test',
      }}
      role="test"
    />,
  );
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
