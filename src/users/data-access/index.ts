import { makeUsersDataBase } from './adapter';
export { UserService } from './UserService';

const DB = {
  users: [{ username: 'bobby', password: 'martin' }],
};

export const userDataBase = makeUsersDataBase({
  connect: (collectionName: string) => ({
    find: () => DB[collectionName],
    findOne: (id: string) => DB[collectionName].find((user: any) => user.username === id),
  }),
});
