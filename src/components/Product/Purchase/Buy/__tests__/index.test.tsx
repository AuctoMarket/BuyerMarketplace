import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Buy from '..';
import { ProductType } from '../../../../../types/product.type';

describe('Buy', () => {
  const data = {
    price: 1,
    quantity: 1,
    availableQuantity: 1,
    type: ProductType.BuyNow,
  };
  const onChangeQuantity = (quantity: number) => {};
  const onBuy = () => {};
  const onAddToCart = () => {};

  test('renders Buy', () => {
    render(
      <BrowserRouter>
        <Buy
          data={data}
          onChangeQuantity={onChangeQuantity}
          onBuy={onBuy}
          onAddToCart={onAddToCart}
          role="test"
        />
      </BrowserRouter>,
    );
    const text = screen.getByRole('test');
    expect(text).toBeInTheDocument();
  });

  test('renders Buy Pre-Order', () => {
    render(
      <BrowserRouter>
        <Buy
          data={{ ...data, type: ProductType.PreOrder }}
          onChangeQuantity={onChangeQuantity}
          onBuy={onBuy}
          onAddToCart={onAddToCart}
          role="test"
        />
      </BrowserRouter>,
    );
    const text = screen.getByRole('test');
    expect(text).toBeInTheDocument();
  });
});
