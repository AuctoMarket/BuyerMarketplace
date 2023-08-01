import React from 'react';
import { render, screen } from '@testing-library/react';

import Mobile from '..';

describe('Mobile', () => {
  const data = { type: 'normal', images: ['image-1', 'image-2'] };

  test('renders Mobile', () => {
    render(<Mobile data={data} role="images" />);

    const images = screen.getByRole('images');
    expect(images).toBeInTheDocument();
  });

  test('renders Mobile pre-order', () => {
    render(<Mobile data={{ ...data, type: 'pre-order' }} role="images" />);

    const images = screen.getByRole('images');
    expect(images).toBeInTheDocument();
  });
});
