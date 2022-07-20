import { rest } from 'msw';
import { API_URL } from '../../api-client';

import { items } from './marketplace.fixtures';

const DELAY = 3000;

export const handlers = [
  rest.get(`${API_URL}/items`, (req, res, ctx) => {
    return res(ctx.delay(DELAY), ctx.json(items));
  }),
];
