let id = 0;

export class User {
  public id: number = ++id;

  public constructor(public username: string, public password: string) {}

  public static NEW(model: { username: string; password: string }) {
    return new User(model.username, model.password);
  }
}
