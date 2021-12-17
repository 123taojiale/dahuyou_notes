# 1. 概述

`1. 概述 + 2. 块级绑定 + 3. 字符串和正则表达式 [课程规划与指导]`


| 知识点 | 难度 | 重要性 | 学习视频                  | 视频时长(min) | 学习次数 |
| ------ | ---- | ------ | ------------------------- | ------------- | -------- |
| es6    | 0    | 3      | 1. 概述                   | 17            | 2/1        |
| es6    | 1    | 2      | 1. 声明变量的问题         | 19            | 2/1        |
| es6    | 1    | 5      | 2. 使用let声明变量        | 26            | 2/1        |
| es6    | 1    | 5      | 3. 使用const声明常量      | 16            | 2/1        |
| es6    | 1.5  | 2      | 1. 更好的Unicode支持      | 23            | 2/1        |
| es6    | 1.5  | 3      | 2. 更多的字符串API        | 7             | 2/1        |
| es6    | 3.5  | 2      | 3. [扩展]正则中的粘连标记 | 5             | 2/1        |
| es6    | 2    | 5      | 4. 模板字符串             | 10            | 2/1        |
| es6    | 2    | 3      | 5. [扩展]模板字符串标记   | 24            | 2/1        |

| 学习时间 | 达成效果                                                                  | 老师建议                                                                |
| -------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 1天      | 能够熟练使用const和let声明变量，改变用var声明变量的习惯学会使用模板字符串 | 以后在开发中摒弃使用var，在拼接字符串时多使用模板字符串，逐渐的养成习惯 |

**1. ECMAScript、JavaScript、NodeJs，它们的区别是什么？**

ECMAScript：简称ES，是一个语言标准（循环、判断、变量、数组等数据类型）

JavaScript：运行在浏览器端的语言，该语言使用ES标准。 ES + web api = JavaScript

NodeJs：运行在服务器端的语言，该语言使用ES标准。 ES + node api = NodeJS


无论JavaScript，还是NodeJs，它们都是ES的超集（super set）

**2. ECMAScript有哪些关键的版本？**

ES3.0: 1999

ES5.0: 2009

ES6.0: 2015, 从该版本开始，不再使用数字作为编号，而使用年份

ES7.0: 2016

```
本节课程不仅仅介绍 ES6 当然 它是主要部分 除此之外还会介绍一些后面推出的新版本中常用的一些相关知识
```

**3. 为什么ES6如此重要？**

ES6解决JS无法开发大型应用的语言层面的问题。

**4. 如何应对兼容性问题？**

ES6 之后的课程会介绍如何解决

```
在该课程的学习过程中，不需要考虑兼容性的问题，后续会有其他课程讲解兼容性的问题如何解决。
```

**5. 学习本课程需要的前置知识有哪些？**

HTML+CSS、JavaScript（ES 5）

**6. 这套课程难不难？**

难度和《JavaScript基础》差不多

```
难度 和 成哥讲解的 JavaScript 那门公益课差不多
```

# 2. 块级绑定

**前言**

从现在开始，声明变量，优先使用 `const` 来声明，如果发现这个变量需要被重新赋值，那么再将该变量改为用 `let` 来声明，不再使用 `var` 来声明变量。

## 2.1 声明变量的问题

**使用var声明变量**

1. 允许重复的变量声明：导致数据被覆盖

2. 变量提升：怪异的数据访问、闭包问题

3. 全局变量挂载到全局对象：全局对象成员污染问题

> 在开发大型应用程序的时候 这几个问题都是很致命的

- [x] demo

`重复声明导致的问题`

```js{cmd='node'}
// 允许变量重复声明所导致的数据被覆盖的问题
var a = 1;

function print() {
    console.log(a);
}

var a = 2;

print(); // 2
```

- [x] demo

`变量提升导致的问题`

```js{cmd='node'}
// 变量提升 导致的怪异的数据访问
if (Math.random() < 0.5) {
    var a = 'abc';
    console.log(a);
} else {
    console.log(a);
}

console.log(a);

/*
正常的阅读代码：
    如果随机数小于 0.5 那么声明一个变量 a 并赋值为 'abc' 随后输出 a
    如果随机数不小于 0.5 那么直接输出 a
    输出 a
实际上：
    先在全局声明一个变量 a （变量提升）
    如果随机数小于 0.5 那么将全局的变量 a 赋值为 'abc' 随后输出 a
    如果随机数不小于 0.5 那么直接输出 a
    输出 a

如果在其他编程语言中，按照我们上面这样的写法在编写程序
那么后面的两条输出语句都是有问题的，因为变量 a 仅会在随机数小于
0.5 的时候被定义 否则压根就没有定义变量 a 所以直接使用它 应该是要报错的
*/
```

```
输出的结果 有可能是两个 undefined 也有可能是两个 abc
```

- [x] demo

`使用var关键字声明的变量 存在声明提升`

```js{cmd='node'}
// 等效程序
var a;
if (Math.random() < 0.5) {
    a = 'abc';
    console.log(a);
} else {
    console.log(a);
}

console.log(a);
```

- [x] demo

`变量提升导致的问题`

```html
<div class="btns"></div>
```

```js
var btns = document.querySelector('.btns');

for (var i = 1; i <= 10; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = '按钮' + i;
    btns.appendChild(btn);

    btn.onclick = function () {
        console.log(i);
    }
}
```

![20210410095737](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210410095737.png)

```
无论点击的是哪个按钮 输出的始终都是 11
因为循环结束后 i 的值已经变成了 11
而绑定在每个 btn 身上的 onclick 事件 打印的都是同一个 i
```

- [x] demo

```js
// 等效程序
var btns = document.querySelector('.btns');
var i;

for (i = 1; i <= 10; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = '按钮' + i;
    btns.appendChild(btn);

    btn.onclick = function () {
        console.log(i);
    }
}
```

- [x] demo

`使用立即执行函数解决变量声明提升的问题`

```js
// 在 ES6 之前 采取的解决措施 -> 立即执行函数
var btns = document.querySelector('.btns');

for (var i = 1; i <= 10; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = '按钮' + i;
    btns.appendChild(btn);

    (function (i) {
        btn.onclick = function () {
            console.log(i);
        }
    })(i);
}
```

## 2.2 使用let声明变量

**块级作用域**

```
ES6不仅引入let关键字用于解决变量声明的问题，同时引入了块级作用域的概念

块级作用域：
  代码执行时遇到花括号，会创建一个块级作用域，花括号结束，销毁块级作用域
```

**var 声明变量的问题**

1. 全局变量挂载到全局对象：全局对象成员污染问题

- [x] demo

`全局环境中 用let声明的变量不会挂载到全局对象`

```js
var a = '123';
console.log(window.a); // 123

let b = '456';
console.log(window.b); // undefined
```

2. 允许重复的变量声明：导致数据被覆盖

let声明的变量，不允许当前作用域范围内重复声明。在块级作用域中用let定义的变量，在作用域外不能访问。

- [x] demo

`let 不允许重复声明`

```js
let a;
let a; // Uncaught SyntaxError: Identifier 'a' has already been declared
// 未捕获的语法错误: 标识符 'a' 已经被声明过了
```

- [x] demo

`作用域外无法访问`

```js{cmd='node'}
if (1) {
    var a = 123;
}
console.log(a); // 123
```

```js
if (1) {
    let a = 123;
}
console.log(a); // Uncaught ReferenceError: a is not defined
// 未捕获的引用错误 变量a 没有定义
// PS: ReferenceError 即: 引用错误 就是在作用域中找不到它
```

3. 变量提升：怪异的数据访问、闭包问题

使用let不会有变量提升，因此，不能在定义let变量之前使用它。

- [x] demo

`let 声明的变量 声明之前无法访问`

```js{cmd='node'}
console.log(a); // undefined
var a = 123;
```

```js
console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
let a = 123;
// 未捕获的引用错误: 无法在变量a初始化之前访问它
```


**let 原理**

```
变量提升
  底层实现上，let声明的变量实际上也会有提升，但是，提升后会将其放入到“暂时性死区”，如果访问的变量位于暂时性死区，则会报错：“Cannot access 'a' before initialization”。当代码运行到该变量的声明语句时，会将其从暂时性死区中移除。

循环
  在循环中，用let声明的循环变量，会特殊处理，每次进入循环体，都会开启一个新的作用域，并且将循环变量绑定到该作用域（每次循环，使用的是一个全新的循环变量）
  在循环中使用let声明的循环变量，在循环结束后会销毁
```

## 2.3 使用const声明变量

**const 和 let 之间的异同**

const和let完全相同，仅在于用const声明的变量，必须在声明时赋值，而且不可以重新赋值。

**优先使用 const 其次 let 而不再使用 var**

实际上，在开发中，应该尽量使用const来声明变量，以保证变量的值不会随意篡改，原因如下：

1. 根据经验，开发中的很多变量，都是不会更改，也不应该更改的。
2. 后续的很多框架或者是第三方JS库，都要求数据不可变，使用常量可以一定程度上保证这一点。

**注意的细节**

1. 常量不可变，是指声明的常量的内存空间不可变，并不保证内存空间中的地址指向的其他空间不可变。`对象不可变 但对象身上的属性和方法可变`
2. 常量的命名
   1. 特殊的常量：该常量从字面意义上，一定是不可变的，比如圆周率、月地距地或其他一些绝不可能变化的配置。通常，**该常量的名称全部使用大写，多个单词之间用下划线分割**。
   2. 普通的常量：使用和之前一样的命名即可 【小驼峰】
3. 在for循环中，循环变量不可以使用常量。

- [x] demo

```js{cmd='node'}
const obj = {
    a: 1,
    b: 2
};

obj.a = 3; // 不会报错
console.log(obj); // {a: 3, b: 2}
```

- [x] demo

`不能给常量重新赋值`

```js
const obj = {
    a: 1,
    b: 2
};

obj = {
    a: 3,
    b: 2
}; // Uncaught TypeError: Assignment to constant variable.
```

- [x] demo

`特殊常量命名规范`

```js
const PI = 3.1415926535;
const MOON_EARTH_DISTANCE = 384400000;
```

# 3. 字符串和正则表达式

**基本操作**

- `获取一个伪数组中 除了 第一个成员的后续所有成员`

```js
Array.prototype.slice.apply(arguments).slice(1);
[].slice.apply(arguments).slice(1);
Array.from(arguments).slice(1);
```

- `[正则] 替换一个字符串中的特殊字符 < 和 >`

```js
str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
```

| CN   | EN      |
| ---- | ------- |
| 包括 | include |
| 重复 | repeat  |

## 3.1 更好的Unicode支持

**前言**

码元 Code Unit 和 码点 Code Point 这两个概念很抽象，想要掌握的话，感觉上很难；对于这节课程而言，我认为需要掌握的程度就是：如果在开发中遇到下面这样类似的问题，知道应该如何解决即可。

主要讨论的问题其实就一个，那就是有些仅包含一个字符的字符串，我们通过length属性获取到它的长度，有些情况下不是1。而它仅包含一个字符，我们希望读取到的值是1，应该怎么实现。

```
这一节课介绍的知识点 主要是针对的是后续新增的一些汉字的所导致的问题
知识点很偏...
    1. 为什么有些汉字我们通过 length 属性获取其长度 获取到的是 2
       console.log('𠮷'.length); // 2
       console.log('吉'.length); // 1
    2. 为什么通过正则匹配任意一个字符 有时候却匹配不到一个汉字
       console.log(/^.$/.test('𠮷')); // false
       console.log(/^.{2}$/.test('𠮷')); // true
    3. 若遇到上述这样的问题 而 我们想要获取的是字符的个数 那么该如何处理?
       先转化为数组 再读获取数组的长度 length 即可
       Array.from('𠮷').length; // 1
```

```js{cmd='node'}
console.log('𠮷'.length); // 2
console.log('吉'.length); // 1
console.log(/^.$/.test('𠮷')); // false
console.log(/^.{2}$/.test('𠮷')); // true
console.log(Array.from('𠮷').length); // 1
```

**参考链接**

- [Unicode与JavaScript详解 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2014/12/unicode.html)
- [字符编码笔记：ASCII，Unicode 和 UTF-8 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)
- [Code Unit 和 Code Point 初步理解 csdn](https://blog.csdn.net/game41/article/details/6656754)

**知识点**

早期，由于存储空间宝贵，Unicode使用16位二进制来存储文字。我们将一个16位的二进制编码叫做一个码元（Code Unit）。

后来，由于技术的发展，Unicode对文字编码进行了扩展，将某些文字扩展到了32位（占用两个码元），并且，将某些文字对应的二进制数字叫做码点（Code Point）。

ES6为了解决这个困扰，为字符串提供了方法：`codePointAt`，根据字符串码元的位置得到其码点。

同时，ES6为正则表达式添加了一个flag: `u`，如果添加了该配置，则匹配时，使用码点匹配

> JavaScript 中本没有区分 字符 和 字符串 下面笔记中所说的 字符 无非就是仅含一个符号的 字符串 罢了

```
码元(Code Unit) 和 码点(Code Point) 之间的关系
    一个码点 可能 对应一个码元
    一个码点 也可能 对应两个码元 【eg: 对于一些新出现的比较生僻的汉字而言】
JavaScript 默认情况下 始终认为 一个码点 对应的是 一个码元
    1. 当我们通过 JavaScript 的字符串的 length 属性获取它的长度时 是根据 码元 的个数来取的
    2. 当我们使用正则表达式来匹配时 也是根据 字符串的码元的个数来匹配的

String.Prototype.charCodeAt(0); // 读取的是某个字符的第一个码元值
String.Prototype.charCodeAt(1); // 读取的是某个字符的第二个码元值
String.Prototype.codePointAt(0); // 读取的是某个字符的第一个码点值 -> 若这个字符是由两个码元组成 那么获取到的就是这两个码元的值之和 若这个字符仅有一个码元组成 那么获取到的就是第一个码元的值
String.Prototype.codePointAt(1); // 读取的是某个字符的第二个码点值
```

```
如果 char 是 32位 的 即 一个码点 对应 俩码元
那么 char.codePointAt(0) 一定大于 0xffff 因为它是 0x***** 后面有5位
```

- [x] demo

[𠮷 新华字典](https://zidian.911cha.com/zi20bb7.html)

[吉 新华字典](https://zidian.911cha.com/zi5409.html)

`𠮷 32位 1个码点 2个码元(\ud842\udfb7)`

```js
'𠮷'.charCodeAt(0); // 55362
'𠮷'.charCodeAt(1); // 55271
'𠮷'.charCodeAt(0).toString(16); // d842
'𠮷'.charCodeAt(1).toString(16); // dfb7

'𠮷'.codePointAt(0); // 134071
'𠮷'.codePointAt(1); // 57271 (这个数字很奇怪 不用管)
'𠮷'.codePointAt(0).toString(16); // 20bb7
'𠮷'.codePointAt(0) > 0xffff; // true

'𠮷'.length; // 2
/^.$/.test('𠮷'); // false
/^..$/.test('𠮷'); // true
/^.{2}$/.test('𠮷'); // true
/^.$/u.test('𠮷'); // true

// 验证 '𠮷'.codePointAt(0) 由 '𠮷'.charCodeAt(0) 和 '𠮷'.charCodeAt(1) 组成
'\u{20bb7}'.normalize() === '\ud842\udfb7'.normalize(); // true
```

`吉 16位 1个码点 1个码元`

```js
'吉'.charCodeAt(0); // 21513
'吉'.charCodeAt(0).toString(16); // 5409
'吉'.charCodeAt(0) > 0xffff; // false

'吉'.codePointAt(0); // 21513
'吉'.codePointAt(0).toString(16); // 5409
'吉'.codePointAt(0) > 0xffff; // false

'吉'.length; // 1
/^.$/.test('吉'); // true
/^.$/u.test('吉'); // true
```

```
1. length 和 正则 默认看的是码元
2. 给正则添加上 u 则按照码点来匹配
```

- [x] demo

`依据码点来获取字符串的长度 (即: 我们肉眼看见的符号的数量)`

```js
/**
 * 判断字符是是32位的还是16位的
 * 32位 返回 true
 * 16位 返回 false
 * @param {String} cahr 字符
 * @param {Number} i 第 i 的码元
 */
function is32bit(char, i) {
    // 若码点大于 16 位二进制的最大值 那么它就是 32 位的
    return char.codePointAt(i) > 0xffff;
}

/**
 * 获取一个字符串的码点的真实长度
 * @param {String} str 字符串
 */
function getLengthOfCodePoint(str) {
    let len = 0;
    for (let i = 0; i < str.length; i++) {
        // i 在索引码元
        if (is32bit(str, i)) {
            // 当前字符在 i 这个位置 占了两个 码元
            i++;
        }
        len++;
    }
    return len;
}

console.log(getLengthOfCodePoint('123' + '𠮷' + '456')); // 7
```

```
解决的问题:
    防止有的特殊字符，默认占两个码元，若使用字符串的 length 属性来获取，会导致获取到的值比实际值偏大的问题。
比如：('123' + '𠮷' + '456').length; // 8
```

- [x] demo

`更巧妙的解决方案`

```js
// 与 getLengthOfCodePoint 等效
const str = '𠮷𠮷𠮷𠮷𠮷 吉吉吉吉吉'; // 前面5个字是'𠮷' 后面5个字是'吉' 中间夹个空格

console.log(str.length); // 16
console.log(Array.from(str)); // (11) ["𠮷", "𠮷", "𠮷", "𠮷", "𠮷", " ", "吉", "吉", "吉", "吉", "吉"]
console.log(Array.from(str).length); // 11
```

## 3.2 更多的字符串API

以下均为字符串的实例（原型）方法 (即: `String.prototype.xxx`)

- [includes](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

判断字符串中是否包含指定的子字符串

- [x] demo

```js{cmd='node'}
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`); // "The word "fox" is in the sentence"
```

- [startsWith](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)

判断字符串中是否以指定的字符串开始

- [x] demo

```js{cmd='node'}
console.log('Saturday night plans'.startsWith('Sat')); // true
console.log('Saturday night plans'.startsWith('Sat', 3)); // false
console.log('Saturday night plans'.startsWith('urday', 3)); // true 从第二个参数开始匹配子串
```

- [endsWith](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

判断字符串中是否以指定的字符串结尾

- [x] demo

```js{cmd='node'}
console.log('Cats are the best!'.length); // 18
console.log('Cats are the best!'.endsWith('best', 17)); // true 从第二个参数开始往前匹配子串

console.log('dahuyou'.endsWith('you')); // true
console.log('dahuyou'.endsWith('you', 7)); // true 第二个参数的默认值是字符串的长度

console.log('dahuyou!'.endsWith('you')); // false
```

- [repeat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

将字符串重复指定的次数，然后返回一个新字符串。

- [x] demo

```js{cmd='node'}
console.log('dahuyou'.repeat(2)); // "dahuyoudahuyou"
```

## 3.3 [扩展]正则中的粘贴标记

标记名：y

含义：匹配时，完全按照正则对象中的lastIndex位置开始匹配，并且匹配的位置必须在lastIndex位置。

- [x] demo

```js{cmd='node'}
const str = 'Hello World!!!';
const reg1 = /World/;
const reg2 = /World/y;

console.log(reg1.lastIndex); // 0
console.log(reg1.test(str)); // true
console.log(reg2.lastIndex); // 0
console.log(reg2.test(str)); // false

reg2.lastIndex = 6;
console.log(reg2.test(str)); // true
```

```
[注] 在使用 RegExp.prototype.test() 来测试的时候 若在开启了全局匹配模式的情况下 连续调用某个正则对象身上的test方法 会导致 lastIndex 发生变化
```

## 3.4 模板字符串

ES6之前处理字符串繁琐的两个方面：

1. 多行字符串
2. 字符串拼接


在ES6中，提供了模板字符串的书写，可以非常方便的换行和拼接，要做的，仅仅是将字符串的开始或结尾改为 ` 符号

如果要在字符串中拼接js表达式，只需要在模板字符串中使用```${JS表达式}```

- [x] demo

`在 ES6 之前 处理换行的几种常见写法`

```js{cmd='node'}
const str = '邓哥喜欢秋葵，\n邓哥也喜欢韭菜。'; // 输出的内容也会换行显示
console.log(str);
```

```js{cmd='node'}
const str = '邓哥喜欢秋葵，\
邓哥也喜欢韭菜。'; // 在换行处加上一个反斜杠 \ 仅仅是书写的时候 实现的换行效果 但是输出的时候 还是一行显示
console.log(str);
```

```js{cmd='node'}
const str = [
    '邓哥喜欢秋葵，',
    '邓哥也喜欢韭菜。'
].join('\n');
console.log(str);
```

- [x] demo

`使用 ES6 的模板字符串来实现换行效果`

```js{cmd='node'}
const str = `邓哥喜欢秋葵，
邓哥也喜欢韭菜。`;
console.log(str);
```

`模板字符串拼接变量`

```js{cmd='node'}
const love1 = '秋葵';
const love2 = '韭菜';
const str = `邓哥喜欢${love1}，
邓哥也喜欢${love2}。`;
console.log(str);
```

`在模板字符串中输出特殊字符`

```js{cmd='node'}
const str = `这是 JavaScript 的模板字符串
用符号 \` 来将要输出的字符串给包裹起来即可
变量拼接则使用 \${JS表达式} 的形式来实现`;
console.log(str);
```

**小结**

```
之后多使用 模板字符串
要求掌握: 在模板字符串中插入变量的语法
```

## 3.5 [扩展]模板字符串标记

在模板字符串书写之前，可以加上标记:

```js
标记名`模板字符串`
```

标记是一个函数，函数参数如下：

1. 第一个参数：被插值分割的字符串数组
2. 后续参数：所有的插值

```
第一个参数 是被插值分割的一个 数组 (真数组)
该数组的长度始终比 后续参数的个数之和 多一
```

- [x] demo

```js{cmd='node'}
const love1 = '秋葵';
const love2 = '韭菜';
const str = myTag `邓哥喜欢${love1}，邓哥也喜欢${love2}。`;
// 相当于执行 const str = myTag(["邓哥喜欢", "，邓哥也喜欢", "。"], '秋葵', '韭菜');
// str 接收的是 myTag 函数的返回值 【函数名可以自定义】

function myTag(parts, arg1, arg2) {
    console.log(parts); // 共有两个插值 必然将 parts 分为 3 份 【即便插值在首尾 也会被分为3份 不过第一份和最后一份是空字符串】
    console.log(arg1);
    console.log(arg2);
}
```

- [x] demo

`模拟模板字符串的效果`

```js{cmd='node'}
const love1 = '秋葵';
const love2 = '韭菜';
const str = myTag `邓哥喜欢${love1}，邓哥也喜欢${love2}。`;
// 相当于执行 const str = myTag(["邓哥喜欢", "，邓哥也喜欢", "。"], '秋葵', '韭菜');

/**
 * 模拟模板字符串的效果
 * @param {Array} parts 被插值分割的数组
 * @returns 经过模板字符串标记 处理后的返回值
 */
function myTag(parts) {
    const values = Array.from(arguments).slice(1);
    let str = '';
    for (let i = 0; i < values.length; i++) {
        str += parts[i] + values[i];
        if (i === values.length - 1) {
            str += parts[i + 1];
        }
    }
    return str;
}

console.log(str); // 邓哥喜欢秋葵，邓哥也喜欢韭菜。
```

```
[需求] 获取 由字符串的插值组成的数组 并保存到变量 values 中
这个需求实际上就是获取 (模板字符串标记)函数的 (第一个参数的)后续参数
实现方法有很多, 比如:
    一、 通过 伪数组arguments 结合 slice 来获取
      1. const values = Array.prototype.slice.apply(arguments).slice(1);
      2. const values = [].slice.apply(arguments).slice(1);
      3. const values = Array.from(arguments).slice(1);
      因为伪数组身上没有 slice 方法
      所以只能借用 Array.prototype 身上的 slice 方法来实现
      或者先将伪数组 arguments 转化为真数组 再直接调用 slice 方法来实现
    二、 通过展开运算符来实现 【这是 4. 函数 的知识点】
      function myTag(parts, ...args) {
          const values = args; // args 中存放的就是我们希望获取到的由插值组成的数组
          // 继续执行后续操作
      }
```

- [x] demo

`在每个插值前面加冒号`

```js{cmd='node'}
const love1 = '秋葵';
const love2 = '韭菜';
const str = myTag `邓哥喜欢${love1}，邓哥也喜欢${love2}。`;

function myTag(parts, ...args) {
    let str = '';
    for (let i = 0; i < args.length; i++) {
        str += parts[i] + "：" + args[i]; // 只要修改这一条语句即可
        if (i === args.length - 1) {
            str += parts[i + 1];
        }
    }
    return str;
}

console.log(str); // 邓哥喜欢：秋葵，邓哥也喜欢：韭菜。
```

**String.raw**

- [x] demo

```js{cmd='node'}
const str = String.raw `\n\t使用原生的 String.raw 标记 可以实现原样输出模板字符串中的转义符`;

console.log(str); // \n\t使用原生的 String.raw 标记 可以实现原样输出模板字符串中的转义符
```

```
String.raw 是一个原生的 模板字符串标记
它本质上也是一个函数 实现的原理和上面介绍的 myTag 是一样的。
```

- [x] demo

`使用字符串标记 防止用户恶意插值`

[../demos/1. 模板字符串标记 - 应用1](../demos/1.%20模板字符串标记%20-%20应用1/index.html)

![20210419105052](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210419105052.png)

![20210419105104](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210419105104.png)

```
想要保持输入格式不变 直接使用 pre 标签即可实现
但是若要检测用户是否恶意输入 并对用户的恶意输入进行处理
那么就可以使用 模板字符串标记 来实现
只要检测插值数组中 是否含有 符号 < 或 > 并替换为 &lt; 和 &gt; 即可
核心语句:
  args[i].replace(/</g, '&lt;').replace(/>/g, '&gt;');
```

**小结**

```
模板字符串标记 本质上就是一个函数
作用:
    处理模板字符串
    函数的返回值 作为表达式的值
参数:
    第一个参数是一个数组
        该数组由 被参数切割后的模板字符串 的子串组成
    后续参数是插值
```

# 4. 函数

| 知识点 | 难度 | 重要性 | 学习视频                    | 视频时长(min) | 学习次数 |
| ------ | ---- | ------ | --------------------------- | ------------- | -------- |
| es6    | 2    | 4      | 1. 参数默认值               | 18            | 2/1      |
| es6    | 2.5  | 4      | 2. 剩余参数                 | 12            | 2/1      |
| es6    | 2.5  | 4      | 3. 展开运算符               | 18            | 2/1      |
| es6    | 2    | 3      | 4. 剩余参数和展开运算符练习 | 23            | 2/1      |
| es6    | 2    | 3      | 5. 明确函数的双重用途       | 9             | 2/1      |
| es6    | 3    | 5      | 6. 箭头函数                 | 38            | 2/1      |

| 学习时间 | 达成效果                  | 老师建议                                                                                                          |
| -------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 0.5天    | 学会使用ES6新增的函数功能 | 剩余参数和展开运算符使用的都是`...`因此需要同学们注意它们的差异和使用场景：形参位置使用表示剩余参数，其他时候是展开 |

**基本操作**

- `获取一个数组 arr 中的最值`

```js
Math.max(...arr);
Math.min(...arr);
```

- `数组浅度克隆`

```js{cmd='node'}
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
const arr3 = arr1.slice();

console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log(arr1 === arr2);
console.log(arr1 === arr3);
```

- `对象浅度克隆`

```js{cmd='node'}
const user = {
    name: 'dahuyou',
    age: 21,
    address: {
        province: '浙江',
        city: '温州'
    },
    love: ['阅读', '旅游', '跑步']
}

const user1 = {
    ...user
};

console.log(user);
console.log(user1);
console.log(user === user1);
console.log(user.address === user1.address);
```

- `对象混合`

```js{cmd='node'}
function ajax(opt) {
    const defaultOpt = {
        isAsync: true,
        url: '',
        method: 'POST',
    };

    // opt = Object.assign({}, defaultOpt, opt);
    opt = {
        ...defaultOpt,
        ...opt
    }

    console.log(opt);
}

ajax({
    url: './data/students.json',
    method: 'GET'
});
```

- `封装 clone(target, isDeep) 函数`

```js{cmd='node'}
function clone(target, isDeep) {
    // 数组
    if (Array.isArray(target)) {
        if (isDeep) {
            const newArr = [];
            target.forEach(item => {
                newArr.push(clone(item, isDeep));
            })
            return newArr;
        } else {
            return [...target];
        }
    }
    // 对象
    if (typeof target === 'object') {
        if (isDeep) {
            const newObj = {};
            for (const prop in target) {
                newObj[prop] = clone(target[prop], isDeep);
            }
            return newObj;
        } else {
            return {
                ...target
            };
        }
    }
    // 基本数据类型
    return target;
}


const user = {
    name: 'dahuyou',
    age: 21,
    address: {
        province: '浙江',
        city: '温州'
    },
    hobbies: ['阅读', '旅游', '跑步']
}

const user1 = clone(user);
const user2 = clone(user, true);

console.log(user);
console.log(user1);
console.log(user2);
console.log('----------');

console.log(user === user1);
console.log(user === user2);
console.log('----------');

console.log(user.address === user1.address);
console.log(user.hobbies === user1.hobbies);
console.log(user.address === user2.address);
console.log(user.hobbies === user2.hobbies);
```

- `封装 curry`

```js{cmd='node'}
function curry(func, ...args) {
    return function (...subArgs) {
        const allArgs = [...args, ...subArgs];
        if (allArgs.length >= func.length) {
            return func(...allArgs);
        } else {
            return curry(func, ...allArgs);
        }
    }
}

function sum(a, b, c) {
    console.log(a + b + c);
}

const s = curry(sum);
s(1)(2, 3);
s(4, 5)(6);
```

**Emmet语法**

[简书 Emmet 语法 速查表](https://www.jianshu.com/p/9352a0411fcb)

## 4.1 参数默认值

**使用**

在书写形参时，直接给形参赋值，赋的值即为默认值。

这样一来，当调用函数时，如果没有给对应的参数赋值`相当于给它的值是undefined`，则会自动使用默认值。

- [x] demo

```js{cmd='node'}
function sum(a, b, c) {
    return a + b + c;
}
/* // 等效
function sum(a = undefined, b = undefined, c = undefined) {
    return a + b + c;
} */

console.log(sum(10, 1, 2)); // 13
console.log(sum(11, 1, 2)); // 14
console.log(sum(12, 1, 2)); // 15
```

- [x] demo

`需求：若 sum() 仅传入了一个参数 则设置形参 b 默认值为 1 形参 c 默认值为 2`

```js{cmd='node'}
// ES6 之前的做法
function sum(a, b, c) {
    b = b === undefined && 1; // 不要写成 b = b || 1; 这么写的话 b 如果传的是 0 那么 b 也会取默认值 1
    c = c === undefined && 2;
    return a + b + c;
}

console.log(sum(10)); // 13
console.log(sum(11)); // 14
console.log(sum(12)); // 15
```

- [x] demo

```js{cmd='node'}
// 使用 ES6 中的默认参数来实现
function sum(a, b = 1, c = 2) {
    return a + b + c;
}

console.log(sum(10)); // 13
console.log(sum(11)); // 14
console.log(sum(12)); // 15
```

- [x] demo

`需求：b 取默认值 c 要传值 不取默认值`

```js{cmd='node'}
function sum(a, b = 1, c = 2) {
    return a + b + c;
}

console.log(sum(1, undefined, 8)); // 10
```

- [x] demo

```css
div {
    color: #f40;
}
p {
    color: #008c8c;
}
```

```js
/**
 * 向指定容器中添加元素
 * 并且可以 设置添加的元素的内容
 * @param {String} name 元素的名字
 * @param {HTMLElement} container 元素的父元素
 * @param {String} content 元素的内容
 */
function createElement (name = 'div', container = document.body, content) {
    const ele = document.createElement(name);
    if(content) { // 防止内容默认为 undefined
        ele.innerHTML = content;
    }
    container.appendChild(ele);
}

createElement(undefined, undefined, 'dahuyou');
createElement('p', undefined, 'xiaohuyou');
```

![20210412182531](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210412182531.png)

- [x] demo

`面试题: 问 'abc' 会输出几次?`

```js
function getContainer() {
    console.log('abc');
    return document.body;
}

/**
 * 向指定容器中添加元素
 * 并且可以 设置添加的元素的内容
 * @param {String} name 元素的名字
 * @param {HTMLElement}} container 元素的父元素
 * @param {String} content 元素的内容
 */
function createElement(name = 'div', container = getContainer(), content) {
    const ele = document.createElement(name);
    if (content) {
        ele.innerHTML = content;
    }
    container.appendChild(ele);
}

createElement(undefined, undefined, 'dahuyou');
createElement('p', undefined, 'xiaohuyou');
createElement(undefined, document.querySelector('div'), 'dahuyou');
```

![20210412183057](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210412183057.png)

```
答: 2次
实际上问的就是 有多少次第二个参数传入的是 undefined
即: 有多少次第二个参数取的是默认值
即: 函数 getContainer 调用的次数

getContainer函数 只会在 createElement函数 的第二个参数取默认值的情况下才会调用
取默认值: 也就是 传入的值是 undefined 或 没有传值
```

**[扩展]对arguments的影响**

只要给函数加上参数默认值，该函数会自动变为严格模式下的规则：arguments和形参脱离

- [x] demo

`在严格模式下 arguments 和形参之间不存在映射关系`

```js{cmd='node'}
function test(a, b) {
    console.log('arguments:', arguments[0], arguments[1]);
    console.log('a:', a, 'b:', b);
    a = 3;
    console.log('arguments:', arguments[0], arguments[1]);
    console.log('a:', a, 'b:', b);
}

test(1, 2);
```

- [x] demo

```js{cmd='node'}
'use strict'

function test(a, b) {
    console.log('arguments:', arguments[0], arguments[1]);
    console.log('a:', a, 'b:', b);
    a = 3;
    console.log('arguments:', arguments[0], arguments[1]);
    console.log('a:', a, 'b:', b);
}

test(1, 2);
```

- [x] demo

`使用了函数参数默认值 自动转化为 严格模式`

```js{cmd='node'}
function test(a = 1, b) {
    console.log('arguments:', arguments[0], arguments[1]);
    console.log('a:', a, 'b:', b);
    a = 3;
    console.log('arguments:', arguments[0], arguments[1]);
    console.log('a:', a, 'b:', b);
}

test(1, 2);
```

**[扩展]留意暂时性死区**

形参和ES6中的 `let` 或 `const` 声明一样，具有作用域，并且根据参数的声明顺序，存在暂时性死区。

- [x] demo

`形参的声明 和 let 声明 类似`

```js
function test(a, b) {
    let a = 1; // 该行报错
    console.log(a, b);
}

test(undefined, 1); // Uncaught SyntaxError: Identifier 'a' has already been declared
```

- [x] demo

```js{cmd='node'}
function test(a, b = a) { // 先声明的 a 再拿 a 给 b 赋值 不会报错
    console.log(a, b);
}

test(1); // 1 1
```

- [x] demo

```js
function test(a = b, b) { // 该行报错 因为拿 b 给 a 赋值的时候 b 还是声明
    console.log(a, b);
}

test(undefined, 1); // Uncaught ReferenceError: Cannot access 'b' before initialization
```

**小结**

```
1. 函数参数默认值的书写
   在书写函数形参的时候 直接给形参赋值即可
2. 使用函数的参数默认值 对 arguments 的影响
   一旦使用了函数参数的默认值 那么 该函数内部 将自动使用 ES6 的严格模式
   在严格模式下 arguments 和 形参之间是脱离的
3. 形参存在暂时性死区
```

## 4.2 剩余参数

**arguments的缺陷**

1. 如果和形参配合使用，容易导致混乱`误操作`
2. 从语义上，使用arguments获取参数，由于形参缺失，无法从函数定义上理解函数的真实意图`可读性极差`

```
`arguments` 这东西以后就不要用了 因为有了更好的东西`(剩余参数)`来替代它 没有必要使用 `arguments` 而且它还存在一些问题。 因为操作 `arguments` 在非严格模式下 有可能会改变形参。 但是通过形参名 我们也可以改变形参。 这样就会导致一个问题 有两股力量都可以修改它。 若代码量过多 我们也许就不易分辨到底形参的值是怎么被改变的了。
除了这个问题外 其实还有一个问题 就是我们通过 `arguments` 来改变形参值 会很奇怪。 我们在改变某个变量名的时候 一般都是直接给这个变量名重新赋值 而通过 `arguments` 来改变形参名的话 看起来就不那么直观。 虽然我们知道它和形参有映射关系 但是终归还是不那么直观 试想一下 若一个函数的参数过多 那么我们还使用 `arguments` 来间接的操作形参的话 此时我们想要与参数逐一对应起来 就会很繁琐。
```

- [x] demo

`需求: 实现不定参求和`

`做法1: 将参数打包成一个数组传递到函数中`

```js{cmd='node'}
function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(sum([1])); // 1
console.log(sum([1, 2])); // 3
console.log(sum([1, 2, 3])); // 6
console.log(sum([1, 2, 3, 4])); // 10
```

- [x] demo

`做法2: 使用arguments`

```js{cmd='node'}
function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10
```

```
此时 sum 在定义的时候 明明没有定义形参
但是该函数实际上是在内部通过 arguments 来处理接收到的形参
这样的做法 无法从函数定义上理解函数的真实意图
```

- [x] demo

`做法3: 使用剩余参数`

```js{cmd='node'}
// 先看看我们接收到的剩余参数是个啥玩意儿
function sum(...args) {
    console.log(args, Array.isArray(args));
}

sum();
sum(1);
sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4);
```

```js{cmd='node'}
function sum(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

console.log(sum()); // 0
console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10
```

**剩余参数**

ES6的剩余参数专门用于收集末尾的所有参数，将其放置到一个形参数组中。

`语法`

```js
function (...形参名) {

}
```

`细节`

1. 一个函数，仅能出现一个剩余参数
2. 一个函数，如果有剩余参数，剩余参数必须是最后一个参数

```js
function test(...arr1, ...arr2) { // 报错

}
// Uncaught SyntaxError: Rest parameter must be last formal parameter
// 剩余参数必须是最后一个形参
```

**小结**

```
arguments的缺陷
    1. 和形参配合使用 容易出现误操作
       非严格模式下 arguments 和形参之间会有映射关系
       严格模式下 arguments 和形参之间不存在映射关系
    2. 用它来操作形参 程序的可读性不好
       可读性不好主要是指:
          我们无法通过函数的参数列表
          一眼得知该函数在内部是否有使用 arguments 来操作形参

剩余参数的两个注意细节
    1. 一个函数只能有一个剩余参数
    2. 剩余参数只能作为函数的最后一个形参
```

## 4.3 展开运算符

- 对 数组 展开 ES6
- 对 对象 展开 ES7

使用方式：`...` + 要展开的东西

- [x] demo

`需求: 未知数组求和`

```js{cmd='node'}
/**
 * 根据指定的长度来创建一个随机数组
 * @param {Number} len 随机数组的长度
 */
function createRandomArr(len) {
    const resultArr = [];
    for (let i = 0; i < len; i++) {
        const item = getRandom(1, 10);
        resultArr.push(item);
    }
    return resultArr;
}

/**
 * 获取一个介于最小值与最大值之间的随机整数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function sum(...args) {
    let result = 0;
    args.forEach(arg => {
        result += arg;
    });
    return result;
}

const arr = createRandomArr(3);
const result = sum(...arr);
console.log(arr);
console.log(result);
```

`错误写法`

```js
console.log(sum(numbers));
```

```
这里有一个问题, 就是不定参求和函数 sum() 要求求和的参数逐一列出来
如果我们直接将未知数组 numbers 直接当作参数丢进去 那么是没用的 这么做只传入了一个参数
```

`使用 apply 来实现`

```js
console.log(sum.apply(null, numbers));
```

`使用 展开运算符 ... 来实现`

```js
console.log(sum(...numbers));
```

- [x] demo

`需求: 数组浅度克隆`

```js{cmd='node'}
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr1 === arr2); // false
console.log(arr1); // (3) [1, 2, 3]
console.log(arr2); // (3) [1, 2, 3]
```

- [x] demo

`需求: 对象浅度克隆`

```js{cmd='node'}
const obj1 = {
    name: '成哥',
    age: 18,
    love: '邓嫂'
}

const obj2 = {
    ...obj1
}

/* 等价于下面这种写法
const obj2 = {
    name: obj1.name,
    age: obj1.age,
    love: obj1.love
}
*/

console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);
```

- [x] demo

```
重复定义的对象属性
    对象属性不能重复定义 若重复定义的话 那么之后定义的属性值会覆盖之前的
    利用这一特点 可以实现很多需求 比如: 对象混合
```

```js{cmd='node'}
const obj1 = {
    name: '成哥',
    age: 18,
    love: '邓嫂'
}

const obj2 = {
    ...obj1,
    name: '邓哥'
}
// 既能确保源对象不变 又能创建一个新的对象
// 这种操作在 React 中会很常见

console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);
```

- [x] demo

`对象混合`

```js{cmd='node'}
// 用户传入的配置对象
let options = {
    width: '100',
    height: '100'
}

// 默认的配置对象
const defaultOptions = {
    width: '200',
    height: '200',
    color: '#008c8c'
}

options = {
    ...defaultOptions,
    ...options
}

console.log(options);
console.log(defaultOptions);
```

```
[示例] 在封装插件的时候 一般都会用到对象混合
       配置对象中的参数 若默认配置对象中的值与用户传入的值有冲突
       那么优先使用用户传入的值
```

- [x] demo

`Object.assign()`

```js{cmd='node'}
// 用户传入的配置对象
let options = {
    width: '100',
    height: '100'
}

// 默认的配置对象
const defaultOptions = {
    width: '200',
    height: '200',
    color: '#008c8c'
}

options = Object.assign({}, defaultOptions, options);

console.log(options);
console.log(defaultOptions);
```

`对象属性中包含 typeof 为 object 的属性值`

```
我对 Object.assign() 的理解
Object.assign({}, defaultOptions, options); // 以该语句为例
    第一个参数是一个 {} 空对象 内存空间的地址假设为 a
    第二个参数是 defaultOptions对象
    第三个参数是 options对象
Object.assign() 做的事情就是
    1. 先把第二个对象给展开 然后把它的所有键值对 丢到 a 中
    2. 再把第三个对象给展开 同样地把它的所有键值对 丢到 a 中
    3. ...
    一旦发现了了冲突的键 那么 以后面丢进来的为准
    最后将 a 中的值返回
```

- [x] demo

`浅度克隆`

```js{cmd='node'}
const obj1 = {
    name: '成哥',
    age: 18,
    love: '邓嫂',
    address: {
        country: '中国',
        province: '黑龙江',
        city: '哈尔滨'
    }
}

const obj2 = {
    ...obj1
}

console.log(obj1);
console.log(obj2);
console.log(obj1.address === obj2.address);
```

- [x] demo

`在我们清楚知道被克隆的对象的结构的前提下 我们可以采用下面这种操作来实现深度克隆`

```js{cmd='node'}
const obj1 = {
    name: '成哥',
    age: 18,
    love: ['邓嫂', '成嫂1', '成嫂2'], // love 是一个引用类型
    address: { // address 也是一个引用类型
        country: '中国',
        province: '黑龙江',
        city: '哈尔滨'
    }
}

const obj2 = {
    ...obj1,
    address: { // 引用类型 进一步展开
        ...obj1.address
    },
    love: [...obj1.love, '成嫂3', '成嫂4'] // 引用类型进一步展开 并且 还可以新增一些成员
}

console.log(obj1);
console.log(obj2);
console.log(obj1.address === obj2.address);
console.log(obj1.love === obj2.love);
```

- [x] demo

`深度克隆 (在不清楚对象结构的情况下 那么可以使用 clone 函数来实现深度克隆)`

```js
/**
 * 克隆
 * @param {any} target 被克隆的目标
 * @param {Boolean}} isDeep 是否深度克隆
 */
function clone(target, isDeep) {
    // 1. 克隆数组
    if (Array.isArray(target)) {
        if (isDeep) {
            let newArr = [];
            target.forEach(item => {
                newArr.push(clone(item, isDeep));
            });
            return newArr;
        } else {
            return [...target];
            // return target.slice(); // 浅拷贝一个数组
            // target.slice() 等价于 target.slice(0, target.length); 等价于 [ ...target ]
        }
    }
    // 2. 克隆对象
    if (typeof target === 'object') {
        let newObj = {};
        if (isDeep) {
            for (const prop in target) {
                newObj[prop] = clone(target[prop], isDeep);
            }
        } else {
            for (const prop in target) {
                newObj[prop] = target[prop];
            }
            /*  newObj = {
                 ...target
             } */
        }
        return newObj;
    }
    // 3. 克隆基本数据类型
    return target;
}
```

**小结**

```
展开运算符
    展开数组 ==> ...数组
    展开对象 ==> ...对象

展开运算符 和 剩余参数
    展开运算符的写法 和 函数的剩余参数的写法 一模一样
    区分它们也很简单 写在定义一个函数的形参位置上的话 表示的是剩余参数 否则 表示的是展开运算符
```

## 4.4 剩余参数和展开运算符练习

[../demos/2. 获取最值](../demos/2.%20获取最值/index.html)

```
核心语句:
    1. Math.max(...arr);
    2. Math.min(...arr);

使用Emmet语法快速生成html结构
    (p>input:number[value='0'])*10
```

- [x] demo

`在调用函数时 将数组中的值当做形参传入`

```js{cmd='node'}
function test(a, b, c) {
    console.log(a, b, c);
}

const arr = [1, 2, 3];

test(...arr); // 1 2 3
```

```
和 4.3 中的 demo (未知数组求和) 是一个道理
```

- [x] demo

`柯里化`

```
我对柯里化 curry 的理解:
    1. curry 函数接收的参数是?
    答: curry 函数接收的第一个参数是一个函数, 接收的后续参数是第一个参数(函数)的参数。

    2. curry 函数的返回值是?
    答: 返回值是一个新的函数, 无论参数够还是不够, 都是返回一个新函数, 即便参数数量够了, 也不会立即执行参数1(函数)。

    3. curry 函数怎么用?
    答: 接收剩余参数用的
    例:
        某个函数 A 调用它需要传入 4 个参数 当我们使用 curry 调用它时 分下面几种情况
           function A (a, b, c, d) {
               console.log(a + b + c + d);
           }
        参数数量不够
           B = curry(A, 1, 2);
           那么此时 curry 会返回一个新的函数 该新函数用于接收剩余参数 此时已经传入了 两个参数 还差两个参数 由返回的新的函数来接收剩余的这两个参数
        参数够了
           B(3, 4); // 参数够了会打印 10
        参数依旧不够
           C = B(3); // 参数依旧不够 同理 返回新函数 用于接收剩余参数 此时还差一个参数
        C(4); // 参数够了 会打印10
    4. curry 函数的应用场景？
    答: 不知道。。。
        网上虽然介绍了很多，但是实战经验不足，体会不到它有啥用。
```

参考文章: [Javascript中的柯里化 sf](https://segmentfault.com/a/1190000010878974)

- [x] demo

```js{cmd='node'}
function cal(a, b, c, d) {
    return a + b * c - d;
}

console.log(cal(1, 2, 3, 4)); // 3
console.log(cal(1, 2, 4, 5)); // 4
console.log(cal(1, 2, 5, 6)); // 5
console.log(cal(1, 2, 6, 7)); // 6
```

```js{cmd='node'}
/**
 * 柯里化
 * 用户固定某个函数的前面的参数，得到一个新的函数，新函数调用时，接收剩余参数。
 */
function curry(func, ...args) {
    return function (...subArgs) {
        const allArgs = [...args, ...subArgs]; // 拼接两个数组
        // 参数够了
        if (allArgs.length >= func.length) { // func.length 获取 func 函数的形参数量
            return func(...allArgs); // 直接调用 func 函数 并将所有参数 allArgs 当做形参传进去
        } else { // 参数依旧不够
            return curry(func, ...allArgs); // 递归
        }
    }
}

function cal(a, b, c, d) {
    return a + b + c + d;
}

const newCal = curry(cal, 1, 2);
console.log(newCal(3, 4)); // 10
console.log(newCal(4, 5)); // 12

const newCal1 = newCal(5);
const newCal2 = newCal(6);

console.log(newCal1(6)); // 14
console.log(newCal2(7)); // 16
```

**小结**

```
难点: 充分理解 curry 并能够封装 curry
```

## 4.5 明确函数的双重用途

**new.target**

ES6提供了一个特殊的API `new.target`，可以使用该API在函数内部，判断该函数是否使用了new来调用。

```js
new.target
/*
表达式 new.target 有两个可能的值
1. undefined ==> 该函数没有使用 new 关键字来调用
2. 函数本身 ==> 该函数是使用 new 关键字调用的
*/
//该表达式，得到的是：如果没有使用new来调用函数，则返回undefined
//如果使用new调用函数，则得到的是new关键字后面的函数本身
```

```
虽然我们都知道 首字母大写的函数 是构造函数 我们应当使用 new 关键字来调用。但是 若我们不使用 new 来调用 它也并不会报错。不过这样做的话 并不是我们所想看到的 并且无法的到我们所想要的结果。所以对于这样 错误调用的情况 我们想让它抛出错误。
我们需要知道的是: 如何判断一个函数是否有使用 new 关键字来调用
PS: 其实咋们在后面学习了 class 后, 很可能就不再使用 传统的构造函数来创建实例对象了, 而是使用 class 的语法, 而 class 恰恰有一个特点, 如果我们不使用 new 关键字调用它, 那么会报错, 也就是说, 它已经帮我们做好了校验, 即: 如果使用 class 来创建实例对象的话, new.target 就没必要使用了。
```

- [x] demo

```js
function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
}

const p1 = new Person('da', 'huyou'); // 希望这么调用
const p2 = Person('da', 'huyou'); // 不希望这么调用
```

![20210412224812](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210412224812.png)

```
误给window对象身上添加了 3个 属性 对于这样的行为 我们想让它报错
```

- [x] demo

```
ES6 之前的处理方式 ==> !(this instanceof Person) 若 this 的原型链上没有构造函数 Person 的原型 Person.prototype 那么抛出错误
若使用这种方式来实现 那依旧存在弊端 我们可以通过 call、apply、bind 来强行令 this 的原型链上有构造函数 Person 的原型 Person.prototype 但是我们依旧没有使用 new 关键字来调用
```

```js
function Person (firstName, lastName) {
    if(!(this instanceof Person)){
        throw new Error('没有使用 new 来调用 Person');
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
}

const p1 = new Person('da', 'huyou');
// const p2 = Person('da', 'huyou'); // Uncaught Error: 没有使用 new 来调用 Person

const p3 = Person.call(p1, 'Da', 'huyou'); // 还把 p1 给改了...
```

![20210412225434](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210412225434.png)

```
instanceof
    对象 instanceof 构造函数
    true ==> 对象的原型链上 存在 构造函数的原型
    false ==> 对象的原型链上 不存在 构造函数的原型
```

- [x] demo

```js
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
// const p2 = Person('da', 'huyou'); // Uncaught Error: 没有使用 new 来调用 Person

// const p3 = Person.call(p1, 'Da', 'huyou'); // Uncaught Error: 没有使用 new 来调用 Person
```

```
这一知识点 也许只有的 开发内部协调相对比较频繁的系统时 才会用到
```

**小结**

```
函数的调用
    1. 普通调用 ==> 函数名()
    2. 当做构造函数来调用 ==> new 函数名()

如何检测一个函数被调用的方式
    new.target
    若函数是普通调用
       那么 new.target === undefined
    若函数是使用new关键字来调用
       那么 new.target -> 指向构造函数

PS: 后面我们会学习 Class 类, 之后我们一般都是使用 Class 来写构造函数的, Class 定义的构造函数有一个特点: 当没有使用 new 关键字来调用函数时, 会报错。所以说, 现在认识到的 new.target 也许到后面压根就不会用到它
```

## 4.6 箭头函数

**回顾：this指向**

1. 通过对象调用函数，this指向对象
2. 直接调用函数，this指向全局对象
3. 如果通过new调用函数，this指向新创建的对象
4. 如果通过apply、call、bind调用函数，this指向指定的数据
5. 如果是DOM事件函数，this指向事件源

**箭头函数的使用语法**

箭头函数是一个函数表达式，理论上，任何使用函数表达式的场景都可以使用箭头函数

完整语法：

```js
(参数1, 参数2, ...)=>{
    //函数体
}
```

如果参数只有一个，可以省略小括号

```js
参数 => {

}
```

如果箭头函数只有一条返回语句，可以省略大括号，和return关键字

```js
参数 => 返回值
```

**注意细节**

`这几点细节很重要`

- 箭头函数中，不存在this、arguments、new.target，如果使用了，则使用的是函数外层的对应的this、arguments、new.target
- 箭头函数没有原型
- 箭头函数不能作用构造函数使用

**应用场景**

1. 临时性使用的函数，并不会调用它，比如：
   1. 事件处理函数
   2. 异步处理函数
   3. 其他临时性的函数
2. 为了绑定外层this的函数 `比如: 8.6.1 手写promise 中 constructor 里面的 resolve 和 reject`
3. 在不影响其他代码的情况下，保持代码的简洁，最常见的，数组方法中的回调函数

**小结**

```
语法
    箭头函数的语法 很简单 注意它的缩写形式即可

细节
    箭头函数中没有 this
    箭头函数的 this 指向 默认是该箭头函数声明位置的 this

应用场景
    setInterval
    setTimeout
    数组链式调用
    ...
```

# 5. 对象

> 5.5 类的其他书写方式 的最后一个知识点没理解 ==6. [扩展]装饰器（ES7）(Decorator)==

`5. 对象 [学习规划与指导]`

| 知识点 | 难度 | 重要性 | 学习视频                            | 视频时长(min) | 学习次数 |
| ------ | ---- | ------ | ----------------------------------- | ------------- | -------- |
| es6    | 2    | 4      | 1. 新增的对象字面量语法             | 11            | 2/1      |
| es6    | 2    | 3      | 2. Object的新增API                  | 16            | 2/1      |
| es6    | 3    | 3      | 3. 面向对象简介                     | 11            | 2/1      |
| es6    | 3    | 4      | 4. 类：构造函数的语法糖             | 19            | 2/1      |
| es6    | 3    | 4      | 5. 类的其他书写方式                 | 46            | 2/1      |
| es6    | 4    | 3      | 6. 类的继承                         | 38            | 2/1      |
| es6    | 2    | 3      | 7. [demo]像素鸟(1)-静态页面         | 17            | 2/1      |
| es6    | 3    | 3      | 7. [demo]像素鸟(2)-父类、天空、大地 | 29            | 2/1      |
| es6    | 4    | 3      | 7. [demo]像素鸟(3)-小鸟类           | 19            | 2/2      |
| es6    | 5    | 3      | 7. [demo]像素鸟(4)-柱子类           | 28            | 2/2      |
| es6    | 5    | 5      | 7. [demo]像素鸟(5)-游戏类           | 25            | 2/2      |


| 学习时间 | 达成效果                     | 老师建议                                                                                                                         |
| -------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1天      | 能够熟练的使用类替代构造函数 | 这一部分有一定难度，主要在于同学们对面向对象开发不是很适应，所以应该反复观看像素鸟案例，理解并跟着老师的思路开发完成，再反复体会 |

## 5.1 新增的对象字面量语法

**1. 成员速写**

如果对象字面量初始化时，成员的名称来自于一个变量，并且和变量的名称相同，则可以进行简写

- [x] demo

```js
function createUser(loginId, loginPwd, nickName) {
    const sayHello = function () {
        console.log('loginId:', this.loginId, 'nickName:', this.nickName);
    }
    return {
        loginId,
        loginPwd,
        nickName,
        sayHello,
        id: Math.random()
    }
    // 两种写法等效
    // return {
    //     loginId: loginId,
    //     loginPwd: loginPwd,
    //     nickName: nickName,
    //     sayHello: sayHello,
    //     id: Math.random()
    // }
}

const u = createUser('123', 'abc', 'dahuyou');
console.log(u);
u.sayHello();
```

![20210413093434](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413093434.png)

**2. 方法速写**

对象字面初始化时，方法可以省略冒号和function关键字

- [x] demo

```js
const user = {
    name: 'dahuyou',
    age: 18,
    sayHello() {
        console.log(this.name, this.age);
    }
    // 两种写法等效
    // sayHello: function () {
    //     console.log(this.name, this.age);
    // }
}

user.sayHello(); // dahuyou 18
```

**3. 计算属性名**

有的时候，初始化对象时，某些属性名可能来自于某个表达式的值，在ES6，可以使用中括号来表示该属性名是通过计算得到的。

- [x] demo

`对象的属性名存放在变量中`

```js
const prop1 = 'name',
    prop2 = 'age',
    prop3 = 'sayHello';

const user = {
    [prop1]: 'dahuyou',
    [prop2]: 18,
    [prop3]() {
        console.log(this.name, this.age);
    }

    // 下面这种做法 会报错: Uncaught SyntaxError: Unexpected template string
    // `${prop1}`: 'dahuyou', // 注意: 在书写对象字面量时 对象的属性名不能是模板字符串
}

// ES6 之前的写法 - 先创建好对象 再
// user[prop1] = 'dahuyou';
// user[prop2] = 18;
// user[prop3] = function () {
//     console.log(this.name, this.age);
// }

user[prop3](); // dahuyou 18
console.log(user);
```

![20210413094550](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413094550.png)

```
在定义对象的同时 定义好它的成员 这样写在一起 有助于提升程序的可读性
所以更加推荐第一种写法 第二种写法将两者分离了 不易阅读
```

**小结**

```
本节介绍了3种书写对象字面量的便捷方式
    1. 成员速写
    2. 方法速写
    3. 计算属性名
这3个知识点 在之后书写对象的时候 能用就用 之前的老旧方式 摒弃掉即可
```

## 5.2 Object的新增API

```js
// Object 是一个构造函数
console.log(typeof Object); // function
// 下面要介绍的 4 个方法都是静态方法 都是附着在 Object 构造函数身上的方法
```


**1. `Object.is`**

用于判断两个数据是否相等，基本上跟严格相等（===）是一致的，除了以下两点：

1) NaN和NaN相等
2) +0和-0不相等

- [x] demo

```js
// 两个怪异的现象
console.log(NaN === NaN); // false NaN 与任何值都不相等 包括自身
console.log(+0 === -0); // true 它们应该是不相等的 因为 + 和 - 两个符号位不一样

console.log(Object.is(NaN, NaN)); // true 符合常理
console.log(Object.is(+0, -0)); // false 符合常理
```

```
若在开发中遇到了上述提到的这两点怪异现象 并且需要我们处理时 可以使用 Object.is() 来解决
Object.is() 就是用来解决这两个怪异行为而出现的 后续很多 新增的api 用于判断成员之间是否相同 使用的都是 Object.is() 的规则
```

**2. `Object.assign`**

用于混合对象

- [x] demo

```js
// 用户传入的配置对象
let options = {
    width: '100',
    height: '100'
}

// 默认的配置对象
const defaultOptions = {
    width: '200',
    height: '200',
    container: document.body
}

options = {
    ...defaultOptions,
    ...options // 后面的会覆盖前面的
}
// 等效写法:
// options = Object.assign({}, defaultOptions, options);
```

![20210413131202](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413131202.png)

```
使用对象展开运算符 ... 来写更容易理解
使用 Object.assign 来实现的话 需要注意第一个参数被覆盖的问题
```

```js
options = Object.assign(defaultOptions, options);
```

![20210413131639](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413131639.png)

> Object.assign() 在 4.3 展开运算符 的 对象混合demo 中也有讲到 [下面是当时记录的一些笔记]

```
我对 Object.assign() 的理解
Object.assign({}, defaultOptions, options); // 以该语句为例
    第一个参数是一个 {} 空对象 内存空间的地址假设为 a
    第二个参数是 defaultOptions对象
    第三个参数是 options对象
Object.assign() 做的事情就是
    1. 先把第二个对象给展开 然后把它的所有键值对 丢到 a 中
    2. 再把第三个对象给展开 同样的把它的所有键值对 丢到 a 中
    3. ...
    一旦发现了了冲突的键 那么 以后面丢进来的为准
    最后将 a 中的值返回
```

**3. `Object.getOwnPropertyNames` 的枚举顺序**

`Object.getOwnPropertyNames`方法之前就存在，只不过，官方没有明确要求，对属性的顺序如何排序。所以，如何排序，完全由浏览器厂商决定。

ES6规定了该方法返回的数组的排序方式如下：

- 先排数字，并按照升序排序
- 再排其他，按照书写顺序排序

> 该方法并非 ES6 的新增方法 只不过在 ES6 版本中对其进行了一些改动

- [x] demo

```js
const obj = {
    name: '123',
    age: 18,
    20: '222',
    10: '111',
    30: '333'
}

const props = Object.getOwnPropertyNames(obj);
console.log(props);
```

![20210413132342](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413132342.png)

**4. `Object.setPrototypeOf`**

该函数用于设置某个对象的隐式原型

比如： `Object.setPrototypeOf(obj1, obj2)`
相当于：  ``` obj1.__proto__ = obj2 ```

- [x] demo

```js
const obj1 = {
    name: 'dahuyou'
}

const obj2 = {
    age: '18'
}

Object.setPrototypeOf(obj1, obj2); // 感觉这么写 可读性好差 还是下面这种写法的可读性好
// obj1.__proto__ = obj2;

console.log(obj1);
console.log(obj1.age); // 18
console.log(obj1.__proto__ === obj2); // true
```

![20210413132853](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413132853.png)

**小结**

```
1. Object.is()
   ===
2. Object.assign()
   对象混合
3. Object.getOwnPropertyNames()
   获取对象属性名 返回一个数组
   数组开始是 数字属性名 再是 其他
   数字属性名 升序排序 其他 按照书写顺序排序
4. Object.setPrototypeOf()
   设置对象的隐式原型
```

## 5.3 面向对象简介

面向对象：一种编程思想，跟具体的语言没有关系

对比面向过程：

- 面向过程：思考的切入点是**功能的步骤**
- 面向对象：思考的切入点是**对象的划分**

【大象装冰箱】

**小结**

```
理解 面向对象 和 面向过程 指的是什么即可
下面是我对这两者的理解
    面向对象编程
        在解决具体问题时 首先想到的是对象
        再通过给对象定义属性和方法来解决具体问题
        在开发相对大型项目的时候 相对于 面向过程而言 也许优势更大
        但是在写一些小功能的时候 相对于 面向过程而言 代码量会更多
    面向过程编程
        在解决具体问题时 首先想到的是这个问题的解决步骤该如何实现
        再直接编写相关的处理函数来解决具体问题
    我们所学习的 JavaScript
      既可以采用 面向对象 的思维方式来编程
      也可以采用 面向过程 的思维方式来编程
      这两者各有优劣 总之就 多写多练 慢慢体会吧
```

## 5.4 类：构造函数的语法糖

**传统的构造函数的问题**

- 属性和原型方法定义分离，降低了可读性 `应该写在一起的就尽可能的写在一起`
- 原型成员可以被枚举
- 默认情况下，构造函数仍然可以被当作普通函数使用`虽然可以使用 new.target 来检测 但是下面介绍的方式 能更好的解决这个问题`

- [x] demo

`属性和原型方法定义分离，降低了可读性`

```js
// 构造函数 (构造器)
function Animal(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.sex = sex;
}

// 定义实例方法 (原型方法)
Animal.prototype.print = function () {
    console.log(`【种类】：${this.type}`);
    console.log(`【姓名】：${this.name}`);
    console.log(`【年龄】：${this.age}`);
    console.log(`【性别】：${this.sex}`);
}

const a = new Animal('哈士奇', '旺财', 3, '公');
a.print();
```

![20210414121111](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210414121111.png)

- [x] demo

`原型成员可以被枚举`

```js
for (const prop in a) {
    console.log(prop);
}
// type
// name
// age
// sex
// print 【通常我们不希望原型上的成员被枚举出来】
```

![20210414121237](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210414121237.png)

- [x] demo

`默认情况下，构造函数仍然可以被当作普通函数使用`

```
虽然可以借助 new.target 来防止构造函数被当做普通函数调用
但是 ES6 还提供了更好的方法来防止构造函数被当做普通函数调用
```

**类的特点**

- 类声明不会被提升，与 let 和 const 一样，存在暂时性死区
- 类中的所有代码均在严格模式下执行
- 类的所有方法都是不可枚举的
- 类的所有方法都无法被当作构造函数使用
- 类的构造器 `constructor` 必须使用 `new` 来调用

```
看到暂时性死区 就要知道 这东西在使用之前 得定义好 否则的话 无法 access
```

- [x] demo

```js
class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    print() { // print 会被自动添加到 Animal.prototype 上 也就是会自动添加到构造函数的原型上
        console.log(`【种类】：${this.type}`);
        console.log(`【姓名】：${this.name}`);
        console.log(`【年龄】：${this.age}`);
        console.log(`【性别】：${this.sex}`);
    }
}

// 等效写法
// function Animal(type, name, age, sex) {
//     this.type = type;
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
// }
// Animal.prototype.print = function () {
//     console.log(`【种类】：${this.type}`);
//     console.log(`【姓名】：${this.name}`);
//     console.log(`【年龄】：${this.age}`);
//     console.log(`【性别】：${this.sex}`);
// }

const a = new Animal('哈士奇', '旺财', 3, '公');
a.print();

for (const prop in a) {
    console.log(prop);
}
```

![20210413151009](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413151009.png)

```
第一种写法 避免了 属性和原型方法定义分离，降低可读性 的问题
将属性和方法定义在一起 提高了程序的可读性

第一种写法 实际上也是 语法糖 它底层实现上还是和后者一样的
ES6 只不过是提供了一种新的写法 让其 (语法上) 看起来更加符合面向对象的书写规范
```

`类的构造器 constructor 必须使用 new 来调用 若不使用 new 关键字来调用 则会报错`

```js
Animal();
// Uncaught TypeError: Class constructor Animal cannot be invoked without 'new'
// 未捕获的类型错误: 在缺少new关键字时 类的构造器 Animal 无法被调用
```

`不会成为全局对象身上的属性`

```js
window.Animal; // undefined
```

`类声明不会被提升 存在暂时性死区 (类要先定义再使用)`

```js
// 若在定义类之前就使用它来创建实例对象 那么会报错
const a2 = Animal('哈士奇', '旺财', 3, '公');
// Uncaught ReferenceError: Cannot access 'Animal' before initialization

class Animal {
    constructor ...
}
```

`类的所有方法都无法被当作构造函数使用`

```js
const p = new a.print();
// Uncaught TypeError: a.print is not a constructor
```

`PS: 类的所有方法都是不可枚举的 注意: 类的所有方法 不包括 写在 constructor 中的方法`

```js
class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;

        this.say = () => {
            console.log(`my name is ${this.name}`);
        }
    }
}

const a = new Animal('哈士奇', '旺财', 3, '公');

a.say();

for (const prop in a) {
    console.log(prop);
}
```

![20210419181023](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210419181023.png)

**小结**

```
传统的构造函数的问题
    1. 属性和原型方法定义分离，降低了可读性
    2. 原型成员可以被枚举
    3. 默认情况下，构造函数仍然可以被当作普通函数使用
       不使用 new 关键字来调用构造函数时 并不会报错
       而我们希望构造函数被当做普通函数来调用的时候 报错
       PS: 被当做普通函数调用 指的就是没有使用 new 关键字来调用

类的特点
    1. 类声明不会被提升，与 let 和 const 一样，存在暂时性死区
       类声明不会被提升 存在暂时性死区 ==> 无法在定义之前使用它
       类不会成为全局对象 window 身上的属性
    2. 类中的所有代码均在严格模式下执行
       注意: 严格模式下有很多地方和非严格模式是不一样的
       比如说:
          在非严格模式下 this 默认指向的是 window 对象
          在严格模式下 this 默认指向的是 undefined
    3. 类的所有方法都是不可枚举的
       这里所说的 类中的所有方法，指的是被添加构造函数的原型上的方法，并不包括实例方法。
       在类里面定义的方法 会自动成为构造函数的原型上的方法 （不包括写在 constructor 中的实例方法）
       这些方法不可枚举，并且 当我们使用 new 关键字来调用这些方法时，会报错。
    4. 类的所有方法都无法被当作构造函数使用
    5. 类的构造器必须使用 new 来调用

使用 ES6 所提供的"类"来书写构造函数以及构造函数身上的成员方法
可以有效地回避之前 传统的构造函数 所带来的一系列问题
所以 在后续的编程中 定义类 就直接使用 ES6 所提供的"类"来写即可
```

## 5.5 类的其他书写方式

**1. 可计算的成员名**

- [x] demo

```js
const prop = 'print';
class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    [prop]() {
        console.log(`【种类】：${this.type}`);
        console.log(`【姓名】：${this.name}`);
        console.log(`【年龄】：${this.age}`);
        console.log(`【性别】：${this.sex}`);
    }
}
```

**2. getter和setter**

`Object.defineProperty` 可定义某个对象成员属性的读取和设置

使用getter和setter控制的属性，不在原型上

- [x] demo

`模拟给属性添加 '特性' 的效果`

```js
// 不使用 Object.definePrototype 来实现
class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.setAge(age); // 使用 this.方法名 的形式 调用原型上的方法
        this.sex = sex;
    }

    getAge() {
        return this._age + '岁';
    }

    setAge(age) {
        if (age < 0) {
            age = 0;
        } else if (age > 1000) {
            age = 1000;
        }
        this._age = age; // 通常我们在给那些 不希望被调用者直接操作(读取操作)的属性 命名时 会在前面加上一个下划线
    }

    print() {
        console.log(`【种类】：${this.type}`);
        console.log(`【姓名】：${this.name}`);
        console.log(`【年龄】：${this.age}`);
        console.log(`【性别】：${this.sex}`);
    }
}

const a = new Animal('哈士奇', '旺财', 3, '公');
```

![20210413162625](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413162625.png)

```js
class Animal {
    // ...

    setAge(age) {
        if(typeof age !== 'number'){
            throw new TypeError('age prototype must be a number.');
        }
        if (age < 0) {
            age = 0;
        } else if (age > 1000) {
            age = 1000;
        }
        this._age = age;
    }

    // ...
}

const a = new Animal('哈士奇', '旺财', 3, '公');
a.setAge('123'); // 报错 Uncaught TypeError: age prototype must be a number.
```

```
这个案例中 我们借助函数 模拟 给 age 这个属性添加了一些 "特性" 的效果
    越界处理
    类型错误处理

通过给指定属性添加特性 我们还可以实现其他很多操作
但是上面这样的做法 并非给属性添加特性 而是借助函数来操作对象身上的属性
这么做虽然也可以达到效果 不过这样做的话 age 这个属性 当我们操作它的时候
感觉上就不像是一个属性了 因为对于一个 正常的属性来说 当我们操作它时 直接使用下面这种写法即可
  对象名.属性名             来读取它的值
  对象名.属性名 = 属性值    来设置它的值
而操作 age 这个属性时 我们得借助另一个保留属性 _age 并结合函数 间接地操作它
  对象名.getAge()           读取_age的值
  对象名.setAge(属性值)     给_age设置属性值
所以若我们既想 让 年龄属性具备越界处理 和 类型错误处理的 "特性"
又想把它当做正常的属性一样来操作它 那么这种方式 是不推荐的
```

- [x] demo

`使用 Object.definePrototype(对象, 属性名, {get(){...}, set(){...}}) 来实现`

```js
class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.sex = sex;
        let _age; // 辅助变量 它同时是一个私有属性 【想清楚为什么这里得定义一个私有属性】

        Object.defineProperty(this, 'age', {
            get() {
                return _age + '岁';
                // return this.age + '岁'; // 注意 千万不能这么写 会栈溢出 因为每次读取 age 都会调用 get 而我们又在 get 里面读取 age ...
            },
            set(val) {
                if (typeof val !== 'number') {
                    throw new TypeError('age prototype must be a number.');
                }
                if (val < 0) {
                    val = 0; // 在 set 中改变的 val 实际上改变的就是用户在调用构造函数时传入的参数 age 的值
                } else if (val > 1000) {
                    val = 1000;
                }
                _age = val;
                // this.age = val; // 这么做的话 也会导致栈溢出 和 上面get中的原因类似
            }
        });

        this.age = age; // 将经过 set 处理后的 age 值赋值给 this.age 属性
        // 这里给 this.age 赋值 实际上也是给私有属性 _age 赋值
    }

    print() {
        console.log(`【种类】：${this.type}`);
        console.log(`【姓名】：${this.name}`);
        console.log(`【年龄】：${this.age}`);
        console.log(`【性别】：${this.sex}`);
    }
}

const a = new Animal('哈士奇', '旺财', 3, '公');

a.print();

console.log(a.age); // 3岁

a.age = -1;

console.log(a.age); // 0岁

a.age = 10000;

console.log(a.age); // 1000岁

a.age = '123'; // Uncaught TypeError: age prototype must be a number.
```

![20210413170946](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413170946.png)

```
在编写这个demo的时候 遇到了一个 栈溢出 的问题
注意点:
    1. 栈溢出问题
       一旦读取 age 那么 get 就会调用
           如果我们在 get 中读取 age 那么很有可能就会导致栈溢出
       一旦设置 age 那么 set 就会调用
           如果我们在 set 中设置 age 那么很有可能就会导致栈溢出
    2. Object.defineProperty
       - 要写在 constructor 中
         目的是为了执行该语句 Object.defineProperty();
         PS: 但是 get 和 set 并不会被调用 仅仅是给它们赋值, 只有在 this.age 被读取 或 赋值的时候, get 和 set 才会被调用
       - 要写在 被添加特性的属性的赋值之前
         写在 this.age = age 之前
       - 要清楚 set 函数中的 val 表示的含义

问: 为什么 要多定义一个私有属性 _age ?
答: 为了解决栈溢出的问题, 防止 get 方法中返回 this.age 导致栈溢出
    当然也可以使用 this._age 这样的方式来实现

问: 为什么 this.age = age; 必须写在 Object.defineProperty 之后?
答: 确保 this.age 身上的 getter 和 setter 已经设置上了
    1. 当读取 this.age 属性值的时候 返回的是 _age 的值
    2. _age 的初值是 undefined
    3. _age 被赋值的时刻是 this.age 身上的 setter 被调用的时刻 也就是 语句 this.age = age; 执行的时刻
    4. 如果 this.age = age; 写在前面, 那么当我们初始化好一个实例对象之后, 并获取它身上的 this.age 属性值时 获取到的将是 undefined
       第一次给 this.age 赋值的时候 this.age 的特性压根没加上 也就是 this.age 身上还没有 setter 方法, 即: 当执行语句 this.age = age; 时, 也就不会给 _age 赋值, 执行完 this.age = age; 语句之后, 特性才添加上, 那么当我们初始化完一个对象之后, 并读取 this.age 属性值时 ==> 调用 this.age 身上的 getter 方法 ==> 返回 _age ==> undefined
    PS: 下面这个demo中 虽然 get 和 set 会创建好 age 属性 但是我们在 constructor 中依旧不能少了语句 this.age = age; 道理是一样的。
```

- [x] demo

`使用 ES6 提供的 getter 和 setter 来实现`

```js
class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.age = age; // 语句1
        // this._age = age; 用该语句替代语句1 实际上也可以实现同样的效果
        // 如果两条语句都不存在 那么存在一个问题 就是 this._age 没有初值 所以 必须给它赋初值
        this.sex = sex;
    }

    // 创建一个age属性 并给它加上 getter 读取该属性时 会运行该函数
    get age() {
        return this._age + '岁';
    }

    // 创建一个age属性 并给它添加 setter 给该属性赋值时 会运行该函数
    set age(val) {
        if (typeof val !== 'number') {
            throw new TypeError('age prototype must be a number.');
        }
        if (val < 0) {
            val = 0;
        } else if (val > 1000) {
            val = 1000;
        }
        this._age = val;
    }

    print() {
        console.log(`【种类】：${this.type}`);
        console.log(`【姓名】：${this.name}`);
        console.log(`【年龄】：${this.age}`);
        console.log(`【性别】：${this.sex}`);
    }
}

const a = new Animal('哈士奇', '旺财', 3, '公');

a.print();

console.log(a.age); // 3岁

a.age = -1;

console.log(a.age); // 0岁

a.age = 10000;

console.log(a.age); // 1000岁

a.age = '123'; // Uncaught TypeError: age prototype must be a number.
```

```
输出和上一个 demo 一样
注意点少了一个 只要注意一个 "栈溢出" 的问题即可
```

- [x] demo

`get 和 set 关键字后面的函数名的问题`

```js
class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.ages = age; // 这里给 this.ages 赋值 实际上也就调用了 set ages() 即: 同时也给 this._age 赋值
        this.sex = sex;
    }

    // 创建一个age属性 并给它加上 getter 读取该属性时 会运行该函数
    get ages() {
        return this._age + '岁';
    }

    // 创建一个age属性 并给它添加 setter 给该属性赋值时 会运行该函数
    set ages(val) {
        if (typeof val !== 'number') {
            throw new TypeError('age prototype must be a number.');
        }
        if (val < 0) {
            val = 0;
        } else if (val > 1000) {
            val = 1000;
        }
        this._age = val;
    }


    print() {
        console.log(`【种类】：${this.type}`);
        console.log(`【姓名】：${this.name}`);
        console.log(`【年龄】：${this.ages}`);
        console.log(`【性别】：${this.sex}`);
    }
}

const a = new Animal('哈士奇', '旺财', 3, '公');

a.print();

console.log(a.ages); // 3岁

a.ages = -1;

console.log(a.ages); // 0岁

a.ages = 10000;

console.log(a.ages); // 1000岁

a.ages = '123';
```

```
这段程序和前一个程序是等效的
函数名应该与构造函数所创建的实例对象身上的属性名保持一致，而与constructor的参数名无关。
```

**小结**

```
2. setter 和 getter 这一部分的细节比较多，平时写的少的话，写起来会出现很多小问题。每个demo后面写的内容，不是很重要，大多都是自己尝试写了过后，记录的一些bug。。。
```

**3. 静态成员**

构造函数本身的成员

使用static关键字定义的成员即静态成员

![20210413173421](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413173421.png)

```js
Animal.abc = '123';
// abc 就是 Animal 构造函数的静态成员 通过 Animal 构造函数所创建的实例对象无法访问到 abc
// 但是在 ES6 中 提供了新的写法 可以直接将它写在 Class 中 只要再属性前面加上 static 修饰一下就ok
```

- [x] demo

```js
class Chess {
    constructor(name, x, y) {
        this.name = name; // name 表示棋子的名字
        this.x = x; // 棋子的横坐标
        this.y = y; // 棋子的纵坐标
        // ...
    }
}

Chess.width = 50; // 每一个棋子的宽度
Chess.height = 50; // 每一个棋子的高度
```

```
假设 在中国象棋小游戏中 有这么一个棋子类 Chess
每一个棋子 都有它的实例成员 比如 名称 位置... 不同的棋子 可能会有所不同 这些属性 适合定义为 实例成员
但是每一个棋子的尺寸都是一样的 所有实例的尺寸都统一大小 那么这样的属性就适合定义为 静态属性

这么做的好处
    1. 有效的减少了实例身上不必要的属性
    2. 不需要创建实例 就可以获取到棋子的尺寸
```

- [x] demo

`ES6 中的等效写法`

```js
class Chess {
    constructor(name, x, y) {
        this.name = name; // name 表示棋子的名字
        this.x = x; // 棋子的横坐标
        this.y = y; // 棋子的纵坐标
        // ...
    }

    static width = 50;
    static height = 50;

    // 静态成员不仅仅是属性 还包括 方法
    /* static method() {

    } */
}

console.log(Chess.width); // 50
console.log(Chess.width); // 50
// Chess.method(); // 调用静态方法
```

```
成员包括两部分
  1. 成员属性
  2. 成员方法
```

**4. 字段初始化器（ES7）**

注意：

1). 使用static的字段初始化器，添加的是静态成员
2). 没有使用static的字段初始化器，添加的成员(属性)位于对象上
3). 箭头函数在字段初始化器位置上，指向当前对象

- [x] demo

`字段初始化器`

```js
class Test {
    // constructor() {
    //     this.a = 1;
    //     this.b = 2;
    // }

    // 等效写法
    a = 1;
    b = 2;
}

const t = new Test();

console.log(t.a); // 1
console.log(t.b); // 2
```

```
结合箭头函数的相关知识点 我们由此可以推出 第3点 结论
箭头函数在字段初始化器位置上，指向当前对象
因为箭头函数本身并没有 this 箭头函数里面的 this 指向的是箭头函数声明的位置的 this

    class Test {
        constructor() {
            // 这里面的 this 指向的是当前对象
        }
    }


    class Test {
        constructor() {
            this.print = () => {
                // ...
            }
        }
        // 等效写法
        print = () => {
            // ...
        }
    }

注意
    这么写的 print 函数 将会成为实例对象身上的 实例成员
    而不再是在 Test.prototype 身上定义的 print 函数了
缺点
    若创建的实例对象过多的话 那么这样的做法会导致内存空间被大量占用
优点
    绑定了 this 让 this 指向了当前对象
```

- [x] demo

```js
class Test {
    constructor() {
        this.a = 1;
    }

    print() {
        console.log(this.a);
    }
}

const t = new Test();

t.print(); // 1

const p = t.print;
p(); // Uncaught TypeError: Cannot read property 'a' of undefined
```

```
notes
  在严格模式下
  全局环境中的函数内部的 this 默认指向的并不是 window 对象 而是 undefined
```

- [x] demo

```js
class Test {
    constructor() {
        this.a = 1;
    }

    print = () => {
        console.log(this.a);
    }
}

const t = new Test();

t.print(); // 1

const p = t.print;

p(); // 1
```

```
对比前一个 demo 体会体会两者之间的区别
开发的时候 咋们就根据实际的需求 来选择合适的方式定义成员方法即可
```

- [x] demo

```js
class Test {
    a = 1;
    b = 2;

    print = () => {
        console.log(this.a);
    }

    print() {
        console.log(this.b);
    }
}

const t = new Test();

t.print(); // 1

const p = t.print;

p(); // 1

Test.prototype.print.call(t); // 2
```

```
注意: 在类中 写在 constructor 之外的 并且想把它添加到 原型上的
那貌似只能是 成员方法 而且还不能使用箭头函数的形式来写
如果想添加的是 成员属性 好像还真办不到...
因为我们直接写的 a = 1; b = 2; 这样的 成员属性 将自动转化为
constructor (a, b) {
    this.a = a;
    this.b = b;
}
而不会添加到原型上
```

- [x] demo

`箭头函数的字段初始化器 和 函数表达式的字段初始化器`

```js
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    print() {
        console.log(`my name is ${this.name}. my age is ${this.age}. my gender is ${this.gender}`);
    }

    print = () => {
        console.log(`My name is ${this.name}. My age is ${this.age}. My gender is ${this.gender}`);
    }
}

const person = new Person('大忽悠', 18, 'meal');

person.print();

Person.prototype.print.call(person);
```

![20210420101313](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210420101313.png)

![20210420101414](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210420101414.png)

```
箭头函数的字段初始化器 相当于写在 Person 的实例对象身上
函数表达式的字段初始化器 相当于写在 Person.prototype 上
```

- [x] demo

```js
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.print = () => {
            console.log(`My name is ${this.name}. My age is ${this.age}. My gender is ${this.gender}`);
        }
    }

    print() {
        console.log(`my name is ${this.name}. my age is ${this.age}. my gender is ${this.gender}`);
    }
}

const person = new Person('大忽悠', 18, 'meal');

person.print();

Person.prototype.print.call(person);
```

```
这种写法和上面的那种写法是等效的
```

- [x] demo

`在 constructor中 以函数表达式的方式来写 和 以箭头函数的方式来写 的区别`

`箭头函数式的写法 有效的解决了 this 的指向问题 全局的 print 函数中的 this 依旧指向 person`

```js
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.print = () => {
            console.log(`My name is ${this.name}. My age is ${this.age}. My gender is ${this.gender}`);
        }
    }

    print() {
        console.log(`my name is ${this.name}. my age is ${this.age}. my gender is ${this.gender}`);
    }
}

const person = new Person('大忽悠', 18, 'meal');

const print = person.print;

print();
```

![20210420102204](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210420102204.png)

- [x] demo

```js
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.print = function () {
            // 函数表达式中的 this 在严格模式下 默认是指向 undefined 的
            console.log(`My name is ${this.name}. My age is ${this.age}. My gender is ${this.gender}`);
        }
    }

    print() {
        console.log(`my name is ${this.name}. my age is ${this.age}. my gender is ${this.gender}`);
    }
}

const person = new Person('大忽悠', 18, 'meal');

const print = person.print;
person.print(); // My name is 大忽悠. My age is 18. My gender is meal
print(); // Uncaught TypeError: Cannot read property 'name' of undefined [空调用 this 指向 undefined]
```

![20210420102332](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210420102332.png)

```
使用函数表达式的写法 如果像上面这样调用 那么会存在一个 this 指向的问题
PS: 严格模式下 this 默认指向的是 undefined
    类中的程序 都是在严格模式下执行的
    所以会报错 无法从 undefined 中读取属性 name
```

**5. 类表达式**

> 就是把 class 视作 function 关键字一样来使用 【在 JavaScript中 类的本质 其实就是函数】

- [x] demo

```js
const Test = class { // 匿名类 类表达式
    a = 1;
    b = 2;
    // 等效
    // constructor(a, b) {
    //     this.a = a;
    //     this.b = b;
    // }
}

const t = new Test();

console.log(t.a); // 1
console.log(t.b); // 2
```

**6. [扩展]装饰器（ES7）(Decorator)**

> 最后10分钟在介绍该知识点
>
> PS: 没听懂..

横切关注点

装饰器的本质是一个函数

```
给临时过期的功能函数加装饰器
```

- [ ] demo

```js
class Test {
    @Obsolete // Uncaught SyntaxError: Invalid or unexpected token
    print() {
        console.log("print方法")
    }
}

function Obsolete(target, methodName, descriptor) {
    // function Test
    // print
    // { value: function print(){}, ... }
    // console.log(target, methodName, descriptor);
    const oldFunc = descriptor.value
    descriptor.value = function (...args) {
        console.warn(`${methodName}方法已过时`);
        oldFunc.apply(this, args);
    }
}
```

**小结**

```
1. 可计算的成员名
   类的成员名保存在变量中 在定义类的时候 使用 [变量名] 的形式 即可提起变量中的类的成员名

2. getter 和 setter
   用于给指定的属性添加特性
   取代传统的 函数式写法 和 Object.defineProperty 的写法
   需要了解传统写法所存在的一些弊端
   需要清楚 getter 和 setter 写法与传统写法之间的区别
   需要熟练掌握 getter 和 setter 写法

3. 静态成员
   构造函数本身的成员
      给构造函数身上添加的成员
   使用static关键字定义的成员即静态成员
      若直接写在 class 里面 需要使用 static 修饰符来修饰一下静态成员

4. 字段初始化器 (ES7)
   1). 使用static的字段初始化器，添加的是静态成员
   2). 没有使用static的字段初始化器，添加的成员位于对象上
   3). 箭头函数在字段初始化器位置上，指向当前对象

5. 类表达式
   把 class 视作 function 关键字一样来使用

6. 装饰器 (ES7) Decorator
   没听懂
```

> 在类里面写语句 细节特别多...
>
> 而且本节的 第2点 get 和 set 这一部分 细节也很多...

## 5.6 类的继承

**如何判断继承**

如果两个类A和B，如果可以描述为：B 是 A，则，A和B形成继承关系

如果B是A，则：

1. B继承自A
2. A派生B
3. B是A的子类
4. A是B的父类

> 4 种不同的说法 不过描述的都是一个含义

如果A是B的父类，则B会自动拥有A中的所有实例成员。

- [x] demo

```js
function Animal(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.sex = sex;
}

Animal.prototype.print = function () {
    console.log(`【种类】：${this.type}`);
    console.log(`【名字】：${this.name}`);
    console.log(`【年龄】：${this.age}`);
    console.log(`【性别】：${this.sex}`);
}

function Dog(name, age, sex) {
    Animal.call(this, '犬类', name, age, sex); // 使用 call 关键字 调用 Animal 的构造函数来为自己办事
    // 但是这种方式 仅仅是借助了 Animal 构造函数 并没有实现继承
}

const d = new Dog('旺财', 3, '公');
console.log(d);
```

![20210413205354](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413205354.png)

```js
d.print(); // Uncaught TypeError: d.print is not a function
// 因为 Dog 的原型链上没没有 Animal 所以在 Dog 的实例对象 d 上无法访问 print 函数
```

![20210413210614](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413210614.png)

```
现在要实现一个需求:
    令 Dog.prototype.__proto__ 指向 Animal.prototype

狗是动物 ==> 狗(类)应该继承至动物(类) ==> 对应的原型链如下图所示
```

![20210413215538](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413215538.png)

`直接将 Dog.prototype.__proto 赋值为 Animal.prototype`

```js
Dog.prototype.__proto__ = Animal.prototype;
d.print();
```

`使用 Object.setPrototypeOf 来实现`

```js
Object.setPrototypeOf(Dog.prototype, Animal.prototype);
d.print();
```

```
Object.setPrototypeOf(参数1, 参数2);
让参数1的 隐式原型 指向 参数2
```

![20210413214114](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413214114.png)

```
上面介绍的是两种方式 是在 ES6 之前解决继承的做法
```

**新的关键字：**

- `extends`
  - `继承`，用于类的定义
- `super`
  - 直接当作`函数`调用，表示`父类构造函数`
  - 如果当作`对象`使用，则表示`父类的原型`


**注意**

ES6要求，如果定义了constructor，并且该类是子类，则必须在constructor的第一行手动调用父类的构造函数。

如果子类不写constructor，则会有默认的构造器，该构造器需要的参数和父类一致，并且自动调用父类构造器。

- [x] demo

```js
class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    print() {
        console.log(`【种类】：${this.type}`);
        console.log(`【名字】：${this.name}`);
        console.log(`【年龄】：${this.age}`);
        console.log(`【性别】：${this.sex}`);
    }
}

class Dog extends Animal {
    constructor(name, age, sex) {
        super('犬类', name, age, sex); // 在子类 Dog 的 constructor 的第一行 必须调用父类 Animal 的构造函数
        // super 当做函数来使用时 表示的是 父类构造函数
    }
}

const d = new Dog('旺财', 3, '公');
console.log(d);
d.print();

console.log(d instanceof Animal); // true
```

![20210413215739](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413215739.png)

- [x] demo

`如果子类不写constructor`

```js
class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    print() {
        console.log(`【种类】：${this.type}`);
        console.log(`【名字】：${this.name}`);
        console.log(`【年龄】：${this.age}`);
        console.log(`【性别】：${this.sex}`);
    }
}

class Dog extends Animal {
    // 若子类 Dog 不写 constructor 那么它默认使用的是 父类 Animal 的构造器
    // constructor(type, name, age, sex) {
    //     this.type = type;
    //     this.name = name;
    //     this.age = age;
    //     this.sex = sex;
    // }
}

const d = new Dog('旺财', 3, '公');
console.log(d);
d.print();

console.log(d instanceof Animal); // true
```

![20210413215925](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413215925.png)

```
此时相当于
  第一个参数传递给了 形参type
  第二个参数传递给了 形参name
  第三个参数传递给了 形参age
  最后一个形参 sex 没有接收到对应的实参 值为 undefined
```

- [x] demo

```js
class Animal {
    constructor(type, name, age, sex) {
        if(new.target === Animal) {
            throw new TypeError('你不能直接创建Animal的对象，应该通过子类创建。');
        }
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    print() {
        console.log(`【种类】：${this.type}`);
        console.log(`【名字】：${this.name}`);
        console.log(`【年龄】：${this.age}`);
        console.log(`【性别】：${this.sex}`);
    }

    talk() {
        throw new Error("i don't know how to talk???");
    }
}

class Dog extends Animal {
    constructor(name, age, sex) {
        super('犬类', name, age, sex);
        // 可以自定义子类特有的属性
        this.voice = 'wangwang~~'; // 狗的叫声
        this.love = '母狗';
    }

    print() {
        super.print(); // super 关键字 当做对象来使用时 表示的含义是: 父类的原型 即: Animal.prototype 【并且它会自动将 Animal.prototype.print() 方法中的 this 指向当前实例对象 】
        /* 相当于执行了下面这些代码
        console.log(`【种类】：${this.type}`);
        console.log(`【名字】：${this.name}`);
        console.log(`【年龄】：${this.age}`);
        console.log(`【性别】：${this.sex}`); */
        console.log(`【叫声】：${this.voice}`);
        console.log(`【爱好】：${this.love}`);
    }

    // 也可以定义子类特有的方法 【方法重写 -> 子类中与父类同名方法】
    talk() {
        console.log(this.voice);
    }
}

const d = new Dog('旺财', 3, '公');
d.talk(); // 'wangwang~~'
d.print();
```

![20210413221353](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210413221353.png)

**【冷知识】**

- 用JS制作抽象类
  - 抽象类：一般是父类，不能通过该类创建对象
- 正常情况下，this的指向，this始终指向具体的类的对象

```
比如上面的案例中，Animal 就是一个抽象类。
抽象类 一般就是用来被子类继承的，通常都不会使用它来创建实例对象。
```

## 5.7 [demo]像素鸟

[../../demos/3. 像素鸟](../demos/3.%20像素鸟/index.html)

# 6. 解构

`6. 解构 + 7. 符号 [课程规划与指导]`

| 知识点 | 难度 | 重要性 | 学习视频    | 视频时长(min) | 学习次数 |
| ------ | ---- | ------ | ----------- | ------------- | -------- |
| es6    | 2.5  | 4      | 1. 对象解构 | 16            | 2/1      |
| es6    | 2.5  | 4      | 2. 数组解构 | 18            | 2/1      |
| es6    | 2.5  | 4      | 3. 参数解构 | 9             | 2/1      |
| es6    | 2.5  | 3      | 1. 普通符号 | 38            | 2/1      |
| es6    | 2.5  | 2      | 2. 共享符号 | 10            | 2/1      |
| es6    | 2    | 3      | 3. 知名符号 | 23            | 2/1      |

| 学习时间 | 达成效果                         | 老师建议                                                                                                                               |
| -------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1天      | 掌握解构并能熟练利用解构简化代码 | 这两章的知识都比较简单，但是有些同学不是很适应这种新的语法，导致学习了之后几乎不怎么去用。所以不要大意，仍然要跟着老师把课堂代码写一遍 |

| CN   | EN          |
| ---- | ----------- |
| 解构 | destructure |

**基本操作**

- `使用解构实现两数交换`

`解构数组`

```js{cmd='node'}
let a = 1,
    b = 2;

console.log(a, b);

[a, b] = [b, a];

console.log(a, b);
```

`解构对象`

```js{cmd='node'}
let a = 1,
    b = 2;

console.log(a, b);

({a: b, b: a} = {a, b});

console.log(a, b);
```

## 6.1 对象解构

**什么是解构**

使用ES6的一种语法规则，将一个对象或数组的某个属性提取到某个变量中

- [x] demo

`把对象中的属性给提取出来，放到变量中，方便后续使用。`

```js
// 下面所有 demo 操作的都是该对象
const dahuyou = {
    age: 21,
    sex: '男',
    school: `JQ`,
    address: {
        province: '浙江',
        city: '温州'
    }
}
```

`ES6 之前的做法`

```js
let age, sex, school, address;
age = dahuyou.age;
sex = dahuyou.sex;
school = dahuyou.school;
address = dahuyou.address;

console.log(age, sex, school, address);
console.log(dahuyou.age, dahuyou.sex, dahuyou.school, dahuyou.address);
console.log(
    dahuyou.age === age,
    dahuyou.sex === sex,
    dahuyou.school === school,
    dahuyou.address === address);
```

![20210416200001](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210416200001.png)

- [x] demo

`ES6 提供的语法糖`

```js
// 先定义 4 个变量 age, sex, school, address 然后从对象 dahuyou 中读取同名属性，放到对应的变量中
let age, sex, school, address;
({
    age,
    sex,
    school,
    address
} = dahuyou);
// 拆分开来写的话 需要加上一对小括号 将其转化为表达式 否则语法上会报错
```

- [x] demo

```js
let {
    age,
    sex,
    school,
    address
} = dahuyou;
```

```
将属性名提取出来的目的就是为了之后操作该属性名的时候 方便一些
比如说要操作 dahuyou 身上的 age 属性
不再需要写成 dahuyou.age 来操作它 只需要写 age 就可以了
```

- [x] demo

`解构不会对被解构的目标造成任何影响`

```js
console.log(dahuyou);
```

![20210416200457](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210416200457.png)

**在解构中使用默认值**

```
{同名变量 = 默认值}
```

- [x] demo

```js
let {
    age,
    sex,
    school,
    address,
    love
} = dahuyou;

console.log(love); // undefined
```

```
由于对象 dahuyou 中没找到与 love 变量同名的属性
所以 love 仅声明 未赋值 结果为 undefined
```

- [x] demo

```js
let {
    age,
    sex,
    school,
    address,
    love = 'girl'
} = dahuyou;

console.log(love); // girl
```

```
若解构的对象中没有与之对应的同名属性
也就是有某个变量没有被赋值
若它有默认值 那么将取默认值 否则为 undefined
```

**非同名属性解构**

```
{属性名:变量名}
```

- [x] demo

```js
let {
    age,
    sex: gender, // 将对象中 sex 属性值 赋值给变量 gender
    school,
    address
} = dahuyou;

console.log(age, gender, school, address);
```

![20210416201438](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210416201438.png)

```
等价于:
  先定义了 4 个变量
    age
    gender
    school
    address
  再将对象 dahuyou 解构 其中 sex 属性的值赋值为变量 gender
注意
    写在前面的 是从对象身上的属性名
    写在后面的 才是接收属性值的变量
```

- [x] demo

`非同名属性解构 和 解构中使用默认值 可以同时写`

```js
let {
    age,
    sex: gender = 'male', // 若没找到 sex 属性 那么 gender 会取默认值 male
    school,
    address
} = dahuyou;

console.log(age, gender, school, address);
```

![20210416201438](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210416201438.png)

**深层次解构**

- [x] demo

```js
let {
    age,
    sex,
    school,
    address: {
        province,
        city: City,
        town = 'QK'
    }
} = dahuyou;

console.log(age, sex, school, province, City, town);
```

![20210416201831](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210416201831.png)

```
这么写相当于定义了 6 个变量
  age、sex、school、province、City、town
  前三个变量 age、sex、school 取的是 dahuyou 的“第一层”属性
  后三个变量 province、City、town 取的是 dahuyou 的“第二层”属性 是 dahuyou.address 中的属性 规则不变
```

**小结**

```
知识点很简单 不过新语法会很陌生
把所有demo跟着写一遍 找找感觉
```

## 6.2 数组解构

- [x] demo

`数组本质上也是对象 也可以进行解构 [属性名是 数字]`

```js
const numbers = ['a', 'b', 'c', 'd'];

const {
    0: num1,
    1: num2,
    3: num4,
} = numbers;

console.log(num1, num2, num4); // a b d
console.log(numbers[0], numbers[1], numbers[3]); // a b d
```

- [x] demo

```js
const numbers = ['a', 'b', 'c', 'd'];

let num1, num2, num4;
([num1, num2, , num4] = numbers);

console.log(num1, num2, num4); // a b d
console.log(numbers[0], numbers[1], numbers[3]); // a b d
```

- [x] demo

```js
const numbers = ['a', 'b', 'c', 'd'];

const [num1, num2, , num4] = numbers

console.log(num1, num2, num4); // a b d
console.log(numbers[0], numbers[1], numbers[3]); // a b d
```

- [x] demo

`使用默认值`

```js
const numbers = ['a', 'b', 'c', 'd'];

const [num1, num2, , num4, num5, num6 = 123] = numbers

console.log(num1, num2, num4, num5, num6); // a b d undefined 123
```

- [x] demo

`深层次解构`

```js
const numbers = ['a', 'b', 'c', 'd', [1, 2, 3, 4]];

const [, , , , [, , num3]] = numbers;

console.log(num3); // 3
```

- [x] demo

`非同名属性解构`

```js
const numbers = ['a', 'b', 'c', 'd', {
    a: 'aaa',
    b: 'bbb'
}];

const [, , , , {
    a: A,
    b,
    c: C = 'ccc'
}] = numbers;

console.log(A, b, C); // aaa bbb ccc
```

- [x] demo

```js
const numbers = ['a', 'b', 'c', 'd', {
    a: 'aaa',
    b: 'bbb'
}];

const {
    a: A,
    b,
    c: C = 'ccc'
} = numbers[4];

console.log(A, b, C); // aaa bbb ccc
```

- [x] demo

`展开运算符 + 解构 ==> 用于收集剩余展开成员`

```js
const dahuyou = {
    school: `JQ`,
    age: 21,
    sex: '男',
    address: {
        province: '浙江',
        city: '温州'
    }
}

const {
    age,
    sex,
    ...obj
} = dahuyou; // 除了 age 和 sex 属性以外的其他属性 收集起来放到 变量obj 中

console.log(age, sex, obj, dahuyou);
console.log(obj.address === dahuyou.address); // true
```

![20210416214849](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210416214849.png)

- [x] demo

```js
const numbers = [13, 65, 234, 56, 26];
// 注意: 剩余参数 (剩余项) 必须放在最后
const [num1, num2, ...nums] = numbers; // 数组的前两项 分别放到变量 num1 和 num2 中 其余项组成新数组放到 nums 中

console.log(num1, num2, nums, numbers);
```

![20210416215028](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210416215028.png)

- [x] demo

`使用以前的写法来实现相同的效果`

```js
const numbers = [13, 65, 234, 56, 26];

const num1 = numbers[0],
    num2 = numbers[1],
    nums = numbers.slice(2); // numbers.splice(2);

console.log(num1, num2, nums, numbers);
```

![20210416215028](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210416215028.png)

- [x] demo

`实现两数交换`

```js
let a = 1,
    b = 2;

console.log(a, b); // 1 2

[a, b] = [b, a];

console.log(a, b); // 2 1
```

```
过程分析
    先执行赋值符号右边 得到数组 [2, 1]
    再对右边的数组 [2, 1] 进行解构
    将 2 赋值给变量 a
    将 1 赋值给变量 b
问题: 语法上为啥没报错呢?
    [a, b] = [b, a];
```

- [x] demo

```js
let a = 1,
    b = 2;

console.log(a, b); // 1 2

({
    a: b,
    b: a
} = {
    a,
    b
});

console.log(a, b); // 2 1
```

**作业题**

`要求: 解构出第二条评论的用户名和评论内容 分别存放到变量 name2 和 content2 中`

```js
const article = {
    title: "文章标题",
    content: "文章内容",
    comments: [{
        content: "评论1",
        user: {
            id: 1,
            name: "用户名1"
        }
    }, {
        content: "评论2",
        user: {
            id: 2,
            name: "用户名2"
        }
    }]
};
```

- [x] demo

`方式1`

```js
const {
    content: content2,
    user: {
        name: name2,
    }
} = article.comments[1]; // 此时解构的是一个对象

console.log(name2, content2); // 用户名2 评论2
```

- [x] demo

`方式2`

```js
const [, {
    content: content2,
    user: {
        name: name2
    }
}] = article.comments; // 此时解构的是一个数组

console.log(name2, content2); // 用户名2 评论2
```

- [x] demo

`方式3`

```js
const {
    comments: [, {
        content: content2,
        user: {
            name: name2
        }
    }]
} = article; // 此时解构的是一个对象

console.log(name2, content2); // 用户名2 评论2
```

**小结**

```
所有demo跟着写一遍
最后的作业题 3种方式 都要会写
```

## 6.3 参数解构

参数解构是解构最多的应用场景，尤其在那些配置参数很多的情况下。

- [x] demo

```js
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
```

![20210417004425](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417004425.png)

- [x] demo

`解构函数的参数 方便函数内部调用`

```js
function print({
    name,
    age,
    sex,
    school,
    address: {
        province,
        city
    }
}) {
    console.log(`姓名: ${name}`);
    console.log(`年龄: ${age}`);
    console.log(`性别: ${sex}`);
    console.log(`学校: ${school}`);
    console.log(`省份: ${province}`);
    console.log(`城市: ${city}`);
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
```

![20210417004425](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417004425.png)

- [x] demo

`对象混合 -> 默认参数配置`

```js
function ajax(options) {
    const defaultOptions = {
        method: 'get',
        url: '/'
    }
    // 对象混合
    const opt = {
        ...defaultOptions,
        ...options
    };
    console.log(opt);
}

ajax({
    url: '/abc'
});
```

![20210417005524](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417005524.png)

```js
ajax();
```

![20210417005653](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417005653.png)

```
undefined 展开 不会报错 但是 啥也没有
```

- [x] demo

`参数解构 -> 默认参数配置`

`直接将默认的配置信息 写在 解构的参数中`

```js
function ajax({
    method = 'get', // 等价于: method: method = 'get'
    url = '/' // 等价于: url: url = '/'
}) {
    console.log(method, url);
}

ajax({
    url: '/abc'
});
```

![20210417005524](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417005524.png)

`若解构的是 undefined 或 null 那么会报错`

```js
function ajax({
    method = 'get',
    url = '/'
}) {
    console.log(method, url);
}

ajax();
```

![20210417010554](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417010554.png)

```
注意:
  这里写程序的和袁老师视频讲解的一模一样 但是报错信息有所不同

袁老师的报错信息如下:
  Uncaught TypeError: Cannot destructure property `method` of `undefined` or `null`.
```

**小结**

```
同上 所有demo跟写一遍 理解起来都很简单, 在封装 ajax 的时候, 试着用过 参数解构, 实现默认参数配置的功能
```

`ajax的简单封装`

```js
/**
 * 辅助函数, 把传进来的对象拼接成 url 的字符串返回
 * @param {Object} data 请求的数据
 */
 function toData(data, appkey = '&appkey=_abc123_1606358542486') {
    if (data === null || typeof data !== 'object') {
        return data + appkey;
    } else {
        let arr = [];
        for (const prop in data) {
            let str = `${prop}=${data[prop]}`;
            arr.push(str);
        }
        return arr.join('&') + appkey;
    }
}

/**
 * 创建 XMLHttpRequest 对象
 */
function createXMLHttpRequest() {
    let xhr = null;
    if (window.XMLHttpRequest) { // 非IE浏览器
        xhr = new XMLHttpRequest();
    } else { // IE浏览器
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhr;
}


/**
 * 使用 XMLHttpRequest 实现 ajax
 * @param {object} param0 配置对象
 * @param {String} method 请求方式
 * @param {String} url 请求地址
 * @param {Boolean} async 是否异步
 * @param {Object} data 请求的数据
 * @param {String} dataType 请求的数据类型
 * @param {Function} beforeSend 发送请求前做的一些事儿
 * @param {Function} success 请求成功的回调函数
 * @param {Function} error 请求失败的回调函数
 */
function ajax({
    method = 'GET',
    url = '',
    async = true,
    data = null,
    dataType = 'json', // 不知道有什么用
    beforeSend = function () {},
    success = function () {},
    error = function () {},
}) {
    const xhr = createXMLHttpRequest();

    beforeSend();

    // 注册好用于接收返回的数据的事件处理函数
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                success(JSON.parse(xhr.responseText));
            } else {
                error(xhr.status);
            }
        }
    }

    // 依据不同的请求方式 (get/post) 发出 http 请求
    method = method.toUpperCase();
    data = toData(data);
    if (method === 'GET') {
        xhr.open(method, `${url}?${data}`, async);
        xhr.send();
    } else if (method === 'POST') {
        xhr.open(method, url, async);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencode');
        xhr.send(data);
    }
}
```

```
PS: 这个 ajax 函数是在 学生信息管理系统的项目 中封装的
```

# 7. 符号

**思考以下几个问题**

- [x] 符号是什么? `[答] 符号是ES6新增的一个基本数据类型, 它没有字面量形式, 而且只能通过调用函数 Symbol(符号描述) 来创建`
- [x] 共享符号是什么? `[答] 由 Symbol.for(符号描述) 创建的符号, 若传入相同的符号描述, 得到的是同一个符号`
- [x] 知名符号是什么? `[答] 官方定义好的一些共享符号, 通过 Symbol 的静态属性可以获取到, 比如 Symbol.iterator、Symbol.hasInstance 等等。ES6 提供知名符号的初衷, 可以理解为是为了暴露底层实现, 减少 ES 这门语言的魔法。`
- [x] 符号描述是什么? `[答] 符号描述就是对当前符号的一些描述信息, 在创建符号的同时, 以字符串的形式作为创建一个符号的参数传入`
- [x] 设计符号的初衷是什么? `[答] 符号设计的初衷是为了给对象设置私有成员`
- [x] 如何检测一个变量的数据类型是否是符号类型? `[答] 可以使用 typeof 关键字来检测, 若得到的结果是 "symbol" 那么表示该数据类型是符号类型`
- [x] 如何模拟共享符号的实现原理 封装一个 `symbolFor()` 方法? `[答] 见基本操作...`
- [x] 怎么创建一个符号? `[答] 创建一个普通符号: Symbol(符号描述); 共享符号: Symbol.for(符号描述);`
- [x] 对象的属性名可以是哪些数据类型? `[答] 字符串 或 符号`
- [x] 两次调用 `Symbol()` 并且传入相同的符号描述，试问这样的两个符号是否相同？ `[答] 不同`
  - [x] 若调用的不是 `Symbol()` 而是 `Symbol.for()`，试问这样的两个符号是否相同？ `[答] 相同`
- [x] for-in 循环是否可以获取到对象身上的符号属性? `[答] 不可以`
- [x] 下面哪个 api 可以获取到符号属性?
  - `Object.keys(对象)`
  - `Object.getOwnPropertyNames(对象)`
  - `Object.getOwnPropertySymbols(对象)` `[答] √`
- [x] 符号是否可以发生隐式类型转换？ `[答] 不可以`
- [x] 符号是否可以显示的转为字符串类型？ `[答] 可以`

**基本操作**

- `仿造 Symbol.for() 的功能 手写一个 SymbolFor() 函数`

```js{cmd='node'}
const SymbolFor = (() => {
    const global = {}; // 注册表
    return (des) => {
        if (global[des]) {
            return global[des];
        } else {
            global[des] = Symbol(des);
            return global[des];
        }
    }
})();

const syb1 = SymbolFor('dahuyou');
const syb2 = SymbolFor('dahuyou');

console.log(syb1 === syb2);
```

```
Symbol.for() 的内部实现原理和上述代码实际上非常类似, 都是整一个注册表来实现的, 只不过 ES6 提供了“全局符号注册表”。内部实际上创建的依旧是普通函数, 但是在返回普通函数之前, 对我们传入的符号描述做了一个判断, 若我们传入的符号描述在注册表中已经存在, 那么直接将注册表中的值返回给我们即可, 若不存在, 则往注册表中添加一组新的键值对
```

## 7.1 普通符号

**什么是符号：**

符号是ES6新增的一个数据类型，它只能通过 调用函数 ```Symbol(符号描述)``` 来创建

符号设计的初衷，是为了给对象设置私有成员

- [x] demo

```js
const syb1 = Symbol();
const syb2 = Symbol('abc');

console.log(syb1, syb2);
console.log('dahuyou');
```

![20210417100631](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417100631.png)

```
注意:
  符号是一种新的数据类型 它并非字符串
  注意控制台打印的符号的颜色 和 字符串的颜色
```

**私有成员：**

只能在对象内部使用，外面无法使用

- [x] demo

```js{cmd='node'}
const hero = {
    attack: 30, // 攻击力
    defence: 10, // 防御力
    hp: 300, // 血量
    /**
     * 攻击方法 -> 攻击造成的伤害值介于攻击力的 0.8 ~ 1.1 倍之间
     */
    gongji() {
        const dmg = this.attack * this.getRandom(0.8, 1.1); // 伤害值
        console.log(dmg);
    },

    /**
     * 获取一个介于最小值与最大值之间的随机小数
     * @param {Number} min 最小值
     * @param {Number} max 最大值
     * @returns
     */
    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
}

hero.gongji();
const r = hero.getRandom(); // getRandom() 被暴露出来了 所以可以直接调用
console.log(r);
/* 在这个案例中 为了不让 getRandom 方法暴露出来
将它丢到 gongji() 方法中就可以了 但是这么做的话 也存在很多问题
  1. 每一次调用 hero.gongji() 就会新创建一个函数 getRandom() 影响性能;
  2. 倘若 hero 对象又多了一个成员方法 defence 而这个成员方法 defence 也需要调用 getRandom 那... 可能又得把 getRandom 复制一份到 defence 中; 冗余度太高 */
```

```
需求描述
    这个 hero 英雄对象中 getRandom 方法仅仅是为了实现内部功能 (攻击方法)
    对于这样的成员 我们通常都希望将它设置为对象身上的私有属性 不让它暴露出来
传统方式
    对于这样的需求 传统方式是实现不了的 之前的 JS 在对象身上写的所有的成员 都会暴露出来
    很多 JS 的第三方库 对于这样的需求 它们采取的措施大多都是
    给那些不希望被用户访问的对象身上的私有属性命名时 添加特殊符号作为前缀
ES6 的实现方式
    使用新增的数据类型 Symbol 即可实现
```

- [x] demo

```js{cmd='node'}
class Hero {
    constructor(attack, defence, hp) {
        this.attack = attack;
        this.defence = defence;
        this.hp = hp;
    }

    gongji() {
        const dmg = this.attack * this.getRandom(0.8, 1.1);
        console.log(dmg);
    }

    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
}

const hero = new Hero(30, 10, 300);
hero.gongji();
const r = hero.getRandom(1, 2);
console.log(r);
```

```
同样的道理 我们想让 通过英雄类所创建的实例对象身上无法访问 getRandom 成员
使用传统的方式 依旧办不到...
如果把 getRandom 丢到全局中 看似可以实现当前的需求 (因为 该方法里没有使用 this.*** )
但是若一个成员方法 fun 这个成员方法 也希望被设置为私有成员 而且 这个方法中使用了 this.***
那再把这个方法也丢到全局中 那显然就不合适了 因为每次调用的时候 我们还得考虑 this 的问题 还要重新绑定 this 的指向
```

**符号具有以下特点：**

- 没有字面量 `JavaScript 的所有数据类型中 只有符号具备这个特点`
- 使用 typeof 得到的类型是 `"symbol"` `typeof 可用于检测数据类型是否是 Symbol`
- **每次调用 Symbol 函数得到的符号永远不相等，无论 符号描述 是否相同**
- 符号可以作为对象的属性名存在，这种属性称之为符号属性 `在 Symbol 出现之前 对象的属性名 一定是字符串 但是有了 Symbol 之后 对象的属性名 还可以是 symbol 类型`
  - 开发者可以通过精心的设计，让这些属性无法通过常规方式被外界访问
  - 符号属性是不能枚举的，因此在 for-in 循环中无法读取到符号属性，Object.keys 方法也无法读取到符号属性
  - Object.getOwnPropertyNames 尽管可以得到所有无法枚举的属性，但是仍然无法读取到符号属性
  - ES6 新增 Object.getOwnPropertySymbols 方法，可以读取符号
- 符号无法被隐式转换，因此不能被用于数学运算、字符串拼接或其他隐式转换的场景，但符号可以显式的转换为字符串，通过 String 构造函数进行转换即可，console.log 之所以可以输出符号，是因为它在内部进行了显式转换

- [x] demo

`每次调用 Symbol 函数得到的符号永远不相等，无论 符号描述 是否相同`

`使用 typeof 得到的类型是 symbol`

```js{cmd='node'}
const syb1 = Symbol('123');
const syb2 = Symbol('123');

console.log(syb1); // Symbol(123)
console.log(typeof syb1 === 'symbol'); // true
console.log(syb1 === syb2); // false
```

- [x] demo

`符号属性无法被枚举`

```js{cmd='node'}
const syb1 = Symbol('dahuyou');

const obj = {
    a: 1,
    b: 2,
    [syb1]: 'hahaha' // 可计算的属性名
};

console.log(obj);

for (const prop in obj) {
    console.log(prop);
}

console.log(obj[syb1]); // 因为此时 syb1 是一个全局变量 我们可以访问到这个全局变量 所以我们可以通过它来读取到符号属性 syb1 的属性值 'hahaha'
```

- [x] demo

`开发者可以通过精心的设计，让这些属性无法通过常规方式被外界访问`

```js
const hero = (function () {
    const getRandom = Symbol();
    return {
        attack: 30, // 攻击力
        defence: 10, // 防御力
        hp: 300, // 血量
        gongji() {
            const dmg = this.attack * this[getRandom](0.8, 1.1);
            console.log(dmg);
        },

        [getRandom](min, max) {
            return Math.random() * (max - min) + min;
        }
    }
})(); // 学了模块化之后 就不需要再使用 立即执行函数了

hero.gongji();
hero.getRandom(); // 会报错
```

![20210417110156](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417110156.png)

```js
hero[getRandom]; // Uncaught ReferenceError: getRandom is not defined
```

```
在定义一个对象的时候, 借助立即执行函数来返回一个对象, 在立即执行函数中即可定义 符号 类型的变量, 在使用可计算的属性名, 来设置指定的对象成员 (私有成员) 即可
```

`即便符号描述相同 也不是同一个符号`

```js
const getRandom = Symbol(); // 和立即执行函数中定义的 getRandom 并不相同
const r = hero[getRandom];
console.log(r); // undefined 访问一个对象身上不存在的属性 得到的是 undefined
```

- [x] demo

```js
const Hero = (() => {
    const getRandom = Symbol();
    return class { // 返回一个类表达式
        constructor(attack, defence, hp) {
            this.attack = attack;
            this.defence = defence;
            this.hp = hp;
        }

        gongji() {
            const dmg = this.attack * this[getRandom](0.8, 1.1);
            console.log(dmg);
        }

        [getRandom](min, max) {
            return Math.random() * (max - min) + min;
        }
    }
})();

const hero = new Hero(30, 10, 300);
hero.gongji();

console.log(hero);

const r = hero.getRandom(1, 2);
console.log(r);
```

![20210417111021](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417111021.png)

- [x] demo

`获取符号属性`

- **无法获取** `Object.keys(对象) 获取的是指定对象身上所有可枚举的属性名数组 而 符号属性不可枚举`
- **无法获取** `Object.getOwnPropertyNames(对象) 既可以获取到正常的属性 也可以获取到对象身上不可枚举的属性 但是它也无法得到 符号属性`
- **可以获取** `Object.getOwnPropertySymbols(对象) 可以获取到对象身上所有的符号属性组成的数组`

```js{cmd='node'}
const syb = Symbol();

const obj = {
    a: 1,
    b: 2,
    [syb]: 3
}

for (const prop in obj) {
    console.log(prop);
}

console.log('Object.keys(obj) ==> ', Object.keys(obj));
console.log('Object.getOwnPropertyNames(obj) ==> ', Object.getOwnPropertyNames(obj));
console.log('Object.getOwnPropertySymbols(obj) ==> ', Object.getOwnPropertySymbols(obj));
console.log(Object.getOwnPropertySymbols(obj)[0] === syb);
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
```

- [x] demo

`暴力获取 Symbol 符号成员`

```js{cmd='node'}
const Hero = (() => {
    const getRandom = Symbol();
    return class { // 返回一个类表达式
        constructor(attack, defence, hp) {
            this.attack = attack;
            this.defence = defence;
            this.hp = hp;
        }

        gongji() {
            const dmg = this.attack * this[getRandom](0.8, 1.1);
            console.log(dmg);
        }

        [getRandom](min, max) {
            return Math.random() * (max - min) + min;
        }
    }
})();

const hero = new Hero(30, 10, 300);
hero.gongji();

console.log(hero);

const sybs = Object.getOwnPropertySymbols(hero.__proto__); // hero.__proto__ === Hero.prototype
console.log(sybs);
console.log(hero[sybs[0]](1, 2));
```

- [x] demo

`Symbol 不会发生隐式类型转换 但可以显示的转换为字符串类型`

```js
const syb = Symbol();
```

![20210417113032](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417113032.png)

> syb.toString() 也可以实现转换

**小结**

```
Symbol() -> 用来设置不想被用户访问的成员
```

## 7.2 共享符号

根据某个符号名称（符号描述）能够得到同一个符号

```js
Symbol.for("符号名/符号描述")  //获取共享符号
```

- [x] demo

```js
console.log(Symbol() === Symbol()); // false
console.log(Symbol('dahuyou') === Symbol('dahuyou')); // false
console.log(Symbol.for() === Symbol.for()); // true
console.log(Symbol.for('dahuyou') === Symbol.for('dahuyou')); // true
```

```
普通符号 和 共享符号 的区别
    创建方式上的区别
        1. 普通符号 Symbol('符号描述')
        2. 共享符号 Symbol.for('符号描述')
    是否表示同一个符号?
        1. 普通符号 即便符号描述相同 它们都不是同一个符号
        2. 共享符号 符号描述相同的符号 它们表示的就是同一个符号
```

- [x] demo

`普通符号 Symbol()`

```js
const Hero = (() => {
    const getRandom = Symbol();
    return class { // 返回一个类表达式
        constructor(attack, defence, hp) {
            this.attack = attack;
            this.defence = defence;
            this.hp = hp;
        }

        gongji() {
            const dmg = this.attack * this[getRandom](0.8, 1.1);
            console.log(dmg);
        }

        [getRandom](min, max) {
            return Math.random() * (max - min) + min;
        }
    }
})();

const hero = new Hero();

console.log(hero[Symbol()](1, 2));
```

![20210417122733](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417122733.png)

- [x] demo

`共享符号 Symbol.for()`

```js
const Hero = (() => {
    const getRandom = Symbol.for();
    return class { // 返回一个类表达式
        constructor(attack, defence, hp) {
            this.attack = attack;
            this.defence = defence;
            this.hp = hp;
        }

        gongji() {
            const dmg = this.attack * this[getRandom](0.8, 1.1);
            console.log(dmg);
        }

        [getRandom](min, max) {
            return Math.random() * (max - min) + min;
        }
    }
})();

const hero = new Hero();

console.log(hero[Symbol.for()](1, 2));
```

![20210417122738](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417122738.png)

- [x] demo

`模拟共享符号的实现原理`

```js
const SymbolFor = (() => {
    const global = {}; // 用于记录 共享符号
    return (des) => { // des 为符号描述
        if (global[des]) { // 若 该符号描述已经被记录到 global 中 那么直接返回它的值
            return global[des];
        } else { // 若 该符号是新的符号 那么将它保存到 global 中 再返回
            global[des] = Symbol(des);
            return global[des];
        }
    }
})();

const syb1 = SymbolFor('dahuyou');
const syb2 = SymbolFor('dahuyou');
console.log(syb1 === syb2); // true
console.log(SymbolFor() === SymbolFor()); // true
```

**小结**

```
共享符号 ==> Symbol.for()
```

## 7.3 知名符号

**知名符号是什么？**

知名符号是一些具有特殊含义的**共享符号**，通过 Symbol 的静态属性得到，不同的知名符号的含义有所不同。

ES6 延续了 ES5 的思想：减少魔法，暴露内部实现！`这可以理解为是设计知名符号的初衷`

因此，ES6 用知名符号暴露了某些场景的内部实现

```
魔法 指的是之前一些怪异的我们无法理解的行为
魔法越多 语言越不规范
减少魔法 意思就是 暴露出之前一些很奇怪的行为 的内部原理
并且我们可以自行操作
```

**介绍几个知名符号，认识一下它们都是干啥的**

- `Symbol.hasInstance`

该符号用于定义构造函数的静态成员，它将影响 instanceof 的判定

```js
obj instanceof A; // 构造函数 A 的原型 A.prototype 是否存在于 对象 obj 的原型链上
// 等效于下面这种写法
A[Symbol.hasInstance](obj) // Function.prototype[Symbol.hasInstance]
```

- [x] demo

```js
function A() {

}
const obj = new A();
console.log(obj instanceof A); // true
console.log(A[Symbol.hasInstance](obj)); // true
```

```js
function A() {

}

A[Symbol.hasInstance] = function () {
    return false;
}

const obj = new A();
console.log(obj instanceof A); // true
console.log(A[Symbol.hasInstance](obj)); // true
```

```
注意:
    Function.prototype[Symbol.hasInstance]
    该成员有一个特性 无法被改写
    所以我们通过上面这种给它 重新赋值的方式对它进行改写 是无效的
不过对于这样无法改写的成员 我们还可以通过 Object.defineProperty() 这个api来操作它们
```

```js
function A() {

}

Object.defineProperty(A, Symbol.hasInstance, {
    value() {
        return false;
    }
});

const obj = new A();
console.log(obj instanceof A); // false
console.log(A[Symbol.hasInstance](obj)); // false
```

> 下面介绍的都是一些拓展知识 了解了解即可 开发中也提供不了啥实质性的帮助

- [扩展] `Symbol.isConcatSpreadable`

该知名符号会影响数组的 concat 方法

- [x] demo

```js
const arr = [3];

const newArr = arr.concat(56);

console.log(arr, newArr);
```

![20210417130811](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417130811.png)

```js
const arr = [3];
const arr2 = [5, 6, 7, 8];
const newArr = arr.concat(56, arr2);

console.log(arr, newArr);
```

![20210417130918](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417130918.png)

```
若 concat 方法的某个参数具有 length 属性 那么它将被分割
所以 newArr 的结果不会是 [3, 56, [5, 6, 7, 8]]
```

```js
const arr = [3];
const arr2 = [5, 6, 7, 8];

// arr2[Symbol.isConcatSpreadable] = true; // true 是默认值 表示会分割
arr2[Symbol.isConcatSpreadable] = false; // false 表示不会分割

const newArr = arr.concat(56, arr2);

console.log(arr); // [3]
console.log(newArr); // [3, 56, [5, 6, 7, 8]]
```

![20210417131336](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417131336.png)

- [x] demo

`作用于对象`

```js
const arr = [3];
const obj = {
    0: 'dahuyou0', // 根据索引来确定这一项是第几项
    1: 'dahuyou1',
    length: 2 // 会根据 length 属性的属性值来确定分割多少项
};

// obj[Symbol.isConcatSpreadable] = false; // 对于对象而言 该知名符号所对应的成员属性的默认值是 false 表示不会分割
obj[Symbol.isConcatSpreadable] = true; // 我们可以将其重写为 true 让它可以被分割

const newArr = arr.concat(4, obj);

console.log(newArr);
```

![20210417132024](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417132024.png)

```js
const arr = [3];
const obj = {
    0: 'dahuyou0',
    1: 'dahuyou1',
    3: 'dahuyou3',
    length: 4 // 共分割为 4 份 其中第三份 也就是索引为 2 的那份 是 empty
};

obj[Symbol.isConcatSpreadable] = true;

const newArr = arr.concat(4, obj);

console.log(newArr);
```

![20210417132143](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417132143.png)

- [扩展] `Symbol.toPrimitive`

该知名符号会影响类型转换的结果

- [x] demo

```js
const obj = {
    a: 1,
    b: 2
};

console.log(obj + 3); // [object Object]3
console.log(obj * 3); // NaN

/* obj + 3 和 obj * 3 都会发生下面两个步骤
1. 先调用 obj身上的 valueOf 方法 obj.valueOf()
2. 再调用 obj身上的 toString 方法 obj.valueOf().toString() */
```

```js
const obj = {
    a: 1,
    b: 2
};

obj[Symbol.toPrimitive] = () => { // 这个知名符号对应的成员可以被编辑 直接给它赋值即可
    return 'dahuyou'
}

console.log(obj + 3); // dahuyou3
console.log(obj * 3); // NaN
```

- [x] demo

```js
class Temperature {
    constructor(degree) {
        this.degree = degree;
    }
}

const t = new Temperature(30);

console.log(t + '!'); // [object Object]!
console.log(t / 2); // NaN
console.log(String(t)); // [object Object]
```

```js
class Temperature {
    constructor(degree) {
        this.degree = degree;
    }

    [Symbol.toPrimitive](type) {
        console.log(type);
    }
}

const t = new Temperature(30);

console.log(t + '!'); // default undefined!
console.log(t / 2); // number NaN
console.log(String(t)); // string undefined
```

```js
class Temperature {
    constructor(degree) {
        this.degree = degree;
    }

    [Symbol.toPrimitive](type) {
        if(type === 'default'){
            return this.degree + '℃';
        }
        if(type === 'number'){
            return this.degree;
        }
        if(type === 'string'){
            return String(this.degree);
        }
    }
}

const t = new Temperature(30);

console.log(t + '!');
console.log(t / 2);
console.log(String(t));
```

![20210417133725](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417133725.png)

- [扩展] `Symbol.toStringTag`

该知名符号会影响 Object.prototype.toString 的返回值

- [x] demo

```js
class Person {

};

const p = new Person();

const arr = [1, 3, 4];

console.log(Object.prototype.toString.apply(p)); // [object Object]
console.log(Object.prototype.toString.apply(arr)); // [object Array]
```

```js
class Person {

    [Symbol.toStringTag] = 'Person';
};

const p = new Person();

const arr = [1, 3, 4];

arr[Symbol.toStringTag] = 'dahuyou';

console.log(Object.prototype.toString.apply(p)); // [object Person]
console.log(Object.prototype.toString.apply(arr)); // [object dahuyou]
```

- 其他知名符号

...

**小结**

```
通过知名符号 我们可以控制底层的一些行为
```

# 8. 异步处理

参考文章: [async 函数的含义和用法 (阮一峰的网络日志)](http://www.ruanyifeng.com/blog/2015/05/async.html)

`8. 异步处理 [课程规划与指导]`

| 知识点 | 难度 | 重要性 | 学习视频                           | 视频时长(min) | 学习次数 |
| ------ | ---- | ------ | ---------------------------------- | ------------- | -------- |
| es6    | 3.5  | 5      | 8-0. [回顾]事件循环.mp4            | 71            | 3/2      |
| es6    | 3.5  | 4      | 1. 事件和回调函数的缺陷            | 39            | 3/2      |
| es6    | 3    | 5      | 2. 异步处理的通用模型              | 23            | 3/2      |
| es6    | 3    | 5      | 3. Promise的基本使用               | 38            | 3/2      |
| es6    | 4    | 4      | 4. Promise的串联                   | 57            | 3/2      |
| es6    | 4    | 4      | 5. Promise的其他api                | 31            | 3/2      |
| es6    | 5    | 2.5    | 6. [扩展]手写Promise - 状态控制    | 18            | 3/1      |
| es6    | 5    | 2.5    | 6. [扩展]手写Promise - 后续处理    | 17            | 3/1      |
| es6    | 5    | 2.5    | 6. [扩展]手写Promise - 串联Promise | 15            | 3/1      |
| es6    | 5    | 2.5    | 6. [扩展]手写Promise - 其他API     | 12            | 3/1      |
| es6    | 4    | 5      | 7. async和await                    | 42            | 3/2      |

| 学习时间 | 达成效果                                        | 老师建议                                                                                                                                                          |
| -------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2天      | 学会在异步场景中使用Promise学会使用async和await | 这一章的知识难度比较高，同时又非常的重要，很多课都需要重复的观看并练习，千万不要急于求成如果普通课程看起来都比较吃力，不建议看本章的扩展，先理解它的API是最重要的 |

**思考以下几个问题**

- [x] `const pro2 = pro1.then()` pro1.then() 返回的 pro2 一开始一定是 pending 状态吗? `答: √, 因为 pro1.then() 的then方法中的代码是异步执行的, 所以 给 pro2 赋值的操作 一定会先于 then方法中的异步代码执行(即: 在pro1.then()有处理结果之前, 就得 pro2 进行了赋值), 而 pro2 被推向 settled 阶段必须要等到前一个 promise 即: pro1, 有了处理结果之后`

**注意**

```
ES 的 Promise 规范好像更新了 这就导致了一个问题 ==> 有一些输出结果和老师的会对不上
尤其是 resolved 和 fulfilled 这两个状态值的问题

Promise A+ 规范中 resolved 被改为 fulfilled ==> 在学习过程中 暂且先将它们看作是同一个东西即可
```

**字节面试题**

```js{cmd='node'}
console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

new Promise(resolve => {
    console.log(3);
    resolve();
}).then(() => {
    console.log(4);
});

console.log(5);

/*
1
3
5
4
2
*/
```

## 8.0 [回顾]事件循环

**回答以下几个问题**

- [x] 什么是 EventLoop?
- [x] 什么是 call stack?
- [x] 什么是 event queue?
- [x] 什么是 宿主环境?
- [x] 什么是 异步函数?
- [x] 浏览器宿主环境共有几个线程?
- [ ] 浏览器的各个线程分别负责什么工作?

**理解异步程序**

- [x] demo

```js
console.log('a'); // 同步

const timer = setInterval(() => {
    console.log('b'); // 异步
    clearInterval(timer); // 异步
}, 0);

console.log('c'); // 同步
```

![20210417153421](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417153421.png)

- [x] demo

```js
console.log('a'); // 同步

const timer = setInterval(() => {
    console.log('b'); // 异步
    clearInterval(timer); // 异步
}, 0);

for (let i = 0; i < 1000; i++) {
    console.log('c'); // 同步
}
```

![20210417153603](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417153603.png)

```
同步程序 VS 异步程序
    JS程序由上至下依次执行
    若执行到同步程序 那么会将它直接丢到 call stack(执行栈) 中等待 JS 引擎执行
    若执行到异步程序 那么该异步程序会先被丢到 event queue(事件队列) 排队, 等待被 call stack(执行栈) 调用, 只有当 call stack(执行栈) 中的内容为空时, call stack 才会去 event queue(事件队列) 中取东西来等待 JS引擎 执行
小结:
    1. 同步程序 一定比 异步程序 先执行
    2. 异步程序若要执行 必定会经过 event queue (事件队列) 并且 事件队列中的程序 必定要等到 call stack 为空时 才会被取出执行

PS: 这些关键性的名词 有很多叫法 理解概念更重要
    比如: 事件队列 也叫 任务队列
```

**宿主环境**

JS (ES) 运行的环境称之为宿主环境。

```
更合理的说法应该是 ES 可以运行在很多宿主环境中
当 ES 运行在 浏览器这一宿主环境中时 就是 JavaScript
当 ES 运行在 服务器端这一宿主环境中时 就是 NodeJS
ES 还有其他很多的宿主环境 其中也包括客户端 比如 vscode 这款编辑器就是使用 JavaScript 来写的
    让 ES 在不同的宿主环境中运行 只要提供好对应的 引擎 就OK
这门课更多学习的是 ES6 学习的是 ES 是语言本身 而仅不限于某个宿主环境
```

![20210510082417](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210510082417.png)

**执行栈 call stack**

执行栈：call stack，它是一个数据结构，用于存放各种函数的执行环境，每一个函数执行之前，它的相关信息会加入到执行栈。函数调用之前，创建执行环境，然后加入到执行栈；函数调用之后，销毁执行环境。

JS引擎永远执行的是执行栈的最顶部。

```
1. JS程序的执行 只会创建一个执行栈
2. JS程序的执行 首先会创建一个 全局上下文 (也叫全局的执行环境) 这个全局上下文会被 push 到 call stack 中 它位于 call stack 的栈底 最先如栈 最后出栈
3. 函数在执行之前 会创建一个与之对应的上下文 然后 push 到 call stack 中 执行完后 该上下文被销毁 pop
4. JS引擎 执行的始终都是栈顶的那个上下文
5. 程序执行完后 全局的执行上下文 pop

全局上下文: global context
函数的局部上下文: execution context
```

- [x] demo

```js{cmd='node'}
function a() {
    console.log('a');
    b();
}

function b() {
    console.log('b');
    c();
}

function c() {
    console.log('c');
}

console.log('global');
a();
```

```
简单分析 call stack 的变化
1. push global context ==> 全局上下文入栈
   push log 的 execution context ==> log的上下文入栈
   pop log 的 execution context ==> log的上下文出栈
2. push a 的 execution context ==> a的上下文入栈
3. push log 的 execution context ==> log的上下文入栈
4. pop log 的 execution context ==> log的上下文出栈
5. push b 的 execution context ==> b的上下文入栈
6. push log 的 execution context ==> log的上下文入栈
7. pop log 的 execution context ==> log的上下文出栈
8. push c 的 execution context ==> c的上下文入栈
9. push log 的 execution context ==> log的上下文入栈
10. pop log 的 execution context ==> log的上下文出栈
11. pop c 的 execution context ==> c的上下文出栈
12. pop b 的 execution context ==> b的上下文出栈
13. pop a 的 execution context ==> a的上下文出栈
14. pop global context ==> 全局的上下文出栈

小结: 3个函数的入栈和出栈的先后顺序
    函数a先执行 a还没执行完 函数b入栈 b还没执行完 函数c入栈
    函数c最先执行完 函数c出栈 ==> 函数b执行完 函数b出栈 ==> 函数a执行完 函数a出栈
    入栈顺序: 函数a -> 函数b -> 函数c
    出栈顺序: 函数c -> 函数b -> 函数a

视频: 13min -> 20min
```

- [x] demo

```js
function a() {
    b();
    console.log('a');
}

function b() {
    c();
    console.log('b');
}

function c() {
    console.log('c');
}

console.log('global');
a();
```

![20210417154833](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417154833.png)

- [x] demo

`递归 - 斐波拉切数列`

```js
/**
 * 获取斐波拉切数列的第n位
 * @param {Number} n
 */
function getFeibo(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return getFeibo(n - 1) + getFeibo(n - 2);
}

console.log(getFeibo(4)); // 3
```

![20210417161507](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417161507.png)

```
这个案例用来理解递归 特别合适 该程序的执行流程 必须得明明白白
可以先自己在纸上画一个执行栈 然后一步一步的执行 一步一步的分析
也可以结合控制台来看看自己的分析是否正确 或者 回看视频 19min -> 30min

简单分析 call stack 的变化
1. push global context ==> 全局上下文入栈
2. push getFeibo 的 execution context (n === 4) ==> getFeibo 的上下文入栈 此时 n 等于 4
接下来计算 geiFeibo(4)
    3. push getFeibo 的 execution context (n === 3) ==> getFeibo 的上下文入栈 此时 n 等于 3
    接下来计算 getFeibo(3)
        4. push getFeibo 的 execution context (n === 2) ==> getFeibo 的上下文入栈 此时 n 等于 2
        接下来计算 getFeibo(2)
            5. pop getFeibo 的 execution context (n === 2) ==> getFeibo 的上下文出栈 此时 n 等于 2 ==> 返回 1
            得到 getFeibo(2) 的结果 ==> 1
        6. push getFeibo 的 execution context (n === 1) ==> getFeibo 的上下文入栈 此时 n 等于 1
        接下来计算 getFeibo(1)
            7. pop getFeibo 的 execution context (n === 1) ==> getFeibo 的上下文出栈 此时 n 等于 1 ==> 返回 1
            得到 getFeibo(1) 的结果 ==> 1
    得到 getFeibo(3) 的结果 2
    8. push getFeibo 的 execution context (n === 2) ==> getFeibo 的上下文入栈 此时 n 等于 2
    接下来计算 getFeibo(2)
        9. pop getFeibo 的 execution context (n === 2) ==> getFeibo 的上下文出栈 此时 n 等于 2 ==> 返回 1
        得到 getFeibo(2) 的结果 ==> 1

... 这个动态过程实在不好描述 还是动手画一画吧 结合视频进行验证 自己的分析过程是否正确 理解了即可

这个分析过程 和 二叉树的遍历很相似
```

`入栈顺序`

![20210425182426](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210425182426.png)

`出栈顺序`

![20210425182520](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210425182520.png)

**异步函数**

异步函数：某些函数不会立即执行，需要等到某个时机到达后才会执行，这样的函数称之为异步函数。比如事件处理函数`再比如 ajax 的成功回调函数; setinterval 的第一个参数也是一个异步函数`。异步函数的执行时机，会被宿主环境控制。

```
JS的主线程是单线程的 即: JS代码的执行线程 只有一个
小结:
    异步函数的执行 需要等待时机, 由宿主环境来监听
```

**浏览器宿主环境中包含5个线程：**

1. JS引擎：负责执行执行栈的最顶部代码
2. GUI线程：负责渲染页面
3. 事件监听线程：负责监听各种事件
4. 计时线程：负责计时
5. 网络线程：负责网络通信

```
PS: JS引擎 和 GUI线程 两者不会同时工作 一个在工作时 另一个就在等待
```

**事件循环**

当上面的线程发生了某些事请，如果该线程发现，这件事情有处理程序，它会将该处理程序加入一个叫做事件队列的内存。当JS引擎发现，执行栈中已经没有了任何内容后，会将事件队列中的第一个函数加入到执行栈中执行。

JS引擎对事件队列的取出执行方式，以及与宿主环境的配合，称之为事件循环。

```
PS: 异步函数若被执行 必定经过事件队列 才会到被 JS引擎执行
```

**事件队列**

事件队列在不同的宿主环境中有所差异，大部分宿主环境会将事件队列进行细分。在浏览器中，事件队列分为两种：

- 宏任务（队列）`macro`：macroTask，计时器结束的回调、事件回调、http回调等等绝大部分异步函数进入宏队列
- 微任务（队列）`micro`：MutationObserver，Promise产生的回调进入微队列

> MutationObserver用于监听某个DOM对象的变化

当执行栈清空时，JS引擎首先会将微任务中的所有任务依次执行结束，如果没有微任务，则执行宏任务。

| 宏任务（Macrotask）      | 微任务（Microtask）             |
| ------------------------ | ------------------------------- |
| setTimeout               | requestAnimationFrame（有争议） |
| setInterval              | MutationObserver（浏览器环境）  |
| MessageChannel           | Promise.[ then/catch/finally ]  |
| I/O，事件队列            | process.nextTick（Node环境）    |
| setImmediate（Node环境） | queueMicrotask                  |
| script（整体代码块）     |                                 |

- [x] demo

```html
<ul id="container"></ul>
<button id="btn">点击</button>
```

```js
let count = 1;
const ul = document.getElementById("container");
document.getElementById("btn").onclick = function A() {
    setTimeout(function C() {
        console.log("执行了函数 C")
    }, 0);
    var li = document.createElement("li");
    li.innerText = count++;
    ul.appendChild(li);
    console.log('执行了函数 A ==> 添加了一个li');
}

// 监听ul
const observer = new MutationObserver(function B() {
    // 当监听的dom元素发生变化时运行的回调函数
    console.log("执行了函数 B ==> ul元素发生了变化")
})
// 监听ul
observer.observe(ul, {
    attributes: true, //监听属性的变化
    childList: true, //监听子元素的变化
    subtree: true //监听子树的变化
})
// 取消监听
// observer.disconnect();
```

```
当按钮被点击之后 控制台依次输出的内容如下图所示
```

![20210417165043](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417165043.png)

**小结**

```
1. 同步函数 会直接丢到 call stack 中执行
2. 异步函数 先丢到浏览器的线程中 监听 一旦发生了某些事(触发了异步函数执行) 那么该异步函数就会被丢到 事件队列 event queue 中
   等到 call stack 中的事情处理完了之后 call stack 才会去调用 事件队列 event queue 中的东西来执行
3. 若 微队列 和 宏队列 中都有东西等待被调用
   那么 处于 微队列 micro 中的内容优先被调用 宏队列 macro 中的内容后调用
```

## 8.1 事件和回调函数的缺陷

我们习惯于使用传统的回调或事件处理来解决异步问题

**事件处理函数 和 回调函数**

事件：某个对象的属性是一个函数，当发生某一件事时，运行该函数

```js
dom.onclick = function(){

}
```

回调：运行某个函数以实现某个功能的时候，传入一个函数作为参数，当发生某件事的时候，会运行该函数。

```js
dom.addEventListener("click", function(){

})
```

**它们的本质**

事件和回调并没有本质的区别，只是把函数放置的位置不同而已。

**它们所带来的一些问题**

一直以来，该模式都运作良好。

直到前端工程越来越复杂...

目前，该模式主要面临以下两个问题：

1. 回调地狱：某个异步操作需要等待之前的异步操作完成，无论用回调还是事件，都会陷入不断地嵌套
2. 异步之间的联系：某个异步操作要等待多个异步操作的结果，对这种联系的处理，会让代码的复杂度剧增

```
这两个问题 描述起来非常抽象 可以多写几遍下面的 4 个demo
并且在学完 8. 异步处理 这一部分的全部内容后 再利用所学的知识点来写一遍下面的 4 个demo
体会体会区别 这样效果应该会更好
```

> 下面这 4 个 demo 看懂即可 别再写了 之后有更好的写法

- [x] demo1 - 回调地狱1

```
需求描述:
    页面中有3个btn 当依次点击 btn1 btn2 btn3 时 才会弹出 hello world!!!
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>回调地狱 - 1</title>
</head>

<body>
    <button id="btn1">按钮1: 给按钮2注册点击事件</button>
    <button id="btn2">按钮2: 给按钮3注册点击事件</button>
    <button id="btn3">按钮3: 弹出 hello world</button>
    <script>
        const btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),
            btn3 = document.getElementById('btn3');
        btn1.addEventListener('click', function() {
            btn2.addEventListener('click', function () {
                btn3.addEventListener('click', function () {
                    alert('hello world');
                });
            });
        });
    </script>
</body>

</html>
```

- [x] demo2 - 回调地狱2

```
需求描述:
    场景:
      邓哥心中有三个女神
      有一天，邓哥决定向第一个女神表白
      如果女神拒绝，则向第二个女神表白
      直到所有的女神都拒绝 或 有一个女神同意为止
      表白的时间间隔为 1s
    用代码模拟上面的场景
```

```js
function biaobai(god, callback) {
    console.log(`邓哥向女神【${god}】发出了表白短信`);
    setTimeout(() => {
        if (Math.random() < 0.1) { // 同意了
            callback(true);
        } else { // 拒绝了
            callback(false);
        }
    }, 1000);
}

biaobai('女神1', function (result) {
    if (result) {
        console.log('女神1 ==> 同意');
    } else {
        console.log('女神1 ==> 拒绝');
        biaobai('女神2', function (result) {
            if (result) {
                console.log('女神2 ==> 同意');
            } else {
                console.log('女神2 ==> 拒绝');
                biaobai('女神3', function (result) {
                    if (result) {
                        console.log('女神3 ==> 同意');
                    } else {
                        console.log('女神3 ==> 拒绝');
                        console.log('所有女神都拒绝了');
                    }
                });
            }
        });
    }
});
```

`使用串联的 promise 来实现 (属于 第4节 promise的串联 的知识点)`

```js
function biaobai(god) {
    return new Promise((resolve, reject) => {
        console.log(`邓哥向女神【${god}】发出了表白短信`);
        setTimeout(() => {
            if (Math.random() < 0.1) { // 同意了
                resolve(true);
            } else { // 拒绝了
                resolve(false);
            }
        }, 1000);
    });
}

biaobai('女神1').then(result => {
    if (result) {
        console.log('女神1 ==> 同意');
        return;
    } else {
        console.log('女神1 ==> 拒绝');
        return biaobai('女神2');
    }
}).then(result => {
    if (result === undefined) {
        return;
    } else if (result === true) {
        console.log('女神2 ==> 同意');
        return;
    } else {
        console.log('女神2 ==> 拒绝');
        return biaobai('女神3');
    }
}).then(result => {
    if (result === undefined) {
        return;
    } else if (result === true) {
        console.log('女神3 ==> 同意');
        return;
    } else {
        console.log('女神3 ==> 拒绝');
        console.log('所有女神都拒绝了');
    }
});
```

`使用 async 和 await 关键字来实现 (最后一节课的知识点)`

```js
function biaobai(god) {
    console.log(`邓哥向女神【${god}】发出了表白短信`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) { // 同意了
                resolve(true);
            } else { // 拒绝了
                resolve(false);
            }
        }, 1000);
    });
}

async function handler() {
    let result = await biaobai('女神1');
    if (result) {
        console.log('女神1 ==> 同意');
        return;
    } else {
        console.log('女神1 ==> 拒绝');
        result = await biaobai('女神2');
    }
    if (result) {
        console.log('女神2 ==> 同意');
        return;
    } else {
        console.log('女神2 ==> 拒绝');
        result = await biaobai('女神3');
    }
    if (result) {
        console.log('女神3 ==> 同意');
        return;
    } else {
        console.log('女神3 ==> 拒绝');
        console.log('所有女神都拒绝了');
    }
}

handler();
```

- [x] demo3 - 回调地狱3

```
需求描述:
    获取李华所在班级的老师信息
    PS: 相关数据到 assets 中查看
```

```js
ajax({
    url: './data/students.json?name=李华',
    success(data) {
        for (let i = 0; i < data.length; i++) {
            const stu = data[i];
            if (stu.name === '李华') {
                const cid = stu.classId; // 获取到班级id
                console.log(`获取到李华所在的班级id: ${cid}`);
                ajax({
                    url: './data/classes.json?classId=' + cid,
                    success(data) {
                        for (let i = 0; i < data.length; i++) {
                            const cl = data[i];
                            if (cl.id === cid) {
                                const tid = cl.teacherId;
                                console.log(`获取到班级id为: ${cid} 的老师id: ${tid}`);
                                ajax({
                                    url: './data/teachers.json?teacherId=' + tid,
                                    success(data) {
                                        for (let i = 0; i < data.length; i++) {
                                            const t = data[i];
                                            if (t.id === tid) {
                                                console.log(`获取到id为: ${tid} 的老师信息`, t);
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    }
                });
            }
        }
    }
});
```

![20210510183008](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210510183008.png)

```
1. 通过学生姓名 李华 在 students.json 中找到指定学生信息
2. 通过学生信息 获取学生所在的班级id classId
3. 在 classes.json 通过班级id 获取到老师的id teacherId
4. 最后通过 teacherId 在 teachers.json 中获取指定的老师信息
实现思路其实很简单 但是代码看起来... 很乱
```

`使用串联的promise来实现`

> 需要修改一下 ajax 函数, 让它返回一个 promise 对象

`这是原来封装的一个 ajax 函数`

```js
function toData(data) {
    if (data === null || typeof data !== 'object') {
        return data;
    } else {
        let arr = [];
        for (const prop in data) {
            arr.push(`${prop}=${data[prop]}`);
        }
        return arr.join('&');
    }
}

function createXMLHttpRequest() {
    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhr;
}

function ajax({
    method = 'GET',
    url = '',
    async = true,
    data = null,
    dataType = 'json',
    beforeSend = function () {},
    success = function () {},
    error = function () {}
}) {
    let xhr = createXMLHttpRequest();

    beforeSend();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                success(JSON.parse(xhr.responseText));
            } else {
                error(xhr.status);
            }
        }
    }

    method = method.toUpperCase();
    data = toData(data);

    if(method === 'GET') {
        xhr.open(method, `${url}?${data}`, async);
        xhr.send();
    }else if (method === 'POST') {
        xhr.open(method, url, async);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencode');
        xhr.send(data);
    }
}
```

`修改后`

```js
// toData 和 createXMLHttpRequest 这两个函数保持不变 只要修改一下 ajax 即可
function ajax({
    method = 'GET',
    url = '',
    async = true,
    data = null,
    dataType = 'json',
    beforeSend = function () {},
    success = function () {},
    error = function () {}
}) {
    return new Promise((resolve, reject) => {
        let xhr = createXMLHttpRequest();

        beforeSend();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.status);
                }
            }
        }

        method = method.toUpperCase();
        data = toData(data);

        if(method === 'GET') {
            xhr.open(method, `${url}?${data}`, async);
            xhr.send();
        }else if (method === 'POST') {
            xhr.open(method, url, async);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencode');
            xhr.send(data);
        }
    });
}
```

`[补充] 也可以不直接修改 ajax 函数内部的内容 而是在外面重新给 ajax 包裹上一层 promise`

```js
const pro = new Promise((resolve, reject) => {
    ajax({
        url: '',
        success(data) {
            resolve(data);
        },
        error(err) {
            reject(err);
        }
    })
});
```

```js
ajax({
    url: './data/students.json?name=李华',
}).then(stus => {
    for (let i = 0; i < stus.length; i++) {
        const stu = stus[i];
        if (stu.name === '李华') {
            const cid = stu.classId; // 获取到班级id
            console.log(`获取到李华所在的班级id: ${cid}`);
            return cid;
        }
    }
}).then(cid => {
    return ajax({
        url: './data/classes.json?classId=' + cid,
    }).then(cls => {
        for (let i = 0; i < cls.length; i++) {
            const cl = cls[i];
            if (cl.id === cid) {
                const tid = cl.teacherId;
                console.log(`获取到班级id为: ${cid} 的老师id: ${tid}`);
                return tid;
            }
        }
    });
}).then(tid => {
    return ajax({
        url: './data/teachers.json?teacherId=' + tid,
    }).then(ts => {
        for (let i = 0; i < ts.length; i++) {
            const t = ts[i];
            if (t.id === tid) {
                console.log(`获取到id为: ${tid} 的老师信息`, t);
                return t;
            }
        }
    });
}).then(t => {
    console.log('此时已经获取到了李华的老师信息, 下面可以对其进行相关操作');
    console.log(t);
});
```

![20210510184718](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210510184718.png)

`使用 async 和 await 来实现`

```js
async function handler() {
    const cid = await ajax({ // 获取所有的学生信息
        url: './data/students.json'
    }).then(stus => {
        for (let i = 0; i < stus.length; i++) {
            const stu = stus[i];
            if (stu.name === '李华') {
                const cid = stu.classId; // 获取到班级id
                console.log(`获取到李华所在的班级id: ${cid}`);
                return cid;
            }
        }
    });
    const tid = await ajax({
        url: './data/classes.json'
    }).then(cls => {
        for (let i = 0; i < cls.length; i++) {
            const cl = cls[i];
            if (cl.id === cid) {
                const tid = cl.teacherId;
                console.log(`获取到班级id为: ${cid} 的老师id: ${tid}`);
                return tid;
            }
        }
    });
    const t = await ajax({
        url: './data/teachers.json'
    }).then(ts => {
        for (let i = 0; i < ts.length; i++) {
            const t = ts[i];
            if (t.id === tid) {
                console.log(`获取到id为: ${tid} 的老师信息`, t);
                return t;
            }
        }
    });
    console.log('此时已经获取到了李华的老师信息, 下面可以对其进行相关操作');
    console.log(t);
}

handler();
```

![20210510185344](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210510185344.png)

```
[分析] 对比三种实现方式, 最终版本 async 和 await 结合来实现的方式最好, 因为它让我们在编写异步代码的时候, 感觉像是在编写同步代码一样;
[注] 不能用 async 来修饰被调用的函数 也就是不能在 调用 ajax 的前面写 async, 这么做是无效的
```

- [x] demo4 - 回调地狱4

```
需求描述:
    邓哥心中有二十个女神，他决定用更加高效的办法
    他同时给二十个女神表白，如果有女神同意，就拒绝其他的女神
    并且，当所有的女神回复完成后，他要把所有的回复都记录到日志进行分析
    用代码模拟上面的场景
```

```js
function biaobai(god, callback) {
    console.log(`邓哥向女神【${god}】发出了表白短信`);
    setTimeout(() => {
        if (Math.random() < 0.1) { // 同意了
            callback(true);
        } else { // 拒绝了
            callback(false);
        }
    }, Math.floor(Math.random() * (3000 - 1000) + 1000));
}

let agreeGod = null; // 同意邓哥的第一个女神
const results = []; // 用于记录回复结果的数组

for (let i = 1; i <= 20; i++) {
    const god = `女神${i}`;
    biaobai(god, result => {
        results.push(result);
        if (result) {
            console.log(`${god}同意了`);
            if (agreeGod) {
                console.log(`邓哥回复${god}: 不好意思, 刚才朋友用我手机乱发的`);
            } else {
                agreeGod = god;
                console.log(`邓哥终于找到了真爱`);
            }
        } else {
            console.log(`${god}拒绝了`);
        }
        /* 日志记录应该是一块的功能模块 不应该写在这个地方, 但是若使用传统的方式来实现该需求的话, 日志记录的功能貌似也就只能写在 表白函数的回调函数中了, 向每一个女神表白后, 都要判断一下是否打印日志记录... 相对比较理想的情况应该是等到所有女神都有了返回结果之后, 再打印日志记录, 不过使用传统的方式还做不到 */
        /* [注] 这么写是错误的 */
        // if (i === 20) {
        //     console.log(`日志记录: ${results}`);
        // }
        if (results.length === 20) {
            console.log(`日志记录: ${results}`);
        }
    });
}
```

```
这个案例主要对应的是下面这个问题
    异步之间的联系：某个异步操作要等待多个异步操作的结果，对这种联系的处理，会让代码的复杂度剧增 ==> 比如该案例中的日志记录, 就需要等到其他异步操作都完成后 才能执行
```

```
8.1 这一节中, 袁老提到的每个对应的问题, 都尝试着多写了两个版本, 是在第三次开始看的时候写的, 感觉上仅仅是记住了而已, 并没有理解, 也许写出来的程序还有一些问题...
对于本节所讲的4个案例, 目的在于: 让我们理解使用之前的传统方式来解决异步处理问题时所存在的一系列问题, 多写, 多练, 多写写问题写法 和 Promise 提供的新的写法, 多对比对比, 这东西只能凭感觉来体验...
```

`使用 Promise.all 来实现`

```js
function biaobai(god) {
    return new Promise((resolve, reject) => {
        console.log(`邓哥向女神【${god}】发出了表白短信`);
        setTimeout(() => {
            if (Math.random() < 0.1) { // 同意了
                resolve(true);
            } else { // 拒绝了
                resolve(false);
            }
        }, Math.floor(Math.random() * (3000 - 1000) + 1000));
    });
}

let agreeGod = null; // 同意邓哥的第一个女神
let pros = [];

for (let i = 1; i <= 20; i++) {
    const god = `女神${i}`;
    pros.push(biaobai(god).then(result => {
        if (result) {
            console.log(`${god}同意了`);
            if (agreeGod) {
                console.log(`邓哥回复${god}: 不好意思, 刚才朋友用我手机乱发的`);
            } else {
                agreeGod = god;
                console.log(`邓哥终于找到了真爱`);
            }
        } else {
            console.log(`${god}拒绝了`);
        }
        return result;
    }));
}

// 做日志记录
Promise.all(pros).then(results => {
    console.log(`日志记录: ${results}`);
});
```

`使用 async 和 await 来实现`

```js
function biaobai(god) {
    return new Promise((resolve, reject) => {
        console.log(`邓哥向女神【${god}】发出了表白短信`);
        setTimeout(() => {
            if (Math.random() < 0.1) { // 同意了
                resolve(true);
            } else { // 拒绝了
                resolve(false);
            }
        }, Math.floor(Math.random() * (3000 - 1000) + 1000));
    });
}

let agreeGod = null; // 同意邓哥的第一个女神
let results = [];

async function handler() {
    for (let i = 1; i <= 20; i++) {
        const god = `女神${i}`;
        results.push(await biaobai(god).then(result => {
            if (result) {
                console.log(`${god}同意了`);
                if (agreeGod) {
                    console.log(`邓哥回复${god}: 不好意思, 刚才朋友用我手机乱发的`);
                } else {
                    agreeGod = god;
                    console.log(`邓哥终于找到了真爱`);
                }
            } else {
                console.log(`${god}拒绝了`);
            }
            return result;
        }));
    }
    console.log(`日志记录: ${results}`);
}

handler();
```

```
有一点小问题, 就是表白并非同时发出的, 是发一个, 然后等待回复, 然后再继续发
```

## 8.2 异步处理的通用模型

`8.2 特别重要 建议反复观看 直到能够充分理解最后一张图为止`

ES官方参考了大量的异步场景，总结出了一套异步的通用模型，该模型可以覆盖几乎所有的异步场景，甚至是同步场景。

值得注意的是，为了兼容旧系统，ES6 并不打算抛弃掉过去的做法，只是基于该模型推出一个全新的 API，使用该API，会让异步处理更加的简洁优雅。

理解该 API，最重要的，是理解它的异步模型。

```
问: promise api 有啥用?
答: Promise api 就是让异步代码 写起来感觉上 和同步代码一样
```

**1. ES6 将某一件可能发生异步操作的事情，分为两个阶段：`unsettled` 和 `settled`**

![20210417211148](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417211148.png)

- unsettled： 未决阶段，表示事情还在进行前期的处理，并没有发生通向结果的那件事
- settled：已决阶段，事情已经有了一个结果，不管这个结果是好是坏，整件事情无法逆转

事情总是从 未决阶段 逐步发展到 已决阶段的。并且，未决阶段拥有控制何时通向已决阶段的能力。

**2. ES6将事情划分为三种状态： `pending`、`resolved`、`rejected`**

- `pending`: 挂起，处于未决阶段，则表示这件事情还在挂起（最终的结果还没出来）。
- `resolved`：已处理，已决阶段的一种状态，表示整件事情已经出现结果，并是一个可以按照正常逻辑进行下去的结果。
- `rejected`：已拒绝，已决阶段的一种状态，表示整件事情已经出现结果，并是一个无法按照正常逻辑进行下去的结果，通常用于表示有一个错误。

既然未决阶段有权力决定事情的走向，因此，未决阶段可以决定事情最终的状态！

我们将 把事情变为`resolved`状态的过程叫做：**`resolve`**，推向该状态时，可能会传递一些数据。

我们将 把事情变为`rejected`状态的过程叫做：**`reject`**，推向该状态时，同样可能会传递一些数据，通常为错误信息。

**始终记住，无论是 `阶段`，还是 `状态`，是不可逆的！**

![20210417211239](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417211239.png)

**3. 当事情达到已决阶段后，通常需要进行后续处理，不同的已决状态，决定了不同的后续处理。**

- `resolved`状态：这是一个正常的已决状态，后续处理表示为 `thenable`
- `rejected`状态：这是一个非正常的已决状态，后续处理表示为 `catchable`

后续处理可能有多个，因此会形成作业队列，这些后续处理会按照顺序，当状态到达后依次执行。

![20210417211251](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417211251.png)

```
unsettled 和 settled
unsettled 就是还没有 结果数据
settled 就是已经接收到了 结果数据
```

**4. 整件事称之为Promise**

![20210417211258](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210417211258.png)

> 最新的 Promise A+ 规范如下

![20210418105433](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418105433.png)

> 理解上面的概念，对学习Promise至关重要！

[ES6 Promise的resolved深入理解](https://www.cnblogs.com/JuFoFu/p/6692055.html)

## 8.3 Promise的基本使用

**回答以下问题**
- [x] 你对 Promise 的理解

`Promise 并没有消除回调 只是通过一种特定的模式 让回调变得可控 (让异步行为变得可控)`

**本节重点**

- 掌握如何将 `unsettled` 阶段的 `Promise` 推向 `settled` 阶段
- 什么情况下是将 `Promise` 推向 `resolved` 状态
- 什么情况下是将 `Promise` 推向 `rejected` 状态

![20210510212221](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210510212221.png)

`[答案] D`

```js
const pro = new Promise((resolve, reject)=>{
    // 未决阶段的处理
    // 通过调用resolve函数将Promise推向已决阶段的resolved状态
    // 通过调用reject函数将Promise推向已决阶段的rejected状态
    // resolve和reject均可以传递最多一个参数，表示推向状态的数据
})

pro.then(data=>{
    //这是thenable函数，如果当前的Promise已经是resolved状态，该函数会立即执行
    //如果当前是未决阶段，则会加入到作业队列，等待到达resolved状态后执行
    //data为状态数据
}, err=>{
    //这是catchable函数，如果当前的Promise已经是rejected状态，该函数会立即执行
    //如果当前是未决阶段，则会加入到作业队列，等待到达rejected状态后执行
    //err为状态数据
})
```

> [注意] 这里所说的 **立即执行** 指的是将事件处理函数立即推向 micro queue 必须要等到同步程序执行完后 才会执行

**细节**

1. 未决阶段的处理函数是同步的，会立即执行。
2. thenable和catchable函数是异步的，就算是立即执行，也会加入到事件队列中等待执行，并且，加入的队列是微队列
3. pro.then可以只添加thenable函数`也可以同时添加 thenable(作为第一个参数传入) 和 catchable(作为第二个参数传入)`，pro.catch可以单独添加catchable函数
4. 在未决阶段的处理函数中，如果发生未捕获的错误，会将状态推向rejected，并会被catchable捕获
5. 一旦状态推向了已决阶段，无法再对状态做任何更改
6. **Promise并没有消除回调，只是让回调`形成一种特定的模式`变得可控**

- [x] demo

`biaoBai`

```js
function biaoBai(god, callback) {
    console.log(`邓哥向女神【${god}】发出了表白短信`);
    setTimeout(() => {
        if (Math.random() < 0.1) {
            callback(true);
        } else {
            callback(false);
        }
    }, 1000);
}
```

`baiBai ==> promise`

```js
const pro = new Promise((resolve, reject) => {
    console.log(`邓哥向女神1发出了表白短信`);
    setTimeout(() => {
        if (Math.random() < 0.1) {
            resolve(true);
        } else {
            resolve(false);
        }
    }, 3000);
});
// 在 3s 前后 依次 在控制台打印 pro 查看 PromiseState 属性值的变化
// PS: 袁老师视频中使用的 chrome版本 在3s后输出的是状态是 resolved 不过版本更新后 当前输出的是 fulfilled
// 对于 fulfilled 和 resolved 这两个状态值 暂且先不作区分 理解位于一个东西即可 (实际上 它们还是有点不同的)
```

![20210418123722](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418123722.png)

```
biaoBai 转 promise
    如果女神拒绝了 那么调用的也应该是 resolve
    因为这依旧是程序的正常逻辑 出现的是一个正常的结果
    并没有出现 错误 不会影响后续程序正常逻辑的执行
    通常在出现错误的信息的时候 我们才会调用 reject 函数
    将 promise 推向 rejected 状态
```

- [x] demo

`ajax ==> promise`

```js
const pro = new Promise((resolve, reject) => {
    ajax({
        url: './data/students.json?name=李华',
        success(data) {
            resolve(data);
        },
        error(err) {
            reject(err);
        }
    });
});

pro.then((data) => {
    console.log(data);
});
```

![20210418124730](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418124730.png)

![20210418124828](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418124828.png)

```
在 封装 ajax 的内部修改 更合适
```

- [x] demo

```js
const pro = new Promise((resolve, reject) => {
    console.log('unsettled');
    resolve('dahuyou');
});

pro.then((data) => {
    console.log(data);
});
```

![20210418125451](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418125451.png)

- [x] demo

```js
const pro = new Promise((resolve, reject) => {
    console.log('unsettled');
    setTimeout(() => {
        resolve('dahuyou');
    }, 3000);
});

pro.then((data) => {
    console.log(data); // 3s 后才会打印
});
```

![20210418125655](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418125655.png)

- [x] demo

`并列的 Promise ==> 为一个 Promise 注册多个 thenable ==> 一旦该 Promise 的状态变为 resolved 那么会按照事件注册的顺序 执行多个事件`

```js
const pro = new Promise((resolve, reject) => {
    console.log('unsettled');
    setTimeout(() => {
        resolve('dahuyou');
    }, 3000);
});

pro.then((data) => {
    console.log(data + '1'); // 3s 后会同时打印
});
pro.then((data) => {
    console.log(data + '2'); // 3s 后会同时打印
});
pro.then((data) => {
    console.log(data + '3'); // 3s 后会同时打印
});
```

![20210427163239](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210427163239.png)

- [x] demo

```js
const pro = new Promise((resolve, reject) => {
    console.log('unsettled');
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('dahuyou');
        } else {
            reject(new Error('dahuyou'));
        }
    }, 3000);
});

pro.then(data => {
    console.log('resolved');
    console.log(data + '1'); // 3s 后会同时打印
}, err => {
    console.log('rejected');
    console.log(err + '1');
});
pro.then(data => {
    console.log(data + '2'); // 3s 后会同时打印
}, err => {
    console.log(err + '2');
});
pro.then(data => {
    console.log(data + '3'); // 3s 后会同时打印
}, err => {
    console.log(err + '3');
});
```

![20210427163725](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210427163725.png)

![20210427163732](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210427163732.png)

```
因为 都是同一个 promise 即: 它们的状态都是一致的
所以 要么都打印 dahuyou 要么都打印 Error: dahuyou
```

- [x] demo

`在函数内部返回 promise`

```js
function biaoBai(god) { // 返回一个 promise
    return new Promise((resolve, reject) => {
        console.log(`邓哥向【${god}】发出了表白短信`);
        setTimeout(() => {
            if (Math.random() < 0.1) {
                resolve(true);
            } else {
                resolve(false);
            }
        }, 3000);
    });
}
```

```js
const pro = biaoBai('女神1');
pro.then(result => {
    console.log(result);
});
```

![20210418130644](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418130644.png)

```js
biaoBai('女神1').then(result => { // 可读性很好
    console.log(result);
});
// 向 女神1 表白 若程序逻辑正常 那么将得到的结果 result 打印
```

![20210418130723](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418130723.png)

- [x] demo

`在函数内部返回 promise`

```js
// 改写 封装好的Ajax函数
function ajax(obj) {
    return new Promise((resolve, reject) => {
        // ... 保持不变
        // 接收返回过来的数据
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.status);
                }
            }
        }
    });
}

// 原来的 ajax 函数 (袁老封装的ajax)
function ajax(obj) {
    // ...
    // 接收返回过来的数据
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                if (obj.success) {
                    // resolve
                    obj.success(JSON.parse(xhr.responseText));
                }
            } else {
                if (obj.error) {
                    // reject
                    obj.error(xhr.status);
                }
            }
        }
    }
}
```

```js
ajax({
    url: './data/students.json?name=李华'
}).then(res => {
    console.log(res);
}, err => {
    console.log(err);
});
```

![20210418131340](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418131340.png)

- [x] demo

`unsettled 阶段的程序是同步的 会立即执行`

```js
const pro = new Promise((resolve, reject) =>{
    console.log('a'); // 这里面的是同步执行的程序
});

console.log('b');
```

![20210418131818](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418131818.png)

- [x] demo

`thenable函数 和 catchable函数 是异步的 就算是立即执行 也会加入到事件队列中等待执行 并且加入的是 micro queue (微队列)`

```js
const pro = new Promise((resolve, reject) => {
    console.log('a');
    resolve('dahuyou');
    console.log('b');
});

pro.then(data => {
    console.log(data);
})
```

![20210418132050](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418132050.png)

- [x] demo

`unsettled 阶段 的 pending 状态的同步代码 和 settled 阶段的 resolved 状态 和 rejected 状态的异步代码`

```js
const pro = new Promise((resolve, reject) => {
    console.log('a'); // 同步
    resolve('dahuyou'); // 同步
    console.log('b'); // 同步
});

pro.then(data => {
    console.log(data); // 异步
})

console.log('c'); // 同步
```

![20210418132432](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418132432.png)

- [x] demo

`micro queue 优先于 macro queue`

```js
const pro = new Promise((resolve, reject) => {
    console.log('a');
    resolve('dahuyou');
    setTimeout(() => {
        console.log('b'); // 异步 -> macro queue
    }, 0);
});

pro.then(data => {
    console.log(data); // 异步 -> micro queue
})

console.log('c');
```

![20210418132557](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418132557.png)

- [x] demo

`Promise.then() 和 Promise.catch()`

```js
pro.then(data => {
    console.log(data);
}, err => {
    console.log(err);
});
```

`等价于下面的写法`

```js
pro.then(data => {
    console.log(data);
});
pro.catch(err => {
    console.log(err);
});
```

```
pro.then 可以只添加 thenable函数(仅写一个参数即可) 也可以同时添加 thenable函数 和 catchable函数(同时写两个参数即可) PS: 这些参数都是 函数
使用 pro.catch 可以只添加 catchable函数
```

- [x] demo

`在 unsettled 阶段的处理函数中 若发生了未捕获的错误 那么会将 pro 的状态推向 rejected 状态 并会被 catchable 捕获`

```js
const pro = new Promise((resolve, reject) => {
    throw new Error('抛出一个错误'); // pro -> rejected
});

pro.then(data => {
    console.log(data);
}, err => {
    console.log(err);
});
```

![20210418133329](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418133329.png)

- [x] demo

`pro 状态不可逆 无法更改`

`一旦 pro 的状态推向了 settled 状态 无法再对它的状态做任何更改`

```js
const pro = new Promise((resolve, reject) => {
    resolve(1);
    reject(2); // 无效
    resolve(3); // 无效
});

pro.then(data => {
    console.log(data);
}, err => {
    console.log(err);
});
```

![20210418133547](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418133547.png)

- [x] demo

`未捕获的错误 会将 promise 推向 settled 阶段`

```js
const pro = new Promise((resolve, reject) => {
    throw new Error('抛出一个错误'); // pro -> rejected
    resolve(1); // 无效
});

pro.then(data => {
    console.log(data);
}, err => {
    console.log(err);
});
```

![20210418133731](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418133731.png)

- [x] demo

`捕获的错误 并不会将 promise 推向 settled 阶段`

```js
const pro = new Promise((resolve, reject) => {
    try {
        throw new Error('抛出一个错误');
    } catch {
        console.log('捕获到了错误');
    }
    resolve(1); // 有效 因为上面的错误被捕获了 并没有将 pro 的状态推向 rejected
});

pro.then(data => {
    console.log(data);
}, err => {
    console.log(err);
});
```

![20210418133936](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418133936.png)

- [x] demo

```js
const pro = new Promise((resolve, reject) => {
    const a = 1;
    a = 2; // 在 Promise 构造函数的参数方法中 代码报错 ==> 会将该 Promise 推向 rejected 状态
});

pro.then(result => {
    console.log(result);
});

pro.catch(err => {
    console.log(err);
});
```

![20210510220730](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210510220730.png)

## 8.4 Promise的串联

- [x] demo

```js
ajax({
    url: './data/students.json'
}).then(stus => {
    for (let i = 0; i < stus.length; i++) {
        const stu = stus[i];
        if (stu.name === '李华') {
            const cid = stu.classId;
            console.log(`拿到李华所在的班级id: ${cid}`);
            ajax({
                url: './data/classes.json'
            }).then(cls => {
                for (let i = 0; i < cls.length; i++) {
                    const cl = cls[i];
                    if (cl.id === cid) {
                        const tid = cl.teacherId;
                        console.log(`拿到班级id为: ${cid} 的老师id: ${tid}`);
                        ajax({
                            url: './data/teachers.json'
                        }).then(ts => {
                            for (let i = 0; i < ts.length; i++) {
                                const t = ts[i];
                                if (t.id === tid) {
                                    console.log(`拿到老师id为: ${tid} 的老师信息: `, t);
                                }
                            }
                        });
                    }
                }
            });
        }
    }
});
```

![20210510222246](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210510222246.png)

```
试着用目前所学到的内容, 尝试重新写一遍 回调地狱 3 的那个 demo, 我们会发现 即便使用现阶段所学的 Promise的相关知识点, 依旧没有解决 8.1 中提及的 回调地狱 的问题
```

- [x] demo

`并列的 thenable`

```js
const pro = ajax({
    url: './data/students.json'
});

// 获取指定学生信息
pro.then(stus => {
    stus.forEach(stu => {
        if (stu.name === '李华') {
            console.log(`获取到的李华学生信息如下:`);
            console.log(stu);
        }
    });
});

// 获取所有的女生
pro.then(stus => {
    const newArr = stus.filter(stu => stu.gender === '女');
    console.log(`获取到的所有女生信息如下:`);
    console.log(newArr);
});

// 获取所有年龄在 20 岁以下的学生信息
pro.then(stus => {
    const newArr = stus.filter(stu => stu.age < 20);
    console.log(`获取到的所有年龄在 20岁 以下的学生信息如下:`);
    console.log(newArr);
});
```

![20210510222713](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210510222713.png)

`下图是thenable接收到的参数 stus 中的数据`

![20210418150543](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418150543.png)


```
并列的 promise
    上面涉及到的是 同一个 promise 的并列操作
    - 获取指定学生信息
    - 获取所有的女生
    - 获取所有年龄在 20 岁以下的学生信息
    这3个需求 是并列进行的 它们之间并没有什么先后关系
    即: 后续操作不需要依赖前面操作得到的结果数据
串联的 promise
    但是在 8.1 的案例中 我们的需求是由先后关系的
    1. 先获取到指定学生信息
    2. 通过学生信息获取到指定班级信息
    3. 通过班级信息获取到指定老师信息
    即: 后续操作需要依赖前面操作得到的结果数据
```

当后续的Promise需要用到之前的Promise的处理结果时，需要Promise的串联

Promise对象中，无论是then方法还是catch方法，它们都具有返回值，返回的是一个全新的Promise对象，它的状态满足下面的规则：

1. 如果当前的Promise是未决`unsettled`的，得到的新的Promise是挂起状态`pending`
2. 如果当前的Promise是已决`settled`的，会运行相应的后续处理函数`若没有相应的后续处理函数来处理 那么返回的新的 Promise 对象的状态和数据都将与 当前的 Promise 对象保持一致`，并将后续处理函数的结果（返回值）作为`resolved`状态数据，应用到新的Promise中；**如果后续处理函数发生错误**，则把返回值作为`rejected`状态数据，应用到新的Promise中。

> then 返回的 promise 对象 一开始一定是 pending 状态 `因为 then 中的程序是异步的, 要等到这些异步的程序有了执行结果之后, 返回的 Promise 对象才会被推向 settled 阶段; 但是并非 要等到前面的 Promise 有了处理结果才会返回 Promise 对象, 只要执行到 Promise.then() 语句时, 就会返回 Promise 对象, 即便 then 里面的异步程序都还没有开始执行, 即: 前一个Promise还没处理完, 没有返回处理结果; 所以说 then 返回的 Promise 对象一开始一定是 pending 状态, 因为里面的异步程序还没执行`
> **重点: unsettled 阶段的 pending 状态的程序是同步执行的。**

**后续的Promise一定会等到前面的Promise有了后续处理结果后，才会变成已决状态**

如果前面的Promise的后续处理，返回的是一个Promise，则返回的新的Promise状态和后续处理返回的Promise状态保持一致。


- [x] demo

`then 返回的 promise 对象一开始一定是 pending 状态`

```js
const pro1 = new Promise((resolve, reject) => {
    resolve(1);
});
console.log(pro1);
const pro2 = pro1.then(result => result * 2);
console.log(pro2);
/* 输出的 pro2
类型是: promise对象
状态是: pending
    因为输出pro2时 pro1.then 中的异步程序还没有开始执行
    要等到 pro1.then 中的异步程序执行完后 也就是 pro1 有了处理结果后 pro2 的状态才会变为 resolved 并且 pro1 的处理结果将作为 pro2 的状态数据传入
 */
pro2.then(result => console.log(result), err => console.log(err)); // 2
```

![20210511170805](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210511170805.png)

```
在执行同步语句 console.log(pro2); 时 pro1.then(result => result * 2); 中的异步语句 result => result * 2 还没有执行 即: pro1.then 还没有得到一个处理结果
```

- [x] demo

```js
const pro1 = new Promise((resolve, reject) => {
    resolve(1);
});

const pro2 = pro1.then(result => result * 2);
console.log(pro2);

setTimeout(() => {
    console.log(pro2);
}, 0);
```

![20210426144856](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210426144856.png)

```
pro1.then() 返回的 promise 对象的状态会 动态更新 并不是一成不变的 只要 pro1.then() 有了处理结果 那么它返回的 promise 对象的状态就会变为 settled 阶段
```

- [x] demo

```js
const pro1 = new Promise((resolve, reject) => {
    throw 1; // A 出错了
});

const pro2 = pro1.then(result => result * 2, err => err * 3); // B 没有出错
// 因为 A 出错了 所以 B 运行 catchable 即: err => err * 3

pro2.then(result => console.log(result * 2), err => console.log(err * 3)); // C
// 因为 B 没有出错 所以 C 运行 thenable 即: result => console.log(result * 2)
```

![20210426145929](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210426145929.png)

```
const promise1 = new Promise((resolve, reject) => {
    // ... pending 阶段的事件处理程序
});
promise2 = promise1.then(thenable, catchable);

promise1 和 promise2 的状态分析

promise1 的状态 取决于 在 pending 阶段的事件处理程序中 执行的是 resolve() 还是 reject() 还是 抛出了错误
    执行 resolve() ==> promise1 变为 resolved 状态 ==> 执行 thenable
    执行 reject() 或 抛出错误 ==> promise1 变为 rejected 状态 ==> 执行 catchable
promise2 的状态 取决于 promise1.then() 执行是否抛出了错误
    没有抛出错误 ==> promise2 变为 resolved 状态
    抛出了错误 ==> promise2 变为 rejected 状态
```

- [x] demo

```js
const pro1 = new Promise((resolve, reject) => {
    throw 1;
});

const pro2 = pro1.then(result => result * 2, err => {
    throw err;
} );

pro2.then(result => console.log(result * 2), err => console.log(err * 3)); // 3
```

![20210418165448](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418165448.png)

- [x] demo

```js
const pro1 = new Promise((resolve, reject) => {
    throw 1;
});

const pro2 = pro1.then(result => result * 2, err => {
    throw err;
});

pro2.catch(err => err * 5);

pro2.then(result => console.log(result * 3), err => console.log(err * 4)); // 4
```

![20210418170013](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418170013.png)

```
pro2.catch();
pro2.then();
// 注意: 最后两个条语句 它们是并列关系 两者之间互不影响 并不会出现覆盖的情况
```

- [x] demo

```js
const pro1 = new Promise((resolve, reject) => {
    throw 1;
});

const pro2 = pro1.then(result => result * 2, err => {
    console.log(err); // 1
    throw err;
});

pro2.catch(err => {
    console.log(err * 5); // 5
});

pro2.then((result) => {
    console.log(result * 3);
}).catch((err) => {
    console.log(err * 4); // 4
});
```

![20210511173650](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210511173650.png)

```
两者之间是并列关系 并不会出现覆盖的情况
```

- [x] demo

```js
const pro1 = new Promise((resolve, reject) => {
    throw 1;
});

const pro2 = pro1.then(result => result * 2, err => {
    console.log(err); // 1
    throw err * 2;
});

pro1.catch(err => {
    console.log(err); // 1
    throw err;
});

pro2.then((result) => {
    console.log(result * 3);
}).catch((err) => {
    console.log(err * 4); // 8
});
```

```
两者之间是并列关系 并不会出现覆盖的情况
```

- [x] demo

`在 thenable 或 catchable 中返回的是一个 promise 对象`

```js
const pro1 = new Promise((resolve, reject) => {
    resolve(1);
});

const pro2 = new Promise((resolve, reject) => {
    resolve(2);
});

const pro3 = pro1.then(result => {
    return pro2;
});

console.log(pro3); // Promise {<pending>}
console.log(pro3 === pro2); // false

pro3.then(result => {
    console.log(result === pro2); // false
    console.log(result); // 2
});

pro2.then(result => {
    console.log(result * 2); // 2
});
```

![20210511174500](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210511174500.png)

`如果前面的Promise的后续处理，返回的是一个Promise，则返回的新的Promise状态和后续处理返回的Promise状态保持一致。`

```
这句话指的是 pro3 的状态 与 pro2 的状态保持一致
    当 pro2 的状态变为 resolved 之后 pro3 才会变为 resolved
    当 pro2 的状态变为 rejected 之后 pro3 才会变为 rejected
    并且两者的参数还相同
[注] 一定是 pro2 先发生状态变化, pro3 后发生状态变化, 所以我们会看到, 控制台中先打印的是 4, 后打印的是 2
```

- [x] demo

```js
const pro1 = new Promise((resolve, reject) => {
    resolve(1);
});

const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 3000);
});

const pro3 = pro1.then(result => {
    return pro2;
});

pro3.then(result => {
    console.log(result); // 2
});
```

```
3s 后 会在控制台打印 2
虽然 pro1.then() 很快就返回了一个处理结果 按理来说 pro3 在 pro1.then() 得到一个处理结果后 就将变为 settled 阶段; 但是这里有点特殊, 因为返回的是一个 promise 对象 pro2, 所以 pro3 的状态将由 pro2 来决定, 只有当 pro2 的变为 settled 阶段 pro3 才会变为 settled 阶段
```

- [x] demo

```js
const pro1 = new Promise((resolve, reject) => {
    resolve(1);
});

const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 3000);
});

pro1.then(result => {
    console.log(1); // 1
    return pro2;
}).then(result => { // 要等到 pro2 变为 resolved 状态之后 才会执行
    console.log(result); // 2
    // return undefined; // 没有写 return 默认返回 undefined
}).then(result => {
    console.log(result); // undefined
});
```

![20210418171922](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418171922.png)

```
立即打印 1
过 3s 后 打印 2 和 undefined
因为第二个 then 中并没有 指定 return 的返回值
所以 return 默认值 undefined
```

**下面开始尝试使用串联的 Promise 来重写 8.1 中的 demo3**

- [x] bug

`经典的 错误写法... 为什么控制台啥也没打印`

```js
const pro = ajax({
    url: './data/students.json'
});

// 查找李华的老师信息
pro.then(res => {
    let cId = null; // 班级id

    // 给 cId 赋值
    res.forEach(stu => {
        if (stu.name === '李华') {
            cId = stu.classId;
        }
    });

    return cId; // 作为下一次的 thenable 参数传入
}).then(cId => {
    let tId = null; // 老师id

    // 给 tId 赋值
    ajax({
        url: './data/classes.json?classId=' + cId
    }).then(classRoom => {
        classRoom.forEach(c => {
            if (c.id === cId) {
                tId = c.teacherId;
            }
        });
        // console.log(tId);
    });

    // console.log(tId);
    return tId;
}).then(tId => {
    ajax({
        url: './data/teachers.json?teacherId=' + tId
    }).then(teacher => {
        teacher.forEach(t => {
            if (t.id === tId) {
                console.log(t);
            }
        });
    });
});
```

```
这个 bug 的原因其实是由于 异步函数 所导致的
将这段程序中的两条被注释掉的打印语句 console.log(tId); 取消掉注释
会发现控制台先输出的将会是 下面一行打印语句输出的 tId 结果为 null
相对于第二次调用 ajax 而言 代码 let tId = null; 和 return tId; 是同步执行的; 而 ajax().then(...) 中的 thenable程序是异步执行的

[原因分析] ajax().then(异步执行的程序) then方法中的程序是异步执行的
```

`执行顺序分析`

```js
const pro = ajax({
    url: './data/students.json'
});

// 查找李华的老师信息
pro.then(res => {
    let cId = null; // 班级id

    // 给 cId 赋值
    res.forEach(stu => {
        if (stu.name === '李华') {
            cId = stu.classId;
        }
    });

    return cId; // 作为下一次的 thenable 参数传入
}).then(cId => {
    let tId = null; // 老师id

    console.log(1);

    ajax({
        url: './data/classes.json?classId=' + cId
    }).then(classRoom => {

        console.log(5);

        classRoom.forEach(c => {
            if (c.id === cId) {
                tId = c.teacherId;
            }
        });
    });

    console.log(2);

    return tId;
}).then(tId => {

    console.log(3);

    ajax({
        url: './data/teachers.json?teacherId=' + tId
    }).then(teacher => {

        console.log(6);

        teacher.forEach(t => {
            if (t.id === tId) {
                console.log(t);
            }
        });
    });

    console.log(4);
});
```

![20210420174402](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210420174402.png)

- [x] debug - 1 `then 方法返回的不是一个 promise 对象`

```js
const pro = ajax({
    url: './data/students.json'
});

// 查找李华的老师信息
pro.then(res => {
    let cId = null; // 班级id

    // 给 cId 赋值
    res.forEach(stu => {
        if (stu.name === '李华') {
            cId = stu.classId;
        }
    });

    return cId; // 作为下一次的 thenable 参数传入
}).then(cId => {

    ajax({
        url: './data/classes.json?classId=' + cId
    }).then(classRoom => {
        let tId = null; // 老师id

        // 给 tId 赋值
        classRoom.forEach(c => {
            if (c.id === cId) {
                tId = c.teacherId;
            }
        });

        return tId;
    }).then(tId => {

        ajax({
            url: './data/teachers.json?teacherId=' + tId
        }).then(teacher => {
            teacher.forEach(t => {
                if (t.id === tId) {
                    console.log(t);
                }
            });
        });

    });
});
```

![20210418154035](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418154035.png)

```
这么做虽然获取到了想要的结果, 但是还是会陷入回调地狱;
```

- [x] debug - 2 `then 方法返回的是一个 promise 对象`

```
PS: 此时没用调通 最终控制台输出的结果是 undefined 试分析原因...
```

```js
const pro = ajax({
    url: './data/students.json'
});

// 查找李华的老师信息
pro.then(res => {
    res.forEach(stu => {
        if (stu.name === '李华') {
            return stu.classId; // 将学生对应的班级id返回 作为一下次处理函数的参数传入
        }
    });
}).then(cId => {
    return ajax({
        url: './data/classes.json?classId=' + cId
    }).then(classRoom => {
        classRoom.forEach(c => {
            if (c.id === cId) {
                return c.teacherId; // 将班级对应的老师id返回 作为一下次处理函数的参数传入
            }
        });
    });
}).then(tId => {
    return ajax({
        url: './data/teachers.json?teacherId=' + tId
    }).then(teacher => {
        teacher.forEach(t => {
            if (t.id === tId) {
                return t; // 将老师信息返回 作为一下次处理函数的参数传入
            }
        });
    });
}).then(tInfo => {
    console.log(tInfo); // undefined
});
```

```
forEach 它也是一个函数, 所以 return 不能在 forEach 这个函数里面 return
```

- [x] debug - 3

`把 forEach 改成 for 循环即可`

```js
const pro = ajax({
    url: './data/students.json'
});

// 查找李华的老师信息
pro.then(res => {
    for (let i = 0; i < res.length; i++) {
        const stu = res[i];
        if (stu.name === '李华') {
            return stu.classId; // 将学生对应的班级id返回 作为一下次处理函数的参数传入
        }
    }
}).then(cId => {
    return ajax({
        url: './data/classes.json?classId=' + cId
    }).then(classRooms => {
        for (let i = 0; i < classRooms.length; i++) {
            const c = classRooms[i];
            if (c.id === cId) {
                return c.teacherId; // 将班级对应的老师id返回 作为一下次处理函数的参数传入
            }
        }
    });
}).then(tId => {
    return ajax({
        url: './data/teachers.json?teacherId=' + tId
    }).then(teachers => {
        for (let i = 0; i < teachers.length; i++) {
            const t = teachers[i];
            if (t.id === tId) {
                return t; // 将老师信息返回 作为一下次处理函数的参数传入
            }
        }
    });
}).then(tInfo => {
    console.log(tInfo); // {id: 2, name: "张", gender: "女"}
});
```

```
这种写法实际上还可以进一步简化 不过得掌握后续的更多知识点之后 才能实现...
```

- [x] demo

`用 promise 来实现 8.1 的 demo2`

```
需求描述:
    场景:
      邓哥心中有三个女神
      有一天，邓哥决定向第一个女神表白
      如果女神拒绝，则向第二个女神表白
      直到所有的女神都拒绝 或 有一个女神同意为止
      表白的时间间隔为 1s
    用代码模拟上面的场景
```

```js
function biaoBai(god) {
    return new Promise((resolve, reject) => {
        console.log(`邓哥向${god}发出了表白短信`);
        setTimeout(() => {
            if (Math.random() < 0.1) {
                resolve(true); // 女神同意了
            } else {
                resolve(false); // 女神拒绝了
            }
        }, 1000); // 等 1s 后再决定该 promise 的状态
    });
}

biaoBai('女神1').then(result => {
    if (result === true) {
        console.log('女神1同意了 停止表白');
        return;
    } else {
        console.log('女神1拒绝了 继续向女神2表白');
        return biaoBai('女神2');
    }
}).then(result => {
    if (result === undefined) { // 女神1同意了 接下来啥也不做
        return;
    } else if (result === true) {
        console.log('女神2同意了 停止表白');
        return;
    } else {
        console.log('女神2拒绝了 继续向女神3表白');
        return biaoBai('女神3');
    }
}).then(result => {
    if (result === undefined) { // 女神1 或 女神2 同意了 接下来啥也不做 (result === undefined 表示在此之前已经有女神同意了)
        return;
    } else if (result === true) {
        console.log('女神3同意了 停止表白');
    } else {
        console.log('女神3拒绝了 全都拒绝了');
    }
});
```

![20210418183744](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418183744.png)

![20210418183816](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418183816.png)

```
下一个 then 执行所接收的参数 主要看前一个 then 的return 是啥
这个案例中 return 只有两种情况
    1. undefined
    2. Promise -> 注意 返回的 promise 对象 并非作为后续的 then 的数据
假设
    女神1 同意了
    那么 程序执行的时间大致在 1s 左右, 因为之后的 then 接收到的都是 undefined 返回的也都是 undefined
同理
    女神1 拒绝 女神2 同意 执行 2s 左右
    女神1 和 女神2 都拒绝 执行 3s 左右
```

- [x] demo

**思考:**

`pro = pro.then(...)` 为什么这么写就能实现 pro 的串联, pro 变量明明就只有一个, 重复赋值 为什么不会覆盖前面的值?

`简化版 提取公共 code 用for循环来实现`

```js
// const godsArr = ['女神1', '女神2', '女神3'];
const godsArr = ['女神1', '女神2', '女神3', '女神4', '女神5'];
let pro;

for (let i = 0; i < godsArr.length; i++) {
    const god = godsArr[i];
    if (i === 0) { // 第一次进入循环 先确保变量 pro 存放的是一个 promise 对象
        pro = biaoBai(god);
    }
    pro = pro.then(result => {
        if (result === true) {
            console.log(`${god}同意了 停止表白`);
            return;
        } else if (result === undefined) { // 已经有女神同意了 接下来啥也不做
            return;
        } else {
            if (god !== godsArr[godsArr.length - 1]) {
                console.log(`${god}拒绝了 继续向${godsArr[i + 1]}表白`);
                return biaoBai(godsArr[i + 1]);
            } else {
                console.log(`${god}拒绝了 全都拒绝了`);
            }
        }
    });
}
```

![20210418185355](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418185355.png)

```
先执行完的 肯定是 for 循环 执行完 for 循环后 相当于创建了下面这样的 'promise 链条', 该链条仅仅是创建好了, 但是then中的异步程序的执行 并不是在创建好后 就立即执行的
```

```js
biaoBai('女神1').then(result => {
    if (result === true) {
        console.log('女神1同意了 停止表白');
        return;
    } else {
        console.log('女神1拒绝了 继续向女神2表白');
        return biaoBai('女神2');
    }
}).then(result => {
    if (result === undefined) {
        return;
    } else if (result === true) {
        console.log('女神2同意了 停止表白');
        return;
    } else {
        console.log('女神2拒绝了 继续向女神3表白');
        return biaoBai('女神3');
    }
}).then(result => {
    if (result === undefined) {
        return;
    } else if (result === true) {
        console.log('女神3同意了 停止表白');
    } else {
        console.log('女神3拒绝了 继续向女神4表白');
        return biaoBai('女神4');
    }
}).then(result => {
    if (result === undefined) {
        return;
    } else if (result === true) {
        console.log('女神4同意了 停止表白');
    } else {
        console.log('女神4拒绝了 继续向女神5表白');
        return biaoBai('女神5');
    }
}).then(result => {
    if (result === undefined) {
        return;
    } else if (result === true) {
        console.log('女神5同意了 停止表白');
    } else {
        console.log('女神5拒绝了 全都拒绝了');
    }
});
```

```
每次 pro 被赋予的都是一个 promise 对象 ———— 由上一个 pro.then 返回的全新的 promise 对象, 所以 并不会出现覆盖的情况
问: 表白结束后 pro 的状态和值分别是什么?
答: resolved undefined
```

- [ ] `补充`

`注意下面这句话, 在手写 Promise 那一节的最后一个视频中讲的 bug 就是该问题`

如果当前的Promise是已决`settled`的，会运行相应的后续处理函数`若没有相应的后续处理函数来处理 那么返回的新的 Promise 对象的状态和数据都将与 当前的 Promise 对象保持一致`

```js
const pro1 = new Promise((resolve, reject) => {
    resolve(1);
});

const pro2 = pro1.catch(err => {
    console.log(err); // 并不会执行
});

console.log(pro2 === pro1); // false
/*
pro1 和 pro2 的状态都是 resolved(fulfilled) 状态, 状态数据都是 1
*/

pro2.then(data => {
    console.log(data); // 1
});
```

## 8.5 Promise的其他api

**原型成员 (实例成员)**
- `then`：注册一个后续处理函数，当Promise为resolved状态时运行该函数 `也可以同时注册两个事件处理函数`
- `catch`：注册一个后续处理函数，当Promise为rejected状态时运行该函数
- `finally`：[ES2018]注册一个后续处理函数（无参），当Promise为已决`settled`时运行该函数

- [x] demo

```js
const pro = new Promise((resolve, reject) => {
    resolve(1);
});

pro.finally(() => console.log('finilly1'));
pro.finally(() => console.log('finilly2'));
pro.then(result => console.log(`then1 ${result * 1}`));
pro.then(result => console.log(`then1 ${result * 2}`));
pro.catch(result => console.log(`catch1 ${result * 2}`));
pro.catch(result => console.log(`catch1 ${result * 2}`));
pro.finally(() => console.log('finilly3'));
pro.finally(() => console.log('finilly4'));
```

![20210418201452](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418201452.png)

```
finally 写在前面就在前面执行
finally 写在后面就在后面执行
```

**构造函数成员 （静态成员）**

- resolve(数据)：该方法返回一个resolved状态的Promise，传递的数据作为状态数据
  - 特殊情况：如果传递的数据是Promise，则直接返回传递的Promise对象 `这一规则 (不需要记), 因为 不同浏览器会有所不同 该特殊情况适用于 chrome`
- reject(数据)：该方法返回一个rejected状态的Promise，传递的数据作为状态数据

- [x] demo

`Promise.resolve()`

```js
const pro = new Promise((resolve, reject) => {
    resolve(1);
});
console.log(pro);
```

`等价于`

```js
const pro = Promise.resolve(1);
console.log(pro);
```

![20210418201821](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418201821.png)

- [x] demo

`Promise.reject()`

```js
const pro = new Promise((resolve, reject) => {
    reject(1);
});
console.log(pro);
```

`等价于`

```js
const pro = Promise.reject(1);
console.log(pro);
```

![20210418202021](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418202021.png)

- [x] demo

`特殊情况 Promise.resolve(promise)`

```js
const p = new Promise((resolve, reject) => {
    resolve(3);
});

const pro = Promise.resolve(p); // 等效于 const pro = p;
console.log(p);
console.log(pro);
console.log(pro === p); // true
/*
[注]
const pro = Promise.resolve(p);
此时就不再是等价于下面这种写法了
const pro = new Promise((resolve, reject) => {
    resolve(p);
});
*/
```

![20210418202537](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418202537.png)

- all(iterable)：这个方法返回一个新的promise对象，该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。这个新的promise对象在触发成功状态以后，会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，顺序跟iterable的顺序保持一致；如果这个新的promise对象触发了失败状态，它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。Promise.all方法常被用于处理多个promise对象的状态集合。

> `iterator` 是后续的 `10. 迭代器与生成器` 介绍的知识点

- [x] demo

```js
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

const pros = [];

for (let i = 0; i < 10; i++) {
    pros.push(new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${i} 已完成`);
            resolve(`${i} 已完成`);
        }, getRandom(1000, 5000));
    }));
}

// console.log(pros); // 这里会立刻打印10个Promise

const pro = Promise.all(pros);

pro.then(result => {
    console.log(`全部已完成 ==> `, result);
});
```

![20210418203711](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418203711.png)

- [x] demo

`8.1 demo4 实现日志记录功能`

```js
function biaoBai(girl) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // 每次表白的时刻在 1~3s 不等 实现乱序表白
            console.log(`正在向${girl}表白`);
            if (Math.random() < 0.1) { // 1/10 的可能性同意
                console.log(girl, '同意了');
                resolve(true);
            } else {
                console.log(girl, '拒绝了');
                resolve(false);
            }
        }, Math.round(Math.random() * (3000 - 1000) + 1000));
    });
}

const pros = [];

for (let i = 0; i < 20; i++) {
    pros.push(biaoBai(`女神${i}`));
}

Promise.all(pros).then(results => {
    console.log(`日志记录为: `, results);
});
```

- [x] demo

`一旦有失败的 则立即将 Promise.all() 返回的新的 promise 对象推向 rejected 状态`

```js
function biaoBai(girl) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // 每次表白的时刻在 1~3s 不等 实现乱序表白
            console.log(`正在向${girl}表白`);
            if (Math.random() < 0.1) { // 1/10 的可能性同意
                console.log(girl, '同意了');
                resolve(true);
            } else {
                console.log(girl, '拒绝了');
                reject('作为Promise.all().catch() 的参数传入');
            }
        }, Math.round(Math.random() * (3000 - 1000) + 1000));
    });
}

const pros = [];

for (let i = 0; i < 20; i++) {
    pros.push(biaoBai(`女神${i}`));
}

Promise.all(pros).catch(err => {
    console.log('出现了失败的, 最终将不会输出日志记录, 接收到的参数为: ', err);
});
Promise.all(pros).then(results => {
    console.log(`日志记录为: `, results);
});
```

- race(iterable)：当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象

- [x] demo

`Promise.race()`

```js
function biaoBai(girl) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // 每次表白的时刻在 1~3s 不等 实现乱序表白
            console.log(`正在向${girl}表白`);
            if (Math.random() < 0.1) { // 1/10 的可能性同意
                console.log(girl, '同意了');
                resolve(true);
            } else {
                console.log(girl, '拒绝了');
                reject(false);
            }
        }, Math.round(Math.random() * (3000 - 1000) + 1000));
    });
}

const pros = [];

for (let i = 0; i < 3; i++) {
    pros.push(biaoBai(`女神${i}`));
}

Promise.race(pros).catch(err => {
    console.log('已经有女神回复的, 回复的结果是: ', err);
});
Promise.race(pros).then(result => {
    console.log(`已经有女神回复的, 回复的结果是: `, result);
});
```

- [x] demo

`8.1 demo4`

```js
function biaoBai(girl) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // 每次表白的时刻在 1~3s 不等 实现乱序表白
            console.log(`正在向${girl}表白`);
            if (Math.random() < 0.1) { // 1/10 的可能性同意
                console.log(`${girl}同意了`);
                resolve(true);
            } else {
                console.log(`${girl}拒绝了`);
                resolve(false);
            }
        }, Math.round(Math.random() * (3000 - 1000) + 1000));
    });
}

const pros = [];
let hasAgree = false;

for (let i = 0; i < 20; i++) {
    pros.push(biaoBai(`女神${i}`).then(result => {
        if (result) {
            if (hasAgree) {
                console.log(`滚... 邓哥已经找到了`);
            } else {
                hasAgree = true;
                console.log(`邓哥终于找到了...`);
            }
        }
        return result;
    }));
}

Promise.all(pros).then(results => {
    console.log('日志记录: ', results);
})
```

## 8.6 [扩展]手写Promise

**参考文章**

[JS Promise 掘金](https://juejin.cn/post/6945319439772434469)

- [ ] 奇葩的面试题

`看不懂`

```js
Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4);
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() =>{
    console.log(6);
});
```

> 输出: 0 1 2 3 4 5 6

**手写 Promise 的要求**

```
尽可能的模拟官方 promise 的功能
```

![20210418210908](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210418210908.png)

`Promise A+ 规范`

![20210512215715](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210512215715.png)

### 8.6.1 状态控制

`8.6.1 实现的是 unsettled -> settled 阶段的事情`

![20210512215919](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210512215919.png)

`Promise A+ 规范`

![20210512220012](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210512220012.png)

```
unsettled 阶段要做的事情很简单 就是把 promise 对象推向 settled 阶段即可
这就是 executor 要做的事情
```

**notes**

- promise 对象共 2 个阶段 3 个状态

```
unsettled 阶段的 pending 状态
settled 阶段的 resolved 状态 和 rejected 状态
```

- 刚创建的 promise 对象 默认处于的是 `unsettled` 阶段的 `pending` 状态

```
处于 pending 状态的 promise 对象身上的状态数据 (即: [[PromiseResult]]) 是 undefined
```

- 在调用 Promise 构造函数来创建 promise 对象的时候，仅传入一个参数，并且该参数也是一个函数，这个函数接收两个参数，分别是  `resolve` `reject` (通常起这名儿) 并且这两个参数本身也是函数

```
new Promise((resolve, reject) => {
    // ...
    resolve(数据);
    // ...
    reject(数据);
    // ...
});

设: 调用构造函数 Promise 时传入的参数是 executor 函数
则: executor 函数体内容如下
    (resolve, reject) => {
        // ...
        resolve(数据);
        // ...
        reject(数据);
        // ...
    }
executor 函数一共接收两个参数: resolve函数 和 reject函数
[注]
    1. executor 函数的函数体是在调用构造函数 Promise 的时候定义好的, 我们在封装 MyPromise 的时候, 只需要在内部执行一下 executor(resolve, reject) 语句即可;
    2. 但是 resolve 和 reject 函数的函数体是内部帮我们定义好的, 在调用 Promise 构造函数的时候, 我们仅仅是调用了内部帮我们定义好的 resolve 和 reject 函数;
       所以 我们在封装 MyPromise 的时候, 内部要提前定义好两个函数: resolve 和 reject, 等待用户使用我们封装的类 MyPromise 来创建 Promise 实例对象的时候调用它们;
```

- `resolve` 和 `reject` 这两个函数的作用

```
若 pending 状态下 先执行了 resolve
    该 promise 对象将自动跳转至 settled 阶段 的 resolved 状态
    Promise 的状态数据 [[PromiseResult]] 就是调用 resolve 时所传入的数据
若 pending 状态下 先执行了 reject (或者抛出了错误)
    该 promise 对象将自动跳转至 settled 阶段 的 rejectd 状态
    Promise 的状态数据 [[PromiseResult]] 就是调用 reject 时所传入的数据 (或者是错误信息)

[细节] 我们在内部实现 resolve 和 reject 函数时, 只需要考虑第一个参数即可, 如果用户调用这俩函数的时候, 数据传多了, 那也不会报错(官方的Promise就不会报错), 我们只管第一个就好
```

- promise 对象的状态变化是不可逆的

```
只有处于 unsettled 阶段下的 pending 状态的 promise 对象才可以发生状态的改变
并且只能变为 settled 阶段下的 resolved 状态 或 rejected 状态
```

- [x] `unsettled -> settled`

```js
const MyPromise = (() => {
    // 3个状态值
    const PENDING = 'pending';
    const RESOLVED = 'resolved';
    const REJECTED = 'rejected';
    // 符号成员
    const PromiseValue = Symbol('PromiseValue'); // 状态数据
    const PromiseStatus = Symbol('PromiseStatus'); // 当前状态值
    const changeStatus = Symbol('changeStatus'); // 改变当前状态

    return class {

        /**
         * @param {*} executor unsettled阶段 (即: pending状态下) 的处理函数
         */
        constructor(executor) {
            this[PromiseStatus] = PENDING; // promise 开始时的默认状态时 pending 状态
            this[PromiseValue] = undefined; // promise 的 value 默认是 undefined

            // resolve 函数 和 reject 函数 都只接收一个参数
            const resolve = data => { // 注意一下 this 的指向问题
                this[changeStatus](RESOLVED, data);
            }

            const reject = reason => {
                this[changeStatus](REJECTED, reason);
            }

            // 若 executor 在执行过程中出现了错误 那么执行 reject 函数 将promise的推向 settled 阶段的 rejected 状态 并将错误信息当做 reject 函数的参数传入
            try {
                executor(resolve, reject);
            } catch (err) {
                reject(err);
            }
        }

        /**
         * 改变 promise 的状态
         * @param {String} newStatus 新的状态
         * @param {*} newValue 新的值
         */
        [changeStatus](newStatus, newValue) {
            if (this[PromiseStatus] !== PENDING) { // 若当前的 promise 状态不是 pending 那么 它就处于 settled 阶段 那么它的状态已经是 resolved 或 rejected 了 处于这两个状态的 promise 对象 的状态是无法变更的
                // 状态无法变更
                return;
            } else { // 若当前的 promise 处于 pending状态 那么将根据调用的是 resolve 函数 还是 reject 函数 来确定它在 settled 阶段的状态是 resolved 还是 rejected 并同时把传递的参数也给带上
                this[PromiseStatus] = newStatus;
                this[PromiseValue] = newValue;
            }
        }
    }
})();
```

```
在立即执行函数中返回一个类表达式
利用闭包 防止变量污染全局
在 constructor 中定义 resolve 和 reject 的时候
若不使用 箭头函数 而是使用函数表达式来写 const resolve = function() {...} 那么 函数体中的 this指向将出问题 指向的是 undefined (非严格模式下为 window)
因为如果使用这种函数表达式的方式来实现的话 那么 函数体中的 this 指向是在函数被调用的时候才确定的
但是如果是使用箭头函数的方式来实现, 那么就可以实现和外层的 this 指向保持一致
executor 的两个参数 (也是两个函数) 是在外部空调用的
    空调用也就是直接调用 而不是通过 对象.方法名() 的形式来调用
        像是下面这样的写法 就叫空调用
            参数1()
            参数2()
        像是下面这样的写法 就不是空调用
            obj.fun()
```

**测试**

- [x] `刚初始化一个 promise 对象时 它的状态为 pending 值为 undefined`

```js
const pro1 = new Promise((resolve, reject)=>{

});
console.log(pro1);

const pro2 = new MyPromise((resolve, reject)=>{

});
console.log(pro2);
```

![20210427202830](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210427202830.png)

- [x] `执行 resolve 后 变为 resolved 状态`

```js
const pro1 = new Promise((resolve, reject) => {
    resolve(1);
});
console.log(pro1);

const pro2 = new MyPromise((resolve, reject) => {
    resolve(2);
});
console.log(pro2);
```

![20210427202841](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210427202841.png)

- [x] `执行 reject 后 变为 rejected 状态`

```js
const pro1 = new Promise((resolve, reject) => {
    reject(1);
});
console.log(pro1);

const pro2 = new MyPromise((resolve, reject) => {
    reject(2);
});
console.log(pro2);
```

![20210427202850](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210427202850.png)

- [x] `若 executor 运行时抛出错误 变为 rejected 状态`

```js
const pro1 = new Promise((resolve, reject) => {
    throw Error(1);
});
console.log(pro1);

const pro2 = new MyPromise((resolve, reject) => {
    throw Error(2);
});
console.log(pro2);
```

![20210427202945](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210427202945.png)

- [x] `状态不可逆`

```js
const pro1 = new Promise((resolve, reject) => {
    resolve(1);
    reject(11);
});
console.log(pro1);

const pro2 = new MyPromise((resolve, reject) => {
    resolve(2);
    reject(22);
});
console.log(pro2);
```

![20210427203011](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210427203011.png)

- [x] 独立封装一遍

`把 resolved 改为 fulfilled`

```js
const MyPromise = (() => {
    const PENDING = 'pending'; // pending 状态
    const FULFILLED = 'fulfilled'; // fulfilled 状态
    const REJECTED = 'rejected'; // rejected 状态

    const PromiseState = Symbol('[[PromiseState]]'); // promise 对象的当前状态
    const PromiseResult = Symbol('[[PromiseResult]]'); // promise 对象的当前状态数据
    const changeStatus = Symbol('changeStatus'); // 改变 promise 的状态

    return class { // 返回一个类表达式
        constructor(executor) {
            this[PromiseState] = PENDING;
            this[PromiseResult] = undefined;

            const resolve = (data) => {
                /* if (this[PromiseState] !== PENDING) {
                    return;
                } else {
                    this[PromiseState] = FULFILLED;
                    this[PromiseResult] = data;
                } */
                this[changeStatus](FULFILLED, data);
            }

            const reject = (err) => {
                /* if (this[PromiseState] !== PENDING) {
                    return;
                } else {
                    this[PromiseState] = REJECTED;
                    this[PromiseResult] = err;
                } */
                this[changeStatus](REJECTED, err);
            }

            try {
                executor(resolve, reject);
            } catch (err) {
                reject(err);
            }
        }

        /**
         * 改变当前 promise 的状态 (将其推向 settled 阶段)
         * @param {String} newState 新的状态
         * @param {*} newResult 新的值
         */
        [changeStatus](newState, newResult) {
            if (this[PromiseState] !== PENDING) {
                return;
            } else {
                this[PromiseState] = newState;
                this[PromiseResult] = newResult;
            }
        }
    }
})();
```

### 8.6.2 后续处理

`8.6.2 处理两个事件队列 thenables 和 catchables`

```
思考两个问题:
    1. 什么时候向事件队列中添加成员?
    2. 什么时候调用事件队列中的成员?
```

- 在调用 then 方法时 将 thenable 处理函数添加到作业队列 thenables 中
  - 仅传入一个参数
    - 若当前的 promise 对象的状态是 `resolved` 状态
      - 直接运行 thenable 处理函数
    - 若当前的 promise 对象的状态是 `pending` 状态
      - 将其 push 到 thenables 中
  - 传入了两个参数 `那么第二个参数就是 catchable 处理函数`
- 在调用 catch 方法时 将 catchable 处理函数添加到作业队列 catchables 中
  - 若当前的 promise 对象的状态是 `rejected` 状态
    - 直接运行 catchable 处理函数
  - 若当前的 promise 对象的状态是 `pending` 状态
    - 将其 push 到 catchables 中
- 什么时候执行?
  - 在状态改变的时候执行 事件队列 `thenables 或 catchables` 中的事件处理函数
- then 和 catch 中的程序 是 **异步** 执行的
  - 可以使用 setTimeout 来模拟异步的效果

```

```

- [ ] `thenables 和 catchables`

```js
const MyPromise = (() => {
    const PENDING = 'pending',
        RESOLVED = 'resolved',
        REJECTED = 'rejected',
        PromiseValue = Symbol('PromiseValue'),
        PromiseStatus = Symbol('PromiseStatus'),
        changeStatus = Symbol('changeStatus'),
        thenables = Symbol('thenables'), // thenables 事件队列
        catchables = Symbol('catchables'), // catchables 事件队列
        settleHandle = Symbol('settleHandler'); // 后续处理的通用函数

    return class {
        constructor(executor) {
            this[PromiseStatus] = PENDING;
            this[PromiseValue] = undefined;
            this[thenables] = []; // 后续处理函数的数组 处理 resolved 状态
            this[catchables] = []; // 后续处理函数的数组 处理 rejected 状态

            const resolve = data => {
                this[changeStatus](RESOLVED, data, this[thenables]); // 注意 可计算的属性名的读取方式 这里不能写成 this.thenables
            }

            const reject = reason => {
                this[changeStatus](REJECTED, reason, this[catchables]);
            }

            try {
                executor(resolve, reject);
            } catch (err) {
                reject(err);
            }
        }

        /**
         * 改变 promise 的状态
         * @param {String} newStatus 新的状态
         * @param {*} newValue 新的值
         * @param {*} queue 事件队列
         */
        [changeStatus](newStatus, newValue, queue) {
            if (this[PromiseStatus] !== PENDING) {
                return;
            } else {
                this[PromiseStatus] = newStatus;
                this[PromiseValue] = newValue;
            }

            queue.forEach(handler => {
                handler(newValue);
            });
        }

        /* then(thenable, catchable) {
            if (this[PromiseStatus] === RESOLVED) { // 当前的 promise 对象是 resolved 状态 直接调用 thenable 即可 不需要将它丢到 thenables 事件队列中
                // thenable(); // 注意: 因为 thenable 是异步调用的 我们如果直接这么写 它就是同步程序了
                setTimeout(() => { // 使用 setTimeout 来模拟一下异步效果
                    thenable();
                }, 0);
            } else { // 当前的 promise 对象是 pending 状态
                this[thenables].push(thenable);
            }
            this.catch(catchable);
        }

        catch (catchable) {
            if (this[PromiseStatus] === REJECTED) {
                setTimeout(() => {
                    catchable();
                }, 0);
            } else {
                this[catchables].push(catchable);
            }
        } */

        /**
         * 后续事件处理
         * @param {Function} handler 事件处理函数
         * @param {String} immediatelyStatus 立即执行的状态
         * @param {Array} queue 事件队列
         */
        [settleHandle](handler, immediatelyStatus, queue) {
            if (this[PromiseStatus] === immediatelyStatus) {
                setTimeout(() => {
                    handler();
                }, 0);
            } else {
                queue.push(handler);
            }
        }

        then(thenable, catchable) {
            this[settleHandle](thenable, RESOLVED, this[thenables]);
            if (catchable) {
                this.catch(catchable);
            }
        }

        catch (catchable) {
            this[settleHandle](catchable, REJECTED, this[catchables]);
        }

    }
})();
```

- [ ] `提取公共代码 减少冗余度`

```js
then(thenable, catchable) {
    if(this[promiseStatus] === RESOLVED){
        setTimeout(() => {
            thenable(this[promiseValue]);
        }, 0);
    }else{
        this.thenables.push(thenable);
    }
    if (catchable) {
        catchable(this[promiseValue]);
    }
}

catch(catchable) {
    if(this[promiseStatus] === REJECTED){
        setTimeout(() => {
            catchable(this[promiseValue]);
        }, 0);
    }else{
        this.catchables.push(catchable);
    }
}
```

`提取后`

```js
/**
 * 后续处理的通用函数
 * @param {Function} handler 事件处理函数
 * @param {String} immediatelyStatus 需要立即执行的状态
 * @param {Array} queue 事件队列
 */
[settleHandle](handler, immediatelyStatus, queue) {
    if(typeof handler !== 'function'){
        return;
    }
    if(this[promiseStatus] === immediatelyStatus){
        setTimeout(() => {
            handler(this[promiseValue]);
        }, 0);
    }else{
        queue.push(catchable);
    }
}

then(thenable, catchable) {
    this[settleHandle](thenable, RESOLVED, this.thenables);
    if (catchable) {
        catchable(this[promiseValue]);
    }
}

catch(catchable) {
    this[settleHandle](catchable, REJECTED, this.catchables);
}
```

```
感觉上 代码也没少多少 反而好像还多了一些, 不过需要掌握的是: 学会提取公共代码的能力, 仔细看看这个例子 提取前和提取后 是等效的, 主要是 观察 then() catch() 中 变 和 不变的地方, 变的地方 提取出来 作为函数的参数传入, 不变的地方 直接照抄就好
```

- [ ] 独立封装一遍

```js
const MyPromise = (() => {
    const PENDING = 'pending',
        FULFILLED = 'fulfilled',
        REJECTED = 'rejected',
        PromiseState = Symbol('[[PromiseState]]'),
        PromiseResult = Symbol('[[PromiseResult]]'),
        changeStatus = Symbol('changeStatus'),
        fulfilledList = Symbol('fulfilledList'), // thenables
        rejectedList = Symbol('rejectedList'), // catchables
        settleHandle = Symbol('settleHandle');

    return class MyPromise {
        [changeStatus](newStatus, newValue, queue) {
            if (this[PromiseState] !== PENDING) {
                return;
            } else {
                this[PromiseState] = newStatus;
                this[PromiseResult] = newValue;
            }
            queue.forEach(handler => {
                handler(this[PromiseResult]);
            });
        }

        constructor(executor) {
            this[PromiseState] = PENDING;
            this[PromiseResult] = undefined;
            this[fulfilledList] = [];
            this[rejectedList] = [];

            const resolve = (data) => {
                this[changeStatus](FULFILLED, data, this[fulfilledList]);
            }

            const reject = (err) => {
                this[changeStatus](REJECTED, err, this[rejectedList]);
            }

            try {
                executor(resolve, reject);
            } catch (err) {
                reject(err);
            }
        }

        [settleHandle](handler, immediatelyState, queue) {
            if (this[PromiseState] === immediatelyState) {
                setTimeout(() => {
                    handler(this[PromiseResult]);
                }, 0);
            } else {
                queue.push(handler);
            }
        }

        then(thenable, catchable) {
            this[settleHandle](thenable, FULFILLED, this[fulfilledList])
            if (catchable) {
                this.catch(catchable);
            }
        }

        catch (catchable) {
            this[settleHandle](catchable, REJECTED, this[rejectedList])
        }
    }
})();
```

**测试**

- [ ] 任务队列

```js
const pro1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('dahuyou');
    }, 1000);
});

pro1.then(data => {
    console.log('resolve', 1, data);
});
pro1.then(data => {
    console.log('resolve', 2, data);
});
pro1.then(data => {
    console.log('resolve', 3, data);
}, err => {
    console.log('reject', 1, err);
});
pro1.catch(err => {
    console.log('reject', 2, err);
});
pro1.catch(err => {
    console.log('reject', 3, err);
});
```

![20210420224337](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210420224337.png)

```js
const pro2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('dahuyou');
    }, 1000);
});

pro2.then(data => {
    console.log('resolve', 1, data);
});
pro2.then(data => {
    console.log('resolve', 2, data);
});
pro2.then(data => {
    console.log('resolve', 3, data);
}, err => {
    console.log('reject', 1, err);
});
pro2.catch(err => {
    console.log('reject', 2, err);
});
pro2.catch(err => {
    console.log('reject', 3, err);
});
```

![20210420224337](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210420224337.png)

```js
const pro1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject('dahuyou');
    }, 1000);
});

pro1.then(data => {
    console.log('resolve', 1, data);
});
pro1.then(data => {
    console.log('resolve', 2, data);
});
pro1.then(data => {
    console.log('resolve', 3, data);
}, err => {
    console.log('reject', 1, err);
});
pro1.catch(err => {
    console.log('reject', 2, err);
});
pro1.catch(err => {
    console.log('reject', 3, err);
});
```

![20210420224547](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210420224547.png)

```js
const pro2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject('dahuyou');
    }, 1000);
});

pro2.then(data => {
    console.log('resolve', 1, data);
});
pro2.then(data => {
    console.log('resolve', 2, data);
});
pro2.then(data => {
    console.log('resolve', 3, data);
}, err => {
    console.log('reject', 1, err);
});
pro2.catch(err => {
    console.log('reject', 2, err);
});
pro2.catch(err => {
    console.log('reject', 3, err);
});
```

![20210420224454](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210420224454.png)

### 8.6.3 串联Promise

- 状态变化
  - 当 当前的 promise 对象的 `then/catch` 运行完成后 返回的 promise 是 `resolved` 状态;
  - 如果在运行 `then/catch` 中的程序抛出了错误, 那么返回的 promise 对象是 `rejected` 状态;
- 传递的值
  - 上一个 promise 的 `thenable/catchable` 方法的返回值 作为下一个 promise 的 `[[promiseValue]]`
  - 特殊情况: 若返回的是 promise 对象, 那么下一个 promise 对象的 `[[promiseStatus]]` 和 `[[promiseValue]]` 都和返回的这个 promise 对象保持一致

```js
const MyPromise = (() => {
    const PENDING = 'pending',
        FULFILLED = 'fulfilled',
        REJECTED = 'rejected',
        PromiseState = Symbol('[[PromiseState]]'),
        PromiseResult = Symbol('[[PromiseResult]]'),
        changeStatus = Symbol('changeStatus'),
        fulfilledList = Symbol('fulfilledList'), // thenables
        rejectedList = Symbol('rejectedList'), // catchables
        settleHandle = Symbol('settleHandle'),
        linkPromise = Symbol('linkPromise'); // 创建串联的 Promise

    return class MyPromise {
        [changeStatus](newStatus, newValue, queue) {
            if (this[PromiseState] !== PENDING) {
                return;
            } else {
                this[PromiseState] = newStatus;
                this[PromiseResult] = newValue;
            }
            queue.forEach(handler => {
                handler(this[PromiseResult]);
            });
        }

        constructor(executor) {
            this[PromiseState] = PENDING;
            this[PromiseResult] = undefined;
            this[fulfilledList] = [];
            this[rejectedList] = [];

            const resolve = (data) => {
                this[changeStatus](FULFILLED, data, this[fulfilledList]);
            }

            const reject = (err) => {
                this[changeStatus](REJECTED, err, this[rejectedList]);
            }

            try {
                executor(resolve, reject);
            } catch (err) {
                reject(err);
            }
        }

        /* [linkPromise](thenable, catchable) { // 若 thenable函数 或者 catchable函数 是正常执行 那么返回的新的 Promise 的状态是 resolved 状态，若执行过程中抛出了错误，那么返回的新的 Promise 的状态是 rejected 状态
            return new MyPromise((resolve, reject) => {
                this[settleHandle]((data) => {
                    try {
                        const result = thenable(data); // 第一个参数这么写的目的是为了得知 thenable 在什么时候执行 ==> 这样我们就可以知道它执行的时候是 “正常执行” 还是 “报错” ==> 若是正常执行 那么我们可以接收到它的处理结果，并将处理结果保存到变量 result 中，作为返回的新的 Promise 的状态数据
                        resolve(result); // 一旦前一个 Promise 得到了一个处理结果 （也就是说 在执行 then 或 catch 的时候没报错） ==> 返回的新的 Promise 的状态立即变为 resolved
                    } catch (reason) {
                        reject(reason);
                    }
                }, FULFILLED, this[fulfilledList]);

                this[settleHandle]((err) => {
                    try {
                        const result = catchable(err);
                        resolve(result);
                    } catch (reason) {
                        reject(reason);
                    }
                }, FULFILLED, this[rejectedList]);
            });
        } */

        [linkPromise](thenable, catchable) { // 若 thenable函数 或者 catchable函数 是正常执行 那么返回的新的 Promise 的状态是 resolved 状态，若执行过程中抛出了错误，那么返回的新的 Promise 的状态是 rejected 状态
            function exec(data, handler, resolve, reject) {
                try {
                    const result = handler(data);
                    if (result instanceof MyPromise) {
                        result.then(data => {
                            resolve(data);
                        }, err => {
                            reject(err);
                        });
                    } else {
                        resolve(result);
                    }
                } catch (reason) {
                    reject(reason);
                }
            }
            return new MyPromise((resolve, reject) => {
                this[settleHandle]((data) => {
                    exec(data, thenable, resolve, reject);
                }, FULFILLED, this[fulfilledList]);

                this[settleHandle]((err) => {
                    exec(err, catchable, resolve, reject);
                }, FULFILLED, this[rejectedList]);
            });
        }

        [settleHandle](handler, immediatelyState, queue) {
            if (this[PromiseState] === immediatelyState) {
                setTimeout(() => {
                    handler(this[PromiseResult]);
                }, 0);
            } else {
                queue.push(handler);
            }
        }

        then(thenable, catchable) {
            // this[settleHandle](thenable, FULFILLED, this[fulfilledList]);
            if (catchable) {
                this.catch(catchable);
            }
            return this[linkPromise](thenable, catchable);
        }

        catch (catchable) {
            // this[settleHandle](catchable, REJECTED, this[rejectedList]);
            return this[linkPromise](undefined, catchable);
        }
    }
})();
```

```js
const MyPromise = (() => {
    const PENDING = 'pending',
        REJECTED = 'rejected',
        FULFILLED = 'fulfilled',
        PromiseState = Symbol('[[PromiseState]]'),
        PromiseResult = Symbol('[[PromiseResult]]'),
        changeState = Symbol('changeState'),
        fulfilledList = Symbol('fulfilledList'),
        rejectedList = Symbol('rejectedList'),
        settleHandle = Symbol('settleHandle'),
        linkPromise = Symbol('linkPromise');

    return class MyPromise {

        [changeState](newState, newValue, queue) {
            if (this[PromiseState] !== PENDING) {
                return;
            } else {
                this[PromiseState] = newState;
                this[PromiseResult] = newValue;
                queue.forEach(handler => {
                    handler(this[PromiseResult]);
                });
            }
        }

        constructor(executor) {
            this[PromiseState] = PENDING;
            this[PromiseResult] = undefined;
            this[fulfilledList] = [];
            this[rejectedList] = [];

            const resolve = (data) => {
                this[changeState](FULFILLED, data, this[fulfilledList]);
            }

            const reject = (err) => {
                this[changeState](REJECTED, err, this[rejectedList]);
            }

            try {
                executor(resolve, reject);
            } catch (err) {
                reject(err);
            }
        }

        [linkPromise](thenable, catchable) {
            function exec(data, handler, resolve, reject) {
                try {
                    const result = handler(data);
                    if (result instanceof MyPromise) {
                        result.then(data => {
                            resolve(data);
                        }, err => {
                            reject(err);
                        })
                    } else {
                        resolve(result);
                    }
                } catch (err) {
                    reject(err);
                }
            }
            return new MyPromise((resolve, reject) => {
                this[settleHandle](((data) => {
                    if (typeof thenable !== 'function') {
                        resolve(data);
                        return;
                    }
                    exec(data, thenable, resolve, reject);
                }), FULFILLED, this[fulfilledList]);

                this[settleHandle](((reason) => {
                    if (typeof catchable !== 'function') {
                        reject(reason);
                        return;
                    }
                    exec(reason, catchable, resolve, reject);
                }), REJECTED, this[rejectedList]);
            });
        }

        [settleHandle](handler, immediatelyState, queue) {
            if (this[PromiseState] === immediatelyState) {
                setTimeout(() => {
                    handler(this[PromiseResult]);
                }, 0);
            } else {
                queue.push(handler);
            }
        }

        then(thenable, catchable) {
            if (catchable) {
                this.catch(catchable);
            }
            return this[linkPromise](thenable, catchable);
        }

        catch (catchable) {
            return this[linkPromise](undefined, catchable);
        }
    }
})();


/* 测试 */
new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
}).catch(err => {
    console.log(err);
}).then(data => {
    console.log(data);
});


new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
}).catch(err => {
    console.log(err);
}).then(data => {
    console.log(data);
});


new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject(1);
    }, 1000);
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

const pro = new MyPromise((resolve, reject) => {
    resolve(1);
});

pro.then(data => {
    console.log(data);
    return 'dahuyou';
}).then(data => {
    console.log(data);
})

ajax({
    url: './data/students.json?name=李华',
}).then(stus => {
    for (let i = 0; i < stus.length; i++) {
        const stu = stus[i];
        if (stu.name === '李华') {
            const cid = stu.classId; // 获取到班级id
            console.log(`获取到李华所在的班级id: ${cid}`);
            return cid;
        }
    }
}).then(cid => {
    return ajax({
        url: './data/classes.json?classId=' + cid,
    }).then(cls => {
        for (let i = 0; i < cls.length; i++) {
            const cl = cls[i];
            if (cl.id === cid) {
                const tid = cl.teacherId;
                console.log(`获取到班级id为: ${cid} 的老师id: ${tid}`);
                return tid;
            }
        }
    });
}).then(tid => {
    return ajax({
        url: './data/teachers.json?teacherId=' + tid,
    }).then(ts => {
        for (let i = 0; i < ts.length; i++) {
            const t = ts[i];
            if (t.id === tid) {
                console.log(`获取到id为: ${tid} 的老师信息`, t);
                return t;
            }
        }
    });
}).then(t => {
    console.log('此时已经获取到了李华的老师信息, 下面可以对其进行相关操作');
    console.log(t);
});
```

### 8.6.4 其他API

```
static all
static race
static resolve
static reject
```

```js
const MyPromise = (() => {
    const PENDING = 'pending',
        REJECTED = 'rejected',
        FULFILLED = 'fulfilled',
        PromiseState = Symbol('[[PromiseState]]'),
        PromiseResult = Symbol('[[PromiseResult]]'),
        changeState = Symbol('changeState'),
        fulfilledList = Symbol('fulfilledList'),
        rejectedList = Symbol('rejectedList'),
        settleHandle = Symbol('settleHandle'),
        linkPromise = Symbol('linkPromise');

    return class MyPromise {

        [changeState](newState, newValue, queue) {
            if (this[PromiseState] !== PENDING) {
                return;
            } else {
                this[PromiseState] = newState;
                this[PromiseResult] = newValue;
                queue.forEach(handler => {
                    handler(this[PromiseResult]);
                });
            }
        }

        constructor(executor) {
            this[PromiseState] = PENDING;
            this[PromiseResult] = undefined;
            this[fulfilledList] = [];
            this[rejectedList] = [];

            const resolve = (data) => {
                this[changeState](FULFILLED, data, this[fulfilledList]);
            }

            const reject = (err) => {
                this[changeState](REJECTED, err, this[rejectedList]);
            }

            try {
                executor(resolve, reject);
            } catch (err) {
                reject(err);
            }
        }

        [linkPromise](thenable, catchable) {
            function exec(data, handler, resolve, reject) {
                try {
                    const result = handler(data);
                    if (result instanceof MyPromise) {
                        result.then(data => {
                            resolve(data);
                        }, err => {
                            reject(err);
                        })
                    } else {
                        resolve(result);
                    }
                } catch (err) {
                    reject(err);
                }
            }
            return new MyPromise((resolve, reject) => {
                this[settleHandle](((data) => {
                    if (typeof thenable !== 'function') {
                        resolve(data);
                        return;
                    }
                    exec(data, thenable, resolve, reject);
                }), FULFILLED, this[fulfilledList]);

                this[settleHandle](((reason) => {
                    if (typeof catchable !== 'function') {
                        reject(reason);
                        return;
                    }
                    exec(reason, catchable, resolve, reject);
                }), REJECTED, this[rejectedList]);
            });
        }

        [settleHandle](handler, immediatelyState, queue) {
            if (this[PromiseState] === immediatelyState) {
                setTimeout(() => {
                    handler(this[PromiseResult]);
                }, 0);
            } else {
                queue.push(handler);
            }
        }

        then(thenable, catchable) {
            /* if (catchable) {
                this.catch(catchable);
            } */
            return this[linkPromise](thenable, catchable);
        }

        catch (catchable) {
            return this[linkPromise](undefined, catchable);
        }

        static all(proms) {
            return new MyPromise((resolve, reject) => {
                const results = proms.map(p => {
                    const obj = {
                        result: undefined,
                        isFulfilled: false
                    }
                    p.then(data => {
                        obj.result = data;
                        obj.isFulfilled = true;
                        const unFulfilled = results.filter(r => !r.isFulfilled);
                        if (unFulfilled.length === 0) { // 当未完成的 Promise 的个数为 0 的时候，即：所有的Promise都完成了
                            resolve(results.map(r => r.result)); // 则将所有的 Promise 的状态数据映射为一个数组 作为 resolved 状态的数据传入
                        }
                    }, reason => { // 一旦有失败的 新返回的 Promise 直接变为 rejected 状态
                        reject(reason);
                    });
                    return obj;
                });
            })
        }

        static race(proms) {
            return new MyPromise((resolve, reject) => {
                proms.forEach(p => {
                    p.then(data => { // 一旦有一个 Promsie 的状态发生改变，那么返回的Promise的状态也就会随之发生改变
                        resolve(data);
                    }, err => {
                        reject(err);
                    });
                })
            });
        }

        static resolve(data) {
            if (data instanceof MyPromise) { // [特殊情况] 若 resolve 传入的参数是一个 Promise 对象 那么直接将该 Promise 对象返回即可
                return data;
            } else {
                return new MyPromise((resolve, reject) => {
                    resolve(data);
                });
            }
        }

        static reject(reason) {
            return new MyPromise((resolve, reject) => {
                reject(reason);
            });
        }
    }
})();
```

### 8.6.5 补充

```
两处小 bug
```

## 8.7 async和await

```
async 和 await 实际上是俩语法糖
在学习它们的过程中 多写几遍它们的等效写法 更有助于掌握它们实际表示的含义和作用
```

async 和 await 是 ES2016 新增两个关键字，它们借鉴了 ES2015 中生成器在实际开发中的应用，目的是简化 Promise api 的使用，并非是替代 Promise。

**async**

目的是简化在函数的返回值中对Promise的创建

async 用于修饰函数（无论是函数字面量还是函数表达式），放置在函数最开始的位置，被修饰函数的返回结果一定是 Promise 对象。

```js
async function test(){
    console.log(1);
    return 2;
}
```

`等效写法`

```js
function test(){
    return new Promise((resolve, reject)=>{
        console.log(1);
        resolve(2);
    })
}
```

```
被 async 修饰的函数 必定返回 Promise 对象

若要执行 Promise 对象中的 resolve(参数); 那么就直接 return 参数;

    async function test() {
        return 参数;
    }
    等价于
    function test() {
        return new Promise((resolve, reject) => {
            resolve(参数);
        });
    }

若要执行 Promise 对象中的 reject(参数); 那么就直接 throw 参数;

    async function test() {
        throw 参数;
    }
    等价于
    function test() {
        return new Promise((resolve, reject) => {
            reject(参数);
        });
    }
```

- [x] demo

`特殊情况: 返回 promise 对象`

```js
async function test() {
    console.log('dahuyou');
    return new Promise((resolve, reject) => {
        resolve(1);
    });
}

const a = test();

console.log(a);
```

![20210427191918](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210427191918.png)

```
如果 被 async关键字 修饰的函数中 返回的是一个 promise 对象 那么就直接返回该 promise 对象 (也就是说 此时写/不写 async 关键字来修饰该函数 效果都是一样的)

    async function test() {
        return new Promise((resolve, reject) => {
            resolve(参数);
        });
    }

    等价于

    function test() {
        return new Promise((resolve, reject) => {
            resolve(参数);
        });
    }
```

- [x] demo

```js
function test() {
    console.log('dahuyou');
    return new Promise((resolve, reject) => {
        resolve(1);
    });
}

const a = test();

console.log(a);
```

![20210427191933](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210427191933.png)

```
是否使用 async 关键字来修饰 貌似还是有点区别的 就是返回的 promise 对象的初始状态 是不同的... (原因不详, 先跳过... )
```

- [x] demo

`[特殊情况] 注意 async 修饰的函数的返回值的书写位置`

```js
async function biaobai(god) {
    console.log(`邓哥向女生【${god}】发出了表白短信`);
    setTimeout(() => {
        if (Math.random() < 0.5) {
            return true;
        } else {
            return false;
        }
    }, 3000);
}
```

```
[注] 上面这样的写法是错误的, 因为setTimeout 也是一个函数, 我们若要返回(return), 那么得在 biaobai 函数中返回, 而不能在其他函数中返回, 这个案例就是在 biaobai 函数内部的其他函数(setTimeout)中返回, 并不是biaobai函数的返回值
```

```js
// 这种情况还是老老实实的不要使用 async 提供的语法糖来实现函数内部返回 Promise, 直接写等效的代码就好
function biaobai(god) {
    console.log(`邓哥向女生【${god}】发出了表白短信`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve(true);
            } else {
                resolve(false);
            }
        }, 3000);
    });
}
```

**await**

await关键字只能出现在async函数中！！！！

await用在某个表达式之前，如果表达式是一个Promise，则得到的是thenable中的状态数据。`得到的是该 Promise 的处理结果, 该`

```
思考: 为什么 await 关键字 只能出现在 被 async 关键字修饰的函数中?
视频: 12min ~ 16min 有讲到, 但是没理解为什么... 目前的理解是:
    1. 从 "等待" 的角度 ==> 因为 await 起到了一个等待处理结果的功能, 如果它出现在了普通函数中, 那么会出问题, 因为普通函数的调用 瞬间就执行完了, 如果执行到 await 修饰的语句时, 还要等, 那显然是矛盾的; 但是, 如果 await 出现在了 async 修饰的函数中, 因为 async 修饰的函数返回的是一个新的 Promise 对象, 被修饰的函数的所有代码, 都是异步的, 都会被丢到 Promise 构造函数的参数方法中执行, 而异步代码, 等, 就合情合理了;
    2. 从返回值的角度 ==> 普通函数的返回值, 就是很正常的返回值, 而 await 修饰的 异步程序之后的 return 语句, 相当于 resolve 语句, 因为 await 之所以能够起到等待的作用, 其实就是它把后续的代码都放到了 then 方法中, 而 then 方法中的代码能够执行的前提是, 被 await 修饰的那个 Promise 对象被推向了 settled 阶段, 但是 return 将被识别为 resolve, 因为如果还是 return 的话, 那么就相当于是返回被 await 修饰的那个 Promise 的结果数据了, 而不是 async 修饰的函数所返回的结果数据;
    ... 应该是理解错了 ... 反正就是强行解释一波 ... 实在想不出来为何 await 只能用在 async 修饰的函数中 (学过node之后, 这句话貌似就不成立了 在网上看了一下 好像是可以举出反例的)
    PS: 提供一个渠道: 在学完 Generator 之后, 可以尝试使用 Generator 来仿造 async 和 await 的效果, 来手写一下 async 和 await (前提: 先能够熟练的使用 async 和 await 再说)
```

```js
async function test1(){
    console.log(1);
    return 2;
}

async function test2(){
    const result = await test1();
    console.log(result);
}

test2();
```

`等效写法`

```js
function test1(){
    return new Promise((resolve, reject)=>{
        console.log(1);
        resolve(2);
    })
}

function test2(){
    return new Promise((resolve, reject)=>{
        test1().then(data => {
            const result = data;
            console.log(result);
            resolve();
        })
    })
}

test2();
```

```
可以这么理解: await 修饰的 promise 的后续的语句 都在 该 promise 的 then 里面
比如该案例中 await 修饰的 test1(), 它后面的所有程序 都在 test1().then(...) 的 then 里面
```

- [x] demo

```js
new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
}).then(result => {
    console.log(result);
});
```

![20210421154531](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210421154531.png)

`等效写法`

```js
async function test1() {
    console.log(1);
    return 2;
}

async function test2() {
    const result = await test1();
    console.log(result);
}

test2();
```

> 回看 8.1 中的使用 async 和 await 关键字来实现获取老师信息的demo

- [x] demo

`async 也可以用来修饰立即执行函数`

```js
// (async function() { // 像是这样写成函数表达式的形式 也 okk
(async () => {
    const cid = await ajax({ // 获取所有的学生信息
        url: './data/students.json'
    }).then(stus => {
        for (let i = 0; i < stus.length; i++) {
            const stu = stus[i];
            if (stu.name === '李华') {
                const cid = stu.classId; // 获取到班级id
                console.log(`获取到李华所在的班级id: ${cid}`);
                return cid;
            }
        }
    });
    const tid = await ajax({
        url: './data/classes.json'
    }).then(cls => {
        for (let i = 0; i < cls.length; i++) {
            const cl = cls[i];
            if (cl.id === cid) {
                const tid = cl.teacherId;
                console.log(`获取到班级id为: ${cid} 的老师id: ${tid}`);
                return tid;
            }
        }
    });
    const t = await ajax({
        url: './data/teachers.json'
    }).then(ts => {
        for (let i = 0; i < ts.length; i++) {
            const t = ts[i];
            if (t.id === tid) {
                console.log(`获取到id为: ${tid} 的老师信息`, t);
                return t;
            }
        }
    });
    console.log('此时已经获取到了李华的老师信息, 下面可以对其进行相关操作');
    console.log(t);
})();
```

![20210511205831](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210511205831.png)

- [x] demo

`将 async 和 await 的语法糖转化为常规的 Promise 写法`

```js
(async () => {
    const stus = await ajax({
        url: './data/students.json'
    });
    let cid = null;
    for (let i = 0; i < stus.length; i++) {
        const stu = stus[i];
        if (stu.name === '李华') {
            cid = stu.classId;
        }
    }
    const cls = await ajax({
        url: './data/classes.json'
    });
    let tid = null;
    for (let i = 0; i < cls.length; i++) {
        const cl = cls[i];
        if (cl.id === cid) {
            tid = cl.teacherId;
        }
    }
    const ts = await ajax({
        url: './data/teachers.json'
    });
    let teacher = null;
    for (let i = 0; i < ts.length; i++) {
        const t = ts[i];
        if (t.id === tid) {
            teacher = t;
        }
    }
    console.log(teacher);
})();

/* 等价写法 */

(() => {
    return new Promise((resolve, reject) => {
        ajax({
            url: './data/students.json'
        }).then(data => {
            const stus = data;
            let cid = null;
            for (let i = 0; i < stus.length; i++) {
                const stu = stus[i];
                if (stu.name === '李华') {
                    cid = stu.classId;
                }
            }
            ajax({
                url: './data/classes.json'
            }).then(data => {
                const cls = data;
                let tid = null;
                for (let i = 0; i < cls.length; i++) {
                    const cl = cls[i];
                    if (cl.id === cid) {
                        tid = cl.teacherId;
                    }
                }
                ajax({
                    url: './data/teachers.json'
                }).then(data => {
                    const ts = data;
                    let teacher = null;
                    for (let i = 0; i < ts.length; i++) {
                        const t = ts[i];
                        if (t.id === tid) {
                            teacher = t;
                        }
                    }
                    console.log(teacher);
                });
            });
        });
    });
})();
```

![20210512000037](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210512000037.png)

- [x] demo

```js
function biaoBai(god) {
    return new Promise((resolve, reject) => {
        console.log(`邓哥向${god}发出了表白短信`);
        setTimeout(() => {
            if (Math.random() < 0.1) {
                resolve(true); // 女神同意了
            } else {
                resolve(false); // 女神拒绝了
            }
        }, 0);
    });
}

const godsArr = ['女神1', '女神2', '女神3', '女神4', '女神5'];
let pro;

for (let i = 0; i < godsArr.length; i++) {
    const god = godsArr[i];
    if (i === 0) {
        pro = biaoBai(god);
    }
    pro = pro.then(result => {
        if (result === true) {
            console.log(`${god}同意了 停止表白`);
            return;
        } else if (result === undefined) { // 已经有女神同意了 接下来啥也不做
            return;
        } else {
            if (god !== godsArr[godsArr.length - 1]) {
                console.log(`${god}拒绝了 继续向${godsArr[i + 1]}表白`);
                return biaoBai(godsArr[i + 1]);
            } else {
                console.log(`${god}拒绝了 全都拒绝了`);
            }
        }
    });
}
```

- [x] demo

`使用 async 和 await 来实现`

```js
async function biaoBaiAll() {
    const godsArr = ['女神1', '女神2', '女神3', '女神4', '女神5'];
    for (let i = 0; i < godsArr.length; i++) {
        const god = godsArr[i];
        const result = await biaoBai(god); // 当前循环等待的 promise 没有 resolve ==> 下一次循环不运行
        if (result === true) {
            console.log(`${god}同意了 停止表白`);
            break;
        } else {
            if (god !== godsArr[godsArr.length - 1]) {
                console.log(`${god}拒绝了 继续向${godsArr[i + 1]}表白`);
            } else {
                console.log(`${god}拒绝了 全都拒绝了`);
            }
        }
    }
}

biaoBaiAll();
```

```
在循环中使用 await 关键字的注意点 ==> 当前循环等待的 promise 没有 resolve ==> 下一次循环不运行 ==> 所以我们不用再写 串联的 promise 来实现了
```

如果await的表达式不是Promise，则会将其使用Promise.resolve包装后按照规则运行

- [x] demo

`await 后面跟的不是 promise 的情况`

```js
async function test() {
    const result = await 1;
    console.log(result);
}

test();

console.log(123);
```

`等效`

```js
function test() {
    return new Promise((resolve, reject) => {
        Promise.resolve(1).then(data => {
            const result = data;
            console.log(result);
        })
    });
}

test();

console.log(123);
```

![20210421164052](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210421164052.png)

```
如果await的表达式不是Promise，则会将其使用Promise.resolve包装后按照规则运行
```

- [x] demo

`如何在 async 修饰的函数中 将返回的 promise 对象推向 rejected 状态`

```js
async function getPromise() {
    if (Math.random() < 0.5) {
        return 1;
    } else {
        throw 2;
    }
}

async function test() {
    /* getPromise().then(data => {
        const result = data;
        console.log("正常状态", result)
    }, err => {
        console.log("错误状态", err);
    }) */
    // 等效
    try {
        const result = await getPromise();
        console.log("正常状态", result)
    } catch (err) {
        console.log("错误状态", err);
    }
}

test();
```

当 await 修饰的 promise 在推向 settled 阶段的过程中出现了错误, 该如何处理?

- [x] demo

```js
async function myFunction() {
    try {
        await somethingThatReturnAPromise();
    } catch (err) {
        console.log(err);
    }
}
```

```
由于 await 修饰的 promise 也有可能会出错 (也就是会推向 rejected 状态) 所以一般会将它写在 try-catch 里面
```

- [x] demo

`使用 promise.catch api 来替代 try-catch`

```js
async function myFunction() {
    await somethingThatReturnAPromise().catch(function (err) {
        console.log(err);
    });
}
```

- [x] demo

`改造计时器函数`

```js
function delay(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

async function biaobai(god) {
    console.log(`邓哥向${god}发出了表白短信`);
    await delay(500);
    return Math.random() < 0.3;
}
```

```
注意: 这个 delay 只能在被 async 修饰的函数中使用 否则无效
```

- [x] demo

```js
function delay(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

function test() {
    delay(1000);
    console.log('dahuyou'); // 并不会等 1s 后输出 dahuyou
}

test();
```

# 9. FetchApi

参考资料: [Fetch API 教程 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html)

`9. FetchApi [课程规划与指导]`

| 知识点 | 难度 | 重要性 | 学习视频          | 视频时长(min) | 学习次数 |
| ------ | ---- | ------ | ----------------- | ------------- | -------- |
| es6    | 2    | 3      | 1. Fetch Api 概述 | 14            | 3/1      |
| es6    | 2    | 4      | 2. 基本使用       | 28            | 2/1      |
| es6    | 2    | 3      | 3. Request对象    | 9             | 2/1      |
| es6    | 2    | 3      | 4. Response对象   | 6             | 2/1      |
| es6    | 2    | 3      | 5. Headers对象    | 13            | 2/1      |
| es6    | 4    | 3      | 6. 文件上传       | 25            | 2/1      |

| 学习时间 | 达成效果                      | 老师建议                                                                                                                         |
| -------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 0.5天    | 学会使用fetch api完成ajax功能 | 重点在fetch的基本使用，虽然很简单，但要多练几遍，特别是各种请求方法下的代码，做到熟练运用，因为之后基本就告别xhr或jquery的方式了 |

```
PS: Fetch Api 并非 ES6 中的知识, 它是 H5 的一个 api, 但由于 它用到了 ES6 中的 promise 而我们刚学完 promise 所以就提到这里讲了
```

| CN                       | EN                                     |
| ------------------------ | -------------------------------------- |
| 异步的 JavaScript 和 XML | `ajax` Asynchronous JavaScript and XML |
| 拿来                     | fetch                                  |
| 查询字符串参数           | Query String Parameters                |
| 头像, 化身               | avatar                                 |

## 9.1 Fetch Api 概述

**XMLHttpRequest的问题**

1. 所有的功能全部集中在同一个对象上，容易书写出混乱不易维护的代码
2. 采用传统的事件驱动模式，无法适配新的 Promise Api

**Fetch Api 的特点**

1. 并非取代 AJAX，而是对 AJAX 传统 API 的改进
2. 精细的功能分割：头部信息、请求信息、响应信息等均分布到不同的对象，更利于处理各种复杂的 AJAX 场景
3. 使用 Promise Api，更利于异步代码的书写
4. Fetch Api 并非 ES6 的内容，属于 HTML5 新增的 Web Api
5. 需要掌握网络通信的知识

## 9.2 基本使用

[HTTP请求头和响应头详解 简书](https://www.jianshu.com/p/9a68281a3c84)

- [ ] 知道 http 请求的 请求头和请求体 分别是哪一部分

[简书 http跨域时的options请求](https://www.jianshu.com/p/5cf82f092201)

- [ ] 知道 什么是 预检

> 请求测试地址：http://101.132.72.36:5100/api/local

使用 ```fetch``` 函数即可立即向服务器发送网络请求

### 参数

该函数有两个参数：

1. 必填，字符串，请求地址
2. 选填，对象，请求配置

**请求配置对象**

- **method**：字符串，请求方法，默认值GET
- **headers**：对象，请求头信息
- **body**: 请求体的内容，必须匹配请求头中的 Content-Type
- mode：字符串，请求模式
  - cors：默认值，配置为该值，会在请求头中加入 origin 和 referer
  - no-cors：配置为该值，不会在请求头中加入 origin 和 referer，跨域的时候可能会出现问题
  - same-origin：指示请求必须在同一个域中发生，如果请求其他域，则会报错
- credentials: 如何携带凭据（cookie）`cookie 现在已经不怎么使用了 现在我们如果使用 cookie 一般都是为了解决一些兼容性的问题。所以说，这一块和cookie相关的知识只要了解一下即可。`
  - omit：默认值，不携带cookie
  - same-origin：请求同源地址时携带cookie
  - include：请求任何地址都携带cookie
- cache：配置缓存模式
  - default: 表示fetch请求之前将检查下http的缓存.
  - no-store: 表示fetch请求将完全忽略http缓存的存在. 这意味着请求之前将不再检查下http的缓存, 拿到响应后, 它也不会更新http缓存.
  - no-cache: 如果存在缓存, 那么fetch将发送一个条件查询request和一个正常的request, 拿到响应后, 它会更新http缓存.
  - reload: 表示fetch请求之前将忽略http缓存的存在, 但是请求拿到响应后, 它将主动更新http缓存.
  - force-cache: 表示fetch请求不顾一切的依赖缓存, 即使缓存过期了, 它依然从缓存中读取. 除非没有任何缓存, 那么它将发送一个正常的request.
  - only-if-cached: 表示fetch请求不顾一切的依赖缓存, 即使缓存过期了, 它依然从缓存中读取. 如果没有缓存, 它将抛出网络错误(该设置只在mode为”same-origin”时有效).

```
[重点] method headers body
```

- [x] demo

`使用 fetch 发送网络请求`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>fetch api</title>
</head>

<body>
    <button>得到所有的省份数据</button>
    <script>
        async function getProvince() {
            const url = 'http://101.132.72.36:5100/api/local'; // 这个测试接口貌似不好使了
            const response = await fetch(url);
            console.log(response);
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getProvince();
        }
    </script>
</body>

</html>
```

- [x] demo

`使用学生信息管理系统的查询所有学生的接口完成测试`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>fetch api</title>
</head>

<body>
    <button>获取所有的学生信息</button>

    <script>
        async function getAllStuInfo() {
            const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
            const response = await fetch(url); // 返回的是一个 Promise 对象 其状态数据[[PromiseResult]]是 Response 对象
            console.log(response); // 打印出 Response 对象 看看它身上都有些啥
            const result = await response.json(); // 调用 Response 对象身上的 json 方法 将请求到的数据转化为 JavaScript 对象
            console.log(result);
        }

        document.querySelector('button').onclick = function () {
            getAllStuInfo();
        };
    </script>
</body>

</html>
```

![20210515181401](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210515181401.png)

### 返回值

fetch 函数返回一个 Promise 对象

- 当收到服务器的返回结果后，Promise 进入resolved状态，状态数据为 Response 对象
- 当网络发生错误（或其他导致无法完成交互的错误）时，Promise 进入 rejected 状态，状态数据为错误信息

**Response对象**

- ok：boolean，当响应消息码在200~299之间时为true，其他为false`如果我们要判断服务器是否给我们返回了一个正常的响应结果，我们应该到 Response 对象身上的 ok 属性中查看，而不是看返回的 Promise 对象是否是 rejected 状态，只要服务器返回了数据，不管该数据是否正常，Promise 的状态都将是 resolved 状态。`
- status：number，响应的状态码
- text()：用于处理文本格式的 Ajax 响应。它从响应中获取文本流，将其读完，然后返回一个被解析为 string 对象的 Promise。
- blob()：用于处理二进制文件格式（比如图片或者电子表格）的 Ajax 响应。它读取文件的原始数据，一旦读取完整个文件，就返回一个被解决为 blob 对象的 Promise。
- json()：用于处理 JSON 格式的 Ajax 的响应。它将 JSON 数据流转换为一个被解决为 JavaScript 对象的promise。
- redirect()：可以用于重定向到另一个 URL。它会创建一个新的 Promise，以解决来自重定向的 URL 的响应。


## 9.3 Request对象

除了使用基本的 fetch 方法，还可以通过创建一个 Request 对象来完成请求（实际上，fetch的内部会帮你创建一个Request对象）

```js
new Request(url地址, 配置)
```

注意点：

尽量保证每次请求都是一个新的Request对象

- [x] demo

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>fetch api</title>
</head>

<body>
    <button>获取所有学生信息</button>
    <script>
        async function getAllstusInfo() {
            const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
            const resp = await fetch(url);
            const result = await resp.json();
            console.log(result);
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getAllstusInfo();
        }
    </script>
</body>

</html>
```

![20210505161202](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210505161202.png)

- [x] demo

`传入 Request 对象`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>fetch api</title>
</head>

<body>
    <button>获取所有学生信息</button>
    <script>
        function getRequestInfo() {
            const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
            const req = new Request(url, {});
            return req;
        }

        async function getAllstusInfo() {
            const resp = await fetch(getRequestInfo());
            const result = await resp.json();
            console.log(result);
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getAllstusInfo();
        }
    </script>
</body>

</html>
```

- [x] demo

`确保每次请求都是一个全新的 Request 对象`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Request</title>
</head>

<body>
    <button>获取所有学生信息</button>
    <script>
        let req;

        function getRequestInfo() {
            if (!req) {
                const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
                req = new Request(url, {});
                return req;
            }
            return req.clone(); // 克隆一个全新的 Request 对象, 配置不变
        }

        async function getAllstusInfo() {
            const response = await fetch(getRequestInfo());
            const result = await response.json();
            console.log(result);
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getAllstusInfo();
        }
    </script>
</body>

</html>
```

```
这么做的目的主要是针对 POST 请求可能会出现的问题 ==> ... 没听懂 (好像是关于不同请求之前 数据的传输进度问题)
```

## 9.4 Response对象

**Response 对象身上的成员**

`在 9.2 基本使用 中有已经讲解过了`

- ok：boolean，当响应消息码在200~299之间时为true，其他为false
- status：number，响应的状态码
- text()：用于处理文本格式的 Ajax 响应。它从响应中获取文本流，将其读完，然后返回一个被解析为 string 对象的 Promise。
- blob()：用于处理二进制文件格式（比如图片或者电子表格）的 Ajax 响应。它读取文件的原始数据，一旦读取完整个文件，就返回一个被解决为 blob 对象的 Promise。
- json()：用于处理 JSON 格式的 Ajax 的响应。它将 JSON 数据流转换为一个被解决为 JavaScript 对象的promise。
- redirect()：可以用于重定向到另一个 URL。它会创建一个新的 Promise，以解决来自重定向的 URL 的响应。

- [x] demo

`将所有对 Response 对象的处理 抽离出来 封装到一个函数中`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>fetch api</title>
</head>

<body>
    <button>获取所有学生信息</button>
    <script>
        function getRequestInfo() {
            const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
            const req = new Request(url, {});
            return req;
        }

        async function getAllstusInfo() {
            const response = await fetch(getRequestInfo());
            // const result = await response.json();
            const result = await getJSON(response);
            console.log(result);
        }

        // 单独抽离出一个函数来处理 Response 对象
        async function getJSON(response) {
            return await response.json();
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getAllstusInfo();
        }
    </script>
</body>

</html>
```

- [x] demo

`在后端尚未完成时, 自定义 Response 对象, 模拟一些接口数据用于测试`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>fetch api</title>
</head>

<body>
    <button>获取所有学生信息</button>
    <script>
        function getRequestInfo() {
            const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
            const req = new Request(url, {});
            return req;
        }

        async function getAllstusInfo() {
            // const response = await fetch(getRequestInfo());
            // 模拟一个服务器的相应结果
            const response = new Response(`[
                {"address": "忽悠大街200号", "birth": "2000"},
                {"address": "忽悠大街250号", "birth": "1999"}
            ]`, {
                ok: true,
                status: 200
            });
            const result = await getJSON(response);
            console.log(result);
        }

        // 单独抽离出一个函数来处理 Response 对象
        async function getJSON(response) {
            return await response.json();
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getAllstusInfo();
        }
    </script>
</body>

</html>
```

![20210515190811](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210515190811.png)

```
也可以使用第三方库 Mock.js 来实现
```

## 9.5 Headers对象

在Request和Response对象内部，会将传递的请求头对象，转换为Headers

Headers对象中的方法：

- has(key)：检查请求头中是否存在指定的key值 `存在 ==> true; 不存在 ==> false;`
- get(key): 得到请求头中对应的key值 `读取指定字段的属性值, 若读取的那个字段不存在, 那么读取到的将会是 null`
- set(key, value)：修改对应的键值对 `若修改的是存在的字段, 那么实现的是修改操作, 会利用新的值覆盖旧的值; 若修改的字段不存在, 那么相当于新增操作, 会向请求头中新增一个键值对`
- append(key, value)：添加对应的键值对 `和 set 类似, 区别在于, 若添加的字段是已存在的, 那么并不会覆盖旧的值, 而是在旧的值后面新添加一个值; [例] 已存在 a: 1 执行 append('a', 2) 之后 a 的值为 1, 2`
- keys(): 得到所有的请求头键的集合 `效果类似于: Object.keys()`
- values(): 得到所有的请求头中的值的集合 `效果类似于: Object.values()`
- entries(): 得到所有请求头中的键值对的集合 `效果类似于: Object.entries()`

- [x] demo

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>fetch api</title>
</head>

<body>
    <button>获取所有学生信息</button>
    <script>
        let req;

        function getRequestInfo() {
            if (!req) {
                const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
                // const req = new Request(url, {}); // 第二个参数是 请求配置的对象 在这里面可以配置请求头的信息
                const req = new Request(url, {
                    headers: { // 配置请求头信息 (内部会自动将这个请求头对象转化为 Headers 实例对象)
                        Host: 'open.duyiedu.com'
                    }
                });
                return req.clone();
            }
            return req.clone(); // 克隆一个全新的 Request 对象, 配置不变
        }

        async function getAllstusInfo() {
            const response = await fetch(getRequestInfo());
            const result = await getJSON(response);
            console.log(result);
        }

        // 单独抽离出一个函数来处理 Response 对象
        async function getJSON(response) {
            return await response.json();
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getAllstusInfo();
        }
    </script>
</body>

</html>
```

```js
const req = new Request(url, {
    headers: { // 在内部会自动转化为 Headers 实例对象
        Host: 'open.duyiedu.com'
    }
});
```

`等效写法`

```js
const headers = new Headers({
    Host: 'open.duyiedu.com'
});
const req = new Request(url, {
    headers
});
```

- [x] demo

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>fetch api</title>
</head>

<body>
    <button>获取所有学生信息</button>
    <script>
        let req;

        function getRequestInfo() {
            if (!req) {
                const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
                // 等效写法
                const headers = new Headers({
                    Host: 'open.duyiedu.com'
                });
                const req = new Request(url, {
                    headers
                });
                return req.clone();
            }
            return req.clone();
        }

        async function getAllstusInfo() {
            const response = await fetch(getRequestInfo());
            const result = await getJSON(response);
            console.log(result);
        }

        async function getJSON(response) {
            return await response.json();
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getAllstusInfo();
        }
    </script>
</body>

</html>
```

![20210515202620](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210515202620.png)

```
9.5 Headers 对象
无法测试..
1. 老师的接口没法用
2. 若使用学生信息管理系统的那个接口, 如果和视频中一样, 配置了请求头的相关信息, 比如加上 {a: 1, b: 2}
   这么做的话, 会报错 (跨域)
   如果配置 Host 字段, 虽然不会报错, 调用 keys 获取到的依旧是空... 而且打开控制台查看 Host 字段的内容, 如果我们配置的值不是 open.duyiedu.dom 那么显示的也依旧是 open.duyiedu.com
PS: 可以尝试使用 Response.headers 来测试上述的几个 api
```

## 9.6 文件上传

```
使用 ajax 实现无刷新页面的文件上传
```

流程：

1. 客户端将文件数据发送给服务器
2. 服务器保存上传的文件数据到服务器端
3. 服务器响应给客户端一个文件访问地址

```
我们现阶段只要求掌握第一步, 即: 如何将客户端的文件数据发送给服务器端; 实现步骤如下:
- 先获取到服务器端的 地址 ==> http://101.132.72.36:5100/api/upload (PS: 该接口仅能上传图片文件)
- 将请求方式设置为 POST (若传输的是文件的话, 一般数据量都比较大, 通常采用的是 POST 请求方式)
- 设置请求表单的格式 multipart/form-data (若我们使用传统的方式上传文件, 那么需要借助 form 表单, 通常需要给 form表单 添加一个字段 enctype 并且该字段的值为 multipart/form-data(一般服务器端要求设置为 multipart/form-data); 不过若我们使用的是 ajax 来实现文件的上传, 那么就可以不借助 form 表单来实现, 所以也就可以不用设置它)
- 设置请求体 (设置 键值对, 其中 键名 需要和服务器端沟通好, 即: 键名(也叫"表单域名称")由服务器来定 (袁老提供的是 imagefile ))
```

> 测试地址：http://101.132.72.36:5100/api/upload
> 键的名称（表单域名称）：imagefile

请求方法：`POST`
请求的表单格式：`multipart/form-data`
请求体中必须包含一个键值对，键的名称是服务器要求的名称，值是文件数据

```
若使用以前的方式来上传文件, 虽然借助一些第三方库也可以实现文件上传(利用 flash 来实现文件的上传), 但是, 拿不到文件数据, 因为浏览器认为, 文件数据属于用户的隐私, 不允许我们在 运行在浏览器的JS中获取 文件数据, 担心用户的隐私被侵犯, 随后, 在H5中做了改进, 虽然我们依旧无法通过浏览器端的 JS 随意地获取用户本地的文件数据, 但是允许我们获取 用户通过 input:file 元素选中的文件数据
```

```html
<form action="" enctype="multipart/form-data">

</form>
```

```
若使用传统的方式上传, 那么需要配置一下 enctype="multipart/form-data" (一般情况下 服务器会要求我们这么配置)
若使用ajax来实现, 那么是不需要写 enctype="multipart/form-data" 的
```

> HTML5中，JS仍然无法随意的获取文件数据，但是可以获取到input元素中，被用户选中的文件数据
> 可以利用HTML5提供的FormData构造函数来创建请求体

- [x] demo

`认识 input.files`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>上传文件</title>
</head>

<body>
    <input type="file" id="avatar">
    <script>
        function upload() {
            const inp = document.querySelector('#avatar');
            console.log(inp.files); // 若 input 元素的 type 是 file 的话, 那么这个 input 元素身上会有一个 files 属性
            // files 属性的属性值是用户选中的文件的相关数据
        }
    </script>
</body>

</html>
```

![20210515230448](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210515230448.png)

```
inp.files 包含的文件信息中, 还包括二进制数据 (无法在控制台中显示出来, 数据量太大)
```

- [x] demo

`设置一个布尔属性 multiple 实现同时选中多个文件 (PS: 测试的接口仅允许一次上传一个文件)`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>上传文件</title>
</head>

<body>
    <!-- 添加上 multiple 之后, 我们可以同时选中多个文件 -->
    <input type="file" multiple id="avatar">
    <script>
        function upload() {
            const inp = document.querySelector('#avatar');
            console.log(inp.files); // 伪数组
        }
    </script>
</body>

</html>
```

![20210515230714](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210515230714.png)

- [ ] demo

`利用获取到的文件相关数据 input.files 来构建请求体`

```html
<!-- 测试不了, 回看视频 12min - 16min -->
<form action="" method="POST" enctype="multipart/form-data">
    <input type="file" name="abc" id="avatar">
    <input type="text" name="bcd">
    <button>提交</button>
</form>
```

```
[注] 这里我们只要知道 multipart/form-data 请求体的键值对格式比较特殊; 若我们想要手动构建出来, 那么需要注意格式的相关细节, 构建起来相对比较麻烦, 也可以构建出符合规范的请求体; 但是, 一般情况下, 我们上传文件的时候, 请求体通常不会去手动构建, 一般会利用 H5 提供的 FormData 构造函数来创建请求体
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>上传文件</title>
</head>

<body>
    <form action="" method="POST" enctype="multipart/form-data">
        <input type="file" name="abc" id="avatar">
        <input type="text" name="bcd">
        <button>提交</button>
    </form>
    <script>
        function upload() {
            const inp = document.querySelector('#avatar');
            const formData = new FormData(); // 构建请求体 (可以传入一个 form 表单元素作为参数 它会把指定表单中的所有信息添加到请求体中返回)
        }
    </script>
</body>

</html>
```

- [ ] demo

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>上传文件</title>
</head>

<body>
    <!-- 若我们采用的是 ajax 来实现的文件上传, form 表单也就不是必要的了 -->
    <input type="file" name="abc" id="avatar">

    <script>
        async function upload() {
            const inp = document.querySelector('#avatar');

            /* 设置请求体 */
            if (inp.files.length === 0) { // 用户没有选中文件
                alert('请选择需要上传的文件');
            }
            const formData = new FormData(); // 构建一个空的请求体
            formData.append('imagefile', inp.files[0]); // 往请求体中添加数据 (键名: imagefile 键值: 用户选中的第一张图片的文件数据)
            // formData.append('loginId', 'dahuyou'); // 也可以同时上传多个数据, 只要继续 append 即可

            /* 获取服务器端的地址 */
            const url = 'http://101.132.72.36:5100/api/upload';
            const response = await fetch(url, {
                method: 'POST', // 将请求方式设置为 POST
                /* headers: {
                    'Content-Type': 'multipart/form-data' // 在请求头中配置表单格式
                } */
                body: formData // 配置请求体, 这么配置后, 内部会自动帮我们修改请求头, 所以 headers 中的请求头表单格式 我们可以不用配置
            });
        }
    </script>
</body>

</html>
```

`随便选择一张图片上传, 测试一下`

![20210516104935](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210516104935.png)

![20210516104943](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210516104943.png)

```
图片的访问链接: http://images.yuanjin.tech/Fi6Md2Wb8-CeDzDIiO4u9HqfFStv
不定期会失效
```

![20210516105144](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210516105144.png)

- [x] demo

`文件上传案例`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>文件上传</title>
</head>

<body>
    <div class="wrapper">
        <p>
            <img src="" alt="avatar">
        </p>
        <p>
            <input type="file">
        </p>
        <p>
            <button>上传</button>
        </p>
    </div>
    <script>
        const inp = document.querySelector('input'),
            img = document.querySelector('img'),
            btn = document.querySelector('button'),
            url = 'http://101.132.72.36:5100/api/upload';

        async function upLoad() {
            if (inp.files.length === 0) {
                alert('请选择文件后再点击上传');
            } else {
                // 1. 获取文件数据
                const formData = new FormData();
                formData.append('imagefile', inp.files[0]);
                // 2. 设置请求方式和请求头 并发出请求
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData
                });
                // 3. 将服务器的响应结果返回
                return await response.json();
            }
        }

        btn.onclick = async function () {
            const result = await upLoad();
            img.src = result.path;
        }
    </script>
</body>

</html>
```

```
[bug] upload函数中最后的返回语句 return await response.json() 如果写成 return await response.json().path 会报错
```

# 9. FetchApi

参考资料: [Fetch API 教程 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html)

`9. FetchApi [课程规划与指导]`

| 知识点 | 难度 | 重要性 | 学习视频          | 视频时长(min) | 学习次数 |
| ------ | ---- | ------ | ----------------- | ------------- | -------- |
| es6    | 2    | 3      | 1. Fetch Api 概述 | 14            | 3/1      |
| es6    | 2    | 4      | 2. 基本使用       | 28            | 2/1      |
| es6    | 2    | 3      | 3. Request对象    | 9             | 2/1      |
| es6    | 2    | 3      | 4. Response对象   | 6             | 2/1      |
| es6    | 2    | 3      | 5. Headers对象    | 13            | 2/1      |
| es6    | 4    | 3      | 6. 文件上传       | 25            | 2/1      |

| 学习时间 | 达成效果                      | 老师建议                                                                                                                         |
| -------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 0.5天    | 学会使用fetch api完成ajax功能 | 重点在fetch的基本使用，虽然很简单，但要多练几遍，特别是各种请求方法下的代码，做到熟练运用，因为之后基本就告别xhr或jquery的方式了 |

```
PS: Fetch Api 并非 ES6 中的知识, 它是 H5 的一个 api, 但由于 它用到了 ES6 中的 promise 而我们刚学完 promise 所以就提到这里讲了
```

| CN                       | EN                                     |
| ------------------------ | -------------------------------------- |
| 异步的 JavaScript 和 XML | `ajax` Asynchronous JavaScript and XML |
| 拿来                     | fetch                                  |
| 查询字符串参数           | Query String Parameters                |
| 头像, 化身               | avatar                                 |

## 9.1 Fetch Api 概述

**XMLHttpRequest的问题**

1. 所有的功能全部集中在同一个对象上，容易书写出混乱不易维护的代码
2. 采用传统的事件驱动模式，无法适配新的 Promise Api

**Fetch Api 的特点**

1. 并非取代 AJAX，而是对 AJAX 传统 API 的改进
2. 精细的功能分割：头部信息、请求信息、响应信息等均分布到不同的对象，更利于处理各种复杂的 AJAX 场景
3. 使用 Promise Api，更利于异步代码的书写
4. Fetch Api 并非 ES6 的内容，属于 HTML5 新增的 Web Api
5. 需要掌握网络通信的知识

## 9.2 基本使用

[HTTP请求头和响应头详解 简书](https://www.jianshu.com/p/9a68281a3c84)

- [ ] 知道 http 请求的 请求头和请求体 分别是哪一部分

[简书 http跨域时的options请求](https://www.jianshu.com/p/5cf82f092201)

- [ ] 知道 什么是 预检

> 请求测试地址：http://101.132.72.36:5100/api/local

使用 ```fetch``` 函数即可立即向服务器发送网络请求

### 参数

该函数有两个参数：

1. 必填，字符串，请求地址
2. 选填，对象，请求配置

**请求配置对象**

- **method**：字符串，请求方法，默认值GET
- **headers**：对象，请求头信息
- **body**: 请求体的内容，必须匹配请求头中的 Content-Type
- mode：字符串，请求模式
  - cors：默认值，配置为该值，会在请求头中加入 origin 和 referer
  - no-cors：配置为该值，不会在请求头中加入 origin 和 referer，跨域的时候可能会出现问题
  - same-origin：指示请求必须在同一个域中发生，如果请求其他域，则会报错
- credentials: 如何携带凭据（cookie）`cookie 现在已经不怎么使用了 现在我们如果使用 cookie 一般都是为了解决一些兼容性的问题。所以说，这一块和cookie相关的知识只要了解一下即可。`
  - omit：默认值，不携带cookie
  - same-origin：请求同源地址时携带cookie
  - include：请求任何地址都携带cookie
- cache：配置缓存模式
  - default: 表示fetch请求之前将检查下http的缓存.
  - no-store: 表示fetch请求将完全忽略http缓存的存在. 这意味着请求之前将不再检查下http的缓存, 拿到响应后, 它也不会更新http缓存.
  - no-cache: 如果存在缓存, 那么fetch将发送一个条件查询request和一个正常的request, 拿到响应后, 它会更新http缓存.
  - reload: 表示fetch请求之前将忽略http缓存的存在, 但是请求拿到响应后, 它将主动更新http缓存.
  - force-cache: 表示fetch请求不顾一切的依赖缓存, 即使缓存过期了, 它依然从缓存中读取. 除非没有任何缓存, 那么它将发送一个正常的request.
  - only-if-cached: 表示fetch请求不顾一切的依赖缓存, 即使缓存过期了, 它依然从缓存中读取. 如果没有缓存, 它将抛出网络错误(该设置只在mode为”same-origin”时有效).

```
[重点] method headers body
```

- [x] demo

`使用 fetch 发送网络请求`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>fetch api</title>
</head>

<body>
    <button>得到所有的省份数据</button>
    <script>
        async function getProvince() {
            const url = 'http://101.132.72.36:5100/api/local'; // 这个测试接口貌似不好使了
            const response = await fetch(url);
            console.log(response);
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getProvince();
        }
    </script>
</body>

</html>
```

- [x] demo

`使用学生信息管理系统的查询所有学生的接口完成测试`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>fetch api</title>
</head>

<body>
    <button>获取所有的学生信息</button>

    <script>
        async function getAllStuInfo() {
            const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
            const response = await fetch(url); // 返回的是一个 Promise 对象 其状态数据[[PromiseResult]]是 Response 对象
            console.log(response); // 打印出 Response 对象 看看它身上都有些啥
            const result = await response.json(); // 调用 Response 对象身上的 json 方法 将请求到的数据转化为 JavaScript 对象
            console.log(result);
        }

        document.querySelector('button').onclick = function () {
            getAllStuInfo();
        };
    </script>
</body>

</html>
```

![20210515181401](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210515181401.png)

### 返回值

fetch 函数返回一个 Promise 对象

- 当收到服务器的返回结果后，Promise 进入resolved状态，状态数据为 Response 对象
- 当网络发生错误（或其他导致无法完成交互的错误）时，Promise 进入 rejected 状态，状态数据为错误信息

**Response对象**

- ok：boolean，当响应消息码在200~299之间时为true，其他为false`如果我们要判断服务器是否给我们返回了一个正常的响应结果，我们应该到 Response 对象身上的 ok 属性中查看，而不是看返回的 Promise 对象是否是 rejected 状态，只要服务器返回了数据，不管该数据是否正常，Promise 的状态都将是 resolved 状态。`
- status：number，响应的状态码
- text()：用于处理文本格式的 Ajax 响应。它从响应中获取文本流，将其读完，然后返回一个被解析为 string 对象的 Promise。
- blob()：用于处理二进制文件格式（比如图片或者电子表格）的 Ajax 响应。它读取文件的原始数据，一旦读取完整个文件，就返回一个被解决为 blob 对象的 Promise。
- json()：用于处理 JSON 格式的 Ajax 的响应。它将 JSON 数据流转换为一个被解决为 JavaScript 对象的promise。
- redirect()：可以用于重定向到另一个 URL。它会创建一个新的 Promise，以解决来自重定向的 URL 的响应。


## 9.3 Request对象

除了使用基本的 fetch 方法，还可以通过创建一个 Request 对象来完成请求（实际上，fetch的内部会帮你创建一个Request对象）

```js
new Request(url地址, 配置)
```

注意点：

尽量保证每次请求都是一个新的Request对象

- [x] demo

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>fetch api</title>
</head>

<body>
    <button>获取所有学生信息</button>
    <script>
        async function getAllstusInfo() {
            const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
            const resp = await fetch(url);
            const result = await resp.json();
            console.log(result);
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getAllstusInfo();
        }
    </script>
</body>

</html>
```

![20210505161202](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210505161202.png)

- [x] demo

`传入 Request 对象`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>fetch api</title>
</head>

<body>
    <button>获取所有学生信息</button>
    <script>
        function getRequestInfo() {
            const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
            const req = new Request(url, {});
            return req;
        }

        async function getAllstusInfo() {
            const resp = await fetch(getRequestInfo());
            const result = await resp.json();
            console.log(result);
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getAllstusInfo();
        }
    </script>
</body>

</html>
```

- [x] demo

`确保每次请求都是一个全新的 Request 对象`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Request</title>
</head>

<body>
    <button>获取所有学生信息</button>
    <script>
        let req;

        function getRequestInfo() {
            if (!req) {
                const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
                req = new Request(url, {});
                return req;
            }
            return req.clone(); // 克隆一个全新的 Request 对象, 配置不变
        }

        async function getAllstusInfo() {
            const response = await fetch(getRequestInfo());
            const result = await response.json();
            console.log(result);
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getAllstusInfo();
        }
    </script>
</body>

</html>
```

```
这么做的目的主要是针对 POST 请求可能会出现的问题 ==> ... 没听懂 (好像是关于不同请求之前 数据的传输进度问题)
```

## 9.4 Response对象

**Response 对象身上的成员**

`在 9.2 基本使用 中有已经讲解过了`

- ok：boolean，当响应消息码在200~299之间时为true，其他为false
- status：number，响应的状态码
- text()：用于处理文本格式的 Ajax 响应。它从响应中获取文本流，将其读完，然后返回一个被解析为 string 对象的 Promise。
- blob()：用于处理二进制文件格式（比如图片或者电子表格）的 Ajax 响应。它读取文件的原始数据，一旦读取完整个文件，就返回一个被解决为 blob 对象的 Promise。
- json()：用于处理 JSON 格式的 Ajax 的响应。它将 JSON 数据流转换为一个被解决为 JavaScript 对象的promise。
- redirect()：可以用于重定向到另一个 URL。它会创建一个新的 Promise，以解决来自重定向的 URL 的响应。

- [x] demo

`将所有对 Response 对象的处理 抽离出来 封装到一个函数中`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>fetch api</title>
</head>

<body>
    <button>获取所有学生信息</button>
    <script>
        function getRequestInfo() {
            const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
            const req = new Request(url, {});
            return req;
        }

        async function getAllstusInfo() {
            const response = await fetch(getRequestInfo());
            // const result = await response.json();
            const result = await getJSON(response);
            console.log(result);
        }

        // 单独抽离出一个函数来处理 Response 对象
        async function getJSON(response) {
            return await response.json();
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getAllstusInfo();
        }
    </script>
</body>

</html>
```

- [x] demo

`在后端尚未完成时, 自定义 Response 对象, 模拟一些接口数据用于测试`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>fetch api</title>
</head>

<body>
    <button>获取所有学生信息</button>
    <script>
        function getRequestInfo() {
            const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
            const req = new Request(url, {});
            return req;
        }

        async function getAllstusInfo() {
            // const response = await fetch(getRequestInfo());
            // 模拟一个服务器的相应结果
            const response = new Response(`[
                {"address": "忽悠大街200号", "birth": "2000"},
                {"address": "忽悠大街250号", "birth": "1999"}
            ]`, {
                ok: true,
                status: 200
            });
            const result = await getJSON(response);
            console.log(result);
        }

        // 单独抽离出一个函数来处理 Response 对象
        async function getJSON(response) {
            return await response.json();
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getAllstusInfo();
        }
    </script>
</body>

</html>
```

![20210515190811](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210515190811.png)

```
也可以使用第三方库 Mock.js 来实现
```

## 9.5 Headers对象

在Request和Response对象内部，会将传递的请求头对象，转换为Headers

Headers对象中的方法：

- has(key)：检查请求头中是否存在指定的key值 `存在 ==> true; 不存在 ==> false;`
- get(key): 得到请求头中对应的key值 `读取指定字段的属性值, 若读取的那个字段不存在, 那么读取到的将会是 null`
- set(key, value)：修改对应的键值对 `若修改的是存在的字段, 那么实现的是修改操作, 会利用新的值覆盖旧的值; 若修改的字段不存在, 那么相当于新增操作, 会向请求头中新增一个键值对`
- append(key, value)：添加对应的键值对 `和 set 类似, 区别在于, 若添加的字段是已存在的, 那么并不会覆盖旧的值, 而是在旧的值后面新添加一个值; [例] 已存在 a: 1 执行 append('a', 2) 之后 a 的值为 1, 2`
- keys(): 得到所有的请求头键的集合 `效果类似于: Object.keys()`
- values(): 得到所有的请求头中的值的集合 `效果类似于: Object.values()`
- entries(): 得到所有请求头中的键值对的集合 `效果类似于: Object.entries()`

- [x] demo

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>fetch api</title>
</head>

<body>
    <button>获取所有学生信息</button>
    <script>
        let req;

        function getRequestInfo() {
            if (!req) {
                const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
                // const req = new Request(url, {}); // 第二个参数是 请求配置的对象 在这里面可以配置请求头的信息
                const req = new Request(url, {
                    headers: { // 配置请求头信息 (内部会自动将这个请求头对象转化为 Headers 实例对象)
                        Host: 'open.duyiedu.com'
                    }
                });
                return req.clone();
            }
            return req.clone(); // 克隆一个全新的 Request 对象, 配置不变
        }

        async function getAllstusInfo() {
            const response = await fetch(getRequestInfo());
            const result = await getJSON(response);
            console.log(result);
        }

        // 单独抽离出一个函数来处理 Response 对象
        async function getJSON(response) {
            return await response.json();
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getAllstusInfo();
        }
    </script>
</body>

</html>
```

```js
const req = new Request(url, {
    headers: { // 在内部会自动转化为 Headers 实例对象
        Host: 'open.duyiedu.com'
    }
});
```

`等效写法`

```js
const headers = new Headers({
    Host: 'open.duyiedu.com'
});
const req = new Request(url, {
    headers
});
```

- [x] demo

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>fetch api</title>
</head>

<body>
    <button>获取所有学生信息</button>
    <script>
        let req;

        function getRequestInfo() {
            if (!req) {
                const url = 'https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486';
                // 等效写法
                const headers = new Headers({
                    Host: 'open.duyiedu.com'
                });
                const req = new Request(url, {
                    headers
                });
                return req.clone();
            }
            return req.clone();
        }

        async function getAllstusInfo() {
            const response = await fetch(getRequestInfo());
            const result = await getJSON(response);
            console.log(result);
        }

        async function getJSON(response) {
            return await response.json();
        }

        const button = document.querySelector('button');
        button.onclick = function () {
            getAllstusInfo();
        }
    </script>
</body>

</html>
```

![20210515202620](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210515202620.png)

```
9.5 Headers 对象
无法测试..
1. 老师的接口没法用
2. 若使用学生信息管理系统的那个接口, 如果和视频中一样, 配置了请求头的相关信息, 比如加上 {a: 1, b: 2}
   这么做的话, 会报错 (跨域)
   如果配置 Host 字段, 虽然不会报错, 调用 keys 获取到的依旧是空... 而且打开控制台查看 Host 字段的内容, 如果我们配置的值不是 open.duyiedu.dom 那么显示的也依旧是 open.duyiedu.com
PS: 可以尝试使用 Response.headers 来测试上述的几个 api
```

## 9.6 文件上传

```
使用 ajax 实现无刷新页面的文件上传
```

流程：

1. 客户端将文件数据发送给服务器
2. 服务器保存上传的文件数据到服务器端
3. 服务器响应给客户端一个文件访问地址

```
我们现阶段只要求掌握第一步, 即: 如何将客户端的文件数据发送给服务器端; 实现步骤如下:
- 先获取到服务器端的 地址 ==> http://101.132.72.36:5100/api/upload (PS: 该接口仅能上传图片文件)
- 将请求方式设置为 POST (若传输的是文件的话, 一般数据量都比较大, 通常采用的是 POST 请求方式)
- 设置请求表单的格式 multipart/form-data (若我们使用传统的方式上传文件, 那么需要借助 form 表单, 通常需要给 form表单 添加一个字段 enctype 并且该字段的值为 multipart/form-data(一般服务器端要求设置为 multipart/form-data); 不过若我们使用的是 ajax 来实现文件的上传, 那么就可以不借助 form 表单来实现, 所以也就可以不用设置它)
- 设置请求体 (设置 键值对, 其中 键名 需要和服务器端沟通好, 即: 键名(也叫"表单域名称")由服务器来定 (袁老提供的是 imagefile ))
```

> 测试地址：http://101.132.72.36:5100/api/upload
> 键的名称（表单域名称）：imagefile

请求方法：`POST`
请求的表单格式：`multipart/form-data`
请求体中必须包含一个键值对，键的名称是服务器要求的名称，值是文件数据

```
若使用以前的方式来上传文件, 虽然借助一些第三方库也可以实现文件上传(利用 flash 来实现文件的上传), 但是, 拿不到文件数据, 因为浏览器认为, 文件数据属于用户的隐私, 不允许我们在 运行在浏览器的JS中获取 文件数据, 担心用户的隐私被侵犯, 随后, 在H5中做了改进, 虽然我们依旧无法通过浏览器端的 JS 随意地获取用户本地的文件数据, 但是允许我们获取 用户通过 input:file 元素选中的文件数据
```

```html
<form action="" enctype="multipart/form-data">

</form>
```

```
若使用传统的方式上传, 那么需要配置一下 enctype="multipart/form-data" (一般情况下 服务器会要求我们这么配置)
若使用ajax来实现, 那么是不需要写 enctype="multipart/form-data" 的
```

> HTML5中，JS仍然无法随意的获取文件数据，但是可以获取到input元素中，被用户选中的文件数据
> 可以利用HTML5提供的FormData构造函数来创建请求体

- [x] demo

`认识 input.files`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>上传文件</title>
</head>

<body>
    <input type="file" id="avatar">
    <script>
        function upload() {
            const inp = document.querySelector('#avatar');
            console.log(inp.files); // 若 input 元素的 type 是 file 的话, 那么这个 input 元素身上会有一个 files 属性
            // files 属性的属性值是用户选中的文件的相关数据
        }
    </script>
</body>

</html>
```

![20210515230448](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210515230448.png)

```
inp.files 包含的文件信息中, 还包括二进制数据 (无法在控制台中显示出来, 数据量太大)
```

- [x] demo

`设置一个布尔属性 multiple 实现同时选中多个文件 (PS: 测试的接口仅允许一次上传一个文件)`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>上传文件</title>
</head>

<body>
    <!-- 添加上 multiple 之后, 我们可以同时选中多个文件 -->
    <input type="file" multiple id="avatar">
    <script>
        function upload() {
            const inp = document.querySelector('#avatar');
            console.log(inp.files); // 伪数组
        }
    </script>
</body>

</html>
```

![20210515230714](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210515230714.png)

- [ ] demo

`利用获取到的文件相关数据 input.files 来构建请求体`

```html
<!-- 测试不了, 回看视频 12min - 16min -->
<form action="" method="POST" enctype="multipart/form-data">
    <input type="file" name="abc" id="avatar">
    <input type="text" name="bcd">
    <button>提交</button>
</form>
```

```
[注] 这里我们只要知道 multipart/form-data 请求体的键值对格式比较特殊; 若我们想要手动构建出来, 那么需要注意格式的相关细节, 构建起来相对比较麻烦, 也可以构建出符合规范的请求体; 但是, 一般情况下, 我们上传文件的时候, 请求体通常不会去手动构建, 一般会利用 H5 提供的 FormData 构造函数来创建请求体
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>上传文件</title>
</head>

<body>
    <form action="" method="POST" enctype="multipart/form-data">
        <input type="file" name="abc" id="avatar">
        <input type="text" name="bcd">
        <button>提交</button>
    </form>
    <script>
        function upload() {
            const inp = document.querySelector('#avatar');
            const formData = new FormData(); // 构建请求体 (可以传入一个 form 表单元素作为参数 它会把指定表单中的所有信息添加到请求体中返回)
        }
    </script>
</body>

</html>
```

- [ ] demo

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>上传文件</title>
</head>

<body>
    <!-- 若我们采用的是 ajax 来实现的文件上传, form 表单也就不是必要的了 -->
    <input type="file" name="abc" id="avatar">

    <script>
        async function upload() {
            const inp = document.querySelector('#avatar');

            /* 设置请求体 */
            if (inp.files.length === 0) { // 用户没有选中文件
                alert('请选择需要上传的文件');
            }
            const formData = new FormData(); // 构建一个空的请求体
            formData.append('imagefile', inp.files[0]); // 往请求体中添加数据 (键名: imagefile 键值: 用户选中的第一张图片的文件数据)
            // formData.append('loginId', 'dahuyou'); // 也可以同时上传多个数据, 只要继续 append 即可

            /* 获取服务器端的地址 */
            const url = 'http://101.132.72.36:5100/api/upload';
            const response = await fetch(url, {
                method: 'POST', // 将请求方式设置为 POST
                /* headers: {
                    'Content-Type': 'multipart/form-data' // 在请求头中配置表单格式
                } */
                body: formData // 配置请求体, 这么配置后, 内部会自动帮我们修改请求头, 所以 headers 中的请求头表单格式 我们可以不用配置
            });
        }
    </script>
</body>

</html>
```

`随便选择一张图片上传, 测试一下`

![20210516104935](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210516104935.png)

![20210516104943](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210516104943.png)

```
图片的访问链接: http://images.yuanjin.tech/Fi6Md2Wb8-CeDzDIiO4u9HqfFStv
不定期会失效
```

![20210516105144](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210516105144.png)

- [x] demo

`文件上传案例`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>文件上传</title>
</head>

<body>
    <div class="wrapper">
        <p>
            <img src="" alt="avatar">
        </p>
        <p>
            <input type="file">
        </p>
        <p>
            <button>上传</button>
        </p>
    </div>
    <script>
        const inp = document.querySelector('input'),
            img = document.querySelector('img'),
            btn = document.querySelector('button'),
            url = 'http://101.132.72.36:5100/api/upload';

        async function upLoad() {
            if (inp.files.length === 0) {
                alert('请选择文件后再点击上传');
            } else {
                // 1. 获取文件数据
                const formData = new FormData();
                formData.append('imagefile', inp.files[0]);
                // 2. 设置请求方式和请求头 并发出请求
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData
                });
                // 3. 将服务器的响应结果返回
                return await response.json();
            }
        }

        btn.onclick = async function () {
            const result = await upLoad();
            img.src = result.path;
        }
    </script>
</body>

</html>
```

```
[bug] upload函数中最后的返回语句 return await response.json() 如果写成 return await response.json().path 会报错
```

# 10. 迭代器和生成器

`课程规矩与指导`

| 知识点 | 难度 | 重要性 | 学习视频                   | 视频时长(min) | 学习次数 |
| ------ | ---- | ------ | -------------------------- | ------------- | -------- |
| es6    | 4    | 4      | 1. 迭代器                  | 43            | 3/2      |
| es6    | 4    | 4      | 2. 可迭代协议与for-of循环  | 23            | 3/2      |
| es6    | 5    | 3      | 3. 生成器                  | 47            | 3/2      |
| es6    | 5    | 3      | 4. 生成器应用-异步任务控制 | 14            | 3/2      |

| 学习时间 | 达成效果                                                    | 老师建议                                                                                                                                  |
| -------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1天      | 学会使用for-of循环 理解什么是可迭代对象对生成器有一定的认知 | 这一章最难的在生成器，平时开发不怎么用，但对于以后学习Redux至关重要，至少目前需要同学们对它有一定了解，能够知道生成器函数内部是怎么运作的 |

| CN             | EN             |
| -------------- | -------------- |
| 设计模式       | Design Pattern |
| 可迭代的       | iterable       |
| 迭代器         | iterator       |
| 生成器         | generator       |
| 构造器；建造者 | constructor    |
| 括号           | bracket        |

**参考资料**

- [迭代器和生成器 mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)

## 10.1 迭代器

### 1. 背景知识

1. 什么是迭代？

从一个数据集合中按照一定的顺序，不断取出数据的过程

2. 迭代和遍历的区别？

迭代强调的是依次取数据，并不保证取多少，也不保证把所有的数据取完

遍历强调的是要把整个数据依次全部取出

3. 迭代器

对迭代过程的封装，在不同的语言中有不同的表现形式，通常为对象

4. 迭代模式

一种设计模式，用于统一迭代过程，并规范了迭代器规则：

- 迭代器应该具有得到下一个数据的能力
- 迭代器应该具有判断是否还有后续数据的能力

```
设计模式是什么?
设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。
```

### 2. JS中的迭代器

JS规定，如果一个对象具有next方法，并且该方法返回一个对象，该对象的格式如下：

```js
{value: 值, done: 是否迭代完成}
```

```
JavaScript 中的迭代器需要具备以下 4 个条件:
    1. 迭代器是一个对象
    2. 该对象具有 next 方法 ([注] 这里强调的是有, 并非只有, 说明迭代器对象中除了必须的成员方法next以外, 还可以有其他的成员)
    3. next 方法返回的也是一个对象
    4. 该对象的格式要求如下
       {value: 值, done: 是否接待完成}
```

**迭代器格式**

```js
const obj = {
    next() {
        return {
            value: xxx,
            done: xx
        }
    }
}
```

| 迭代器的关键组成部分 | 描述                                                                              |
| -------------------- | --------------------------------------------------------------------------------- |
| next方法             | 用于得到下一个数据 (下一个数据是一个对象 该对象格式为: `{value: xxx, done: xxx}`) |
| value                | 表示下一个数据的值 (即: next方法所获取到的下一个数据的 数据值)                  |
| done                 | 是一个 Boolean 值, 表示是否迭代完成 (即: 下次再调用 next方法 是否还能获取到数据)  |

```
若一个对象的格式是上面这样的 则认为该对象是一个迭代器
```

**取出数组中的所有成员**

1. 使用循环

- [x] demo

```js{cmd='node'}
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    console.log(item);
}
```

```
获取 arr 中的数据 (把 arr 比作一个仓库)
若使用循环, 就好比我们自己到仓库 arr 中取数据
若使用迭代器, 就好比有一个助手帮我们到仓库 arr 中取数据
```

2. 使用迭代器

- [x] demo

```js{cmd='node'}
const arr = [1, 2, 3, 4, 5];
// 迭代数组 arr
const iterator = {
    i: 0, // 当前的数组下标
    next() {
        const result = {
            value: arr[this.i],
            done: this.i >= arr.length
        }
        this.i++;
        return result;
    }
}

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

```
[注] this 的指向问题
[回顾] this 指向
    1. 通过对象调用函数，this指向对象
    2. 直接调用函数，this指向全局对象 (严格模式下为 undefined)
    3. 如果通过new调用函数，this指向新创建的对象 (构造函数内部原理 开始位置 var this = { this.__proto__ = 构造函数.prototype}; 结束位置: return this;)
    4. 如果通过apply、call、bind调用函数，this指向指定的数据
    5. 如果是DOM事件函数，this指向事件源
该案例中 通过 iterator 对象调用 next函数 ==> next函数中的 this 指向 iterator对象
```

```
对比上述两个 demo, 不难发现, 使用迭代器的好处就是不需要我们亲自去取数据, 说起来很抽象, 打个比方: 若我们想取 第一个数据的数据值
    不使用迭代器的话 ==> arr[0];
    若使用迭代器的话 ==> arr.next().value;
在获取到了第一个数据之后, 若我们还想获取下一个数据, 即 第二个数据
    不使用迭代器的话 ==> arr[1];
    若使用迭代器的话 ==> arr.next().value; (再第一次的基础上 再次执行 next 方法即可)
...三、四...(以此类推)
对于这个案例, 我们可以得出这样的结论: 若不使用迭代器, 当我们想要将仓库中的数据依次取出时, 我们得关注它的索引值(这就好比需要我们自身到仓库中取数据), 而使用迭代器的话, 我们只要依次调用 next 方法即可实现, 下一次调用 next 方法得到的数据, 就是仓库中的下一个数据, 我们就不需要关注 索引值(这就好比有一个助手帮我们自动切换索引, 我们只管取就完事, 每次取到的数据是相对于上一个数据的 之后的那个数据)
```

- [x] demo

`简化next方法`

```js{cmd='node'}
const arr = [1, 2, 3, 4, 5]; // 将 arr 理解为一个仓库

const iterator = { // iterator 可以理解为仓库的管理员 (仓库管理员帮我们到仓库中取数据, 它抽象了取数据的过程)
    i: 0,
    next() { // 将 next 简写
        return {
            done: this.i >= arr.length,
            value: arr[this.i++]
        }
    }
}

console.log(iterator.next()); // { done: false, value: 1 }
console.log(iterator.next()); // { done: false, value: 2 }
console.log(iterator.next()); // { done: false, value: 3 }
console.log(iterator.next()); // { done: false, value: 4 }
console.log(iterator.next()); // { done: false, value: 5 }
console.log(iterator.next()); // { done: true, value: undefined }
```

```
[注] 此时 next 方法返回的对象中的两个键值对的位置发生了变化, 这么做的目的就是为了确保当获取到最后一个成员的时候, done 属性值为 false (如果取到最后一个成员的时候, done 是 true 那么是错误的, 正常情况下, done 的属性值应该是 false)
```

- [x] demo

`让迭代器不断地取出下一个数据 直到没有数据为止`

```js{cmd='node'}
const arr = [1, 2, 3, 4, 5];

const iterator = {
    i: 0,
    next() {
        const result = {
            value: arr[this.i],
            done: this.i >= arr.length
        }
        this.i++;
        return result;
    }
}

let data = iterator.next();

while (!data.done) { // 若当前迭代的数据的 done 属性值不是 true, 即: 还没有迭代完成
    // 只要没有迭代完成 就执行循环体 打印当前迭代数据
    console.log(data.value);
    data = iterator.next(); // 进行下一次迭代
}

console.log('迭代完成');
```

**迭代器创建函数**

- [x] demo

`创建多个迭代器`

```js{cmd='node'}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

const iterator1 = {
    i: 0,
    next() {
        return {
            done: this.i >= arr1.length,
            value: arr1[this.i++]
        }
    }
}

const iterator2 = {
    i: 0,
    next() {
        return {
            done: this.i >= arr2.length,
            value: arr2[this.i++]
        }
    }
}

let data1 = iterator1.next();
let data2 = iterator2.next();

while (!data1.done) {
    console.log(data1);
    data1 = iterator1.next();
}

console.log(iterator1.next());
console.log(`iterator1 迭代完成`);

while (!data2.done) {
    console.log(data2);
    data2 = iterator2.next();
}

console.log(iterator2.next());
console.log(`iterator2 迭代完成`);
```

```
可以提取其中的公共代码, 抽离出一个公共的 迭代器创建函数
```

- [x] demo

`提取公共代码 封装一个迭代器生成函数 createIterator`

```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

/**
 * 迭代器创建函数 iterator creator
 * @param {Array} arr 数组
 */
function createIterator(arr) {
    let i = 0;
    return {
        next() {
            return {
                done: i >= arr.length,
                value: arr[i++]
            }
        }
    }
}

const iterator1 = createIterator(arr1);
const iterator2 = createIterator(arr2);
```

![20210516212218](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210516212218.png)

```
[注] 该案例中使用到了闭包
```

- [x] demo

`数组本身就是一个可迭代对象`

```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

const iterator1 = arr1[Symbol.iterator](arr1); // 可迭代对象身上有一个成员 Symbol.iterator 该成员是一个迭代器创建函数 (即: 返回一个迭代器)
const iterator2 = arr2[Symbol.iterator](arr2);
```

![20210516212218](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210516212218.png)

**长度无限的集合**

- [x] demo

`不断地取出斐波拉契数列的下一位 (可以无限地取出数据)`

```js{cmd='node'}
// 依次得到斐波拉契数列前面n位的值
// 1 1 2 3 5 8 13 21 ... infinite

function createFeiboIterator() {
    let prev1 = 1, // 当前位的前一位
        prev2 = 1, // 当前位的前两位
        n = 1; // 当前位
    return {
        next() {
            let value;
            if (n === 1 || n === 2) {
                value = 1;
            } else {
                value = prev1 + prev2;
            }
            const result = {
                value,
                done: false // 迭代无终点
            }
            prev2 = prev1;
            prev1 = value;
            n++;
            return result;
        }
    }
}

const iterator = createFeiboIterator();

let n = 0;
while (n < 10) { // 打印出前10个来看一下
    console.log(iterator.next());
    n++;
}
```

## 10.2 可迭代协议与for-of循环

### 1. 可迭代协议

**概念回顾**

- 迭代器(iterator)：一个具有next方法的对象，next方法返回下一个数据并且能指示是否迭代完成
- 迭代器创建函数（iterator creator）：一个返回迭代器的函数

**可迭代协议**

ES6规定，如果一个对象具有知名符号属性```Symbol.iterator```，并且属性值是一个迭代器创建函数`该方法返回一个对象(迭代器)`，则该对象是可迭代的（iterable）即: 可迭代对象

> 协议 ==> 可以理解为规定

- [ ] 如何知晓一个对象是否是可迭代的？`只要该对象满足可迭代协议, 那么该对象就是一个可迭代对象`
- [ ] 如何遍历一个可迭代对象？`使用 while 循环的通用模式来实现遍历 (可以使用 for-of 循环来遍历, 若使用 for-of 循环来实现, 实质上内部还是会被转化为 while 循环的通用模式)`

- [x] demo

`认识什么是可迭代对象`

```js{cmd='node'}
const obj = {
    [Symbol.iterator]() {
        return {
            next() {
                return {
                    value: xxx,
                    done: xxx
                }
            }
        }
    }
}
```

- [x] demo

```js{cmd='node'}
// 数组本身就是一个可迭代对象
const arr = [1, 2, 3, 4];
console.log(arr);
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

![20210422161059](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210422161059.png)

- [x] demo

```html
<!-- 页面中有 10 个 div -->
<!-- div{item$$}*10 -->
<div>item01</div>
<div>item02</div>
<div>item03</div>
<div>item04</div>
<div>item05</div>
<div>item06</div>
<div>item07</div>
<div>item08</div>
<div>item09</div>
<div>item10</div>
```

```js
// 获取到的dom对象的集合也是一个可迭代对象
const divDomArr = document.querySelectorAll('div');
console.log(divDomArr); // 展开 看看是否有 Symbol.iterator 属性
const iterator = divDomArr[Symbol.iterator]();
```

![20210422161646](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210422161646.png)

![20210422161755](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210422161755.png)

```
检测一个对象身上(或原型链上)是否含有 [Symbol.iterator] 成员, 其实很简单, 直接判断 对象[Symbol.iterator] === undefined 若结果是 true 表示没有, 若结果是 false 则表示有
```

- [x] demo

`遍历迭代器 (通用模式)`

```js
const divDomArr = document.querySelectorAll('div');

const iterator = divDomArr[Symbol.iterator]();
let result = iterator.next();

while(!result.done){
    console.log(result.value);
    result = iterator.next();
}
```

![20210422162121](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210422162121.png)

`等效写法`

```js
const divDomArr = document.querySelectorAll('div');

for (const item of divDomArr) {
    console.log(item);
}
```

```
for-of 实际上就是一个语法糖
下面这种写法 与 上面的写法完全等效

[细节]
    每当我们使用 for-of 循环来遍历可迭代对象时
    默认都会调用一次该对象身上的 [Symbol.iterator] 方法
    并且很根据成员的数量 调用 迭代器身上的 next() 方法
    参考 上面的等效写法 可以很好的理解
    但是直接看 ES6 提供的 for-of 语法糖 就没那么直观了
```

- [x] demo

`认识 for-of 的内部原理`

```js{cmd='node'}
const arr = [1, 2, 3, 4];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

```js{cmd='node'}
const arr = [1, 2, 3, 4];

for (const item of arr) {
    console.log(item);
}
```

```js{cmd='node'}
const arr = [1, 2, 3, 4];

const iterator = arr[Symbol.iterator]();
let result = iterator.next();
while (!result.done) {
    const item = result.value;
    // ... for of 的循环体 即: console.log(item);
    console.log(item);
    result = iterator.next();
}
```

```
在这个案例中
    for (const item of arr) {
        console.log(item);
    }
等价于
    const iterator = arr[Symbol.iterator]();
    let result = iterator.next();
    while (!result.done) {
        const item = result.value;
        // ... for of 的循环体 即: console.log(item);
        console.log(item);
        result = iterator.next();
    }
由此可见 若我们直接使用 for-of 语法糖 那么 arr[Symbol.iterator] 会隐式的被调用一次, 并且 它所返回的迭代器 iterator 身上的 next 方法 会不断地被调用 直到取到最后一个数据为止
```

### 2. for-of 循环

for-of 循环用于遍历可迭代对象，格式如下

```js
//迭代完成后循环结束
for(const item in iterable){
    //iterable：可迭代对象
    //item：每次迭代得到的数据
}
```

- [x] demo

`[注] for-of 只能用于可迭代对象`

```js
const obj = {
    a: 1,
    b: 2
}

for (const item of obj) {
    console.log(item);
}
```

```
Uncaught TypeError: obj is not iterable
```

- [x] demo

```js{cmd='node'}
const obj = {
    a: 1,
    b: 2,
    [Symbol.iterator]() {
        const keys = Object.keys(this);
        console.log(keys); // 该打印语句会执行 因为 [Symbol.iterator] 默认会被调用一次
        return {
            next() {
                // 下面这格式必须写对 不然的话 obj 就无法被识别为一个可迭代对象 调用 for-of 会报错
                return {
                    value: 1,
                    done: true
                }
            }
        }
    }
}

for (const item of obj) {
    console.log(item);
}
```

- [x] demo

`自定义 迭代器 访问迭代器身上的成员`

```js{cmd='node'}
const obj = {
    a: 1,
    b: 2,
    [Symbol.iterator]() {
        const keys = Object.keys(this); // this 指向 obj
        let i = 0;
        return {
             next: () => { // 解决 this 指向的问题 (后续的笔记有具体说明)
                 const propName = keys[i];
                 const propValue = this[propName];
                 const result = {
                     value: {
                         propName,
                         propValue
                     },
                     done: i >= keys.length
                 }
                 i++;
                 return result;
             }
        }
    }
}

for (const item of obj) {
    console.log(item);
}
```

```
难点: 箭头函数中的 this 的指向问题
假设 return 返回的对象 记作为 iterator, 则: next 方法的调用方式是 iterator.next() ==> for-of 循环的内部原理
```

- [x] demo

`清楚 this 指向`

```js{cmd='node'}
const obj = {
    a: 1,
    [Symbol.iterator]() {
        console.log(this.a);
        return {
            a: 111,
            next: () => {
                console.log(this.a);
                return {
                    value: 'dahuyou',
                    done: true
                }
            }
        }
    }
}

for (const prop of obj) {
    console.log(prop);
}
```

- [x] demo

`清楚 this 指向`

```js{cmd='node'}
const obj = {
    a: 1,
    [Symbol.iterator]() {
        console.log(this.a);
        return {
            a: 111,
            next() {
                console.log(this.a);
                return {
                    value: 'dahuyou',
                    done: true
                }
            }
        }
    }
}

for (const prop of obj) {
    console.log(prop);
}
```

- [x] demo

```js
window.a = 1;

const o = {
    a: 2,
    fun1: () => {
        console.log(this.a);
    },
    fun2() {
        console.log(this.a);
    }
}

o.fun1(); // 1
o.fun2(); // 2

const fun3 = o.fun1;
const fun4 = o.fun2;

fun3(); // 1
fun4(); // 1
```

- [x] demo

`由于 this 指向所导致的错误写法`

```js{cmd='node'}
const obj = {
    a: 1,
    b: 2,
    [Symbol.iterator]() {
        const keys = Object.keys(this); // this 指向 obj
        let i = 0;
        return {
            that: this, // this 指向 obj
            next() {
                // console.log(this); // this 指向 return 返回的 对象
                // console.log(this.that);
                const propName = keys[i];
                const propValue = this[propName];
                const result = {
                    value: {
                        propName,
                        propValue
                    },
                    done: i >= keys.length
                }
                i++;
                return result;
            }
        }
    }
}

for (const item of obj) {
    console.log(item);
}
```

```
我判断的 this 指向的依据
成员方法中的 this 指向的是 该成员方法所处的那个对象
比如说:
    obj 是一个对象 它有一个成员方法 [Symbol.iterator] 那么这个成员方法中的 this 就指向 obj
    在成员方法 [Symbol.iterator] 中返回了一个对象 这个对象中也有一个成员方法 这个成员方法中的 this 默认指向 返回的对象
```

- [x] demo

`正确写法 (借助箭头函数, 令 next 方法中的 this 和 外层的 this 指向相同)`

```js{cmd='node'}
const obj = {
    a: 1,
    b: 2,
    [Symbol.iterator]() {
        const keys = Object.keys(this); // this 指向 obj
        let i = 0;
        return {
            next: () => {
                // console.log(this); // this 指向 obj
                const propName = keys[i];
                const propValue = this[propName];
                const result = {
                    value: {
                        propName,
                        propValue
                    },
                    done: i >= keys.length
                }
                i++;
                return result;
            }
        }
    }
}

for (const item of obj) {
    console.log(item);
}
```

### 3. 展开运算符与可迭代对象

展开运算符可以作用于可迭代对象，这样，就可以轻松的将可迭代对象转换为数组。

- [x] demo

`只要是可迭代对象 展开运算符都可以将其展开`

```js{cmd='node'}
const obj = {
    a: 1,
    b: 2,
    [Symbol.iterator]() {
        const keys = Object.keys(this); // this 指向 obj
        let i = 0;
        return {
            next: () => {
                // console.log(this); // this 指向 obj
                const propName = keys[i];
                const propValue = this[propName];
                const result = {
                    value: {
                        propName,
                        propValue
                    },
                    done: i >= keys.length
                }
                i++;
                return result;
            }
        }
    }
}

const arr = [...obj];
console.log(arr);
```

```
对象展开到数组中, 则该对象必须是一个可迭代对象, 否则的话会报错: Uncaught TypeError: obj is not iterable (未捕获的类型错误: obj 不是一个可迭代对象)
```

- [x] demo

`展开可迭代对象 也可以当做函数的参数传入`

```js{cmd='node'}
const obj = {
    a: 1,
    b: 2,
    [Symbol.iterator]() {
        const keys = Object.keys(this); // this 指向 obj
        let i = 0;
        return {
            next: () => {
                // console.log(this); // this 指向 obj
                const propName = keys[i];
                const propValue = this[propName];
                const result = {
                    value: {
                        propName,
                        propValue
                    },
                    done: i >= keys.length
                }
                i++;
                return result;
            }
        }
    }
}

function test(a, b) {
    console.log(a, b);
}
test(...obj);
```

```
展开运算符若展开的是一个可迭代对象, 那么展开后得到的每一项数据, 其实就是 for-of 循环遍历的每一项数据(即: 每一次迭代的迭代结果)
```

## 10.3 生成器

### 1. 什么是生成器？

生成器是一个通过构造函数 Generator 创建的对象，生成器既是一个迭代器，同时又是一个可迭代对象 `我们无法直接调用 Generator, 它只能由 JS引擎 在内部调用`

`生成器的初衷: 为了方便迭代器的书写`

```
是一个迭代器 ==> 说明有 next 方法 ==> 并且 next 方法里面返回一个具有指定格式的对象
是一个可迭代对象 ==> 说明有知名符号 [Symbol.iterator] ==> 该成员是一个迭代器创建函数
通过调用知名符号可以生成一个可迭代对象
```

### 2. 如何创建生成器？

生成器的创建，必须使用生成器函数（Generator Function）

```
生成器 只有一个方式创建 ==> 那就是使用生成器函数
```

### 3. 如何书写一个生成器函数呢？

```js
// 这是一个生成器函数，该函数一定返回一个生成器
function* method(){

}
/*
function *method() {

}
*/
```

```
星号 * 的位置
    既可以跟在 function 关键字的后面
    也可以跟在 函数名的前面
```

- [x] demo

```js
function *test() {

}

const generator = test(); // 必然得到一个生成器
```

![20210422180911](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210422180911.png)

### 4. 生成器函数内部是如何执行的？

生成器函数内部是为了给生成器的每次迭代提供数据的

每次调用生成器的next方法，将导致生成器函数运行到下一个yield关键字位置

yield是一个关键字，该关键字只能在生成器函数内部使用，表达“产生”一个迭代数据。

- [x] demo

```js{cmd='node'}
function* test() {
    console.log('第1次运行');
    yield 1;
    console.log('第2次运行');
    yield 2;
    console.log('第3次运行');
}

const generator = test(); // 此时 调用 test() 啥都不会输出
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
```

```
当 done 的属性值为 true 时, 表示 生成器函数运行完了
```

- [x] demo

`在 10.1 迭代器 那一节封装的一个迭代器生成函数`

```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

function createIterator(arr) {
    let i = 0;
    return {
        next() {
            return {
                done: i >= arr.length,
                value: arr[i++]
            }
        }
    }
}

const iterator1 = createIterator(arr1);
const iterator2 = createIterator(arr2);
```

`使用 生成器 和 for-of 来改写`

```js
function* createIterator(arr) {
    for (const item of arr) {
        yield item;
    }
}
```

```js
function* createIterator(arr) {
    for (const item of arr) {
        console.log(item); // 仅仅是 value
        yield item; // 是一个对象 包括 value属性 和 done属性
    }
}
```

- [x] demo

`迭代器创建函数`

```js{cmd='node'}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

function createIterator(arr) {
    let i = 0;
    return {
        next() {
            return {
                done: i >= arr.length,
                value: arr[i++]
            }
        }
    }
}

const iterator1 = createIterator(arr1);
const iterator2 = createIterator(arr2);

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
```

- [x] demo

```js{cmd='node'}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

function* createIterator(arr) {
    for (const item of arr) {
        console.log(item);
        yield item;
    }
}

const iterator1 = createIterator(arr1);
const iterator2 = createIterator(arr2);

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
```

```
使用 for-of 得到的可迭代对象的成员
    若我们直接操作该成员, 那么读取到的是 next 方法返回的对象身上的 value 值 而非 next 方法返回的对象; (若 next 方法返回的对象身上的 done 属性变为 true 那么 我们啥都获取不到 即便使用 typeof 关键字来检测 也是啥都木有)
    但是, 若我们使用的是 yield 关键字来操作该成员 那么我们得到是就是 next 方法返回的对象
```

- [x] demo

`这是在 10.1 迭代器 那一节 我们封装的一个 不断地读取斐波拉契数列下一位的功能函数`

```js
function createFeiboIterator() {
    let prev1 = 1,
        prev2 = 1,
        n = 1;
    return {
        next() {
            let value;
            if (n <= 2) {
                value = 1;
            } else {
                value = prev1 + prev2;
            }
            prev2 = prev1;
            prev1 = value;
            n++;
            const result = {
                value,
                done: false
            }
            return result;
        }
    }
}
```

- [x] demo

`使用 生成器 来实现`

```js
function* createFeiboIterator() {
    let prev1 = 1,
        prev2 = 1,
        n = 1;
    while (true) { // 直接写一个死循环即可 因为可以不断地读取下一位的值
        if (n <= 2) {
            yield 1;
        } else {
            const value = prev1 + prev2;
            yield value;
            prev2 = prev1;
            prev1 = value;
        }
        n++;
    }
}
```

```
由上面介绍了两个案例可以看出, 生成器 的初衷 其实就是为了方便迭代器的书写
```

### 5. 有哪些需要注意的细节？

1). 生成器函数可以有返回值，返回值出现在第一次done为true时的value属性中
2). 调用生成器的next方法时，可以传递参数，传递的参数会交给yield表达式的返回值 `生成器特有`
3). 第一次调用next方法时，传参没有任何意义
4). 在生成器函数内部，可以调用其他生成器函数，但是要注意加上*号

- [x] demo

```js{cmd='node'}
function* test() {
    console.log(`第1次运行`);
    yield 1;
    console.log(`第2次运行`);
    yield 2;
    console.log(`第3次运行`);
    return 10;
}

const iterator = test();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

- [x] demo

```js{cmd='node'}
function* test() {
    let info = yield 1;
    console.log(info);
    info = yield 2 + info;
    console.log(info);
}

const iterator = test();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

- [x] demo

`next 传参`

```js{cmd='node'}
function* test() {
    let info = yield 1;
    console.log(info);
    info = yield 2 + info;
    console.log(info);
}

const iterator = test();

console.log(iterator.next());
console.log(iterator.next('dahuyou'));
console.log(iterator.next(666));
```

- [x] demo

`错误的调用方式`

```js{cmd='node'}
function* t1() {
    yield 'a';
    yield 'b';
}

function* test() {
    t1();
    yield 1;
    yield 2;
    yield 3;
}

const generator = test();

console.log(generator.next()); // {value: 1, done: false}
```

```
调用生成器函数并不会导致内部的程序执行
```

```js{cmd='node'}
function* t1() {
    yield 'a';
    yield 'b';
}

function* test() {
    yield t1(); // 将 t1() 的返回结果(一个新的生成器) 作为第一个迭代的数据返回
    yield 1;
    yield 2;
    yield 3;
}

const generator = test();

console.log(generator.next()); // { value: Object [Generator] {}, done: false }
```

`正确的调用方式`

```js{cmd='node'}
function* t1() {
    yield 'a';
    yield 'b';
}

function* test() {
    yield* t1();
    yield 1;
    yield 2;
    yield 3;
}

const generator = test();

console.log(generator.next()); // {value: "a", done: false}
console.log(generator.next()); // {value: "b", done: false}
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: undefined, done: true}
```

```js
// 等价于下面这种写法
function* test() {
    yield 'a';
    yield 'b';
    yield 1;
    yield 2;
    yield 3;
}
```


### 6. 生成器的其他API

- return方法：调用该方法，可以提前结束生成器函数，从而提前让整个迭代过程结束
- throw方法：调用该方法，可以在生成器中产生一个错误

- [x] demo

```js
function* test() {
    yield 1;
    yield 2;
    yield 3;
}

const iterator = test();
```

![20210422192336](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210422192336.png)

```
若使用 return 来提前结束迭代过程时 我们传入了参数 那么它将作为最后一次迭代得到的结果对象中的 value 的属性值
```

![20210422192420](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210422192420.png)

- [x] demo

![20210422192736](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210422192736.png)

```
[注] 调用 throw 时 错误的抛出位置
```


## 10.4 生成器应用-异步任务控制

- [x] demo

```js
function* task() {
    const d = yield 1;
    console.log(d);
    // const resp = yield fetch("http://101.132.72.36:5100/api/local");
    const resp = yield fetch("https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486");
    const result = yield resp.json();
    console.log(result);
    const a = yield 'dahuyou';
    console.log(a);
}

run(task);

function run(generatorFunc) {
    const generator = generatorFunc();
    let result = generator.next(); // 启动任务 (开始迭代) 得到迭代数据
    handleResult();

    function handleResult() {
        if (result.done) {
            return; // 迭代完成 不处理
        }
        // 迭代没有完成 分为两种情况
        // 1. 迭代的数据是一个 Promise
        // 2. 迭代的数据是其他数据
        if (typeof result.value.then === 'function') {
            // 1. 迭代的数据是一个 Promise
            // 等待 Promise 完成后 再进行下一次迭代
            result.value.then(data => {
                result = generator.next(data);
                handleResult();
            }, err => {
                result = generator.throw(err);
                handleResult();
            });
        } else {
            // 2. 迭代的数据是其他数据 直接进行下一次迭代
            result = generator.next(result.value);
            handleResult();
        }
    }
}
```

![20210506151303](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210506151303.png)

```
[核心思想] 利用生成器 (generator) 来控制生成器函数 (task) 的执行 (以此来控制异步任务的执行)

PS: 在 async 和 await 关键字出来之前, 我们可以使用生成器的相关知识来控制异步任务的执行, 原理大致就是上述案例这样
```

- [x] demo

`使用 async 和 await 来实现同样的效果`

```js
async function task() {
    const d = 1;
    console.log(d);
    const resp = await fetch("https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486");
    const result = await resp.json();
    console.log(result);
    const a = 'dahuyou';
    console.log(a);
}

task();
```

![20210506151752](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210506151752.png)

- [x] demo

`若我们不处理异步任务的话 那么会出问题`

```js
function task() {
    const d = 1;
    console.log(d);
    const resp = fetch("https://open.duyiedu.com/api/student/findAll?appkey=_abc123_1606358542486");
    const result = resp.json();
    console.log(result);
    const a = 'dahuyou';
    console.log(a);
}

task();
```

![20210506151746](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210506151746.png)

# 11. 更多的集合类型

`11. 更多的集合类型 + 12. 代理与反射 [课程规矩与指导]`

| 知识点 | 难度 | 重要性 | 学习视频                  | 视频时长(min) | 学习次数 |
| ------ | ---- | ------ | ------------------------- | ------------- | -------- |
| es6    | 2    | 3      | 1. set集合                | 23            | 2/1      |
| es6    | 2    | 3      | 2. set应用                | 14            | 1/1      |
| es6    | 3    | 2      | 3. [扩展]手写set          | 15            | 1/1      |
| es6    | 2    | 3      | 4. map集合                | 29            | 2/1      |
| es6    | 3    | 2      | 5. [扩展]手写map          | 17            | 1/1      |
| es6    | 3    | 1      | 6. [扩展]WeakSet和WeakMap | 20            | 1/1      |
| es6    | 2.5  | 4      | 1. [回顾]属性描述符       | 40            | 2/1      |
| es6    | 3    | 3.5    | 2. Reflect                | 23            | 2/1      |
| es6    | 3    | 3.5    | 3. Proxy                  | 17            | 2/1      |
| es6    | 3    | 3      | 4. 应用-观察者模式        | 14            | 3/1      |
| es6    | 3    | 3      | 5. 应用-偷懒的构造函数    | 10            | 3/1      |
| es6    | 3    | 3      | 6. 应用-可验证的函数参数  | 8             | 3/1      |


| 学习时间 | 达成效果                                                                       | 老师建议                                                                                                                     |
| -------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| 1天      | 学会使用set来表示不重复集合学会使用map来表示键值对集合理解反射和代理出现的意义 | 集合部分很简单，反射代理部分有一点难度，难度主要是在理解上。由于vue3.0极有可能使用反射和代理实现，所以理解它们也显得比较重要 |

**基本操作**

- [x] `实现数组去重`

```js{cmd='node'}
console.log([...new Set([1, 2, 3, 2, 3, 4])]); // [ 1, 2, 3, 4 ]
```

- [x] `实现字符串去重`

```js{cmd='node'}
console.log([...new Set('dahuyoudahuyoudahuyou')].join('')); // dahuyo
```

## 11.1 set集合

> 一直以来，JS只能使用数组和对象来保存多个数据，缺乏像其他语言那样拥有丰富的集合类型。因此，ES6新增了两种集合类型（set 和 map），用于在不同的场景中发挥作用。

**set用于存放不重复的数据**

### 1. 如何创建set集合

```js
new Set(); //创建一个没有任何内容的set集合

new Set(iterable); //创建一个具有初始内容的set集合，内容来自于可迭代对象每一次迭代的结果
```

- [x] demo

```js{cmd='node'}
const s1 = new Set();
console.log(s1); // Set(0) {}

const s2 = new Set([1, 2, 3, 4, 5]);
console.log(s2); // Set(5) {1, 2, 3, 4, 5}
```

`重复的数据默认会被过滤掉`

```js{cmd='node'}
const s1 = new Set();
console.log(s1); // Set(0) {}

const s2 = new Set([1, 2, 2, 3, 4, 3, 5]);
console.log(s2); // Set(5) {1, 2, 3, 4, 5}
```

```js{cmd='node'}
const s1 = new Set('adfasdfasf');
console.log(s1); // Set(4) {"a", "d", "f", "s"}
```

### 2. 如何对set集合进行后续操作

- add(数据): 添加一个数据到set集合末尾，如果数据已存在，则不进行任何操作
  - set使用Object.is的方式判断两个数据是否相同，但是，针对+0和-0，set认为是相等
- has(数据): 判断set中是否存在对应的数据
- delete(数据)：删除匹配的数据，返回 Boolean, true 表示删除成功, false 表示删除失败
- clear()：清空整个set集合
- size: 获取set集合中的元素数量，只读属性，无法重新赋值

- [x] demo

```js{cmd='node'}
const s1 = new Set();
s1.add(1);
s1.add(2);
s1.add(3);
s1.add(1); // 无效 因为重复了
console.log(s1); // Set(3) {1, 2, 3}
```

- [x] demo

`set 判断相等 使用的不是 全等 === 而是 Object.is 来判断的`

```js{cmd='node'}
const s1 = new Set();
s1.add(1);
s1.add(2);
s1.add(3);
s1.add(-0);
s1.add(+0); // 无效 add 内部实现时 使用的是 Object.is 来判断是否相同的
console.log(s1); // Set(4) {1, 2, 3, 0}
```

```
[特殊]
    -0 和 +0 被判断为 同一个数据
    Object.is(+0, -0); // false
    但是使用 Object.is 来判断, 它们两个是不等的
```

- [x] demo

```js{cmd='node'}
const s1 = new Set();
s1.add(1);
s1.add(2);
s1.add(3);
console.log(s1.has(3)); // true
console.log(s1.has(5)); // false
```

- [x] demo

```js{cmd='node'}
const s1 = new Set();
s1.add(1);
s1.add(2);
s1.add(3);
console.log(s1); // Set(3) {1, 2, 3}
s1.delete(3); // true ==> 表示删除成功
console.log(s1); // Set(2) {1, 2}
s1.delete(123); // false ==> 表示没有删除成功 (因为压根就没有 123)
console.log(s1); // Set(2) {1, 2}
```

```js
const s1 = new Set();
s1.add(1);
s1.add(2);
s1.add(3);
console.log(s1); // Set(3) { 1, 2, 3 }
s1.clear();
console.log(s1); // Set(0) {}
```

### 3. 如何与数组进行相互转换

```js
const s = new Set([x,x,x,x,x]);
// set本身也是一个可迭代对象，每次迭代的结果就是每一项的值
const arr = [...s];
```

- [x] demo

`实现数组去重`

```js{cmd='node'}
const arr = [1, 2, 3, 2, 3, 4];
const s = new Set(arr); // set 本身也是一个可迭代对象
const result = [...s]; // 将可迭代对象展开即可
console.log(result); // (4) [1, 2, 3, 4]
```

- [x] demo

```js{cmd='node'}
// 实现字符串去重
const str = 'dahuyou--dahuyou';
const result = [...new Set(str)].join('');
console.log(result); // dahuyo-
```

### 4. 如何遍历

1). 使用for-of循环
2). 使用set中的实例方法forEach

注意：set集合中不存在下标，因此forEach中的回调的第二个参数和第一个参数是一致的，均表示set中的每一项

- [x] demo

`使用 for-of 循环来遍历 set 中的成员`

```js{cmd='node'}
const arr = [1, 2, 3, 2, 3, 4];
const s = new Set(arr);
for (const item of s) {
    console.log(item);
}
```


- [x] demo

`使用 set 身上的实例方法 forEach 来实现`

```js{cmd='node'}
const s1 = new Set();
s1.add(1);
s1.add(2);
s1.add(3);
s1.forEach(item => {
    console.log(item);
})
```


- [x] demo

```js{cmd='node'}
const s1 = new Set();
s1.add(1);
s1.add(2);
s1.forEach((item, index, s) => { // 和数组的forEach不同 第二个参数 index 表示的并不是下标 它的值和第一个参数相同
    console.log(item, index, s); // 由于 set 中不存在下标 所以 forEach 的第二个参数 表示的不是 下标值
    console.log(item === index); // true
});
```

## 11.2 set应用

两个数组的并集、交集、差集 （不能出现重复项），得到的结果是一个新数组

```js{cmd='node' id='08:18:14'}
// 数组
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
```

### 1. 并集

- [x] `并集`

```js{cmd='node' continue='08:18:14'}
console.log('并集', [...new Set([...arr1, ...arr2])]);
```

### 2. 交集

- [x] `交集`

```js{cmd='node' continue='08:18:14'}
console.log("交集", [...new Set(arr1)].filter(item => arr2.indexOf(item) >= 0)); // 将 arr1 展开 然后 对成员进行过滤 过滤的规则是: 如果该成员出现在 arr2 中 那么将其过滤掉
```

### 3. 差集

- [x] `差集`

```js{cmd='node' continue='08:18:14'}
const cross = [...new Set(arr1)].filter(item => arr2.indexOf(item) >= 0); // 交集
console.log("差集", [...new Set([...arr1, ...arr2])].filter(item => cross.indexOf(item) < 0)) // 并集中过滤掉交集
```

```js{cmd='node' continue='08:18:14'}
console.log("差集", [...new Set([...arr1, ...arr2])].filter(item => arr1.indexOf(item) >= 0 && arr2.indexOf(item) < 0 ||
    arr2.indexOf(item) >= 0 && arr1.indexOf(item) < 0)); // (arr1 有 && arr2 无) || (arr1 无 && arr2 有)
```

## 11.3 [扩展]手写set

- [x] demo

`第一步 参数检测`

```js
const MySet = (() => {
    return class MySet {
        constructor(iterator = []) { // 若不传入数据 那么默认传入的是一个空数组
            const type = typeof iterator[Symbol.iterator];
            if (type !== 'function') { // 检测传入的数据是否是一个可迭代对象
                throw new TypeError(`Uncaught TypeError: ${typeof iterator} ${iterator} is not iterable (cannot read property Symbol(Symbol.iterator))`);
            }
        }
    }
})();

/* 测试 */

// 传入错误的数据类型
new Set(22);
new MySet(22);
```

- [x] demo

`实现 set集合 所有核心 api`

```js
const MySet = (() => {
    return class MySet {
        constructor(iterator = []) {
            const type = typeof iterator[Symbol.iterator];
            if (type !== 'function') {
                throw new TypeError(`Uncaught TypeError: ${typeof iterator} ${iterator} is not iterable (cannot read property Symbol(Symbol.iterator))`);
            }
            this._datas = []; // 存放 set集合 中的每一项
            // 将传入的可迭代对象 iterator 的每一次的迭代结果添加到 set集合 中
            for (const item of iterator) {
                this.add(item);
            }
        }

        /**
         * 往 set集合 中添加数据
         * @param {*} data
         */
        add(data) {
            if (!this.has(data)) { // 若该数据在 set集合 中不存在
                this._datas.push(data); // 则往集合中添加一项
            }
            return this;
        }

        /**
         * 判断 set集合 内是否包含指定数据
         * 包含返回 true
         * 不包含返回 false
         * @param {*} data
         * @returns
         */
        has(data) {
            for (const item of this._datas) {
                if (this.isEqual(data, item)) {
                    return true;
                }
            }
            return false;
        }

        /**
         * set集合内部判断两个数据是否相等的依据
         * @param {*} data1
         * @param {*} data2
         * @returns
         */
        isEqual(data1, data2) {
            if (data1 === 0 && data2 === 0) { // 特殊情况
                return true;
            } else {
                return Object.is(data1, data2);
            }
        }

        /**
         * 删除指定数据
         * 删除成功 返回 true
         * 删除失败 返回 false
         * @param {*} data
         * @returns
         */
        delete(data) {
            for (let i = 0; i < this._datas.length; i++) {
                const item = this._datas[i];
                if (this.isEqual(item, data)) { // 查找
                    this._datas.splice(i, 1); // 删除
                    return true;
                }
            }
            return false;
        }

        /**
         * 清空 set集合
         */
        clear() {
            this._datas.length = 0;
        }

        /**
         * 遍历 set集合
         * @param {*} callback
         */
        forEach(callback) {
            for (const item of this._datas) {
                callback(item, item, this);
            }
        }

        /**
         * 获取 set集合 的成员数量
         */
        get size() {
            return this._datas.length;
        }
    }
})();

/* 测试 */
// const s1 = new Set([1, 2, 3, 2, 1]);
// console.log(s1);
// console.log(s1.has(1)); // true
// s1.add(1); // 无效
// s1.add(4);
// console.log(s1);

// const s2 = new MySet([1, 2, 3, 2, 1]);
// console.log(s2);
// console.log(s2.has(1)); // true
// s2.add(1); // 无效
// s2.add(4);
// console.log(s2);
```

- [x] demo

`将 set集合 设置为一个可迭代对象`

```js
const MySet = (() => {
    return class MySet {
        constructor(iterator = []) {
            const type = typeof iterator[Symbol.iterator];
            if (type !== 'function') {
                throw new TypeError(`Uncaught TypeError: ${typeof iterator} ${iterator} is not iterable (cannot read property Symbol(Symbol.iterator))`);
            }
            this._datas = [];
            for (const item of iterator) {
                this.add(item);
            }
        }

        add(data) {
            if (!this.has(data)) {
                this._datas.push(data);
            }
        }

        has(data) {
            for (const item of this._datas) {
                if (this.isEqual(data, item)) {
                    return true;
                }
            }
            return false;
        }

        isEqual(data1, data2) {
            if (data1 === 0 && data2 === 0) {
                return true;
            } else {
                return Object.is(data1, data2);
            }
        }

        delete(data) {
            for (let i = 0; i < this._datas.length; i++) {
                const item = this._datas[i];
                if (this.isEqual(item, data)) {
                    this._datas.splice(i, 1);
                    return true;
                }
            }
            return false;
        }

        clear() {
            this._datas.length = 0;
        }

        forEach(callback) {
            for (const item of this._datas) {
                callback(item, item, this);
            }
        }

        get size() {
            return this._datas.length;
        }

        *[Symbol.iterator]() {
            for (const item of this._datas) {
                yield item;
            }
        }
    }
})();
```

## 11.4 map集合

键值对（key value pair）数据集合的特点：键不可重复

map集合专门用于存储多个键值对数据。

在map出现之前，我们使用的是对象的方式来存储键值对，键是属性名，值是属性值。

使用对象存储有以下问题：

1. 键名只能是字符串
2. 获取数据的数量不方便`Object.keys(对象).length`
3. 键名容易跟原型上的名称冲突

### 1. 如何创建map

```js
new Map(); //创建一个空的map
new Map(iterable); //创建一个具有初始内容的map，初始内容来自于可迭代对象每一次迭代的结果，但是，它要求每一次迭代的结果必须是一个长度为2的数组，数组第一项表示键，数组的第二项表示值
```

### 2. 如何进行后续操作

- size：只读属性，获取当前map中键的数量
- set(键, 值)：设置一个键值对，键和值可以是任何类型
  - 如果键不存在，则添加一项
  - 如果键已存在，则修改它的值
  - 比较键的方式和set相同 `Object.is() 但是 -0 和 +0 相同`
- get(键): 根据一个键得到对应的值 `若获取的键不存在 则返回 undefined`
- has(键)：判断某个键是否存在
- delete(键)：删除指定的键
- clear(): 清空map


### 3. 和数组互相转换

和set一样

### 4. 遍历

- for-of，每次迭代得到的是一个长度为2的数组
- forEach，通过回调函数遍历
  - 参数1：每一项的值
  - 参数2：每一项的键
  - 参数3：map本身

- [x] demo

```js{cmd='node'}
const mp1 = new Map([['a', 1], ['b', 2], ['c', 3]]);
console.log(mp1); // Map(3) {"a" => 1, "b" => 2, "c" => 3}
```

- [x] demo

`size属性` `set()`

```js{cmd='node'}
const mp1 = new Map([['a', 1], ['b', 2], ['c', 3]]);
console.log(mp1.size); // 3
mp1.set(3, 6456);
console.log(mp1); // Map(4) {"a" => 1, "b" => 2, "c" => 3, 3 => 6456}
// 任何数据类型都可以作为键
mp1.set({}, 123);
console.log(mp1); // Map(5) {"a" => 1, "b" => 2, "c" => 3, 3 => 6456, {…} => 123}
```

- [x] demo

```js{cmd='node'}
// set 操作的键 不存在 则 新增 已存在 则 修改
const mp1 = new Map([['a', 1], ['b', 2], ['c', 3]]);
mp1.set('a', 'dahuyou');
console.log(mp1); // Map(3) {"a" => "dahuyou", "b" => 2, "c" => 3}
```

- [x] demo

```js{cmd='node'}
const mp1 = new Map([['a', 1], ['b', 2], ['c', 3]]);
console.log(mp1.get('a')); // 1
console.log(mp1.has('a')); // true
console.log(mp1.delete('a')); // true
console.log(mp1); // Map(2) {"b" => 2, "c" => 3}
console.log(mp1.clear()); // undefined
console.log(mp1); // Map(0) {}
```

- [x] demo

`map 与 数组 相互转换`

```js{cmd='node'}
const mp1 = new Map([
    ['a', 3],
    ['c', 10],
    ['b', 4],
    ['c', 5]
]);

console.log(mp1);
const result = [...mp1];
console.log(result);
```

- [x] demo

`map 遍历` `for-of`

```js{cmd='node' id='09:15:59'}
const mp1 = new Map([
    ['a', 1],
    ['c', 3],
    ['b', 2],
    ['c', 4]
]);

const result = [...mp1];
```

```js{cmd='node' continue='09:15:59'}
for (const item of result) {
    console.log(item);
}
```

```js{cmd='node' continue='09:15:59'}
for (const item of result) {
    console.log(item[0], item[1]);
}
```

```js{cmd='node' continue='09:15:59'}
for (const [key, value] of result) { // 解构数组
    console.log(key, value);
}
```

- [x] demo

`map 遍历` `forEach`

```js{cmd='node' continue='09:15:59'}
result.forEach((value, key, mp) => {
    console.log(value, key, mp);
});
```

## 11.5 [扩展]手写map

- [ ] demo

`袁老版`

```js
class MyMap {
    constructor(iterable = []) {
        //验证是否是可迭代的对象
        if (typeof iterable[Symbol.iterator] !== "function") {
            throw new TypeError(`你提供的${iterable}不是一个可迭代的对象`)
        }
        this._datas = [];
        for (const item of iterable) {
            // item 也得是一个可迭代对象
            if (typeof item[Symbol.iterator] !== "function") {
                throw new TypeError(`你提供的${item}不是一个可迭代的对象`);
            }
            const iterator = item[Symbol.iterator]();
            const key = iterator.next().value;
            const value = iterator.next().value;
            this.set(key, value);
        }

    }

    set(key, value) {
        const obj = this._getObj(key);
        if (obj) {
            //修改
            obj.value = value;
        } else {
            this._datas.push({
                key,
                value
            })
        }
    }

    get(key) {
        const item = this._getObj(key);
        if (item) {
            return item.value;
        }
        return undefined;
    }

    get size() {
        return this._datas.length;
    }

    delete(key) {
        for (let i = 0; i < this._datas.length; i++) {
            const element = this._datas[i];
            if (this.isEqual(element.key, key)) {
                this._datas.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    clear() {
        this._datas.length = 0;
    }

    /**
     * 根据key值从内部数组中，找到对应的数组项
     * @param {*} key
     */
    _getObj(key) {
        for (const item of this._datas) {
            if (this.isEqual(item.key, key)) {
                return item;
            }
        }
    }

    has(key) {
        return this._getObj(key) !== undefined;
    }

    /**
     * 判断两个数据是否相等
     * @param {*} data1
     * @param {*} data2
     */
    isEqual(data1, data2) {
        if (data1 === 0 && data2 === 0) {
            return true;
        }
        return Object.is(data1, data2);
    }

    *[Symbol.iterator]() {
        for (const item of this._datas) {
            yield [item.key, item.value];
        }
    }

    forEach(callback) {
        for (const item of this._datas) {
            callback(item.value, item.key, this);
        }
    }
}
```

- [ ] demo

`独立写一遍`

```js
class MyMap {
    constructor(iterable = []) {
        if (typeof iterable[Symbol.iterator] !== 'function') {
            throw new TypeError(`您传入的${iterable}不是一个可迭代对象。`);
        } else {
            this._datas = [];
            for (const item of iterable) {
                if (typeof item[Symbol.iterator] !== 'function') {
                    throw new TypeError(`您传入的${item}不是一个可迭代对象。`);
                }
                const iterator = item[Symbol.iterator]();
                const key = iterator.next().value;
                const value = iterator.next().value;
                this.set(key, value);
            }
        }
    }

    set(key, value) {
        const item = this._getObj(key);
        if (item) {
            // 若存在 key 则修改
            item.value = value;
        } else {
            // 否则添加
            this._datas.push({
                key,
                value
            });
        }
        return this;
    }

    _getObj(key) {
        for (const item of this._datas) {
            if (item.key === key) {
                return item;
            }
        }
    }

    has(key) {
        return this._getObj(key) !== undefined;
    }

    delete(key) {
        for (let i = 0; i < this._datas.length; i++) {
            const item = this._datas[i];
            if (this._getObj(key) === item) {
                this._datas.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    get size() {
        return this._datas.length;
    }

    clear() {
        this._datas.length = 0;
    }

    get(key) {
        return this._getObj(key).value;
    }

    forEach(callback) {
        for (const item of this._datas) {
            callback(item.value, item.key, this);
        }
    }

    *[Symbol.iterator]() {
        for (const item of this._datas) {
            yield [item.key, item.value];
        }
    }
}

// 测试用例
const m1 = new Map([
    [1, 'a'],
    [2, 'b']
]);

const m2 = new MyMap([
    [1, 'a'],
    [2, 'b']
]);
```

## 11.6 [扩展]WeakSet和WeakMap

### 1. WeakSet

使用该集合，可以实现和set一样的功能，不同的是：

1. **它内部存储的对象地址不会影响垃圾回收**
2. 只能添加对象 `因为 WeakSet 就是用来检测对象引用的`
3. 不能遍历（不是可迭代的对象）、没有size属性、没有forEach方法

- [ ] demo

```js{cmd='node'}
let obj = {
    name: 'dahuyou',
    age: 21
}

const set1 = new Set();
const set2 = new WeakSet();
set1.add(obj);
set2.add(obj);

console.log(set1, set2);
```

![20210518160324](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210518160324.png)

```js
obj = null;
console.log(set1, set2);
```

![20210518160720](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210518160720.png)

```
这里有点奇怪 和袁老的测试结果对不上
```

- [ ] demo

```js
let obj = {
    name: 'yj',
    age: 18
}

const set = new WeakSet();
set.add(obj);

obj = null;
console.log(set);
```

![20210518160821](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210518160821.png)

```
展开 set 后，应该显示 empty 才对。
```

**WeakSet应用场景**

```
用于垃圾回收。。。
通过观察 WeakSet 展开后，是否还能观察都该指定对象。以此来判断是否还有东西指向该对象所处的那块内存空间。
```

### 2. WeakMap

类似于map的集合，不同的是：

1. **它的键存储的地址不会影响垃圾回收**
2. 它的键只能是对象
3. 不能遍历（不是可迭代的对象）、没有size属性、没有forEach方法

- [ ] demo

```js
let obj = {
    name: 'yj',
    age: 18
}

const map = new WeakMap();
map.set(obj, 123);

obj = null;

console.log(map);
```

```
PS: 这里的测试结果也和袁老的不同
```

![20210518161723](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210518161723.png)

- [x] demo

`WeakMap 应用场景介绍`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>WeakMap</title>
</head>

<body>
    <!-- 需求描述
    假设有这么一个场景 页面中的每一个 li 元素，都对应这一个 JS 对象
    当页面中的 li 元素被删除后，我们想让对应的 JS 对象 能被垃圾回收 -->
    <ul>
        <!-- { id: '1', name: '姓名1' } -->
        <li>1</li>
        <!-- { id: '2', name: '姓名2' } -->
        <li>2</li>
        <!-- { id: '3', name: '姓名3' } -->
        <li>3</li>
    </ul>
    <script>
        const wmap = new WeakMap();
        let lis = document.querySelectorAll('li');
        for (const li of lis) {
            wmap.set(li, { // 这里将 li 作为键名 （下面我们将）
                id: li.innerHTML,
                name: `姓名${li.innerHTML}`
            });
        }

        lis[0].remove(); // 将 第一个 li 从 DomTree 中移除
        lis = null; // 将 lis 设置为 null
        // 没有任何办法能够找到第一个 li 了，它会被垃圾回收器回收

        console.log(wmap);
    </script>
</body>

</html>
```

![20210518162923](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210518162923.png)

```
会发现第一个 li 以及被回收了
```

# 12. 代理与反射

## 12.1 [回顾]属性描述符

### 1. 数据属性

Property Descriptor 属性描述符  是一个普通对象，用于描述一个属性的相关信息

通过```Object.getOwnPropertyDescriptor(对象, 属性名)```可以得到一个对象的某个属性的属性描述符

- value：属性值
- configurable：该属性的描述符是否可以修改
- enumerable：该属性是否可以被枚举
- writable：该属性是否可以被重新赋值

> ```Object.getOwnPropertyDescriptors(对象)```可以得到某个对象的所有属性描述符

如果需要为某个对象添加属性时 或 修改属性时， 配置其属性描述符，可以使用下面的代码:

```js
Object.defineProperty(对象, 属性名, 描述符);
Object.defineProperties(对象, 多个属性的描述符)
```

- [x] demo

`getOwnPropertyDescriptor`

```js{cmd='node'}
const obj = {
    a: 1,
    b: 2
}

const desc = Object.getOwnPropertyDescriptor(obj, 'b');

console.log(desc);
```

![20210507102048](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210507102048.png)

- [x] demo

`configurable`

```js
const obj = {
    a: 1,
    b: 2
}

console.log(obj);

Object.defineProperty(obj, 'a', {
    value: 3,
    configurable: false
});

console.log(obj);

try {
    Object.defineProperty(obj, 'a', {
        value: 4,
        configurable: true
    });
} catch (err) {
    console.log(err);
}

console.log(obj);

obj.a = 4;

console.log(obj);
```

![20210423130404](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210423130404.png)

- [x] demo

`enumerable`

```js
const obj = {
    a: 1,
    b: 2
}

for (const prop in obj) {
    console.log(prop);
}

console.log(Object.keys(obj));
console.log(Object.values(obj));

Object.defineProperty(obj, 'a', {
    enumerable: false
});

console.log(`将 enumerable 设置为 false 之后`);

for (const prop in obj) {
    console.log(prop);
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
```

![20210423130732](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210423130732.png)

- [x] demo

`writable`

```js
const obj = {
    a: 1,
    b: 2
}

obj.a = 3;

console.log(obj);

Object.defineProperty(obj, 'a', {
    writable: false
});

obj.a = 4;

console.log(obj);
```

![20210423131005](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210423131005.png)

- [x] demo

`Object.defineProperties`

```js
const obj = {
    a: 1,
    b: 2
}

console.log(obj); // {a: 1, b: 2}

Object.defineProperties(obj, {
    a: {
        value: 111
    },
    b: {
        value: 222
    }
});

console.log(obj); // {a: 111, b: 222}
```

### 2. 存储器属性

属性描述符中，如果配置了 get 和 set 中的任何一个，则该属性，不再是一个普通属性，而变成了存取器属性。

get 和 set配置均为函数，如果一个属性是存取器属性，则读取该属性时，会运行get方法，将get方法得到的返回值作为属性值；如果给该属性赋值，则会运行set方法。

存取器属性最大的意义，在于可以控制属性的读取和赋值。

> 在定义存储器属性的时候 注意 value 和 writable
> 若同时给存储器添加的属性描述符包含 value 和 writable 可能会产生冲突

- [x] demo

```js{cmd='node'}
const obj = {
    a: 1,
    b: 2
}

Object.defineProperties(obj, {
    a: {
        get() {
            console.log('get obj.a');
        },
        set() {
            console.log(`set obj.a`);
        }
    }
});

obj.a; // 会执行 get 方法

obj.a = 123; // 会执行 set 方法
```

- [x] demo

```js
const obj = {
    b: 2
}

Object.defineProperty(obj, 'a', {
    get() {
        console.log(`运行了属性a的get函数`);
    },
    set(val) {
        console.log(`运行了属性a的set函数`, val);
    }
});

obj.a = obj.a + 1;

console.log(obj.a); // undefined
```

![20210423132849](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210423132849.png)

- [x] demo

```js
const user = {
    name: 'dahuyou'
}

Object.defineProperties(user, {
    age: {
        get() {
            return this._age;
        },
        set(val) {
            if (typeof val !== 'number') {
                throw new TypeError('年龄 age 必须是一个 number 类型')
            }
            if (val < 0) {
                val = 0;
            }
            if (val > 100) {
                val = 100;
            }
            this._age = val;
        }
    }
})

user.age = 21;
console.log(user.age); // 21
user.age = -10;
console.log(user.age); // 0
user.age = 1000;
console.log(user.age); // 100
user.age = '21'; // Uncaught TypeError: 年龄 age 必须是一个 number 类型
```

![20210507105436](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210507105436.png)

- [x] demo

`将对象身上的属性与页面中相关的元素统一起来`

```html
<div class="user">
    <p>
        <span>姓名: </span>
        <span class="name"></span>
    </p>
    <p>
        <span>年龄: </span>
        <span class="age"></span>
    </p>
</div>
```

```js
const spanName = document.querySelector('.name');
const spanAge = document.querySelector('.age');

const user = {}; // 与 页面中的 div.user 对应

Object.defineProperties(user, {
    name: {
        get() {
            return spanName.innerText;
        },

        set(val) {
            spanName.innerText = val;
        }
    },
    age: {
        get() {
            return spanAge.innerText;
        },

        set(val) {
            spanAge.innerText = val;
        }
    }
});

// 给对象 user 里面的 name 属性 或 age 属性 赋值
// 页面中的 spanName 和 spanAge 中的内容也会随之变化
user.name = 'dahuyou';
user.age = '21';
```

![20210423135013](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210423135013.png)

## 12.2 Reflect

**keyworks**

`函数式编程` `代理` `魔法/底层实现`

**1. Reflect是什么？**

Reflect是一个内置的JS对象，它提供了一系列方法，可以让开发者通过调用这些方法，访问一些JS底层功能

由于它类似于其他语言的**反射**，因此取名为Reflect

**2. 它可以做什么？**

使用Reflect可以实现诸如 属性的赋值与取值、调用普通函数、调用构造函数、判断属性是否存在与对象中  等等功能

**3. 这些功能不是已经存在了吗？为什么还需要用Reflect实现一次？**

有一个重要的理念，在ES5就被提出：减少魔法、让代码更加纯粹

这种理念很大程度上是受到函数式编程的影响

ES6进一步贯彻了这种理念，它认为，对属性内存的控制、原型链的修改、函数的调用等等，这些都属于底层实现，属于一种魔法，因此，需要将它们提取出来，形成一个正常的API，并高度聚合到某个对象中，于是，就造就了Reflect对象

因此，你可以看到Reflect对象中有很多的API都可以使用过去的某种语法或其他API实现。

```
同样的效果, 比如给对象 obj 身上的属性 a 赋值操作
方法1: obj.a = 1;
方法2: Reflect.set(obj, 'a', 1);
分析: 两种方法都能实现相同的效果, 但是, 前者被认为是"魔法", 后者通过 api 来实现, 属于底层实现 [不理解]
暂且先这么理解: 若不调用 api 来实现的操作, 那么都算是魔法, 调用 api 来实现, 那就不算是魔法, 而是属于底层实现;
```

**4. 它里面到底提供了哪些API呢？**

- Reflect.set(target, propertyKey, value): 设置对象target的属性propertyKey的值为value，等同于给对象的属性赋值
- Reflect.get(target, propertyKey): 读取对象target的属性propertyKey，等同于读取对象的属性值
- Reflect.apply(target, thisArgument, argumentsList)：调用一个指定的函数，并绑定this和参数列表。等同于函数调用
- Reflect.deleteProperty(target, propertyKey)：删除一个对象的属性
- Reflect.defineProperty(target, propertyKey, attributes)：类似于Object.defineProperty，不同的是如果配置出现问题，返回false而不是报错 `配置出现问题: 指的是 writable 和 value 这两个数据属性与getter、setter共存的问题。`
- Reflect.construct(target, argumentsList)：用构造函数的方式创建一个对象
- Reflect.has(target, propertyKey): 判断一个对象是否拥有一个属性
- 其他API：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

- [x] demo

`set`

```js
const obj = {
    a: 1,
    b: 2
}

console.log(obj); // {a: 1, b: 2}

Reflect.set(obj, 'a', 10); // obj.a = 10;

console.log(obj); // {a: 10, b: 2}
```

- [x] demo

`get`

```js
const obj = {
    a: 1,
    b: 2
}

console.log(Reflect.get(obj, 'a')); // 1
// Reflect.get(obj, 'a') ==> obj.a
```

- [x] demo

`apply`

```js
function method(a, b) {
    console.log('method', a, b);
}

Reflect.apply(method, null, [3, 4]); // method(3, 4);
```

- [x] demo

`deleteProperty`

```js
const obj = {
    a: 1,
    b: 2
}

Reflect.deleteProperty(obj, 'a'); // delete obj.a;

console.log(obj); // {b: 2}
```

- [x] demo

`construct`

```js
function Test(a, b) {
    this.a = a;
    this.b = b;
}

const t = Reflect.construct(Test, [1, 2]);
// const t = new Test(1, 2);
console.log(t); // Test {a: 1, b: 2}
```

- [x] demo

`has`

```js
const obj = {
    a: 1,
    b: 2
}

console.log(Reflect.has(obj, 'a')); // true
// console.log('a' in obj); // true
```

```
这节课的目的主要是为了起一个辅助作用, 为了更好的理解后续的 Proxy
对于本节课的内容, 我们需要掌握的并不是熟练的运用 Reflect 来替代我们平时的 "魔法" 式的写法, 而是要认识到 ES6 为啥要推出 Reflect 这个东西 [因为 ECMA 有意愿把 ES 推向 函数式编程语言; 为了实现 代理 (Proxy); ...]
```

## 12.3 Proxy

代理：提供了修改底层实现的方式

```js
//代理一个目标对象
//target：目标对象
//handler：是一个普通对象，其中可以重写底层实现 (可以重写 Reflect 里头的所有 api)
//返回一个代理对象
new Proxy(target, handler)
```

**目标(target)和代理(proxy)之间的关系**

![关系图](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210507191602.png)

```
外界可以通过代理 Proxy 来间接地操作 目标 target
```

- [x] demo

```js{cmd='node'}
const obj = {
    a: 1,
    b: 2
}

const proxy = new Proxy(obj, {

});

console.log(typeof proxy); // object
console.log(proxy); // Proxy {a: 1, b: 2}
proxy.a = 10;
console.log(obj.a); // 10
```

- [x] demo

`虽然我们不能直接改变 目标 obj 的底层实现 但是我们可以通过 目标 的代理来重写 底层实现`

```js{cmd='node'}
const obj = {
    a: 1,
    b: 2
}

const proxy = new Proxy(obj, {
    set(target, propertyKey, value) { // 相当于重写 Reflect.set
        console.log(target, propertyKey, value); // {a: 1, b: 2} "a" 10
    }
});

proxy.a = 10; // 相当于调用了 Reflect.set(obj, 'a', 10)
console.log(obj); // {a: 1, b: 2}

// 但是, 如果走代理 直接操作目标的话, 那还是和正常情况一样的
obj.a = 10;
console.log(obj); // {a: 10, b: 2}
```

```
我们不能修改目标对象的底层实现, 但是我们可以重写代理 Proxy 的底层实现, 而我们可以通过代理, 来间接地操作目标对象, 这就相当于我们修改了目标对象的底层实现, 不过前提得是我们通过代理对象来间接地操作目标对象;
```

- [x] demo

```js{cmd='node'}
const obj = {
    a: 1,
    b: 2
}

const proxy = new Proxy(obj, {
    set(target, propertyKey, value) {
        target[propertyKey] = value;
    }
});

proxy.a = 10;
console.log(obj); // {a: 10, b: 2}
```

- [x] demo

```js{cmd='node'}
const obj = {
    a: 1,
    b: 2
}

const proxy = new Proxy(obj, {
    set(target, propertyKey, value) {
        Reflect.set(target, propertyKey, value);
    }
});

proxy.a = 10;
console.log(obj); // {a: 10, b: 2}
```

- [x] demo

```js
const obj = {
    a: 1,
    b: 2
}

const proxy = new Proxy(obj, {
    set(target, propertyKey, value) {
        Reflect.set(target, propertyKey, value);
    },
    get(target, propertyKey) {
        if (Reflect.has(target, propertyKey)) {
            return Reflect.get(target, propertyKey);
        } else {
            throw new Error(`can not find the property ${propertyKey} in target`);
        }
    }
});

console.log(proxy.a); // 1
console.log(proxy.c); // Uncaught Error: can not find the property c in target
```

- [x] demo

```js{cmd='node'}
const obj = {
    a: 1,
    b: 2
}

const proxy = new Proxy(obj, {
    set(target, propertyKey, value) {
        Reflect.set(target, propertyKey, value);
    },
    get(target, propertyKey) {
        if (Reflect.has(target, propertyKey)) {
            return Reflect.get(target, propertyKey);
        } else {
            throw new Error(`can not find the property ${propertyKey} in target`);
        }
    },
    has(target, propertyKey) {
        return false;
    }
    // Reflect 身上的所有 api 都可以在这里面重写
});

console.log('a' in proxy); // false
```

- [x] demo

`使用 proxy 来模拟 访问器属性的效果`

```js
const userName = document.querySelector('.name'),
    userAge = document.querySelector('.age');

const user = {};
/*
Object.defineProperties(user, {
    name: {
        get() {
            return userName.innerHTML
        },
        set(val) {
            userName.innerHTML = val;
        }
    },
    age: {
        get() {
            return userAge.innerHTML
        },
        set(val) {
            userAge.innerHTML = val;
        }
    }
});

user.name = 'dahuyou';

user.age = 123;
*/

const proxy = new Proxy(user, {
    set(target, propertyKey, value) {
        if (propertyKey === 'name') {
            target[propertyKey] = value;
            userName.innerHTML = value;
        } else if (propertyKey === 'age') {
            target[propertyKey] = value;
            userAge.innerHTML = value;
        }
    },
    get(target, propertyKey) {
        return Reflect.get(target, propertyKey);
    }
})

proxy.name = 'dahuyou';
proxy.age = 123;

console.log(user);
```

![20210507112905](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210507112905.png)

**[思考] 代理与发射之间的关系**

- Reflect 提供底层实现的 api
- Proxy 可以重写 Reflect 里面的 api, 从而间接地修改底层实现

## 12.4 应用-观察者模式

有一个对象，是观察者，它用于观察另外一个对象的属性值变化，当属性值变化后会收到一个通知，可能会做一些事。

- [x] demo

```html
<div id="container"></div>
```

`使用以前的方式来实现 观察者模式`

```js
// 创建一个观察者
function observer(target) {
    const div = document.querySelector('#container');
    const ob = {};
    const props = Object.keys(target);
    for (const prop of props) {
        Object.defineProperty(ob, prop, {
            get() {
                return target[prop];
            },
            set(val) {
                target[prop] = val;
                render();
            },
            enumerable: true
        });
    }

    render();
    function render() {
        let html = '';
        const props = Object.keys(ob);
        for (const prop of props) {
            html += `<p><span>${prop}：</span><span>${ob[prop]}</span></p>`
        }
        div.innerHTML = html;
    }

    return ob;
}

const target = {
    a: 1,
    b: 2
};

const obj = observer(target);

obj.c = 100;
obj.a = 10; // [注] 若该语句不执行, 那么 页面中将不会渲染 c
```

![20210423154357](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210423154357.png)

```
[bug]
    obj.c = 100; // 若想把该数据渲染到页面中 那么我们得再次执行 render() 但是我们必须给 target 身上的属性赋值时, 才会再次执行 render() 因为初始情况下, 我们是依据 target 身上的成员来操作的, 即: 观察者 ob 的访问器属性都是 target 身上的成员, 而 c 是我们后续单独给观察者添加的成员, 它仅仅是一个普通的数据属性, 而非访问器属性;
```

- [x] demo

`使用代理来实现观察者模式`

> vue3.0 底层源码 也有使用到这种方式

```js
// 创建一个观察者
function observer(target) {
    const div = document.querySelector('#container');
    const proxy = new Proxy(target, {
        set(target, propertyKey, value) {
            Reflect.set(target, propertyKey, value);
            render();
        },
        get(target, propertyKey, value) {
            return Reflect.get(target, propertyKey);
        }
    });

    render();

    function render() {
        let html = '';
        const props = Object.keys(target);
        for (const prop of props) {
            html += `<p><span>${prop}：</span><span>${proxy[prop]}</span></p>`
        }
        div.innerHTML = html;
    }

    return proxy;
}

const target = {
    a: 1,
    b: 2
};

const obj = observer(target);

obj.c = 100;
obj.a = 10;
```

## 12.5 应用-偷懒的构造函数

- [x] demo

```js
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
        this.age = age;
    }
}

const user1 = new User('da', 'huyou', 21);
const user2 = new User('xiao', 'huyou', 21);

console.log(user1); // User {firstName: "da", lastName: "huyou", fullName: "dahuyou", age: 21}
console.log(user2); // User {firstName: "xiao", lastName: "huyou", fullName: "xiaohuyou", age: 21}
```

- [x] demo

```js
class User {};

/**
 * 偷懒的构造函数
 * @param {class} Class 类
 * @param  {...any} propNames 类的属性名
 */
function ConstructorProxy(Class, ...propNames) {
    return new Proxy(Class, {
        construct(target, args) {
            const obj = Reflect.construct(target, args); // const obj = new target(...args);
            propNames.forEach((name, i) => {
                obj[name] = args[i];
            });
            return obj;
        }
    });
}

const UserProxy = ConstructorProxy(User, 'firstName', 'lastName', 'age');

const obj = new UserProxy('da', 'huyou', 21);
console.log(obj);

class Monster {};

const MonsterProxy = ConstructorProxy(Monster, 'attack', 'defence', 'hp', 'rate', 'name');
const m = new MonsterProxy(10, 20, 100, 30, '怪物');
console.log(m);
```

![20210423171530](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210423171530.png)

**分析**

```js
function User() { // 不是 class 而是一个函数 依旧可以走代理 (要理解 class 不过是一个语法糖而已 实际上还是通过构造函数来创建实例对象的)
    // var this = { __proto__: User.prototype }; // 构造函数内部原理
    console.log('arguments ==> ', arguments);
    // return this; // 构造函数内部原理
}

function constructorProxy(target, ...propNames) {
    console.log('propNames ==> ', propNames);
    return new Proxy(target, {
        construct(target, args) { // 【注】这里不需要写成 construct(target, ...args) 因为我们传入的后续参数会自动被 args 接收，所以就没有必要多此一举了。
            console.log('target ==> ', target);
            console.log('args ==> ', args);
            const result = Reflect.construct(target, args); // 相当于执行了 const result = new User(...args); 即: result 变量中存放的是 构造函数User 所创建的实例对象
            // const result = Reflect.construct(target); // 虽然此时 args 传进去压根就没啥用, 不过如果不传入这个参数的话, 那么 Reflect.construct() 的调用会报错...
            console.log('result ==> ', result); // 此时 实例对象里面是空的, 啥也没有
            propNames.forEach((name, i) => { // 给空的User实例对象 result 赋值
                result[name] = args[i];
            });
            return result;
        }
    })
}

const UserProxy = constructorProxy(User, 'firstName', 'lastName', 'age');

const user1 = new UserProxy('da', 'huyou', '21');

console.log(user1);
```

![输出结果](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210508195355.png)

```
偷懒的构造函数, 实际上内部实现就是重写目标(构造函数or类)的construct, 即: Reflect.construct(target, argumentList);
    先调用 Reflect.construct(target, argumentList); 得到一个空的实例 (因为在这个案例中, 我们传入的 target 里面啥也没干, 我们并没有给 target 中返回的实例对象(返回的this)添加成员, 所以我们得到的实例对象身上干干净净, 啥都木有...)
    再往这个空的实例对象里面塞键值对
        [问] 键 从哪来, 值 从哪来?
        [答] 在调用 constructorProxy 创建代理 UserProxy 的时候, 传入目标对象 和 键 (有多少个传多少个, 这些键将由剩余参数 propNames 接收)
        在调用前一步创建的代理 UserProxy 的时候, 传入与键对应的值 (在传入值的时候, 只要与相应的键在次序上对应上即可, 我们不需要以 数组 的形式来传值, 我们所传入的所有参数, 都会被接收到 args 变量中, args 是一个数组, 每一项就是我们传入的参数)

[不足] 虽说使用这种方式, 确实可以帮我们简化构造函数的创建工作, 只要写一次, 后续若还有构造函数要写, 只要调用 constructorProxy 来创建一个新的代理即可, 但是, 它还是有蛮多地方不方便的, 比如说, 我们在创建 User 实例的时候, 希望同时创建一个 fullName 成员, 并且 fullName = firstName + lastName; 若要实现这样的效果, 那么通用的 constructorProxy 貌似就实现不了了, 得我们后续再手动添加;
```

## 12.6 应用-可验证的函数参数

- [x] demo

```js
function sum(a, b) {
    return a + b;
}

function validatorFunction(func, ...types) {
    return new Proxy(func, {
        apply(target, thisArgument, argumentsList) {
            types.forEach((t, i) => {
                const type = typeof argumentsList[i];
                if (type !== t) {
                    throw new TypeError(`第${i+1}个参数的数据类型要求是${t}`);
                }
            });
            return Reflect.apply(target, thisArgument, argumentsList);
        }
    });
}

const sumProxy = validatorFunction(sum, 'number', 'number');

console.log(sumProxy(1, 2));
console.log(sumProxy(1, '2')); // Uncaught TypeError: 第2个参数的数据类型要求是number
```

```
Reflect.apply(target, thisArgument, argumentsList);
[问] 为什么不return 后续的两条打印语句得到的是 undefined
[答] ... 这其实就是走代理呀, 如果理解了啥叫走代理, 应该都不会有这样的问题... 因为当我们调用 sumProxy() 的时候, 实际上就是在调用 apply, 也就是说, 我们调用 sumProxy 得到的返回值 就是 apply 中给我们返回的值, 若 apply 中设置不返回值的话, 那么默认返回的是 undefined
```

- [x] demo

```js
function sum(a, b) {
    return a + b;
}

function validatorFunction(func, ...types) {
    return function (...args) {
        types.forEach((t, i) => {
            const type = typeof args[i];
            if (type !== t) {
                throw new TypeError(`第${i+1}个参数的数据类型要求是${t}`);
            }
        });
        return func(...args);
    }
}

const sumProxy = validatorFunction(sum, 'number', 'number');

console.log(sumProxy(1, 2));
console.log(sumProxy(1, '2')); // Uncaught TypeError: 第2个参数的数据类型要求是number
```

> 多创建了一个函数 浪费内存

# 13. 增强的数组功能

`课程规矩与指导`

| 知识点 | 难度 | 重要性 | 学习视频              | 视频时长(min) | 学习次数 |
| ------ | ---- | ------ | --------------------- | ------------- | -------- |
| es6    | 2    | 5      | 1. 新增的数组API      | 22            | 3/1      |
| es6    | 3    | 2      | 2. [扩展]类型化数组   | 37            | 0/1      |
| es6    | 3    | 2      | 3. [扩展]ArrayBuffer  | 23            | 0/1      |
| es6    | 3    | 2      | 4. [扩展]制作黑白图片 | 25            | 0/1      |

| 学习时间 | 达成效果                  | 老师建议                                                                                                                                                    |
| -------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1天      | 熟练使用数组新增的几个API | 数组新增的几个API都非常简单，也很实用。本章的难度主要集中在扩展课程上，虽然这些知识后续很少使用，但知道ES还存在这么一种存储数值的方式，还是有必要了解一下的 |

## 13.1 新增的数组API

**静态方法**

- Array.of(...args): 使用指定的数组项创建一个新数组
- Array.from(arg): 通过给定的类数组 或 可迭代对象 创建一个新的数组。

- [x] demo

`Array.of`

```js
const arr1 = Array.of(1, 2, 3, 4, 5);
const arr2 = new Array(1, 2, 3, 4, 5);
const arr3 = [1, 2, 3, 4, 5];

console.log(arr1, arr2, arr3);
```

![20210423175542](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210423175542.png)

- [x] demo

`Array.of`

```js
const arr1 = Array.of(5);
const arr2 = new Array(5);
const arr3 = [5];

console.log(arr1, arr2, arr3);
```

![20210423175707](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210423175707.png)

**实例方法**

- find(callback): 用于查找满足条件的第一个元素
- findIndex(callback)：用于查找满足条件的第一个元素的下标
- fill(data)：用指定的数据填充满数组所有的内容
- copyWithin(target, start?, end?): 在数组内部完成复制
- includes(data)：判断数组中是否包含某个值，使用Object.is匹配


- [x] demo

`find`

```js
const arr = [{
        name: 'a',
        id: 1
    },
    {
        name: 'b',
        id: 2
    },
    {
        name: 'c',
        id: 3
    },
    {
        name: 'd',
        id: 4
    },
    {
        name: 'e',
        id: 5
    },
    {
        name: 'f',
        id: 6
    }
];

// 查找 id 为 5 的对象
const result = arr.find(item => item.id === 5);
console.log(result); // {name: "e", id: 5}
```

`find 和 filter`

> 找一项 ==> find
> 找多项 ==> filter

- [x] demo

`findIndex`

```js
const result = arr.findIndex(item => item.id === 5);
console.log(result); // 4
```

`findIndex 和 indexOf`

> findIndex 可以传入回调函数 更加灵活
> indexOf 需要传入指定的数据值

- [x] demo

`copyWithin`

```js
const arr = [1, 2, 3, 4, 5, 6];
//从下标2开始，改变数组的数据，数据来自于下标0位置开始
// arr.copyWithin(2); // [1, 2, 1, 2, 3, 4]

// 数据来自于下标1位置开始
// arr.copyWithin(2, 1); // [1, 2, 2, 3, 4, 5]

// 数据来自于下标1位置开始 在3位置截止 (不包括3位置)
// arr.copyWithin(2, 1, 3); // [1, 2, 2, 3, 5, 6]
console.log(arr)
```

- [x] demo

`includes`

```js
const arr = [1, 2, 3, 4, 5];

arr.indexOf(3) !== -1; // true
arr.includes(3); // true
```

## 13.2 [扩展]类型化数组


### 1. 数字存储的前置知识

1. 计算机必须使用固定的位数来存储数字，无论存储的数字是大是小，在内存中占用的空间是固定的。

2. n位的无符号整数能表示的数字是2^n个，取值范围是：0 ~ 2^n - 1

3. n位的有符号整数能表示的数字是2^n个，取值范围是：-2^(n-1) ~ 2^(n-1) - 1

4. 浮点数表示法可以用于表示整数和小数，目前分为两种标准：
   1. 32位浮点数：又称为单精度浮点数，它用1位表示符号，8位表示阶码，23位表示尾数
   2. 64位浮点数：又称为双精度浮点数，它用1位表示符号，11位表示阶码，52位表示尾数

5. JS中的所有数字，均使用双精度浮点数保存

### 2. 类型化数组

类型化数组：用于优化多个数字的存储

具体分为：

- Int8Array： 8位有符号整数（-128 ~ 127）
- Uint8Array： 8位无符号整数（0 ~ 255）
- Int16Array: ...
- Uint16Array: ...
- Int32Array: ...
- Uint32Array: ...
- Float32Array:
- Float64Array

1. 如何创建数组

```js

new 数组构造函数(长度)

数组构造函数.of(元素...)

数组构造函数.from(可迭代对象)

new 数组构造函数(其他类型化数组)
```

2. 得到长度

```js
数组.length   //得到元素数量
数组.byteLength //得到占用的字节数
```

3. 其他的用法跟普通数组一致，但是：

- 不能增加和删除数据，类型化数组的长度固定
- 一些返回数组的方法，返回的数组是同类型化的新数组

- [x] demo

`8位的数字`

```js
const arr1 = new Int8Array(10);
const arr2 = new Array(10);
console.log(arr1, arr2);
```

![20210519121925](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519121925.png)

```js
console.log(arr1.length, arr2.length); // 10 10
console.log(arr1.byteLength, arr2.byteLength); // 10 undefined
```

- [x] demo

`32位的数字`

```js
const arr = Int32Array.of(1, 2, 3);
console.log(arr); // Int32Array(3) [1, 2, 3]
console.log(arr.length); // 3
console.log(arr.byteLength); // 12
```

- [x] demo

`若溢出，则舍弃最左边的那一位`

```js
const arr = Int8Array.of(128);
// 128 ==> 0 1000 0000 （128 的源码）
// 相当于存的是 1000 0000 也就是 -128 （符号位是1表示负，取反后加1，也就是 0111 1111 + 1 即：1000 0000 也就是 -128）
// Int8Array 能够存储的数据范围是：-128 ~ 127 （1000 0000 ~ 0111 1111）
console.log(arr);
```

![20210519123720](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519123720.png)

- [x] demo

```js
const arr1 = Int8Array.of(1, 2, 3);
const arr2 = new Int8Array(arr1);

console.log(arr1, arr2);
```

![20210519124129](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519124129.png)

- [x] demo

`高位 往 低位 存储数据，要注意溢出问题。`

```js
const arr1 = Int32Array.of(1, 12345, 3);
const arr2 = new Int8Array(arr1);

console.log(arr1, arr2);
```

![20210519124210](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519124210.png)

- [x] demo

`无法 增加、修改、删除 数据`

```js
const arr = Int8Array.of(1, 2, 3);
arr[4] = 4;
arr[0] = 100;
delete arr[1];
console.log(arr);
```

![20210519124715](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519124715.png)

- [x] demo

`一些返回数组的方法，返回的数组是同类型化的新数组。`

```js
const arr = Int8Array.of(1, 2, 3);
console.log(arr.map(item => item ** 2));
```

![20210519124828](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519124828.png)

## 13.3 [扩展]ArrayBuffer


ArrayBuffer：一个对象，用于存储一块固定内存大小的数据。

```js
new ArrayBuffer(字节数)
```

可以通过属性```byteLength```得到字节数，可以通过方法```slice```得到新的ArrayBuffer

- [x] demo

```js
// 创建一个能够存储10个字节的内存空间
const bf = new ArrayBuffer(10);
console.log(bf);
```

![20210519125446](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519125446.png)

- [x] demo

```js
const bf = new ArrayBuffer(10);
const bf2 = bf.slice(); // 将 bf 内存空间的数据拷贝一份 保存到变量 bf2 中
const bf3 = bf.slice(3, 5); // 将 bf 内存空间的数据 （第四位和第五位） 拷贝一份保存到变量 bf3 中
console.log(bf, bf2, bf3);
```

![20210519125850](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519125850.png)

### 读写ArrayBuffer

1. 使用DataView

通常会在需要混用多种存储格式时使用DataView

- [x] demo

```js
const bf = new ArrayBuffer(10);
const view = new DataView(bf, 3, 4);
console.log(view);
```

![20210519130529](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519130529.png)

- [x] demo

```js
const bf = new ArrayBuffer(10);
const view = new DataView(bf, 3, 4);
view.setInt8(1, 100); // 偏移量 1 值设置为 100
console.log(view);
console.log(view.getInt8(1)); // 读取偏移量为 1 的数据值
```

![20210519131222](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519131222.png)

- [x] demo

`存和取 可以是不同位数`

```js
const bf = new ArrayBuffer(10);
const view = new DataView(bf, 3, 4);
view.setInt16(2, 100); // 用 16 位来设置
console.log(view);
console.log(view.getInt8(1)); // 用 8 位来取
console.log(view.getInt8(3)); // 用 8 位来取
```

![20210519132040](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519132040.png)

```
若想看懂，则必须要了解计算机内部是如何存储数据的。可以动手在纸上画一下。
PS：虽然使用 DataView 可以操作 ArrayBuffer 但是由于它的 set 和 get 可以混着用，所以，如果不是确实有这样的需求，那么很容易会出现混乱。
```

2. 使用类型化数组（重点）

实际上，每一个类型化数组都对应一个ArrayBuffer，如果没有手动指定ArrayBuffer，类型化数组创建时，会新建一个ArrayBuffer

- [x] demo

```js
const bf = new ArrayBuffer(10);
const arr1 = new Int8Array(bf);

console.log(arr1.buffer === bf); // true
```

```
说明 arr1 这个类型化数组操作的内存实际上是 bf 做指的那块内存
```

- [x] demo

`使用多个类型化数组操作同一块内存空间`

```js
const bf = new ArrayBuffer(10);
const arr1 = new Int8Array(bf);
const arr2 = new Int16Array(bf);

console.log(arr1 === arr2); // false
console.log(arr1.buffer === arr2.buffer); // true
```

```
虽然两个类型化数组并不相同，但是，它们操作的内存空间是一样的。
```

```js
const bf = new ArrayBuffer(10);
const arr1 = new Int8Array(bf);
const arr2 = new Int16Array(bf);

arr1[0] = 100;

console.log(arr1, arr2);
```

![20210519133347](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519133347.png)

- [x] demo

```js
const bf = new ArrayBuffer(10);
const arr = new Int16Array(bf);

arr[0] = 1000;
console.log(arr);
```

![20210519133749](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519133749.png)

## 13.4 [扩展]制作黑白图片

> 利用前两节课所讲解的相关知识，来实现一个小案例。

```
会涉及到到 canvas 的相关知识
```

**1. 将 canvas 的尺寸设置为图片的尺寸**

- [x] demo

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>制作黑白卡片</title>
    <style>
        div {
            display: flex;
        }
    </style>
</head>

<body>
    <div>
        <img src="./img/liao.jpg" alt="">
        <button>转化</button>
        <canvas></canvas>
    </div>
    <script>
        const canvas = document.querySelector('canvas');
        const img = document.querySelector('img');
        img.onload = () => {
            const imgStyles = getComputedStyle(img),
                imgWidth = parseFloat(imgStyles.width),
                imgHeight = parseFloat(imgStyles.height);
            canvas.style.width = imgWidth + 'px';
            canvas.style.height = imgHeight + 'px';
        }
    </script>
</body>

</html>
```

```
【注】 img 异步加载问题
```

**2. 绘制图片**

```
画布中的一个图像是由多个像素点组成，每个像素点拥有4个数据：红、绿、蓝、alpha。
把一个图像变成黑白，只需要将图像的每个像素点设置成为红、绿、蓝的平均数即可。
比方说：某个像素点
    红：100
    绿：50
    蓝：150
    那么平均值就是 100，只需要重新设置红、绿、蓝的值为100即可。
问：如何获取图像中的像素点信息？
答：先将图像绘制到 canvas 中，再从 canvas 中取像素点。
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>制作黑白卡片</title>
    <style>
        div {
            display: flex;
            /* bug: 为什么将 display 设置为 flex 之后，图片的尺寸会发生变化，高度由原来的117变为150 */
        }
    </style>
</head>

<body>
    <div>
        <img src="./img/liao.jpg" alt="">
        <button>转化</button>
        <canvas></canvas>
    </div>
    <script>
        const cvs = document.querySelector('canvas');
        const ctx = cvs.getContext('2d');
        const btn = document.querySelector('button');
        const img = document.querySelector('img');
        img.onload = () => {
            const imgStyles = getComputedStyle(img),
                imgWidth = parseFloat(imgStyles.width),
                imgHeight = parseFloat(imgStyles.height);
            cvs.style.width = imgWidth + 'px';
            cvs.style.height = imgHeight + 'px';
        }

        btn.onclick = function () {
            ctx.drawImage(img, 0, 0);
        }
    </script>
</body>

</html>
```

![20210519185432](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519185432.png)

```
。。。出现了 bug，还不清楚原因
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>制作黑白卡片</title>
</head>

<body>
    <div style="display: flex;">
        <img src="./img/liao.jpg" alt="">
        <button onclick="change()">转化</button>
        <!-- 图片的尺寸是：100*117
        这里直接写死算了。。 -->
        <canvas width="100" height="117"></canvas>
    </div>
    <script>
        const cvs = document.querySelector('canvas');
        const ctx = cvs.getContext('2d');
        const img = document.querySelector('img');

        function change() {
            ctx.drawImage(img, 0, 0);
        }
    </script>
</body>

</html>
```

![20210519185702](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519185702.png)

**3. 获取图像中像素点的相关信息**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>制作黑白卡片</title>
</head>

<body>
    <div style="display: flex;">
        <img src="./img/liao.jpg" alt="">
        <button onclick="change()">转化</button>
        <canvas width="100" height="117"></canvas>
    </div>
    <script>
        const cvs = document.querySelector('canvas');
        const ctx = cvs.getContext('2d');
        const img = document.querySelector('img');

        function change() {
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, img.width, img.height);
            console.log(imageData);
        }
    </script>
</body>

</html>
```

![20210519190453](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519190453.png)

```
数组的长度：117 * 100 * 4 === 46 800
若使用普通数组来存储
    数组的每一项是64位，总合是：46800 * 64 === 2 995 200位
    转化为 KB：2995200 / 8 / 1024 === 365KB
Uint8Array：
    数组的每一项是8位，所占空间是普通数组的 1/8 ==> 45KB

这就是 ES6 设计出类型化数组的原因，可以减少内存空间的占用。
```

**4. 修改每一个像素点**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>制作黑白卡片</title>
</head>

<body>
    <div style="display: flex;">
        <img src="./img/liao.jpg" alt="">
        <button onclick="change()">转化</button>
        <canvas width="100" height="117"></canvas>
    </div>
    <script>
        const cvs = document.querySelector('canvas');
        const ctx = cvs.getContext('2d');
        const img = document.querySelector('img');

        function change() {
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, img.width, img.height);
            // 以像素点为单位进行循环
            for (let i = 0; i < imageData.data.length; i += 4) { // 每4个为一组
                const r = imageData.data[i]; // red
                const g = imageData.data[i + 1]; // green
                const b = imageData.data[i + 2]; // blue
                const avg = (r + g + b) / 3;
                imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = avg;
            }
            ctx.putImageData(imageData, 0, 0);
        }
    </script>
</body>

</html>
```

![20210519195215](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519195215.png)

```
问：万一avg是小数咋办？
答：当我们把处理完的数据重新插入到画布中时，它在内部会帮我们处理为整数的。
```

- [ ] demo

`ajax 请求图片数据`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>ajax 请求图片数据</title>
</head>
<body>
    <script>
        async function test() {
            const resp =  await fetch('./img/liao.jpg');
            // const result = resp.json(); // 这么写是错误的，显然，图片的数据不可能是 json 格式
            const blob = await resp.blob(); // blob 中存放的是文件的信息
            console.log(blob);
        }
        test();
    </script>
</body>
</html>
```

![20210519201003](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519201003.png)

- [ ] demo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>ajax 请求图片数据</title>
</head>
<body>
    <script>
        async function test() {
            const resp =  await fetch('./img/liao.jpg');
            const blob = await resp.blob();
            const result = await blob.arrayBuffer(); // 可以获取到 blob 中存放的文件信息的相关数据（二进制）
            console.log(result);
            /* 获取到结果数据后，我们就可以对其进行处理
            const arr = new Int8Array(bf, 3, 2); // 可以设置偏移量
            console.log(arr);
            这里我们只要知道，对于二进制的文件数据，我们是有渠道来处理的，但是要得到 期望的处理结果，那还得其他领域的相关知识。。。 */
        }
        test();
    </script>
</body>
</html>
```

![20210519201257](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210519201257.png)

```
会发现数组的长度少了很多，这是因为图片文件的存储，并不是把每一个像素点都给存下来，它里头有相应的算法来处理。并且，对于不同类型的图片文件，对应的处理算法也不同。更多的细节，不在咋们前端的射程范围内。。。
```