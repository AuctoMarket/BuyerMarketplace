import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Icon from '../Icon';
import Input from '../Input';

interface Props extends ComponentProps<'div'> {}

function SearchBox({ className, ...rest }: Props) {
  return (
    <div className={`${styles['search-box']} ${className}`} {...rest}>
      <Icon className={styles['icon']} name="search" alt="Search" />
      <Input className={styles['input']} type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBox;
