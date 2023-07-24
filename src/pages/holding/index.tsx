import React from 'react';

import styles from './index.module.scss';
import LogoHorizontalFullColor from '../../components/Logo/Horizontal/FullColor';
import LogoVerticalFullColor from '../../components/Logo/Vertical/FullColor';
import Footer from '../../components/Footer';

function HoldingPage() {
  return (
    <div className={styles.layout}>
      <div className={styles['holding-page']}>
        <div className={styles['logo']}>
          <LogoHorizontalFullColor />
          <LogoVerticalFullColor />
        </div>
        <div className={styles['text']}>
          <div className={styles['text-1']}>Collectible Marketplace</div>
          <div className={styles['text-2']}>Launching in late 2023</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HoldingPage;
