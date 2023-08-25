import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Logo from '../../components/Logo';

interface Props extends ComponentProps<'div'> {}

function Footer({ className, ...rest }: Props) {
  return (
    <div id="footer" className={`${styles['footer']} ${className}`} {...rest}>
      <div className={styles['logo']}>
        <Logo type="horizontal" theme="white" />
      </div>
      <div className={styles['text']}>
        Copyright © 2023 Aucto. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
