import React from 'react';
import { render, screen } from '@testing-library/react';

import SellerInfo from '..';

import type { Seller } from '../../../../types/seller.type';

describe('SellerInfo', () => {
  const data: Seller = {
    id: '1',
    avatar: 'test',
    name: 'test',
    isVerified: true,
    numFollowers: 1,
  };

  test('renders SellerInfo', () => {
    render(<SellerInfo data={data} role="test" />);
    const text = screen.getByRole('test');
    expect(text).toBeInTheDocument();
  });

  test('renders SellerInfo without avatar', () => {
    render(
      <SellerInfo
        data={{
          ...data,
          avatar: undefined,
        }}
        role="test"
      />,
    );
    const text = screen.getByRole('test');
    expect(text).toBeInTheDocument();
  });
});
