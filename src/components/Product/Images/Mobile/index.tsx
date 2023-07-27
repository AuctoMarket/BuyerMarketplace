import React, { ComponentProps } from 'react';
import { Carousel } from 'flowbite-react';

import styles from './index.module.scss';

interface Props extends ComponentProps<'div'> {
  data: {
    images: string[];
    isPreOrder?: boolean;
  };
}

function ProductImagesMobile({
  className,
  data: { images, isPreOrder = false },
  ...rest
}: Props) {
  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['gradient']}>
        {isPreOrder && <span className={styles['pre-order']}>Pre-Order</span>}
      </div>

      <Carousel slide={false}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${index}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default ProductImagesMobile;
