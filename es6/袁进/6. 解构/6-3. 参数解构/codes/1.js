function print(user) {
  console.log(`姓名: ${user.name}`);
  console.log(`年龄: ${user.age}`);
  console.log(`性别: ${user.sex}`);
  console.log(`学校: ${user.school}`);
  console.log(`省份: ${user.address.province}`);
  console.log(`城市: ${user.address.city}`);
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