import React from 'react';
import { render, screen } from '@testing-library/react';

import FeaturedProducts from '..';

describe('FeaturedProducts', () => {
  const data: { images: string[] } = {
    images: ['/images/products/image2.png', '/images/products/image2.png'],
  };

  test('renders FeaturedProducts', async () => {
    render(<FeaturedProducts data={data} role="featured-products" />);

    const products = await screen.findByRole('featured-products');
    expect(products).toBeInTheDocument();
  });
});
