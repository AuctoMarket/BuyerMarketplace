import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import HotDeals from '..';
import { ProductType, Product } from '../../../../types/product.type';

describe('HotDeals', () => {
  const data: {
    products: Product[];
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
  };

  test('renders HotDeals', async () => {
    render(
      <BrowserRouter>
        <HotDeals data={data} role="test" />
      </BrowserRouter>,
    );

    const recommended = await screen.findByRole('test');

    expect(recommended).toBeInTheDocument();
  });
});
