import React from 'react';

import styles from './index.module.scss';
import Layout from '../../../components/Layout';
import OrderDetails from '../../../components/Checkout/OrderDetails';
import ButtonLink from '../../../components/Button/Link';
import useProduct from '../../../hooks/useProduct';

function isMobile() {
  return window.innerWidth <= 820;
}

const PaymentCompletedPage = () => {
  // the following implementation is for demo purposes only
  // TODO: fetch order details
  const { product } = useProduct('25139b94-3a54-11ee-a2be-0aec91b1c67e');
  if (!product) {
    return null;
  }
  const orderDetails = {
    product,
    quantity: 1,
    subTotal: 100,
    delivery: 0,
    paymentFee: 0,
    orderTotal: 100,
  };
  // TODO: fetch payment status (pending | completed | failed)
  const paymentStatus = () => 'completed';

  return (
    <Layout>
      <div className={styles['payment-page']}>
        <div className={styles['payment-completed']}>
          <h1 className={styles['heading']}>Payment Completed</h1>

          <div className={styles['description']}>
            {paymentStatus() === 'pending' ? (
              <>
                <p>
                  We are currently checking the status of your payment. Do not
                  refresh the page while we do so.
                </p>
              </>
            ) : paymentStatus() === 'completed' ? (
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

        <OrderDetails className={styles['order-details']} data={orderDetails} />
      </div>
    </Layout>
  );
};

export default PaymentCompletedPage;
