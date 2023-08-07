import React from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';

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
          <div className={styles['text-3']}>
            <Link to="/pre-launch-sale">Pre-launch sale!</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HoldingPage;
