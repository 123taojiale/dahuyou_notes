function take<T = string>(arr: any[], n: number): T[] {
  if (n >= arr.length) return arr;
  const newArr: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    newArr.push(item);
  }
  return newArr;
}

const result1 = take([], 2);
const result2 = take([1, 2, 3, 4, 5], 2);