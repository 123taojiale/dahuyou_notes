import { descriptor, printObj } from "./Descriptors";

@descriptor("用户")
class User {
  @descriptor("账号")
  loginId: string;

  @descriptor("密码")
  loginPwd: string;

  @descriptor("用户名")
  name: string = "dahuyou";

  gender: "男" | "女" = "男";
}

const u = new User();
u.loginId = "abc";
u.loginPwd = "123";

printObj(u);