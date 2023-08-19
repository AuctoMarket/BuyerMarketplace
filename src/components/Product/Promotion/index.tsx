import React, { ComponentProps } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Image from '../../Image';
import Icon from '../../Icon';

interface Props extends ComponentProps<'div'> {
  data: {
    images: string[];
    url: string;
    title: string;
  };
}

function ProductPromotion({
  className,
  data: { images, url, title },
  ...rest
}: Props) {
  return (
    <div className={`${className} ${styles['products-container']}`} {...rest}>
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <button
              className={`${styles['products-button-left']}`}
              onClick={clickHandler}
              data-testid="btn-left"
            >
              <Icon name="chevron_left" />
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <button
              className={`${styles['products-button-right']}`}
              onClick={clickHandler}
              data-testid="btn-right"
            >
              <Icon name="chevron_right" />
            </button>
          )
        }
      >
        {images.map((image, index) => (
          <div key={index} className={styles['image-container']}>
            <Image src={image} alt={`${index}`} />
            <div className={`${styles['gradient']}`} />
          </div>
        ))}
      </Carousel>

      <div className={`${styles['products-content']}`}>
        <div className={`${styles['products-button']}`}>
          <Link to={url}>Pre-Order now</Link>
        </div>

        <div
          className={`${styles['products-title']}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </div>
  );
}

export default ProductPromotion;
