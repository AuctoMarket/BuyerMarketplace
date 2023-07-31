import React, { ComponentProps } from 'react';
import { Carousel } from 'react-daisyui';

import styles from './index.module.scss';

interface Props extends ComponentProps<'div'> {
  data: {
    type: string;
    images: string[];
  };
}

function ProductImagesMobile({
  className,
  data: { images, type },
  ...rest
}: Props) {
  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['gradient']}>
        {type === 'pre-order' && (
          <span className={styles['pre-order']}>Pre-Order</span>
        )}
      </div>

      <Carousel display="numbered" snap="center">
        {images.map((image, index) => (
          <Carousel.Item key={index} src={image} alt={`${index}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default ProductImagesMobile;
