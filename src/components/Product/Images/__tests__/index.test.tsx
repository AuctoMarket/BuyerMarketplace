import React from 'react';
import { render, screen } from '@testing-library/react';

import Images from '..';
import userEvent from '@testing-library/user-event';

describe('Images', () => {
  const data = { type: 'normal', images: ['image-1', 'image-2'] };

  test('renders Images', async () => {
    render(<Images data={data} role="images" />);

    const thumbnails = await screen.findAllByRole('navigation');
    userEvent.click(thumbnails[1]);
    const images = await screen.findByRole('images');
    expect(images).toBeInTheDocument();
  });

  test('renders Images pre-order', async () => {
    render(<Images data={{ ...data, type: 'pre-order' }} role="images" />);

    const images = await screen.findByRole('images');
    expect(images).toBeInTheDocument();
  });
});
