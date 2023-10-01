import type { Order } from '../types/order.type';

const transformOrder = (order: any): Order => ({
  id: order.order_id || order.guest_order_id,
  products: order.products.map((product: any) => ({
    id: product.product_id,
    quantity: product.order_quantity,
  })),
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
});

export default transformOrder;
