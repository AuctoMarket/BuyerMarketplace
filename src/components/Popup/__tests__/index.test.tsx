import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Popup, { PopupContext } from '..';

describe('Popup', () => {
  test("doesn't render Popup", () => {
    render(
      <PopupContext.Provider value={{}}>
        <Popup />
      </PopupContext.Provider>,
    );

    const dialog = screen.queryByRole('dialog');
    expect(dialog).toBeNull();
  });

  test('renders Popup', async () => {
    render(
      <PopupContext.Provider
        value={{
          popupOpen: true,
          popupContent: 'test',
          togglePopup: () => {},
        }}
      >
        <Popup />
      </PopupContext.Provider>,
    );

    const dialog = await screen.findByRole('dialog');
    expect(dialog).toBeInTheDocument();

    const button = await screen.findByRole('button', { name: '×' });
    userEvent.click(button);
  });

  test('renders Popup with no togglePopup', async () => {
    render(
      <PopupContext.Provider
        value={{
          popupOpen: true,
          popupContent: 'test',
        }}
      >
        <Popup />
      </PopupContext.Provider>,
    );

    const dialog = await screen.findByRole('dialog');
    expect(dialog).toBeInTheDocument();

    const button = await screen.findByRole('button', { name: '×' });
    userEvent.click(button);
  });
});
