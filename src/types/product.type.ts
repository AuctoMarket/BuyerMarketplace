import { Sort } from './base.type';

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
  images: string[];
  type: ProductType;
  price: number;
  bidPrice?: number;
  numBids?: number;
  quantity?: number;
  soldQuantity?: number;
  sellerId: string;
  postedDate: Date;
}

interface ProductsQuery {
  sellerId?: string;
}

interface ProductsSort extends Sort {
  sortBy?: 'posted_date';
}

export { ProductType };
export type { Product, ProductsQuery, ProductsSort };
