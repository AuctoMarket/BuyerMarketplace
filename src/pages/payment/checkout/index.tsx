import React from 'react';

import styles from './index.module.scss';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import OrderDetails from '../../../components/Checkout/OrderDetails';
import ContactDetails from '../../../components/Checkout/ContactDetails';
import DeliveryMethods from '../../../components/Checkout/DeliveryMethods';
import PaymentMethods from '../../../components/Checkout/PaymentMethods';
import useProduct from '../../../hooks/useProduct';

import {
  CollectionPoint,
  ContactDetailsData,
  DeliveryMethod,
  DeliveryMethodsData,
  PaymentMethod,
  PaymentMethodsData,
} from '../../../types/checkout.type';

const PaymentCheckoutPage = () => {
  // the following implementation is for demo purposes only
  const [checkout, setCheckout] = React.useState<{
    contactDetails: ContactDetailsData;
    deliveryMethods: DeliveryMethodsData;
    paymentMethods: PaymentMethodsData;
  }>({
    contactDetails: {
      email: '',
      emailConfirm: '',
      phoneNumber: '',
      telegramHandle: '',
    },
    deliveryMethods: {
      deliveryMethod: DeliveryMethod.SelfCollection,
      selfCollection: {
        collectionPoint: CollectionPoint.BotanicGardensMRT,
      },
      normalDelivery: {
        address1: '',
        address2: '',
        postalCode: '',
      },
    },
    paymentMethods: {
      paymentMethod: PaymentMethod.PayNow,
    },
  });
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

  return (
    <Layout>
      <div className={styles['payment-page']}>
        <div className={styles['checkout']}>
          <h1 className={styles['heading']}>Checkout Details</h1>

          <div className={styles['checkout-details']}>
            <ContactDetails
              data={checkout.contactDetails}
              onChangeData={(contactDetails) =>
                setCheckout({
                  ...checkout,
                  contactDetails,
                })
              }
            />

            <DeliveryMethods
              data={checkout.deliveryMethods}
              onChangeData={(deliveryMethods) =>
                setCheckout({
                  ...checkout,
                  deliveryMethods,
                })
              }
            />

            <PaymentMethods
              data={checkout.paymentMethods}
              onChangeData={(paymentMethods) =>
                setCheckout({
                  ...checkout,
                  paymentMethods,
                })
              }
            />
          </div>
        </div>

        <OrderDetails className={styles['order-details']} data={orderDetails} />

        <Button className={styles['checkout-button']}>
          Proceed to payment
        </Button>
      </div>
    </Layout>
  );
};

export default PaymentCheckoutPage;
