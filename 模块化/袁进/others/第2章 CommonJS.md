# 第2章 CommonJS {ignore}

[toc]

## 2-1. 安装nodejs

官网地址：https://nodejs.org/zh-cn/

![20210524182719](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524182719.png)

```
直接下载左侧的文档版即可。
```

**如何利用安装好的NodeJs来运行本地的JS文件**

- 方法1

1. 找到本地的js文件所在的目录，复制该目录。

![20210524183040](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524183040.png)

```js
// index.js 文件中的文件内容
console.log('dahuyou');
```

2. 复制文件所在路径。

![20210524183104](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524183104.png)

3. win + R 输入 cmd 打开命令行。

![20210524183545](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524183545.png)

> .js 后缀不是必须的

- 方法2

1. 打开 VsCode，找到需要执行的 JS 文件，右键，选择在集成终端中打开。

![20210524184339](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524184339.png)

> 也可以使用快捷键 Ctrl + J

2. 输入在终端输入执行命令执行即可执行指定的js文件。

![20210524184420](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524184420.png)

![20210524184426](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524184426.png)

- 方法3

1. 打开 VsCode，安装插件：Code Runner。

![20210524184703](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524184703.png)

2. 在指定的js文件中右键，选择 Run Code （快捷键为 Ctrl + Alt + N），即可运行指定的js文件。

![20210524184757](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524184757.png)

![20210524184837](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524184837.png)

**浏览器**

浏览器运行的是html页面，并加载页面中通过script元素引入的js

![20210524181944](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524181944.png)

**nodejs**

nodejs直接运行某个js文件，该文件被称之为入口文件（也叫：启动文件）

![20210524181953](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524181953.png)

nodejs遵循EcmaScript标准，但由于脱离了浏览器环境，因此：

1. 你可以在nodejs中使用EcmaScript标准的任何语法或api，例如：循环、判断、数组、对象等
2. 你不能在nodejs中使用浏览器的 web api，例如：dom对象、window对象、document对象等

由于大部分开发者是从浏览器端开发转向nodejs开发的，为了降低开发者的学习成本，nodejs中提供了一些和浏览器web api同样的对象或函数，例如：console、setTimeout、setInterval等。

## 2-2. CommonJS

在nodejs中，由于有且仅有一个入口文件（启动文件），而开发一个应用肯定会涉及到多个文件配合，因此，nodejs对模块化的需求比浏览器端要大的多。

![20210524194226](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524194226.png)

由于nodejs刚刚发布的时候，前端没有统一的、官方的模块化规范，因此，它选择使用社区提供的CommonJS作为模块化规范。

在学习CommonJS之前，首先认识两个重要的概念：**模块的导出**和**模块的导入**。

### 1. 模块的导出

要理解模块的导出，首先要理解模块的含义。

什么是模块？

模块就是一个JS文件，它实现了一部分功能，并隐藏自己的内部实现，同时提供了一些接口供其他模块使用。

模块有两个核心要素：**隐藏**和**暴露**。

隐藏的，是自己内部的实现。

暴露的，是希望外部使用的接口。

任何一个正常的模块化标准，都应该默认隐藏模块中的所有实现，而通过一些语法或api调用来暴露接口。

**暴露接口的过程即模块的导出**

![20210524194235](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524194235.png)

### 2. 模块的导入

当需要使用一个模块时，使用的是该模块暴露的部分（导出的部分），隐藏的部分是永远无法使用的。

**当通过某种语法或api去使用一个模块时，这个过程叫做模块的导入**。

### 3. CommonJS规范

CommonJS使用```exports```导出模块，```require```导入模块。

具体规范如下：

1. 如果一个JS文件中存在```exports```或```require```，该JS文件是一个模块。
2. 模块内的所有代码均为隐藏代码，包括全局变量、全局函数，这些全局的内容均不应该对全局变量造成任何污染。
3. 如果一个模块需要暴露一些API提供给外部使用，需要通过```exports```导出，```exports```是一个空的对象，你可以为该对象添加任何需要导出的内容。
4. 如果一个模块需要导入其他模块，通过```require```实现，```require```是一个函数，传入模块的路径即可返回该模块导出的整个内容。

```
对导入和导出的理解：
    导出：
        某一个 JS 功能模块，该功能模块中有一些方法或变量啥的，想要让其他模块访问，那么先要将这些东西导出，也就是把这些东西丢到 exports 对象中。
    导入：
        将某个功能模块 x 中导出的东西通过 require(x文件的路径) 函数，导入到当前的功能模块，require 方法返回的起始就是 exports 对象，这个 exports 对象里面包含那个功能模块导出的成员。
```

- [x] demo

