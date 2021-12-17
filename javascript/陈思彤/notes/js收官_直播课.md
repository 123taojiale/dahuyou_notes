# 1. [直播] 深入数组拓展应用一

[toc]

## 1. 字符串反转 '123abc' -> 'cba321'

- [x] 方式1

`字符串.split('').reverse().join('')`

```js
let str = '123abc';
console.log(str.split('').reverse().join('')); // cba123
```

- [x] 方式2

从结尾开始循环

```js
let str = '123abc',
    len = str.length,
    newStr = '';
for (let i = len - 1; i >= 0; i--) {
    newStr += str[i];
}
console.log(newStr); // cba321
```

## 2. 在有序数组里找出指定的值, 返回该值在数组中的所引 (二分查找)

- [x] 方式1

循环 对不是有序的数组也适用

```js
var arr = [1, 3, 5, 7, 9, 10, 11, 12, 14, 15];

/**
 * 从指定数组中查找对应的值 并返回该值的索引
 * @param {Array} arr 被查找的数组
 * @param {Number} val 查找的值
 */
function getIndex(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            return i;
        }
    }
}
console.log(getIndex(arr, 5)); // 2
```

- [x] 方式2

[Array.prototype.findIndex() mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) 对不是有序的数组也适用

```js
var arr = [1, 3, 5, 7, 9, 10, 11, 12, 14, 15];

/**
 * 从指定数组中查找对应的值 并返回该值的索引
 * @param {Array} arr 被查找的数组
 * @param {Number} val 查找的值
 */
function getIndex(arr, val) {
    return arr.findIndex(function (value) {
        return value == val; // 这个条件成立，才会返回value在arr里的索引值
    });
}

console.log(getIndex(arr, 5)); // 2
```

**notes**

1. `findIndex()` 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
2. `findIndex()` 是 ES6 中的方法;
3. 利用这种方式来获取的话, 压根就没必要封装函数..


- [x] **方式3**

`二分查找` 要求数组必须是有序的才行

```js
var arr = [1, 3, 5, 7, 9, 10, 11, 12, 14, 15];

/**
 * 从指定数组中查找对应的值 并返回该值的索引
 * 返回 -1 表示没找到指定的值
 * @param {Array} arr 被查找的数组
 * @param {Number} val 查找的值
 */
function getIndex(arr, val) {
    let start = 0,
        end = arr.length - 1;
    while (start <= end) {
        let middle = parseInt((start + end) / 2);

        if (val == arr[middle]) {
            return middle;
        } else if (val < arr[middle]) {
            end = middle - 1;
        } else if (val > arr[middle]) {
            start = middle + 1;
        }
    }
    return -1;
}

console.log(getIndex(arr, 5)); //2
```

**notes**

1. `parseInt(4.5);` // 4
2. 查找继续进行的条件是: `start <= end`

**二分查找图解**

![二分查找图解](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210214124137.png)

## 3. 判断数组是否为对称数组, 对称数组形式如: [a, b, c, b, a] 、 [a, b, c, c, b, a]

```js
// 李经理、王中王、手拉手，面对面，上海自来水来自海上、嘴对嘴、撸啊撸
var arr1 = ['a', 'b', 'c', 'c', 'b', 'a'];
var arr2 = ['a', 'b', 'c', 'd', 'c', 'b', 'a'];
var arr3 = ['a', 'b', 'c', 'a', 'b', 'c'];
```

- [x] 方式1

两个for循环

```js
/**
 * 利用两个for循环 判断是否为对称数组
 * 是则返回 true 否则返回 false
 * @param {Array} arr 被判断的数组
 */
function symmetry(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] != arr[i]) {
            return false;
        }
    }
    return true;
}
console.log(symmetry(arr1), symmetry(arr2), symmetry(arr3)); // true true false
```

- [x] **方式2**

```js
/**
 * 第n个与倒数第n个对比 判断是否为对称数组
 * 一旦有一次不等 则返回 false 全等则返回 true
 * @param {Array} arr 被判断的数组
 */
function symmetry(arr) {
    let middle = parseInt(arr.length / 2);
    for (var i = 0; i < middle; i++) {
        // console.log(arr[i], arr[arr.length - 1 - i]);
        if (arr[i] != arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(symmetry(arr1), symmetry(arr2), symmetry(arr3)); // true true false
```

# 2. [直播] 深入数组拓展应用二

## 4. 查询子串首次出现的位置，如：原串abccbaxzabc 子串为axz 结果为5

```js
let str = 'abccbaxzabc', // 原串
    subStr = 'axz'; // 子串
```

- [x] 方式1

一个一个字符来比较

```js
function getIndex(str, sub) {
    for (var i = 0; i <= str.length - sub.length; i++) {
        for (var j = 0; j < sub.length; j++) {
            if (sub[j] != str[j + i]) {
                break;
            }
            if (j == sub.length - 1) {
                return i;
            }
        }
    }
    return -1;
}
```

**notes**

1. `str.indexOf(subStr)` // 5
   其实直接使用 `indexOf` 就可以完事儿的, 但是题目若要求我们封装一个函数来实现这样的功能, 那么还得知道如何不使用 `indexOf` , 而是封装一个功能与 `indexOf` 类似的函数;
2. 一共两层 for 循环
   1. 外层 for 循环, 遍历的是原串;
   2. 内层 for 循环, 遍历的是子串;
3. `i <= str.length - sub.length` 外层循环若遍历到这个条件不成立, 就表示原串的剩余长度 < 子串的长度, 后续没有再进行查找的必要了;
4. `sub[j] != str[j + i]`
   1. `sub[j]` 子串当前索引数据
   2. `str[j + i]` 原串当前索引数据
5. `j == sub.length - 1` 表示遍历到了子串的最后一项, 若遍历到子串的结尾了, 依旧没有跳出子串的循环, 那么就表示已经找到了满足条件的原串位置;


- [x] 方式2

截取字符串来比较

```js
function getIndex(str, sub) {
    var start = 0;
    var end = str.length - sub.length;
    while (start <= end) {
        if (str.slice(start, sub.length + start) === sub) {
            return start;
        }
        start++;
    }
    return -1;
}
```

**notes**

1. `str.slice(start, sub.length + start)`
   1. 截取到的字符串的范围是: `str[start] ~ str[sub.length + start - 1]`

## 5. 计算数组中，最大连续增长子序列的长度，如：[1,2,3,4,1,2,3,4,5,1,2,3] 结果为5

- [x] code

```js
function getMaxLength(arr) {
    let addNum = 0,
        len = 1; // 最大连续增长子序列的长度
    for (var i = 0; i <= arr.length; i++) {
        if (i === 0) { // arr[-1] === udnefined
            continue;
        } else if (arr[i] > arr[i - 1]) { // 连续增序列的判别条件
            addNum++;
        } else { // 连续增序列列结束
            len = addNum > len ? addNum : len;
            addNum = 1;
        }
    }
    return len;
}

let arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 1, 2, 3];

console.log(getMaxLength(arr)); // 5
```

**notes**

1. `addNum = 1` 判断下一个连续增序列的长度时, 默认初始值就是 1

# 3. [直播] JavaScript技术提升

> 开班测试题讲解 笔记已整理至对应的开班测试题中

# 4. [直播] 循环迭代项目 js版1

# 5. [直播] 循环迭代项目 js版2

# 6. [直播] 循环迭代项目 js版3


