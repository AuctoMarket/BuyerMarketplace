import { useState } from 'react';
import { Product } from '../types/product.type';

const cartDataKey = 'cartData';

function useCart() {
  const [products, setProducts] = useState<Product[]>(
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

  return { products, addProduct, removeProduct, updateProduct };
}

export default useCart;
