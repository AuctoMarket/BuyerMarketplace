import qs from 'qs';
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
          ...query,
          ...options,
        },
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: 'repeat' });
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
