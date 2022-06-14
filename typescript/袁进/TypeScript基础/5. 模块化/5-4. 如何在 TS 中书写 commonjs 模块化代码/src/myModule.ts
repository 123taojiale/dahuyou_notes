/* 2
推荐采用这种写法，因为可以提供智能提示
即便写起来有点不像是 commonjs 规范的写法
*/
export = {
  name: "dahuyou",
  sum(a: number, b: number) {
    return a + b;
  }
}

/* 1
这种写法不推荐，因为没法提供智能提示
*/
// module.exports = {
//   name: "dahuyou",
//   sum(a: number, b: number) {
//     return a + b;
//   }
// }
