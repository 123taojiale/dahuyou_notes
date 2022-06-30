# ES6考试题

[考试题](https://duyiedu.yuque.com/docs/share/0d2322fd-adb6-4b33-9d61-e79fd463330a?)

[答案](https://duyiedu.yuque.com/docs/share/c9f2fbf2-b555-4ced-aca5-5114e9d3ea54)

## 一、 选择题（均为单选题，每小题2分，共24题， 48分）

`ABBCD` `DACBA` `CCDBB` `ABAAD` `ACCD`

**T6 分析**

```
【概念】实例方法、静态方法、原型方法
先区分 实例方法 和 静态方法
    实例方法 就是指通过构造函数创建的实例可以访问的方法。
    静态方法 就是指通过构造函数自身就可以访问，但是，创建的实例对象无法访问的方法。
问：原型方法 和 这两种方法之间的关系是？
答：如果按照上述的判断依据 —— 若该方法是通过实例对象来访问，则认为是实例方法；若该方法是通过构造函数来访问，则认为是静态方法。
    那么 原型方法 应该被视为实例方法。
```

```js
function Test() {
    this.a = 1;
    this.b = 2;
    this.c = 3;

    // 实例方法
    this.print = function () {
        console.log(this.a);
    }
}

// 静态成员
Test.b = 'b';
// 静态方法
Test.print = function () {
    console.log(this.b);
}
Test.print(); // b

// 原型方法
Test.prototype.print = function () {
    console.log(this.c);
}

const t = new Test();
console.log(t.print()); // 1

for (const prop in t) {
    console.log(t[prop]);
}
```

```
如果我们没有定义实例方法 this.print 的话，那么打印语句 console.log(t.print()); 的输出结果将会是 3
由此可见：我们可以通过构造函数 Test 所创建的实例对象 t 来访问原型方法
```

```js
class Test {
    constructor() {
        this.a = 1;
        this.b = 2;
        this.c = 3;

        // 实例方法【可以被遍历】
        this.print = function () {
            console.log(this.a);
        }
    }

    // 原型方法（实例方法）【无法被遍历】
    print() {
        console.log(this.b);
    }

    // 静态属性
    static b = 'b';
    // 静态方法
    static print() {
        console.log(this.b);
    }
}

const t = new Test();

for (const prop in t) {
    console.log(t[prop]);
}
```

![20210521163118](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210521163118.png)

```js
class Test {
    constructor() {
        this.a = 1;
        this.b = 2;
        this.c = 3;

        // 实例方法【可以被遍历】
        // this.print = function () {
        //     console.log(this.a);
        // }
    }

    // 原型方法（实例方法）【无法被遍历】
    print() {
        console.log(this.b);
    }

    // 静态属性
    static b = 'b';
    // 静态方法
    static print() {
        console.log(this.b);
    }
}

const t = new Test();

for (const prop in t) {
    console.log(t[prop]);
}
```

![20210521163404](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210521163404.png)

```
输出 this.b 的方法可以被实例对象访问，但是却无法被遍历。
所以说：类中的实例方法可以被枚举，这句话是错误的。若该方法定义在构造函数的原型上，那么它是无法被枚举的。（而定义在原型上的方法，咋们认为它是实例方法）
```

**T8 分析**

```js
function method ({ a = 1, b = 2, c = 3 }) {
	console.log(a, b, c);
}
method(); // Uncaught TypeError: Cannot read property 'a' of undefined
```

```
直接调用 method 是会报错的，因为无法对 undefined 进行解构。
我们在调用 method 的时候，应该传入一个对象才行。
```

```js
function method ({ a = 1, b = 2, c = 3 }) {
	console.log(a, b, c);
}
method({}); // 1 2 3
```

**T13 分析**

```js
const pro = new Promise((resolve, rejct) => {
    // A. 在 Promise 构造函数的参数方法中抛出错误
    throw new Error('dahuyou');
});

pro.then(data => {
    console.log(data);
}, err => {
    console.log(err);
});
```

![20210521165707](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210521165707.png)

```js
const pro = new Promise((resolve, rejct) => {
    // B. 在 Promise 构造函数的参数方法中调用 reject
    rejct('dahuyou');
});

pro.then(data => {
    console.log(data);
}, err => {
    console.log(err);
});
```

![20210521165756](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210521165756.png)

```js
const pro = new Promise((resolve, rejct) => {
    // C. 在 Promise 构造函数的参数方法中 代码报错
    const a = 1;
    a = 2;
});

pro.then(data => {
    console.log(data);
}, err => {
    console.log(err);
});
```

![20210521165917](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210521165917.png)

**T15 分析**

```
D. await 之后的代码必然是异步的，写在 await 之后的代码，可以看作是写在 then 方法中的代码，async 和 await 只不过是语法糖而已，底层实现上操作的依旧是 Promise 这个对象。
```

## 二、填空题（每空1分，共12空， 12分）

1. `new.target`
2. `:`
3. `async (url)` `resp` `then`
4. `函数参数解构` `剩余参数`
5. `resolved （fulfilled）` `抛出错误` `rejected`
6. `可迭代协议` `iterator`

三、简答题（共2题，每题10分， 20分）

1. 阐述Promise解决了什么问题，它如何解决的，async和await又解决了什么问题？

```
我的回答：
    Promise 解决了异步处理的问题。
    Promise 采用一种通用的异步处理模型来处理ES的异步任务。
    async 和 await 让 promise 书写起来更加方便。
参考答案：
    Promise使用一种标准的模式来解决异步问题，使得异步处理有章可循。
    它将一个异步任务分为两个阶段，unsettled和settled，unsettled阶段有权力将异步任务推向settled阶段。
    同时，它将异步任务划分为3种状态：pending、resolved、rejected，无论是resolved还是rejected，都属于settled阶段，pending一定属于unsettled阶段。
    状态一定是从pending改变到resolved或rejected中的任意一种，一旦改变，状态不可逆。
    状态可以附带数据，该数据可以被后续处理所接收。
    后续处理通过then或catch注册，有两种，分别处理resolved状态或rejected状态。
    async和await是ES7的关键字，用于进一步简化Promise的操作，它可以让我们像编写同步代码那样处理Promise
```

2. 阐述什么是迭代器、可迭代协议、可迭代对象、生成器

```
我的回答：
    迭代器: 对迭代过程的封装，在不同的语言中有不同的表现形式，通常为对象。
    可迭代协议: ES6规定，如果一个对象具有知名符号属性Symbol.iterator，并且属性值是一个迭代器创建函数，则该对象是可迭代的（iterable）。
    可迭代对象:
        const obj = {
            [Symbol.iterator]() {
                return {
                    next() {
                        return {
                            value: 1,
                            done: false
                        }
                    }
                }
            }
        }
    生成器: 生成器是一个通过构造函数Generator创建的对象，生成器既是一个迭代器，同时又是一个可迭代对象。
参考答案：
    迭代器是一个普通的对象，内部提供了next方法，调用后得到一个包含value和done属性的对象，value属性表示这一次迭代得到的数据，done指示是否迭代完成。
    可迭代协议是一个规范，如果某个对象拥有知名符号Symbol.iterator，并且该符号是一个迭代器创建函数，则该对象满足可迭代协议。
    只要满足可迭代协议的对象，称之为可迭代对象。
    生成器本质上既是一个可迭代对象、又是一个迭代器。它是由生成器函数创建的。生成器函数一定返回一个生成器，它的出现是为了方便迭代器的编写，我们可以通过yield关键字不断的产生迭代结果，并且通过生成器控制迭代过程。
```

四、编程题（共2题，每题10分，20分）

1. 有一个字符串数组urls，里面存放了很多的请求地址，现在需要同时向这些地址发送ajax请求，并把每次请求的JSON结果按照响应的先后顺序依次保存到一个新数组results里面，当所有请求完成后，把新数组results输出。

results数组中每一项的对象格式如下：

```js
{
  requestTime: 日期对象,   //开始请求的时间
  data: 对象,  //服务器响应的结果
  responseTime: 日期对象   //响应的时间
}
```

- [x] 我的答案

```js
// 使用 Promise 那节课的案例中的相关数据来测试 —— 通过学生查找老师
const urls = [
    './data/students.json',
    './data/classes.json',
    './data/teachers.json'
];

async function test() {
    const results = [];

    for (const url of urls) {
        const requestTime = new Date().getTime(); // 开始请求的时间戳
        const data = await fetch(url).then(resp => {
            return resp.json();
        });
        const responseTime = new Date().getTime(); // 接收到响应结果的时间戳

        results.push({
            requestTime,
            data,
            responseTime,
        });
    }

    return results;
}

test().then(results => {
    console.log(results);
});
```

![20210521175838](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210521175838.png)

- [x] 参考答案

```js
const urls = ["1.json", "2.json"]; //模拟urls数组
const results = []; //用于存放结果
const proms = urls.map(async (url) => {
    const r = {
        requestTime: new Date()
    }
    r.data = await fetch(url).then(resp => resp.json());
    r.responseTime = new Date();
    results.push(r);
})
Promise.all(proms).then(() => {
    console.log(results);
})
```

2. 编写一个函数createDomProxy，该函数返回一个DOM对象的代理，该代理可以将DOM对象以on开头的属性（即事件）变为Promise对象，可以让后续的开发者这样使用这个函数createDomProxy：

```js
async function test() {
    const div = document.getElementById("test"); //得到某个div dom
    const divProxy = createDomProxy(div); //创建它的代理
    while (true) { //使用一个死循环，是为了不断的监听它被点击
        const e = await divProxy.onclick //等待它被点击，e是事件参数
        console.log("div被点击了", e) //被点击后运行的代码
    }
}

test();
```

- [x] 参考答案

```js
function createDomProxy(dom) {
    return new Proxy(dom, {
        get(target, prop) {
            if (prop.startsWith("on")) {
                return new Promise(resolve => {
                    target.addEventListener(prop.replace("on", ""), e => {
                        resolve(e);
                    }, { once: true });
                })
            }
            return Reflect.get(target, prop);
        }
    })
}
```

[EventTarget.addEventListener() mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

```
once:  Boolean，表示 listener 在添加之后最多只调用一次。
如果是 true， listener 会在其被调用之后自动移除。
```