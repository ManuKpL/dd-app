import { Request, Response } from 'express';

import { Controller, HttpRequest } from '../controllers';
import apiResponse from './apiResponse';
import serverError from './serverError';

export default (controller: Controller) => {
  return (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        'Content-Type': req.get('Content-Type'),
        Referer: req.get('referer'),
        'User-Agent': req.get('User-Agent'),
      },
    };

    controller(httpRequest)
      .then(apiResponse(res))
      .catch(serverError(res));
  };
};
