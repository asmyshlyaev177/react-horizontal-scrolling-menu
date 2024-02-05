import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const utils = render(<App />);
  expect(utils.container).toBeTruthy()
});
