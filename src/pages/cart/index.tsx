import React from 'react';

import Layout from '../../components/Layout';
import styles from './index.module.scss';
import useCart from '../../hooks/useCart';
import Image from '../../components/Image';
import NumberInput from '../../components/NumberInput';
import useProductByIds from '../../hooks/useProductByIds';
import Button from '../../components/Button';
import ButtonLink from '../../components/Button/Link';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/product.type';
import useAuth from '../../hooks/useAuth';

function CartPage() {
  const { cartItems, updateCartItem, removeCartItem } = useCart();
  const { products } = useProductByIds(
    cartItems.map(({ productId }) => productId),
  );
  const navigate = useNavigate();
  const { user } = useAuth();
  const onChangeQuantity = (id: string, quantity: number) => {
    const index = cartItems.findIndex((item) => item.productId === id);
    if (index !== -1) {
      updateCartItem(index, quantity);
    }
  };

  const getQuantity = (product: Product) => {
    return cartItems.find((item) => item.productId === product.id)
      ?.quantity as number;
  };

  const handleRemoveItem = (id: string) => {
    const index = cartItems.findIndex((item) => item.productId === id);
    removeCartItem(index);
  };

  const handleCheckout = () => {
    const redirectUrl = `/checkout`;

    if (!user) {
      navigate(
        `/auth/login/?continueAsGuest=true&redirectUrl=${encodeURIComponent(
          redirectUrl,
        )}`,
      );
    } else if (user.verification !== 'verified') {
      navigate(
        `/auth/email-verification?redirectUrl=${encodeURIComponent(
          redirectUrl,
        )}`,
      );
    } else {
      window.location.href = redirectUrl;
    }
  };
  return (
    <Layout>
      <div className={styles['cart-page']}>
        <div className={styles['title']}>Your Cart:</div>
        <div className={styles['list-container']}>
          {products &&
            products.map((product, index) => (
              <div className={styles['product']} key={index}>
                <div className={styles['image']}>
                  <Image src={product.images[0]} />
                </div>
                <div className={styles['info']}>
                  <div className={styles['name']}>{product.title}</div>
                  <div className={styles['quantity-container']}>
                    <label className={styles['label']}>Quantity:</label>
                    <div className={styles['quantity']}>
                      <NumberInput
                        className={styles['quantity-input']}
                        value={getQuantity(product)}
                        onChangeValue={(quantity: number) =>
                          onChangeQuantity(product.id, quantity)
                        }
                        min={1}
                        max={product.quantity - product.soldQuantity}
                      />
                    </div>
                  </div>
                  <div className={styles['price-remove']}>
                    <div className={styles['price']}>
                      ${product.price * getQuantity(product)}
                    </div>
                    <Button
                      className={styles['remove']}
                      onClick={() => handleRemoveItem(product.id)}
                    >
                      Remove Item
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className={styles['footer']}>
          <div className={styles['subtotal']}>
            Subtotal:{' '}
            <span>
              $
              {products &&
                products.reduce(
                  (total, product) =>
                    total + product.price * getQuantity(product),
                  0,
                )}
            </span>
          </div>
          <Button className={styles['checkout']} onClick={handleCheckout}>
            Proceed to Checkout
          </Button>
          <ButtonLink
            className={styles['chat']}
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
}

export default CartPage;
