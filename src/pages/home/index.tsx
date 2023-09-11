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
  const { productsList: preOrder = [] } = useProductsList({
    product_type: ProductType.PreOrder,
  });
  const { productsList: recentlyAdded = [] } = useProductsList(
    { product_type: ProductType.BuyNow },
    { sort_by: 'posted_date' },
  );

  return (
    <Layout>
      <div className={styles['home-page']}>
        <ProductPromotion
          className={styles['promotion']}
          data={{
            images: [
              isMobile()
                ? '/images/promotion/home-banner-mobile.png'
                : '/images/promotion/home-banner.png',
            ],
            title:
              'Collection: Pokemon S&S Brilliant Stars Pre-Order yours today!',
          }}
        />

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
