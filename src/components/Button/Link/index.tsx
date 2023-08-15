import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

import styles from './index.module.scss';

interface Props extends LinkProps {
  theme?: 'white' | 'black' | 'color';
}

function Link({ theme = 'white', className, children, ...rest }: Props) {
  return (
    <RouterLink
      className={`${styles['link']} ${styles[theme]} ${className}`}
      {...rest}
    >
      {children}
    </RouterLink>
  );
}

export default Link;
