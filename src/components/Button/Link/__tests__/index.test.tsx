import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Link from '..';

test('renders Link', () => {
  render(
    <BrowserRouter>
      <Link to="/test">test</Link>
    </BrowserRouter>,
  );
  const text = screen.getByText('test');
  expect(text).toBeInTheDocument();
});
