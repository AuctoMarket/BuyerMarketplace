import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import OrderDetails from '..';
import { ProductType } from '../../../../types/product.type';

describe('OrderDetails', () => {
  const data: any = {
    product: {
      id: '1',
      type: ProductType.Bid,
      title: 'test',
      condition: 4,
      description: 'test',
      images: ['test'],
      seller: {
        id: '1',
        name: 'test',
        numFollowers: 1,
      },
      bidPrice: 1,
      numBids: 1,
      price: 1,
      quantity: 1,
      soldQuantity: 1,
      postedDate: new Date(),
    },
    price: 1,
    quantity: 1,
    subTotal: 1,
    additionalFee: 1,
    deliveryFee: 1,
    paymentFee: 1,
    total: 1,
  };

  test('renders OrderDetails', async () => {
    render(
      <BrowserRouter>
        <OrderDetails data={data} role="orderdetails" />
      </BrowserRouter>,
    );

    const orderDetails = await screen.findByRole('orderdetails');
    expect(orderDetails).toBeInTheDocument();
  });

  test('renders OrderDetails with 0 additional, delivery and payment fee', async () => {
    render(
      <BrowserRouter>
        <OrderDetails
          data={{
            ...data,
            additionalFee: 0,
            deliveryFee: 0,
            paymentFee: 0,
          }}
          role="orderdetails"
        />
      </BrowserRouter>,
    );

    const orderDetails = await screen.findByRole('orderdetails');
    expect(orderDetails).toBeInTheDocument();
  });
});
