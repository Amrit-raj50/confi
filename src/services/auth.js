class AuthService {
  login(user) {
    return user.validate();
  }
}
