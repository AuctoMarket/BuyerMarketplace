import { useState } from 'react';

import { Product } from '../types/product.type';
import { CartItem } from '../types/cart.type';

const cartDataKey = 'cartData';

function useCart() {
  const [cartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem(cartDataKey) || 'null') || [],
  );

  const addProduct = (Product: Product) => {
    // todo
  };

  const removeProduct = (index: number) => {
    //todo
  };

  const updateProduct = (index: number, quantity: number) => {
    //todo
  };

  return { cartItems, addProduct, removeProduct, updateProduct };
}

export default useCart;
