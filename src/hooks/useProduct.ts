import useSWR from 'swr';
import axios from 'axios';

import apiConfig from '../configs/api';
import transformProduct from '../utils/transformProduct';

import { ProductType } from '../types/product.type';

const useProduct = (id: string) => {
  const {
    isLoading,
    data: product,
    error,
  } = useSWR(
    `/products/${id}`,
    async (url: string) => {
      if (id) {
        const response = await axios.get(`${apiConfig.baseUrl}${url}`);
        // TODO: Remove this when the API is ready
        response.data.product_type = ProductType.PreOrder;

        return transformProduct(response.data);
      }
    },
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  return {
    isLoading,
    product,
    error,
  };
};

export default useProduct;
