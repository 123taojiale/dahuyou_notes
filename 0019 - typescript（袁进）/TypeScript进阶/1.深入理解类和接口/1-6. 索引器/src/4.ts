export {};

class MyArray {
  [index: number]: string
  0 = "000";
  1 = "111";
  2 = "222";
}

const arr = new MyArray();
arr[0] = "123";
arr[4] = "444";
console.log(arr);
// => MyArray { '0': '123', '1': '111', '2': '222', '4': '444' }