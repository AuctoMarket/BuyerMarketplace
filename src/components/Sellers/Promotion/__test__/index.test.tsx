import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Promotion from '..';

describe('Promotion', () => {
  test('renders Promotion', async () => {
    render(
      <BrowserRouter>
        <Promotion role="test" />;
      </BrowserRouter>,
    );

    const role = await screen.findByRole('test');

    expect(role).toBeInTheDocument();
  });
});
