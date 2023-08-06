import React, { ComponentProps } from 'react';
import styles from './index.module.scss';

interface Props extends ComponentProps<'div'> {
  data: {
    title: string;
    image: string;
    icon: string;
  };
}

export function CategoryItem({ data, ...rest }: Props) {
  return (
    <div className={`${styles['category-card']}`} {...rest}>
      <div className={`${styles['category-content']}`}>
        <img src={data.image} alt={data.title} />
        <div className={`${styles['category-card-icon']}`}>
          <img src={data.icon} alt={data.title} />
          <p>{data.title}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
