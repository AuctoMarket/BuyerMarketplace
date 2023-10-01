import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '..';
import {
  CartContext,
  getCartItemsFromLocalStorage,
} from '../../../hooks/useCart';
import { CartItem } from '../../../types/cart.type';

describe('<Header />', () => {
  const TestComponent = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>(
      getCartItemsFromLocalStorage(),
    );

    return (
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </CartContext.Provider>
    );
  };

  test('renders Header with guest & empty cart', () => {
    render(<TestComponent />);

    const text = screen.getByAltText('logo-horizontal-inverted-color');

    expect(text).toBeInTheDocument();
  });

  test('renders Header when logged in & not empty cart', () => {
    localStorage.setItem(
      'userData',
      JSON.stringify({ email: 'test@test.com', buyer_id: 'test' }),
    );
    localStorage.setItem(
      'cartData',
      JSON.stringify([
        {
          productId: '1',
          quantity: 1,
        },
      ]),
    );
    render(<TestComponent />);

    const text = screen.getByAltText('logo-horizontal-inverted-color');

    expect(text).toBeInTheDocument();
  });

  test('renders Header with mobile logo', () => {
    window.innerWidth = 640;
    render(<TestComponent />);

    const text = screen.getByAltText('logo-color');

    expect(text).toBeInTheDocument();
  });
});
