import React from 'react';

import './index.scss';
import LogoHorizontalFullColor from '../../components/Logo/Horizontal/FullColor';
import Footer from '../../components/Footer';

function HoldingPage() {
  return (
    <div className="holding-page">
      <div className="top">
        <div className="logo">
          <LogoHorizontalFullColor />
        </div>
        <div className="text">
          <div className="text-1">Collectible Marketplace</div>
          <div className="text-2">Launching in late 2023</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HoldingPage;
