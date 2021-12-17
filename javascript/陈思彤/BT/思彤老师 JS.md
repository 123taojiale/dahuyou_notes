# 1. 快速掌握BOM对象核心技能

![20210206211903](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210206211903.png)

> 看完这一部分的 js收官 视频内容之后 下一部分的内容先看 (陈思彤) 你不知道的JS

## 1.1 BOM

- 1. 什么是BOM?
  - 1. BOM 是 browser object mode 的缩写, 简称浏览器对象模型; 主要处理浏览器窗口 (window) 和框架 (iframe), 它描述了与浏览器进行交互的方法和接口; 可以对浏览器窗口进行访问和操作, 不过通常浏览器特定的 JavaScript 扩展都被看做是 BOM 的一部分;
  - 2. 扩展如下:
    - 1. 弹出新的浏览器窗口
    - 2. 移动 关闭浏览器窗口以及调整窗口大小
    - 3. 提供 Web 浏览器详细信息和定位对象
    - 4. 提供用户屏幕分辨率详细信息的屏幕对象
    - 5. 对 cookie 的支持
    - 6. IE 扩展了 BOM, 加入了 ActiveXObject 类, 可以通过 JavaScript 实例化 ActiveX 对象
> iframe 即: 嵌套窗口 子窗口
- 2. BOM核心 - window
    - 1. window对象是BOM的顶层(核心)对象, 玩转BOM, 也就是玩转window的属性和方法;
    - 2. window对象它具有双重角色, 既是通过JS访问浏览器窗口的一个接口, 又是一个全局对象;
       这意味着 在网页中定义的任何对象, 变量 和 函数, 都是window对象的属性.
> 之前在讲解 DOM 那一部分的时候, 我们操作的主要是html文档, 写的一堆东西一般都是 `document.xxx`
> 现在我们要接触的 BOM 实际上和它非常类似, 接下来我们要写的一堆东西 一般都是 `window.xxx`
- 3. BOM 和 DOM 的关系 ==> 见以下思维导图
    - 1. JavaScript语法的标准化组织是ECMA
    - 2. DOM的标准化组织是W3C
    - 3. BOM...(很尴尬)
> BOM基本上没啥标准 各家的浏览器相差很大

## 1.2 BOM 与 DOM（Document Object Model）的关系

**BOM所包含的内容**

![window组成图 20210206010532](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210206010532.png)

window对象下面有很多属性 每一个属性都对应着不同的功能; 比如功能分支 screen 这里面定义的就是与屏幕相关的相关属性和方法; 而 document 是window的其中一个属性 它对应的功能就是操作html文档 也就是操作网页;

## 1.3 BOM 对象的组成

| BOM 对象的五大组成部分 | 描述                                      |
| ---------------------- | ----------------------------------------- |
| `Window`               | JavaScript 层级中的顶层对象 表示浏览器窗口 |
| `Navigator`            | 包含了客户端浏览器的相关信息              |
| `History`              | 包含了浏览器访问过的URL                   |
| `Location`             | 包含了当前URL的信息                       |
| `Screen`               | 包含了客户端显示屏的信息(兼容性很差)      |

### [Window 对象](https://www.w3school.com.cn/jsref/dom_obj_window.asp)

#### window上的属性

**这一部分包含的内容:**

以下要介绍的window属性有: `window.innerWidth` `window.innerHeight` `window.pageXOffset` `window.pageYOffset` `window.screenLeft` `window.screenTop` `window.screenX` `window.screenY` `window.parent` `window.top` `window.self` `window.name`

---

- [x] 1. 获取`页面`尺寸

| 属性                                    | 描述                                       |
| --------------------------------------- | ------------------------------------------ |
| `window.innerWidth`                     | 返回窗口的文档显示区的宽度(包含滚动条尺寸) |
| `window.innerHeight`                    | 返回窗口的文档显示区的高度(包含滚动条尺寸) |
| `document.documentElement.clientWidth`  | 文档可视区的宽度(不包含滚动条尺寸)         |
| `document.documentElement.clientHeight` | 文档可视区的高度(不包含滚动条尺寸)         |

