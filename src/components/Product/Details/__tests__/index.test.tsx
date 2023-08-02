import React from 'react';
import { render, screen } from '@testing-library/react';

import Details from '..';

import type { Product } from '../../../../types/product.type';

describe('Details', () => {
  const data: Pick<Product, 'condition' | 'description'> = {
    condition: 5,
    description: '',
  };

  test('renders Details', () => {
    render(<Details data={data} role="test" />);
    const text = screen.getByRole('test');
    expect(text).toBeInTheDocument();
  });
});
