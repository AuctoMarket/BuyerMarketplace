interface ContactDetailsData {
  email: string;
  emailConfirm: string;
  phoneNumber: string;
  telegramHandle: string;
}

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

export { DeliveryMethod, CollectionPoint };
export type { ContactDetailsData, DeliveryMethodsData };
