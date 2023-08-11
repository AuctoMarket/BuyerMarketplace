import React from 'react';
import { render, screen } from '@testing-library/react';

import Mobile from '..';
import { Product, ProductType } from '../../../../../types/product.type';

describe('Mobile', () => {
  const data: Pick<Product, 'type' | 'images'> = {
    type: ProductType.Bid,
    images: ['image-1', 'image-2'],
  };

  test('renders Mobile', () => {
    render(<Mobile data={data} role="images" />);

    const images = screen.getByRole('images');
    expect(images).toBeInTheDocument();
  });

  test('renders Mobile pre-order', () => {
    render(
      <Mobile data={{ ...data, type: ProductType.PreOrder }} role="images" />,
    );

    const images = screen.getByRole('images');
    expect(images).toBeInTheDocument();
  });
});
