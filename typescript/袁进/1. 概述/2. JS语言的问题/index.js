function getUserName(){
  if (Math.random() < 0.5) {
    return "da hu you";
  }
  return 404;
}

function parseUserName(myname){
  return myname.split(" ")
    .filter(it => it)
    .map(it => it[0].touppercase() + it.subStr(1))
    .join(" ");
}

let mynema = getUserName();
parseUsername(myname); // 获取解析后的结果