enum DeliveryMethod {
  SelfCollection = 'Self Collection',
  NormalDelivery = 'Normal Delivery',
}

enum CollectionPoint {
  BotanicGardensMRT = 'Botaic Gardens MRT',
  DhobyGhautMRT = 'Dhoby Ghaut MRT',
  AngMoKioMRT = 'Ang Mo Kio MRT',
  WoodlandsMRT = 'Woodlands MRT',
  BishanMRT = 'Bishan MRT',
}

enum PaymentMethod {
  Card = 'Card',
  PayNow = 'PayNow',
}

interface ContactDetailsData {
  email: string;
  emailConfirm: string;
  phoneNumber: string;
  telegramHandle: string;
}

interface DeliveryMethodsData {
  deliveryMethod: DeliveryMethod;
  selfCollection: {
    collectionPoint: CollectionPoint;
  };
  normalDelivery: {
    address1: string;
    address2: string;
    postalCode: string;
  };
}

interface PaymentMethodsData {
  paymentMethod: PaymentMethod;
}

export { DeliveryMethod, CollectionPoint, PaymentMethod };
export type { ContactDetailsData, DeliveryMethodsData, PaymentMethodsData };
