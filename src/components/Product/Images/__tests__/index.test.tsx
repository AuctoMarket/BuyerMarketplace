import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Images from '..';
import { Product, ProductType } from '../../../../types/product.type';

describe('Images', () => {
  const data: Pick<Product, 'type' | 'images'> = {
    type: ProductType.Bid,
    images: ['image-1', 'image-2'],
  };

  test('renders Images', async () => {
    render(<Images data={data} role="images" />);

    const thumbnails = await screen.findAllByRole('navigation');
    userEvent.click(thumbnails[1]);
    const images = await screen.findByRole('images');
    expect(images).toBeInTheDocument();
  });

  test('renders Images pre-order', async () => {
    render(
      <Images data={{ ...data, type: ProductType.PreOrder }} role="images" />,
    );

    const images = await screen.findByRole('images');
    expect(images).toBeInTheDocument();
  });

  test('renders Images without images', async () => {
    render(<Images data={{ ...data, images: undefined }} role="images" />);

    const images = await screen.findByRole('images');
    expect(images).toBeInTheDocument();
  });
});
