import React from 'react';
import { render, screen } from '@testing-library/react';

import Icon from '..';

test('renders Icon', () => {
  render(<Icon name="test" />);
  const text = screen.getByAltText('test');
  expect(text).toBeInTheDocument();
});
