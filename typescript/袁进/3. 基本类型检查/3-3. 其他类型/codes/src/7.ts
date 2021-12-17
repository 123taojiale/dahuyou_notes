// 对象的字面量约束（注意语法）
let user: {
  name: string;
  age: number;
};

user = {
  name: "dahuyou",
  age: 22,
};
/*
对象也可以有字面量约束。
上述代码约束 user 对象需要具有两个属性：name，age；
并且：name 必须是 string 类型，age 必须是 number 类型；
*/