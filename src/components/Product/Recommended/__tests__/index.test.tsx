import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Recommended from '..';

test('renders Recommended', () => {
  render(
    <BrowserRouter>
      <Recommended
        data={{
          products: [
            {
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
            },
          ],
        }}
        onShowMore={() => {}}
        role="test"
      />
    </BrowserRouter>,
  );
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
