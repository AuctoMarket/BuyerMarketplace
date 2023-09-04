import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginForm from '..';

describe('Counter', () => {
  it('should render with initial count of 0', () => {
    render(<LoginForm />);
    const countElement = screen.getByText('Count: 0');
    expect(countElement).toBeInTheDocument();
  });
});
