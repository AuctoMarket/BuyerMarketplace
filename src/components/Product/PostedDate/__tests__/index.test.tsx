import React from 'react';
import { render, screen } from '@testing-library/react';

import PostedDate from '..';

import type { Product } from '../../../../types/product.type';

describe('PostedDate', () => {
  const data: Pick<Product, 'postedDate'> = { postedDate: new Date() };

  test('renders PostedDate', () => {
    render(<PostedDate data={data} role="test" />);
    const text = screen.getByRole('test');
    expect(text).toBeInTheDocument();
  });
});
