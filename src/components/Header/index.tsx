import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import Logo from '../Logo';
// import SearchBox from '../SearchBox';
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
              // 'Search',
              <Link to="/">Marketplace</Link>,
              // 'About',
              // 'My Bids',
              // 'My Orders',
              <Link to="https://t.me/auctomarketplace" target="_blank">
                Contact Us
              </Link>,
            ]}
          >
            <Icon name="menu" />
          </Dropdown>,
        ]}
      />
      <Link className={styles['logo']} to="/">
        <Logo type="horizontal" theme="inverted-color" />
      </Link>
      {/* <SearchBox className={styles['search-box']} /> */}
      <List
        className={styles['navbar-right']}
        items={[
          // <Icon name="shopping-cart" />,
          <Icon name="user" />,
          <Dropdown
            className={styles['dropdown']}
            items={[
              <Link to="/">Marketplace</Link>,
              <Link to="https://t.me/auctomarketplace" target="_blank">
                Contact Us
              </Link>,
            ]}
            // items={['Marketplace', 'About', 'My Bids', 'My Orders', 'Contact']}
          >
            <Icon name="menu" />
          </Dropdown>,
        ]}
      />
      <List
        className={styles['navbar-right-mobile']}
        items={[<Icon name="user" />]}
        // items={[<Icon name="shopping-cart" />, <Icon name="user" />]}
      />
    </div>
  );
}

export default Header;
