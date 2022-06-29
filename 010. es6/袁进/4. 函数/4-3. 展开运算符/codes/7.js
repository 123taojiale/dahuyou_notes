/*
浅度克隆
*/
const obj1 = {
  name: '成哥',
  age: 18,
  love: '邓嫂',
  address: {
    country: '中国',
    province: '黑龙江',
    city: '哈尔滨'
  }
}

const obj2 = {
  ...obj1
}
obj1;
obj2;
obj1.address === obj2.address;
/* output
{
  name: '成哥',
  age: 18,
  love: '邓嫂',
  address: { country: '中国', province: '黑龙江', city: '哈尔滨' }
}
{
  name: '成哥',
  age: 18,
  love: '邓嫂',
  address: { country: '中国', province: '黑龙江', city: '哈尔滨' }
}
true
*/