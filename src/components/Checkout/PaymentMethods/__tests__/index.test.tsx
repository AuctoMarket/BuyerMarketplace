import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PaymentMethods from '..';
import { PaymentMethod } from '../../../../types/order.type';

describe('PaymentMethods', () => {
  const TestComponent = () => {
    const [data, setData] = React.useState<PaymentMethod>(PaymentMethod.Card);

    return (
      <PaymentMethods
        data={data}
        onChangeData={setData}
        role="payment-methods"
      />
    );
  };

  test('renders PaymentMethods', async () => {
    render(<TestComponent />);

    const selfCollection = await screen.findByRole('payment-methods');
    expect(selfCollection).toBeInTheDocument();

    const card = await screen.findByTestId('card');
    userEvent.click(card);

    const paynow = await screen.findByTestId('paynow');
    userEvent.click(paynow);
  });
});
