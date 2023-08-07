import React from 'react';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import ProductImages from '../../components/Product/Images';
import ProductImagesMobile from '../../components/Product/Images/Mobile';
import ProductTitle from '../../components/Product/Title';
import ProductPurchaseBetaBuy from '../../components/Product/Purchase/BetaBuy';
import ProductDetails from '../../components/Product/Details';
import { ProductType } from '../../types/product.type';

function isMobile() {
  return window.innerWidth <= 820;
}

function BetaPage() {
  const product = {
    type: ProductType.BuyNow,
    images: ['/images/beta/1.png', '/images/beta/2.png', '/images/beta/3.png'],
    title: 'Pokemon SV03 Obsidian Flames Booster Box/ Booster case',
    description: `<p>
      Thank you for supporting Aucto’s pre launch sale! To celebrate, we are bringing you Obsidian Flames booster boxes at the cheapest rates you can find for a limited time only! All the best in opening a Charizard ex!
    </p>
    <br />
    <p>
      Each booster box contains 36 packs (10 cards per pack).
    </p>
    <br />
    <p>
      Each booster box case contains 6 booster boxes in their original sealed case. In order to purchase a case, simply purchase a multiple of 6 and it will automatically be registered as a case and will be provided at an even cheaper price! <strike>$960/case</strike> $950/case
    </p>
    <br />
    <p>
      <u>Logistics options include:</u>
    </p>
    <ol style="list-style-type: decimal;; padding: revert;">
      <li>
        Self collection (locations can be discussed with us, we will try to make sure that you don’t have to travel too much)
      </li>
      <li>Delivery to your doorstep at a cost of 4$</li>
    </ol>
    <br />
    <strong>
      Follow our Instagram <a style="text-decoration-line: underline;" href="https://www.instagram.com/auctomarketplace" target="blank">@auctomarketplace</a> for future discounts, giveaways
      and promotions!
    </strong>`,
    price: 1600,
  };

  return (
    <Layout headerNavbar={false}>
      <div className={styles['beta-page']}>
        <div className={styles['product']}>
          {isMobile() ? (
            <ProductImagesMobile
              className={styles['product-images']}
              data={{
                type: product.type,
                images: product.images,
              }}
            />
          ) : (
            <ProductImages
              className={styles['product-images']}
              data={{
                type: product.type,
                images: product.images,
              }}
            />
          )}

          <div className={styles['product-details']}>
            <ProductTitle data={{ title: product.title }} />

            <ProductPurchaseBetaBuy data={{ price: product.price }} />

            <ProductDetails
              data={{ description: product.description, readMore: false }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BetaPage;
