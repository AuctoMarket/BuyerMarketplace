import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '..';
import type { Seller } from '../../../../types/seller.type';

describe('Seller', () => {
  const data: {
    index: string;
    seller: Seller;
  } = {
    index: '1',
    seller: {
      id: '1',
      name: 'TestName1',
      avatar: '/images/product/product-1-image-0.png',
      isVerified: true,
      numFollowers: 100,
    },
  };

  test('renders Seller', async () => {
    render(<Card data={data} role="seller" />);

    const category = await screen.findByRole('seller');
    expect(category).toBeInTheDocument();
  });

  test('renders Seller without avatar & unverified', async () => {
    render(
      <Card
        data={{
          ...data,
          seller: { ...data.seller, avatar: undefined, isVerified: false },
        }}
        role="seller"
      />,
    );

    const category = await screen.findByRole('seller');
    expect(category).toBeInTheDocument();
  });
});
