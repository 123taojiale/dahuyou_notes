import { Dictionary } from "./dictionary";

const dic = new Dictionary<string, number>();

// 测试 set、forEach
dic.set("a", 1);
dic.set("b", 2);
dic.set("c", 3);
dic.set("d", 4);

dic.forEach((k, v) => {
  console.log(k, v);
});

// 测试 delete、has、size
console.log("是否含有 d：", dic.has("d"));
console.log("还有多少个键值对：", dic.size);
dic.delete("d");
console.log("是否含有 d：", dic.has("d"));
console.log("还有多少个键值对：", dic.size);

dic.forEach((k, v) => {
  console.log(k, v);
});

// 测试 get
console.log("给 a 重新赋值之前：", dic.get("a"));
dic.set("a", 10);
console.log("给 a 重新赋值之前：", dic.get("a"));

dic.forEach((k, v) => {
  console.log(k, v);
});