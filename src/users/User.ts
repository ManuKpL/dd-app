let id = 0;

export class User {
  id: number;
  login: string;
  password: string;

  constructor(userData: { login: string; password: string }) {
    this.id = ++id; // tslint:disable-line no-plus-plus
    this.login = userData.login;
    this.password = userData.password;
  }
}
