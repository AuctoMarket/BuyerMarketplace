import React, { ComponentProps, ReactNode } from 'react';

interface Props extends ComponentProps<'ul'> {
  items: ReactNode[];
}

function List({ className, items, ...rest }: Props) {
  return (
    <ul className={className} {...rest}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
