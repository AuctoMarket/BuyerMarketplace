import React from 'react';

import './index.scss';
import LogoHorizontalWhite from '../../components/Logo/Horizontal/White';

function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <LogoHorizontalWhite />
      </div>
      <div className="text">Copyright © 2023 Aucto. All rights reserved</div>
    </div>
  );
}

export default Footer;
