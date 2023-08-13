import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Buy from '..';

import type { Product } from '../../../../../types/product.type';

test('renders Buy', () => {
  const data: Pick<Product, 'price'> = { price: 1 };

  render(
    <BrowserRouter>
      <Buy data={data} role="test" />
    </BrowserRouter>,
  );
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
