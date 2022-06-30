interface hasNameObj {
  name: string
}

// 将传入的对象的 name 属性的首字母大写
function nameToUpperCase<T extends hasNameObj>(user: T): T {
  const newName = user.name
    .split(" ")
    .map(it => it.substring(0, 1).toUpperCase() + it.substring(1))
    .join(" ");
  user.name = newName;
  return user;
}

const user = {
  name: "da hu you",
  age: 23,
  gender: "男",
};

const newUser = nameToUpperCase(user);

console.log(newUser.name); // Da Hu You
