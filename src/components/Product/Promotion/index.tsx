import React, { ComponentProps } from 'react';
import styles from './index.module.scss';
import { Carousel } from 'react-responsive-carousel';

import Image from '../../Image';
import Icon from '../../Icon';
import { Link } from 'react-router-dom';

interface Props extends ComponentProps<'div'> {
  data: {
    images: string[];
    url: string;
    title: string;
  };
}

function ProductPromotion({ data: { images, url, title }, ...rest }: Props) {
  return (
    <div className={`${styles['products-container']}`} {...rest}>
      <div className={`${styles['gradient']}`} />

      <Carousel
        showStatus={false}
        showThumbs={false}
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
          <Image key={index} src={image} alt={`${index}`} />
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
