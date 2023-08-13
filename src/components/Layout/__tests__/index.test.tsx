import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Layout from '..';

test('renders Layout', () => {
  render(
    <BrowserRouter>
      <Layout>test</Layout>
    </BrowserRouter>,
  );
  const text = screen.getByText('test');
  expect(text).toBeInTheDocument();
});
