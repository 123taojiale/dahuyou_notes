function take<T = string>(arr: T[], n: number): T[] {
  if (n >= arr.length) return arr;
  const newArr: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    newArr.push(item);
  }
  return newArr;
}