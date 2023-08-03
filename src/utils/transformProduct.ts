import { Product } from '../types/product.type';

const transformProduct = (product: any): Product => ({
  id: product.product_id,
  title: product.title,
  condition: product.condition,
  description: product.desc,
  images: product.images,
  type: product.product_type,
  price: product.price,
  sellerId: product.seller_id,
  postedDate: new Date(product.posted_date),
});

export default transformProduct;
