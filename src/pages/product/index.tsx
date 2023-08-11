import React, { useState } from 'react';
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
import ProductRecommended from '../../components/Product/Recommended';
import useProduct from '../../hooks/useProduct';
import useSeller from '../../hooks/useSeller';
import useMoreFromSeller from '../../hooks/useMoreFromSeller';
import useProductsList from '../../hooks/useProductsList';
import { ProductType } from '../../types/product.type';
import { Seller } from '../../types/seller.type';

function isMobile() {
  return window.innerWidth <= 820;
}

function ProductDetailsPage() {
  const navigate = useNavigate();
  const [limit, setLimit] = useState<number>(isMobile() ? 3 : 5);

  const { id } = useParams<{ id: string }>();
  const { product } = useProduct(id as string);
  const { seller } = useSeller(product?.sellerId as string);
  const { moreFromSeller } = useMoreFromSeller(seller?.id as string);
  const { productsList: recommended } = useProductsList({}, { limit });
  const isShowMoreRecommended =
    recommended && recommended.length < (isMobile() ? 9 : 15);

  const handleShowMoreRecommended = () => {
    if (isShowMoreRecommended) {
      setLimit(isMobile() ? 6 : 10);
    } else {
      navigate('/recommendations');
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
                {seller && <ProductSellerInfo data={seller} />}

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
                <ProductPurchaseBuy data={{ price: product.price }} />
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

          {moreFromSeller && moreFromSeller.length > 0 && (
            <ProductMoreFromSeller
              className={styles['product-more-from-seller']}
              data={{ products: moreFromSeller, seller: seller as Seller }}
            />
          )}

          {recommended && recommended.length > 0 && (
            <ProductRecommended
              className={styles['product-recommended']}
              data={{ products: recommended, seller: seller as Seller }}
              showMoreButton={{
                text: !isShowMoreRecommended
                  ? 'View all recommendations'
                  : 'Show more',
                onClick: handleShowMoreRecommended,
              }}
            />
          )}
        </div>
      )}
    </Layout>
  );
}

export default ProductDetailsPage;
