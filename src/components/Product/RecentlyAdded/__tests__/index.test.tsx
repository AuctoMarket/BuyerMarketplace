import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import RecentlyAdded from '..';
import { ProductType, Product } from '../../../../types/product.type';

import type { Seller } from '../../../../types/seller.type';

describe('RecentlyAdded', () => {
  const data: {
    products: Product[];
    seller: Seller;
  } = {
    products: [
      {
        id: '1',
        type: ProductType.Bid,
        images: ['test'],
        title: 'test',
        condition: 4,
        description: 'test',
        sellerId: '1',
        bidPrice: 1,
        numBids: 1,
        price: 1,
        postedDate: new Date(),
      },
    ],
    seller: {
      id: '1',
    },
  };

  test('renders RecentlyAdded', async () => {
    render(
      <BrowserRouter>
        <RecentlyAdded data={data} onShowMore={() => {}} role="test" />
      </BrowserRouter>,
    );

    const recommended = await screen.findByRole('test');

    expect(recommended).toBeInTheDocument();
  });
});
