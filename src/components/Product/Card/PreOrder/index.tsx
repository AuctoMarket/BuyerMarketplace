import React, { ComponentProps } from 'react';
import dayjs from 'dayjs';

import styles from './index.module.scss';
import ProductTitle from '../../Title';
import ProductPrice from '../../Price';
import Image from '../../../Image';

import type { Product } from '../../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: {
    product: Product;
  };
}

function ProductCardPreOrder({ className, data: { product }, ...rest }: Props) {
  const { images, title, price, discount, releasedDate, orderedDate } = product;

  return (
    <div className={`${styles['product-card']} ${className}`} {...rest}>
      <div className={styles['release-date']}>
        RELEASES: {dayjs(releasedDate).format('MMM DD')}
      </div>

      <div className={styles['content']}>
        <Image
          className={styles['product-image']}
          src={images[0]}
          alt={title}
        />
      </div>

      <div className={styles['footer']}>
        <ProductTitle className={styles['product-title']} data={{ title }} />

        <div className={styles['product-price']}>
          {discount && (
            <ProductPrice
              className={styles['old-price']}
              data={{
                price,
              }}
            />
          )}

          <ProductPrice
            className={styles['price']}
            data={{
              price: price - (discount || 0),
            }}
          />
        </div>
      </div>

      <div className={styles['order-date']}>
        ORDER BY: {dayjs(orderedDate).format('MMM DD')}
      </div>
    </div>
  );
}

export default ProductCardPreOrder;
