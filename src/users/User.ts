let id = 0;

export class User {
  public id: number = ++id;

  constructor(public login: string, public password: string) {}
}
