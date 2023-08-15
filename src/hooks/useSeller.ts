import useSWR from 'swr';
import axios from 'axios';

import apiConfig from '../configs/api';
import transformSeller from '../utils/transformSeller';

import type { Seller } from '../types/seller.type';

const useSeller = (id: string) => {
  const {
    isLoading,
    data: seller,
    error,
  } = useSWR(`/sellers/${id}`, async (url: string) => {
    if (!id) return null;

    const response = await axios.get<Seller>(`${apiConfig.baseUrl}${url}`);

    return { ...transformSeller(response.data), isVerified: true };
  });

  return {
    isLoading,
    seller,
    error,
  };
};

export default useSeller;
