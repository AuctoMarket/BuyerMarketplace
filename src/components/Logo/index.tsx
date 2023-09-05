import React, { ComponentProps } from 'react';

import Image from '../Image';

interface Props extends ComponentProps<'img'> {
  type?: 'horizontal' | 'vertical';
  slogan?: boolean;
  theme: 'white' | 'black' | 'color' | 'full-color' | 'inverted-color';
}

function Logo({ className, type, slogan = false, theme, ...rest }: Props) {
  const path = type
    ? type === 'horizontal' && slogan
      ? `${type}/slogan/${theme}`
      : `${type}/${theme}`
    : theme;

  return (
    <Image
      className={className}
      src={`/images/logo/${path}.svg`}
      alt={`logo-${path.replace('/', '-')}`}
      {...rest}
    />
  );
}

export default Logo;
