import { rest } from 'msw';

import { API_URL } from '../../../api/api-client';
import { items } from './marketplace.fixtures';

const DELAY = 500;

export const handlers = [
  rest.get(`${API_URL}/items`, (req, res, ctx) => {
    return res(ctx.delay(DELAY), ctx.json(items));
  }),
  rest.get(`${API_URL}/item/:id`, (req, res, ctx) => {
    const { id } = req.params;
    const item = items.find((i) => i.id === id);
    return res(ctx.delay(DELAY), ctx.json(item));
  }),
];
