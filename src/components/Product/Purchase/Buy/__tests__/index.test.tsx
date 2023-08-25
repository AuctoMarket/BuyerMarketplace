import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Buy from '..';

test('renders Buy', () => {
  const data = {
    price: 1,
    quantity: 1,
    availableQuantity: 1,
  };
  const onChangeQuantity = (quantity: number) => {};
  const onBuy = () => {};

  render(
    <BrowserRouter>
      <Buy
        data={data}
        onChangeQuantity={onChangeQuantity}
        onBuy={onBuy}
        role="test"
      />
    </BrowserRouter>,
  );
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
