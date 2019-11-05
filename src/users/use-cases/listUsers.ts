import { User } from '../User';
import { UserService } from '../data-access';

export const makeListUsers = (userService: UserService) => {
  return async () => userService.all().map(User.NEW);
};
