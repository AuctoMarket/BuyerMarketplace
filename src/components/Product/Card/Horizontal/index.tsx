import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import ProductTitle from '../../Title';
import ProductPostedDate from '../../PostedDate';
import ProductPrice from '../../Price';
import { ProductType, Product } from '../../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: {
    product: Product;
  };
}

function ProductCardHorizontal({
  className,
  data: { product },
  ...rest
}: Props) {
  const {
    images = ['/images/no-photo.png'],
    title,
    postedDate,
    type,
    bidPrice = 0,
    price,
  } = product;

  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['image']}>
        {type === ProductType.PreOrder && (
          <div className={styles['pre-order']}>Pre-Order</div>
        )}
        <img src={images[0]} alt={title} />
      </div>

      <div className={styles['details']}>
        <ProductTitle className={styles['title']} data={{ title }} />
        <div className={styles['footer']}>
          <ProductPrice
            className={styles['old-price']}
            data={{
              price: type === ProductType.Bid ? bidPrice : price,
            }}
          />
          <ProductPostedDate
            className={styles['posted-date']}
            data={{ postedDate, showText: false }}
          />
          <ProductPrice
            className={styles['price']}
            data={{
              price: type === ProductType.Bid ? bidPrice : price,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCardHorizontal;
