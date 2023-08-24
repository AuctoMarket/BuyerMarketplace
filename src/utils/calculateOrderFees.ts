import { DeliveryMethod, Order, PaymentMethod } from '../types/order.type';

const calculateOrderFees = ({
  price,
  quantity,
  deliveryMethod,
  paymentMethod,
}: Pick<Order, 'price' | 'quantity' | 'deliveryMethod' | 'paymentMethod'>) => {
  const subTotal = price * quantity;
  const additionalFee = subTotal < 2500 ? 100 : 0;
  const deliveryFee =
    deliveryMethod === DeliveryMethod.StandardDelivery ? 400 : 0;
  const paymentFee =
    paymentMethod === PaymentMethod.Card
      ? Math.ceil(((subTotal + additionalFee + deliveryFee) * 2) / 100)
      : 0;
  const total = subTotal + additionalFee + deliveryFee + paymentFee;

  return {
    subTotal,
    additionalFee,
    deliveryFee,
    paymentFee,
    total,
  };
};

export default calculateOrderFees;
