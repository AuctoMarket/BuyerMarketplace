import { DeliveryMethod, PaymentMethod } from '../../types/order.type';
import calculateOrderFees from '../calculateOrderFees';

describe('calculateOrderFees', () => {
  test('should return correct order fees', () => {
    const order = {
      price: 1,
      quantity: 1,
      deliveryMethod: DeliveryMethod.StandardDelivery,
      paymentMethod: PaymentMethod.Card,
    };

    expect(calculateOrderFees(order)).toEqual({
      subTotal: 1,
      additionalFee: 100,
      deliveryFee: 400,
      paymentFee: 11,
      total: 512,
    });
  });

  test('should return correct order fees when 0 additional fee and SelfCollection & PayNow', () => {
    const order = {
      price: 100,
      quantity: 100,
      deliveryMethod: DeliveryMethod.SelfCollection,
      paymentMethod: PaymentMethod.PayNow,
    };

    expect(calculateOrderFees(order)).toEqual({
      subTotal: 10000,
      additionalFee: 0,
      deliveryFee: 0,
      paymentFee: 0,
      total: 10000,
    });
  });
});
