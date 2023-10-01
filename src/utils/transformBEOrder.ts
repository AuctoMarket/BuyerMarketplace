import type { Order } from '../types/order.type';

const transformBEOrder = (
  order: Omit<Order, 'id' | 'paymentStatus' | 'orderedDate'>,
): any => ({
  products: order.products.map((product: any) => ({
    product_id: product.id,
    order_quantity: product.quantity,
  })),
  buyer_id: order.buyerId,
  email: order.contactDetails.email,
  phone_number: order.contactDetails.phoneNumber,
  telegram_handle: order.contactDetails.telegramHandle,
  address_line_1: order.deliveryAddress.addressLine1,
  address_line_2: order.deliveryAddress.addressLine2,
  postal_code: order.deliveryAddress.postalCode,
  fees: {
    small_order_fee: order.additionalFee,
    delivery_type: order.deliveryMethod,
    delivery_fee: order.deliveryFee,
    payment_type: order.paymentMethod,
    payment_fee: order.paymentFee,
    total_paid: order.total,
  },
});

export default transformBEOrder;
