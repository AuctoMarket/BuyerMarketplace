import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from '..';

describe('Card', () => {
  const data = {
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
  };

  test('renders Card', async () => {
    render(<Card data={data} role="card" />);

    const card = await screen.findByRole('card');
    expect(card).toBeInTheDocument();
  });

  test('renders Card pre-order', async () => {
    render(<Card data={{ ...data, type: 'pre-order' }} role="card" />);

    const card = await screen.findByRole('card');
    expect(card).toBeInTheDocument();
  });
});
