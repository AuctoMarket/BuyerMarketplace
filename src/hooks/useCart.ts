import { useEffect, useState } from 'react';

import { CartItem } from '../types/cart.type';

const cartDataKey = 'cartData';

function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem(cartDataKey) || 'null') || [],
  );

  useEffect(() => {
    localStorage.setItem(cartDataKey, JSON.stringify(cartItems));
  }, [cartItems]);

  const addCartItem = (productId: string, quantity: number) => {
    const index = cartItems.findIndex((item) => item.productId === productId);
    if (index !== -1) {
      updateCartItem(index, cartItems[index].quantity + quantity);
    } else {
      const newCartItems = cartItems.concat({ productId, quantity });
      setCartItems(newCartItems);
    }
  };

  const updateCartItem = (index: number, quantity: number) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = quantity;
    setCartItems(newCartItems);
  };

  const removeCartItem = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const removeAllCartItems = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addCartItem,
    removeCartItem,
    updateCartItem,
    removeAllCartItems,
  };
}

export default useCart;
