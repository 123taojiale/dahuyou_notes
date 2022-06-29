function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = `${firstName} ${lastName}`;
}

// 正确的调用方式：
const p1 = new Person('da', 'huyou');
// 错误的调用方式：
const p2 = Person('da', 'huyou');
/*
第二种错误的调用方式，相当于给 window 对象身上信新增了三个属性：firstName、lastName、fullName
*/