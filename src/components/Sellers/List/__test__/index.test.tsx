import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import List from '..';

describe('List', () => {
  test('renders List', async () => {
    render(
      <BrowserRouter>
        <List role="sellers" />;
      </BrowserRouter>,
    );

    const category = await screen.findByRole('sellers');

    expect(category).toBeInTheDocument();
  });
});
