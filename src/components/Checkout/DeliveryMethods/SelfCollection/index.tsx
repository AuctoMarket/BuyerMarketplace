import React, { ChangeEvent, ComponentProps } from 'react';
import styles from './index.module.scss';
import { Form, Radio } from 'react-daisyui';
import { Link } from 'react-router-dom';
// import dayjs from 'dayjs';

import { CollectionPoint } from '../../../../types/order.type';
import { ProductType, type Product } from '../../../../types/product.type';

interface Props extends ComponentProps<'div'> {
  product: Pick<Product, 'type' | 'releasedDate' | 'orderedDate'>;
  data: CollectionPoint;
  onChangeData: (data: CollectionPoint) => void;
}

export function SelfCollection({
  className,
  product,
  data,
  onChangeData,
  ...rest
}: Props) {
  const handleChangeCollectionPoint = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    if (data === event.target.value) {
      return;
    }

    onChangeData(event.target.value as CollectionPoint);
  };

  return (
    <div
      className={`${className} ${styles['delivery-method-choose-collection']}`}
      {...rest}
    >
      {product.type === ProductType.PreOrder && (
        <p className={styles['delivery-date']}>
          {/* *The estimated delivery date of this pre-order is{' '}
          {dayjs(product.releasedDate).format('DD MMMM YYYY')} */}
          Your order will be delivered within 2 weeks of the release date and we
          will contact you to schedule a delivery. Any delays beyond that will
          be refunded fully.
        </p>
      )}

      <p>Choose your collection point</p>

      <Form className={`${styles['delivery-method-choose-form']}`}>
        <Form.Label
          className={`${styles['delivery-method-choose-form-lable']}`}
          title="Botanic Gardens MRT"
          data-testid={CollectionPoint.BotanicGardensMRT}
        >
          <Radio
            className={`${styles['delivery-method-choose-radio']}`}
            name="option"
            value={CollectionPoint.BotanicGardensMRT}
            checked={data === CollectionPoint.BotanicGardensMRT}
            onChange={handleChangeCollectionPoint}
            size="xs"
          />
        </Form.Label>
        <Form.Label
          className={`${styles['delivery-method-choose-form-lable']}`}
          title="Dhoby Ghaut MRT"
          data-testid={CollectionPoint.DhobyGhautMRT}
        >
          <Radio
            className={`${styles['delivery-method-choose-radio']}`}
            name="option"
            value={CollectionPoint.DhobyGhautMRT}
            checked={data === CollectionPoint.DhobyGhautMRT}
            onChange={handleChangeCollectionPoint}
            size="xs"
          />
        </Form.Label>
        <Form.Label
          className={`${styles['delivery-method-choose-form-lable']}`}
          title="Ang Mo Kio MRT"
          data-testid={CollectionPoint.AngMoKioMRT}
        >
          <Radio
            className={`${styles['delivery-method-choose-radio']}`}
            name="option"
            value={CollectionPoint.AngMoKioMRT}
            checked={data === CollectionPoint.AngMoKioMRT}
            onChange={handleChangeCollectionPoint}
            size="xs"
          />
        </Form.Label>
        <Form.Label
          className={`${styles['delivery-method-choose-form-lable']}`}
          title="Woodlands MRT"
          data-testid={CollectionPoint.WoodlandsMRT}
        >
          <Radio
            className={`${styles['delivery-method-choose-radio']}`}
            name="option"
            value={CollectionPoint.WoodlandsMRT}
            checked={data === CollectionPoint.WoodlandsMRT}
            onChange={handleChangeCollectionPoint}
            size="xs"
          />
        </Form.Label>
        <Form.Label
          className={`${styles['delivery-method-choose-form-lable']}`}
          title="Bishan MRT"
          data-testid={CollectionPoint.BishanMRT}
        >
          <Radio
            className={`${styles['delivery-method-choose-radio']}`}
            name="option"
            value={CollectionPoint.BishanMRT}
            checked={data === CollectionPoint.BishanMRT}
            onChange={handleChangeCollectionPoint}
            size="xs"
          />
        </Form.Label>
      </Form>

      <div className={`${styles['delivery-method-information']}`}>
        <div className={styles['insurance']}>
          Deliveries are 100% insured for lost packages and will take 1-3
          business days.
        </div>
        Once payment is completed, you will receive an email to schedule the
        self collection date and time. If you have any questions, you can reach
        out to us on telegram{' '}
        <Link
          className={`${styles['delivery-method-information-contact']}`}
          to="https://t.me/auctomarketplace"
          target="_blank"
        >
          @auctomarketplace
        </Link>
      </div>
    </div>
  );
}

export default SelfCollection;
