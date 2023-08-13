import React from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import ProductPromotion from '../../components/Product/Promotion';
import ProductRecentlyAdded from '../../components/Product/RecentlyAdded';
import useSeller from '../../hooks/useSeller';
import useProductsList from '../../hooks/useProductsList';
import { Seller } from '../../types/seller.type';

function HomePage() {
  const { seller } = useSeller('1');
  const { productsList: recentlyAdded } = useProductsList();

  return (
    <Layout>
      <div className={styles['home-page']}>
        <ProductPromotion
          className={styles['promotion']}
          data={{
            images: [
              '/images/promotion/image.png',
              '/images/promotion/image.png',
              '/images/promotion/image.png',
            ],
            url: '#',
            title:
              '<p>Collection: Pokemon S&S Brilliant</p><p>StarsPre-Order yours today!</p>',
          }}
        />

        {recentlyAdded && recentlyAdded.length > 0 && (
          <ProductRecentlyAdded
            className={styles['recently-added']}
            data={{
              products: recentlyAdded,
              seller: seller as Seller,
              seeMore: false,
            }}
          />
        )}
      </div>
    </Layout>
  );
}

export default HomePage;
