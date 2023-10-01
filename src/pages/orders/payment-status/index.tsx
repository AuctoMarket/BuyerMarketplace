import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './index.module.scss';
import Layout from '../../../components/Layout';
import OrderDetails from '../../../components/Checkout/OrderDetails';
import ButtonLink from '../../../components/Button/Link';
import useProductsByIds from '../../../hooks/useProductsByIds';
import useOrder from '../../../hooks/useOrder';
import { PaymentStatus } from '../../../types/order.type';
import useAuth from '../../../hooks/useAuth';

const OrderPaymentStatusPage = () => {
  const [useOrderConfig, setUseOrderConfig] = useState({
    refreshInterval: 5000,
  });
  const [paymentStatus, setPaymentStatus] = useState(PaymentStatus.Pending);

  const { user } = useAuth();
  const { id } = useParams<{ id: string }>();
  const { order } = useOrder(id as string, !user?.buyer_id, useOrderConfig);
  const { products = [] } = useProductsByIds(
    order?.products.map((product) => product.id) || [],
  );

  // stop refreshing order when payment is completed or failed
  useEffect(() => {
    if (paymentStatus === PaymentStatus.Pending) {
      return;
    }

    setUseOrderConfig({
      refreshInterval: 0,
    });
  }, [paymentStatus]);

  // set paymentStatus to failed if payment is still pending after 35 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (paymentStatus !== PaymentStatus.Pending) {
        return;
      }

      setPaymentStatus(PaymentStatus.Failed);
    }, 35000);

    return () => clearTimeout(timeout);
  });

  // update paymentStatus when order status changes
  useEffect(() => {
    if (!order) {
      return;
    }

    setPaymentStatus(order.paymentStatus);
  }, [order]);

  if (!order || products.length === 0) {
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
          </div>

          <ButtonLink
            className={styles['button']}
            theme="black"
            to={`https://t.me/auctomarketplace`}
            target="_blank"
          >
            Chat with us
          </ButtonLink>
        </div>

        <OrderDetails
          className={styles['order-details']}
          data={{
            order,
            products,
          }}
        />
      </div>
    </Layout>
  );
};

export default OrderPaymentStatusPage;
