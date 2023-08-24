import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import StandardDelivery from '..';

describe('StandardDelivery', () => {
  const TestComponent = () => (
    <BrowserRouter>
      <StandardDelivery
        data={{
          addressLine1: '',
          addressLine2: '',
          postalCode: '',
        }}
        onChangeData={() => {}}
        role="normal-delivery"
      />
    </BrowserRouter>
  );

  test('renders StandardDelivery', async () => {
    render(<TestComponent />);

    const normalDelivery = await screen.findByRole('normal-delivery');
    expect(normalDelivery).toBeInTheDocument();

    const address1 = await screen.findByRole('input-address-1');
    fireEvent.change(address1, { target: { value: '1' } });
    fireEvent.change(address1, { target: { value: '' } });

    const address2 = await screen.findByRole('input-address-2');
    fireEvent.change(address2, { target: { value: '2' } });
    fireEvent.change(address2, { target: { value: '' } });

    const postalCode = await screen.findByRole('input-postal-code');
    fireEvent.change(postalCode, { target: { value: '3' } });
    fireEvent.change(postalCode, { target: { value: '' } });
  });
});
