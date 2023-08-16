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
          <span>Aucto</span> is dedicated to{' '}
          <span>simplify the selling process</span> for collectible sellers by
          assisting with <span>communication, logistics and payments</span>.
          This enables sellers to concentrate on what really matters: sourcing
          the finest products at the most competitive prices for their
          customers.
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
