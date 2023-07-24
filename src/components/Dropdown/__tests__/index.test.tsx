import React from 'react';
import { render, screen } from '@testing-library/react';

import Dropdown from '..';

test('renders Dropdown', () => {
  render(<Dropdown items={[]}>test</Dropdown>);
  const text = screen.getByText('test');
  expect(text).toBeInTheDocument();
});
