import React from 'react';
import { render, screen } from '@testing-library/react';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Main from './Main';
import apiMock from '../mockedData/apiMock';

const server = setupServer(
  rest.get('http://localhost:4000/companies', (req, res, ctx) => res(ctx.json([]))),
);

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

const wait = (interval: number): Promise<void> => new Promise((resolve) => {
  setTimeout(() => resolve(), interval);
});

test('renders loading screen', () => {
  render(<Main />);
  const loadingElement = screen.getByText('loading');
  expect(loadingElement).toBeInTheDocument();
});

test('renders no data error', () => {
  server.listen();
  render(<Main />);
  wait(2000);
  const loadingElement = screen.getByText('No Data To Show!');
  expect(loadingElement).toBeInTheDocument();
});
