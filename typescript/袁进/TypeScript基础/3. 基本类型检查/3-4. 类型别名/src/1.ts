// 用户对象的类型约束
let u: {
  name: string;
  age: number;
  gender: "male" | "female";
};

// 获取用户对象
function getUsers(): {
  name: string;
  age: number;
  gender: "male" | "female";
}[] {
  return [];
}
/*
获取用户对象的方法，返回的是一个数组，数组的每一项都是一个 u。
使用上面这种写法，当然也可以实现效果，但是，这么写很不好，存在的主要问题有：
1. 读性差；
2. 不易维护；
   若用户对象的类型约束（对象结构）发生了变化，那么需要改动的地方很多；
*/