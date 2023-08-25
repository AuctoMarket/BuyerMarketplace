import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './index.module.scss';
import Layout from '../../../components/Layout';
import OrderDetails from '../../../components/Checkout/OrderDetails';
import ButtonLink from '../../../components/Button/Link';
import useProduct from '../../../hooks/useProduct';
import useOrder from '../../../hooks/useOrder';
import { PaymentStatus } from '../../../types/order.type';
import useAuth from '../../../hooks/useAuth';

const OrderPaymentStatusPage = () => {
  const [config, setConfig] = useState({
    refreshInterval: 5000,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const [paymentStatus, setPaymentStatus] = useState(PaymentStatus.Pending);
  const { guest: isGuest } = useAuth();
  const { id } = useParams<{ id: string }>();
  const { order } = useOrder(id as string, isGuest, config);
  const { product } = useProduct(order?.productId as string);

  useEffect(() => {
    if (
      !paymentStatus ||
      paymentStatus === PaymentStatus.Pending ||
      config.refreshInterval === 0
    ) {
      return;
    }

    setConfig({
      ...config,
      refreshInterval: 0,
    });
  }, [config, paymentStatus]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (paymentStatus !== PaymentStatus.Pending) {
        return;
      }

      setConfig({
        ...config,
        refreshInterval: 0,
      });
      setPaymentStatus(PaymentStatus.Failed);
    }, 35000);

    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    if (!order) {
      return;
    }

    setPaymentStatus(order.paymentStatus);
  }, [order]);

  if (!order || !product) {
    return null;
  }

  return (
    <Layout>
      <div className={styles['payment-status-page']}>
        <div className={styles['payment-status']}>
          <h1 className={styles['heading']}>
            {paymentStatus === PaymentStatus.Pending
              ? 'Checking Payment Status'
              : paymentStatus === PaymentStatus.Completed
              ? 'Payment Completed'
              : 'Payment Failed'}
          </h1>

          <div className={styles['description']}>
            {paymentStatus === PaymentStatus.Pending ? (
              <>
                <p>
                  We are currently checking the status of your payment. Do not
                  refresh the page while we do so.
                </p>
              </>
            ) : paymentStatus === PaymentStatus.Completed ? (
              <>
                <p>
                  Your payment has been recorded and we will be in touch with
                  you via the email you have provided with the receipt along
                  with instructions on how to receive your product.
                </p>
                <br />
                <p>
                  If you have any questions, you can contact us through the
                  button below.
                </p>
              </>
            ) : (
              <>
                There was an issue with your payment. If you have made a payment
                already, please contact us to verify your payment.{' '}
              </>
            )}
            <ButtonLink
              className={styles['button']}
              theme="black"
              to={`https://t.me/auctomarketplace`}
              target="_blank"
            >
              Chat with us
            </ButtonLink>
          </div>
        </div>

        <OrderDetails
          className={styles['order-details']}
          data={{
            ...order,
            product,
          }}
        />
      </div>
    </Layout>
  );
};

export default OrderPaymentStatusPage;
