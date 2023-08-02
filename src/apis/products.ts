import type { Product } from '../types/product.type';

const getProductById = (id: string): Product | undefined => {
  // TODO: implement this function to return a product by id
  return undefined;
};

const getMoreFromSellerProducts = (
  sellerId: string,
  num: number = 5,
): Product[] => {
  // TODO: implement this function to return more products from the same seller
  return [];
};

const getRecommendedProducts = (num: number = 5): Product[] => {
  // TODO: implement this function to return recommended products
  return [];
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProductById,
  getMoreFromSellerProducts,
  getRecommendedProducts,
};
