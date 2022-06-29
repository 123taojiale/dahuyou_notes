// 下边的代码存在很多问题，但是 js 没法提前将这些问题给识别出来

function getUserName(){
  if (Math.random() < 0.5) {
    return "da hu you";
  }
  return 404;
}

function parseUserName(myname){
  return myname.split(" ")
    .filter(it => it)
    // toUpperCase 写错
    // substr 写错
    .map(it => it[0].touppercase() + it.subStr(1))
    .join(" ");
}

// myname 写错
let mynema = getUserName();
parseUsername(myname); // 获取解析后的结果