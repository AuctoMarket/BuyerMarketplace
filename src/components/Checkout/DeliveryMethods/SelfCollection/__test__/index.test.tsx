import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import SelfCollection from '..';
import { CollectionPoint } from '../../../../../types/checkout.type';

describe('SelfCollection', () => {
  const TestComponent = () => {
    const [collectionPoint, setCollectionPoint] = React.useState(
      CollectionPoint.BotanicGardensMRT,
    );

    return (
      <BrowserRouter>
        <SelfCollection
          data={{ collectionPoint }}
          onChangeData={({ collectionPoint }) =>
            setCollectionPoint(collectionPoint)
          }
          role="selfcollection"
        />
      </BrowserRouter>
    );
  };

  test('renders SelfCollection', async () => {
    render(<TestComponent />);

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
});
