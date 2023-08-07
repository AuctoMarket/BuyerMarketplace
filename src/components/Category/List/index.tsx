import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Card from '../Card';

interface Props extends ComponentProps<'div'> {}

export function List({ className, ...rest }: Props) {
  const categories = [
    {
      title: 'Cards',
      image: '/images/category/Rectangle46.png',
      icon: '/images/category/cards.svg',
    },
    {
      title: 'Figurines',
      image: '/images/category/Rectangle52.png',
      icon: '/images/category/bearbrick.svg',
    },
    {
      title: 'Lego',
      image: '/images/category/Rectangle48.png',
      icon: '/images/category/lego.svg',
    },
    {
      title: 'Blindbox Toys',
      image: '/images/category/Rectangle49.png',
      icon: '/images/category/popmart.svg',
    },
    {
      title: 'Anime Merch',
      image: '/images/category/Rectangle50.png',
      icon: '/images/category/naruto.svg',
    },
  ];

  return (
    <div className={`${className} ${styles['container']}`} {...rest}>
      <div className={styles['heading']}>Collecting something?</div>
      <div className={styles['list-container']}>
        {categories.map((category, index) => (
          <Link to={`/products/`} key={index}>
            <Card data={{ category }} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default List;
