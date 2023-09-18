import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Banner from '..';

describe('Banner', () => {
  test('renders Banner', async () => {
    render(
      <BrowserRouter>
        <Banner role="banner" />;
      </BrowserRouter>,
    );

    const banner = await screen.findByRole('banner');

    expect(banner).toBeInTheDocument();
  });
});
