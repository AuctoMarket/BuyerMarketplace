import useSWR from 'swr';
import axios from 'axios';

import apiConfig from '../configs/api';
import transformProduct from '../utils/transformProduct';

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
