import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Image from '../../Image';
import ButtonLink from '../../Button/Link';

interface Props extends ComponentProps<'div'> {}

function Promotion({ className, ...rest }: Props) {
  return (
    <div className={`${className} ${styles['promotion']}`} {...rest}>
      <div className={styles['content']}>
        <div className={styles['title']}>
          Interested in selling with <span>Aucto</span>
        </div>
        <div className={styles['description']}>
          <span>Aucto</span> strives to <span>make selling easy</span> for all
          collectible sellers by helping sellers deal with{' '}
          <span>communication, logistics</span> and <span>payments</span>. That
          way sellers can focus on whats truly important, finding the best
          products at the best rates for their customers.
        </div>
        <ButtonLink
          className={styles['button']}
          theme="color"
          to="https://t.me/auctomarketplace"
          target="_blank"
        >
          Contact Us
        </ButtonLink>
      </div>

      <div className={styles['image']}>
        <Image src="/images/promotion/product-stack.png" alt="promotion" />
      </div>
    </div>
  );
}

export default Promotion;
