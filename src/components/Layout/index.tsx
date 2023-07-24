import React, { ComponentProps } from 'react';

import Header from '../Header';
import Footer from '../Footer';

interface Props extends ComponentProps<'div'> {
  header?: Boolean;
  footer?: Boolean;
}

function Layout({
  className,
  header = true,
  footer = true,
  children,
  ...rest
}: Props) {
  return (
    <div className={className} {...rest}>
      {header && <Header />}

      {children}

      {footer && <Footer />}
    </div>
  );
}

export default Layout;
