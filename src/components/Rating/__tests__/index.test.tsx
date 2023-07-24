import React from 'react';
import { render, screen } from '@testing-library/react';

import Rating from '..';

test('renders Rating', () => {
  render(<Rating rate={4} />);
  const text = screen.getAllByAltText('star-black');
  expect(text.length).toBe(4);
});
