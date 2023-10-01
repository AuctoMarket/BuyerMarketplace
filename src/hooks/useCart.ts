import { createContext, useContext } from 'react';

import { CartItem } from '../types/cart.type';

const LOCAL_STORAGE_CART_KEY = 'cartData';

const getCartItemsFromLocalStorage = (): CartItem[] => {
  const cartData = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
  if (cartData) {
    return JSON.parse(cartData);
  }

  return [];
};

const setCartItemsToLocalStorage = (cartItems: CartItem[]) => {
  localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems));
};

const CartContext = createContext<{
  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
}>({
  cartItems: [],
  setCartItems: (_: CartItem[]) => {},
});

function useCart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addCartItem = (
    productId: string,
    quantity: number,
    removeAll?: boolean,
  ) => {
    if (!removeAll) {
      const index = cartItems.findIndex((item) => item.productId === productId);
      if (index !== -1) {
        updateCartItem(index, cartItems[index].quantity + quantity);
      } else {
        const newCartItems = cartItems.concat({ productId, quantity });
        setCartItems(newCartItems);
      }
    } else {
      const newCartItems = [{ productId, quantity }];
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
    updateCartItem,
    removeCartItem,
    removeAllCartItems,
  };
}

export {
  LOCAL_STORAGE_CART_KEY,
  getCartItemsFromLocalStorage,
  setCartItemsToLocalStorage,
  CartContext,
  useCart,
};
export default useCart;
