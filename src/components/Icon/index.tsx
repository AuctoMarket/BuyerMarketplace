import React from 'react';

import Image from '../Image';

interface Props extends React.ComponentProps<'img'> {
  name: string;
}

function Icon({ className, name, ...rest }: Props) {
  return (
    <Image
      className={className}
      src={`/images/icon/${name}.svg`}
      alt={name}
      {...rest}
    />
  );
}

export default Icon;
