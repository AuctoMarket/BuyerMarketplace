import React from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import ProductPromotion from '../../components/Product/Promotion';
import ProductPreOrder from '../../components/Product/PreOrder';
import ProductRecentlyAdded from '../../components/Product/RecentlyAdded';
import SellerPromotion from '../../components/Sellers/Promotion';
import useProductsList from '../../hooks/useProductsList';
import { ProductType } from '../../types/product.type';

function isMobile() {
  return window.innerWidth <= 820;
}

function HomePage() {
  // TODO: fetch pre-order products list
  const { productsList: preOrder = [] } = useProductsList({
    product_type: ProductType.PreOrder,
  });
  const { productsList: recentlyAdded = [] } = useProductsList();

  return (
    <Layout>
      <div className={styles['home-page']}>
        {isMobile() ? (
          <ProductPromotion
            className={styles['promotion']}
            data={{
              images: ['/images/promotion/website-cover-mobile-1.png'],
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

        <div className={styles['content']}>
          {preOrder.length > 0 && (
            <ProductPreOrder
              className={styles['pre-order']}
              data={{
                products: preOrder,
              }}
            />
          )}

          {recentlyAdded.length > 0 && (
            <ProductRecentlyAdded
              className={styles['recently-added']}
              data={{
                products: recentlyAdded,
                seeMore: false,
              }}
            />
          )}
        </div>

        <div className={styles['seller-promotion']}>
          <SellerPromotion />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
