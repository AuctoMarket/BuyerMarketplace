import { Seller } from '../types/seller.type';

const transformSeller = (seller: any): Seller => ({
  id: seller.seller_id,
  name: seller.seller_name,
  avatar: seller.avatar,
  isVerified: true,
  numFollowers: seller.followers,
});

export default transformSeller;
