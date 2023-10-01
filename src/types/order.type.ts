enum CollectionPoint {
  MayflowerMRT = 'Mayflower MRT',
  NewtonMRT = 'Newton MRT',
}

const CollectionPointAddress: {
  [key in CollectionPoint]: DeliveryAddress;
} = {
  [CollectionPoint.MayflowerMRT]: {
    addressLine1: 'Mayflower MRT',
    postalCode: '568501',
  },
  [CollectionPoint.NewtonMRT]: {
    addressLine1: 'Newton MRT',
    postalCode: '228234',
  },
};

enum DeliveryMethod {
  SelfCollection = 'self_collection',
  StandardDelivery = 'standard_delivery',
}

enum PaymentMethod {
  Card = 'card',
  PayNow = 'paynow_online',
}

enum PaymentStatus {
  Pending = 'pending',
  Completed = 'completed',
  Failed = 'failed',
}

interface ContactDetails {
  email: string; // order.email
  emailConfirm: string;
  phoneNumber: string; // order.phone_number
  telegramHandle?: string; // order.telegram_handle
}

interface DeliveryAddress {
  addressLine1: string; // order.address_line_1
  addressLine2?: string; // order.address_line_2
  postalCode: string; // order.postal_code
}

interface Order {
  id: string; // order.order_id || order.guest_order_id
  products: {
    id: string; // order.products.product_id
    quantity: number; // order.products.order_quantity
  }[];
  additionalFee: number; // order.fees.small_order_fee
  deliveryFee: number; // order.fees.delivery_fee
  paymentFee: number; // order.fees.payment_fee
  total: number; // order.fees.total_paid
  buyerId?: string; // order.buyer_id
  contactDetails: ContactDetails;
  deliveryMethod: DeliveryMethod; // order.fees.delivery_type
  deliveryAddress: DeliveryAddress;
  paymentMethod: PaymentMethod; // order.fees.payment_type
  paymentStatus: PaymentStatus; // order.payment_status
  orderedDate: Date; // order.order_date
}

export {
  CollectionPoint,
  CollectionPointAddress,
  DeliveryMethod,
  PaymentMethod,
  PaymentStatus,
};
export type { ContactDetails, DeliveryAddress, Order };
