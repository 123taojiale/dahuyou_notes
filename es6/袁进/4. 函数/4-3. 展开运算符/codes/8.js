/*
在我们清楚知道被克隆的对象的结构的前提下，我们可以采用下面这种操作来实现深度克隆。
*/
const obj1 = {
  name: '成哥',
  age: 18,
  love: ['邓嫂', '成嫂1', '成嫂2'], // love 是一个引用类型
  address: { // address 也是一个引用类型
    country: '中国',
    province: '黑龙江',
    city: '哈尔滨'
  }
}

const obj2 = {
  ...obj1,
  address: { // 引用类型 进一步展开
    ...obj1.address
  },
  love: [...obj1.love, '成嫂3', '成嫂4'] // 引用类型进一步展开 并且 还可以新增一些成员
}

obj1; 
obj2; 
obj1.address === obj2.address; 
obj1.love === obj2.love; 
/* output
{
  name: '成哥',
  age: 18,
  love: [ '邓嫂', '成嫂1', '成嫂2' ],
  address: { country: '中国', province: '黑龙江', city: '哈尔滨' }
}
{
  name: '成哥',
  age: 18,
  love: [ '邓嫂', '成嫂1', '成嫂2', '成嫂3', '成嫂4' ],
  address: { country: '中国', province: '黑龙江', city: '哈尔滨' }
}
false
false
*/