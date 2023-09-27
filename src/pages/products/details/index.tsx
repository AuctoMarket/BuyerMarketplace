import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import styles from './index.module.scss';
import Layout from '../../../components/Layout';
import ProductImages from '../../../components/Product/Images';
import ProductImagesMobile from '../../../components/Product/Images/Mobile';
import ProductTitle from '../../../components/Product/Title';
import ProductPurchaseBid from '../../../components/Product/Purchase/Bid';
import ProductPurchaseBuy from '../../../components/Product/Purchase/Buy';
import ProductDetails from '../../../components/Product/Details';
import ProductPostedDate from '../../../components/Product/PostedDate';
import ProductEstimatedDeliveryDate from '../../../components/Product/EstimatedDeliveryDate';
// import ProductMoreFromSeller from '../../components/Product/MoreFromSeller';
import ProductPreOrder from '../../../components/Product/PreOrder';
import ProductRecentlyAdded from '../../../components/Product/RecentlyAdded';
import useProduct from '../../../hooks/useProduct';
import useProductsList from '../../../hooks/useProductsList';
import useAuth from '../../../hooks/useAuth';
import useCart from '../../../hooks/useCart';
import { Product, ProductType } from '../../../types/product.type';
import responsive from '../../../utils/responsive';

function ProductDetailsPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams<{ id: string }>();
  const { product } = useProduct(id as string);
  const { addProduct } = useCart();

  // const { productsList: moreFromSeller } = useProductsList(
  //   { seller_id: product?.seller.id },
  //   { sort_by: 'posted_date' },
  // );
  const { data: { products: preOrder } = { products: [] } } = useProductsList(
    { product_types: [ProductType.PreOrder] },
    { anchor: 0, limit: 4 },
  );
  const { data: { products: recentlyAdded } = { products: [] } } =
    useProductsList({}, { sort_by: 'posted_date', anchor: 0, limit: 8 });

  const [quantity, setQuantity] = useState(1);
  // const [moreFromSellerProducts, setMoreFromSellerProducts] = useState<
  //   Product[]
  // >([]);
  const [preOrderProducts, setPreOrderProducts] = useState<Product[]>([]);
  const [recentlyAddedProducts, setRecentlyAddedProducts] = useState<Product[]>(
    [],
  );

  useEffect(() => {
    if (!id) {
      return;
    }

    setQuantity(1);
  }, [id]);

  // useEffect(() => {
  //   if (!id || !moreFromSeller || moreFromSeller.length === 0) {
  //     return;
  //   }

  //   setMoreFromSellerProducts(moreFromSeller.filter((p) => p.id !== id));
  // }, [id, moreFromSeller]);

  useEffect(() => {
    if (!id || !preOrder || preOrder.length === 0) {
      return;
    }

    setPreOrderProducts(preOrder.filter((p) => p.id !== id));
  }, [id, preOrder]);

  useEffect(() => {
    if (!id || !recentlyAdded || recentlyAdded.length === 0) {
      return;
    }

    setRecentlyAddedProducts(recentlyAdded.filter((p) => p.id !== id));
  }, [id, recentlyAdded]);

  const handleBuy = () => {
    addProduct(product as Product, quantity);
    window.location.href = '/checkout';
  };

  const handleAddToCart = () => {
    addProduct(product as Product, quantity);
  };
  return (
    <Layout>
      {product && (
        <div className={styles['product-details-page']}>
          <div className={styles['product']}>
            {responsive.isSm() ? (
              <ProductImagesMobile
                className={styles['product-images']}
                data={{
                  images: product.images,
                  type: product.type,
                  releasedDate: product.releasedDate,
                  orderedDate: product.orderedDate,
                }}
              />
            ) : (
              <ProductImages
                className={styles['product-images']}
                data={{
                  images: product.images,
                  type: product.type,
                  releasedDate: product.releasedDate,
                  orderedDate: product.orderedDate,
                }}
              />
            )}

            <div className={styles['product-details']}>
              <ProductTitle data={{ title: product.title }} />

              <div>
                {/* <ProductSellerInfo data={product.seller} /> */}

                {product.type === ProductType.BuyNow ? (
                  <ProductPostedDate
                    data={{ postedDate: product.postedDate }}
                  />
                ) : (
                  <ProductEstimatedDeliveryDate
                    data={{
                      deliveryDate: dayjs(product.releasedDate)
                        .add(3, 'day')
                        .toDate(),
                    }}
                  />
                )}
              </div>

              {product.type === ProductType.Bid ? (
                <ProductPurchaseBid
                  data={{
                    bidPrice: product.bidPrice,
                    numBids: product.numBids,
                  }}
                />
              ) : (
                <ProductPurchaseBuy
                  data={{
                    availableQuantity: product.quantity - product.soldQuantity,
                    price:
                      product.type === ProductType.BuyNow
                        ? product.price
                        : product.price - (product.discount || 0),
                    quantity,
                    type: product.type,
                  }}
                  onChangeQuantity={setQuantity}
                  onBuy={handleBuy}
                  onAddToCart={handleAddToCart}
                />
              )}

              <ProductDetails
                data={{
                  condition: product.condition,
                  description: product.description,
                }}
              />
            </div>
          </div>

          {/* {moreFromSellerProducts.length > 0 && (
            <ProductMoreFromSeller
              className={styles['product-more-from-seller']}
              data={{
                products: moreFromSellerProducts,
                seller: product.seller,
              }}
            />
          )} */}

          {preOrderProducts.length > 0 && (
            <ProductPreOrder
              className={styles['product-pre-order']}
              data={{
                products: preOrderProducts,
              }}
            />
          )}

          {recentlyAddedProducts.length > 0 && (
            <ProductRecentlyAdded
              className={styles['product-recently-added']}
              data={{
                products: recentlyAddedProducts,
                seeMore: true,
              }}
            />
          )}
        </div>
      )}
    </Layout>
  );
}

export default ProductDetailsPage;
