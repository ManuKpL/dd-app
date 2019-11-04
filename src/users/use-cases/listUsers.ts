import { User } from '../User';

const users = [
  new User({
    login: 'bobby',
    password: 'martin',
  }),
];

export const listUsers = async () => users;
