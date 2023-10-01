import React from 'react';
import { render, screen } from '@testing-library/react';

import Filter from '..';

describe('Filter', () => {
  test('renders Filter', () => {
    render(
      <Filter
        data={{
          languages: [],
          expansions: [],
          prices: [],
          product_types: [],
        }}
        onChangeData={() => {}}
        data-testid="test"
      />,
    );

    const comp = screen.getByTestId('test');
    expect(comp).toBeInTheDocument();
  });
});
