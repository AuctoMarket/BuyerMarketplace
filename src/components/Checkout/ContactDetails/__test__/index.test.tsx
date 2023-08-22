import { render, fireEvent, screen } from '@testing-library/react';

import ContactDetails from '..';

describe('ContactDetails', () => {
  test('renders ContactDetails', async () => {
    render(
      <ContactDetails
        data={{
          email: '',
          phoneNumber: '',
          emailConfirm: '',
          telegramHandle: '',
        }}
        onChangeData={() => {}}
        role="contact-details"
      />,
    );

    const component = await screen.findByRole('contact-details');
    expect(component).toBeInTheDocument();

    const emailInput = await screen.findByRole('input-email-adress');
    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } });

    const phoneInput = await screen.findByRole('input-phone-number');
    fireEvent.change(phoneInput, { target: { value: '+6512345678' } });

    const emmailconfirmInput = await screen.findByRole('input-confirm-email');
    fireEvent.change(emmailconfirmInput, {
      target: { value: 'abc@gmail.com' },
    });

    const telegramInput = await screen.findByRole(
      'contact-detail-input-telegram',
    );
    fireEvent.change(telegramInput, { target: { value: '@auctomarketplace' } });
  });

  test('renders ContactDetails with invalid value', async () => {
    render(
      <ContactDetails
        data={{
          email: '',
          phoneNumber: '',
          emailConfirm: '',
          telegramHandle: '',
        }}
        onChangeData={() => {}}
        role="contact-details"
      />,
    );

    const emailInput = await screen.findByRole('input-email-adress');
    fireEvent.change(emailInput, { target: { value: 'invalid_email' } });

    const phoneInput = await screen.findByRole('input-phone-number');
    fireEvent.change(phoneInput, { target: { value: 'invalid_phone_number' } });

    const emmailconfirmInput = await screen.findByRole('input-confirm-email');
    fireEvent.change(emmailconfirmInput, {
      target: { value: 'invalid_email' },
    });

    const telegramInput = await screen.findByRole(
      'contact-detail-input-telegram',
    );
    fireEvent.change(telegramInput, { target: { value: 'invalid_telegram' } });
  });

  test('renders ContactDetails with email not match', async () => {
    render(
      <ContactDetails
        data={{
          email: 'abc@gmail.com',
          phoneNumber: '',
          emailConfirm: '',
          telegramHandle: '',
        }}
        onChangeData={() => {}}
        role="contact-details"
      />,
    );

    const emmailconfirmInput = await screen.findByRole('input-confirm-email');
    fireEvent.change(emmailconfirmInput, {
      target: { value: 'abc123@gmail.com' },
    });
  });
});
