import React, { ComponentProps } from 'react';

import styles from './index.module.scss';

interface Props extends ComponentProps<'div'> {
  data: {
    number: string;
    text: string;
  };
}

export function Header({ className, data: { number, text }, ...rest }: Props) {
  return (
    <div
      className={`${className} ${styles['contact-detail-header']}`}
      {...rest}
    >
      <div className={`${styles['contact-detail-header-number']}`}>
        {number}
      </div>
      <div className={`${styles['contact-detail-header-content']}`}>{text}</div>
    </div>
  );
}

export default Header;
