class User {
  constructor(loginId, loginPwd, name, age) {
    this.loginId = loginId;
    this.loginPwd = loginPwd;
    this.name = name;
    this.age = age;
    User.users.push(this);
  }
  static login(loginId, loginPwd) {
    return this.users.find((u) => u.loginId === loginId && u.loginPwd === loginPwd);
  }
}
User.users = [];
const u1 = new User("admin1", "123123", "dahuyou", 23);
const u2 = new User("admin2", "123123", "dahuyou", 23);
const u3 = new User("admin3", "123123", "dahuyou", 23);
console.log(User.login("admin1", "123123"));
console.log(User.login("admin2", "123123"));
console.log(User.login("admin3", "123123"));
console.log(User.login("admin4", "123123"));