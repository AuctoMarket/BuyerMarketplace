import React from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import ProductPromotion from '../../components/Product/Promotion';
import ProductRecentlyAdded from '../../components/Product/RecentlyAdded';
import SellerPromotion from '../../components/Sellers/Promotion';
import useSeller from '../../hooks/useSeller';
import useProductsList from '../../hooks/useProductsList';

import type { Seller } from '../../types/seller.type';

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
              '/images/promotion/product-banner.png',
              '/images/promotion/product-banner.png',
              '/images/promotion/product-banner.png',
            ],
            url: '#',
            title:
              '<p>Collection: Pokemon S&S Brilliant</p><p>StarsPre-Order yours today!</p>',
          }}
        />

        {recentlyAdded && recentlyAdded.length > 0 && (
          <div className={styles['content']}>
            <ProductRecentlyAdded
              data={{
                products: recentlyAdded,
                seller: seller as Seller,
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
