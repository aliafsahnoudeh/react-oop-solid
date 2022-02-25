import React from 'react';
import {
  render, screen, waitFor, queryByAttribute, waitForElementToBeRemoved,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import apiMock from '../mockedData/apiMock';

import Main from './Main';

const server = setupServer(
  rest.get('http://localhost:4000/companies', (req, res, ctx) => res(ctx.status(200), ctx.json([]))),
);

const getByClassName = queryByAttribute.bind(null, 'class');

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders loading screen', () => {
  render(<Main />);
  const loadingElement = screen.getByText('loading');
  expect(loadingElement).toBeInTheDocument();
});

test('renders no data error', async () => {
  const spy = jest.spyOn(global, 'fetch');
  render(<Main />);
  await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
  await waitFor(() => {
    const loadingElement = screen.getByText('No Data To Show!');
    expect(loadingElement).toBeInTheDocument();
  });
});

test('renders complete list of Company elements after api call', async () => {
  server.use(
    rest.get('http://localhost:4000/companies', (req, res, ctx) => res(ctx.status(200), ctx.json(apiMock))),
  );
  const spy = jest.spyOn(global, 'fetch');
  const { container } = render(<Main />);
  await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
  screen.debug();
  await waitForElementToBeRemoved(() => screen.queryByText('No Data To Show!'));
  await waitFor(async () => {
    const companies = getByClassName(container, 'company');
    expect(companies).toBe(1);
  });
});
