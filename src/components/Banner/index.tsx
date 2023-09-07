import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import Image from '../Image';

interface Props extends ComponentProps<'div'> {}
function isMobile() {
  return window.innerWidth <= 820;
}

function Banner({ className, ...rest }: Props) {
  return (
    <div className={`${className} ${styles['promotion-container']}`} {...rest}>
      {isMobile() ? (
        <Image
          className={styles['background']}
          src="/images/banner/mobile-banner.png"
          alt="mobile-banner"
        />
      ) : (
        <Image
          className={styles['background']}
          src="/images/banner/website-banner.png"
          alt="website-banner"
        />
      )}

      <div className={styles['content']}>
        <div className={styles['title']}>
          Collecting is hard, <span>Aucto makes it easy!</span>
        </div>
        <div className={styles['main']}>
          We verify every seller on our platform, ensuring you get exactly what
          you bought at some of the best prices available!
        </div>
        <div className={styles['footer']}>
          <Link to={'#'}>Find out more</Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
