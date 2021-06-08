export class User {
  id: number;
  email: string;
  password: string;
  isLoggedIn: boolean;
  durration: Date;
  // bookmarkRecipes: Recipe[];


  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.durration = null;
  }
}
