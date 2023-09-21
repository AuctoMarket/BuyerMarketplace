import React from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import ProductPreOrder from '../../components/Product/PreOrder';
import ProductRecentlyAdded from '../../components/Product/RecentlyAdded';
import useProductsList from '../../hooks/useProductsList';
import { ProductType } from '../../types/product.type';

function HomePage() {
  const { data: { products: preOrder } = { products: [] } } = useProductsList(
    { product_type: [ProductType.PreOrder] },
    { anchor: 0, limit: 4 },
  );
  const { data: { products: recentlyAdded } = { products: [] } } =
    useProductsList({}, { sort_by: 'posted_date', anchor: 0, limit: 8 });

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
              seeMore: true,
            }}
          />
        )}
      </div>
    </Layout>
  );
}

export default HomePage;
