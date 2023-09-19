import React from 'react';
import Layout from '../../components/Layout';
import styles from './index.module.scss';
import Filter from '../../components/Filter';
import List from '../../components/List';
import useProductsList from '../../hooks/useProductsList';
import { ProductType } from '../../types/product.type';
import { Dropdown } from 'react-daisyui';
import Icon from '../../components/Icon';
import CardPreOrder from '../../components/Product/Card/PreOrder';
import CardBuyNow from '../../components/Product/Card';
import { Link } from 'react-router-dom';

const BrowsePage = () => {
  const { productsList: products = [] } = useProductsList(
    { product_type: ProductType.PreOrder },
    { limit: 4, offset: 0 },
  );

  return (
    <Layout>
      <div className={styles['browse-page']}>
        <div className={styles['side-bar']}>
          <div className={styles['title-sidebar']}>All Product (122)</div>
          <Filter />
        </div>
        <div className={styles['main']}>
          <div className={styles['header']}>
            Sort By:
            <Dropdown className={styles['sort']}>
              <Dropdown.Toggle className={styles['sort-title']}>
                Recently Posted
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-52">
                <Dropdown.Item>Recently Posted</Dropdown.Item>
                <Dropdown.Item>Price (Low to High)</Dropdown.Item>
                <Dropdown.Item>Price (High to Low)</Dropdown.Item>
                <Dropdown.Item>Name (A-Z)</Dropdown.Item>
                <Dropdown.Item>Name (Z-A)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Icon name="down-arrow" />
          </div>
          <div className={styles['product-list']}>
            {products.map((product, index) => {
              if (product.type === ProductType.PreOrder) {
                return (
                  <Link
                    className={styles['card-link']}
                    to={`/products/${product.id}`}
                  >
                    <CardPreOrder
                      className={styles['card']}
                      data={{ product }}
                      key={index}
                    />
                  </Link>
                );
              } else {
                return (
                  <Link
                    className={styles['card-link']}
                    to={`/products/${product.id}`}
                  >
                    <CardBuyNow
                      className={styles['card']}
                      data={{ product }}
                      key={index}
                    />
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BrowsePage;
