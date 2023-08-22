import React, { ComponentProps } from 'react';

import styles from './index.module.scss';
import SectionHeading from '../SectionHeading';
import GroupButton from './GroupButton';
import SelfCollection from './SelfCollection';
import NormalDelivery from './NormalDelivery';
import { DeliveryMethod } from '../../../types/checkout.type';

import type { DeliveryMethodsData } from '../../../types/checkout.type';

interface Props extends ComponentProps<'div'> {
  data: DeliveryMethodsData;
  onChangeData: (data: DeliveryMethodsData) => void;
}

export function DeliveryMethods({
  className,
  data,
  onChangeData,
  ...rest
}: Props) {
  return (
    <div className={`${className} delivery-method`} {...rest}>
      <SectionHeading data={{ number: '2', text: 'Delivery Method' }} />

      <div className={styles['delivery-method-container']}>
        <GroupButton
          method={data.deliveryMethod}
          onChangeMethod={(deliveryMethod) =>
            onChangeData({ ...data, deliveryMethod })
          }
        />
        {data.deliveryMethod === DeliveryMethod.SelfCollection ? (
          <SelfCollection
            data={data.selfCollection}
            onChangeData={(selfCollection) =>
              onChangeData({ ...data, selfCollection })
            }
          />
        ) : (
          <NormalDelivery
            data={data.normalDelivery}
            onChangeData={(normalDelivery) =>
              onChangeData({ ...data, normalDelivery })
            }
          />
        )}
      </div>
    </div>
  );
}

export default DeliveryMethods;
