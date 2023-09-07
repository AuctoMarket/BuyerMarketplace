import transformSeller from './transformSeller';

import type { Product } from '../types/product.type';

const transformProduct = (product: any): Product => ({
  id: product.product_id,
  title: product.title,
  condition: product.condition,
  description: product.desc,
  images: (product.images.length === 0
    ? [
        {
          image_path: '/images/no-photo.png',
        },
      ]
    : product.images
  ).map((image: any) => image.image_path),
  type: product.product_type,
  price: product.price,
  discount: product.discount,
  quantity: product.product_quantity,
  soldQuantity: product.sold_quantity,
  seller: transformSeller(product.seller_info),
  postedDate: new Date(product.posted_date),
  releasedDate: product.releases_on && new Date(product.releases_on),
  orderedDate: product.order_by && new Date(product.order_by),
});

export default transformProduct;
