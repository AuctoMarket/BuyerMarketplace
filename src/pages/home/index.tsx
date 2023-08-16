import React from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import ProductPromotion from '../../components/Product/Promotion';
import ProductRecentlyAdded from '../../components/Product/RecentlyAdded';
import SellerPromotion from '../../components/Sellers/Promotion';
import useProductsList from '../../hooks/useProductsList';
import Header from '../../components/Checkout/CheckoutDetails/Header';

function HomePage() {
  const { productsList: recentlyAdded = [] } = useProductsList();

  return <Header data={{ number: '1', text: 'Contact Details' }} />;
}

export default HomePage;
