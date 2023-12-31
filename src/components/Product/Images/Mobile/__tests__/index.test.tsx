import React from 'react';
import { render, screen } from '@testing-library/react';

import Mobile from '..';
import { ProductType } from '../../../../../types/product.type';

describe('Mobile', () => {
  const data = {
    type: ProductType.BuyNow,
    images: ['image-1', 'image-2'],
  };

  test('renders Mobile', () => {
    render(<Mobile data={data} role="images" />);

    const images = screen.getByRole('images');
    expect(images).toBeInTheDocument();
  });

  test('renders Mobile pre-order', () => {
    render(
      <Mobile
        data={{
          ...data,
          type: ProductType.PreOrder,
          releasedDate: new Date(),
          orderedDate: new Date(),
        }}
        role="images"
      />,
    );

    const images = screen.getByRole('images');
    expect(images).toBeInTheDocument();
  });
});
