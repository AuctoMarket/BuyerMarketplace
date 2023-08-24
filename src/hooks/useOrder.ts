import useSWR from 'swr';
import axios from 'axios';

import apiConfig from '../configs/api';
import transformOrder from '../utils/transformOrder';

import type { Order } from '../types/order.type';

const useOrder = (id: string, isGuest: boolean) => {
  const {
    isLoading,
    data: order,
    error,
  } = useSWR([`/orders/${id}`, isGuest], async ([url, isGuest]) => {
    if (id) {
      const response = await axios.get<Order>(
        `${apiConfig.baseUrl}${url}${isGuest ? '/guest' : ''}`,
      );

      return transformOrder(response.data);
    }
  });

  return {
    isLoading,
    order,
    error,
  };
};

export default useOrder;
