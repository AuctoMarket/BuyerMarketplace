import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import List from '..';

describe('List', () => {
  test('renders List', async () => {
    render(
      <BrowserRouter>
        <List role="categories" />;
      </BrowserRouter>,
    );

    const category = await screen.findByRole('categories');

    expect(category).toBeInTheDocument();
  });
});
