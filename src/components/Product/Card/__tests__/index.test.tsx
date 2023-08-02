import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from '..';
import { ProductType, Product } from '../../../../types/product.type';

describe('Card', () => {
  const data: Product = {
    id: '1',
    type: ProductType.Bid,
    title: 'test',
    condition: 4,
    description: 'test',
    images: ['test'],
    seller: {
      id: '1',
    },
    bidPrice: 1,
    numBids: 1,
    price: 1,
    postedDate: new Date(),
  };

  test('renders Card', async () => {
    render(<Card data={data} role="card" />);

    const card = await screen.findByRole('card');
    expect(card).toBeInTheDocument();
  });

  test('renders Card pre-order', async () => {
    render(<Card data={{ ...data, type: ProductType.PreOrder }} role="card" />);

    const card = await screen.findByRole('card');
    expect(card).toBeInTheDocument();
  });

  test('renders Card without images & bidPrice', async () => {
    render(
      <Card
        data={{ ...data, images: undefined, bidPrice: undefined }}
        role="card"
      />,
    );

    const card = await screen.findByRole('card');
    expect(card).toBeInTheDocument();
  });
});
