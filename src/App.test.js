import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Testing Field message', () => {
  render(<App />)
  const message = screen.getByText(/Testing Field/i);
  expect(message).toBeInTheDocument();
});
