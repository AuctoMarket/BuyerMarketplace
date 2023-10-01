import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import SelfCollection from '..';
import { CollectionPoint } from '../../../../../types/order.type';

describe('SelfCollection', () => {
  const TestComponent = () => {
    const [collectionPoint, setCollectionPoint] = React.useState(
      Object.values(CollectionPoint)[0],
    );

    return (
      <BrowserRouter>
        <SelfCollection
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
    render(<TestComponent />);

    const selfCollection = await screen.findByRole('selfcollection');
    expect(selfCollection).toBeInTheDocument();

    const point1 = await screen.findByTestId(CollectionPoint.MayflowerMRT);
    userEvent.click(point1);

    const point2 = await screen.findByTestId(CollectionPoint.NewtonMRT);
    userEvent.click(point2);
  });
});
