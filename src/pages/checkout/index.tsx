import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import ButtonLink from '../../components/Button/Link';
import OrderDetails from '../../components/Checkout/OrderDetails';
import OrderContactDetails from '../../components/Checkout/ContactDetails';
import DeliveryMethods from '../../components/Checkout/DeliveryMethods';
import PaymentMethods from '../../components/Checkout/PaymentMethods';
import useAuth from '../../hooks/useAuth';
import useQueryParams from '../../hooks/useQueryParams';
import useProduct from '../../hooks/useProduct';
import ordersApi from '../../apis/orders';
import calculateOrderFees from '../../utils/calculateOrderFees';
import {
  DeliveryMethod,
  CollectionPoint,
  CollectionPointAddress,
  PaymentMethod,
} from '../../types/order.type';

import type { Product } from '../../types/product.type';
import type { Order } from '../../types/order.type';

const CheckoutPage = () => {
  const queryParams = useQueryParams();
  const { guest: isGuest, user } = useAuth();
  const { product } = useProduct(queryParams.get('productId') as string);
  const [order, setOrder] =
    useState<Omit<Order, 'id' | 'paymentStatus' | 'orderedDate'>>();
  const [error, setError] = useState<{
    contactDetails?: boolean;
    deliveryMethod?: boolean;
  }>({
    contactDetails: true,
    deliveryMethod: false,
  });

  useEffect(() => {
    if (!product) {
      return;
    }

    const price = product.price;
    const quantity = parseInt(queryParams.get('quantity') as string, 10);
    const deliveryMethod = DeliveryMethod.SelfCollection;
    const paymentMethod = PaymentMethod.PayNow;
    const { subTotal, additionalFee, deliveryFee, paymentFee, total } =
      calculateOrderFees({
        price,
        quantity,
        deliveryMethod,
        paymentMethod,
      });

    setOrder({
      productId: product.id,
      price,
      quantity,
      subTotal,
      additionalFee,
      deliveryFee,
      paymentFee,
      total,
      buyerId: !isGuest ? user.buyer_id : undefined,
      contactDetails: {
        email: !isGuest ? user.email : '',
        emailConfirm: !isGuest ? user.email : '',
        phoneNumber: '',
        telegramHandle: '',
      },
      deliveryMethod,
      deliveryAddress:
        CollectionPointAddress[CollectionPoint.BotanicGardensMRT],
      paymentMethod,
    });
  }, [queryParams, isGuest, user, product]);

  if (!order) {
    return null;
  }

  const handleChangeContactDetails = (
    contactDetails: Order['contactDetails'],
    isErrorContactDetails: boolean,
  ) => {
    setOrder({
      ...order,
      contactDetails,
    });
    setError({ ...error, contactDetails: isErrorContactDetails });
  };

  const handleChangeDeliveryMethod = (
    {
      deliveryMethod,
      deliveryAddress,
    }: Pick<Order, 'deliveryMethod' | 'deliveryAddress'>,
    isErrorDeliveryMethod: boolean,
  ) => {
    const fees = calculateOrderFees({
      price: order.price,
      quantity: order.quantity,
      deliveryMethod,
      paymentMethod: order.paymentMethod,
    });

    setOrder({
      ...order,
      ...fees,
      deliveryMethod,
      deliveryAddress,
    });
    setError({ ...error, deliveryMethod: isErrorDeliveryMethod });
  };

  const handleChangePaymentMethod = (paymentMethod: Order['paymentMethod']) => {
    const fees = calculateOrderFees({
      price: order.price,
      quantity: order.quantity,
      deliveryMethod: order.deliveryMethod,
      paymentMethod,
    });

    setOrder({
      ...order,
      ...fees,
      paymentMethod,
    });
  };

  const handleCreateOrder = async () => {
    if (Object.values(error).some(Boolean)) {
      return;
    }

    const resp = isGuest
      ? await ordersApi.createGuestOrder(order)
      : await ordersApi.createOrder(order);

    window.location.href = resp.redirect_url;
  };

  return (
    <Layout>
      <div className={styles['checkout-page']}>
        <div className={styles['checkout']}>
          <h1 className={styles['heading']}>Checkout Details</h1>

          <div className={styles['checkout-details']}>
            <OrderContactDetails
              data={order.contactDetails}
              onChangeData={handleChangeContactDetails}
            />

            <DeliveryMethods
              data={{
                deliveryMethod: order.deliveryMethod,
                deliveryAddress: order.deliveryAddress,
              }}
              onChangeData={handleChangeDeliveryMethod}
            />

            <PaymentMethods
              data={order.paymentMethod}
              onChangeData={handleChangePaymentMethod}
            />
          </div>
        </div>

        <OrderDetails
          className={styles['order-details']}
          data={{
            ...order,
            product: product as Product,
          }}
        />

        <div className={styles['controls']}>
          <Button
            className={styles['checkout-button']}
            onClick={handleCreateOrder}
          >
            Proceed to payment
          </Button>

          <ButtonLink
            className={styles['chat-button']}
            theme="black"
            to={`https://t.me/auctomarketplace`}
            target="_blank"
          >
            Chat with us
          </ButtonLink>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
