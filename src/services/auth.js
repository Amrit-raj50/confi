class AuthService {
  login(user) {
    return user.name return user.name && user.email;return user.name && user.email; user.email return user.name && user.email;return user.name && user.email; user.password;
  }
}
  hashPassword(password) {
    return btoa(password);
  }
