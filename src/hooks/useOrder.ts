import useSWR from 'swr';
import axios from 'axios';

import apiConfig from '../configs/api';
import transformOrder from '../utils/transformOrder';

import type { Order } from '../types/order.type';

const useOrder = (
  id: string,
  isGuest: boolean,
  options: {
    refreshInterval?: number;
    revalidateIfStale?: boolean;
    revalidateOnFocus?: boolean;
    revalidateOnReconnect?: boolean;
  } = {},
) => {
  const {
    isLoading,
    data: order,
    error,
  } = useSWR(
    `/orders/${id}${isGuest ? '/guest' : ''}`,
    async (url: string) => {
      if (id) {
        const response = await axios.get<Order>(`${apiConfig.baseUrl}${url}`);

        return transformOrder(response.data);
      }
    },
    options,
  );

  return {
    isLoading,
    order,
    error,
  };
};

export default useOrder;