某个文件夹下有 js 文件，`module1.js` 和 `module2.js`，现将 `module1.js` 中的部分内容导出到 `module2.js` 中使用。

`导入和导出`

```js
// module1.js
let count = 0;

function getNumber() {
    count++;
    return count;
}

const user = {
    name: 'dahuyou',
    age: 21
}

/*
将功能模块 module1.js 中的 getNumber 函数 和 变量 user 导出到 exports 对象中
【注】count 并没有导出
*/
exports.getNumber = getNumber;
exports.user = user;
```

```js
// module2.js
const obj = require('./module1.js'); // 导入 module1.js 模块
console.log(obj);
```

![20210524202036](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524202036.png)

```
nodejs 中导入模块，使用相对路径，并且必须以 ./ 或者 ../ 开头。
这一点与在浏览器环境中不同，浏览器中并不强制要求以 ./ 或者 ../ 开头，./module1.js 和 module1.js 表示的含义都相同。
在 nodejs 两种写法 ./module1.js 和 module1.js 表示的含义是不同的。（它们之间的区别，在后续的 npm 课程中再作详细介绍）
```

```js
// module2.js
const obj = require('./module1.js'); // 导入 module1.js 模块

const count = 100; // 不同模块之间的变量，互不影响。

console.log(obj.getNumber());
console.log(obj.getNumber());
console.log(obj.getNumber());

console.log(obj.user);

console.log(count);
console.log(obj.count); // undefined 因为 module1.js 中没有导出 count 变量
```

![20210524202354](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524202354.png)

```
当执行到 require 函数时，会同时执行 module1.js 文件中的代码。
```

### 4. nodejs对CommonJS的实现

为了实现CommonJS规范，nodejs对模块做出了以下处理

1. 为了保证高效的执行，仅加载必要的模块。nodejs只有执行到```require```函数时才会加载并执行模块。
2. 为了隐藏模块中的代码，nodejs执行模块时，会将模块中的所有代码放置到一个函数中执行，以保证不污染全局变量。

```js
(function(){
  // 模块中的代码
})()
// 这里只要简单的了解一下大致的原理就可以，之所以不会污染全局变量，是因为模块中的代码被丢到了函数中执行。具体如何实现，这门课不作讲解。
```

3. 为了保证顺利的导出模块内容，nodejs做了以下处理
   1. 在模块开始执行前，初始化一个值```module.exports = {}```
   2. ```module.exports```即模块的导出值
   3. 为了方便开发者便捷的导出，nodejs在初始化完```module.exports```后，又声明了一个变量```exports = module.exports```

```js
(function(module){
   module.exports = {};
   var exports = module.exports;
   //模块中的代码
   return module.exports;
})()
// 见阶段就这么理解比较简单，并且这么理解也是正确的。
```

4. 为了避免反复加载同一个模块，nodejs默认开启了模块缓存，如果加载的模块已经被加载过了，则会自动使用之前的导出结果。

- [x] demo

简单介绍一下：nodejs 对 commonjs 的实现

```js
// module1.js
let count = 0;

function getNumber() {
    count++;
    return count;
}

const user = {
    name: 'dahuyou',
    age: 21
}

console.log('哈哈哈');

exports.getNumber = getNumber;
exports.user = user;
```

```js
// module2.js
const obj = require('./module1.js'); // 导入 module1.js 模块

const count = 100; // 不同模块之间的变量，互不影响。

console.log(obj.getNumber());
console.log(obj.getNumber());
console.log(obj.getNumber());

console.log(obj.user);

console.log(count);
console.log(obj.count);
```

![20210524205526](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524205526.png)

```js
// module2.js
// const obj = require('./module1.js');

const obj = (function (module) { /* 内部会自动为该函数传递这样一个参数 module */
    module.exports = {};
    let exports = module.exports;

    /* module1.js 开始 */
    let count = 0;

    function getNumber() {
        count++;
        return count;
    }

    const user = {
        name: 'dahuyou',
        age: 21
    }

    console.log('哈哈哈');

    exports.getNumber = getNumber;
    exports.user = user;
    /* module1.js 结束 */

    return module.exports;
})();
```

```
执行语句：const obj = require('./module1.js'); 的时候，就相当于执行了后面的那一坨。
```

- [x] demo

还是上面的案例，不过将 `exports` 全部替换为 `module.exports`，会发现，结果依旧是一样的。

```js
// module1.js
let count = 0;

function getNumber() {
    count++;
    return count;
}

const user = {
    name: 'dahuyou',
    age: 21
}

console.log('哈哈哈');

module.exports.getNumber = getNumber;
module.exports.user = user;
```

