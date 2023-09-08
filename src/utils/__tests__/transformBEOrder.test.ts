import { DeliveryMethod, PaymentMethod } from '../../types/order.type';
import transformBEOrder from '../transformBEOrder';

describe('transformBEOrder', () => {
  const order = {
    productId: 'test',
    price: 1,
    quantity: 1,
    subTotal: 1,
    additionalFee: 1,
    deliveryFee: 1,
    paymentFee: 1,
    total: 1,
    buyerId: 'test',
    contactDetails: {
      email: 'test',
      emailConfirm: 'test',
      phoneNumber: 'test',
      telegramHandle: 'test',
    },
    deliveryMethod: DeliveryMethod.SelfCollection,
    deliveryAddress: {
      addressLine1: 'test',
      addressLine2: 'test',
      postalCode: 'test',
    },
    paymentMethod: PaymentMethod.Card,
  };

  const transformedOrder = {
    product_id: order.productId,
    order_quantity: order.quantity,
    buyer_id: order.buyerId,
    email: order.contactDetails.email,
    phone_number: order.contactDetails.phoneNumber,
    telegram_handle: order.contactDetails.telegramHandle,
    address_line_1: order.deliveryAddress.addressLine1,
    address_line_2: order.deliveryAddress.addressLine2,
    postal_code: order.deliveryAddress.postalCode,
    fees: {
      product_price: order.price,
      small_order_fee: order.additionalFee,
      delivery_type: order.deliveryMethod,
      delivery_fee: order.deliveryFee,
      payment_type: order.paymentMethod,
      payment_fee: order.paymentFee,
      total_paid: order.total,
    },
  };

  it('should return transformed order', () => {
    expect(transformBEOrder(order)).toEqual(transformedOrder);
  });
});
