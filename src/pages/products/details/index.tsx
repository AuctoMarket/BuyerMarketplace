import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import ProductPreOrder from '../../../components/Product/PreOrder';
import ProductRecentlyAdded from '../../../components/Product/RecentlyAdded';
import useProduct from '../../../hooks/useProduct';
import useProductsList from '../../../hooks/useProductsList';
import useCart from '../../../hooks/useCart';
import { Product, ProductType } from '../../../types/product.type';
import responsive from '../../../utils/responsive';

function ProductDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { product } = useProduct(id as string);
  const { cartItems, addCartItem, removeAllCartItems } = useCart();
  const [quantity, setQuantity] = useState(1);
  const availableQuantity = product
    ? product.quantity -
      product.soldQuantity -
      (cartItems.find((item) => item.productId === product.id)?.quantity || 0)
    : 0;

  const { data: { products: preOrder } = { products: [] } } = useProductsList(
    { product_types: [ProductType.PreOrder] },
    { anchor: 0, limit: 4 },
  );
  const { data: { products: recentlyAdded } = { products: [] } } =
    useProductsList({}, { sort_by: 'posted_date', anchor: 0, limit: 8 });
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
    if (!product || quantity <= 0 || availableQuantity <= 0) {
      return;
    }

    removeAllCartItems();
    addCartItem(product.id, quantity);
    navigate('/checkout');
  };

  const handleAddToCart = () => {
    if (!product || quantity <= 0 || availableQuantity <= 0) {
      return;
    }

    addCartItem(product.id, quantity);
    setQuantity(1);
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
                    availableQuantity,
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
