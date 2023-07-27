import React from 'react';
import { render, screen } from '@testing-library/react';

import Buy from '..';

test('renders Buy', () => {
  render(
    <Buy
      data={{
        price: 700,
      }}
      role="test"
    />,
  );
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
