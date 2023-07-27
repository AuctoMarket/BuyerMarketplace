import React from 'react';
import { render, screen } from '@testing-library/react';

import PreOrder from '..';

test('renders PreOrder', () => {
  render(
    <PreOrder
      data={{
        price: 700,
      }}
      role="test"
    />,
  );
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
