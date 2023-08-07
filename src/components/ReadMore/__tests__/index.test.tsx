import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ReadMore from '..';

describe('ReadMore', () => {
  test('renders ReadMore', async () => {
    render(<ReadMore>text</ReadMore>);

    const text = await screen.findByText('text');
    expect(text).toBeInTheDocument();
  });

  test('renders ReadMore with long text', async () => {
    const str = 'text'.repeat(100);
    render(
      <ReadMore showAll={false} maxChars={10}>
        {str}
      </ReadMore>,
    );

    const text = await screen.findByText(str.slice(0, 10));
    expect(text).toBeInTheDocument();

    const button = await screen.findByText('Read more');
    userEvent.click(button);
  });
});
