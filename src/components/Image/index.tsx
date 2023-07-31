import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'img'> {
  src: string;
}

const Image = ({ className, src, alt, ...rest }: Props) => (
  <img className={className} src={src} alt={alt} {...rest} />
);

export default Image;