```js
// module2.js
const obj = require('./module1.js'); // 导入 module1.js 模块

const count = 100; // 不同模块之间的变量，互不影响。

console.log(obj.getNumber());
console.log(obj.getNumber());
console.log(obj.getNumber());

console.log(obj.user);

console.log(count);
console.log(obj.count);
```

![20210524210422](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524210422.png)

```
面试题比较爱考 module.exports 和 exports，其实它们都是一个东西，只不过内部实现上返回的是 module.exports 而非 exports。
```

- [x] demo

`考察对内部原理的理解。`

```js
// module1.js
let count = 0;

function getNumber() {
    count++;
    return count;
}

const user = {
    name: 'dahuyou',
    age: 21
}

console.log('哈哈哈');

// module.exports.getNumber = getNumber;
// module.exports.user = user;

module.exports = {
    getNumber,
    user
}
```

```js
// module1.js
let count = 0;

function getNumber() {
    count++;
    return count;
}

const user = {
    name: 'dahuyou',
    age: 21
}

console.log('哈哈哈');

// module.exports.getNumber = getNumber;
// module.exports.user = user;

exports = {
    getNumber,
    user
}
```

第一种写法有效，但是第二写法会报错。这是因为内部最终返回的并非 exports 而是 module.exports。

- [x] demo

```js
// module1.js
let count = 0;

function getNumber() {
    count++;
    return count;
}

const user = {
    name: 'dahuyou',
    age: 21
}

console.log('哈哈哈');

console.log(module.exports === exports); // true

module.exports = { // 这里相当于给 module.exports 重新开辟了一块空间
    getNumber,
    user
}

console.log(module.exports === exports); // false
```

```js
// module2.js
require('./module1.js'); // 导入 module1.js 模块
```

![20210524211621](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524211621.png)

既然 `module.exports` 和 `exports` 都可以实现导出，那么平时在开发时，使用哪种呢？

看个人习惯就好，用哪种都行。相对而言 `module.exports` 会更加灵活，使用它，我们甚至可以导出字符串 `module.exports = 'dahuyou';` 但是，如果我们使用的是 `exports` 就无法实现。

> 袁老习惯使用的是 module.exports 的方式来实现。

- [x] demo

模块缓存

```js
// c.js
const a1 = require('./a.js'); // 第一次获取 a.js 文件，读完后会缓存，如果后续还要读的话，直接从缓存中读
const a2 = require('./a.js'); // 第二次获取 a.js 文件，此时缓存中有需要的数据，直接从缓存中读取
const b = require('./b.js');

console.log(a1, a2, b);
console.log(a1 === a2); // true
```

```js
// a.js
console.log('a'); // 第三次读 a.js，同2

module.exports = {
    name: '111'
}
```

```js
// b.js
require('./a.js');
console.log('b');
```

![20210524213416](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210524213416.png)

```
依赖关系
    c依赖a和b
    b依赖a

缓存的是啥东西？
缓存的东西，可以理解为返回的 module.exports 对象。
所以：
    当我们打印 console.log(a1 === a2); 时，得到的结果是 true。
    只会打印出 一个 a
```

## 2-3. CommonJS练习

制作一个斗地主洗牌发牌的程序

划分模块：

1. 工具模块，导出一个函数，用于将一个数组中的所有内容乱序排列
2. 扑克牌构造函数（类）
   1. 属性
      1. 花色（1~4，♣、♥、♦、♠）
      2. 牌面（1~15，14小王，15大王）
   2. 方法
      1. toString：得到该扑克牌的字符串
3. 入口模块（入口文件）
   1. 创建54张扑克牌
   2. 洗牌
   3. 发牌

```
问：模块为什么要这么划分？
答：模块的划分并没有固定的标准，可能每个人分出来的都不一样。
    这就好比程序思维，多写，多看看别人写的代码，多思考，慢慢积累。
```

### 实现步骤

#### 1. 功能模块 util.js

- [x] util.js

```js
module.exports = {
   // 将数组 arr 乱序排序
   sortRandom(arr) {
      arr.sort((a, b) => Math.random() - 0.5);
   }
}
```

```
【开发习惯】
在编辑完一个功能模块后，我们一般会对其做一个简单的测试，就是测试该功能模块的功能是否正常。
```

- [x] test.js

```js
const util = require('./util.js');
const arr = [1, 2, 3, 4, 5];
util.sortRandom(arr);
console.log(arr);
```

![20210527030011](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210527030011.png)

#### 2. 定义扑克牌构造函数

- [ ] poker.js

