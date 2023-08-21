import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Image from '../../Image';
import ButtonLink from '../../Button/Link';
import Price from '../../Product/Price';

import type { Product } from '../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: {
    product: Product;
    quantity: number;
    subTotal: number;
    delivery: number;
    paymentFee: number;
    orderTotal: number;
  };
  showFooter?: boolean;
}

function OrderDetails({
  className,
  data: { product, quantity, subTotal, delivery, paymentFee, orderTotal },
  showFooter = true,
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
            <Price
              className={styles['price']}
              data={{ price: product.price }}
            />
          </div>
          <div className={styles['quantity']}>
            <div className={styles['label']}>Quantity</div>
            <div>{quantity}</div>
          </div>
        </div>

        <div className={styles['section-2']}>
          <div className={styles['subtotal']}>
            <div className={styles['label']}>SubTotal</div>
            <Price className={styles['price']} data={{ price: subTotal }} />
          </div>
          <div className={styles['delivery']}>
            <div className={styles['label']}>Delivery</div>
            {delivery === 0 ? (
              <div className={styles['price']}>Free</div>
            ) : (
              <Price className={styles['price']} data={{ price: delivery }} />
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
          <Price className={styles['price']} data={{ price: orderTotal }} />
        </div>
      </div>

      {showFooter && (
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
      )}
    </div>
  );
}

export default OrderDetails;
