// 字符串是指一长串文本（可能是0个文本,也可能是多个文本）
// 用下面3个符号包裹字符串
// 1. 单引号 '
// 2. 双引号 "
// 3. 模板字符串 `
// [特殊字符]转义符（\）可用来表示特殊字符
console.log('hello \'world\'');
console.log("hello \"world\"");
console.log("hello \\");
console.log("hello \nworld"); //\n表示换行符
console.log("\t12\t34\n\ta\tb"); //\t表示制表符
console.log(`
'hello'
\`
"world"`);