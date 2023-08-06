import React from 'react';
import { render, screen } from '@testing-library/react';

import CategoryItem from '..';

describe('CategoryItem', () => {
  const data = {
    title: 'Test',
    image: 'ImageTest',
    icon: 'IconTest',
  };

  test('renders CategoryItem', async () => {
    render(<CategoryItem data={data} role="category" />);

    const category = await screen.findByRole('category');
    expect(category).toBeInTheDocument();
  });
});
