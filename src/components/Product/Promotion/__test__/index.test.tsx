import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import ProductPromotion from '..';

describe('ProductPromotion', () => {
  const data: { images: string[]; url: string; title: string } = {
    images: ['/images/products/image2.png', '/images/products/image2.png'],
    url: '/products/1',
    title: 'test',
  };

  test('renders ProductPromotion', async () => {
    render(
      <BrowserRouter>
        <ProductPromotion data={data} role="promotion" />
      </BrowserRouter>,
    );

    const products = await screen.findByRole('promotion');
    const buttonRight = await screen.findByTestId('btn-right');
    fireEvent.click(buttonRight);

    expect(products).toBeInTheDocument();
  });
});
