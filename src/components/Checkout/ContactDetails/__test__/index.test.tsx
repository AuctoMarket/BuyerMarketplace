import { render, fireEvent, screen } from '@testing-library/react';
import ContactDetailContent from '..';

// Test for invalid email
test('displays an error message for invalid email format', () => {
  render(
    <ContactDetailContent
      onEmailChange={() => {}}
      onPhoneNumberChange={() => {}}
      onEmailConfirmChange={() => {}}
      onTelegramHandleChange={() => {}}
    />,
  );

  const emailInput = screen.getByRole('input-email-adress');
  fireEvent.change(emailInput, { target: { value: 'invalid_email' } });

  const phoneInput = screen.getByRole('input-phone-number');
  fireEvent.change(phoneInput, { target: { value: 'abc123!' } });

  const emmailconfirmInput = screen.getByRole('input-confirm-email');
  fireEvent.change(emmailconfirmInput, { target: { value: 'abc123!' } });

  const telegramInput = screen.getByRole('contact-detail-input-telegram');
  fireEvent.change(telegramInput, { target: { value: 'abc123!' } });
});
