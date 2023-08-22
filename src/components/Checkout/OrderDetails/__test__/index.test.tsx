import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import OrderDetails from '..';
import { ProductType, Product } from '../../../../types/product.type';

describe('OrderDetails', () => {
  const data: {
    product: Product;
    quantity: number;
    subTotal: number;
    delivery: number;
    paymentFee: number;
    orderTotal: number;
  } = {
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
    quantity: 1,
    subTotal: 1,
    delivery: 1,
    paymentFee: 1,
    orderTotal: 1,
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

  test('renders OrderDetails with free delivery and payment fee', async () => {
    render(
      <BrowserRouter>
        <OrderDetails
          data={{
            ...data,
            delivery: 0,
            paymentFee: 0,
          }}
          role="orderdetails"
        />
      </BrowserRouter>,
    );

    const orderDetails = await screen.findByRole('orderdetails');
    expect(orderDetails).toBeInTheDocument();
  });

  test('renders OrderDetails without footer', async () => {
    render(
      <BrowserRouter>
        <OrderDetails data={data} showFooter={false} role="orderdetails" />
      </BrowserRouter>,
    );

    const orderDetails = await screen.findByRole('orderdetails');
    expect(orderDetails).toBeInTheDocument();
  });
});
