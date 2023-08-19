import React from 'react';
import { render, screen } from '@testing-library/react';

import SectionHeading from '..';

describe('SectionHeading', () => {
  const data = {
    number: '1',
    text: 'Text',
  };

  test('renders SectionHeading', async () => {
    render(<SectionHeading data={data} role="header" />);

    const header = await screen.findByRole('header');
    expect(header).toBeInTheDocument();
  });
});
