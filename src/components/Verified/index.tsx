import React, { ComponentProps } from 'react';

import Icon from '../Icon';

interface Props extends ComponentProps<'img'> {}

function Verified({ className, ...rest }: Props) {
  return (
    <Icon className={className} name="verified" alt="verified" {...rest} />
  );
}

export default Verified;
