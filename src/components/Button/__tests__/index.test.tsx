import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '..';

test('renders Button', () => {
  render(<Button>test</Button>);
  const text = screen.getByText('test');
  expect(text).toBeInTheDocument();
});
