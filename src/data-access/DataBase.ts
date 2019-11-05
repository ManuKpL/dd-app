import { DataCollection } from './DataCollection';

export interface DataBase {
  connect: <T = any>(collectionName: string) => DataCollection<T>;
}
