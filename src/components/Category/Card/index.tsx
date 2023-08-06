import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Image from '../../Image';

interface Props extends ComponentProps<'div'> {
  data: {
    category: { title: string; image: string; icon: string };
  };
}

export function Card({ className, data: { category }, ...rest }: Props) {
  return (
    <div className={`${className} ${styles['category-card']}`} {...rest}>
      <div className={`${styles['category-content']}`}>
        <Image src={category.image} alt={category.title} />

        <div className={`${styles['category-card-icon']}`}>
          <Image src={category.icon} alt={category.title} />
          <p>{category.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
