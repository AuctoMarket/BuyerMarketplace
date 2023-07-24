import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Star from '../Star';
import List from '../List';

interface Props extends ComponentProps<'ul'> {
  scale?: number;
  rate: number;
}

function Rating({ className, scale = 5, rate, ...rest }: Props) {
  const stars = [];
  for (let i = 1; i <= scale; i++) {
    stars.push(<Star key={i} theme={rate >= i ? 'black' : 'white'} />);
  }

  return (
    <List
      className={`${styles['rating']} ${className}`}
      items={stars}
      {...rest}
    />
  );
}

export default Rating;
