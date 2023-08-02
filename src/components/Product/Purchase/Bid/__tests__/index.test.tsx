import React from 'react';
import { render, screen } from '@testing-library/react';

import Bid from '..';

import type { Product } from '../../../../../types/product.type';

describe('Bid', () => {
  const data: Pick<Product, 'bidPrice' | 'numBids'> = {
    bidPrice: 1,
    numBids: 1,
  };

  test('renders Bid', () => {
    render(<Bid data={data} role="test" />);
    const text = screen.getByRole('test');
    expect(text).toBeInTheDocument();
  });

  test('renders Bid with data empty', () => {
    render(<Bid data={{}} role="test" />);
    const text = screen.getByRole('test');
    expect(text).toBeInTheDocument();
  });
});
