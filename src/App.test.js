import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './components/Header';

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/products/i);
  expect(linkElement).toBeInTheDocument();
});
