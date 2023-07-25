import React from 'react';
import { render, screen } from '@testing-library/react';

import MoreFromSeller from '..';

test('renders MoreFromSeller', () => {
  render(
    <MoreFromSeller
      data={{
        products: [
          {
            id: '1',
            type: 'normal',
            image: 'test',
            title: 'test',
            sellerInfo: {
              name: 'test',
              avatar: 'test',
              isVerified: true,
              numReviews: 1,
            },
            purchase: {
              currentBid: 1,
              numBids: 1,
              buyNowPrice: 1,
            },
            postedDate: 'test',
          },
        ],
        sellerInfo: {
          id: '1',
          name: 'Seller name',
          avatar: '/images/icon/color.svg',
          isVerified: true,
          numReviews: 74,
        },
      }}
      role="test"
    />,
  );
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
