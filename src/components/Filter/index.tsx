import React, { ComponentProps, useState } from 'react';
import { Form, Checkbox } from 'react-daisyui';

import styles from './index.module.scss';
import Button from '../Button';
import { ProductType, Language, Expansion } from '../../types/product.type';
import responsive from '../../utils/responsive';

interface Data {
  language?: Language[];
  expansion?: Expansion[];
  price?: number[];
  product_type?: ProductType[];
}

interface Props extends ComponentProps<'div'> {
  data: Data;
  onChangeData: (data: Data) => void;
}

const filters: {
  title: string;
  key: keyof Data;
  options: {
    title: string;
    value: Language | Expansion | string | ProductType;
  }[];
}[] = [
  {
    title: 'Language',
    key: 'language',
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
    key: 'expansion',
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
    key: 'price',
    options: [
      {
        title: 'Under S$20',
        value: [0, 2000].join('-'),
      },
      {
        title: 'S$20 - S$50',
        value: [2000, 5000].join('-'),
      },
      {
        title: 'S$50 - S$100',
        value: [5000, 10000].join('-'),
      },
      {
        title: 'S$100 - S$200',
        value: [10000, 20000].join('-'),
      },
      {
        title: 'Over S$200',
        value: [20000].join('-'),
      },
    ],
  },
  {
    title: 'Availability',
    key: 'product_type',
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
    key: keyof Data,
    value: Language | Expansion | string | ProductType,
  ) => {
    const newFilter = { ...filter };
    if (key === 'price') {
      newFilter[key] =
        newFilter[key]?.join('-') === value
          ? []
          : (value as string).split('-').map((item) => Number(item));
    } else {
      newFilter[key] = filter[key]?.includes(value as never)
        ? (filter[key] as any[])?.filter((item) => item !== value)
        : [...(filter[key] || []), value];
    }

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
                  checked={
                    key === 'price'
                      ? filter[key]?.join('-') === value
                      : filter[key]?.includes(value as never)
                  }
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
