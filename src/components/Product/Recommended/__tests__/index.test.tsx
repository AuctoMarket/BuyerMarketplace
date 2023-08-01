import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import Recommended from '..';

describe('Recommended', () => {
  const data = {
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
  };

  test('renders Recommended', async () => {
    render(
      <BrowserRouter>
        <Recommended data={data} onShowMore={() => {}} role="test" />
      </BrowserRouter>,
    );

    const recommended = await screen.findByRole('test');
    const showMore = await screen.findByText('Show more');
    userEvent.click(showMore);

    expect(recommended).toBeInTheDocument();
  });

  test('renders Recommended with showMoreText', async () => {
    render(
      <BrowserRouter>
        <Recommended
          data={data}
          onShowMore={() => {}}
          showMoreText="test"
          role="test"
        />
      </BrowserRouter>,
    );

    const recommended = await screen.findByRole('test');
    expect(recommended).toBeInTheDocument();
  });
});
