import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Logo from '../Logo';
import SearchBox from '../SearchBox';
import List from '../List';
import Icon from '../Icon';
import Dropdown from '../Dropdown';

interface Props extends ComponentProps<'div'> {}

function Header({ className, ...rest }: Props) {
  return (
    <div className={`${styles['header']} ${className}`} {...rest}>
      <List
        className={styles['navbar-left-mobile']}
        items={[
          <Dropdown
            className={styles['dropdown']}
            items={[
              'Search',
              'Browse',
              'About',
              'Become Seller',
              'Bid',
              'Contact',
            ]}
          >
            <Icon name="menu" />
          </Dropdown>,
        ]}
      />
      <Logo
        className={styles['logo']}
        type="horizontal"
        theme="inverted-color"
      />
      <SearchBox className={styles['search-box']} />
      <List
        className={styles['navbar-right']}
        items={[
          <Icon name="shopping-cart" />,
          <Icon name="heart" />,
          <Icon name="email" />,
          <Icon name="user" />,
          <Dropdown
            className={styles['dropdown']}
            items={['Browse', 'About', 'Become Seller', 'Bid', 'Contact']}
          >
            <Icon name="menu" />
          </Dropdown>,
        ]}
      />
      <List
        className={styles['navbar-right-mobile']}
        items={[<Icon name="shopping-cart" />, <Icon name="email" />]}
      />
    </div>
  );
}

export default Header;
