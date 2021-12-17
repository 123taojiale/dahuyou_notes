/* typeof 得到数据的类型 */
console.log(typeof 12); // 'number'
console.log(typeof "12"); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object'
console.log(typeof {
  name: "姬成",
  nickName: "成哥",
  age: 108,
  gender: true, //true表示男，false表示女
  address: {
    country: "中国",
    province: "黑龙江",
    city: "哈尔滨",
    detail: "那嘎达二街11号"
  },
  girlFriend: undefined
}); // 'object'