import React from 'react';
import { render, screen } from '@testing-library/react';

import Image from '..';

test('renders Image', () => {
  render(<Image src="test" alt="test" />);
  const text = screen.getByAltText('test');
  expect(text).toBeInTheDocument();
});
