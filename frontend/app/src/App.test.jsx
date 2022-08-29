import React from 'react';
import App from './App';
import { renderActWait } from '../../test/utils';

jest.mock('./api/msg', () => ({
  getMsgs: () => Promise.resolve([]),
}));

test('renders learn react link', async () => {
  const { getByText } = await renderActWait(<App />);
  expect(getByText(/Welcome/i)).toBeInTheDocument();
});
