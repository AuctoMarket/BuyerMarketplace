import { useState } from 'react';

import { CartItem } from '../types/cart.type';

const cartDataKey = 'cartData';

function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem(cartDataKey) || 'null') || [],
  );

  const addCartItem = (productId: string, quantity: number) => {
    const index = cartItems.findIndex((item) => item.productId === productId);
    if (index !== -1) {
      updateCartItem(index, cartItems[index].quantity + quantity);
    } else {
      const newCartItems = cartItems.concat({ productId, quantity });
      setCartItems(newCartItems);
      localStorage.setItem('cartData', JSON.stringify(newCartItems));
    }
  };

  const updateCartItem = (index: number, quantity: number) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = quantity;
    setCartItems(newCartItems);
    localStorage.setItem('cartData', JSON.stringify(newCartItems));
  };

  const removeCartItem = (index: number) => {
    //todo
  };

  return { cartItems, addCartItem, removeCartItem, updateCartItem };
}

export default useCart;
