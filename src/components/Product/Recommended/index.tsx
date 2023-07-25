import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import List from '../../List';
import Card from '../Card';
import Button from '../../Button';

interface Props extends ComponentProps<'div'> {
  data: {
    products: {
      id: string;
      type: string;
      image: string;
      title: string;
      sellerInfo: {
        name: string;
        avatar: string;
        isVerified: boolean;
        numReviews: number;
      };
      purchase: {
        currentBid: number;
        numBids: number;
        buyNowPrice: number;
      };
      postedDate: string;
    }[];
  };
  onShowMore: () => void;
  showMoreText?: string;
}

export function ProductRecommended({
  className,
  data,
  onShowMore,
  showMoreText = 'Show more',
  ...rest
}: Props) {
  const handleShowMore = () => {
    onShowMore();
  };

  return (
    <div className={`${styles['container']} ${className}`} {...rest}>
      <div className={styles['heading']}>Recommended for you</div>

      <div className={styles['list-container']}>
        <List
          className={styles['list']}
          items={data.products.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        />
      </div>

      <div className={styles['show-more-container']}>
        <Button
          className={styles['show-more']}
          theme="black"
          onClick={handleShowMore}
        >
          {showMoreText}
        </Button>
      </div>
    </div>
  );
}

export default ProductRecommended;
