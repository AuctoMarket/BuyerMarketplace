import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'img'> {
  src: string;
}

const Image = ({ className, src, alt, ...rest }: Props) => (
  <img
    className={className}
    src={`${process.env.PUBLIC_URL}${src}`}
    alt={alt}
    {...rest}
  />
);

export default Image;
