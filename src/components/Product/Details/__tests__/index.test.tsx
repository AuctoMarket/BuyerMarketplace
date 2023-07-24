import React from 'react';
import { render, screen } from '@testing-library/react';

import Details from '..';

test('renders Details', () => {
  render(<Details data={{ condition: 5, description: '' }} role="test" />);
  const text = screen.getByRole('test');
  expect(text).toBeInTheDocument();
});
