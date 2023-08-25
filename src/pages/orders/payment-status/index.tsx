import React from 'react';
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
  const { guest: isGuest } = useAuth();
  const { id } = useParams<{ id: string }>();
  const { order } = useOrder(id as string, isGuest);
  const { product } = useProduct(order?.productId as string);

  if (!order || !product) {
    return null;
  }

  return (
    <Layout>
      <div className={styles['payment-status-page']}>
        <div className={styles['payment-status']}>
          <h1 className={styles['heading']}>Payment Completed</h1>

          <div className={styles['description']}>
            {order.paymentStatus === PaymentStatus.Pending ? (
              <>
                <p>
                  We are currently checking the status of your payment. Do not
                  refresh the page while we do so.
                </p>
              </>
            ) : order.paymentStatus === PaymentStatus.Completed ? (
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
