import React from 'react';
import { render, screen } from '@testing-library/react';

import NumberInput from '..';
import userEvent from '@testing-library/user-event';

describe('NumberInput', () => {
  test('renders NumberInput without min max', async () => {
    render(<NumberInput role="test" value={2} onChangeValue={() => {}} />);

    const text = await screen.findByRole('test');
    expect(text).toBeInTheDocument();

    const btnDecrease = await screen.findByTestId('btn-decrease');
    userEvent.click(btnDecrease);

    const btnIncrease = await screen.findByTestId('btn-increase');
    userEvent.click(btnIncrease);
  });

  test('renders NumberInput with value is min', async () => {
    render(
      <NumberInput
        role="test"
        value={1}
        onChangeValue={() => {}}
        min={1}
        max={5}
      />,
    );

    const text = await screen.findByRole('test');
    expect(text).toBeInTheDocument();

    const btnDecrease = await screen.findByTestId('btn-decrease');
    userEvent.click(btnDecrease);

    const btnIncrease = await screen.findByTestId('btn-increase');
    userEvent.click(btnIncrease);
  });

  test('renders NumberInput with value is max', async () => {
    render(
      <NumberInput
        role="test"
        value={5}
        onChangeValue={() => {}}
        min={1}
        max={5}
      />,
    );

    const text = await screen.findByRole('test');
    expect(text).toBeInTheDocument();

    const btnDecrease = await screen.findByTestId('btn-decrease');
    userEvent.click(btnDecrease);

    const btnIncrease = await screen.findByTestId('btn-increase');
    userEvent.click(btnIncrease);
  });
});
