import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '..';
import type { Seller } from '../../../../types/seller.type';

describe('Seller', () => {
  const data: {
    seller: Seller;
  } = {
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
});
