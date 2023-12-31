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
import useCart from '../../hooks/useCart';
import useProductsByIds from '../../hooks/useProductsByIds';
import ordersApi from '../../apis/orders';
import calculateOrderFees from '../../utils/calculateOrderFees';
import {
  DeliveryMethod,
  CollectionPoint,
  CollectionPointAddress,
  PaymentMethod,
  type Order,
} from '../../types/order.type';

const isError = (error: any) => Object.values(error).some(Boolean);

const CheckoutPage = () => {
  const { user } = useAuth();
  const { cartItems, removeAllCartItems } = useCart();
  const { products = [] } = useProductsByIds(
    cartItems.map((item) => item.productId),
  );
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
    if (products.length === 0) {
      return;
    }

    const deliveryMethod = DeliveryMethod.SelfCollection;
    const paymentMethod = PaymentMethod.PayNow;
    const { additionalFee, deliveryFee, paymentFee, total } =
      calculateOrderFees({
        products: cartItems.map((item) => {
          const product = products.find(
            (product) => product.id === item.productId,
          );

          return {
            price: product?.price || 0,
            quantity: item.quantity,
          };
        }),
        deliveryMethod,
        paymentMethod,
      });

    setOrder({
      products: cartItems.map((item) => ({
        id: item.productId,
        quantity: item.quantity,
      })),
      additionalFee,
      deliveryFee,
      paymentFee,
      total,
      buyerId: user?.buyer_id || undefined,
      contactDetails: {
        email: user?.email || '',
        emailConfirm: user?.email || '',
        phoneNumber: '',
        telegramHandle: '',
      },
      deliveryMethod,
      deliveryAddress:
        CollectionPointAddress[CollectionPoint.BotanicGardensMRT],
      paymentMethod,
    });
  }, [user, products, cartItems]);

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
      products: cartItems.map((item) => {
        const product = products.find(
          (product) => product.id === item.productId,
        );

        return {
          price: product?.price || 0,
          quantity: item.quantity,
        };
      }),
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
      products: cartItems.map((item) => {
        const product = products.find(
          (product) => product.id === item.productId,
        );

        return {
          price: product?.price || 0,
          quantity: item.quantity,
        };
      }),
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
    if (isError(error)) {
      return;
    }

    const resp = user?.buyer_id
      ? await ordersApi.createOrder(order)
      : await ordersApi.createGuestOrder(order);
    removeAllCartItems();

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
            order,
            products,
          }}
        />

        <div className={styles['controls']}>
          <Button
            className={styles['checkout-button']}
            onClick={handleCreateOrder}
            disabled={isError(error)}
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
