# JS 收官 考试题

**考试题**

[click me](https://www.yuque.com/docs/share/b2342d6c-1c07-4398-ac05-1e8c12ad48ee?#)

**考试题答案**

[click me](https://duyiedu.yuque.com/docs/share/3682f882-0890-493b-8551-c915d94228ff?#)

## 一、选择

`1. 哪个是DOM独有的对象（ C ）`

```
A. History
B. Screen
C. Document
D. Location
```

`2. Location上的哪个属性更改不会刷新页面( D )`

```
A. href
B. search
C. host
D. hash
```

`3. 以下哪个方法没有对数组进行遍历操作( D )`

```
A. Reduce
B. Map
C. Sort
D. Pop
```

`4. userAgent属性不包含下列哪种信息( B )`

```
A. 浏览器渲染引擎
B. 设备分辨率
C. 操作系统
D. 浏览器版本
```

`5. 在js中获取div标签对应的Dom对象oDiv, 执行oDiv.class = 'duyi'，div标签上或出现（ C ）`

```
A．class = 'duyi'
B. className ='duyi'
C. 空
D. class=''
```

![20210402160238](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210402160238.png)

## 二、填空

`1. DOM中文名称为文档对象模型，是js操作文档的中介，BOM中文名称为____，是js操作____的中介。`

- `Broswer Object Model`
- `浏览器`

`2. History可以通过_____方法进行页面回退2步操作。`

- `window.history.go(-2);`

`3. Label标签通过_____属性和其他标签进行关联。`

- `for`

`4. 数组ForEach和普通的for循环哪个遍历效率更高____。`

- `普通 for 循环`

`5. 模拟重力场的课中是通过________公式判断该物体正好运动到浏览器底部。`

- `dom.offsetTop + iSpeedY >= document.documentElement.clientHeight - dom.clientHeight`

![20210402160342](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210402160342.png)

## 三、编程题

`1. 定义数组：var arr = [{name: 'cst', age: '18'}, {name: 'jc', age: '20'}, {name: 'dxm', age: '50'} , {name: 'dcg', age: '30'}]。利用filter和map对数组进行操作：留下name中包含c的，并且让他们的年龄都乘2。`

```js
arr.filter(item => item.name.indexOf('c') !== -1).map(item => {
    item.age *= 2;
    return item;
});
```

![20210402160417](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210402160417.png)

`2. 用你能想到较好的，且通用方式把浏览器输入框上的网址，如：https://www.baidu.com/s?ie=utf-8&f=8。按以下几个部分划分并且创建对象：`

- 协议：`https`
- 主机：`www.baidu.com`
- 路径：`/s`
- 参数：`ie=utf-8&f=8`

此对象属性和属性值形式如下：

```js
{
  protocol:  'https',
  host：'www.baidu.com',
  path: '/s',
  search: {ie:'utf-8',f:'8'}
}
```

```js
const url = new URL('https://www.baidu.com/s?ie=utf-8&f=8');
let result = {};
result.protocol = url.protocol.substr(0, url.protocol.length - 1);
result.host = url.host;
result.path = url.pathname;
result.search = {};

url.search.substr(1).split('&').forEach(item => {
    let key = item.split('=')[0],
        value = item.split('=')[1];
    // console.log(key, value);
    result.search[key] = value;
});
```

![20210402160711](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210402160711.png)

![20210402160722](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210402160722.png)

`3. 实现一个getDom(str)函数，可以根据参数（str形式如：'#id'、'.Class'、'tag'）的不同选择对应选择不同的dom。`

注：
- '#id'此参数为根据id名称选择dom，.Class此参数为根据类名选择dom，'tag'此参数为根据标签名称获取dom。
- 不能使用原生的getElementsByClassName方法

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>test</title>
</head>

<body>
    <div class="box" id="demo">1</div>
    <div>2</div>

    <script>
        function getDom(str) {
            let dom = null;
            if (str.indexOf('.') !== -1) {
                dom = document.querySelector(str);
            } else if (str.indexOf('#') !== -1) {
                dom = document.getElementById(str.substr(1));
            } else {
                // dom = document.getElementsByTagName(str)[0]; // 仅选中一个
                dom = document.getElementsByTagName(str);
            }
            return dom;
        }

        console.log(getDom('.box'));
        console.log(getDom('#demo'));
        console.log(getDom('div'));
    </script>
</body>

</html>
```

![20210402160822](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210402160822.png)

`4. 请尝试写出缓冲运动的效果。`

```js
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

![20210402161011](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210402161011.png)

`5. 请用伪代码（用中文分步描述逻辑）写出轮播图的制作思路。`

- 创建好 html 结构
  - 两个按钮
  - 轮播图容器
  - 索引点
- 给创建好的 html 编辑样式
- 利用 js 来初始化页面结构
  - 拷贝最后一张轮播图 放置在原始第一张轮播图的前面
  - 拷贝原始第一张轮播图 放置在最后一张轮播图的后面
  - 根据原始轮播图的数量 来初始化 索引点
- 每次发生轮播动作时 计算本次需要轮播的总距离 并依据总距离和轮播的总时长 计算出 每一次轮播的需要移动的距离值(也就是 计时器 setinterval 每走一次 需要轮播的距离)
- 没当轮播到边界时 让轮播距离与 原始轮播图容器的总长度 作差

![20210402161024](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210402161024.png)