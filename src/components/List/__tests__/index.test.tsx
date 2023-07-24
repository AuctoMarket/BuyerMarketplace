import React from 'react';
import { render, screen } from '@testing-library/react';

import List from '..';

test('renders List', () => {
  render(<List items={['test']} />);
  const text = screen.getByText('test');
  expect(text).toBeInTheDocument();
});
