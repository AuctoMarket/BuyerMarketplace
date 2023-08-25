enum CollectionPoint {
  BotanicGardensMRT = 'Botaic Gardens MRT',
  DhobyGhautMRT = 'Dhoby Ghaut MRT',
  AngMoKioMRT = 'Ang Mo Kio MRT',
  WoodlandsMRT = 'Woodlands MRT',
  BishanMRT = 'Bishan MRT',
}

const CollectionPointAddress: {
  [key in CollectionPoint]: DeliveryAddress;
} = {
  [CollectionPoint.BotanicGardensMRT]: {
    addressLine1: 'Botanic Gardens MRT',
    postalCode: '257494',
  },
  [CollectionPoint.DhobyGhautMRT]: {
    addressLine1: 'Dhoby Ghaut MRT',
    postalCode: '238826',
  },
  [CollectionPoint.AngMoKioMRT]: {
    addressLine1: 'Ang Mo Kio MRT',
    postalCode: '569812',
  },
  [CollectionPoint.WoodlandsMRT]: {
    addressLine1: 'Woodlands MRT',
    postalCode: '737736',
  },
  [CollectionPoint.BishanMRT]: {
    addressLine1: 'Bishan MRT',
    postalCode: '579827',
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
  productId: string; // order.product_id
  price: number; // order.fees.product_price
  quantity: number; // order.order_quantity
  subTotal: number;
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
