import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import GroupButton from '..';
import { DeliveryMethod } from '../../../../../types/checkout.type';

describe('GroupButton', () => {
  const TestComponent = () => {
    const [selectedMethod, setSelectedMethod] = React.useState(
      DeliveryMethod.SelfCollection,
    );

    return (
      <GroupButton
        method={selectedMethod}
        onChangeMethod={setSelectedMethod}
        role="GroupButton"
      />
    );
  };

  test('renders GroupButton', async () => {
    render(<TestComponent />);

    const category = await screen.findByRole('GroupButton');
    expect(category).toBeInTheDocument();

    const btn1 = await screen.findByTestId('btn-1');
    userEvent.click(btn1);

    const btn2 = await screen.findByTestId('btn-2');
    userEvent.click(btn2);
  });
});
