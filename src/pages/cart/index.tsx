import React, { useState } from 'react';

import Layout from '../../components/Layout';
import styles from './index.module.scss';
import useCart from '../../hooks/useCart';
import Image from '../../components/Image';
import NumberInput from '../../components/NumberInput';
import useProductByIds from '../../hooks/useProductByIds';
import Button from '../../components/Button';
import { Product } from '../../types/product.type';

function CartPage({}) {
  const { cartItems, updateCartItem } = useCart();
  const { products } = useProductByIds(
    cartItems.map(({ productId }) => productId),
  );

  const onChangeQuantity = (quantity: number) => {};

  const getQuantity = (product: Product) => {
    return cartItems.find((item) => item.productId === product.id)
      ?.quantity as number;
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
                        onChangeValue={onChangeQuantity}
                        min={1}
                        max={product.quantity - product.soldQuantity}
                      />
                    </div>
                  </div>
                  <div className={styles['price-remove']}>
                    <div className={styles['price']}>
                      ${product.price * getQuantity(product)}
                    </div>
                    <Button className={styles['remove']}>Remove Item</Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className={styles['footer']}>
          <div className={styles['subtotal']}>
            Subtotal: <span>$1231123</span>
          </div>
          <Button className={styles['checkout']}>Proceed to Checkout</Button>
          <Button className={styles['chat']} theme="black">
            Chat with us
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default CartPage;
