import React from 'react';
import { render, screen } from '@testing-library/react';

import Price from '..';

import type { Product } from '../../../../types/product.type';

describe('Price', () => {
  const data: Pick<Product, 'price'> = { price: 10 };

  test('renders Price', () => {
    render(<Price data={data} role="test" />);
    const text = screen.getByRole('test');
    expect(text).toBeInTheDocument();
  });
});
