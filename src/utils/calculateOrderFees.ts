import { DeliveryMethod, Order, PaymentMethod } from '../types/order.type';

const calculateOrderFees = ({
  products,
  deliveryMethod,
  paymentMethod,
}: Pick<Order, 'deliveryMethod' | 'paymentMethod'> & {
  products: {
    price: number;
    quantity: number;
  }[];
}) => {
  const subTotal = products.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0,
  );
  const additionalFee = subTotal < 2500 ? 100 : 0;
  const deliveryFee =
    deliveryMethod === DeliveryMethod.StandardDelivery ? 400 : 0;
  const paymentFee =
    paymentMethod === PaymentMethod.Card
      ? Math.ceil(((subTotal + additionalFee + deliveryFee) * 2) / 100)
      : 0;
  const total = subTotal + additionalFee + deliveryFee + paymentFee;

  return {
    additionalFee,
    deliveryFee,
    paymentFee,
    total,
  };
};

export default calculateOrderFees;
