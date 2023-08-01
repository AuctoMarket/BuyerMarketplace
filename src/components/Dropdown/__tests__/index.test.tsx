import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Dropdown from '..';

describe('Dropdown', () => {
  test('renders Dropdown', async () => {
    render(<Dropdown items={['item']}>button</Dropdown>);

    const button = await screen.findByText('button');
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    const item = await screen.findByText('item');
    expect(item).toBeInTheDocument();
  });
});
