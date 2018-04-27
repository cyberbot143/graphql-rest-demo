import { Router } from 'express';

import { getAll } from './get-all';
import { get } from './get';

export default function usersHandler() {
  const router = new Router();

  router
    .get('/', getAll)
    .get('/:id', get);

  return router;
}
