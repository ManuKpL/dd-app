export interface DataCollection<T = any> {
  find: () => T[];
  findOne: (id: string) => T;
}
