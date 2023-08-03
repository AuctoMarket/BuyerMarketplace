import useSWR from 'swr';

import transformSeller from '../utils/transformSeller';

const useSeller = (id: string) => {
  const {
    isLoading,
    data: seller,
    error,
  } = useSWR(`/sellers/${id}`, (_url: string) => {
    return transformSeller({ seller_id: id });
  });

  return {
    isLoading,
    seller,
    error,
  };
};

export default useSeller;
