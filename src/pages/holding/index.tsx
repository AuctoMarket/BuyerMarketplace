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
          Thank you for your interest, we are currently making some changes and
          will be back shortly!
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HoldingPage;
