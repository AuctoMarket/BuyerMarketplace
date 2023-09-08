import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import VerifyEmailForm from '..';

describe('VerifyEmail', () => {
  test('render VerifyEmail', async () => {
    render(
      <BrowserRouter>
        <VerifyEmailForm role="verifyEmail" />
      </BrowserRouter>,
    );
    const verifyEmail = await screen.findByRole('verifyEmail');
    expect(verifyEmail).toBeInTheDocument();
  });
});
