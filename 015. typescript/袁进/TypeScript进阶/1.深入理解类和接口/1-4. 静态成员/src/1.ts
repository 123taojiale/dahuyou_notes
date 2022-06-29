export {};

class User {
  static users: User[] = []; // 存放所有已注册的用户实例

  constructor(
    public loginId: string,
    public loginPwd: string,
    public name: string,
    public age: number
  ) {
    // this -> 当前用户实例 -> new User()
    User.users.push(this);
  }

  static login(loginId: string, loginPwd: string): User | undefined {
    // this -> 构造器 -> User
    return this.users.find(
      (u) => u.loginId === loginId && u.loginPwd === loginPwd
    );
  }
}

const u1 = new User("admin1", "123123", "dahuyou", 23);
const u2 = new User("admin2", "123123", "dahuyou", 23);
const u3 = new User("admin3", "123123", "dahuyou", 23);

console.log(User.login("admin1", "123123")); // => User 实例
console.log(User.login("admin2", "123123")); // => User 实例
console.log(User.login("admin3", "123123")); // => User 实例
console.log(User.login("admin4", "123123")); // => undefined