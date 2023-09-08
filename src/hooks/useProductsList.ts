import useSWR from 'swr';
import axios from 'axios';

import apiConfig from '../configs/api';
import transformProduct from '../utils/transformProduct';

import type { Pagination } from '../types/base.type';
import type { ProductsQuery, ProductsSort } from '../types/product.type';

const useProductsList = (
  query: ProductsQuery = {},
  options: ProductsSort & Pagination = {},
) => {
  const {
    isLoading,
    data: productsList,
    error,
  } = useSWR(
    ['/products', query, options],
    async ([url, query, options]) => {
      const response = await axios.get<any[]>(`${apiConfig.baseUrl}${url}`, {
        params: {
          ...query,
          ...options,
        },
      });

      return response.data.map(transformProduct);
    },
    {
      revalidateOnFocus: false,
    },
  );

  return {
    isLoading,
    productsList,
    error,
  };
};

export default useProductsList;
