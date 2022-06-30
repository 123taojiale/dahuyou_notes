// 展开运算符 + 解构 ==> 用于收集剩余展开成员
const dahuyou = {
  school: `JQ`,
  age: 21,
  sex: '男',
  address: {
    province: '浙江',
    city: '温州'
  }
}

const {
  age,
  sex,
  ...obj // 除了 age 和 sex 属性以外的其他属性 收集起来放到 变量obj 中
} = dahuyou;

age; // => 21
sex; // => 男
obj; // => { school: 'JQ', address: { province: '浙江', city: '温州' } }
dahuyou; // => { school: 'JQ', age: 21, sex: '男', address: { province: '浙江', city: '温州' } }
obj.address === dahuyou.address; // => true
/*
用于收集剩余参数的变量 obj，必须位于最后。
*/