```js
function Poker(color, number) {
    this.color = color;
    this.number = number;
}

Poker.prototype.toString = function () {
    var str = "";
    //花色：♣、♥、♦、♠
    if (this.color === 1) {
        str = "♣"
    } else if (this.color === 2) {
        str = "♥";
    } else if (this.color === 3) {
        str = "♦";
    } else {
        str = "♠"
    }
    //牌面
    if (this.number >= 2 && this.number <= 10) {
        str += this.number;
    } else if (this.number === 1) {
        str += "A";
    } else if (this.number === 11) {
        str += "J";
    } else if (this.number === 12) {
        str += "Q";
    } else if (this.number === 13) {
        str += "K";
    } else if (this.number === 14) {
        str = "joker";
    } else if (this.number === 15) {
        str = "JOKER";
    }
    return str;
}

module.exports = Poker;
```

#### 3. 入口模块

- [ ] index.js

```js
var pokers = []; //扑克牌的数组
var Poker = require("./poker") //导入扑克牌的构造函数
for (var i = 1; i <= 13; i++) { //循环牌面
    for (var j = 1; j <= 4; j++) { //循环花色
        pokers.push(new Poker(j, i));
    }
}
pokers.push(new Poker(null, 14), new Poker(null, 15));

//打乱扑克牌
var util = require("./util");
util.sortRandom(pokers);

var player1 = pokers.slice(0, 17);
var player2 = pokers.slice(17, 34);
var player3 = pokers.slice(34, 51);
var desk = pokers.slice(51)

console.log("玩家1：")
util.print(player1);

console.log("玩家2：")
util.print(player2);

console.log("玩家3：")
util.print(player3);

console.log("桌面：")
util.print(desk);
```

> 将打印功能封装到 util.js 内部，完善 util.js 工具模块的功能。

```js
module.exports = {
    /**
     * 将一个数组的内容打乱
     * @param {*} arr 数组
     */
    sortRandom: function (arr) {
        arr.sort(function (a, b) {
            return Math.random() - 0.5;
        })
    },
    /**
     * 打印一个扑克牌的数组
     * @param {*} pokers
     */
    print: function (pokers) {
        var str = "";
        for (var i = 0; i < pokers.length; i++) {
            var p = pokers[i];
            str += p.toString() + "   ";
        }
        console.log(str);
    }
}
```

### 自己写一遍

> 不看教程实现一遍

- [x] util.js

```js
module.exports = {
    /**
     * 将一个数组的内容打乱
     * @param {Array} arr 数组
     */
    sortRandom(arr) {
        arr.sort(() => Math.random() - 0.5);
    }
}
```

- [x] poker.js

```js
module.exports = class Poker {
    /**
     * poker 的构造函数
     * @param {Number} color 扑克的颜色
     * @param {Number} num 扑克的数字
     */
    constructor(color, num) {
        this.color = color;
        this.num = num;
    }

    toString() {
        // console.log(this.color, this.num);
        let str = '';
        // 确定扑克的数值
        if (this.num === 14) { // 表示小王
            str = 'joker';
        } else if (this.num === 15) { // 表示大王
            str = 'JOKER';
        } else if (this.num === 1) {
            str = 'A';
        } else if (this.num === 11) {
            str = 'J';
        } else if (this.num === 12) {
            str = 'Q';
        } else if (this.num === 13) {
            str = 'K';
        } else { // 2-10
            str = this.num;
        }
        // 确定扑克的花色 ♣、♥、♦、♠
        if (this.color === 1) {
            str = '♣' + str;
        } else if (this.color === 2) {
            str = '♥' + str;
        } else if (this.color === 3) {
            str = '♦' + str;
        } else if (this.color === 4) {
            str = '♠' + str;
        }
        return str;
    }
}
```

- [x] index.js

> 入口

```js
const util = require('./util.js');
const Poker = require('./poker.js');

/* 初始化一副牌 */
const pokers = []; // 一副牌

const joker = new Poker(null, 14); // 小王
const JOKER = new Poker(null, 15); // 大王

pokers.push(joker, JOKER);

for (let i = 1; i <= 13; i++) { // 遍历数字 1-52
    for (let j = 1; j <= 4; j++) { // 遍历 color
        const p = new Poker(j, i);
        pokers.push(p.toString());
    }
}

/* 洗牌 */
util.sortRandom(pokers);
// console.log(pokers);

/* 发牌 */
const user1 = pokers.slice(0, 17); // [0, 17)
const user2 = pokers.slice(17, 34); // [17, 34)
const user3 = pokers.slice(34, 51); // [34, 51)
const desk = pokers.slice(51, 54); // [51, 54)

console.log('user1', user1.map(p => p + '  ').join(''));
console.log('user2', user2.map(p => p + '  ').join(''));
console.log('user3', user3.map(p => p + '  ').join(''));
console.log('desk', desk.map(p => p + '  ').join(''));
```

![20210528120040](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210528120040.png)

