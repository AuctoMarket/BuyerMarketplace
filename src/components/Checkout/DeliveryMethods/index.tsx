import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import SectionHeading from '../SectionHeading';
import GroupButton from './GroupButton';
import SelfCollection from './SelfCollection';
import StandardDelivery from './StandardDelivery';
import {
  DeliveryMethod,
  CollectionPoint,
  CollectionPointAddress,
  DeliveryAddress,
} from '../../../types/order.type';

import type { Order } from '../../../types/order.type';

interface Props extends ComponentProps<'div'> {
  data: Pick<Order, 'deliveryMethod' | 'deliveryAddress'>;
  onChangeData: (
    data: Pick<Order, 'deliveryMethod' | 'deliveryAddress'>,
    isError: boolean,
  ) => void;
}

const isError = (error: any) => Object.values(error).some(Boolean);

const DeliveryMethods = ({ className, data, onChangeData, ...rest }: Props) => {
  const [collectionPoint, setCollectionPoint] = React.useState<CollectionPoint>(
    CollectionPoint.BotanicGardensMRT,
  );
  const [standardDeliveryAddress, setStandardDeliveryAddress] =
    React.useState<DeliveryAddress>({
      addressLine1: '',
      addressLine2: '',
      postalCode: '',
    });
  const [error, setError] = React.useState<{
    standardDeliveryAddress?: boolean;
  }>({
    standardDeliveryAddress: true,
  });

  const handleChangeDeliveryMethod = (deliveryMethod: DeliveryMethod) => {
    onChangeData(
      {
        deliveryMethod,
        deliveryAddress:
          deliveryMethod === DeliveryMethod.SelfCollection
            ? CollectionPointAddress[collectionPoint]
            : standardDeliveryAddress,
      },
      deliveryMethod === DeliveryMethod.StandardDelivery && isError(error),
    );
  };

  const handleChangeCollectionPoint = (collectionPoint: CollectionPoint) => {
    setCollectionPoint(collectionPoint);
    onChangeData(
      {
        ...data,
        deliveryAddress: CollectionPointAddress[collectionPoint],
      },
      false,
    );
  };

  const handleChangeStandardDeliveryAddress = (
    standardDeliveryAddress: DeliveryAddress,
    isErrorAddress: boolean,
  ) => {
    const newError = { ...error, standardDeliveryAddress: isErrorAddress };

    setStandardDeliveryAddress(standardDeliveryAddress);
    setError(newError);
    onChangeData(
      { ...data, deliveryAddress: standardDeliveryAddress },
      isError(newError),
    );
  };

  return (
    <div className={`${className} delivery-method`} {...rest}>
      <SectionHeading data={{ number: '2', text: 'Delivery Method' }} />

      <div className={styles['delivery-method-container']}>
        <GroupButton
          data={data.deliveryMethod}
          onChangeData={handleChangeDeliveryMethod}
        />
        {data.deliveryMethod === DeliveryMethod.SelfCollection ? (
          <SelfCollection
            data={collectionPoint}
            onChangeData={handleChangeCollectionPoint}
          />
        ) : (
          <StandardDelivery
            data={standardDeliveryAddress}
            onChangeData={handleChangeStandardDeliveryAddress}
          />
        )}
      </div>
    </div>
  );
};

export default DeliveryMethods;
