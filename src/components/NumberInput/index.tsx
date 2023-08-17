import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Button from '../Button';

interface Props extends ComponentProps<'div'> {
  value: number;
  onChangeValue: (value: number) => void;
}

function NumberInput({ className, value, onChangeValue, ...rest }: Props) {
  const handleOnChangeValue = (value: number) => {
    onChangeValue(value);
  };

  return (
    <div className={`${className} ${styles['number-input']}`} {...rest}>
      <Button
        className={styles['btn-decrease']}
        theme="white"
        onClick={() => handleOnChangeValue(value - 1)}
        disabled={value <= 1}
        data-testid="btn-decrease"
      >
        -
      </Button>
      <input type="number" value={value} readOnly />
      <Button
        className={styles['btn-increase']}
        theme="white"
        onClick={() => handleOnChangeValue(value + 1)}
        data-testid="btn-increase"
      >
        +
      </Button>
    </div>
  );
}

export default NumberInput;
