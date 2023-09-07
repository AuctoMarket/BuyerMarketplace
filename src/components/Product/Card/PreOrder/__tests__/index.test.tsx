import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from '..';
import { ProductType, Product } from '../../../../../types/product.type';

describe('Card', () => {
  const data: { product: Product } = {
    product: {
      id: '1',
      type: ProductType.BuyNow,
      title: 'test',
      condition: 4,
      description: 'test',
      images: ['test'],
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
  };

  test('renders Card', async () => {
    render(<Card data={data} role="card" />);

    const card = await screen.findByRole('card');
    expect(card).toBeInTheDocument();
  });

  test('renders Card with type Pre-Order', async () => {
    render(
      <Card
        data={{
          ...data,
          product: {
            ...data.product,
            discount: 1,
            type: ProductType.PreOrder,
            releasedDate: new Date(),
            orderedDate: new Date(),
          },
        }}
        role="card"
      />,
    );

    const card = await screen.findByRole('card');
    expect(card).toBeInTheDocument();
  });
});
