import React from 'react';
import { render, screen } from '@testing-library/react';

import Layout from '..';

test('renders Layout', () => {
  render(<Layout>test</Layout>);
  const text = screen.getByText('test');
  expect(text).toBeInTheDocument();
});