[回顾之前笔记 21. 获取窗口属性,获取dom尺寸,脚本化CSS](https://github.com/123taojiale/note/blob/main/JavaScript(%E5%A7%AC%E6%88%90).md#21-%E8%8E%B7%E5%8F%96%E7%AA%97%E5%8F%A3%E5%B1%9E%E6%80%A7%E8%8E%B7%E5%8F%96dom%E5%B0%BA%E5%AF%B8%E8%84%9A%E6%9C%AC%E5%8C%96css)

![window窗口尺寸图](http://static.nisekoo.com/image/2021-01-25.png)

![盒子尺寸图](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210206203720.png)

- [x] 2. 获取`页面`位置

| 属性                 | 描述                                                                            |
| -------------------- | ------------------------------------------------------------------------------- |
| `window.pageXOffset` | 设置或返回当前页面相对于窗口显示区左上角的 X 位置`读取的是横向滚动条滚动的距离` |
| `window.pageYOffset` | 设置或返回当前页面相对于窗口显示区左上角的 Y 位置`读取的是纵向滚动条滚动的距离` |

> 该描述的含义其实就是偏移量的意思, 比如说, 我们页面的内容比较多, 出现了纵向的滚动条,
> 当我们没有滚动这纵向滚动条的时候, 表示页面并没有发生偏移, 所以此时我们获取到的 window.pageYOffset 的值是 0
> 当我们向下滚动了滚动条, 此时页面纵向就发生了偏移, 若此时再去读取该值, 将会返回我们滚动的距离值

**细节问题:**

这两个属性其实是可读可写的, 而且, 我们重写了它们的值之后, 在读取它们的值, 它们的值确实会发生改变; 但是, 滚动条并不会随之滚动到相应的位置; 若我们下次再将滚动条滚动到一个新的位置之后, 继续读取它们的数值, 会发现它们的数值依旧是我们一开始设置的那个值; 也就是说, 当我们set之后, 这玩意儿就不好使了...

- [x] 3. 获取`浏览器窗口`位置

| 属性                                                  | 描述                                                                                                                                                                                                              |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `screenLeft`<br>`screenTop`<br>`screenX`<br>`screenY` | readonly 并且返回的是一个整数;<br>表示: 浏览器窗口的左上角 相对于 屏幕左上角 的坐标值<br><br>IE、Safari 和 Opera 支持 screenLeft 和 screenTop<br>Firefox 和 Safari 支持 screenX 和 screenY<br>见`demo2`兼容性写法 |

- [x] 4. 嵌套窗口

| 属性     | 描述                             |
| -------- | -------------------------------- |
| `parent` | 返回父级窗口的window对象         |
| `top`    | 返回最顶层的祖辈窗口的window对象 |

> 这一块 目前还不理解, 测试时报错: Uncaught DOMException: Blocked a frame with origin "null" from accessing a cross-origin frame. 和老师视频中的讲解不符, `demo3` 中 console.log 的结果 并非测试结果 而是 若按照老师的说法 理应打印的内容

- 结论:
  - 子拿爹可以 爹拿子不行
- 关键词:
  - `跨域` `跨端口` `同源策略` `iframe标签`
    理解了这些关键词之后, 再尝试弄懂 `demo3` 也不迟... 先跳过

- [x] 5. 引用自身

| 属性   | 描述                 |
| ------ | -------------------- |
| `self` | 返回对当前窗口的引用 |

- [x] 6. 窗口名称

| 属性   | 描述                                            |
| ------ | ----------------------------------------------- |
| `name` | 读取或设置 窗口名称<br>听说: `跨域的时候会用到` |

- [x] demo1 - 模拟图片懒加载效果

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>模拟图片懒加载</title>
    <style>
        body {
            height: 3000px;
        }

        #demo2 {
            position: absolute;
            top: 1200px;
            border: 2px solid black;
            width: 100px;
            height: 100px;
            background: red;
        }
    </style>
</head>

<body>
    <!-- 把opacity写在div身上的目的是为了下面的js中 可以直接通过 div.style.opacity 的方式来获取opacity值
    否则的话 也可以使用 getComputedStyle 方法来实现 -->
    <div id="demo2" style="opacity: 0.1;"></div>
    <script>
        HTMLDivElement.prototype.checkSelf = function () {
            if (!this.lock) { // 防止多次重复触发
                if (this.offsetTop < window.innerHeight + window.pageYOffset) { // demo2.offsetTop === 1200
                    console.log('start');
                    this.lock = true;
                    var iSpeed = 0.01;
                    this.timer = setInterval(() => { // 注意: 箭头函数中的this指向当前的div而非window
                        if (this.style.opacity == '1') {
                            console.log(this.style.opacity);
                            console.log('over');
                            clearInterval(this.timer);
                        } else {
                            console.log(this.style.opacity);
                            this.style.opacity = parseFloat(this.style.opacity) + iSpeed;
                        }
                    }, 16); // 每过16ms opacity自增0.01 变得快一点
                    // 我记得浏览器的监听频率好像就是16ms左右的样子...
                }
            }
        }
        window.onscroll = function () { // 一旦滚动条滚动 就会触发
            demo2.checkSelf(); // id元素 直接使用id名作为变量 即可 表示该元素
        }
    </script>
</body>

</html>
```

- [x] demo2 - 读取浏览器窗口相对于用户屏幕的位置

```js
let x = window.screenLeft || window.screenX,
    y = window.screenTop || window.screenY;
```

- [x] demo3 - iframe

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>grand</title>
    <style>
        body {
            background-color: red;
        }
    </style>
</head>

<body>
    <iframe src="./child.html" width="400" height="400" frameborder="1"></iframe>
    <script>
        var a = 20;
    </script>
</body>

</html>
```

```html
<!-- child.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>father</title>
    <style>
        body{
            background-color: orange;
        }
    </style>
</head>
<body>
    <iframe src="./child-child.html" width="50px" frameborder="0" height="50px"></iframe>
    <script>
        var a = 10;
        console.log(window.parent.a); // 20
    </script>
</body>
</html>
```

```html
<!-- child-child.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>son</title>
    <style>
        body {
            background-color: #ff0;
        }
    </style>
</head>

<body>
    <script>
        console.log(window.parent.a); // 10
        console.log(window.top.a); // 20
    </script>
</body>

</html>
```

- [x] demo4 - `window.self`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>window.self</title>
</head>

<body>
    <script>
        console.log(window.self === window); // true
    </script>
</body>

</html>
```

- [x] demo5 - window.name

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>window.name</title>
</head>

<body>
    <script>
        // 默认窗口名称是一个空字符串
        console.log(window.name === ""); // true
        window.name = "cat";
        console.log(window.name); // "cat"
        window.name = 123; // 注意: 这里给它赋的是 number 类型 但是它会自动被转化为字符串
        console.log(window.name, typeof window.name); // "123" "string"
        // 小结: 在全局变量的名称命名的时候, 不要使用 name 作为变量名, 很可能会出问题的
        // 只要默认存在于widnow上的属性 我们都不要用它来作为全局的变量名即可
        // 赋 数字类型 自动转化为 string 类型
        // 这一效果可以通过访问器属性来实现
        // 访问器属性(思彤老师和成哥好像管这玩意儿叫属性的特性 其实它俩是一个东西)
    </script>
</body>

</html>
```

#### window上的方法

| 方法               | 描述                                           |
| ------------------ | ---------------------------------------------- |
| `window.alert()`   | 显示带有一段消息和一个确认按钮的警告框         |
| `window.confirm()` | 显示带有一段消息以及确认按钮和取消按钮的对话框 |
| `window.prompt()`  | 显示可提示用户输入的对话框                     |
| `window.open()`    | 打开一个新的浏览器窗口或查找一个已命名的窗口   |
| `window.close()`   | 关闭浏览器窗口                                 |

> alert 会中断一切后续程序的执行(阻塞)
> confirm 返回值为 true(点击确认)或false(点击取消)
> prompt() 以字符串的形式 返回用户输入的数据
> open() 语法: window.open(URL,name,features,replace)
> close() 很多窗口关闭的快捷键都是: `Ctrl + W`


> alter confirm prompt 这些在追求用户体验的网站都不会用的, 因为原生的样式太low了, 所以很多人会选择自己写;
>  moveTo moveBy ==> 在新打开的窗口里使用 window.moveTo 或者 window.moveBy 可以移动窗口到指定位置
> resizeBy resizeTo ==> 可以设置新打开的窗口的大小


- [x] demo1 - 认识 beforeunload 事件

```js
// 在即将离开当前页面(刷新或关闭)时执行
window.onbeforeunload = function () {
    // ...
}
```

- [x] demo2 - window.open()

```js
window.open('https://notes.dahuyou.top', 'dahuyou', 'width=500, height=500');
// 新开一个浏览器窗口 相当于 Ctrl + N
// 该窗口的 window.name === 'dahuyou'; 返回true
// 窗口的尺寸是 500*500
```

```js
window.open('https://notes.dahuyou.top', 'width=500, height=500');
// 如果这么写的话 那么第二个参数会被识别为 window.name
// window.name === 'width=500, height=500'; 返回true
// 与上述写法的不同点: 它会在当前浏览器窗口的基础上打开一个页面  相当于 Ctrl + T
```

```js
var new_window = window.open('https://notes.dahuyou.top', 'dahuyou', 'width=500, height=500');
// 返回值是那个被新打开的窗口的window对象
```

- [x] demo3 - resizeBy 和 resizeTo

```js
function openWin() {
    myWindow = window.open("", "", "width=100, height=100"); // Opens a new window
}

function resizeWin() {
    myWindow.resizeBy(250, 250); // Resizes the new window
    myWindow.focus(); // Sets focus to the new window
}
```

- [x] demo4 moveTo 和 moveBy

```js
function openWin() {
    myWindow = window.open('', '', 'width=200, height=100'); // Opens a new window
    myWindow.document.write("<p>This is 'myWindow'</p>"); // Some text in the new window
}

function moveWin() {
    myWindow.moveTo(500, 100); // Moves the new window
    myWindow.focus(); // Sets focus to the new window
}
```

---

### [Navigator 对象](https://www.w3school.com.cn/jsref/dom_obj_navigator.asp)

- w3school上对其的定义:
  - Navigator 对象包含的属性描述了正在使用的浏览器。可以使用这些属性进行平台专用的配置。
  虽然这个对象的名称显而易见的是 Netscape 的 Navigator 浏览器，但其他实现了 JavaScript 的浏览器也支持这个对象。
  Navigator 对象的实例是唯一的，可以用 Window 对象的 navigator 属性来引用它。

#### navigator上的属性

- 1. `navigator.userAgent` 返回由客户机发送服务器的 user-agent 头部的值(`做浏览器嗅探` 即: 获取设备的相关信息)
> 后端方面 当用户请求服务器数据时, 先判断一下用户使用的浏览器是啥浏览器, 能展示哪些内容, 然后再决定返回的页面(以前 不同厂家的浏览器 能实现的功能 差别较大 有的只能显示纯文本 有的可以显示图片 有的可以显示视频 所以当时写一个页面 可能得写多个版本的)
> 前端方面 很多时候我们也需要读取用户端的设备信息 并以此为依据 做不同的处理
> 我们在使用的时候, 直接引入已经封装好的js文件即可, 下面`tools.js`中是该对应的源码文件
- 2. `navigator.onLine` 返回指明系统是否处于脱机模式的布尔值 (判断有没有网络 `一般用来做离线缓存`)
- 3. `navigator.cookieEnabled` 返回指明浏览器中是否启用 `cookie` 的布尔值 (判断浏览器是否能使用cookie)
> Q: 如何禁用浏览器的cookie?
> A: 以chrome为例, 点击 "设置", 找到 "隐私设置和安全性", 点击 "Cookie 及其他网站数据" 在这里面就可以选择是否禁用 Cookie
> (不建议禁用 因为里面记录着咋们的账号和密码 对于一些常用的网站 比如B站 我们只要登录一次 下次进入就自动显示已登录 这就是用cookie来实现的)

- 细节问题:
  - `navigator.appName;` // "Netscape"
  它的返回值是固定为 "Netscape" 的, 这涉及到浏览器的一些历史问题 还不理解...

- [x] tools.js

> 会用就好, 貌似在 Mac mini 上 测试, 会出问题, 以下结果是丢windows上测试的返回值

![嗅探测试结果](http://static.nisekoo.com/image/20210206163043.png)

```js
var nVer = navigator.appVersion,
   nAgt = navigator.userAgent,
   browser = navigator.appName,
   version = '' + parseFloat(navigator.appVersion),
   majorVersion, nameOffset, verOffset, ix, network = 'unknown';
// Opera
if ((verOffset = nAgt.indexOf('Opera')) != -1) {
   browser = 'Opera';
   version = nAgt.substring(verOffset + 6);
   if ((verOffset = nAgt.indexOf('Version')) != -1) {
       version = nAgt.substring(verOffset + 8);
   }
}
// Opera Next
if ((verOffset = nAgt.indexOf('OPR')) != -1) {
   browser = 'Opera';
   version = nAgt.substring(verOffset + 4);
}
// MSIE
else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
   browser = 'Microsoft Internet Explorer';
   version = nAgt.substring(verOffset + 5);
}
// Chrome
else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
   browser = 'Chrome';
   version = nAgt.substring(verOffset + 7);
}
// Safari
else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
   browser = 'Safari';
   version = nAgt.substring(verOffset + 7);
   if ((verOffset = nAgt.indexOf('Version')) != -1) {
       version = nAgt.substring(verOffset + 8);
   }
}
// Firefox
else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
   browser = 'Firefox';
   version = nAgt.substring(verOffset + 8);
}
// MSIE 11+
else if (nAgt.indexOf('Trident/') != -1) {
   browser = 'Microsoft Internet Explorer';
   version = nAgt.substring(nAgt.indexOf('rv:') + 3);
}
// WeiXin
else if (nAgt.indexOf('NetType/') != -1) {
   browser = 'WeiXin';
   if (nAgt.indexOf('NetType/WIFI') != -1) {
       network = 'WIFI';
   } else if (nAgt.indexOf('NetType/2G') != -1) {
       network = '2G';
   } else if (nAgt.indexOf('NetType/3G+') != -1) {
       network = '3G+';
   }
   verOffset = nAgt.lastIndexOf('/')
   version = nAgt.substring(verOffset + 1);
   if (browser.toLowerCase() == browser.toUpperCase()) {
       browser = navigator.appName;
   }
}
// Other browsers
else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
   browser = nAgt.substring(nameOffset, verOffset);
   version = nAgt.substring(verOffset + 1);
   if (browser.toLowerCase() == browser.toUpperCase()) {
       browser = navigator.appName;
   }
}

// trim the version string
if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);
majorVersion = parseInt('' + version, 10);
if (isNaN(majorVersion)) {
   version = '' + parseFloat(navigator.appVersion);
   majorVersion = parseInt(navigator.appVersion, 10);
}

// mobile version
var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

// start system detect
var os = '';
var clientStrings = [{
       s: 'Windows 10',
       r: /(Windows 10.0|Windows NT 10.0)/
   },
   {
       s: 'Windows 8.1',
       r: /(Windows 8.1|Windows NT 6.3)/
   },
   {
       s: 'Windows 8',
       r: /(Windows 8|Windows NT 6.2)/
   },
   {
       s: 'Windows 7',
       r: /(Windows 7|Windows NT 6.1)/
   },
   {
       s: 'Windows Vista',
       r: /Windows NT 6.0/
   },
   {
       s: 'Windows Server 2003',
       r: /Windows NT 5.2/
   },
   {
       s: 'Windows XP',
       r: /(Windows NT 5.1|Windows XP)/
   },
   {
       s: 'Windows 2000',
       r: /(Windows NT 5.0|Windows 2000)/
   },
   {
       s: 'Windows ME',
       r: /(Win 9x 4.90|Windows ME)/
   },
   {
       s: 'Windows 98',
       r: /(Windows 98|Win98)/
   },
   {
       s: 'Windows 95',
       r: /(Windows 95|Win95|Windows_95)/
   },
   {
       s: 'Windows NT 4.0',
       r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
   },
   {
       s: 'Windows CE',
       r: /Windows CE/
   },
   {
       s: 'Windows 3.11',
       r: /Win16/
   },
   {
       s: 'Android',
       r: /Android/
   },
   {
       s: 'Open BSD',
       r: /OpenBSD/
   },
   {
       s: 'Sun OS',
       r: /SunOS/
   },
   {
       s: 'Linux',
       r: /(Linux|X11)/
   },
   {
       s: 'iOS',
       r: /(iPhone|iPad|iPod)/
   },
   {
       s: 'Mac OS X',
       r: /Mac OS X/
   },
   {
       s: 'Mac OS',
       r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
   },
   {
       s: 'QNX',
       r: /QNX/
   },
   {
       s: 'UNIX',
       r: /UNIX/
   },
   {
       s: 'BeOS',
       r: /BeOS/
   },
   {
       s: 'OS/2',
       r: /OS\/2/
   },
   {
       s: 'Search Bot',
       r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
   }
];
for (var id in clientStrings) {
   var cs = clientStrings[id];
   if (cs.r.test(nAgt)) {
       os = cs.s;
       break;
   }
}
var osVersion = '';
if (/Windows/.test(os)) {
   osVersion = /Windows (.*)/.exec(os)[1];
   os = 'Windows';
}
switch (os) {
   case 'Mac OS X':
       osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
       break;
   case 'Android':
       osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
       break;
   case 'iOS':
       osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
       osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
       break;
}

//detect data
var params = {};
params.os = os; //操作系统
params.osVersion = osVersion ? osVersion : 'unknown'; //操作系统版本
params.mobile = mobile; //是否移动端访问
params.browser = browser; //浏览器
params.browserVersion = version; //浏览器版本
params.browserMajorVersion = majorVersion; //浏览器major版本

//输出对象
console.log(params);
```

#### navigator上的方法

> navigator上的方法没必要了解 直接跳过即可

### [History 对象](https://www.w3school.com.cn/jsref/dom_obj_history.asp)

- w3school 对 History 的描述
  - History 对象最初设计来表示窗口的浏览历史。但出于隐私方面的原因，History 对象不再允许脚本访问已经访问过的实际 URL。唯一保持使用的功能只有 back()、forward() 和 go() 方法。
  - History 对象包含用户（在浏览器窗口中）访问过的 URL。
  History 对象是 window 对象的一部分，可通过 window.history 属性对其进行访问。
  注释：没有应用于 History 对象的公开标准，不过所有浏览器都支持该对象。

#### history上的属性

| 属性     | 描述                            |
| -------- | ------------------------------- |
| `length` | 返回浏览器历史列表中的 URL 数量 |

> H5对这个History对象做了很强大的补充 到H5那一部分的时候再做说明

#### history上的方法

| 方法        | 描述                              |
| ----------- | --------------------------------- |
| `back()`    | 加载 history 列表中的前一个 URL   |
| `forward()` | 加载 history 列表中的后一个 URL   |
| `go()`      | 加载 history 列表中的某个具体页面 |

> history 就好比是一个时间轴 比如我们一个页面变了4次 这个轴上就记录着4个点
> back ==> 跳转到前一个点
> forward ==> 跳转到后一个点
> go ==> 跳转到指定的点

### Screen 对象

#### screen上的属性

| 属性          | 描述                                      |
| ------------- | ----------------------------------------- |
| `availHeight` | 返回显示屏幕的高度(除 Windows 任务栏之外) |
| `availWidth`  | 返回显示屏幕的宽度(除 Windows 任务栏之外) |
| `height`      | 返回显示屏的高度                          |
| `width`       | 返回显示屏的宽度                          |

> screen 兼容性很差 基本上都不会用它 直接跳过...
### Location 对象

**reference:**

1. [Location 对象 (w3school)](https://www.w3school.com.cn/jsref/dom_obj_location.asp)
2. [Location (mdn)](https://developer.mozilla.org/zh-CN/docs/Web/API/Location)



#### location上的属性

| 属性       | 描述                                     |
| ---------- | ---------------------------------------- |
| `hash`     | 设置或返回从 # 开始的 URL (锚)           |
| `host`     | 设置或返回主机名和当前 URL 的端口号      |
| `hostname` | 设置或返回当前 URL 的主机名              |
| `href`     | 设置或返回完整的 URL                     |
| `pathname` | 设置或返回当前 URL 的`路径`部分            |
| `port`     | 设置或返回当前 URL 的`端口号`             |
| `protocol` | 设置或返回当前 URL 的`协议`                |
| `search`   | 设置或返回`从问号 ? 开始的 URL` (查询部分) |

**notes:**

![location 关键属性](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210206184840.png)

![写location.href](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210206185057.png)

![写location.search](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210206185520.png)

执行后 地址栏的信息变为: `https://www.baidu.com/s?wd=lol`

---

**区分 `协议` `域名` `路径` `端口号` `参数` `锚点`**

在百度中搜关键字 google 后, 地址栏的信息如下:

`https://www.baidu.com/s?wd=google&rsv_spt=1&rsv_iqid=0xb7549157000803ae&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=7&rsv_sug1=6&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=google&rsp=8&inputT=1216&rsv_sug4=1709`

| 关键部分                     | 描述                           |
| ---------------------------- | ------------------------------ |
| `https:`                     | https协议 它的默认端口号是 443 |
| `http:`                      | http协议 它的默认端口号是 80   |
| `www.baidu.com`              | 域名                           |
| `/s`                         | 路径                           |
| 从`/s`后面的`?`开始到结尾`9` | 参数                           |

**notes:**
1. 锚点
   1. 如果参数后面还跟着一个 #... 其实它表示的是 锚点
   2. 我们重写锚点 页面是不会发生跳转的;
      利用锚点的这个特点 我们就可以做一些单页面应用(SPA singal page application)
      不过这是后续 vue 那一部分的内容 先知道锚点有这个特点先
2. 端口号
   1. 默认端口号可以不写 即: `https://www.baidu.com:443` 和 `https://www.baidu.com` 都是一样的

---

#### location上的方法

| 方法              | 描述                   |
| ----------------- | ---------------------- |
| `assign()`        | 加载新的文档           |
| `replace()`       | 用新的文档替换当前文档 |
| `reload('force')` | 重新加载当前文档       |

**notes:**

1. reload() 相当于刷新页面, 参数可选, 不填或填false 则取消浏览器缓存的文档
   参数说明:
   `false` ==> 当咋们向服务器请求页面的时候 服务器可以通过响应报文来告诉浏览器 要不要缓存这个页面 缓存多久, 假设浏览器将请求过来的页面缓存一个月, 并且在这一个月内, 我们访问过了该网页, 也就是请求过了该页面的数据, 浏览器上还有缓存, 那么当我们在这个页面执行 loation.reload() 或者 location.reload(false) 那么它刷新页面也会从缓存中拿数据;
   `true` ==> 若我们传入参数 true 的话 那么它就会重新从服务器拉取一下页面

- [x] replace 和 assign 之间的区别

![location.assign()](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210206192912.png)

![location.replace()](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210206192959.png)

- [x] demo - 模拟利用锚点来实现一个单页面应用的效果

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>根据锚点的信息来选择对应要展示的内容</title>
    <style>
        .demo1 {
            background: orange;
        }

        .demo2 {
            background: red;
        }

        .demo3 {
            background: green;
        }

        .wrapper {
            margin: 100px auto 0px;
            width: 400px;
            height: 200px;
            border: 1px solid black;
        }

        .wrapper div {
            display: none;
        }

        .wrapper div.active {
            display: block;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="demo1">1</div>
        <div class="demo2">2</div>
        <div class="demo3">3</div>
    </div>
    <button id='left'>left</button>
    <button id='right'>right</button>
    <script>
        // 1. 根据锚点的信息来选择对应要展示的内容
        // 2. 切换还内容时我们映射到锚点之中
        // 3. 检测锚点修改，修改以后再映射内容

        let oDivArray, lastDiv, index;

        function init() {
            str = location.hash.slice(2);
            index = str == '' ? 0 : parseInt(str);;
            // console.log(str, index);
            oDivArray = Array.from(document.querySelector('.wrapper').querySelectorAll('div')); // 先转化为真数组
            lastDiv = oDivArray[index];
            oDivArray.forEach(div => {
                div.classList.remove("active");
            });
            lastDiv.classList.add("active");
        }

        init();

        left.onclick = function () {
            change(--index);
        }
        right.onclick = function () {
            change(++index);
        }

        function change(index) {
            lastDiv.classList.remove("active");
            oDivArray[index].classList.add("active");
            lastDiv = oDivArray[index];
            if (index === 0) {
                location.hash = '/';
            } else {
                location.hash = `/${index}`;
            }
        }

        window.onhashchange = function () {
            init();
            // 每次切换显示内容 也都会载入 history
        }
    </script>
</body>

</html>
```

# 2. JavaScript中必会常用知识点

## 2.1 浏览器的基本组成

**reference:**

[浏览器结构 (楚权的世界)](http://chuquan.me/2018/01/21/browser-architecture-overview/)

![浏览器的结构](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210207154503.png)

---

> 都是一些概念性的东西 大致看一下 了解了解即可

浏览器的抽象分层结构图中将浏览器分成了以下8个子系统：

1. **用户界面（User Interface）**
  用户界面主要包括工具栏、地址栏、前进/后退按钮、书签菜单、可视化页面加载进度、智能下载处理、首选项、打印等。除了浏览器主窗口显示请求的页面之外，其他显示的部分都属于用户界面。
  用户界面还可以与桌面环境集成，以提供浏览器会话管理或与其他桌面应用程序的通信。
> 用户界面 User Interface 也就是 浏览器的 shell部分(外壳部分)
2. **浏览器引擎（Browser Engine）**
  浏览器引擎是一个可嵌入的组件，其为渲染引擎提供高级接口。
    浏览器引擎可以加载一个给定的URI，并支持诸如：前进/后退/重新加载等浏览操作。
    浏览器引擎提供查看浏览会话的各个方面的挂钩，例如：当前页面加载进度、JavaScript alert。
    浏览器引擎还允许查询/修改渲染引擎设置。
3. **渲染引擎（Rendering Engine）**
  渲染引擎为指定的URI生成可视化的表示。
    渲染引擎能够显示HTML和XML文档，可选择CSS样式，以及嵌入式内容（如图片）。
    渲染引擎能够准确计算页面布局，可使用“回流”算法逐步调整页面元素的位置。
    渲染引擎内部包含HTML解析器。
> 引擎 其实也就是程序 浏览器里头的一些程序
4. **网络（Networking）**
  网络系统实现HTTP和FTP等文件传输协议。 网络系统可以在不同的字符集之间进行转换，为文件解析MIME媒体类型。 网络系统可以实现最近检索资源的缓存功能。
> 网络 Networking 用来实现通讯功能
5. **JavaScript解释器（JavaScript Interpreter）**
  JavaScript解释器能够解释并执行嵌入在网页中的JavaScript（又称ECMAScript）代码。 为了安全起见，浏览器引擎或渲染引擎可能会禁用某些JavaScript功能，如弹出窗口的打开。
6. **XML解析器（XML Parser）**
  XML解析器可以将XML文档解析成文档对象模型（Document Object Model，DOM）树。 XML解析器是浏览器架构中复用最多的子系统之一，几乎所有的浏览器实现都利用现有的XML解析器，而不是从头开始创建自己的XML解析器。
7. **显示后端（Display Backend）**
  显示后端提供绘图和窗口原语，包括：用户界面控件集合、字体集合。
> 显示后端 Display Backend 也叫 UI Backend 即: UI后端 它可用来绘制一些东西 比如 弹出的警告框 等等..
8. **数据持久层（Data Persistence）**
  数据持久层将与浏览会话相关联的各种数据存储在硬盘上。 这些数据可能是诸如：书签、工具栏设置等这样的高级数据，也可能是诸如：Cookie，安全证书、缓存等这样的低级数据。
> 和 `localstorage` `cookie` ... 有关

---

## 2.2 浏览器打开页面全流程

**reference:**

[浏览器打开页面全流程 (风动之石的博客)](https://blog.windstone.cc/front-end/browser-env/browser/open-page-process.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E6%89%93%E5%BC%80%E9%A1%B5%E9%9D%A2%E5%85%A8%E6%B5%81%E7%A8%8B)

> 这篇文章介绍地很详细

**keywords:**

`tcp3次握手` `js时间线` `渲染引擎` `tcp4次挥手` `本地缓存`

---

在后续的**网络部分**会详细介绍该部分的内容

## 2.3 渲染引擎

**reference:**

[渲染引擎 (楚权的世界)](http://chuquan.me/2018/01/21/browser-architecture-overview/)

**keywords:**

`层模型` `DOMTree` `CSSTree` `RenderTree` `渲染` `渲染引擎` `渲染过程`

---

`Q1`: 什么是渲染?
`A1`: 渲染: 在电脑绘图中是指用软件从模型生成图像的过程。

`Q2`: 什么是渲染引擎?
`A2`: 渲染引擎: 其职责就是渲染，即在浏览器窗口中显示所请求的内容。

`Q3`: 什么是渲染过程?
`A3`: 渲染过程：解析html从而构建DOM树->CSS Rule 树->构建Render树->布局Render树->绘制Render树

> DOMTree 没有样式 有结构
> CSSTree 没有结构 有样式
> DOMTree + CSSTree ==> RenderTree 有结构 有样式

**webkit引擎渲染的详细流程:**

![webkit引擎渲染的详细流程](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210207170538.png)

**生成Render Tree的过程图:**

![生成Render Tree的过程图](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210207170703.png)

---


浏览器的组成模块众多，而渲染引擎则是浏览器中最重要的模块。目前，常见的渲染引擎有`Trident`、`Gecko`、`WebKit`等。

> 渲染引擎有时候也被称为“浏览器内核”，这种说法并不严谨，不推荐使用

下表所示为几种渲染引擎在不同浏览器中的应用：

| 渲染引擎  | 浏览器                  |
| --------- | ----------------------- |
| `Trident` | IE、Edge                |
| `Gecko`   | Firefox                 |
| `WebKit`  | Safari、Chromium/Chrome |

## 2.4 渲染模式

**reference:**

[浏览器渲染模式：标准模式和怪异模式、为什么需要文档声明 !DOCTYPE？使用 document.body 还是 document.documentElement？ (CSDN)](https://blog.csdn.net/weixin_41796631/article/details/89396949)

**keywords:**

`文档声明` `DTD` `向前兼容` `向后兼容` `标准模式` `怪异模式`

---


渲染模式 即: 浏览器解析CSS的模式
1. 标准模式 (strict mode) ==> `CSS1Compat`
2. 怪异模式 (quirks mode) ==> `BackCompat` 也叫兼容模式
忽略DTD声明，将使网页进入怪异模式(quirks mode)。

渲染模式 也可以理解为渲染规则 渲染规则

---

**渲染模式的历史意义:**

在多年以前（IE6诞生以前），各浏览器都处于各自比较封闭的发展中（基本没有兼容性可谈）。

> 各家浏览器只管实现功能, 而不管采用啥方式来实现, 这就导致了后续的兼容性问题, 同样的程序, 在这个浏览器上可以正常跑, 但是, 别家的浏览器可能就会出bug

随着WEB的发展，兼容性问题的解决越来越显得迫切，随即，各浏览器厂商发布了按照标准模式（遵循各厂商制定的统一标准）工作的浏览器，比如IE6就是其中之一。

但是考虑到以前建设的网站并不支持标准模式，所以各浏览器在加入标准模式的同时也保留了混杂模式（即以前那种未按照统一标准工作的模式，也叫怪异模式）。

> 向前兼容 和 向后兼容
> 1. `向后兼容` 其实是标准说法 指的是向后兼容 `浏览器` (也就是之后版本的浏览器 可以理解为新浏览器)
> 意思是: 我们按照之前标准写的页面 不仅在老版本的浏览器上好使, 而且在新版本的浏览器上 也可以正常运行
> 2. `向前兼容` 指的是向前兼容 `网页` 和 向后兼容 描述的其实是一个含义

---

**三种模式的写法:**

- 1. `<!DOCTYPE html>`
- 2. `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`
- 3. `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`

```js
console.log(document.compatMode);
// 输出 CSS1Compat 表示 标准模式 (以上3种模式的输出 都是 CSS1Compat)
// 输出 BackCompat 表示 怪异模式
```

> 这一部分的内容 了解就OK了 想测试的话 可能得用IE6的浏览器来测试 那样貌似才能看到一些区别
> 我们写的话 在一个新的空白html页面 按一下 ! 然后 tab 直接生成结构 `<!DOCTYPE html>`(在vscode上)

## 2.5 label标签

[HTML &lt;label&gt; 标签 (w3school)](https://www.w3school.com.cn/tags/tag_label.asp)

在成哥的HTML + CSS的课程中有讲过, 不过只讲解了如何盖上用户体验的聚焦问题;
因为当时还没讲到 JavaScript, 所以没有讲一个有关 label标签 的事件绑定问题;

- [x] demo 2.5.1

单向绑定

```html
<p>
    <label for="demo">username: </label>
    <input type="text" id="demo">
</p>
```

```js
const label = document.querySelector("label"),
    inp = document.querySelector("#demo");

label.onclick = function () {
    console.log(1);
}

inp.onclick = function () {
    console.log(2);
}
```

**notes:**

1. 鼠标点击inp输入框 只会打印2
   鼠标点击username 会先打印1 再打印2
   可见 该绑定 其实是单向的

## 2.6 属性和特性

**reference:**

1. [特性和属性（Attributes and properties） (现代JavaScript教程)](https://zh.javascript.info/dom-attributes-and-properties)
2. [HTML data-* 属性 (w3school)](https://www.w3school.com.cn/tags/att_global_data.asp)

---

下面要介绍的 `标准的特性` 指的就是cst老师所说的 `特性`; `非标准特性` 指的就是cst老师所说的 `属性`;

狠多场合下, 大家还是都将其称之为属性, 但是, 我们要知道, 其实它们还是有很多区别的;

> property 和 attribute 应该都是可以翻译成 属性 的, 但是它俩有一定的区别;
> 所以, 为了以下的笔记内容好区分开它俩, 暂且先管
> `property` 称作 `特性`
> `attribute` 称作 `属性`

---

**demos:**

- [x] demo 2.6.1

明确 DOM节点(也就是 DOM对象) 和JavaScript的对象 在本质上是一样的

```js
// 下面以 document.body 这个DOM节点为例
/* 1. 在该对象上面新增一个属性 */
document.body.my_data = {
   name: 'dahuyou',
   age: 21
};

console.log(document.body.my_data.name); // dahuyou
console.log(document.body.my_data.age); // 21 (这是数字类型的21 而非字符串类型)

/* 2. 在该对象上面新增一个方法 */
document.body.sayTagName = function () {
   console.log(this.tagName);
};

document.body.sayTagName(); // BODY

/* 3. 修改原型 它也会受影响 */
Element.prototype.sayHi = function () {
   console.log(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY
```

**notes:**

DOM对象上的 属性 和 方法 的行为就像常规的 JavaScript 对象一样

1. 它们可以有很多值;
2. 它们是大小写敏感的;

综上: DOM节点(也称为DOM对象) 和 我们常规的JavaScript对象 在本质上并没有什么不同

---

- [x] demo 2.6.2

HTML的特性, 我们自定义的特性属于 `非标准特性`, 该元素自身带有的特性 属于 `标准特性`

```html
<div id="test" something="non-standard"></div>
```

```js
console.log(test.id); // test
console.log(test.something); // undefined
console.log(test.getAttribute("something")); // non-standard
```

**notes:**

1. `console.log(test.id); // test` 因为id 对于 div元素来说 是一个标准的特性 所以 与之相对应的 DOM对象 获得了相应的属性;
2. `console.log(test.something); // undefined` 而我们自己定义的 something 对于 div元素来说 是一个非标准的特性 所以 与之对应的DOM对象 没有获得相应的属性; 而在JavaScript中 若我们访问一个对象上不存在的属性 那么它是不会报错的 而是返回 undefined;
3. `console.log(test.getAttribute("something")); // non-standard` 通过 DOM对象 上的 getAttribute 方法 我们可以获取指定特性的 value

```js
// 1. 对于特性而言 它们是大小写不敏感的
console.log(test.getAttribute("Id")); // test
console.log(test.getAttribute("soMeThing")); // non-standard

// 2. 我们可以将任何值赋值给特性 但是这些值最终都将被转化为字符串类型
test.setAttribute('aaa', 111); // 写入一个特性 name: 'aaa' value: 111

// 3. 利用DOM对象上的属性 outerHTML 可以查看所有特性
console.log(test.outerHTML); // <div id="test" something="non-standard" aaa="111"></div>

// 4. DOM对象上的属性 attributes 是一个可遍历的对象 存放的是该DOM对象上的所有特性(标准和非标准)
for (let attr of test.attributes) { // for...of 是ES6的新增语法
    console.log(`name: ${attr.name}, value: ${attr.value}, type: ${typeof attr.value}`);
}
// name: id, value: test, type: string
// name: something, value: non-standard, type: string
// name: aaa, value: 111, type: string
```

**notes:**

1. HTML特性的两大特点:
   1. 特性名大小写不敏感;
   2. 写入的所有值, 都将转化为字符串;
2. 利用DOM对象上的属性 `outerHTML` 可以查看所有特性;
   特性其实都是写在 html元素 身上的;
3. for...of 取到的是每一项的value, 我们可以将test.attribute 打印出来看看, 会发现它其实是一个伪数组;
   它的每一项的value又是一个对象 这个对象里的name属性 存放的是特性名 value属性 存放的是特性值;

---

- [x] demo 2.6.3

属性 和 特性 之间的映射关系

当一个 html元素的`标准特性` 的值发生改变, 与之对应的 DOM对象的`属性` 的值也会发生改变(`但是也有例外`) 反之亦然;

但是, 如果是一个 `非标准的特性`, 对应的DOM对象上压根就没有该属性, 那么 就更别谈啥映射关系了;

```html
<input type="text">
```

```js
const inp = document.querySelector("input");

// 特性 => 属性 √
inp.setAttribute('id', '111');
console.log(inp.id); // 111

// 属性 => 特性 √
inp.id = '222';
console.log(inp.getAttribute("id")); // 222
```

**notes:**

1. 对于`id`这个标准特性来说, 我们发现, 它的映射是双向的
   1. 改变特性 属性会跟着变
   2. 改变属性 特性也会跟着变

```js
const inp = document.querySelector("input");

// 特性 => 属性 √
inp.setAttribute('value', '111');
console.log(inp.value); // 111

// 属性 => 特性 ×
inp.value = '222';
console.log(inp.getAttribute("value")); // 111
```

**notes:**

1. 对于`value`这个标准特性来说, 我们发现, 它的映射是单向的
   1. 改变特性 属性会跟着变
   2. 改变属性 特性不会跟着变
2. 这个"特点"在实际中会派上用场, 因为用户行为可能会导致 value值 变化, 若我们想从 HTML 中恢复'原始值' 那么该原始值可以从 特性 中取

![20210209101525](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210209101525.png)

---

- [x] demo 2.6.4

前面我们了解到, HTML特性的属性值只可能是String类型;
但是, DOM 属性的值是多类型的, DOM对象的 value 是多样的 不都是 string类型;


```html
<input type="checkbox" checked id="inp">
```

```js
console.log(inp.getAttribute("checked")); // 特性值是: ''
console.log(inp.checked); // 属性值是: true
```

```html
<div id="div" style="color: red; font-size: 120%;">Hello</div>
```

```js
// style 特性 => 字符串
console.log(div.getAttribute("style")); // color: red; font-size: 120%;

// style 属性 => 对象
console.log(div.style); // [object CSSStyleDeclaration]
console.log(div.style.color); // red
```

```html
<a href="#hello" id="a"></a>
```

```js
// href 特性
console.log(a.getAttribute('href')); // #href
// href 属性
console.log(a.href); // file:///Users/dahuyou/Desktop/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/test/test.html#hello
```

**notes:**

1. `checkbox`
   1. 特性: 空字符串
   2. 属性: 布尔值
2. `style`
   1. 特性: css行间样式 字符串
   2. 属性: 对象
3. `href`
   1. 特性: 字符串(只包含锚点信息 因为a元素身上只写了这个信息)
   2. 属性: 字符串(完整的URL)
   有一种非常少见的情况 虽然DOM对象上的属性 和 HTML元素一样 都是字符串类型 但它们的值也有可能不同
   如果我们需要 `href` 特性的值, 或者其他与 HTML 中所写的完全相同的特性, 则可以使用 `getAttribute`, 也就是若想获取元素身上写的某个属性的值, 可以尝试使用这种方式来实现

---

- [x] demo 2.6.5

下面介绍非标准特性的两种用法, 以及, 当前的推荐方案 => 非标准的特性 `dataset`;


```html
<!-- 标记这个 div 表示在这里显示 "name" -->
<div show-info="name"></div>
<!-- 标记这个 div 表示在这里显示 "age" -->
<div show-info="age"></div>
```

```js
// 以下代码用于 找到带有标记的html元素 并展示内容
let user = {
    name: 'dahuyou',
    age: 21
}

for (let div of document.querySelectorAll("[show-info]")) {
    let name = div.getAttribute('show-info'), // 获取要展示的信息的名
        value = user[name]; // 获取要展示的信息的值
    div.innerHTML = value; // 插入信息
}
```

**notes:**

1. 非标准的特性, 常常用于 为 JavaScript "标记" HTML 元素

---

```css
/* 样式依赖于自定义特性 "order-state" */
.order[order-state="new"] {
    color: green;
}

.order[order-state="pending"] {
    color: blue;
}

.order[order-state="canceled"] {
    color: red;
}
```

```html
<div class="order" order-state="new">A new order.</div>
<div class="order" order-state="pending">A pending order.</div>
<div class="order" order-state="canceled">A canceled order.</div>
```

```js
const div = document.querySelectorAll("div")[0];
div.setAttribute("order-state", 'canceled');
```

**notes:**

2. 非标准的特性, 常常用于将自定义的数据从 HTML 传递到 JavaScript

---

这种效果 我们使用 `.order-state-new` `.order-state-pending` `.order-state-canceled` 也就是分配类名的方式 也可以解决 但是 使用特性的话 操作起来 好像 更方便, 而且语义化可能会更好一些;

但是自定义的特性也存在问题。如果我们出于我们的目的使用了非标准的特性，之后它被引入到了标准中并有了其自己的用途，该怎么办？HTML 语言是在不断发展的，并且更多的特性出现在了标准中，以满足开发者的需求。在这种情况下，自定义的属性可能会产生意料不到的影响。

为了避免冲突，存在 `data-*` 特性。

所有以 `data-` 开头的特性均被保留供程序员使用。它们可在 `HTMLElement.dataset` 属性中使用。

例如，如果某个 `HTMLElement` 有一个名为 `data-about` 的特性，那么可以通过 `HTMLElement.dataset.about` 取到它。

```html
<div id="div" data-about="vipUser">
```

```js
consle.log(div.dataset.about); // vipUser
```

---

像 `data-order-state` 这样的多词特性可以以驼峰式进行调用：`dataset.orderState`

```css
/* 样式依赖于自定义特性 "order-state" */
.order[order-state="new"] {
    color: green;
}

.order[order-state="pending"] {
    color: blue;
}

.order[order-state="canceled"] {
    color: red;
}
```

```html
<div id="order" class="order" data-order-state="new">a new order</div>
```

```js
// 读取
console.log(order.dataset.orderState); // new

// 修改
order.dataset.orderState = "pending";
```

使用 `data-*` 特性是一种合法且安全的传递自定义数据的方式。

请注意，我们不仅可以读取数据，还可以修改数据属性 `data-* = 属性值`。

**小结:**

**1. 属性 和 特性 的简略对比:**

|        | 属性             | 特性               |
| ------ | ---------------- | ------------------ |
| name   | 大小写敏感       | 大小写不敏感       |
| value  | 多种类型的值     | string类型         |
| 英文名 | `property`       | `attribute`        |
| 位置   | DOM对象(DOM节点) | html元素(html标签) |

**2. 简述属性 和 特性 的关系:**

当浏览器解析HTML文本, 并根据标签创建 DOM 对象时, 浏览器会辨别 该特性是否是该html标签的标准特性;

- 若是`标准特性`, 则它会被识别为DOM对象上的属性;
- 若是`非标准特性`, 则它不会被被识别为DOM对象上的属性;

大多数情况下, 当一个html元素的 `标准特性` 的值发生改变时, 与之对应的那个 DOM对象的 `属性值` 也会发生变化, 它们之间是存在双向的映射关系的; (例外 `input 标签上的 value 是单向映射`... 可能还有别的例外, 目前还不知道)

**3. 操作特性的方法:**

| 方法                         | 描述                   |
| ---------------------------- | ---------------------- |
| `elem.hasAttribute(name)`    | 用于检查该特性是否存在 |
| `elem.getAttribute(name)`    | 获取该特性的值         |
| `elem.setAttribute(name)`    | 设置该特性的值         |
| `elem.removeAttribute(name)` | 移除该特性             |

## 2.7 图片的 预加载 和 懒加载

**reference:**

[懒加载和预加载 (浪里行舟)](https://juejin.cn/post/6844903614138286094)

**概念:**

1. 预加载: 就是图片提前加载好, 再展示给用户看;
2. 懒加载: 就是图片先不加载, 当该图片即将展示给用户看的时候, 再加载;

---

**demos:**

- [x] demo 2.7.1

图片的预加载

```js
// const oImage = document.createElement("img");
const oImage = new Image(); // 两种写法都可
oImage.src = 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M08/08/02/Cg-4WlS13_OIAi_tAAwNAaRPTQ0AASnYAGZ4gUADA0Z950.jpg';
oImage.onload = function () {
    document.body.appendChild(this);
}
```

**notes:**

1. 正常情况下, 图片如果较大, 我们在加载图片的时候, 都是下载一点, 显示一点;
   即: 图片会一点一点的出现, 这样的效果, 用户体验很不好;
   所以, 我们一般会采用 `图片预加载` 的方式;
   即: 利用 img的 `src属性`, 先加载到图片, 然后再 append 到页面中;
2. `imgDOM.onload` 事件, 一旦图片加载完 就立即触发;
3. 创建图片对象的方式:
   1. `document.createElement("img")`
   2. `new Image()`

- [x] demo 2.7.2

图片懒加载;
在 `笔记: 1. 快速掌握BOM对象核心技能` 中介绍过;

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>模拟图片懒加载</title>
    <style>
        body {
            height: 3000px;
        }

        #demo2 {
            position: absolute;
            top: 1200px;
            border: 2px solid black;
            width: 100px;
            height: 100px;
            background: red;
        }
    </style>
</head>

<body>
    <div id="demo2" style="opacity: 0.1;"></div>
    <script>
        HTMLDivElement.prototype.checkSelf = function () {
            if (!this.lock) { // 防止多次重复触发
                if (this.offsetTop < window.innerHeight + window.pageYOffset) {
                    console.log('start');
                    this.lock = true;
                    var iSpeed = 0.01;
                    this.timer = setInterval(() => { // 注意: 箭头函数中的this指向当前的div而非window
                        if (this.style.opacity == '1') {
                            console.log(this.style.opacity);
                            console.log('over');
                            clearInterval(this.timer);
                        } else {
                            console.log(this.style.opacity);
                            this.style.opacity = parseFloat(this.style.opacity) + iSpeed;
                        }
                    }, 16);
                }
            }
        }
        window.onscroll = function () {
            demo2.checkSelf();
        }
    </script>
</body>

</html>
```

**notes:**

1. 把opacity写在div身上的目的是为了下面的js中 可以直接通过 `div.style.opacity` 的方式来获取opacity值
   否则的话 也可以使用 `getComputedStyle` 方法来实现
2. `demo2.offsetTop === 1200`
3. 浏览器的监听频率好像就是16ms左右, 也就是说, 数值再给小, 也看不到啥 明显的加快效果了;
4. `window.onscroll` 事件, 一旦滚动条滚动 就会触发

- [x] demo 2.7.3

淘宝网 使用的是 预加载 与 懒加载 结合的方式来展示图片的;

```html
<div id="wrapper"></div>
```

```js
HTMLDivElement.prototype.checkSelf = function () {
    if (!this.lock) {
        if(this.offsetTop < window.innerHeight + window.pageYOffset) {
            console.log('start');
            this.lock = true;
            var iSpeed = 0.01;
            setTimeout(() => {
                var oImage = new Image();
                oImage.src = 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M08/08/02/Cg-4WlS13_OIAi_tAAwNAaRPTQ0AASnYAGZ4gUADA0Z950.jpg';
                oImage.onload = function () {
                    wrapper.appendChild(this);
                }
            }, 1500);
        }
    }
}
window.onscroll = function () {
    wrapper.checkSelf();
}
```

**notes:**

1. 监听滑轮事件, 不断判断当前div的位置, 一旦滑到了即将显示该div的位置时, 立刻采取预加载, 最后当用户需要预览这张图片时, 再直接把图片完整地展示到页面上;

## 2.8 Math.random()

`Math.random()` 用于生成一个 `0~1` 的随机数

- [x] demo 2.8.1

抽奖

```js
var n = Math.random() * 100;
if (n <= 1) {
    console.log('one')
}else if (n <= 10) {
    console.log('two');
}else if (n < 50) {
    console.log('three');
}else {
    console.log('thank you')
}
```

- [x] demo 2.8.2

封装一个函数, getRandom;
要求: 生成指定范围内的一个随机整数, 要求两头都是闭区间 (两端的整数都有可能取到)

```js
/**
 * 获取随机整数 [min, max]
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```

- [x] demo 2.8.3

`Math.random()` 结合 数组的 `sort()` 方法来使用, 实现乱序

```js
常见用法:
arr.sort(function (a, b) {
    return a - b; // 升序
    return b - a; // 降序
    return Math.random() - 0.5; // 乱序
})

ES6箭头函数式写法:
// 升序
arr.sort((a, b) => a - b);
// 降序
arr.sort((a, b) => b - a);
// 随机
arr.sort(() => Math.random() - 0.5);
```

**notes:**

1. `sort()` 会修改原数组
2. `sort()` 对原数组进行排序 并返回排序后的新数组

## 2.9 文档碎片

**keywords:**

`重绘` `重排` `模板字符串` `虚拟DOM` `diff算法` `VUE` `Rract`

**demos:**

- [x] demo 2.9.1

使用常规方式添加DOM节点

```html
<ul id="ul"></ul>
```

```js
for (let i = 0; i < 10; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = i + "";
    ul.appendChild(newLi); // 多次修改dom结构
}
```

**notes:**

1. 不使用文档碎片, 就使用常规的方式来添加DOM节点到页面上, 这样会多次修改DOM结构;

- [x] demo 2.9.2

使用`文档碎片`的方式添加DOM节点

```html
<ul id="ul"></ul>
```

```js
const oF = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = i + "";
    oF.appendChild(newLi); // 先丢到文档碎片里面
}
ul.appendChild(oF); // 一次性添加到DOM结构中, 只修改了一次DOM结构
```

**notes:**

1. 创建一个文档碎片对象的方式: `document.createDocumentFragment()`
2. 使用文档碎片, 先将DOM节点给装入一个容器(文档碎片)中, 然后把这个容器给append到页面上, 这样只需要修改一次DOM结构, 实现了尽可能少地修改DOM结构;
3. 理想很丰满, 现实很骨感; 使用文档碎片, 看似提高的性能, 实际上并没有;

- [x] demo 2.9.3

利用 `模板字符串` 来实现向页面中添加html元素;

```html
<ul id="ul"></ul>
```

```js
let htmlStr;
for (let i = 0; i < 10; i++) {
    htmlStr = `<li>${i}</li>`; // 模板字符串比字符串拼接更香
    // htmlStr = '<li>' + i + '</li>';
}
ul.innerHTML = htmlStr;
```

**notes:**

1. 从性能方面来考虑, `demo 2.9.3` 中使用的模板字符串的方式 相对于 `demo 2.9.1` 和 `demo 2.9.2` 来说, 是更好的;
2. 但是, `虚拟DOM` 相比, 差距还是有点大的, 利用 虚拟DOM 来实现, 效果可能会更好;(虚拟DOM后期会介绍, 现在还不理解, 先知道这个陌生名词和这玩意儿有关就好)

## 2.10 封装ClassName方法

如果说, 封装这个方法, 是为了让我们多一个选中html元素的方式, 那么总感觉它好多余, 现在想要选中某个html元素, 基本上不会是一个问题, 所以... 总觉得没必要会封装这样一个方法, 下面的demo能看懂代码即可;

- [x] demo 2.10.1

要求能从下面这样不规则的className中 也能选中对应的html元素

```html
<div class="wrapper" id='ow'>
    <p class='    demo   active   box    '>
        <span class='   active   '></span>
        <span class='demo  box'></span>
    </p>
    <p class='demo'>
        <span class='   demo    active'></span>
    </p>
</div>
```

```js
Element.prototype.getElementsByClassName =
Document.prototype.getElementsByClassName =
document.getElementsByClassName || function (_className) {
    // this DOM
    // 如果 children不兼容的话这里也要通过childNodes来做一下兼容
    var allDomArray = [].slice.call(document.getElementsByTagName('*'));
    var newDomArray = [];

    function trimClassName(dom) {
        var reg = /\s+/g; // 匹配1个或多个 连续空格
        var newClassStr = dom.className.replace(reg, ' '); // 匹配内容转为一个空格
        return newClassStr;
    }

    allDomArray.forEach(function (ele, index) {
        var newClassStr = trimClassName(ele).trim(); // 去除首尾的空格
        var classNameArray = newClassStr.split(' '); // 将该元素上的所有类名放到数组 classNameArray 中
        classNameArray.forEach(function (className, index) {
            if (className == _className) {
                newDomArray.push(ele);
            }
        })
    });
    return newDomArray;
}
console.log(document.getElementsByClassName("demo").length); // 4
```

**notes:**

1. 采用连续赋值符号的目的
   1. 如果`document.getElementsByClassName`有值, 那么就让 `Element.prototype.getElementsByClassName`和`Document.prototype.getElementsByClassName` 等于它, 不会执行我们后面封装的函数;
   2. 如果它没有值, 也就是在某个浏览器上没找到这个方法, 那么就会执行后面我们封装的函数, 让它俩等于我们封装的函数;
1. 将伪数组转化为真数组的方式
   1. `[].slice.call(伪数组)`
   2. `Array.from(伪数组)`
2. `split()` 方法 不会改变原数组, 而是返回一个新数组, 所以我们需要定义一个变量来接收它的返回值;
3. `dom.calssName` 是一个String类型的变量, class里面的是啥, 它就是啥;
4. `replace()` 是定义在 `String.prototype` 上的方法, 而非 `RegExp.prototype` 上

## 2.11 断点调试

断点调试, 即: 调试bug的一种常用方式;

**demos:**

- [x] demo 2.11.1

知道如何手动打断点

```html
<div id="demo"></div>
```

```js
const div = document.getElementById("dem");
debugger
div.style.innerHTML = "1";
```

**notes:**

1. `debugger` 这是采用手动打断点的方式来实现断点调试, 一旦程序运行到这一行, 它就会停住, 然后我们在页面上就可以一步一步的来调试我们写的程序;
2. 调试这东西 多写代码 多出错 多找错 能力慢慢就上来了...

# 3. 运动

## 3.1 匀速运动

- [x] demo 3.1.1

匀速运动效果

```html
<div></div>
<span></span>
<button id='btn'>run</button>
```

```css
div {
    width: 100px;
    height: 100px;
    background: orange;
    position: absolute;
    left: 0px;
    top: 0px;
}

button {
    margin-top: 150px;
}

span {
    position: absolute;
    left: 300px;
    top: 0px;
    width: 1px;
    height: 100px;
    background: black;
}
```

```js
var oDiv = document.getElementsByTagName('div')[0];
var oBtn = document.getElementById('btn');
var timer = null;
oBtn.onclick = function () {
    startMove(oDiv, 300);
}

/**
 * 横向匀速运动
 * @param {HTMLElement} dom 运动的html元素
 * @param {Number} target 目标点
 */
function startMove(dom, target) {
    clearInterval(timer);
    var iSpeed = target - dom.offsetLeft > 0 ? 7 : -7;
    timer = setInterval(function () {
        if (Math.abs(target - dom.offsetLeft) < Math.abs(iSpeed)) {
            clearInterval(timer);
            dom.style.left = target + 'px';
        } else {
            dom.style.left = dom.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}
```

**notes:**

1. `dom.offsetLeft`
   1. `Number类型`
   2. `read-only`

2. `clearInterval(timer);`
   1. 每一次触发运动函数时, 清除前一个让html元素运动的那个定时器, 防止又多股力量同时作用在一个元素上;
3. `var iSpeed = target - dom.offsetLeft > 0 ? 7 : -7;`
   1. 依据目标点相对于当前运动元素的位置, 来确定运动的方向;
4. `Math.abs(target - dom.offsetLeft) < Math.abs(iSpeed)`
   1. 这是判断运动停止的依据, 倘若 运动的html元素 与 目标位置 之间的距离, 小于一次 运动的距离;
   也就是, 再运动一次, 必然可以抵达目标点;
   那么就`clearInterval(timer);`直接清除定时器(清除作用于HTML元素上的那股力量)
   `dom.style.left = target + 'px';`直接修改其位置为目标位置即可;


## 3.2 缓冲运动

物体的速度 距离目标点越近 就越小 当到达目标点时 速度减小为0

- [x] demo 3.2.1

```html
<div></div>
<span></span>
<button id='btn'>run</button>
```

```css
div {
    position: absolute;
    left: 500px;
    top: 0px;
    width: 100px;
    height: 100px;
    background: orange;
}

button {
    margin-top: 150px;
}

span {
    position: absolute;
    left: 300px;
    top: 0px;
    width: 1px;
    height: 100px;
    background: black;
}
```

```js
var oDiv = document.getElementsByTagName('div')[0];
var oBtn = document.getElementById('btn');
oBtn.onclick = function () {
    startMove(oDiv, 300);
}
/**
 * 横向缓冲运动
 * @param {HTMLElement} dom 运动的html元素
 * @param {Number} target 目标点
 */
function startMove(dom, target) {
    clearInterval(dom.timer);
    var iSpeed = null;
    dom.timer = setInterval(function () {
        iSpeed = (target - oDiv.offsetLeft) / 7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (oDiv.offsetLeft == target) {
            clearInterval(dom.timer);
        } else {
            oDiv.style.left = oDiv.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}
```

**notes:**

和 3.1 中的匀速运动的核心思想都是一样的, 下面指出几个不一样的点;

1. `iSpeed` 的取值问题
   1. `iSpeed = (target - oDiv.offsetLeft) / 7;` html元素运动的速度 是依据当前html元素与目标点之间的距离来决定的
      1. 距离大 速度大
      2. 距离小 速度小
   2. `iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);` 判断当前的速度方向
      1. 若是正数 则 `Math.ceil(iSpeed)` 向上取整
      2. 若是负数 则 `Math.floor(iSpeed)` 向下取整
   `因为 速度最终一定会变为 正负零点几 转化为整数后 必然就是 +1 或 -1`
2. `oDiv.offsetLeft == target` 判断停止的条件
   上面提到了 运动快结束的时候, 它的速度不是 +1 就是 -1, 只要我们传入的目标位置 是一个整数, 那么必然会有那么一个时刻 `oDiv.offsetLeft == target` 也就是 正正好运动到了目标点;
   到这里, 会发现其实这个判断停止运动的条件, 其实并不好, 如果目标点传入的不是整数, 那么就会出bug了;
   我们也可以这样判断: `Math.abs(oDiv.offsetLeft - target) <= 1` 表示运动元素与目标点之间的距离小于等于1px时, 我们就直接让它清除定时器, 并在此之后多执行一条语句: `dom.style.left = target + 'px';` 让该html元素最终停在目标点
3. 细节:
   1. **读取到的数值 会舍去小数部分 都是`整数` 还是向上取整**

- [x] notes3

```html
<div id="demo"></div>
```

```css
div {
    position: absolute;
    left: 1.5px;
    top: 0;
}
```

```js
console.log(demo.offsetLeft); // 2
```

---

- [x] demo 3.2.2

```html
<div class="wrapper">
    <span></span>
</div>
```

```css
.wrapper {
    position: absolute;
    left: -400px;
    top: 200px;
    width: 400px;
    height: 80px;
    background: orange;
}

.wrapper span {
    position: absolute;
    right: -50px;
    top: 0px;
    width: 50px;
    height: 80px;
    background: red;
}
```

```js
var oDiv = document.getElementsByClassName('wrapper')[0];
// 鼠标移入和移出事件不绑定在span上
oDiv.onmouseenter = function () {
    startMove(this, 0);
}
oDiv.onmouseleave = function () {
    startMove(this, -400);
}

/**
 * 横向缓冲运动
 * @param {HTMLElement} dom 运动的html元素
 * @param {Number} target 目标点
 */
function startMove(dom, target) {
    clearInterval(dom.timer);
    var iSpeed = null;
    dom.timer = setInterval(function () {
        iSpeed = (target - oDiv.offsetLeft) / 7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (oDiv.offsetLeft == target) {
            clearInterval(dom.timer);
        } else {
            oDiv.style.left = oDiv.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}
```

**notes:**

1. `startMove` 和 `demo 3.2.1` 是同一个缓冲运动函数
2. `事件冒泡`
   1. `oDiv.onmouseenter`
   2. `oDiv.onmouseleave`
   这两个鼠标移入和移出事件, 是绑定在 div.wrapper 这个元素上的, 但是一开始我们只是将鼠标移入到了span元素上, 而不是移动到移动元素身上, 它之所以也能够触发, 是由于 `事件冒泡` 机制;

---

- [x] demo 3.2.2

点击一个html元素之后, 让它渐渐地变透明, 实现 透明度缓冲效果;

```html
<div id='demo'></div>
```

```css
div#demo {
    width: 100px;
    height: 100px;
    background-color: red;
}
```

```js
var oDiv = document.getElementsByTagName('div')[0];
oDiv.onclick = function () {
    startMove(this, 50);
}

/**
 * 封装一个兼容性方法 用于 获取指定html元素身上的某个指定css属性的属性值
 * 注意: 返回值是一个 字符串
 * @param {HTMLElement} dom HTML元素
 * @param {String} attr css属性
 */
function getStyle(dom, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[attr];
    } else {
        return dom.currentStyle[attr]; // IE
    }
}

/**
 * 透明度缓冲效果
 * @param {HTMLElement} dom HTML元素
 * @param {Number} target 目标值
 */
function startMove(dom, target) {
    clearInterval(dom.timer);
    var iSpeed = null,
        iCur = null;
    dom.timer = setInterval(function () {
        iCur = parseFloat(getStyle(dom, 'opacity')) * 100;
        iSpeed = (target - iCur) / 7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (iCur == target) {
            clearInterval(dom.timer);
        } else {
            dom.style.opacity = (iCur + iSpeed) / 100;
        }
    }, 30)
}
```

**notes:**

和之前的运动并没有什么本质上的不同, 唯一需要注意的点就是, `opacity` 这个css属性值的取值范围是 `0~1`

1. `parseFloat(getStyle(dom, 'opacity')) * 100`
   1. 将 `opacity` 的数值放大100倍;
   因为如果不放大再处理的话 那么我们在这一步接收到的数据就是 `零点几` 的一个小数, 后续 `Math.ceil(iSpeed)会一步到位` 直接变成1 那就没啥渐变效果了
2. `dom.style.opacity = (iCur + iSpeed) / 100;`
   1. 处理完数据后, 重新赋回去, 需要还原为 `零点几`
3. `getStyle` 这个函数感觉没必要封装, 不兼容IE就不兼容吧...
   1. 该函数的封装, 在 成哥 JavaScript 的课程中 封装过, 查一下 `tools.js` 可以找到;

## 3.3 多物体运动

- [x] demo 3.3.1

给每一个需要运动的html元素都绑定上对应的运动事件处理函数, 当鼠标移入时, 令该html元素的宽度由原来的100px变为400px

```html
<div></div>
<div></div>
<div></div>
<div></div>
```

```css
div {
    width: 100px;
    height: 100px;
    background-color: red;
    opacity: 1;
    margin-bottom: 100px;
}
```

```js
var oDivArray = document.getElementsByTagName('div');

for (var i = 0; i < oDivArray.length; i++) {
    oDivArray[i].onmouseenter = function () {
        startMove(this, 400);
    }
    oDivArray[i].onmouseleave = function () {
        startMove(this, 100);
    }
}

function getStyle(dom, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[attr];
    } else {
        return dom.currentStyle[attr];
    }
}

function startMove(dom, target) {
    clearInterval(dom.timer);
    var iSpeed = null,
        iCur = null;
    dom.timer = setInterval(function () {
        iCur = parseInt(getStyle(dom, 'width'));
        iSpeed = (target - iCur) / 7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (iCur == target) {
            clearInterval(dom.timer);
        } else {
            dom.style.width = iCur + iSpeed + 'px';
        }
    }, 30);
}
```

**notes:**

前面的都掌握的话, 这个就很easy, 唯一要注意的点:
1. `dom.timer = setInterval(function () { ... }` 必须给每一个运动的html元素单独绑定一个定时器标志 timer, 如果使用全局的 timer 的话, 那么 timer 只有一个, 会出问题的, 搞不好一个html元素就把其他的html元素的timer给清除了
   所以这里必须挨个, 单独分配
   给DOM对象自定义一个属性 timer, 然后将 该html元素的定时器标志作为属性值绑定到里头即可;


## 3.4 多物体不同值运动

- [x] demo 3.4.1

```html
<div></div>
<div></div>
<div></div>
<div></div>
```

```css
div {
    width: 100px;
    height: 100px;
    background-color: red;
    border: 1px solid black;
    opacity: 1;
    margin-bottom: 100px;
}
```

```js
function getStyle(dom, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[attr];
    } else {
        return dom.currentStyle[attr];
    }
}

var oDivArray = document.getElementsByTagName('div');

oDivArray[0].onclick = function () {
    startMove(this, 'width', 400);
}
oDivArray[1].onclick = function () {
    startMove(this, 'height', 400);
}
oDivArray[2].onclick = function () {
    startMove(this, 'borderWidth', 20);
}
oDivArray[3].onclick = function () {
    startMove(this, 'opacity', 50);
}

function startMove(dom, attr, target) {
    clearInterval(dom.timer);
    var iSpeed = null,
        iCur = null;
    dom.timer = setInterval(function () {
        // 依据不同属性 确定 iCur 当前值 注意 opacity
        if (attr == 'opacity') {
            iCur = parseFloat(getStyle(dom, attr)) * 100;
        } else {
            iCur = parseInt(getStyle(dom, attr));
        }
        iSpeed = (target - iCur) / 7;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (iCur == target) {
            clearInterval(dom.timer);
        }
        // 依据不同属性 确定 如何赋值 注意 opacity
        if (attr == 'opacity') {
            dom.style[attr] = (iCur + iSpeed) / 100;
        } else {
            dom.style[attr] = iCur + iSpeed + 'px';
        }
    }, 30)
}
```

**notes:**

1. `startMove` 函数, 多了一个参数 `attr` 表示的是 操作哪个 `css属性`
   1. 若属性是`opacity`那么要注意的就是它的取值问题;
   2. `非opacity`属性, 处理方式都是相同的;(这里只考虑 尺寸类的css属性)

## 3.5 多物体多值运动 + 回调机制

- [x] demo 3.5.1

多值css属性数据 的数据结构：`{width: 400, height: 400, left: 200, top: 300, opacity: 50}`

```html
<div id='topDiv'></div>
<div id="bottomDiv"></div>
```

```css
div {
    position: absolute;
    left: 0px;
    width: 100px;
    height: 100px;
    background: red;
    opacity: 1;
}

#topDiv {
    top: 200px;
}

#bottomDiv {
    top: 400px;
}
```

```js
function getStyle(dom, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[attr];
    } else {
        return dom.currentStyle[attr];
    }
}

var oTopDiv = document.getElementById('topDiv');
var oBottomDiv = document.getElementById('bottomDiv');

oTopDiv.onclick = function () {
    startMove(this, {
        width: 400,
        height: 400,
        left: 200,
        top: 300,
        opacity: 50
    }, function () {
        startMove(oBottomDiv, {
            width: 400,
            height: 400,
            left: 200,
            top: 300,
            opacity: 50
        }, function () {
            alert('over');
        })
    })
}

function startMove(dom, attrObj, callback) {
    clearInterval(dom.timer);
    var iSpeed = null,
        iCur = null;
    dom.timer = setInterval(function () {
        var bStop = true;
        for (var attr in attrObj) {
            if (attr == 'opacity') {
                iCur = parseFloat(getStyle(dom, attr)) * 100;
            } else {
                iCur = parseInt(getStyle(dom, attr));
            }
            iSpeed = (attrObj[attr] - iCur) / 7;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (attr == 'opacity') {
                dom.style.opacity = (iCur + iSpeed) / 100;
            } else {
                dom.style[attr] = iCur + iSpeed + 'px';
            }
            if (iCur != attrObj[attr]) {
                bStop = false;
            }
            // console.log(iCur, attrObj[attr]);
        }
        if (bStop) {
            clearInterval(dom.timer); // 清除作用与该html元素的定时器
            typeof callback == 'function' && callback();
        }
    }, 30);
}
```

**notes:**

1. `for (var attr in attrObj)` 多值运动需要用到 for...in ,依次遍历该html元素身上需要变化的每一个css属性, 每一次遍历, 都让那些没有达到目标值的css属性改变一丢丢;
2. `if (iCur != attrObj[attr]) { bStop = false; }` 但凡有一个属性没有达到目标值 我们都将 bStop 设置为false
3. `if (bStop) { ... }`回调函数的执行条件
   1. `bStop != false` 当前正在变化的html元素的所有属性都达到了目标值
   2. `typeof callback == 'function' && callback();` 第三个参数 callback 要求是一个函数;
   如果不是, 则啥也不做;

# 4. 加速度运动

- [x] demo 4.1

```html
<div></div>
```

```css
div {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100px;
    height: 100px;
    background: orange;
}
```

```js
var oDiv = document.getElementsByTagName('div')[0];
var timer = null;
oDiv.onclick = function () {
    startMove(this);
}

function startMove(dom) {
    clearInterval(timer);
    var a = 2;
    var iSpeed = 20;
    timer = setInterval(function () {
        iSpeed = iSpeed + a;
        oDiv.style.left = oDiv.offsetLeft + iSpeed + 'px';
    }, 30);
}
```

**notes:**

1. `iSpeed = iSpeed + a;`
   1. 每间隔30ms 速度值加2
   2. a,v同号, 做加速;
   3. a,v异号, 做减速;

# 5. 弹性运动

- [x] demo 5.1

```html
<div></div>
<span></span>
```

```css
div {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100px;
    height: 100px;
    background: orange;
}

span {
    position: absolute;
    left: 300px;
    top: 0px;
    background: black;
    width: 1px;
    height: 100px;
}
```

```js
var oDiv = document.getElementsByTagName('div')[0];
var timer = null;
oDiv.onclick = function () {
    startMove(this, 300);
}

function startMove(dom, target) {
    clearInterval(timer);
    var a, iSpeed;
    timer = setInterval(function () {
        a = (target - dom.offsetLeft) / 5;
        iSpeed += a;
        iSpeed *= 0.8;
        if (Math.abs(iSpeed) < 1 && Math.abs(target - dom.offsetLeft) < 1) {
            clearInterval(timer);
            dom.style.left = target + 'px';
        } else {
            dom.style.left = dom.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}
```

**notes:**

1. `a = (target - dom.offsetLeft) / 5;`
    在现实中，当物体距离目标点越近，则皮筋的拉力就越小；物体距离目标点越远，则皮筋的拉力就越大；而且力的变化，会导致加速度变化，它们之间成正向关系；
    该语句不仅实现了加速度a的大小的动态变化，还实现了加速度a的方向的变化；
    综上：`可以通过运动元素当前所在的位置来决定加速度a的大小和方向`；
2. `iSpeed *= 0.8;` 模拟摩擦力的存在, 可以把0.8理解为动摩擦因数 u
3. `if (Math.abs(iSpeed) < 1 && Math.abs(target - dom.offsetLeft) < 1) { ... }` 这是运动的停止条件
        1. 物体与目标点之间的距离 < 1
        2. 物体此时的速度 < 1

# 6. 弹性运动案例

- [x] demo 6.1

```html
<ul>
    <li class="ele">大忽悠</li>
    <li class="ele">不忽悠</li>
    <li class="ele">少忽悠</li>
    <li class="ele">小忽悠</li>
    <li class="bg"></li>
</ul>
```

```css
* {
    padding: 0px;
    margin: 0px;
    list-style: none;
}

ul {
    position: relative;
    margin: 100px auto 0px;
    width: 800px;
    height: 100px;
}

ul .ele {
    float: left;
    width: 200px;
    height: 100px;
    box-sizing: border-box;
    border: 1px solid black;
    background: #008c8c;

    line-height: 100px;
    text-align: center;
    font-size: bold;
    color: #fff;
}

.bg {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 200px;
    height: 100px;
    opacity: 0.4;
    background: #f23941;
}
```

```js
const oLiArray = document.querySelectorAll("li.ele"),
    oLiBg = document.querySelector("li.bg");

for (let i = 0; i < oLiArray.length; i++) {
    oLiArray[i].onmouseenter = function () {
        startMove(oLiBg, this.offsetLeft); // 注意 移动的是 背景
    }
}


function startMove(dom, target) {
    clearInterval(dom.timer);
    var a = 3;
    var iSpeed = 0;
    dom.timer = setInterval(function () {
        a = (target - dom.offsetLeft) / 5;
        iSpeed += a;
        iSpeed *= 0.8;
        if (Math.abs(iSpeed) < 1 && Math.abs(target - dom.offsetLeft) < 1) {
            clearInterval(dom.timer);
            dom.style.left = target + 'px';
        } else {
            dom.style.left = dom.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}
```

**notes:**

1. `startMove(oLiBg, this.offsetLeft);` 注意 移动的是 背景

# 7. 模拟重力场

- [x] demo 7.1

```html
<div id='demo'></div>
```

```css
div {
    position: absolute;
    left: 0px;
    top: 0px;
    background: orange;
    width: 100px;
    height: 100px;
}
```

```js
var oDiv = document.getElementById('demo');

oDiv.onclick = function () {
    startMove(this);
}

function startMove (dom) {
    clearInterval(dom.timer);
    var iSpeedX = 6;
    var iSpeedY = 8;
    var g = 3;
    dom.timer = setInterval(function () {
        iSpeedY += g;
        var newTop = dom.offsetTop + iSpeedY;
        var newLeft = dom.offsetLeft + iSpeedX;
        // 防止过低
        if (newTop >= document.documentElement.clientHeight - dom.clientHeight) {
            iSpeedY *= -1;
            iSpeedY *= 0.8;
            iSpeedX *= 0.8;
            newTop = document.documentElement.clientHeight - dom.clientHeight;
        }

        // 防止过顶
        if (newTop <= 0) {
            iSpeedY *= -1;
            iSpeedY *= 0.8;
            iSpeedX *= 0.8;
            newTop = 0;
        }

        // 防止过右
        if (newLeft >= document.documentElement.clientWidth - dom.clientWidth) {
            iSpeedX *= -1;
            iSpeedY *= 0.8;
            iSpeedX *= 0.8;
            newLeft = document.documentElement.clientWidth - dom.clientWidth;
        }

        // 防止过左
        if (newLeft <= 0) {
            iSpeedX *= -1;
            iSpeedY *= 0.8;
            iSpeedX *= 0.8;
            newLeft = 0;
        }

        if (Math.abs(iSpeedX) < 1) {
            iSpeedX = 0;
        }

        if (Math.abs(iSpeedY) < 1) {
            iSpeedY = 0;
        }

        if (iSpeedX == 0 && iSpeedY == 0 && newTop == document.documentElement.clientHeight - dom.clientHeight) {
            clearInterval(dom.timer);
            console.log('over')
        }else {
            dom.style.top = newTop + 'px';
            dom.style.left = newLeft + 'px';
        }
    }, 30);
}
```

**notes:**

两个主要点

1. 边界处理
   1. 一共4个方向要处理, 都是很简单的if条件判断, 一旦新的位置的值越界了, 我们要做的就是令该元素在当前的运动方向上取反, 并且两个方向上的速度要减小, 还要重新定义新的位置的值;
2. 停止条件`if (iSpeedX == 0 && iSpeedY == 0 && newTop == document.documentElement.clientHeight - dom.clientHeight)`
   1. `iSpeedX == 0` 横向速度小于1
   2. `iSpeedY == 0` 纵向速度小于1
   3. `newTop == document.documentElement.clientHeight - dom.clientHeight` 元素运动到了页面底部

**补充:**


| 属性                                    | 含义                          |
| --------------------------------------- | ----------------------------- |
| `document.documentElement`              | 表示的是 `<html>`             |
| `document.documentElement.clientWidth`  | 表示的是 页面的宽度           |
| `document.documentElement.clientHeight` | 表示的是 页面的高度           |
| `dom`                                   | 表示的是 运动的HTML元素       |
| `dom.clientWidth`                       | 表示的是 运动的HTML元素的宽度 |
| `dom.clientHeight`                      | 表示的是 运动的HTML元素的高度 |



# 8. 拖拽实例

- [x] demo 8.1

之前在成哥的JavaScript课程中, 封装过drag(拖拽)函数, 下面是对应的源码;

```js
if (!this.myPlugin) {
    this.myPlugin = {};
}
/**
 * 拖拽HTML元素
 * @param {HTMLElement} elem HTML元素
 */
this.myPlugin.drag = function (elem) {
    var disX,
        disY;
    elem.addEventListener("mousedown", function (e) {
        var event = e || window.event;
        disX = event.clientX - parseInt(this.myPlugin.getStyle(elem, 'left'));
        disY = event.clientY - parseInt(this.myPlugin.getStyle(elem, 'top'));
        document.addEventListener("mousemove", mouseMove, false);
        document.addEventListener("mouseup", mouseUp, false);
        this.myPlugin.stopBubble(event); // 阻止事件冒泡
        this.myPlugin.cancelHandler(event); // 阻止事件默认行为
    }, false)

    function mouseMove(e) {
        var event = e || event;
        elem.style.left = event.clientX - disX + "px";
        elem.style.top = event.clientY - disY + "px";
    }

    function mouseUp(e) {
        var event = e || event;
        document.removeEventListener("mousemove", mouseMove, false);
        document.removeEventListener("mouseup", mouseUp, false);
    }
}
```

**notes:**

1. 不能单独拿这一个函数出来使, 这个函数里面还调用了`tool.js`里面的其他函数

- [x] demo 8.2

```html
<div id='demo'></div>
```

```css
div {
    position: absolute;
    left: 0px;
    top: 0px;
    background: orange;
    width: 100px;
    height: 100px;
}
```

```js
var oDiv = document.getElementById('demo');
var lastX = 0;
var lastY = 0;
var iSpeedX = 0;
var iSpeedY = 0;
oDiv.onmousedown = function (e) {
    clearInterval(this.timer);
    // 清除 startMove 里头的定时器，防止两股力量导致物体运动
    var event = event || e;
    var disX = event.clientX - this.offsetLeft;
    var disY = event.clientY - this.offsetTop;
    var self = this;
    document.onmousemove = function (e) {
        var event = event || e;
        var newLeft = event.clientX - disX;
        var newTop = event.clientY - disY;

        iSpeedX = newLeft - lastX;
        iSpeedY = newTop - lastY;

        lastX = newLeft;
        lastY = newTop;

        // 轨迹
        /* var oSpan = document.createElement('span');
        oSpan.style.position = 'absolute';
        oSpan.style.left = newLeft + 'px';
        oSpan.style.top = newTop + 'px';
        oSpan.style.width = '5px';
        oSpan.style.height = '5px';
        oSpan.style.backgroundColor = 'black';
        document.body.appendChild(oSpan); */

        self.style.left = newLeft + 'px';
        self.style.top = newTop + 'px';
    }
    document.onmouseup = function () {
        document.onmouseup = null;
        document.onmousemove = null;
        startMove(self, iSpeedX, iSpeedY);
    }
}

function startMove(dom, iSpeedX, iSpeedY) {
    clearInterval(dom.timer);
    var g = 3;
    dom.timer = setInterval(function () {
        iSpeedY += g;
        var newTop = dom.offsetTop + iSpeedY;
        var newLeft = dom.offsetLeft + iSpeedX;
        if (newTop >= document.documentElement.clientHeight - dom.clientHeight) {
            iSpeedY *= -1;
            iSpeedY *= 0.8;
            iSpeedX *= 0.8;
            newTop = document.documentElement.clientHeight - dom.clientHeight;
        }

        if (newTop <= 0) {
            iSpeedY *= -1;
            iSpeedY *= 0.8;
            iSpeedX *= 0.8;
            newTop = 0;
        }

        if (newLeft >= document.documentElement.clientWidth - dom.clientWidth) {
            iSpeedX *= -1;
            iSpeedY *= 0.8;
            iSpeedX *= 0.8;
            newLeft = document.documentElement.clientWidth - dom.clientWidth;
        }

        if (newLeft <= 0) {
            iSpeedX *= -1;
            iSpeedY *= 0.8;
            iSpeedX *= 0.8;
            newLeft = 0;
        }

        if (Math.abs(iSpeedX) < 1) {
            iSpeedX = 0;
        }

        if (Math.abs(iSpeedY) < 1) {
            iSpeedY = 0;
        }


        if (iSpeedX == 0 && iSpeedY == 0 && newTop == document.documentElement.clientHeight - dom
            .clientHeight) {
            clearInterval(dom.timer);
            console.log('over')
        } else {
            dom.style.top = newTop + 'px';
            dom.style.left = newLeft + 'px';
        }
    }, 30);
}
```

**notes:**

和之前的模拟重力场差不多, 区别是, 初始的横向速度和纵向速度, 现在是由参数传入的;

# 9. 轮播图

- [x] demo 9.1

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./index.css">
    <title>轮播图</title>
</head>
<body>
    <div class="wrapper">
        <ul class='sliderPage'>
            <li>
                <img src="./cat1.jpg"/>
            </li>
            <li>
                <img src="./cat2.jpg"/>
            </li>
            <li>
                <img src="./cat3.jpg"/>
            </li>
            <li>
                <img src="./cat4.jpg"/>
            </li>
            <li>
                <img src="./cat1.jpg"/>
            </li>
        </ul>
        <div class='btn leftBtn'>&lt;</div>
        <div class='btn rightBtn'>&gt;</div>
        <div class='sliderIndex'>
            <span class='active'></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <script src='./move.js'></script>
    <script src='./index.js'></script>
</body>
</html>
```

```css
* {
    padding: 0px;
    margin: 0px;
    list-style: none;
}

.wrapper {
    position: relative;
    margin: 100px auto 0px;
    width: 400px;
    height: 250px;
    overflow: hidden;
}

.wrapper .sliderPage {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 250px;
    width: 2000px;
}

.wrapper .sliderPage li {
    width: 400px;
    height: 250px;
    float: left;
}

.wrapper .sliderPage li img {
    width: 100%;
    height: 100%;
}

.wrapper .btn {
    position: absolute;
    top: calc(50% - 20px);
    width: 40px;
    height: 40px;
    background-color: #000;

    color: #fff;
    text-align: center;
    line-height: 40px;

    opacity: 0.1;
    cursor: pointer;
}

.wrapper:hover .btn {
    opacity: 0.7;
}

.wrapper .leftBtn {
    left: 15px;
}

.wrapper .rightBtn {
    right: 15px;
}

.wrapper .sliderIndex {
    position: absolute;
    width: 100%;
    bottom: 15px;
    text-align: center;
    cursor: pointer;
}

.wrapper .sliderIndex span {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
}

.wrapper .sliderIndex .active {
    background-color: #f40;
}
```

```js
var timer = null;
var sliderPage = document.getElementsByClassName('sliderPage')[0];
var moveWidth = sliderPage.children[0].offsetWidth;
var num = sliderPage.children.length - 1;
var leftBtn = document.getElementsByClassName('leftBtn')[0];
var rightBtn = document.getElementsByClassName('rightBtn')[0];
var oSpanArray = document.getElementsByClassName('sliderIndex')[0].getElementsByTagName('span');
var lock = true;
var index = 0;

leftBtn.onclick = function () {
    autoMove('right->left');
}

rightBtn.onclick = function () {
    autoMove('left->right');
}


/* 给轮播图的索引点绑定事件 cts老师源版 */
/* for (var i = 0; i < oSpanArray.length; i++) {
    (function (myIndex) {
        oSpanArray[i].onclick = function () {
            lock = false;
            clearTimeout(timer);
            index = myIndex;
            startMove(sliderPage, {
                left: -index * moveWidth
            }, function () {
                lock = true;
                timer = setTimeout(autoMove, 1500);
                changeIndex(index);
            })
        }
    })(i)
} */

/* 给轮播图的索引点绑定事件 尝试使用事件委托来实现 */
const sliderIndex = document.querySelector(".sliderIndex");
sliderIndex.onclick = function(e){
    // if(lock === false){ // 感觉加上这个条件之后 体验反而不好了
    //     return;
    // }
    if(e.target.tagName === "SPAN"){ // 若当前点击的是 SPAN
        lock = false;
        clearTimeout(timer);
        index = Array.from(this.children).indexOf(e.target);
        // console.log(index);
        startMove(sliderPage, {
            left: -index * moveWidth
        }, function(){
            lock=true;
            timer = setTimeout(autoMove, 1500);
            changeIndex(index);
        });
    }
}


// direction
//默认轮播方向/right按钮  'left->right' / undefined
//点击left按钮  'right->left'
function autoMove(direction) {
    //
    if (lock) {
        lock = false;

        clearTimeout(timer);
        if (!direction || direction == 'left->right') {
            index++;
            startMove(sliderPage, {
                left: sliderPage.offsetLeft - moveWidth
            }, function () {
                if (sliderPage.offsetLeft == -num * moveWidth) {
                    index = 0;
                    sliderPage.style.left = '0px';
                }
                timer = setTimeout(autoMove, 1500);
                lock = true;
                changeIndex(index);
            });
        } else if (direction == 'right->left') {
            if (sliderPage.offsetLeft == 0) {
                sliderPage.style.left = -num * moveWidth + 'px';
                index = num;
            }
            index--;
            startMove(sliderPage, {
                left: sliderPage.offsetLeft + moveWidth
            }, function () {
                timer = setTimeout(autoMove, 1500);
                lock = true;
                changeIndex(index);
            })
        }
    }
}

function changeIndex(_index) {
    for (var i = 0; i < oSpanArray.length; i++) {
        oSpanArray[i].className = '';
    }
    oSpanArray[_index].className = 'active';
}

timer = setTimeout(autoMove, 1500);
```

move.js

```js
function getStyle (obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }else {
        return window.getComputedStyle(obj, false)[attr];
    }
}

function startMove (obj, data, func) {
    clearInterval(obj.timer);
    var iSpeed;
    var iCur;
    var name;
    startTimer = obj.timer = setInterval(function () {
        var bStop = true;
        for (var attr in data) {
            if (attr === 'opacity') {
                name = attr;
                iCur = parseFloat(getStyle(obj, attr)) * 100;
            }else {
                iCur = parseInt(getStyle(obj, attr));
            }
            iSpeed = ( data[attr] - iCur) / 8;

            if (iSpeed > 0) {
                iSpeed = Math.ceil(iSpeed);
            }else {
                iSpeed = Math.floor(iSpeed);
            }

            if (attr === 'opacity') {
                obj.style.opacity = ( iCur + iSpeed ) / 100;
            }else {
                obj.style[attr] = iCur + iSpeed + 'px';
            }
            if ( Math.floor(Math.abs(data[attr] - iCur)) != 0 ) {
                bStop = false;
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            if (name === 'opacity') {
                obj.style.opacity = data[name] / 100;
            }
            func();
        }
    },30);
}
```

**notes:**

1. 自己尝试写了一遍, 还是遇到了一些问题, 不过大致上1到2小时, 差不多可以完成;
2. 以上程序是cst老师的源码, 还有很多地方可以完善, 比如 位于 轮播图下方的 索引点, 我认为用事件委托来实现, 更方便;
   1. 已试着采用事件委托来实现了
3. 一个理解起来很别扭的点:
   1. `lock` 为 `true` 表示锁是打开的状态;
   2. `lock` 为 `false` 表示锁是关闭的状态;
   因为总理解为被动, 总以为 lock 为 true, 表示锁被锁上了...
   所以我自己写的时候, 定义的变量是 locked , 并且初值给的是 false, 这样就不会弄混了;

# 10. 补充bug调试小方法

- [x] demo 10.1

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>bug调试小方法</title>
    <style>
        .wrapper {
            position: relative;
            width: 500px;
            height: 250px;
            border: 1px solid #ddd;
            margin: 100px auto 0;
        }

        .btn {
            position: absolute;
            top: calc(50% - 10px);
            display: inline-block;
            width: 20px;
            height: 20px;
            background-color: #000;

            color: #fff;
            font-weight: bold;
            line-height: 20px;
            text-align: center;

            opacity: 0.3;
            cursor: pointer;
        }

        .leftBtn {
            left: 15px;
        }

        .rightBtn {
            right: 15px;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class='btn leftBtn'>&lt;</div>
        <div class='btn rightBtn'>&gt;</div>
    </div>
    <script>
        const leftBtn = document.querySelector(".leftBtn"),
            rightBtn = document.querySelector(".rightBtn");

        leftBtn.onclick = function () {
            console.log('rightBtn');
        }

        rightBtn.onclick = function () {
            console.log('leftBtn');
        }
    </script>
</body>

</html>
```

**notes:**

1. `console.log()` 多用它来调试, 至于怎么用, 还得自己体会;
   1. 比如上述案例中, 是轮播图里头的一个小片段, 我们在给左右按钮绑定事件的时候, 我们在刚绑定完, 实际上就可以对其进行 '检测' 一下, 看一下到这一步为止, 是否有出错;
   `console.log('rightBtn');` 若右侧按钮的点击事件没问题, 那么会正常打印 rightBtn
   `console.log('leftBtn');` 若左侧按钮的点击事件没问题, 那么会正常打印 leftBtn
   2. 还有在很多地方都可以使用, 比如我们还可以用它来 '检查' 一个函数传入的参数 是否都正确, 先打印出来看看, 如果和我们的预期一样, 那么我们在继续后续操作;
   3. 等等...
2. 除了使用 `console.log()` 输出语句进行调试以外, 还可以使用断点来进行调试, 这就感觉上会比较专业, 但是不熟悉的话, 可能还得不偿失, 目前不强求自己掌握该技能(有必要的话 再去网上找相关的文章来看看), 不过得知道有这样一个方法, 在必要的时候, 尝试用用;
   PS: 还有一点要注意, 多看看 chrome浏览器调试的控制台的组成部分, 刚在调试的时候发现, 有很多很方便的工具, 下面是学习时截取的一小部分;

![Source选项卡下的 Call Stack 和 Scope](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210210100359.png)

通过这张图, 我们可以很明确的看到, 某个函数被调用时, 它内部的this指向是啥?

通过调用栈, 我们还可以直接看到这个函数是在哪, 被那个函数调用的;
eg: `console.log` 这个函数 此时是在 `rightBtn.onclick` 里面被调用的

... 等等, 总之, 一定要慢慢的学会使用 控制台来进行程序的调试, 学会了感觉能省下很多时间;

# 11. 数组部分

`Q:` 为什么要学习数组方法并熟练使用?
`A:` 我们前端主要做的事情就是数据可视化, 数据由后端提供, 这些数据的形式, 大多都是 `{}`(对象) 与 `[]`(数组) 的组合, 所以, 数组是我们经常接触到的数据的一种常见形式, 当我们熟练掌握与之相关的方法后, 可最大程序提高开发效率

`Q:` 为什么要学习源码?
`A:` 1: 为了充分理解对应的数组方法; 2. 已有的原生的数组方法, 也许还不能够满足我们开发中的所有需求, 对于这样的情况来说, 空手造轮子的能力就很重要了, 学习源码的目的也正是为了训练这样的一种能力, 以后学任何库和框架我们都要多深入思考剖析源码，必须具备从无到有的能力;

## 11.1 拓展方法与核心实现

> 原视频 11 + 12

**reference:**

| 本节介绍的数组方法 | mdn                                                                                                        | 描述                                                                                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| forEach            | [link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)     | `forEach()` 方法对数组的每个元素执行一次给定的函数。                                                                                                                        |
| filter             | [link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)      | `filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。                                                                                                   |
| map                | [link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)         | `map()` 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。                                                                                      |
| every              | [link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)       | `every()` 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。                                                                                    |
| some               | [link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)        | `some()` 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。<br> **注意:** 如果用一个空数组进行测试，在任何情况下它返回的都是`false`。 |
| reduce             | [link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)      | `reduce()` 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。                                                                        |
| reduceRight        | [link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight) | `reduceRight()` 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。                                                                       |

---

```js
var personArr = [
    { name: '王港', src: './src/img/3.png', des: '颈椎不好', sex: 'm', age: 18 },
    { name: '刘莹', src: './src/img/5.png', des: '我是谁', sex: 'f', age: 23 },
    { name: '王秀莹', src: './src/img/4.png', des: '我很好看', sex: 'f', age: 25 },
    { name: '刘金雷', src: './src/img/1.png', des: '你没有见过陌生的脸', sex: 'm', age: 15 },
    { name: '刘飞翔', src: './src/img/2.png', des: '瓜皮刘', sex: 'm', age: 20 }
];
```

> 后续demo用到的数据

- [x] **demo 11.1.1**

`Array.prototype.forEach()`

```js
function deal(ele, index, self) {
    console.log(ele, index, self, this);
}
personArr.forEach(deal, this);
```

![demo 11.1.1-1](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210210142343.png)

**notes:**

1. 语法: `arr.forEach(callback(currentValue [, index [, array]])[, thisArg])`
2. 认识参数:
   1. callback 为数组中每个元素执行的函数，该函数接收一至三个参数：
      1. `currentValue` 数组中正在处理的当前元素。
      2. `index` (可选) 数组中正在处理的当前元素的索引。
      3. `array` (可选) forEach() 方法正在操作的数组。
   2. `thisArg` (可选) 当执行回调函数 callback 时，用作 this 的值。

---

```js
var obj = {
    name: '111'
}
function deal(ele, index, self) {
    console.log(this);
}
personArr.forEach(deal, obj);
```

![demo 11.1.1-2](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210210143740.png)

---

模拟一下可视化效果 将用户姓名展示到页面上

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

```js
const oLiArray = document.querySelectorAll("li");
function deal(item, index) {
    oLiArray[index].innerHTML = item.name;
}
personArr.forEach(deal);
```

![demo 11.1.1-3](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210210144238.png)

---

根据 `forEach` 所能实现的功能, 仿写源码

```js
Array.prototype.myForEach = function () {
    let callback = arguments[0],
        self = this,
        len = this.length;
    for(let i = 0; i < len; i++) {
        callback.apply(arguments[1] || window, [self[i], i, self]);
    }
}
```

**notes:**

1. 注意: 第二个参数改变的是 callback 函数中的this指向
   即: 第一个函数中的this指向

---

- [x] **demo 11.1.2**

`Array.prototype.filter()`

过滤出年龄在18岁以上的成员

```js
let newArr = personArr.filter(function (ele, index, self) {
    return ele.age > 18;
});
console.log(newArr);
```

![demo 11.1.2-1](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210210150605.png)

**notes:**

1. 语法: `var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])`
2. 认识参数:
   1. `callback` 用来测试数组的每个元素的函数。 返回 `true` 表示该元素通过测试，保留该元素; 返回 `false` 则不保留。它接受以下三个参数：
      1. `element` 数组中当前正在处理的元素。
      2. `index` 可选 正在处理的元素在数组中的索引。
      3. `array` 可选 filter() 方法正在操作的数组。
   2. `thisArg` 可选 执行 callback 时，用于 this 的值。

---

根据 `filter` 所能实现的功能, 仿写源码

```js
Array.prototype.myFilter = function (func) {
    let _arr = this, len = this.length, newArr = [];
    for (let i = 0; i < len; i++) {
        // func.apply(arguments[1] || window, [_arr[i], i, _arr]) ? newArr.push(_arr[i]) : '';
        if (func.apply(arguments[1] || window, [_arr[i], i, _arr])) {
            newArr.push(_arr[i]);
        }
    }
    return newArr;
}
```

---

- [x] **demo 11.1.3**

`Array.prototype.map()`

所有成员 年龄 * 2

```js
var newArr = personArr.map(function (ele, index, self) {
    ele.age = ele.age * 2;
    return ele;
});
console.log(newArr);
```

![demo 11.1.3-1](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210210153806.png)

---

根据 `map` 所能实现的功能, 仿写源码

```js
Array.prototype.myMap = function (func) {
    var _arr = this, len = this.length, newArr = [];
    for (var i = 0; i < len; i++) {
        newArr.push(func.apply(arguments[1] || window, [_arr[i], i, _arr]));
    }
    return newArr;
}
```

---

- [x] **demo 11.1.4**

`Array.prototype.every()`

判断是否 **所有** 成员的年龄都大于10, 20

```js
// 要求每一个成员都满足条件
console.log(personArr.every(function (ele, index, self) {
    return ele.age > 10;
})); // true

console.log(personArr.every(function (ele, index, self) {
    return ele.age > 20;
})); // false
```

---

根据 `every` 所能实现的功能, 仿写源码

```js
Array.prototype.myEvery = function (func) {
    var _arr = this, len = this.length, flag = true;
    for (var i = 0; i < len; i++) {
        if (!func.apply(arguments[1] || windonw, [_arr[i], i, _arr])) {
            flag = false;
            break;
        }
    }
    return flag;
};
```

---

- [x] **demo 11.1.5**

`Array.prototype.some()`

判断是否 **存在** 成员的年龄大于 20, 25

```js
console.log(personArr.some(function (ele, index, self) {
    return ele.age > 20;
})); // true
console.log(personArr.some(function (ele, index, self) {
    return ele.age > 25;
})); // false
```

---

根据 `some` 所能实现的功能, 仿写源码

```js
Array.prototype.mySome = function (func) {
    var _arr = this, len = this.length, flag = false;
    for (var i = 0; i < len; i++) {
        if (func.apply(arguments[1] || windonw, [_arr[i], i, _arr])) {
            flag = true;
            break;
        }
    }
    return flag;
};
```

---

- [x] **demo 11.1.6**

`Array.prototype.reduce()`

reduce 传递一个参数和传递两个参数的区别


`传一个参数` 对比 `传两个参数`

```js
personArr.reduce(function (prev, icur, index, self) {
    if(prev){
        console.log(prev.name); // 第一次执行函数体，prev是数组的第一个成员
    }
    console.log(icur.name); // 第一次执行函数体，icur是数组的第二个成员
    console.log(index); // 从第二个成员开始
}); // reduce只传入一个参数
```

```js
personArr.reduce(function (prev, icur, index, self) {
    if (typeof prev === 'object') {
        console.log(prev.name); // 第一次执行函数体，prev是数组的第一个成员
    } else {
        console.log(prev);
    }
    console.log(icur.name); // 第一次执行函数体，icur是数组的第二个成员
    console.log(index); // 从第二个成员开始
    return 666;
}); // reduce只传入一个参数
```

```js
var obj = {
    name: 'duyi'
};
personArr.reduce(function (prev, icur, index, self) {
    console.log(prev.name); // 第一次执行函数体，prev是reduce的第二个参数
    console.log(icur.name); // 第一次执行函数体，icur是数组的第一个成员
    console.log(index); // 下标从0开始
    return icur; // icur 作为函数下一次执行时的第一个参数 prev
}, obj); // 传入第二个参数，这个参数是函数第一次执行时的prev值
```

![demo 11.1.6-1](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210210154546.png) ![demo 11.1.6-2](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210210154854.png) ![demo 11.1.6-3](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210210155115.png)

**notes:**

1. prev会自动更新成函数上一次执行时的return值
2. `reduce` 还有很多细节没讲, 它的功能很强大, 详细内容见 [reduce mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

---

reduce应用场景介绍: `解析cookie`

`document.cookie` 即可获取 cookie值

`PSTM=1526700942; BIDUPSID=554B58935726788C9635D849B5BC0A60; BD_UPN=12314753; sug=3; sugstore=1; ORIGIN=0; bdime=0; BAIDUID=DBACC7EB61231C6524A91ED28DA81748:SL=0:NR=10:FG=1; H_PS_PSSID=; ispeed_lsm=0; BDSFRCVID=xLKsJeC62Agu2W6774uNhah4GWKkPvRTH6aoQCgBjOKzRAwtoJVwEG0PjM8g0KA-NhpBogKKB2OTHncP; H_BDCLCKID_SF=tJPfoKIXJKP3fP36qRbHh4ItbfR-etJXfanQKtOF5l8-hCQEWhODj6-FDeck0xP8L-DLsRrd5ncxOKQpyJKBKpDw2lrpa-rb3HbKonjN3KJms-P9bT3vLtDVLxjX2-biW2uH2MbdaJOmbC_CD5KajToBeU7H5D6hKCoMsJvHHJOoDDvY-xj5y4LdjG5fLRTkBC_f_h3H0RnHjKbj-foMyft73-Aq54RiWaKD-JTp-ln-D-bsDPAVQfbQ0M6uqP-jW26aBbD5yJ7JOpvtDxnxy-CS0aC8q6t8tb-tV-35b5rWjJrI-tTJbnL_hx605C62aJ3xXt5bWJ5TMCoqLpb6eMRWjPJ-t-vK2nnxaKThKlvjShPC-frZyJFlLno3KlRR2RczBl6O3l02Vhb9e-t2yUoDbaJMW4RMW23Goq7mWnrjVKFwej-BDTv0epJf-K6O2Coh3Rrj5-5HDRcY-DTjh6PPebneBtQmJJrC0-5PWlAbMIbG3P7HM501DlOfWp5ZQg-q3R7u5R3YhKImbbKM2R0eKPJI0x-jLIQuVn0MW-KVeK3TXtnJyUPYD4nnBP62LnLDoIKKfCIbhCv65nt_2-FHbxQXK-btKCoBBRD8Kb7VKROken7dyntpbt-qJfoMbRrU_D05JP5FjbjdjMJRyPPr5R5nBT5Kaa6m0ho_Bhv0Vlj65-nk3R-kQN3TafuO5bRi566k2PJIDn3oyUKKXp0nhxbTqtJHKbDDVC_KtfK; delPer=0; BD_CK_SAM=1; PSINO=2; BDORZ=FFFB88E999055A3F8A630C64834BD6D0; BDSVRTM=0`

```js
var cookie = ''; // 太长了 放上面了
function parseCookie(str) {
    var obj = {}, arr = null;
    arr = str.split('; ');
    arr.reduce(function (prev, icur, index, self) {
        var icurArr = icur.split('=');
        prev[icurArr[0]] = icurArr[1];
        return prev;
    }, obj);
    return obj;
}
var cookieObj = parseCookie(cookie);
console.log(cookieObj);
```

![demo 11.1.6-4](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210210160308.png)

**notes:**

1. 采用的是 `递归` 的思想

---

根据 `reduce` 所能实现的功能, 仿写源码

```js
Array.prototype.myReduce = function (func) {
    var _arr = this, len = this.length, nextValue = arguments[1];
    for (var i = 0; i < len; i++) {
        nextValue = func.apply(arguments[2] || window, [nextValue, _arr[i], i, _arr]);
    }
    return nextValue;
}
```

---

> reduceRight 就是和 reduce 反一下, 到目前为止 还没接触到有人用它... 所以 它的话 就不记笔记了 需要的话 直接上mdn上瞅瞅就好

## 11.2 条件筛选组件

> 原视频 13

这一部分写的是一个 过滤功能的小demo, 先自己把效果给实现以下, 然后再听最后一节的 有关该小demo的优化内容;

- [x] **demo 11.2.1**

单条件过滤

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>单条件过滤</title>
    <link rel="stylesheet" href="./src/css/index.css">
</head>

<body>
    <!-- .wrapper>(.sWrapper>input[class='sText']+span[class='btn']*3)+.flWrapper>ul>(li>img[src='']+p[class='name']+p[class='des'])*5 -->

    <div class="wrapper">
        <div class="sWrapper">
            <input type="text" class="search">
            <span class="btn" data-sex='m'>Male</span>
            <span class="btn" data-sex='f'>Female</span>
            <span class="btn active" data-sex='a'>All</span>
        </div>
        <div class="friendList">
            <ul>
                <!-- 以下结构由js来生成 -->
                <!-- <li>
                    <img src="./src/img/1.png" alt="">
                    <p class="name">王港</p>
                    <p class="des">颈椎不好</p>
                </li>
                <li>
                    <img src="./src/img/2.png" alt="">
                    <p class="name"></p>
                    <p class="des"></p>
                </li>
                <li>
                    <img src="./src/img/3.png" alt="">
                    <p class="name"></p>
                    <p class="des"></p>
                </li>
                <li>
                    <img src="./src/img/4.png" alt="">
                    <p class="name"></p>
                    <p class="des"></p>
                </li>
                <li>
                    <img src="./src/img/5.png" alt="">
                    <p class="name"></p>
                    <p class="des"></p>
                </li> -->
            </ul>
        </div>
    </div>
    <script src='./src/js/index.js'></script>
</body>

</html>
```

```css
* {
    padding: 0px;
    margin: 0px;
    list-style: none;
}

/* searchWrapper section  style  */
.wrapper {
    margin: 100px auto 0px;
    width: 400px;
    border: 1px solid #ccc;
    border-radius: 5%;
    padding: 10px 15px;
}

.wrapper .sWrapper {
    margin-bottom: 10px;
}

.wrapper .sWrapper .search {
    width: 220px;
    height: 25px;
    padding-left: 10px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #777;
}

.wrapper .sWrapper .btn {
    cursor: pointer;
    color: #3c8dff;
    padding: 0px 5px;
    border-radius: 4px;
}

.wrapper .sWrapper .btn.active {
    color: #fff;
    background: #3c8dff;
}

/* friendList section style */
.wrapper .friendList ul li {
    position: relative;
    padding: 10px 0 10px 50px;
    border-bottom: 1px solid #999;
}

.wrapper .friendList ul li:last-child {
    border-bottom: none;
}

.wrapper .friendList ul li img {
    position: absolute;
    left: 0px;
    top: 10px;
}

.wrapper .friendList ul li .name {
    margin-bottom: 3px;
}

.wrapper .friendList ul li .des {
    font-size: 12px;
    color: #666;
}
```

```js
// 单条件过滤
var personArr = [{
        name: '王港',
        src: './src/img/3.png',
        des: '颈椎不好',
        sex: 'm',
        age: 18
    },
    {
        name: '刘莹',
        src: './src/img/5.png',
        des: '我是谁',
        sex: 'f',
        age: 23
    },
    {
        name: '王秀莹',
        src: './src/img/4.png',
        des: '我很好看',
        sex: 'f',
        age: 25
    },
    {
        name: '刘金雷',
        src: './src/img/1.png',
        des: '你没有见过陌生的脸',
        sex: 'm',
        age: 15
    },
    {
        name: '刘飞翔',
        src: './src/img/2.png',
        des: '瓜皮刘',
        sex: 'm',
        age: 20
    }
];

// 选中页面元素
const oUl = document.querySelector("ul"),
    oInput = document.querySelector("input"),
    oButtonArr = Array.from(document.querySelectorAll(".btn"));

console.log(
    oUl,
    oInput,
    oButtonArr
);

/**
 * 渲染页面
 * @param {Array} data 对象数组
 */
function renderPage(data) {
    var htmlStr = '';
    data.forEach(function (ele) {
        htmlStr += `<li>
        <img src="${ele.src}" alt="">
        <p class="name">${ele.name}</p>
        <p class="des">${ele.des}</p>
    </li>`;
    })
    oUl.innerHTML = htmlStr;
}

renderPage(personArr);



oInput.oninput = function () {
    renderPage(filterArrByText(personArr, this.value));
}

/**
 * 根据用户输入的指定关键字来过滤信息
 * @param {Array} data 对象数组
 * @param {String} text 过滤依据的关键词
 */
function filterArrByText(data, text) {
    if (!text) { // 若用户没有输入关键词 对数据进行过滤 那么原始数据不变 直接返回即可
        return data;
    } else {
        return data.filter(function (ele) {
            return ele.name.indexOf(text) != -1; // 将所有姓名符合条件成员返回
        });
    }
}

/**
 * 根据性别进行过滤
 * @param {Array} data 对象数组
 * @param {String}} sex 性别
 */
function filterArrBySex(data, sex) {
    if (sex == 'a') {
        return data;
    } else {
        return data.filter(function (ele) {
            return ele.sex == sex;
        });
    }
}


var lastActiveBtn = oButtonArr[oButtonArr.length - 1];

oButtonArr.forEach(function (ele) {
    ele.onclick = function () {
        changeActive(this);
        renderPage(filterArrBySex(personArr, this.dataset.sex));
    }
});

function changeActive(curActiveBtn) {
    curActiveBtn.classList.add('active');
    lastActiveBtn.classList.remove('active');
    lastActiveBtn = curActiveBtn;
}
```

**notes:**

1. 这种过滤方式的缺点很明显: 就是过滤的条件只能有一个, 不能叠加;

![demo 11.2.1-1](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210210235144.png) ![demo 11.2.1-2](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210210235155.png) ![demo 11.2.1-3](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210210235219.png) ![demo 11.2.1-4](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210210235226.png)

---

- [ ] **demo 11.2.2**

多条件过滤的第一种实现方式 `创建全局变量 - 条件迭代`

```js
var personArr = [{
        name: '王港',
        src: './src/img/3.png',
        des: '颈椎不好',
        sex: 'm',
        age: 18
    },
    {
        name: '刘莹',
        src: './src/img/5.png',
        des: '我是谁',
        sex: 'f',
        age: 23
    },
    {
        name: '王秀莹',
        src: './src/img/4.png',
        des: '我很好看',
        sex: 'f',
        age: 25
    },
    {
        name: '刘金雷',
        src: './src/img/1.png',
        des: '你没有见过陌生的脸',
        sex: 'm',
        age: 15
    },
    {
        name: '刘飞翔',
        src: './src/img/2.png',
        des: '瓜皮刘',
        sex: 'm',
        age: 20
    }
];

// 选中页面元素
const oUl = document.querySelector("ul"),
    oInput = document.querySelector("input"),
    oButtonArr = Array.from(document.querySelectorAll(".btn"));

// 定义一个全局变量 state 存放每次转状态切换时的文本值 text 和 性别值 sex
let state = {
    text: '', // 默认输入框中的文本为 空
    sex: 'a' // 默认显示所有成员
}

console.log(
    oUl,
    oInput,
    oButtonArr
);

/**
 * 渲染页面
 * @param {Array} data 对象数组
 */
function renderPage(data) {
    var htmlStr = '';
    data.forEach(function (ele) {
        htmlStr += `<li>
        <img src="${ele.src}" alt="">
        <p class="name">${ele.name}</p>
        <p class="des">${ele.des}</p>
    </li>`;
    })
    oUl.innerHTML = htmlStr;
}

renderPage(personArr);

oInput.oninput = function () {
    state.text = this.value;
    let newArr = filterArrByText(personArr, state.text);
    renderPage(filterArrBySex(newArr, state.sex));
}

/**
 * 根据用户输入的指定关键字来过滤信息
 * @param {Array} data 对象数组
 * @param {String} text 过滤依据的关键词
 */
function filterArrByText(data, text) {
    if (!text) { // 若用户没有输入关键词 对数据进行过滤 那么原始数据不变 直接返回即可
        return data;
    } else {
        return data.filter(function (ele) {
            return ele.name.indexOf(text) != -1; // 将所有姓名符合条件成员返回
        });
    }
}

/**
 * 根据性别进行过滤
 * @param {Array} data 对象数组
 * @param {String}} sex 性别
 */
function filterArrBySex(data, sex) {
    if (sex == 'a') {
        return data;
    } else {
        return data.filter(function (ele) {
            return ele.sex == sex;
        });
    }
}


var lastActiveBtn = oButtonArr[oButtonArr.length - 1];

oButtonArr.forEach(function (ele) {
    ele.onclick = function () {
        changeActive(this);
        state.sex = this.dataset.sex; // 将此时的 sex 值 保存至全局
        let newArr = filterArrBySex(personArr, state.sex);
        renderPage(filterArrByText(newArr, state.text));
    }
});

function changeActive(curActiveBtn) {
    curActiveBtn.classList.add('active');
    lastActiveBtn.classList.remove('active');
    lastActiveBtn = curActiveBtn;
}
```

**notes:**

1. 以下是结果图, 以及和 `demo 11.2.1` 相比, 发生变动的内容

![demo 11.2.2-1](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210211000917.png) ![demo 11.2.2-2](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210211000943.png) ![11.2.2-3](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210211000957.png) ![11.2.2-4](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210211001013.png)

- [ ] **demo 11.2.3**

> 原视频 14

```js
// server - front data  personArr
let personArr = [{
        name: '王港',
        src: './src/img/3.png',
        des: '颈椎不好',
        sex: 'm',
        age: 18
    },
    {
        name: '刘莹',
        src: './src/img/5.png',
        des: '我是谁',
        sex: 'f',
        age: 23
    },
    {
        name: '王秀莹',
        src: './src/img/4.png',
        des: '我很好看',
        sex: 'f',
        age: 25
    },
    {
        name: '刘金雷',
        src: './src/img/1.png',
        des: '你没有见过陌生的脸',
        sex: 'm',
        age: 15
    },
    {
        name: '刘飞翔',
        src: './src/img/2.png',
        des: '瓜皮刘',
        sex: 'm',
        age: 20
    }
];

// dom 感受事件发生 => 更改状态 => 影响视图
// 需求的增加 事件越来越多  状态越来越多  管理状态 合并行为

// initial letiable
const oUl = document.querySelector("ul"),
    oInput = document.querySelector('input');


/* createStore.js */
function createStore(initialState) {
    let state = initialState || {};
    let list = [];

    /**
     * 用于读取 state 中 对应 name 所指定的 value 值
     * @param {Striing} type name
     */
    function getState(type) {
        return state[type];
    }

    /**
     * 依据此时新的状态 action 来更新 state
     * 并执行之前订阅过的函数
     * (也就是每当 state 改变发生改变, 就重新过滤)
     * @param {Object} action 新的行为(新的状态)
     */
    function dispatch(action) {
        state[action.type] = action.value;
        // 调用之前订阅过的函数
        list.forEach(function (ele) {
            ele();
        })
    }

    /**
     * 订阅函数
     * @param {Function} func 函数
     */
    function subscribe(func) {
        list.push(func)
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

/* combineFilter.js */
/**
 * 合并过滤方法
 * @param {Object} config 包含所有过滤方法的对象
 */
function combineFilter(config) {
    return function (data) { // 闭包
        for (let prop in config) {
            data = config[prop](data, store.getState(prop));
        }
        return data;
    }
}


let lastFilterArr = combineFilter({
    text: filterArrByText,
    sex: filterArrBySex
});

/* filterArrByText.js */
function filterArrByText(data, text) {
    if (!text) {
        return data;
    } else {
        return data.filter(function (ele) {
            return ele.name.indexOf(text) != -1;
        });
    }
}

/* filterArrBySex.js */
function filterArrBySex(data, sex) {
    if (sex == 'a') {
        return data;
    } else {
        return data.filter(function (ele) {
            return ele.sex == sex;
        })
    }
}

let store = createStore({
    text: '',
    sex: 'a'
});

store.subscribe(function () {
    // 更新页面或者更新视图的一个作用
    renderPage(lastFilterArr(personArr));
});

// 数据渲染页面
function renderPage(data) {
    // 遍历
    let htmlStr = '';
    oUl.innerHTML = ''; // why
    data.forEach(function (ele) {
        htmlStr += `<li>
        <img src="${ele.src}" alt="">
        <p class="name">${ele.name}</p>
        <p class="des">${ele.des}</p>
    </li>`;
    });
    oUl.innerHTML = htmlStr;
}

renderPage(personArr);

function debounce (handler, delay) {
    let timer = null;
    return function () {
        let _self = this, _arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            handler.apply(_self, _arg);
        }, delay);
    }
}

// filter folder 处理行为 
oInput.oninput = debounce(function () {
    store.dispatch({
        type: 'text',
        value: this.value
    });
}, 500);


//btn style 

let oBtnArr = [].slice.call(document.getElementsByClassName('btn'), 0);
let lastActiveBtn = oBtnArr[2];

oBtnArr.forEach(function (ele) {
    ele.onclick = function () {
        changeActive(this);
        store.dispatch({
            type: 'sex',
            value: this.dataset.sex
        });
    }
});

function changeActive(curActiveBtn) {
    curActiveBtn.className = 'btn active';
    lastActiveBtn.className = 'btn';
    lastActiveBtn = curActiveBtn;
}
```

**notes:**

1. 有很多非常陌生的内容, 陌生的写法, 不过感觉这么写的话, 效果才更好, 更加灵活, 后期更容易实现拓展; 所以没办法, 就多看, 多练这个最终版的 `demo 11.2.3` 吧! 觉得能从这个demo里面学到不少东西;

![demo 11.2.3-1](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210211005528.png)

# 1. [直播] 深入数组拓展应用一

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

这三节直播课 讲解的项目是 [学生管理系统](http://student_management_system.dahuyou.top/)

