import { Seller } from './seller.type';

enum ProductType {
  Bid = 'Bid',
  BuyNow = 'Buy_Now',
  PreOrder = 'Pre_Order',
}

interface Product {
  id: string;
  title: string;
  condition: number;
  description: string;
  images?: string[];
  type: ProductType;
  price: number;
  bidPrice?: number;
  numBids?: number;
  seller: Seller;
  postedDate: Date;
}

export { ProductType };
export type { Product };
