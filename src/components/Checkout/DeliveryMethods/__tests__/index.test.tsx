import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import DeliveryMethods from '..';
import { CollectionPoint, DeliveryMethod } from '../../../../types/order.type';
import { ProductType } from '../../../../types/product.type';

describe('DeliveryMethods', () => {
  const product = {
    type: ProductType.BuyNow,
    releasedDate: new Date(),
    orderedDate: new Date(),
  };
  const data = {
    deliveryMethod: DeliveryMethod.SelfCollection,
    deliveryAddress: {
      addressLine1: '',
      addressLine2: '',
      postalCode: '',
    },
  };

  test('renders DeliveryMethods with self collection', async () => {
    render(
      <BrowserRouter>
        <DeliveryMethods
          product={product}
          data={data}
          onChangeData={() => {}}
          role="DeliveryMethods"
        />
      </BrowserRouter>,
    );

    const component = await screen.findByRole('DeliveryMethods');
    expect(component).toBeInTheDocument();

    const btn2 = await screen.findByTestId('btn-2');
    userEvent.click(btn2);

    const dhobyGhautMRT = await screen.findByTestId(
      CollectionPoint.DhobyGhautMRT,
    );
    userEvent.click(dhobyGhautMRT);
  });

  test('renders DeliveryMethods with normal delivery', async () => {
    render(
      <BrowserRouter>
        <DeliveryMethods
          product={product}
          data={{ ...data, deliveryMethod: DeliveryMethod.StandardDelivery }}
          onChangeData={() => {}}
          role="DeliveryMethods"
        />
      </BrowserRouter>,
    );

    const component = await screen.findByRole('DeliveryMethods');
    expect(component).toBeInTheDocument();

    const address1 = await screen.findByRole('input-address-1');
    fireEvent.change(address1, { target: { value: '1' } });
  });
});
