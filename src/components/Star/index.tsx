import React, { ComponentProps } from 'react';

import Icon from '../Icon';

interface Props extends ComponentProps<'img'> {
  theme?: 'white' | 'black';
}

function Star({ className, theme = 'white', ...rest }: Props) {
  return (
    <Icon
      className={className}
      name={`star-${theme}`}
      alt={`star-${theme}`}
      {...rest}
    />
  );
}

export default Star;
