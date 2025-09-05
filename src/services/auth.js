class AuthService {
  login(user) {
    return user.name && user.email;
  }
}
