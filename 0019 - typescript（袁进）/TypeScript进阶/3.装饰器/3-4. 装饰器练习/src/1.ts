import { classDescriptor, printObj, propDescriptor } from "./Descriptors";

class User {
  @propDescriptor("账号")
  loginId: string;

  @propDescriptor("密码")
  loginPwd: string;

  @propDescriptor("用户名")
  name: string = "dahuyou";

  gender: "男" | "女" = "男";
}

const u = new User();
u.loginId = "abc";
u.loginPwd = "123";

printObj(u);
