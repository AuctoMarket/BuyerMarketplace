import React, { ComponentProps, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import useCart from '../../hooks/useCart';
import Image from '../../components/Image';
import NumberInput from '../../components/NumberInput';
import Button from '../../components/Button';
import ButtonLink from '../../components/Button/Link';
import Price from '../../components/Product/Price';
import { PopupContext } from '../../components/Popup';
import { Product, ProductType } from '../../types/product.type';
import useAuth from '../../hooks/useAuth';
import useProductByIds from '../../hooks/useProductByIds';

interface PopupProps extends ComponentProps<'div'> {
  data: {
    product: Product;
  };
  onYes: () => void;
  onNo: () => void;
}

function Popup({ data: { product }, onYes, onNo, ...rest }: PopupProps) {
  return (
    <div className={styles['popup']} {...rest}>
      <div className={styles['popup-heading']}>
        Are you sure you want to remove this item from your cart:
      </div>
      <div className={styles['popup-content']}>{product.title}</div>
      <div className={styles['popup-footer']}>
        <Button
          className={styles['popup-yes-button']}
          onClick={onYes}
          theme="black"
        >
          Yes
        </Button>
        <Button
          className={styles['popup-no-button']}
          onClick={onNo}
          theme="white"
        >
          No
        </Button>
      </div>
    </div>
  );
}

function CartPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cartItems, updateCartItem, removeCartItem } = useCart();
  const { products = [] } = useProductByIds(
    cartItems.map(({ productId }) => productId),
  );
  const { togglePopup } = useContext(PopupContext);

  const handleChangeQuantity = (index: number, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(index);
      return;
    } else {
      updateCartItem(index, quantity);
    }
  };

  const handleRemoveItem = (index: number) => {
    if (!togglePopup) {
      return;
    }

    togglePopup?.(
      true,
      <Popup
        data={{ product: products[index] }}
        onYes={() => {
          removeCartItem(index);
          togglePopup(false);
        }}
        onNo={() => togglePopup(false)}
      />,
    );
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      return;
    }

    const redirectUrl = '/checkout';

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
                  <Link to={`/products/${product.id}`}>
                    <Image src={product.images[0]} />
                  </Link>
                </div>

                <div className={styles['info']}>
                  <div className={styles['name']}>
                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                  </div>

                  <div className={styles['quantity-container']}>
                    <label className={styles['label']}>Quantity:</label>

                    <div className={styles['quantity']}>
                      <NumberInput
                        className={styles['quantity-input']}
                        value={cartItems[index].quantity}
                        onChangeValue={(quantity: number) =>
                          handleChangeQuantity(index, quantity)
                        }
                        min={0}
                        max={
                          product.quantity -
                          product.soldQuantity -
                          cartItems[index].quantity
                        }
                      />
                    </div>
                  </div>

                  <div className={styles['price-remove']}>
                    <Price
                      className={styles['price']}
                      data={{
                        price:
                          (product.type === ProductType.BuyNow
                            ? product.price
                            : product.price - (product.discount || 0)) *
                          cartItems[index].quantity,
                      }}
                    />

                    <Button
                      className={styles['remove']}
                      onClick={() => handleRemoveItem(index)}
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
            <div className={styles['label']}>Subtotal:</div>

            <Price
              className={styles['price']}
              data={{
                price: products
                  ? products.reduce(
                      (total, product, index) =>
                        total +
                        (product.type === ProductType.BuyNow
                          ? product.price
                          : product.price - (product.discount || 0)) *
                          cartItems[index].quantity,
                      0,
                    )
                  : 0,
              }}
            />
          </div>

          <Button
            className={styles['checkout']}
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </Button>

          <ButtonLink
            className={styles['chat']}
            theme="black"
            to="https://t.me/auctomarketplace"
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
