import React, { useEffect } from 'react';
import { Dropdown } from 'react-daisyui';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import CardBuyNow from '../../components/Product/Card';
import Filter from '../../components/Filter';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import useProductsList from '../../hooks/useProductsList';
import { Product, ProductsSort } from '../../types/product.type';

const sortBy: { label: string; value: ProductsSort['sort_by'] }[] = [
  { label: 'Recently Posted', value: 'posted_date' },
  { label: 'Price (Low to High)', value: 'price-low' },
  { label: 'Price (High to Low)', value: 'price-high' },
  { label: 'Name (A-Z)', value: 'name-asc' },
  { label: 'Name (Z-A)', value: 'name-desc' },
];
const defaultPaging = { anchor: 0, limit: 12 };
const defaultFilter = {
  languages: [],
  expansions: [],
  prices: [],
  product_types: [],
};

const ProductsPage = () => {
  const [showFilter, setShowFilter] = React.useState(false);
  const [filter, setFilter] = React.useState(defaultFilter);
  const [showSort, setShowSort] = React.useState(false);
  const [sort, setSort] =
    React.useState<ProductsSort['sort_by']>('posted_date');
  const [paging, setPaging] = React.useState(defaultPaging);
  const [count, setCount] = React.useState<number>(0);
  const [products, setProducts] = React.useState<Product[]>([]);
  const { isLoading, data } = useProductsList(filter, {
    sort_by: sort,
    ...paging,
  });

  useEffect(() => {
    if (showFilter) {
      document.body.classList.add('frozen');
    } else {
      document.body.classList.remove('frozen');
    }
  }, [showFilter]);
  useEffect(() => {
    if (!isLoading && data) {
      setCount(data.count);
      setProducts(data.products);
    }
  }, [isLoading, data]);

  const handleShowFilter = () => {
    setShowFilter(true);
  };
  const handleChangeFilter = (filter: any) => {
    setShowFilter(false);
    setFilter(filter);
    setPaging(defaultPaging);
  };
  const handleToggleSort = () => {
    setShowSort(!showSort);
  };
  const handleChangeSort = (sort: ProductsSort['sort_by']) => {
    setSort(sort);
    setPaging(defaultPaging);
  };
  const handleViewMore = () => {
    setPaging({ ...paging, limit: paging.limit + defaultPaging.limit });
  };

  return (
    <Layout>
      <div className={styles['products-page']}>
        <div className={styles['header']}>
          <div className={styles['title']}>All Products ({count})</div>

          <div className={styles['controls']}>
            <button className={styles['filter']} onClick={handleShowFilter}>
              Filter
              <Icon name="filter" className={styles['filter-icon']} />
            </button>

            <Dropdown className={styles['sort']} end open={showSort}>
              <span className={styles['mobile-hidden']}>Sort By:</span>
              <Dropdown.Toggle
                className={styles['sort-toggle']}
                onClick={handleToggleSort}
              >
                <span className={styles['mobile-shown']}>Sort By</span>
                <span className={styles['mobile-hidden']}>
                  {sortBy.find((item) => item.value === sort)?.label}
                </span>
                <Icon
                  name="chevron-down"
                  className={styles['chevron-down-icon']}
                />
              </Dropdown.Toggle>
              {showSort && (
                <Dropdown.Menu className={styles['sort-menu']}>
                  {sortBy.map((item, index) => (
                    <Dropdown.Item
                      className={`${styles['sort-menu-item']} ${
                        sort === item.value ? styles['active'] : ''
                      }`}
                      key={index}
                      onClick={() => handleChangeSort(item.value)}
                    >
                      {item.label}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              )}
            </Dropdown>
          </div>
        </div>

        <div className={styles['main']}>
          <div
            className={`${styles['filter-container']} ${
              showFilter ? styles['shown'] : ''
            }`}
          >
            <div className={styles['filter-content']}>
              <div className={styles['filter-heading']}>
                Filters:
                <button
                  className={styles['close-button']}
                  onClick={() => setShowFilter(false)}
                >
                  &times;
                </button>
              </div>

              <Filter
                className={styles['filter']}
                data={filter}
                onChangeData={handleChangeFilter}
              />
            </div>
          </div>

          <div className={styles['products-list-container']}>
            <div className={styles['products-list']}>
              {products.map((product, index) => (
                <Link
                  key={index}
                  className={styles['card-link']}
                  to={`/products/${product.id}`}
                >
                  <CardBuyNow className={styles['card']} data={{ product }} />
                </Link>
              ))}
            </div>

            {count > paging.anchor + paging.limit && (
              <div className={styles['view-more-container']}>
                <Button
                  className={styles['view-more']}
                  theme="black"
                  onClick={handleViewMore}
                >
                  View More
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
