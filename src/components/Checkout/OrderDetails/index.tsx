import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Image from '../../Image';
import ButtonLink from '../../Button/Link';
import Price from '../../Product/Price';

import type { Order } from '../../../types/order.type';
import type { Product } from '../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: Omit<Order, 'id' | 'paymentStatus' | 'orderedDate'> & {
    id?: string;
    product: Product;
  };
}

function OrderDetails({
  className,
  data: {
    product,
    price,
    quantity,
    subTotal,
    additionalFee,
    deliveryFee,
    paymentFee,
    total,
  },
  ...rest
}: Props) {
  return (
    <div className={className} {...rest}>
      <div className={styles['header']}>
        <p>Order Details</p>
      </div>

      <div className={styles['body']}>
        <div className={styles['section-0']}>
          <div className={styles['product-image']}>
            <Image src={product.images[0]} alt={product.id} />
          </div>
          <div className={styles['product-title']}>{product.title}</div>
        </div>

        <div className={styles['section-1']}>
          <div className={styles['unit-price']}>
            <div className={styles['label']}>Unit Price</div>
            <Price className={styles['price']} data={{ price }} />
          </div>
          <div className={styles['quantity']}>
            <div className={styles['label']}>Quantity</div>
            <div>{quantity}</div>
          </div>
        </div>

        <div className={styles['section-2']}>
          <div className={styles['subtotal']}>
            <div className={styles['label']}>Subtotal</div>
            <Price className={styles['price']} data={{ price: subTotal }} />
          </div>
          {additionalFee > 0 && (
            <div className={styles['additional-fee']}>
              <div className={styles['label']}>Small Order Fee</div>
              <Price
                className={styles['price']}
                data={{ price: additionalFee }}
              />
            </div>
          )}
          <div className={styles['delivery']}>
            <div className={styles['label']}>Delivery</div>
            {deliveryFee === 0 ? (
              <div className={styles['price']}>Free</div>
            ) : (
              <Price
                className={styles['price']}
                data={{ price: deliveryFee }}
              />
            )}
          </div>
          <div className={styles['payment-fee']}>
            <div className={styles['label']}>Payment Fee</div>
            {paymentFee === 0 ? (
              <div className={styles['price']}>Free</div>
            ) : (
              <Price className={styles['price']} data={{ price: paymentFee }} />
            )}
          </div>
        </div>

        <div className={styles['section-3']}>
          <div className={styles['label']}>Order Total</div>
          <Price className={styles['price']} data={{ price: total }} />
        </div>
      </div>

      <div className={styles['footer']}>
        <div className={styles['payment']}>
          <Image src="/images/payment-method/paynow.svg" />
          <Image src="/images/payment-method/visa.svg" />
          <Image src="/images/payment-method/mastercard.svg" />
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
    </div>
  );
}

export default OrderDetails;
