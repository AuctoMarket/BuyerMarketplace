import React, { ComponentProps } from 'react';

import styles from './index.module.scss';

interface Props extends ComponentProps<'input'> {
  theme?: 'black' | 'white';
}

function Input({ type = 'text', theme = 'black', className, ...rest }: Props) {
  return (
    <input
      className={`${styles['input']} ${styles[theme]} ${className}`}
      type={type}
      {...rest}
    />
  );
}

export default Input;
