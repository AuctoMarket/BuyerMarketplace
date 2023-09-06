import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import SelfCollection from '..';
import { CollectionPoint } from '../../../../../types/order.type';
import { ProductType } from '../../../../../types/product.type';

describe('SelfCollection', () => {
  const TestComponent = ({ type }: { type: ProductType }) => {
    const [collectionPoint, setCollectionPoint] = React.useState(
      CollectionPoint.BotanicGardensMRT,
    );

    return (
      <BrowserRouter>
        <SelfCollection
          product={{
            type,
            releaseDate: new Date(),
            orderDate: new Date(),
          }}
          data={collectionPoint}
          onChangeData={(collectionPoint) =>
            setCollectionPoint(collectionPoint)
          }
          role="selfcollection"
        />
      </BrowserRouter>
    );
  };

  test('renders SelfCollection', async () => {
    render(<TestComponent type={ProductType.BuyNow} />);

    const selfCollection = await screen.findByRole('selfcollection');
    expect(selfCollection).toBeInTheDocument();

    const botanicGardensMRT = await screen.findByTestId(
      CollectionPoint.BotanicGardensMRT,
    );
    userEvent.click(botanicGardensMRT);

    const dhobyGhautMRT = await screen.findByTestId(
      CollectionPoint.DhobyGhautMRT,
    );
    userEvent.click(dhobyGhautMRT);

    const angMoKioMRT = await screen.findByTestId(CollectionPoint.AngMoKioMRT);
    userEvent.click(angMoKioMRT);

    const woodlandsMRT = await screen.findByTestId(
      CollectionPoint.WoodlandsMRT,
    );
    userEvent.click(woodlandsMRT);

    const bishanMRT = await screen.findByTestId(CollectionPoint.BishanMRT);
    userEvent.click(bishanMRT);
  });

  test('renders SelfCollection pre-order', async () => {
    render(<TestComponent type={ProductType.PreOrder} />);

    const selfCollection = await screen.findByRole('selfcollection');
    expect(selfCollection).toBeInTheDocument();
  });
});
