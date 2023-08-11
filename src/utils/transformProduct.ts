import { Product } from '../types/product.type';

const transformProduct = (product: any): Product => ({
  id: product.product_id,
  title: product.title,
  condition: product.condition,
  description: product.desc,
  images: (!product.images || product.images.length === 0
    ? [
        {
          image_path: '/images/no-photo.png',
        },
      ]
    : product.images
  ).map((image: any) => image.image_path),
  type: product.product_type,
  price: product.price,
  quantity: product.product_quantity,
  soldQuantity: product.sold_quantity,
  sellerId: product.seller_id,
  postedDate: new Date(product.posted_date),
});

export default transformProduct;
