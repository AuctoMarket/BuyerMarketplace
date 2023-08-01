import React, { ComponentProps, useEffect } from 'react';

import styles from './index.module.scss';

interface Props extends ComponentProps<'div'> {
  data: {
    type: string;
    images: string[];
  };
}

function ProductImages({ className, data: { type, images }, ...rest }: Props) {
  const [selected, setSelected] = React.useState<string>();

  useEffect(() => {
    setSelected(images[0]);
  }, [images]);

  const handleSelect = (image: string) => {
    setSelected(image);
  };

  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['selected-container']}>
        <div className={styles['gradient']}>
          {type === 'pre-order' && (
            <span className={styles['pre-order']}>Pre-Order</span>
          )}
        </div>

        <img className={styles['image']} src={selected} alt="selected" />

        <div className={styles['thumbnails-list-container']}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles['thumbnail-container']} ${
                image === selected ? styles['selected'] : ''
              }`}
              onClick={() => handleSelect(image)}
              role="navigation"
            >
              <img
                className={styles['thumbnail']}
                src={image}
                alt={`view-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductImages;
