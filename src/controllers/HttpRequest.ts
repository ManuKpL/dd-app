export interface HttpRequest {
  body?: any;
  query?: { [key: string]: string };
  params?: { [key: string]: string };
  ip?: string;
  method?: string;
  path?: string;
  headers?: { [key: string]: string };
}
