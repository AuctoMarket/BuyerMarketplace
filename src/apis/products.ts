import { sampleProductsList } from './mocks/products';

const getProductById = (id: string) => {
  return sampleProductsList.find((product) => product.id === id);
};

const getMoreFromSellerProducts = (sellerId: string, num: number = 5) => {
  return sampleProductsList.slice(0, num);
};

const getRecommendedProducts = (num: number = 5) => {
  return sampleProductsList.slice(0, num);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProductById,
  getMoreFromSellerProducts,
  getRecommendedProducts,
};
