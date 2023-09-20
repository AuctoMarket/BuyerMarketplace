import { Sort } from './base.type';
import { Seller } from './seller.type';

enum ProductType {
  Bid = 'Bid',
  BuyNow = 'Buy-Now',
  PreOrder = 'Pre-Order',
}

enum Language {
  Eng = 'Eng',
  Jap = 'Jap',
}

enum Expansion {
  SH = 'SH', // Sword & Shield
  SV = 'SV', // Scarlet & Violet
}

interface Product {
  id: string;
  title: string;
  condition: number;
  description: string;
  images: string[];
  type: ProductType;
  price: number;
  discount?: number;
  bidPrice?: number;
  numBids?: number;
  quantity: number;
  soldQuantity: number;
  seller: Seller;
  language?: Language;
  expansion?: Expansion;
  postedDate?: Date;
  releasedDate?: Date;
  orderedDate?: Date;
}

interface ProductsQuery {
  seller_id?: string;
  product_type?: ProductType[];
  language?: Language[];
  expansion?: Expansion[];
  min_price?: number;
  max_price?: number;
}

interface ProductsSort extends Sort {
  sort_by?:
    | 'posted_date'
    | 'price-low'
    | 'price-high'
    | 'name-asc'
    | 'name-desc';
}

export { ProductType, Language, Expansion };
export type { Product, ProductsQuery, ProductsSort };
