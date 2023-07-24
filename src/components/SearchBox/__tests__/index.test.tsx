import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchBox from '..';

test('renders SearchBox', () => {
  render(<SearchBox />);
  const text = screen.getByAltText('Search');
  expect(text).toBeInTheDocument();
});
