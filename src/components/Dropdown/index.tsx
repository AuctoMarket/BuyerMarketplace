import React, { ComponentProps, useState } from 'react';

import styles from './index.module.scss';
import List from '../List';

interface Props extends ComponentProps<'div'> {
  items: React.ReactNode[];
}

function Dropdown({ className, items, children, ...rest }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={`${styles['dropdown']} ${className}`} {...rest}>
      <div onClick={toggle}>{children}</div>
      {isOpen && <List className={styles['list']} items={items} />}
    </div>
  );
}

export default Dropdown;
