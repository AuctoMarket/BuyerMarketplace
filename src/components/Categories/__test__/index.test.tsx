import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import CategoryList from '..';

describe('CategoryItem', () => {
  test('renders CategoryList', async () => {
    render(
      <BrowserRouter>
        <CategoryList data={{ test: 'test' }} role="categories" />;
      </BrowserRouter>,
    );
    const category = await screen.findByRole('categories');
    expect(category).toBeInTheDocument();
  });
});
