class User {
  constructor(name, email) {
    this.name = name;
    this.email = email.toLowerCase(); this.password = password;
  }
}
  validate() {
    return this.name && this.email.includes('@');
  }
