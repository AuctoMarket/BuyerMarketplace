import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import Recommended from '..';
import { ProductType, Product } from '../../../../types/product.type';

describe('Recommended', () => {
  const data: {
    products: Product[];
  } = {
    products: [
      {
        id: '1',
        type: ProductType.Bid,
        images: ['test'],
        title: 'test',
        condition: 4,
        description: 'test',
        seller: {
          id: '1',
          name: 'test',
          numFollowers: 1,
        },
        bidPrice: 1,
        numBids: 1,
        price: 1,
        quantity: 1,
        soldQuantity: 1,
        postedDate: new Date(),
      },
    ],
  };

  test('renders Recommended', async () => {
    render(
      <BrowserRouter>
        <Recommended data={data} role="test" />
      </BrowserRouter>,
    );

    const recommended = await screen.findByRole('test');

    expect(recommended).toBeInTheDocument();
  });

  test('renders Recommended with showMoreButton', async () => {
    render(
      <BrowserRouter>
        <Recommended
          data={data}
          showMoreButton={{ text: 'Show more', onClick: () => {} }}
          role="test"
        />
      </BrowserRouter>,
    );

    const recommended = await screen.findByRole('test');
    const showMore = await screen.findByText('Show more');
    userEvent.click(showMore);

    expect(recommended).toBeInTheDocument();
  });
});
