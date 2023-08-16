import React from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import Logo from '../../components/Logo';
import Header from '../../components/Checkout/CheckoutDetails/Header';

function HoldingPage() {
  return <Header data={{ number: '1', text: 'Contact Details' }} />;
}

export default HoldingPage;
