import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import Image from '../../Image';
import ButtonLink from '../../Button/Link';
import Price from '../../Product/Price';

import type { Order } from '../../../types/order.type';
import { ProductType, type Product } from '../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  data: {
    order: Omit<Order, 'id' | 'paymentStatus' | 'orderedDate'> & {
      id?: string;
    };
    products: Product[];
  };
}

function OrderDetails({
  className,
  data: { order, products },
  ...rest
}: Props) {
  const subTotal = order.products.reduce((total, orderProduct) => {
    const product = products.find((product) => product.id === orderProduct.id);
    if (!product) {
      return total;
    }

    const price =
      product.type === ProductType.BuyNow
        ? product.price
        : product.price - (product.discount || 0);

    return total + price * orderProduct.quantity;
  }, 0);

  return (
    <div className={className} {...rest}>
      <div className={styles['header']}>
        <p>Order Details</p>
      </div>

      <div className={styles['body']}>
        {order.products.map((orderProduct, index) => {
          const product = products.find(
            (product) => product.id === orderProduct.id,
          );
          if (!product) {
            return null;
          }

          return (
            <div className={styles['section-0-1']} key={index}>
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
                  <div>{orderProduct.quantity}</div>
                </div>
              </div>
            </div>
          );
        })}

        <div className={styles['section-2']}>
          <div className={styles['subtotal']}>
            <div className={styles['label']}>Subtotal</div>
            <Price className={styles['price']} data={{ price: subTotal }} />
          </div>
          {order.additionalFee > 0 && (
            <div className={styles['additional-fee']}>
              <div className={styles['label']}>Small Order Fee</div>
              <Price
                className={styles['price']}
                data={{ price: order.additionalFee }}
              />
            </div>
          )}
          <div className={styles['delivery']}>
            <div className={styles['label']}>Delivery</div>
            {order.deliveryFee === 0 ? (
              <div className={styles['price']}>Free</div>
            ) : (
              <Price
                className={styles['price']}
                data={{ price: order.deliveryFee }}
              />
            )}
          </div>
          <div className={styles['payment-fee']}>
            <div className={styles['label']}>Payment Fee</div>
            {order.paymentFee === 0 ? (
              <div className={styles['price']}>Free</div>
            ) : (
              <Price
                className={styles['price']}
                data={{ price: order.paymentFee }}
              />
            )}
          </div>
        </div>

        <div className={styles['section-3']}>
          <div className={styles['label']}>Order Total</div>
          <Price className={styles['price']} data={{ price: order.total }} />
        </div>

        {order.additionalFee > 0 && (
          <div className={styles['info']}>
            *Small Order Fee of $1 applies for orders below $25.00.
          </div>
        )}
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
