import React, { ComponentProps } from 'react';

import styles from './index.module.scss';

interface Props extends ComponentProps<'div'> {
  data: {
    images: string[];
    isPreOrder?: boolean;
  };
}

function ProductImages({
  className,
  data: { images, isPreOrder = false },
  ...rest
}: Props) {
  const [selected, setSelected] = React.useState(images[0]);

  const handleSelect = (image: string) => {
    setSelected(image);
  };

  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['selected-container']}>
        <div className={styles['gradient']}>
          {isPreOrder && <span className={styles['pre-order']}>Pre-Order</span>}
        </div>

        <img className={styles['image']} src={selected} alt="product" />

        <div className={styles['thumbnails-list-container']}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles['thumbnail-container']} ${
                image === selected ? styles['selected'] : ''
              }`}
              onClick={() => handleSelect(image)}
            >
              <img className={styles['thumbnail']} src={image} alt="product" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductImages;
