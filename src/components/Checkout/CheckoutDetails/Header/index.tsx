import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Icon from '../../../Icon';

interface Props extends ComponentProps<'div'> {
  data: {
    number: string;
    text: string;
  };
}

export function ContactDetailHeader({
  className,
  data: { number, text },
  ...rest
}: Props) {
  return (
    <div
      className={`${className} ${styles['contact-detail-header']}`}
      {...rest}
    >
      <div className={`${styles['contact-detail-header-icon']}`}>
        <Icon name="ellipse_6" />
        <p className={`${styles['contact-detail-header-icon-number']}`}>
          {number}
        </p>
      </div>
      <div className={`${styles['contact-detail-header-content']}`}>{text}</div>
    </div>
  );
}

export default ContactDetailHeader;
