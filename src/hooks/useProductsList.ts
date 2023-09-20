import useSWR from 'swr';
import axios from 'axios';

import apiConfig from '../configs/api';
import transformProduct from '../utils/transformProduct';

import type { Pagination } from '../types/base.type';
import type {
  Product,
  ProductsQuery,
  ProductsSort,
} from '../types/product.type';

interface ProductsListData {
  count: number;
  products: Product[];
}

const useProductsList = (
  query: ProductsQuery = {},
  options: ProductsSort & Pagination = { anchor: 0, limit: 10 },
) => {
  const { isLoading, data, error } = useSWR<ProductsListData>(
    ['/products', query, options],
    async ([url, query, options]: [
      string,
      ProductsQuery,
      ProductsSort & Pagination,
    ]) => {
      const response = await axios.get(`${apiConfig.baseUrl}${url}`, {
        params: {
          language: query.language?.join(',') || undefined,
          expansion: query.expansion?.join(',') || undefined,
          product_type: query.product_type?.join(',') || undefined,
          seller_id: query.seller_id || undefined,
          min_price: query.min_price || undefined,
          max_price: query.max_price || undefined,
          ...options,
        },
      });

      return {
        count: response.data.product_count,
        products: response.data.products.map(transformProduct),
      };
    },
    {
      revalidateOnFocus: false,
    },
  );

  return {
    isLoading,
    data,
    error,
  };
};

export default useProductsList;
