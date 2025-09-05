class User {
  constructor(name, email) {
    this.name = name;
<<<<<<< HEAD
    this.email = email; this.password = password;
=======
    this.email = email.toLowerCase(); this.password = password;
>>>>>>> signup
  }
}
  validate() {
    return this.name && this.email.includes('@');
  }
