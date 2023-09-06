import React from 'react';
import { render, screen } from '@testing-library/react';

import EstimatedDeliveryDate from '..';

describe('EstimatedDeliveryDate', () => {
  const data = { deliveryDate: new Date() };

  test('renders EstimatedDeliveryDate', () => {
    render(<EstimatedDeliveryDate data={data} role="test" />);
    const text = screen.getByRole('test');
    expect(text).toBeInTheDocument();
  });
});
