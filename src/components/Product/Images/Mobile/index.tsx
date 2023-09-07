import React, { ComponentProps } from 'react';
import { Carousel } from 'react-responsive-carousel';
import dayjs from 'dayjs';

import styles from './index.module.scss';
import Image from '../../../Image';
import { Product, ProductType } from '../../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: Pick<Product, 'type' | 'images' | 'releasedDate' | 'orderedDate'>;
}

function ProductImagesMobile({
  className,
  data: { images, type, releasedDate, orderedDate },
  ...rest
}: Props) {
  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      {type === ProductType.PreOrder && (
        <>
          <div className={styles['release-date']}>
            RELEASE: {dayjs(releasedDate).format('MMM DD')}
          </div>
          <div className={styles['order-date']}>
            ORDER BY: {dayjs(orderedDate).format('MMM DD')}
          </div>
        </>
      )}

      <Carousel showArrows={false} showStatus={false} showThumbs={false}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`${index}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default ProductImagesMobile;
