import { useState } from 'react';
import { Product } from '../types/product.type';

const cartDataKey = 'cartData';

function useCart() {
  const [products, setProducts] = useState<(Product & { quantity: number })[]>(
    JSON.parse(localStorage.getItem(cartDataKey) || 'null') || [],
  );

  const addProduct = (product: Product, quantity: number) => {
    const existingProductIndex = products.findIndex((p) => p.id === product.id);
    if (existingProductIndex !== -1) {
      updateProduct(existingProductIndex, quantity);
    } else {
      const newProducts = products.concat(product);
      setProducts(newProducts);
      localStorage.setItem('cartData', JSON.stringify(newProducts));
    }
  };

  const removeProduct = (index: number) => {
    //todo
  };

  const updateProduct = (index: number, quantity: number) => {
    const newProducts = [...products];
    newProducts[index].quantity = quantity;
    setProducts(newProducts);
    localStorage.setItem('cartData', JSON.stringify(newProducts));
  };

  return { products, addProduct, removeProduct, updateProduct };
}

export default useCart;
