import { UserTable } from './UserTable';

export interface UserService {
  all: () => UserTable[];
}
