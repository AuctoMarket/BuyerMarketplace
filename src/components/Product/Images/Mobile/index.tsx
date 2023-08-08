import React, { ComponentProps } from 'react';
import { Carousel } from 'react-responsive-carousel';

import styles from './index.module.scss';
import Image from '../../../Image';
import { Product, ProductType } from '../../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: Pick<Product, 'type' | 'images'>;
}

function ProductImagesMobile({
  className,
  data: { images = ['/images/no-photo.png'], type },
  ...rest
}: Props) {
  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['gradient']}>
        {type === ProductType.PreOrder && (
          <span className={styles['pre-order']}>Pre-Order</span>
        )}
      </div>

      <Carousel showArrows={false} showStatus={false} showThumbs={false}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`${index}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default ProductImagesMobile;
