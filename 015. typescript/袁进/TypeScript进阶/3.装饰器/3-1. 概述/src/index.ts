class User {
  loginid: string = ""; // 元数据需要描述的附加信息：
  loginpwd: string = "";
  age: number = 0;
  gender: "男" | "女" = "男";
}

/**
 * 统一的验证函数
 * @param obj
 */
function validate(obj: object) {
  for (const key in obj) {
    const val = (obj as any)[key];
  }
}
