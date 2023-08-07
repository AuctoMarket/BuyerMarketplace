import React from 'react';
import { render, screen } from '@testing-library/react';

import PreOrder from '..';

import type { Product } from '../../../../../types/product.type';

describe('PreOrder', () => {
  const data: Pick<Product, 'price'> = { price: 1 };

  test('renders PreOrder', () => {
    render(<PreOrder data={data} role="test" />);
    const text = screen.getByRole('test');
    expect(text).toBeInTheDocument();
  });
});
