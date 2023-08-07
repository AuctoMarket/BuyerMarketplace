import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Logo from '../Logo';
import SearchBox from '../SearchBox';
import List from '../List';
import Icon from '../Icon';
import Dropdown from '../Dropdown';

interface Props extends ComponentProps<'div'> {
  navbar?: Boolean;
}

function Header({ className, navbar = true, ...rest }: Props) {
  return (
    <div className={`${styles['header']} ${className}`} {...rest}>
      {navbar && (
        <List
          className={styles['navbar-left-mobile']}
          items={[
            <Dropdown
              className={styles['dropdown']}
              items={[
                'Search',
                'Marketplace',
                'About',
                'My Bids',
                'My Orders',
                'Contact',
              ]}
            >
              <Icon name="menu" />
            </Dropdown>,
          ]}
        />
      )}
      <Logo
        className={styles['logo']}
        type="horizontal"
        theme="inverted-color"
      />
      {navbar && (
        <>
          <SearchBox className={styles['search-box']} />
          <List
            className={styles['navbar-right']}
            items={[
              <Icon name="shopping-cart" />,
              <Icon name="user" />,
              <Dropdown
                className={styles['dropdown']}
                items={[
                  'Marketplace',
                  'About',
                  'My Bids',
                  'My Orders',
                  'Contact',
                ]}
              >
                <Icon name="menu" />
              </Dropdown>,
            ]}
          />
          <List
            className={styles['navbar-right-mobile']}
            items={[<Icon name="shopping-cart" />, <Icon name="user" />]}
          />
        </>
      )}
    </div>
  );
}

export default Header;
