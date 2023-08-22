import React, { ChangeEvent, ComponentProps } from 'react';
import styles from './index.module.scss';
import { Form, Radio } from 'react-daisyui';
import { Link } from 'react-router-dom';

import { CollectionPoint } from '../../../../types/checkout.type';

interface Props extends ComponentProps<'div'> {
  data: { collectionPoint: CollectionPoint };
  onChangeData: (data: { collectionPoint: CollectionPoint }) => void;
}

export function SelfCollection({
  className,
  data,
  onChangeData,
  ...rest
}: Props) {
  const handleSelectCollectionPoint = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    onChangeData({ collectionPoint: event.target.value as CollectionPoint });
  };

  return (
    <div
      className={`${className} ${styles['delivery-method-choose-collection']}`}
      {...rest}
    >
      <p>Choose you collection point</p>
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
            checked={data.collectionPoint === CollectionPoint.BotanicGardensMRT}
            onChange={handleSelectCollectionPoint}
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
            checked={data.collectionPoint === CollectionPoint.DhobyGhautMRT}
            onChange={handleSelectCollectionPoint}
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
            checked={data.collectionPoint === CollectionPoint.AngMoKioMRT}
            onChange={handleSelectCollectionPoint}
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
            checked={data.collectionPoint === CollectionPoint.WoodlandsMRT}
            onChange={handleSelectCollectionPoint}
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
            checked={data.collectionPoint === CollectionPoint.BishanMRT}
            onChange={handleSelectCollectionPoint}
            size="xs"
          />
        </Form.Label>
      </Form>
      <div className={`${styles['delivery-method-information']}`}>
        <p>
          Once payment is completed, you will receive an email to schedule the
          self collection date and time. If you have any questions, you can
          reach out to us on telegram
        </p>
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
