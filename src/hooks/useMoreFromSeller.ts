import useSWR from 'swr';
import axios from 'axios';

import apiConfig from '../configs/api';
import transformProduct from '../utils/transformProduct';

import type { Pagination } from '../types/base.type';
import type { ProductsQuery, ProductsSort } from '../types/product.type';
import type { Product } from '../types/product.type';

const useMoreFromSeller = (
  sellerId: string,
  _query?: ProductsQuery,
  _options?: ProductsSort & Pagination,
) => {
  const {
    isLoading,
    data: moreFromSeller,
    error,
  } = useSWR(`/sellers/${sellerId}/products`, async (url: string) => {
    // TODO: implement filter query and pagination

    const response = await axios.get<Product[]>(`${apiConfig.baseUrl}${url}`);

    return response.data.map((product) => transformProduct(product));
  });

  return {
    isLoading,
    moreFromSeller,
    error,
  };
};

export default useMoreFromSeller;
