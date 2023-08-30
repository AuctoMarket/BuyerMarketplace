import React from 'react';

import styles from './index.module.scss';
import Layout from '../../../components/Layout';

const LoginPage = () => {
  return (
    <Layout>
      <div className={styles['login-page']}>Login</div>
    </Layout>
  );
};

export default LoginPage;
