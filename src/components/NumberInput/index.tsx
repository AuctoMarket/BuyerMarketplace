import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Button from '../Button';

interface Props extends ComponentProps<'div'> {
  value: number;
  onChangeValue: (value: number) => void;
  min?: number;
  max?: number;
}

function NumberInput({
  className,
  value,
  onChangeValue,
  min = 1,
  max,
  ...rest
}: Props) {
  const handleChangeValue = (value: string) => {
    const numberValue = Number(value);
    if (numberValue >= min && (!max || numberValue <= max)) {
      onChangeValue(numberValue);
    }
  };

  return (
    <div className={`${className} ${styles['number-input']}`} {...rest}>
      <Button
        className={styles['btn-decrease']}
        theme="white"
        onClick={() => onChangeValue(value - 1)}
        disabled={value <= min}
        data-testid="btn-decrease"
      >
        -
      </Button>
      <input
        className={styles['input']}
        type="number"
        value={value}
        onChange={(event) => handleChangeValue(event.target.value)}
      />
      <Button
        className={styles['btn-increase']}
        theme="white"
        disabled={!max || value >= max}
        onClick={() => onChangeValue(value + 1)}
        data-testid="btn-increase"
      >
        +
      </Button>
    </div>
  );
}

export default NumberInput;
