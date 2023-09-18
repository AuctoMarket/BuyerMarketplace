import React from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import ProductPreOrder from '../../components/Product/PreOrder';
import ProductRecentlyAdded from '../../components/Product/RecentlyAdded';
import useProductsList from '../../hooks/useProductsList';
import { ProductType } from '../../types/product.type';
import Banner from '../../components/Banner';

function HomePage() {
  const { productsList: preOrder = [] } = useProductsList(
    { product_type: ProductType.PreOrder },
    { limit: 4, offset: 0 },
  );
  const { productsList: recentlyAdded = [] } = useProductsList(
    { product_type: ProductType.BuyNow },
    { sort_by: 'posted_date' },
  );

  return (
    <Layout>
      <div className={styles['home-page']}>
        <Banner className={styles['banner']} />

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
    </Layout>
  );
}

export default HomePage;
