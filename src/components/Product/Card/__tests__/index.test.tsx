import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from '..';
import { ProductType, Product } from '../../../../types/product.type';

import type { Seller } from '../../../../types/seller.type';

describe('Card', () => {
  const data: { product: Product; seller: Seller } = {
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
    seller: {
      id: '1',
    },
  };

  test('renders Card', async () => {
    render(<Card data={data} role="card" />);

    const card = await screen.findByRole('card');
    expect(card).toBeInTheDocument();
  });

  test('renders Card pre-order', async () => {
    render(
      <Card
        data={{
          ...data,
          product: { ...data.product, type: ProductType.PreOrder },
        }}
        role="card"
      />,
    );

    const card = await screen.findByRole('card');
    expect(card).toBeInTheDocument();
  });

  test('renders Card without images & bidPrice', async () => {
    render(
      <Card
        data={{
          ...data,
          product: { ...data.product, images: undefined, bidPrice: undefined },
        }}
        role="card"
      />,
    );

    const card = await screen.findByRole('card');
    expect(card).toBeInTheDocument();
  });
});
