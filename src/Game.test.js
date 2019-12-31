import React from 'react';
import { render } from '@testing-library/react';
import Game from './components/Game';

test('renders game', () => {
  const { getByText } = render(<Game />);
  const linkElement = getByText(/tic tac toe/i);
  expect(linkElement).toBeInTheDocument();
});
