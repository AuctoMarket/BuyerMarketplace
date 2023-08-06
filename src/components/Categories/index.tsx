import React, { ComponentProps } from 'react';
import styles from './index.module.scss';
import CategoryItem from './CategoryItem';
import { Link } from 'react-router-dom';
import { title } from 'process';

interface Props extends ComponentProps<'div'> {
  data: {
    test: string;
  };
}

export function CategoryList({ data, ...rest }: Props) {
  return (
    <div className={styles['container']} {...rest}>
      <div className={styles['heading']}>Collecting something?</div>
      <div className={styles['list-container']}>
        <Link to={`/products/`}>
          <CategoryItem
            data={{
              title: 'Card',
              image: '/images/category/Rectangle46.png',
              icon: '/images/category/cards.png',
            }}
          />
        </Link>
        <Link to={`/products/`}>
          <CategoryItem
            data={{
              title: 'Card',
              image: '/images/category/Rectangle52.png',
              icon: '/images/category/bearbrick-01.png',
            }}
          />
        </Link>
        <Link to={`/products/`}>
          <CategoryItem
            data={{
              title: 'Card',
              image: '/images/category/Rectangle48.png',
              icon: '/images/category/lego.png',
            }}
          />
        </Link>
        <Link to={`/products/`}>
          <CategoryItem
            data={{
              title: 'Card',
              image: '/images/category/Rectangle49.png',
              icon: '/images/category/popmart.png',
            }}
          />
        </Link>
        <Link to={`/products/`}>
          <CategoryItem
            data={{
              title: 'Card',
              image: '/images/category/Rectangle50.png',
              icon: '/images/category/naruto-01.png',
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default CategoryList;
