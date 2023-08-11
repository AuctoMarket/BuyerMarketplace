import React, { ComponentProps } from 'react';
import styles from './index.module.scss';
import { Carousel } from 'react-responsive-carousel';
import Image from '../../Image';
import Icon from '../../Icon';
import Button from '../../Button';

interface Props extends ComponentProps<'div'> {
  data: {
    images: string[];
  };
}

function FeaturedProducts({ data: { images }, ...rest }: Props) {
  return (
    <div className={`${styles['products-container']}`} {...rest}>
      <div className={`${styles['gradient']}`} />
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
            <button
              className={`${styles['products-button-left']}`}
              onClick={clickHandler}
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
          <Button>Pre-Order now</Button>
        </div>
        <div className={`${styles['products-text-1']}`}>
          Collection: Pokemon S&S Brilliant Stars
        </div>
        <div className={`${styles['products-text-2']}`}>
          Pre-Order your today!
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
