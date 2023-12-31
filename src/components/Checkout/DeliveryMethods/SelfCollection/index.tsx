import React, { ChangeEvent, ComponentProps } from 'react';
import styles from './index.module.scss';
import { Form, Radio } from 'react-daisyui';
import { Link } from 'react-router-dom';

import { CollectionPoint } from '../../../../types/order.type';

interface Props extends ComponentProps<'div'> {
  data: CollectionPoint;
  onChangeData: (data: CollectionPoint) => void;
}

export function SelfCollection({
  className,
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
      <p>Choose your collection point</p>

      <Form className={`${styles['delivery-method-choose-form']}`}>
        <Form.Label
          className={`${styles['delivery-method-choose-form-lable']}`}
          title={CollectionPoint.BotanicGardensMRT}
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
          title={CollectionPoint.DhobyGhautMRT}
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
          title={CollectionPoint.AngMoKioMRT}
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
          title={CollectionPoint.WoodlandsMRT}
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
          title={CollectionPoint.BishanMRT}
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
        <Form.Label
          className={`${styles['delivery-method-choose-form-lable']}`}
          title={CollectionPoint.PayaLebarMRT}
          data-testid={CollectionPoint.PayaLebarMRT}
        >
          <Radio
            className={`${styles['delivery-method-choose-radio']}`}
            name="option"
            value={CollectionPoint.PayaLebarMRT}
            checked={data === CollectionPoint.PayaLebarMRT}
            onChange={handleChangeCollectionPoint}
            size="xs"
          />
        </Form.Label>
        <Form.Label
          className={`${styles['delivery-method-choose-form-lable']}`}
          title={CollectionPoint.EunosMRT}
          data-testid={CollectionPoint.EunosMRT}
        >
          <Radio
            className={`${styles['delivery-method-choose-radio']}`}
            name="option"
            value={CollectionPoint.EunosMRT}
            checked={data === CollectionPoint.EunosMRT}
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
