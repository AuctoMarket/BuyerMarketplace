import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import RecentlyAdded from '..';
import { ProductType, Product } from '../../../../types/product.type';

describe('RecentlyAdded', () => {
  const data: {
    products: Product[];
    seeMore?: boolean;
  } = {
    products: [
      {
        id: '1',
        type: ProductType.Bid,
        images: ['test'],
        title: 'test',
        condition: 4,
        description: 'test',
        seller: {
          id: '1',
          name: 'test',
          numFollowers: 1,
        },
        bidPrice: 1,
        numBids: 1,
        price: 1,
        quantity: 1,
        soldQuantity: 1,
        postedDate: new Date(),
      },
    ],
  };

  test('renders RecentlyAdded', async () => {
    render(
      <BrowserRouter>
        <RecentlyAdded data={data} role="test" />
      </BrowserRouter>,
    );

    const recommended = await screen.findByRole('test');

    expect(recommended).toBeInTheDocument();
  });

  test('renders RecentlyAdded without seeMore link', async () => {
    render(
      <BrowserRouter>
        <RecentlyAdded data={{ ...data, seeMore: false }} role="test" />
      </BrowserRouter>,
    );

    const recommended = await screen.findByRole('test');

    expect(recommended).toBeInTheDocument();
  });
});
