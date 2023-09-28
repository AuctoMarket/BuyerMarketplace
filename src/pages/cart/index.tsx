import React from 'react';
import Layout from '../../components/Layout';
import styles from './index.module.scss';
import useCart from '../../hooks/useCart';
import Image from '../../components/Image';

function CartPage() {
  const { products } = useCart();
  return (
    <Layout>
      <div className={styles['cart-page']}>
        <div className={styles['title']}>Your Cart:</div>
        <div className={styles['list-container']}>
          {products.map((product, index) => (
            <div className={styles['product']}>
              <div className={styles['image']}>
                <Image src={product.images[0]} />
              </div>
              <div className={styles['info']}>
                <div className={styles['name']}>{product.title}</div>
                <div className={styles['quantity']}>{product.quantity}</div>
                <div className={styles['price-remove']}>
                  {product.price}
                  Remove Item
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default CartPage;
