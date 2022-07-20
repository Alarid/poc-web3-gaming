import { setupWorker } from 'msw';

import { handlers } from '../api/marketplace/mocks/marketplace.handlers';

export const worker = setupWorker(...handlers);
