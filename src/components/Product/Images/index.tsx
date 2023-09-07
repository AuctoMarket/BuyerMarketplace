import React, { ComponentProps, useEffect } from 'react';
import dayjs from 'dayjs';

import styles from './index.module.scss';
import { Product, ProductType } from '../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: Pick<Product, 'type' | 'images' | 'releasedDate' | 'orderedDate'>;
}

function ProductImages({
  className,
  data: { type, images, releasedDate, orderedDate },
  ...rest
}: Props) {
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
        <div className={styles['image']}>
          <img src={selected} alt="selected" />

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
        </div>

        <div className={styles['thumbnails-list-container']}>
          {images.slice(0, 5).map((image, index) => (
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
