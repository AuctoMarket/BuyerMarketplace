import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import MoreFromSeller from '..';
import { ProductType, Product } from '../../../../types/product.type';

import type { Seller } from '../../../../types/seller.type';

describe('MoreFromSeller', () => {
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
        seller: {
          id: '1',
        },
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

  test('renders MoreFromSeller', () => {
    render(
      <BrowserRouter>
        <MoreFromSeller data={data} role="test" />,
      </BrowserRouter>,
    );
    const text = screen.getByRole('test');
    expect(text).toBeInTheDocument();
  });
});
