import useSWR from 'swr';

import transformProduct from '../utils/transformProduct';

import type { Pagination } from '../types/base.type';
import type { ProductsQuery, ProductsSort } from '../types/product.type';

const useProductsList = (
  _query?: ProductsQuery,
  _options?: ProductsSort & Pagination,
) => {
  const {
    isLoading,
    data: productsList,
    error,
  } = useSWR('/products', (_url: string) => {
    // const { sellerId } = query || {};
    // const {
    //   sortBy = ProductsSortBy.postedDate,
    //   sortDirection = ProductsSortDirection.desc,
    //   offset = 0,
    //   limit = 5,
    // } = options || {};

    // TODO: implement this function to return products list
    return [].map((product) => transformProduct(product));
  });

  return {
    isLoading,
    productsList,
    error,
  };
};

export default useProductsList;
