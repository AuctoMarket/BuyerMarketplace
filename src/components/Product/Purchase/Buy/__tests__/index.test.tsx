import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Buy from '..';

test('renders Buy', () => {
  const data = {
    price: 1,
    buyQuantity: 1,
    onChangeBuyQuantity: (quantity: number) => {},
    availableQuantity: 1,
  };

  render(
    <BrowserRouter>
      <Buy data={data} role="test" />
    </BrowserRouter>,
  );
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
