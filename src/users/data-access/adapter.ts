import { DataBase } from '../../data-access';
import { UserTable } from './UserTable';
import { UserService } from './UserService';

export const makeUsersDataBase = (dataBase: DataBase): UserService => ({
  all: () => dataBase.connect<UserTable>('users').find(),
});
