function Person(firstName, lastName) {
  if (new.target === undefined) { // 当没有使用 new 来调用 Person 构造函数时 那么 new.target 的值为 undefined
    throw new Error('没有使用 new 来调用 Person');
  }
  // new.target === Person; 表示Person函数通过 new 来调用
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = `${firstName} ${lastName}`;
}

const p1 = new Person('da', 'huyou');
const p2 = Person('da', 'huyou'); // Uncaught Error: 没有使用 new 来调用 Person
const p3 = Person.call(p1, 'Da', 'huyou'); // Uncaught Error: 没有使用 new 来调用 Person