import transformOrder from '../transformOrder';

describe('transformOrder', () => {
  const order = {
    order_id: 'test',
    guest_order_id: 'test',
    product_id: 'test',
    order_quantity: 1,
    fees: {
      product_price: 1,
      small_order_fee: 1,
      delivery_fee: 1,
      payment_fee: 1,
      total_paid: 1,
      delivery_type: 'test',
      payment_type: 'test',
    },
    buyer_id: 'test',
    email: 'test',
    phone_number: 'test',
    telegram_handle: 'test',
    address_line_1: 'test',
    address_line_2: 'test',
    postal_code: 'test',
    payment_status: 'test',
    order_date: '2021-01-01',
  };
  const transformedOrder = {
    id: order.order_id || order.guest_order_id,
    productId: order.product_id,
    price: order.fees.product_price,
    quantity: order.order_quantity,
    subTotal: order.fees.product_price * order.order_quantity,
    additionalFee: order.fees.small_order_fee,
    deliveryFee: order.fees.delivery_fee,
    paymentFee: order.fees.payment_fee,
    total: order.fees.total_paid,
    buyerId: order.buyer_id,
    contactDetails: {
      email: order.email,
      emailConfirm: order.email,
      phoneNumber: order.phone_number,
      telegramHandle: order.telegram_handle,
    },
    deliveryMethod: order.fees.delivery_type,
    deliveryAddress: {
      addressLine1: order.address_line_1,
      addressLine2: order.address_line_2,
      postalCode: order.postal_code,
    },
    paymentMethod: order.fees.payment_type,
    paymentStatus: order.payment_status,
    orderedDate: new Date(order.order_date),
  };

  it('should return transformed order', () => {
    expect(transformOrder(order)).toEqual(transformedOrder);
  });

  it('should return transformed guest order', () => {
    expect(
      transformOrder({
        ...order,
        order_id: undefined,
      }),
    ).toEqual(transformedOrder);
  });
});
