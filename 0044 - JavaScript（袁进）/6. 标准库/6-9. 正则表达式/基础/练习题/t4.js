// 练习题3：首字母大写
// 测试字符串："hello js world"
// 预期结果："Hello Js World"

const s = "hello js world"

console.log(s.replace(new RegExp(/\b[a-z]/g), (match) => {
  return match.toUpperCase()
}));

// 扩展，如果需要将空白字符给去掉，该如何写呢？
// 期望结果：HelloJsWorld
console.log(s.replace(new RegExp(/\s?\b[a-z]/g), (match) => {
  return match.trim().toUpperCase()
}));