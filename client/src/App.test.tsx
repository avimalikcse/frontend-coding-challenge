import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders absence Manager tool', () => {
  render(<App />);
  const linkElement = screen.getByText(/Absence Manager Tool/i);
  expect(linkElement).toBeInTheDocument();
});
