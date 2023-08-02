import React, { useEffect } from 'react';
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
import productsApi from '../../apis/products';
import { ProductType, Product } from '../../types/product.type';

function isMobile() {
  return window.innerWidth <= 820;
}

function ProductDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  if (!id) {
    navigate('/');
  }

  const [current, setCurrent] = React.useState<Product>();
  const [moreFromSeller, setMoreFromSeller] = React.useState<Product[]>([]);
  const [recommended, setRecommended] = React.useState<Product[]>([]);
  const isShowMoreRecommended = recommended.length < (isMobile() ? 9 : 15);

  useEffect(() => {
    const currentProduct = productsApi.getProductById(id as string);
    if (currentProduct) {
      const moreFromSellerProducts = productsApi.getMoreFromSellerProducts(
        currentProduct.seller.id,
      );
      const recommendedProducts = productsApi.getRecommendedProducts(
        isMobile() ? 3 : 5,
      );

      setCurrent(currentProduct);
      setMoreFromSeller(moreFromSellerProducts);
      setRecommended(recommendedProducts);
    } else {
      setCurrent(currentProduct);
    }
  }, [id]);

  const handleShowMoreRecommended = () => {
    if (isShowMoreRecommended) {
      const recommendedProducts = productsApi.getRecommendedProducts(
        isMobile() ? 6 : 10,
      );

      setRecommended([...recommended, ...recommendedProducts]);
    } else {
      navigate('/recommendations');
    }
  };

  return (
    <Layout>
      {current && (
        <div className={styles['product-details-page']}>
          <div className={styles['current-product']}>
            {isMobile() ? (
              <ProductImagesMobile
                className={styles['product-images']}
                data={{
                  type: current.type,
                  images: current.images,
                }}
              />
            ) : (
              <ProductImages
                className={styles['product-images']}
                data={{
                  type: current.type,
                  images: current.images,
                }}
              />
            )}

            <div className={styles['product-details']}>
              <ProductTitle data={{ title: current.title }} />

              <div>
                <ProductSellerInfo data={current.seller} />

                <ProductPostedDate data={{ postedDate: current.postedDate }} />
              </div>

              {current.type === ProductType.Bid ? (
                <ProductPurchaseBid
                  data={{
                    bidPrice: current.bidPrice,
                    numBids: current.numBids,
                  }}
                />
              ) : current.type === ProductType.BuyNow ? (
                <ProductPurchaseBuy data={{ price: current.price }} />
              ) : (
                <ProductPurchasePreOrder data={{ price: current.price }} />
              )}

              <ProductDetails
                data={{
                  condition: current.condition,
                  description: current.description,
                }}
              />
            </div>
          </div>

          {moreFromSeller.length > 0 && (
            <ProductMoreFromSeller
              className={styles['product-more-from-seller']}
              data={{ products: moreFromSeller, seller: current.seller }}
            />
          )}

          {recommended.length > 0 && (
            <ProductRecommended
              className={styles['product-recommended']}
              data={{ products: recommended }}
              onShowMore={handleShowMoreRecommended}
              showMoreText={
                !isShowMoreRecommended ? 'View recommendations' : undefined
              }
            />
          )}
        </div>
      )}
    </Layout>
  );
}

export default ProductDetailsPage;
