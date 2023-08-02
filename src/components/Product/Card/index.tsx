import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import ProductSellerInfo from '../SellerInfo';
import ProductTitle from '../Title';
import ProductPostedDate from '../PostedDate';
import ProductPrice from '../Price';
import { ProductType, Product } from '../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: Product;
}

function ProductCard({
  className,
  data: { seller, images = [], title, postedDate, type, bidPrice = 0, price },
  ...rest
}: Props) {
  return (
    <div className={`${styles['product-card']} ${className}`} {...rest}>
      <div className={styles['header']}>
        <ProductSellerInfo
          className={styles['product-seller-info']}
          data={seller}
        />
      </div>
      <div className={styles['content']}>
        {type === ProductType.PreOrder && (
          <div className={styles['pre-order']}>Pre-Order</div>
        )}
        <img className={styles['product-image']} src={images[0]} alt={title} />
      </div>
      <div className={styles['footer']}>
        <ProductTitle className={styles['product-title']} data={{ title }} />
        <ProductPostedDate
          className={styles['product-posted-date']}
          data={{ postedDate }}
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
