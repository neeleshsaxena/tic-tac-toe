import React from 'react';
import { render } from '@testing-library/react';
import Game from './components/Game';
import '@testing-library/jest-dom/extend-expect'

test.only('renders game', () => {
  const { getByText } = render(<Game />);
  const linkElement = getByText('tic tac toe');
  expect(linkElement).toBeInTheDocument();
});