function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
  const newArr: (T | K)[] = [];
  if (arr1.length !== arr2.length) throw new Error("两个数组长度不等");
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }
  return newArr;
}

const result = mixinArray([1, 2, 3], ["a", "b", "c"]);
console.log(result); // => [ 1, 'a', 2, 'b', 3, 'c' ]