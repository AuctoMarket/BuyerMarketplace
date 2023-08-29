import React from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import ProductPromotion from '../../components/Product/Promotion';
import ProductRecentlyAdded from '../../components/Product/RecentlyAdded';
import SellerPromotion from '../../components/Sellers/Promotion';
import useProductsList from '../../hooks/useProductsList';

function isMobile() {
  return window.innerWidth <= 820;
}

function HomePage() {
  const { productsList: recentlyAdded = [] } = useProductsList();

  return (
    <Layout>
      <div className={styles['home-page']}>
        {isMobile() ? (
          <ProductPromotion
            className={styles['promotion']}
            data={{
              images: ['/images/promotion/mobile-banner-v2.png'],
              url: '#',
              title:
                'Collection: Pokemon S&S Brilliant Stars Pre-Order yours today!',
            }}
          />
        ) : (
          <ProductPromotion
            className={styles['promotion']}
            data={{
              images: ['/images/promotion/website-cover-1.png'],
              url: '#',
              title:
                'Collection: Pokemon S&S Brilliant Stars Pre-Order yours today!',
            }}
          />
        )}
        {recentlyAdded.length > 0 && (
          <div className={styles['content']}>
            <ProductRecentlyAdded
              data={{
                products: recentlyAdded,
                seeMore: false,
              }}
            />
          </div>
        )}

        <div className={styles['seller-promotion']}>
          <SellerPromotion />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
