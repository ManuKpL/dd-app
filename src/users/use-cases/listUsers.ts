import { User } from '../User';

const users = [{ username: 'bobby', password: 'martin' }];

export const listUsers = async () => users.map(User.NEW);
