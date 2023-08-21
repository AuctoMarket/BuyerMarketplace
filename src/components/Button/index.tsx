import React, { ComponentProps } from 'react';

import styles from './index.module.scss';

interface Props extends ComponentProps<'button'> {
  theme?: 'white' | 'black' | 'color' | 'gray';
}

function Button({ theme = 'white', className, children, ...rest }: Props) {
  return (
    <button
      type="button"
      className={`${styles['button']} ${styles[theme]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
