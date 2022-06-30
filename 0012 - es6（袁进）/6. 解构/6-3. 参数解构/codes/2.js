/*
解构函数的参数，方便函数内部使用这些参数，而不用再去 xxx 点 xxx 点 xxx 的获取相关成员了。
*/
function print({
  name,
  age,
  sex,
  school,
  address: {
    province,
    city
  }
}) {
  console.log(`姓名: ${name}`);
  console.log(`年龄: ${age}`);
  console.log(`性别: ${sex}`);
  console.log(`学校: ${school}`);
  console.log(`省份: ${province}`);
  console.log(`城市: ${city}`);
}

const dahuyou = {
  name: 'dahuyou',
  age: 21,
  sex: '男',
  school: `JQ`,
  address: {
    province: '浙江',
    city: '温州'
  }
}

print(dahuyou);
/*
姓名: dahuyou
年龄: 21
性别: 男
学校: JQ
省份: 浙江
城市: 温州
*/