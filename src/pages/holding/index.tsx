import React from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import Logo from '../../components/Logo';

function HoldingPage() {
  return (
    <Layout className={styles.layout} header={false}>
      <div className={styles['holding-page']}>
        <div className={styles['logo']}>
          <Logo type="horizontal" theme="full-color" />
          <Logo type="vertical" theme="full-color" />
        </div>
        <div className={styles['text']}>
          <div className={styles['text-1']}>Collectible Marketplace</div>
          <div className={styles['text-2']}>Launching in late 2023</div>
        </div>
      </div>
    </Layout>
  );
}

export default HoldingPage;
