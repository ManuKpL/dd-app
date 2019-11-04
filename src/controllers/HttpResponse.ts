export interface HttpResponse {
  headers: { [key: string]: string };
  statusCode: number;
  body: any;
}
