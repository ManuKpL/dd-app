import { Response } from 'express';

export default (res: Response) => (error: any) => {
  console.error(error); // tslint:disable-line no-console
  res.status(500).json({ error: 'An unkown error occurred.' });
};
