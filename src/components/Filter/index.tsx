import React, { ComponentProps, useState } from 'react';
import { Form, Checkbox } from 'react-daisyui';

import styles from './index.module.scss';
import Button from '../Button';
import {
  ProductType,
  Language,
  Expansion,
  ProductsQuery,
} from '../../types/product.type';
import responsive from '../../utils/responsive';

interface Props extends ComponentProps<'div'> {
  data: Omit<ProductsQuery, 'seller_id'>;
  onChangeData: (data: Omit<ProductsQuery, 'seller_id'>) => void;
}

const filters: {
  title: string;
  key: keyof Omit<ProductsQuery, 'seller_id'>;
  options: {
    title: string;
    value: Language | Expansion | string | ProductType;
  }[];
}[] = [
  {
    title: 'Language',
    key: 'languages',
    options: [
      {
        title: 'English',
        value: Language.Eng,
      },
      {
        title: 'Japanese',
        value: Language.Jap,
      },
    ],
  },
  {
    title: 'Expansion',
    key: 'expansions',
    options: [
      {
        title: 'Scarlet & Violet',
        value: Expansion.SV,
      },
      {
        title: 'Sword & Shield',
        value: Expansion.SH,
      },
    ],
  },
  {
    title: 'Price',
    key: 'prices',
    options: [
      {
        title: 'Under S$20',
        value: '0-20',
      },
      {
        title: 'S$20 - S$50',
        value: '20-50',
      },
      {
        title: 'S$50 - S$100',
        value: '50-100',
      },
      {
        title: 'S$100 - S$200',
        value: '100-200',
      },
      {
        title: 'Over S$200',
        value: '200',
      },
    ],
  },
  {
    title: 'Availability',
    key: 'product_types',
    options: [
      {
        title: 'Available Now',
        value: ProductType.BuyNow,
      },
      {
        title: 'Pre-Order',
        value: ProductType.PreOrder,
      },
    ],
  },
];

const Filter = ({ className, data, onChangeData, ...rest }: Props) => {
  const [filter, setFilter] = useState(data);

  const handleChangeFilter = (
    key: keyof Omit<ProductsQuery, 'seller_id'>,
    value: Language | Expansion | string | ProductType,
  ) => {
    const newFilter = { ...filter };
    newFilter[key] = filter[key]?.includes(value as never)
      ? (filter[key] as any[])?.filter((item) => item !== value)
      : [...(filter[key] || []), value];

    setFilter(newFilter);

    if (!responsive.isSm()) {
      onChangeData(newFilter);
    }
  };
  const handleApplyFilter = () => {
    onChangeData(filter);
  };
  const handleClearFilter = () => {
    const newFilter = {};
    setFilter(newFilter);
    onChangeData(newFilter);
  };

  return (
    <div className={`${className} ${styles['filter-container']}`} {...rest}>
      {filters.map(({ title, key, options }, index) => (
        <div className={styles['filter']} key={index}>
          <div className={styles['title']}>{title}:</div>

          <Form className={styles['form']}>
            {options.map(({ title, value }, index) => (
              <Form.Label title={title} key={index}>
                <Checkbox
                  name="option"
                  checked={filter[key]?.includes(value as never)}
                  onChange={() => handleChangeFilter(key, value)}
                />
              </Form.Label>
            ))}
          </Form>
        </div>
      ))}

      <div className={styles['footer']}>
        <Button
          className={styles['apply-button']}
          theme="black"
          onClick={handleApplyFilter}
        >
          Apply Filters
        </Button>

        <Button className={styles['clear-button']} onClick={handleClearFilter}>
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default Filter;
