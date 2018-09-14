export class Signup {
  name: string;
  email: string;
  password: string;
  verifypassword: string;
  constructor(
    name: string,
    email: string,
    password: string,
    verifypassword: string
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.verifypassword = verifypassword;
  }
}
