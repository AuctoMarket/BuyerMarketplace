import React from 'react';
import { render, screen } from '@testing-library/react';

import SellerInfo from '..';

test('renders SellerInfo', () => {
  render(
    <SellerInfo
      data={{
        avatar: 'test',
        name: 'test',
        isVerified: true,
        numReviews: 1,
      }}
      role="test"
    />,
  );
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
