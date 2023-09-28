import useSWR from 'swr';
import axios from 'axios';

import apiConfig from '../configs/api';
import transformProduct from '../utils/transformProduct';

const useProductByIds = (ids: string[]) => {
  const {
    isLoading,
    data: products,
    error,
  } = useSWR(
    ['useProductByIds', ids],
    async () => {
      if (ids.length > 0) {
        return await Promise.all(
          ids.map(async (id) => {
            const response = await axios.get(
              `${apiConfig.baseUrl}/products/${id}`,
            );

            return transformProduct(response.data);
          }),
        );
      }
    },
    {
      revalidateOnFocus: false,
    },
  );

  return {
    isLoading,
    products,
    error,
  };
};

export default useProductByIds;
