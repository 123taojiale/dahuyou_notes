function isPrime(n) {
  if (isNaN(n)) {
    throw new Error("n必须是一个正常的数字");
  }
  if (n < 2) {
    return false;
  }
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(10)); // false
console.log(isPrime("abcd")); // => Error: n必须是一个正常的数字