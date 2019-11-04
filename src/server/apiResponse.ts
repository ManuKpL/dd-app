import { Response } from 'express';
export default (res: Response) => (httpResponse: any) => {
  res.set({
    'Content-Type': 'application/json',
    ...(httpResponse.headers || {}),
  });
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
