import React, { ComponentProps } from 'react';

import Image from '../Image';

interface Props extends ComponentProps<'img'> {
  type: 'horizontal' | 'vertical';
  theme: 'white' | 'black' | 'color' | 'full-color' | 'inverted-color';
}

function Logo({ className, type, theme, ...rest }: Props) {
  return (
    <Image
      className={className}
      src={`/images/logo/${type}/${theme}.png`}
      alt={`logo-${type}-${theme}`}
      {...rest}
    />
  );
}

export default Logo;
