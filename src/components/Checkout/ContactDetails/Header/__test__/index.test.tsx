import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '..';

describe('Card', () => {
  const data = {
    number: '1',
    text: 'Text',
  };

  test('header Card', async () => {
    render(<Header data={data} role="header" />);

    const header = await screen.findByRole('header');
    expect(header).toBeInTheDocument();
  });
});
