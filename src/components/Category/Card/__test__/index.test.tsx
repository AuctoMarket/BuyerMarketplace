import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from '..';

describe('Card', () => {
  const data = {
    category: {
      title: 'Test',
      image: 'ImageTest',
      icon: 'IconTest',
    },
  };

  test('renders Card', async () => {
    render(<Card data={data} role="category" />);

    const category = await screen.findByRole('category');
    expect(category).toBeInTheDocument();
  });
});
