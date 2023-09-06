import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './index.module.scss';
import Layout from '../../components/Layout';
import ProductImages from '../../components/Product/Images';
import ProductImagesMobile from '../../components/Product/Images/Mobile';
import ProductTitle from '../../components/Product/Title';
import ProductSellerInfo from '../../components/Product/SellerInfo';
import ProductPurchaseBid from '../../components/Product/Purchase/Bid';
import ProductPurchaseBuy from '../../components/Product/Purchase/Buy';
import ProductPurchasePreOrder from '../../components/Product/Purchase/PreOrder';
import ProductDetails from '../../components/Product/Details';
import ProductPostedDate from '../../components/Product/PostedDate';
import ProductMoreFromSeller from '../../components/Product/MoreFromSeller';
import ProductRecentlyAdded from '../../components/Product/RecentlyAdded';
import useProduct from '../../hooks/useProduct';
import useProductsList from '../../hooks/useProductsList';
import { Product, ProductType } from '../../types/product.type';
import useAuth from '../../hooks/useAuth';

function isMobile() {
  return window.innerWidth <= 820;
}

function ProductDetailsPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams<{ id: string }>();
  const { product } = useProduct(id as string);
  const { productsList: moreFromSeller } = useProductsList(
    { seller_id: product?.seller.id },
    { sort_by: 'posted_date' },
  );
  const { productsList: recentlyAdded } = useProductsList(
    {},
    { sort_by: 'posted_date' },
  );

  const [quantity, setQuantity] = useState(1);
  const [moreFromSellerProducts, setMoreFromSellerProducts] = useState<
    Product[]
  >([]);
  const [recentlyAddedProducts, setRecentlyAddedProducts] = useState<Product[]>(
    [],
  );

  useEffect(() => {
    if (!id) {
      return;
    }

    setQuantity(1);
  }, [id]);

  useEffect(() => {
    if (!id || !moreFromSeller || moreFromSeller.length === 0) {
      return;
    }

    setMoreFromSellerProducts(moreFromSeller.filter((p) => p.id !== id));
  }, [id, moreFromSeller]);

  useEffect(() => {
    if (!id || !recentlyAdded || recentlyAdded.length === 0) {
      return;
    }

    setRecentlyAddedProducts(recentlyAdded.filter((p) => p.id !== id));
  }, [id, recentlyAdded]);

  const handleBuy = () => {
    const redirectUrl = `/checkout?productId=${id}&quantity=${quantity}`;

    if (user) {
      window.location.href = redirectUrl;
    } else {
      navigate(
        `/auth/login/?continueAsGuest=true&redirectUrl=${encodeURIComponent(
          redirectUrl,
        )}`,
      );
    }
  };

  return (
    <Layout>
      {product && (
        <div className={styles['product-details-page']}>
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

              <div>
                <ProductSellerInfo data={product.seller} />

                <ProductPostedDate data={{ postedDate: product.postedDate }} />
              </div>

              {product.type === ProductType.Bid ? (
                <ProductPurchaseBid
                  data={{
                    bidPrice: product.bidPrice,
                    numBids: product.numBids,
                  }}
                />
              ) : product.type === ProductType.BuyNow ? (
                <ProductPurchaseBuy
                  data={{
                    availableQuantity: product.quantity - product.soldQuantity,
                    price: product.price,
                    quantity,
                  }}
                  onChangeQuantity={setQuantity}
                  onBuy={handleBuy}
                />
              ) : (
                <ProductPurchasePreOrder data={{ price: product.price }} />
              )}

              <ProductDetails
                data={{
                  condition: product.condition,
                  description: product.description,
                }}
              />
            </div>
          </div>

          {moreFromSellerProducts.length > 0 && (
            <ProductMoreFromSeller
              className={styles['product-more-from-seller']}
              data={{
                products: moreFromSellerProducts,
                seller: product.seller,
              }}
            />
          )}

          {recentlyAddedProducts.length > 0 && (
            <ProductRecentlyAdded
              className={styles['product-recently-added']}
              data={{
                products: recentlyAddedProducts,
                seeMore: false,
              }}
            />
          )}
        </div>
      )}
    </Layout>
  );
}

export default ProductDetailsPage;
