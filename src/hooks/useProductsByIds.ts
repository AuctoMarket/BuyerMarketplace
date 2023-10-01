import useSWR from 'swr';
import axios from 'axios';

import apiConfig from '../configs/api';
import transformProduct from '../utils/transformProduct';

const useProductsByIds = (ids: string[]) => {
  const {
    isLoading,
    data: products,
    error,
  } = useSWR(
    ['useProductsByIds', ids],
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

export default useProductsByIds;
