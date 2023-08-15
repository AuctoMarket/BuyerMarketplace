import { Sort } from './base.type';
import { Seller } from './seller.type';

enum ProductType {
  Bid = 'Bid',
  BuyNow = 'Buy-Now',
  PreOrder = 'Pre-Order',
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
  quantity: number;
  soldQuantity: number;
  seller: Seller;
  postedDate: Date;
}

interface ProductsQuery {
  seller_id?: string;
}

interface ProductsSort extends Sort {
  sort_by?: 'posted_date';
}

export { ProductType };
export type { Product, ProductsQuery, ProductsSort };
