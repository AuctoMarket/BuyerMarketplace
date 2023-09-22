import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import ProductTitle from '../Title';
import ProductPostedDate from '../PostedDate';
import ProductPrice from '../Price';
import Image from '../../Image';
import { ProductType, Product } from '../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: {
    product: Product;
  };
}

function ProductCard({ className, data: { product }, ...rest }: Props) {
  const { images, title, postedDate, type, bidPrice = 0, price } = product;

  return (
    <div className={`${styles['product-card']} ${className}`} {...rest}>
      {/* <div className={styles['header']}>
        <ProductSellerInfoInCard
          className={styles['product-seller-info']}
          data={product.seller}
        />
      </div> */}

      {product.type === ProductType.PreOrder && (
        <div className={styles['pre-order']}>Pre-Order</div>
      )}

      <div className={styles['content']}>
        <Image
          className={styles['product-image']}
          src={images[0]}
          alt={title}
        />
      </div>

      <div className={styles['footer']}>
        <ProductTitle className={styles['product-title']} data={{ title }} />
        <ProductPostedDate
          className={styles['product-posted-date']}
          data={{ postedDate, showText: false }}
        />
        <ProductPrice
          className={styles['product-price']}
          data={{
            price: type === ProductType.Bid ? bidPrice : price,
          }}
        />
      </div>
    </div>
  );
}

export default ProductCard;
