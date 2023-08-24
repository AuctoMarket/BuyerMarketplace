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
  ) => void;
}

export function DeliveryMethods({
  className,
  data,
  onChangeData,
  ...rest
}: Props) {
  const [collectionPoint, setCollectionPoint] = React.useState<CollectionPoint>(
    CollectionPoint.BotanicGardensMRT,
  );
  const [standardDeliveryAddress, setStandardDeliveryAddress] =
    React.useState<DeliveryAddress>({
      addressLine1: '',
      addressLine2: '',
      postalCode: '',
    });

  const handleChangeDeliveryMethod = (deliveryMethod: DeliveryMethod) => {
    onChangeData({
      deliveryMethod,
      deliveryAddress:
        deliveryMethod === DeliveryMethod.SelfCollection
          ? CollectionPointAddress[collectionPoint]
          : standardDeliveryAddress,
    });
  };
  const handleChangeCollectionPoint = (collectionPoint: CollectionPoint) => {
    setCollectionPoint(collectionPoint);
    onChangeData({
      ...data,
      deliveryAddress: CollectionPointAddress[collectionPoint],
    });
  };
  const handleChangeStandardDeliveryAddress = (
    standardDeliveryAddress: DeliveryAddress,
  ) => {
    setStandardDeliveryAddress(standardDeliveryAddress);
    onChangeData({ ...data, deliveryAddress: standardDeliveryAddress });
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
}

export default DeliveryMethods;
