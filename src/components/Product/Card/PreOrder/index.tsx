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
  const { images, title, price, releaseDate, orderDate } = product;

  return (
    <div className={`${styles['product-card']} ${className}`} {...rest}>
      <div className={styles['release-date']}>
        RELEASE: {dayjs(releaseDate).format('MMM DD')}
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
        <ProductPrice
          className={styles['product-price']}
          data={{
            price,
          }}
        />
      </div>
      <div className={styles['order-date']}>
        ORDER BY: {dayjs(orderDate).format('MMM DD')}
      </div>
    </div>
  );
}

export default ProductCardPreOrder;
