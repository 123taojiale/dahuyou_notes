type Gender = "male" | "female";
type User = {
  name: string;
  age: number;
  gender: Gender;
};

let u: User;

function getUsers(g: Gender): User[] {
  return [];
}
/*
使用 type 来定义类型别名，直接看代码，很好理解。
*/
