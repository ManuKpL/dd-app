import express from 'express';

import usersRouter from '../users/router';

export default () => {
  const app = express();

  app.use('/users', usersRouter);

  app.get('*', (_, res) => {
    res.json({ ok: true });
  });

  app.listen(3000, () => {
    console.info('Server started on http://localhost:3000'); // tslint:disable-line no-console
  });
};
