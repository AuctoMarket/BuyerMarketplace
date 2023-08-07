import React from 'react';
import { render, screen } from '@testing-library/react';

import Buy from '..';

import type { Product } from '../../../../../types/product.type';

test('renders Buy', () => {
  const data: Pick<Product, 'price'> = { price: 1 };

  render(<Buy data={data} role="test" />);
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
