/**
 * 判断传入的数字是否是素数。是，返回 true；否，返回 false。
 * @param {Number} n 数字
 */
export default function isPrime(n) {
    if (n < 2) { // 2 是最小的素数
        return false;
    }
    for (let i = 2; i < n - 1; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}