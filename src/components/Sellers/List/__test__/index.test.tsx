import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import type { Seller } from '../../../../types/seller.type';
import Sellers from '..';

describe('Sellers', () => {
  const data: {
    sellers: Seller[];
  } = {
    sellers: [
      {
        id: '1',
        name: 'TestName1',
        avatar: '/images/product/product-1-image-0.png',
        isVerified: true,
        numFollowers: 100,
      },
      {
        id: '2',
        name: 'TestName2',
        avatar: '/images/product/product-1-image-0.png',
        isVerified: false,
        numFollowers: 100,
      },
    ],
  };
  test('renders List', async () => {
    render(
      <BrowserRouter>
        <Sellers data={data} role="sellers" />;
      </BrowserRouter>,
    );

    const category = await screen.findByRole('sellers');

    expect(category).toBeInTheDocument();
  });
});
