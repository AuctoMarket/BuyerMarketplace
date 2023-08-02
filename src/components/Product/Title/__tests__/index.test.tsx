import React from 'react';
import { render, screen } from '@testing-library/react';

import Title from '..';

import type { Product } from '../../../../types/product.type';

describe('Title', () => {
  const data: Pick<Product, 'title'> = { title: 'test' };

  test('renders Title', () => {
    render(<Title data={data} role="test" />);
    const text = screen.getByRole('test');
    expect(text).toBeInTheDocument();
  });
});
