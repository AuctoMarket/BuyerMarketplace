import React from 'react';
import { render, screen } from '@testing-library/react';

import Horizontal from '..';
import { ProductType, Product } from '../../../../../types/product.type';

describe('Horizontal', () => {
  const data: { product: Product } = {
    product: {
      id: '1',
      type: ProductType.Bid,
      title: 'test',
      condition: 4,
      description: 'test',
      images: ['test'],
      sellerId: '1',
      bidPrice: 1,
      numBids: 1,
      price: 1,
      postedDate: new Date(),
    },
  };

  test('renders Horizontal', async () => {
    render(<Horizontal data={data} role="card" />);

    const card = await screen.findByRole('card');
    expect(card).toBeInTheDocument();
  });
});
