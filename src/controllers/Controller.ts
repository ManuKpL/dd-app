import { HttpRequest } from './HttpRequest';
import { HttpResponse } from './HttpResponse';

export type Controller = (httpRequest?: HttpRequest) => Promise<HttpResponse>;
