export default 1;

interface User {
  id: string
  readonly name: string
  age: number
}

let u: User = {
  id: "123",
  name: "dahuyou",
  age: 23
}

u.id = "abc"; // 允许修改
// u.name = "xiaohuyou"; // 报错

console.log(u); // => { id: 'abc', name: 'dahuyou', age: 23 }