import { userDataBase } from '../data-access';
import { makeListUsers } from './listUsers';

export const listUsers = makeListUsers(userDataBase);
