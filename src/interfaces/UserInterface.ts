export type User = {
  name: string;
  surname: string;
  email: string;
};

export class UserClass implements User {
  name: string;
  surname: string;
  email: string;
  constructor() {
    this.name = "";
    this.surname = "";
    this.email = "";
  }
}
