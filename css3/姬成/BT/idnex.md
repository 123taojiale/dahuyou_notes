# 1. introduction

**1. biref introduction of CSS 3**

1. upgrade version
2. css3's compatible history

| prefix  | browser          |
| ------- | ---------------- |
| -webkit | chrome 和 safari |
| -moz    | firefox          |
| -ms     | IE               |
| -o      | opera            |

```
简介
   CSS3 是 CSS2 的升级版 (升级的内容 即: 后续课程要介绍的点)
   单独使用 CSS3 即可实现一些动画效果 不再需要借助 JS
   相对于 JQuery 的所能实现的动画效果而言 CSS3 的功能更加强大
   动画效果也仅仅是 CSS3 的其中一个功能 还有其他很多的特效也可以使用 CSS3 来实现
   一些属性存在兼容性的问题 需要我们通过添加指定的前缀来解决

注释
   perfix       前缀
   browser      浏览器
   moz          Mozilla
   ms           Microsoft
   o            opera
   chrome 和 safari 的内核都是 webkit 系列的

PS: 在学习过程中, 没必要区分开 某某属性 到底是 CSS2 还是 CSS3
    但是, 若特定的说 某某属性 是 CSS3 的属性
       要么, 这个 CSS3 属性确实很强大
       要么, 这个 CSS3 属性的兼容性还不是很好
```

**2. 相关技术的标准组织**

| 技术       | 标准组织                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| HTML + CSS | [W3C](https://www.w3.org/) (万维网联盟（World Wide Web Consortium）)                                           |
| JavaScript | [ECMA](https://www.ecma-international.org/) (欧洲计算机制造商协会 European Computer Manufacturers Association) |

**3. 两个 CSS 的参考手册**

- reference manual website: http://css.doyoe.com (参考手册)
- Authoritative inquiry website: http://www.caniuse.com (权威查询网站)

```
第二个更权威 (第一个版本很旧了)
```

**4. 后处理器 和 预处理器**

- 预处理器 (pre-processor)
  - [sass](https://www.sass.hk/)
  - [less](https://less.bootcss.com/)
  - [cssNext](https://cssnext.github.io/)

```
sass
less
cssNext插件

预处理器是什么?
  拿 sass 来举个例子
  eg:
    sass 的写法
      $mycolor: #008c8c;
      div {
          p {
              color: $mycolor;
          }
          span {
              display: inline-block;
              height: 10px;
              width: 10px;
          }
      }
    等价于
      div p {
          color: #008c8c;
      }
      div span {
          display: inline-block;
          height: 10px;
          width: 10px;
      }
  用 sass 来写 CSS 很便捷 而且里面还可以 定义 变量 ... 可以将其理解为 CSS 扩展语言 (本质上还是 CSS)

notes
  预处理器 就是让 CSS 写起来更方便的工具... 可以将其理解为一种编译器 我们按照它的新规定来写 CSS 代码
  最后它会将我们写的代码再转化为 正常的 CSS 语法格式
```

- 后处理器 (post-processor)

```
autoprefixer插件 -> 解决 CSS 属性兼容性的问题
  这个插件的作用就是自动帮我们 在属性前面加前缀 (会根据当前最新的兼容性来选择性的加)
  所以我们在写 CSS 属性的时候 差不多都可以不考虑前缀 直接写就成了

  eg:
    我们写的 CSS 代码:
      div {
          border-radius: 50%;
      }
    后处理器处理后的代码:
      div {
          border-radius: 50%;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          ...
      }

notes
  后处理器 做的就是后期的补齐操作 解决的是兼容性的问题
```

> 预处理器 和 后处理器 这部分的内容 和 后续的 webpack 课程相关

- 区别

```
1. CSS 的书写上
   预处理器
      那么我们需要按照它所规定的新的语法规则来编辑 CSS 代码
      最后 我们编辑的 CSS 代码会被翻译为 正常语法格式的 CSS 代码
   后处理器
      我们使用正常语法格式来书写 CSS 代码即可

2. 后期优化方面
   预处理器 不易于 后期优化
      这主要指的是 单独使用 预处理器来编辑 CSS 代码
      因为 即便不使用 后处理器 我们也可以直接使用 预处理器 来解决 CSS 的兼容性问题
      但是 它不是实时更新的 是写死的
   后处理器 易于 后期优化
      因为我们一开始写的就是正常语法的 CSS 代码
      若之后浏览器版本升级 相关的兼容性问题不存在了 那么我们只要再使用 后处理器来处理一下当时编辑好的 CSS 代码文件即可
      这一点和 预处理器 不同, 这是因为 后处理器 它是根据当前的兼容情况来处理兼容性问题的 而 预处理器 解决兼容性问题 是写死的 它解决的仅仅是当时写代码的时候的兼容性问题
   PS: 也许这问题压根就不需要考虑, 因为我们若使用的话, 应该是两者结合起来使用的
       可以先使用预处理器来写 CSS 代码 再将写好的 CSS 代码给转化为正常语法格式的 CSS 代码
       然后再将 转化后的 CSS 代码通过后处理器处理 解决兼容性问题
       各取所需即可
```

> [怎么看待CSS后处理？CSS预处理器和CSS后处理器的区别在哪？ (知乎)](https://www.zhihu.com/question/266405943)

**5. postCSS**

```
是什么
  它是一个工具
  是用 js 实现的 css 的抽象的语法树 (AST Abstract Syntax Tree)
  不能简单的将其归为 预处理器 或 后处理器
  PostCSS 所能执行的任务非常多 同时涵盖了传统意义上的预处理和后处理

作用
  它做的就是生成 AST 之后要做的事 就交给各式各样的插件了
  eg:
    autoprefixer 插件实现了后续代码的补全功能 解决的是 CSS 属性兼容的问题
    那么 PostCSS 这个工具做的实际上就是前半部分 先用这个工具来生成 AST 然后再用 autoprefixer 插件来实现后半部分的功能

PS: webpack 是一个集成化构建工具 那里面会用到 postCSS
    我们要了解的是 postCSS 的机制 要知道它做的是啥
```

# 2. selector

```
CSS3 的选择器 是在 CSS2 选择器的基础上新增了一些
选择器的类型没有改变 还是 CSS2 中的那几类
    由于 不同类型的选择器之间 权重值可能会有所不同
    也就是说 即便 CSS3 新增了一些选择器 但是权重的计算依旧不变 还是 CSS2 的那套规则

使用方面:
    下面要介绍的很多选择器 在实际开发中 几乎都很少用到
    所以 先做到理解即可 后续 如果有哪几个用得上 再重点记忆即可
```

## 2.1 selector1

**Relationship Selectors**

```
Relationship Selectors 关系选择器
```

1. `selector1 > selector2`

```
selector1 > selector2 是直接子元素选择器 与 后代选择器 selector1 selector2 不同
    直接子元素选择器选中的是直接子代 (只能选中 selector1 的儿子 无法选中孙子...)
    后代选择器 选中的不仅仅是儿子 只要是 selector1 里面的都能选中
```

```css
div>span {
    color: #008c8c;
}
```

```html
<div>
    <span>dahuyou2</span>
    <p>
        <span>dahuyou1</span>
    </p>
</div>
```

![20210320084531](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320084531.png)

2. `selector1 + selector2`

```
selector1 + selector2 选中的是下一个满足条件的兄弟节点
```

```css
div+p {
    color: #008c8c;
}
```

```html
<div>dahuyou1</div>
<p>dahuyou2</p>
<p>dahuyou3</p>
<p>dahuyou4</p>
```

![20210320085536](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320085536.png)

```
介绍一种该选择器的应用场景
现在有一个需求, 要让下面相邻的两个 span 之间间隔 10px
```

```css
.item {
    float: left;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 2em;
    border: 1px solid #ddd;
}
```

```html
<div>
    <span class="item">1</span>
    <span class="item">2</span>
    <span class="item">3</span>
    <span class="item">4</span>
</div>
```

![20210320085946](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320085946.png)

```css
.item+.item { /* 选中的是 2 3 4 */
    margin-left: 10px;
}
```

![20210320090407](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320090407.png)

3. `selector1 ~ selector2`

```
选中的 selector1 后面所有的 selector2
selector2 与 selector1 成并列(兄弟)关系
```

```css
span~p {
    color: #008c8c;
}
```

```html
<div>
    <span>dahuyou4</span>
    <p>dahuyou1</p>
    <ul>
        <li>
            <p>dahuyou2</p>
        </li>
    </ul>
    <p>dahuyou3</p>
</div>
```

![20210320093250](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320093250.png)

```
上面介绍的应用场景 我们使用 .item~.item 也可以实现选中 2 3 4
```

**Attribute Selectors**

```
Attribute Selectors 属性选择器
```

```
1. div[class]
   选中带有 class 属性的 div
2. div[class='active']
   选中带有 class 属性 并且 属性值为 active 的 div
3. div[class~='c4']
   选中带有 class 属性 并且属性值中包含独立 c4 的 div
   PS: 这里说的独立是啥意思?
      举个例子
         1. <div class="c4 active"></div>
         2. <div class="fl c4 active"></div>
         3. <div class="c4a active"></div>
      1 和 2 表示的都是 class 属性中包含独立的 c4
4. div[class|='a']
   选中带有 class 属性 并且仅有一个属性值 且该属性值是以 a 或 a- 开头的 div
      举个例子
         1. <div class="a active"></div>
         2. <div class="a"></div>
         3. <div class="a-active"></div>
      选中的是 2 和 3
5. div[class^='a']
   选中带有 class 属性 并且属性值是以 a 开头的 div
      举个例子
         1. <div class="a active"></div>
         2. <div class="b"></div>
         3. <div class="a-active"></div>
      选中的是 1 和 3
6. div[class$='a']
   选中带有 class 属性 并且属性值是以 a 结尾的 div
      举个例子
         1. <div class="a active"></div>
         2. <div class="b a"></div>
         3. <div class="a-active"></div>
      选中的是 2
7. div[class*='a']
   选中带有 class 属性 并且属性值包含 a 的 div
      举个例子
         1. <div class="active"></div>
         2. <div class="b a"></div>
         3. <div class="a-active"></div>
      全都能选中
```

**Pseudo-Element Selectors**

```
Pseudo-Element Selectors 伪元素选择器
   在 CSS2 中学习的两个伪类选择器 before 和 after
   这俩伪类选择器 我们写 一个冒号 或 两个冒号 都好使
   但是下面要介绍的 placeholder 和 selection 两个伪类选择器 必须得写 两个冒号 写一个不好使
1. input::palceholder
   就一个功能 改变 input 文本输入框 的 placeholder 中的文本字体颜色
2. selector::selection
   它的功能就是改变被选中的文本的样式
   仅能设置 3 个属性
      color
      background-color
      text-shadow
```

1. `input::palceholder`

```css
input::placeholder {
    color: #008c8c;
}
```

```html
<input type="text" placeholder="dahuyou">
```

![20210320100928](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320100928.png)

2. `selector::selection`

```css
div:nth-of-type(1)::selection {
    color: #999;
    background-color: #008c8c;
}

div:nth-of-type(2)::selection {
    color: #f40;
    background-color: #999;
}
```

```html
<div>dahuyou1</div>
<div>dahuyou2</div>
<div>dahuyou3</div>
```

![20210320101929](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320101929.png)

## 2.2 selector2

**Pseudo-Classes Selectors**

```
伪类选择器
注意: 伪类选择器修饰的是被选中的元素
```

- `E:not 或 E:nots` `:root` `E:target`

1. `E:not 或 E:nots`

```css
/* 选中页面中所有的 div 不包括 .test */
div:not(.test) {
    color: #008c8c;
}
```

```html
<div class="demo">dahuyou1</div>
<div class="demo">dahuyou2</div>
<div class="test">dahuyou3</div>
```

![20210320104137](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320104137.png)

介绍一个应用场景

```css
* {
    padding: 0;
    margin: 0;
}

ul {
    list-style: none;
    width: 300px;
    margin: 10px auto;
    border: 1px solid #ddd;
}

li {
    height: 50px;
    padding: 0 10px;
    border-bottom: 1px solid #008c8c;
}
```

```html
<ul>
    <li>item01</li>
    <li>item02</li>
    <li>item03</li>
    <li>item04</li>
    <li>item05</li>
</ul>
```

![20210320104709](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320104709.png)

想让 除了 最后一个 li 之外的其他 li 都有 border-bottom

```css
li {
    height: 50px;
    padding: 0 10px;
    /* border-bottom: 1px solid #008c8c; */
}

li:not(:last-of-type) {
    border-bottom: 1px solid #008c8c;
}
```

![20210320104856](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320104856.png)

```css
/* 用 2.1 中介绍的 selector1 + selector2 选择器也可以办到 */
li {
    height: 50px;
    padding: 0 10px;
    /* border-bottom: 1px solid #008c8c; */
}

li+li {
    border-top: 1px solid #008c8c;
}
```

2. `:root`

```
:root 表示的就是 根标签 的意思
   在 HTML语言环境 中 根标签 就是 <html></html>
   所以在 HTML 中
   :root 等价于 html
   但是在其他的语言环境中 根标签 就不再是 <html></html> 了
```

3. `E:target`

```
E:target 表示的是被标记为 target 状态的元素

   如何判断一个元素被标记为 target 状态?
   location.hash = xxx
   xxx 表示被标记为 target 状态的元素的 id 值
   可以直接看 浏览器的 地址栏

通过 :target 我们就可以利用 CSS 来实现 操作一个 html 元素 从而改变另外一个结构上与之不相关的 html 元素
```

```css
:target { /* div:target 写成这样也 ok */
    color: #008c8c;
}
```

```html
<!-- 点击 box1 dahuyou1 变色
点击 box2 dahuyou2 变色 -->
<p>
    <a href="#box1">box1</a>
    <a href="#box2">box2</a>
</p>
<div id="box1">dahuyou1</div>
<div id="box2">dahuyou2</div>
```

![20210320110321](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320110321.png)

[../codes/1. 一键背景切换](../codes/1.%20一键背景切换/index.html)

- `E:first-child` `E:last-child` `E:only-child` `E:nth-child(n)` `E:nth-last-child(n)` `E:first-of-type` `E:last-of-type` `E:only-of-type` `E:nth-of-type(n)` `E:nth-of-last-type(n)`

```
前面提到过: 伪类选择器修饰的是被选中的元素
  比如:
    div:first-child
    此时被选中的元素是 div
    选中的是 div 并且 要求该 div 是第一个 子元素
    不要误以为选中的是 div 下面的第一个子元素
1. div:first-child
   举个例子
      <body>
         <div>1</div> <!-- 第一个 div -->
         <div> <!-- 第二个 div -->
            <div>2</div> <!-- 第三个 div -->
            <p>3</p>
         </div>
      </body>
   选中的是 1 和 2
   注解:
      首先 被选中的元素是 div
      第一个 div 是 body 下的第一个子元素 所以它满足条件 被选中
      第三个 div 是 第二个 div 下的第一个子元素 所以它也满足条件 也被选中
2. div:last-child
   选中的是 div 并且要求该 div 是最后一个子元素 (规则同上)
3. div:only-child
   选中的是 div 并且要求该 div 是唯一的子元素 (规则同上)
4. p:nth-child(n)
   选中的是 p 并且要求该 div 是第 n 个子元素
      eg1: 选中的是第 3 个子元素 并且该元素是 p 元素
         p:nth-child(3) {
             color: #008c8c;
         }

         <div>
             <p>1</p>
             <p>2</p>
             <p>3</p>
             <p>4</p>
             <p>5</p>
         </div>
      选中的是 3

      若把结构修改为下面这样, 那么啥都选不中
         <div>
             <p>1</p>
             <p>2</p>
             <div>div</div>
             <p>3</p>
             <p>4</p>
             <p>5</p>
         </div>

    eg2: 参数可以写变量
         p:nth-child(2n) { /* 2n 表示选偶数 等价于 even */
             color: #008c8c;
         }

         <div>
             <p>1</p>
             <p>2</p>
             <p>3</p>
             <p>4</p>
             <p>5</p>
         </div>
      选中的是 2 和 4
         p:nth-child(2n+1) { /* 2n 表示选奇数 等价于 odd */
             color: #008c8c;
         }
      选中的是 1 和 3 和 5
      其中参数 n 会从 0 开始计数

    eg3: 与 p 同级的兄弟元素 也会参与计数 即便该兄弟元素不是 p 元素
         p:nth-child(2n) {
             color: #008c8c;
         }

         <div>
             <p>1</p>
             <p>2</p>
             <div>div</div>
             <p>3</p>
             <p>4</p>
             <p>5</p>
         </div>
       选中的是 2 和 3 和 5
5. p:nth-last-child(n)
   4 是从前往后查 5 是从后往前查 其余规则同 4

PS: 上面介绍的这 5 个 为一组 它们不常用 相对而言 更加常用的是后续介绍的 5 个
    两组及其类似 不同点在于 第一组的 5 个选择器 会考虑其他类型元素对其的影响
    第二组的 5 个选择器 仅考虑被选中的那一类的元素
```

`E:nth-child()` VS `E:nth-of-type(n)`

```css
div:nth-of-type(2) { /* 选中的是 div 元素 并且要求该 div 元素是所有同级 div 元素中的第二个 div */
    color: #008c8c;
}

p:nth-child(2) { /* 选中的是 p 元素 并且要求该 p 元素是第二个子元素 (选中的实际上是 p1 而非 p2) */
    color: #008c8c;
}
```

```html
<div>
    <div>div1</div>
    <p>p1</p>
    <div>div2</div>
    <p>p2</p>
</div>
```

```
小结:
   第一组 E:first-child E:last-child E:only-child E:nth-child(n) E:nth-last-child(n)
      限制条件更强 一般不会用到
   第二组 E:first-of-type E:last-of-type E:only-of-type E:nth-of-type(n) E:nth-of-last-type(n)
      限制条件相对较弱 更加常用
```

![20210320120201](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320120201.png)

- `E:empty` `E:checked` `E:enabled` `E:disabled` `E:read-only` `E:read-write`

`E:empty`

```
div:empty
  选中 div 并且要求该 div 没有内容

PS: 注释 在 HTML 中不算作内容
    空格 在 HTML 中算作内容
```

```css
div:empty{
    width: 100px;
    height: 100px;
    background-color: #999;
}
```

```html
<div>1</div>
<div> </div>
<div>2</div>
<div><!-- dahuyou --></div>
```

![20210320121255](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320121255.png)

`E:checked`

```css
input:checked {
    width: 50px;
    height: 50px;
}
```

```html
<label for="suprise">
    一个小惊喜
    <input id="suprise" type="checkbox">
</label>
```

[../codes/2. 一个小惊喜](../codes/2.%20一个小惊喜/index.html)

![20210320121826](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320121826.png)

`E:enabled` `E:disabled` `E:read-only` `E:read-write`

```
它们修饰的也都是 input 标签
  E:enabled
    修饰 可以使用的 input 标签
  E:disabled
    修饰 无法使用搞得 input 标签
  E:read-only
    修饰 只读的 input 标签
  E:read-write
    修饰 可读可写的 input 标签
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>修饰input</title>
    <style>
        /* 给所有可以正常使用的文本输入框添加边框 */
        input:enabled {
            border: 1px solid #008c8c;
        }

        /* 给所有不能正常使用的文本输入框设置字体颜色 */
        input:disabled {
            color: #f40;
        }

        /* 给只读的文本输入框添加背景 */
        input:read-only {
            background-color: #999;
        }

        /* 让可读可写的文本输入框中的字体加粗显示 */
        input:read-write {
            font-weight: bold;
        }
    </style>
</head>

<body>
    <input value="dahuyou" type="text" enabled><!-- 默认就是 enabled 不写是这个值 -->
    <input value="dahuyou" type="text" disabled>
    <input value="dahuyou" type="text" readonly><!-- 注意 readonly 的写法 不需要加中间的 - 横杆 -->
    <input value="dahuyou" type="text"><!-- 没有对应的属性 不用写即可 默认就是 可以读写的 -->
</body>

</html>
```

![20210320124226](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320124226.png)

**作业**

[../codes/3. Accordion List](../codes/3.%20Accordion%20List/index.html)

![20210320151418](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320151418.png)

[../codes/4. Tabs](../codes/4.%20Tabs/index.html)


# 3. border&background

## 3.1 border&background1

### 1. `border-radius`

[border-radius mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

`CSS 属性 border-radius 允许你设置元素的外边框圆角。当使用一个半径时确定一个圆形，当使用两个半径时确定一个椭圆。这个(椭)圆与边框的交集形成圆角效果。`

![20210320163051](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320163051.png)

![20210320163151](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320163151.png)

```
清楚 border-radius 是如何切割每个角 形成圆角效果的即可
```

- border-radius 属性值的多种格式

```css
selector {
    border-radius: 10px; /* 4个角 */
    border-radius: 10px 10px; /* 左上 右下 */
    border-radius: 10px 10px 10px; /* 左上 右上左下 右下 */
    border-radius: 10px 10px 10px 10px; /* 左上 右上 右下 左下 */
    border-radius: 10px / 10px; /* 4个角的 水平半径(horizontal radius) 和 垂直半径(vertical radius) 都设置为 10px */
    border-radius: 10px 10px / 10px 10px; /* / 前后为两组 每一组的第 n 个值 表示的是一个角的 水平半径 和 垂直半径 */
    border-radius: 10px 10px 10px / 10px 10px 10px;
    border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px;
}
/* 上面这些写法都是等效的 只不过写法不同罢了 */
```

```css
/* 设置左上角的 水平和垂直半径 为 10px */
selector {
    border-top-left-radius: 10px;
    border-top-left-radius: 10px 10px;
}
```

```css
/* 设置右下角的 水平半径 为 10px 垂直半径 为 20px */
selector {
    border-bottom-right-radius: 10px 20px;
}
```

```css
/* 左上角和右下角的水平半径为 10px 垂直半径为 120px
右上角和左下角的水平半径为 100px  垂直半径为 120px */
selector {
    border-radius: 10px 100px / 120px;
}
```

```
notes
  单位也可以是 % 或其他长度单位 并非必须是 px
  属性值的写法非常多样 遇到陌生的 查就完事
```

- 画一个1/4圆

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>1/4圆</title>
    <style>
        div {
            position: absolute;
            top: calc(50% - 50px);
            left: calc(50% - 50px);

            border: 1px solid #ddd;
            width: 100px;
            height: 100px;

            border-radius: 100px 0 0 0 / 100px 0 0 0;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![20210320165832](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320165832.png)

- 画一个半圆

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>半圆</title>
    <style>
        div {
            position: absolute;
            top: calc(50% - 50px);
            left: calc(50% - 50px);

            border: 1px solid #ddd;
            width: 200px;
            height: 100px;

            border-radius: 100px 100px 0 0 / 100px 100px 0 0;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![20210320165953](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320165953.png)

### 2. `box-shadow`

[box-shadow mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

`CSS box-shadow 属性用于在元素的框架上添加阴影效果。你可以在同一个元素上设置多个阴影效果，并用逗号将他们分隔开。该属性可设置的值包括阴影的X轴偏移量、Y轴偏移量、模糊半径、扩散半径和颜色。`

**语法**

```css
selector {
    /* x偏移量 | y偏移量 | 阴影颜色 */
    box-shadow: 60px -16px teal;

    /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 */
    box-shadow: 10px 5px 5px black;

    /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    /* 插页(阴影向内) | x偏移量 | y偏移量 | 阴影颜色 */
    box-shadow: inset 5em 1em gold;

    /* 任意数量的阴影，以逗号分隔 */
    box-shadow: 3px 3px red, -1em 0 0.4em olive;

    /* 全局关键字 */
    box-shadow: inherit;
    box-shadow: initial;
    box-shadow: unset;
}
```

![20210320171147](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320171147.png)

`认识各个属性值`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>box-shadow</title>
    <style>
        body {
            background-color: #000;
        }

        div {
            position: absolute;
            top: calc(50% - 50px);
            left: calc(50% - 50px);
            width: 100px;
            height: 100px;
            border: 1px solid #ddd;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![20210320171803](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320171803.png)

```css
div {
    box-shadow: 0 0 0 50px #0ff;
}
```

![20210320172027](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320172027.png)

```css
div {
    box-shadow: 10px 20px 0 0 #0ff;
}
```

![20210320172224](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320172224.png)

```css
div {
    box-shadow: 50px 100px 0 0 #0ff;
}
```

![20210320172658](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320172658.png)

```css
div {
    box-shadow: 50px 100px 50px 0 #0ff;
}
```

![20210320172913](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320172913.png)

```css
div {
    /* 重复设置多次 阴影会有加重的效果 */
    box-shadow: 50px 100px 50px 0 #0ff,
                50px 100px 50px 0 #0ff;
}
```

![20210320175110](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320175110.png)

```css
div {
    /* 内阴影和外阴影相同 只要加上一个 inset 属性值即可实现内阴影效果 */
    box-shadow: inset 10px 20px 10px 0 #0ff;
}
```

![20210320173246](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320173246.png)

```css
div {
    /* 文字 在内阴影的上面 显示
    内阴影 在背景的上面 显示 */
    color: #fff;
    background-color: #999;
    box-shadow: inset 10px 20px 10px 0 #0ff;
}
```

```html
<div>Lorem ipsum dolor sit amet consectetur.</div>
```

![20210320181224](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320181224.png)

`以上案例几乎都只设置了一个值 但是 我们也可以多同时设置多个值 注意: 先设置的会覆盖在后设置的上面`

```css
/* 先写的 box-shadow 和 后写的 box-shadow 若有重叠区域 那么先写的会覆盖后写的 */
div {
    box-shadow: 10px 20px 0 0 green,
        20px 10px 10px 0 red,
        10px -20px 10px 0 blue,
        -20px -20px 10px 0 yellow,
        0 0 100px 10px #fff;
}
```

![20210320174637](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320174637.png)

`展示1`

[../codes/5. box-shadow-1](../codes/5.%20box-shadow-1/index.html)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>box-shadow</title>
    <style>
        div {
            width: 400px;
            margin: 20px auto;
            padding: 20px;
            text-indent: 2em;
            box-shadow:
                inset 0 -3em 3em rgba(0, 0, 0, 0.1),
                0 0 0 2px rgb(255, 255, 255),
                0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
        }

        p {
            text-align: right;
        }

        span {
            color: #999;
        }
    </style>
</head>

<body>
    <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam modi maxime nostrum dolor temporibus fuga,
        dolorum non repellendus autem molestias, sequi id? Error nemo expedita quam laborum, itaque harum obcaecati.<br>
        <p>
            <span>—— dahuyou</span>
        </p>
    </div>
</body>

</html>
```

![20210320181329](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320181329.png)

`展示2`

[../codes/6. box-shadow-2](../codes/6.%20box-shadow-2/index.html)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>box-shadow</title>
    <style>
        body {
            background-color: #000;
        }

        div {
            color: #fff;
            position: absolute;
            left: calc(50% - 150px);
            top: calc(50% - 150px);
            width: 300px;
            height: 300px;
            background-color: red;
            border-radius: 50%;


            box-shadow: inset 0px 0px 50px #fff,
                inset 10px 0px 80px #f0f,
                inset -10px 0px 80px #0ff,
                inset 10px 0px 300px #f0f,
                inset -10px 0px 300px #0ff,
                0px 0px 50px #fff,
                -10px 0px 80px #f0f,
                10px 0px 80px #0ff;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![20210320175522](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320175522.png)

`展示3`

[../codes/7. box-shadow-3](../codes/7.%20box-shadow-3/index.html)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>box-shadow</title>
    <style>
        body {
            background-color: #000;
        }

        div {
            position: absolute;
            left: calc(50% - 25px);
            top: calc(50% - 25px);
            width: 50px;
            height: 50px;
            background-color: #fff;
            border-radius: 50%;

            box-shadow: 0px 0px 100px 50px #fff,
                0px 0px 250px 125px #ff0;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![20210320175629](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320175629.png)

`展示4`

[../codes/8. box-shadow-4](../codes/8.%20box-shadow-4/index.html)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>box-shadow</title>
    <style>
        /* body {
            background-color: #000;
        } */

        div {
            position: absolute;
            border-radius: 5px;
            left: calc(50% - 50px);
            top: calc(50% - 50px);
            width: 100px;
            height: 100px;
            background-color: #fff;

            box-shadow: 0px 1px 2px rgba(0, 0, 0, .1);
            transition: all .6s;
        }

        div::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
            opacity: 0;
            transition: all .6s;
        }

        div:hover {
            transform: scale(1.25, 1.25);
        }

        div:hover::after {
            opacity: 1;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![20210320181436](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320181436.png)

![20210320181553](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320181553.png)

## 3.2 border&background2

### 1. `border-image`

[border-image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image)

`border-image CSS属性允许在元素的边框上绘制图像。这使得绘制复杂的外观组件更加简单，也不用在某些情况下使用九宫格了。使用 border-image 时，其将会替换掉 border-style 属性所设置的边框样式。虽然规范要求使用 border-image 时边框样式必须存在，但一些浏览器可能没有实现这一点。`

`特别注意，若 border-image-source（此值可用border-image-source或border-image简写设置) 的值为 none 或者图片不能显示，则将应用 border-style。`

`border-image 是一个简写属性`

`本节介绍的 CSS3 的属性 border-image 重点在于理解 border-image-slice`

```css
/* 语法 */
selector {
  border-image: border-image-source|[border-image-slice,border-image-width,border-image-outset]|border-image-repeat
}
```

`border-style 失效`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>border-image</title>
    <style>
        div{
            position: absolute;
            top: calc(50% - 50px);
            left: calc(50% - 50px);

            height: 100px;
            width: 100px;
            border: 10px solid #ddd;
            /* border 是一个简写属性
            border-width    10px
            border-style    solid
            border-color    #ddd */
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

![20210320193554](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320193554.png)

```css
div {
    /* 若设置了 border-iamge 那么 border-style 就不好使了 */
    border-image-source: linear-gradient(red, yellow);
    border-image-slice: 10;
}
```

![20210320193733](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320193733.png)

`border-image-slice`

[border-image-slice mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice)

![20210320195957](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320195957.png)

![20210320200040](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320200040.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>border-image</title>
    <style>
        div {
            position: absolute;
            top: calc(50% - 15px);
            left: calc(50% - 15px);

            /* 上 mdn 上下载下来的 border.png 图片的尺寸是 90 * 90 */
            height: 30px;
            width: 30px;
            border: 30px solid #ddd;
            border-image-source: url('./border.png');
            border-image-slice: 30;
            /* 等价于下面这样的写法 它制定的是 4 条分割线的位置
            border-image-slice: 30 30 30 30;
            分别表示这 4 个方向: top right bottom left
            注意: 只能填数字 或 百分数 */
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

![20210320195814](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320195814.png)

```css
div {
    border-image-slice: 100%; /* 默认值是 100% */
}
```

![20210320200518](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320200518.png)

```
notes
  通常情况下 border-width 的大小就是 border-image-slice 的大小
  美工会把背景图给设计好 9 宫格的形式
```

`border-image-outset`

[border-image-outset mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-outset)

`border-image-width`

[border-image-width mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width)

```
若 border-image-width 给定的是 数字 那么它表示的是 border-width 的倍数
若 border-image-width 给定的是 默认值 auto 那么它的值等于 boeder-image-slice (单位是 px)
```

`border-image-repeat`

[border-image-repeat mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-repeat)

```
border-image-repeat 解决的是 5678 4个区域如何填充的问题
```

## 3.3 border&background3

### 1. `background-image`

`linear-gradient` 和 `radial-gradient`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>border-image</title>
    <style>
        div {
            position: absolute;
            top: calc(50% - 50px);
            left: calc(50% - 50px);

            width: 100px;
            height: 100px;

            background-image: linear-gradient(red, green);
            /* 下面的两个颜色渐变 当作背景图片来使
            linear-gradient 表示的是 线性渐变
            radial-gradient 表示的是 径向渐变
             */
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![20210320210740](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320210740.png)

```css
div {
    background-image: radial-gradient(red, green);
}
```

![20210320210749](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320210749.png)

`background-image 多 url`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>background-image</title>
    <style>
        div {
            position: absolute;
            top: calc(50% - 50px);
            left: calc(50% - 125px);

            width: 250px;
            height: 100px;
            border: 2px dashed #008c8c;

            /* 一个容器引入多张图片
            注意: 需要设置好 size 和 repeat 和 position */
            background-image: url(./bz.jpg), url(./dahuyou.jpg);
            background-size: 150px 100px, 100px 100px;
            background-repeat: no-repeat;
            background-position: 0 0, 150px 0;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![20210320212413](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320212413.png)

```
作用
  1. 容错处理
     若第一张图片的路径写错了 那么会展示第二张图片
  2. 改善体验
     若第一张图片的体积过大 请求的时间比较长 那么在请求该图片的时间段内 会优先展示第二张图片
     实现这种需求的第二张图片一般是存在浏览器里的 就是浏览器中保存有第二张图片 在渲染页面时 直接上浏览器里取就行了 不需要请求
```

### 2. `background-origin`

[background-origin mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin)

`background-origin 规定了指定背景图片 background-image 属性的原点位置的背景相对区域。注意：当使用 background-attachment 为fixed时，该属性将被忽略不起作用。`

```
background-origin 属性一共有 3 个值
  content-box
  padding-box
  border-box
它的默认值是 padding-box

注意: 该属性规定的是图片从哪开始渲染 并未规定 图片渲染到哪一部分结束渲染
```

### 3. `background-clip`

[background-clip mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)

`background-clip 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。`

```
background-clip 属性一共有 4 个值 (下面这 4 个值的效果 看一下 mdn 上的展示示例 即可)
  text
  content-box
  padding-box
  border-box (默认值)
```



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            font-size: 100px;
            font-weight: bold;
            text-align: center;
            background-image: url('./bz.jpg');

            /* text 属性值 需要搭配 -webkit-text-fill-color 来使用
            该效果只有在 webkit系列内核的浏览器下才好使 */
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
</head>

<body>
    <div>dahuyou</div>
</body>

</html>
```

![20210320215555](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320215555.png)

### 4. `background-repeat`

[background-repeat mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)

`background-repeat CSS 属性定义背景图像的重复方式。背景图像可以沿着水平轴，垂直轴，两个轴重复，或者根本不重复。`

### 5. `background-attachment`

[background-attachment mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)

`background-attachment CSS 属性决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。`

background-attachment 的三个属性值

```
fixed
  此关键属性值表示背景相对于视口固定。
  即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。
local
  此关键属性值表示背景相对于元素的内容固定。
  如果一个元素拥有滚动机制，背景将会随着元素的内容滚动，并且背景的绘制区域和定位区域是相对于可滚动的区域而不是包含他们的边框。
scroll
  此关键属性值表示背景相对于元素本身固定，而不是随着它的内容滚动（对元素边框是有效的）。
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>background-attachment</title>
    <style>
        .content {
            width: 400px;
            border: 1px solid #ddd;
            height: 500px;
            overflow: scroll;

            background: url('./bz.jpg') 50px 200px / 300px no-repeat;

            /* 把这 3 个属性值 都试试 体验体验区别即可 */
            /* background-attachment: scroll; */
            /* background-attachment: fixed; */
            background-attachment: local;
        }
    </style>
</head>

<body>
    <!-- 手动输入 lorem1000 后 按回车 生成 1000 个假单词用作演示 -->
    <div class="content">lorem1000</div>
    <!-- 为了出现纵向滚动条 -->
    <div style="height: 1000px;"></div>
</body>

</html>
```

![20210320231608](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210320231608.png)

### 6. `background-size`

[background-size mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

`background-size 设置背景图片大小。图片可以保有其原有的尺寸，或者拉伸到新的尺寸，或者在保持其原有比例的同时缩放到元素的可用空间的尺寸。`

- 理解两个属性值

1. `cover`

`缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。和 contain 值相反，cover 值尽可能大的缩放背景图像并保持图像的宽高比例（图像不会被压扁）。该背景图以它的全部宽或者高覆盖所在容器。当容器和背景图大小不同时，背景图的 左/右 或者 上/下 部分会被裁剪。`

2. `contain`

`缩放背景图片以完全装入背景区，可能背景区部分空白。contain 尽可能的缩放背景并保持图像的宽高比例（图像不会被压缩）。该背景图会填充所在的容器。当背景图和容器的大小的不同时，容器的空白区域（上/下或者左/右）会显示由 background-color 设置的背景颜色。`

### 7. `linear-gradient` 和 `radial-gradient`

- [linear-gradient mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient())
- [radial-gradient mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient())

### 8. `color_value`

- `颜色值的多种写法` [color_value mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)

- [currentColor 关键字 mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#currentcolor_%E5%85%B3%E9%94%AE%E5%AD%97)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>css 中转颜色 CurrentColor</title>
    <style>
        div{
            width: 100px;
            height: 100px;
            border: 1px solid currentColor;
            /* border-color 的默认值是 currentColor [box-shadow 颜色的默认值也是它]
            currentColor 表示的是 当前(文字)颜色 */
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![20210321104236](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210321104236.png)

```css
div {
    color: #f40; /* 当我们把文字颜色设置为红色时 border-color 的颜色也会跟着变化 */
}
```

![20210321104258](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210321104258.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>css 中转颜色 CurrentColor</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            color: #f40;
            background-color: currentColor;
            /* 我们可以把 currentColor 当做一个变量来使 */
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![20210321104452](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210321104452.png)

# 4. text

## 4.1 text1

### 1. `text-shadow`

[text-shadow mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow)

`text-shadow为文字添加阴影。可以为文字与  text-decorations  添加多个阴影，阴影值之间用逗号隔开。每个阴影值由元素在X和Y方向的偏移量、模糊半径和颜色值组成。`

- [浮雕效果 和 镂刻效果](../codes/9.%20text-shadow-1/index.html)
- [NO ACCESS 火焰效果](../codes/10.%20text-shadow-2/index.html)
- [兵长砍猴](../codes/11.%20text-shadow-3/index.html)
- [多重阴影效果](../codes/12.%20text-shadow-4/index.html)

![20210321115036](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210321115036.png)

![20210321115929](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210321115929.png)

![20210321115936](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210321115936.png)

![20210321122855](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210321122855.png)

![20210321124106](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210321124106.png)

### 2. `text-stroke`

`描边效果`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>text-stroke 描边效果</title>
    <style>
        body {
            background-color: #000;
        }

        div {
            position: absolute;
            top: calc(50% - 50px);
            left: calc(50% - 150px);

            width: 300px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            /* color: #ddd; */
            font-size: 80px;
            font-weight: bold;

            font-family: simsun;
            /* 仅在 google chrome 下好使
            第一个参数表示的是描边的粗细 第二个参数表示描边的颜色
            成哥的视频讲解中 使用字体 simsun 可以实现把边给描到字体里面
            我在 windows 下测试发现看不到效果 也许只有在 mac 上才能看到效果
            也有可能是和浏览器相关 成哥教学视频用的 chrome 是 70.0 版的 我当前使用的 chrome 是 88.0 版本的 */
            -webkit-text-stroke: 1px #008c8c;
            color: transparent;
        }
    </style>
</head>

<body>
    <div>大忽悠</div>
</body>

</html>
```

![20210321125451](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210321125451.png)

### 3. `@font-face`

[@font-face mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face)

```
作用
  下载外部字体包
语法
  @font-face {
      font-family: '',
      src: url() format(),
        url() format(),
        url() format();
  }
    参数
      font-famlily 用于给引入的字体包命名
      src 外部字体包的 url 用于下载外部字体包

notes
  应用场景
    若是中文的页面 一般不会用它来引入所有的汉字, 因为数量太大了, 2w多个, 请求的时间会很长
    但是英文的页面 差不多就那么 26 个字母 算上大小写 也就 52 个 (可能还包括一些其他特殊字符) 总共算起来也没多少字体 大小可能就在 1MB 左右 这种情况下 也许会使用它来引入字体包
    页面中的一些小图标 有一些图标本质上就是字体 我们也可以用它来引入这些图标
  字体格式
    .ttf truetype 微软 苹果
    .opt opentype 微软 abode (比truetype高级 可以说是它的升级版)
    .woff woff (.tff 和 .opt 的结合版)
    .eat ie
    .svg H5
    不同格式之间的区别 优缺点 啥的 涉及到操作系统底层的东西了... 这里不作详细说明
  format (字体格式提示器)
    MIME协议 ((Multipurpose Internet Mail Extensions)多用途互联网邮件扩展协议)
      该协议被内置到了浏览器身上 主要用于打开一些浏览器无法识别的文件 比如 .pdf .txt .ttf
      当浏览器无法识别某个文件时 通过 MIME 协议 借助其他程序来识别这些文件 (MIME协议中放的就是映射表 通过它就可以知道 干啥事 找啥人)
      内置到浏览器上的协议 不是实时更新的 但是协议自身是会实时更新的
      比如说 就版本的 MIME协议 无法识别 .woff文件 但是 新版本的 MIME协议 可以识别 而 某个浏览器内置的就是旧版本的 MIME协议 那么它就无法识别该文件 就会导致资源无法请求到 错误代码 404 啥的
    format的作用可以理解为 告诉浏览器引入的是啥文件 就类似于 给 MIME协议 里头添加映射
```

## 4.2 text2

### 1. `white-space`

[white-space mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)

### 2. `tab-size`

[tab-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/tab-size)

### 3. `word-break` `overflow-wrap(word-wrap)`

[word-break mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break)
[overflow-wrap mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-wrap)

### 4. `columns`

[columns mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/columns)


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>columns</title>
    <style>
        div {
            /* 300px 每一列的宽度为 300px
            4 共分为 4 列 */
            columns: 300px 4;
            /* 50px 列与列之间的间隙为 50px */
            column-gap: 50px;
            /* 列与列之间的分割线 */
            column-rule: 1px dashed #008c8c;
        }

        p {
            /* 跨列显示 */
            column-span: all;
            text-align: center;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div>lorem100<p>lorem10</p>lorem500</div>
</body>

</html>
```

![20210321153429](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210321153429.png)

[columns 小说阅读翻页效果](../codes/13.%20columns/index.html)

# 5. box

## 5.1 box1

### 1. `box-sizing: border-box;`

![20210321200728](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210321200728.png)

[box-sizing mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)

```
常见的应用场景
    不知道盒子的具体宽度值 width , 盒子的宽度用 百分比 来表示;
    重点关注的不是内容的尺寸, 而是整个盒子可视区的尺寸;
```

### 2. `overflow`

[overflow mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow)

> 设置一个轴为visible（默认值），同时设置另一个轴为不同的值，会导致设置visible的轴的行为会变成auto。

![20210321202715](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210321202715.png)

[模拟移动端 overflow-x: auto; 的使用](../codes/14.%20overflow-x/index.html)

![20210321211236](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210321211236.png)

### 3. `resize`

[resize mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/resize)

> 如果一个block元素的 overflow 属性被设置成了visible，那么resize属性对该元素无效。

## 5.2 box2

[Flex 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

`flex 和 inline-flex`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>flex 和 inline-flex</title>
    <style>
        div {
            display: inline-flex;
            border: 1px solid #ddd;
        }
    </style>
</head>

<body>
    <div>Lorem ipsum dolor sit amet.</div>
    dahuyou
</body>

</html>
```

![20210322142111](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210322142111.png)

![20210322142117](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210322142117.png)

## 5.3 box3

### 1. `flex-shrink` 计算问题

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>flex-shrink</title>
    <style>
        #content {
            display: flex;
            width: 500px;
        }

        #content div {
            flex-basis: 120px;
            box-sizing: border-box;
            border: 10px solid rgba(0, 0, 0, .2);
        }

        .box {
            flex-shrink: 1;
        }

        .box1 {
            flex-shrink: 2;
        }

        .box2 {
            flex-shrink: 3;
        }
    </style>
</head>

<body>
    <p>The width of content is 500px; the flex-basis of the flex items is 120px.</p>
    <p>A, B have flex-shrink:1 set. C has flex-shrink: 2 set. D and E have flex-shrink:2 set</p>
    <p>The width of D and E is less than the others.</p>
    <div id="content">
        <div class="box" style="background-color:red;">A</div>
        <div class="box" style="background-color:lightblue;">B</div>
        <div class="box1" style="background-color:yellow;">C</div>
        <div class="box2" style="background-color:brown;">D</div>
        <div class="box2" style="background-color:lightgreen;">E</div>
    </div>
</body>

</html>
```

![20210322163329](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210322163329.png)

**分析**

```
这是 mdn 上的一个有关 flex-shrink 的案例 修改了一些数值 通过该案例来了解 flex-shrink 的计算原理
网上的大多数文章都只讲到了它的加权计算问题 但是 它们讲的并不完整 参与加权的数是每一个盒子的 width 值 (但是这是错的)
这里先给出结论 实际上 参与计算的加权的数值 并非 width 或 flex-basis 而是 contentBoxWidth 即: 内容盒的宽度值
这个案例中 的最终结果如下:
    A 和 B
        width: 90px
    C
        width: 80px
    D 和 E
        width: 70px
```

`最终缩放的结果图:`

![20210322164535](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210322164535.png)

`开始时 5 个盒子的宽度值如下表:`

| 盒子 | 可视区宽度<br>(包括content padding border) | 内容盒宽度<br>(contentBoxWidth) |
| ---- | :------------------------------------: | :--------: |
| A    |                 120px                  |   100px    |
| B    |                 120px                  |   100px    |
| C    |                 120px                  |   100px    |
| D    |                 120px                  |   100px    |
| E    |                 120px                  |   100px    |

```
计算过程如下
    1. 先确定要溢出的量是多少
          120px * 5 - 500px = 100px
       将要溢出的尺寸是 100px 也就是说 5个子元素要把这溢出的 100px 给消化掉 每个盒子具体消化多少 是后面计算要确定的值
    2. 再依据每个盒子的 flex-shrink 值 进行加权
       (100px * 1) + (100px * 1) + (100px * 2) + (100px * 3) + (100px * 3) = 1000px
            A             B             C             D             E
       A 占的比重 100px * 1 / 1000px 即 1/10 -> 缩小 10px
       B 占的比重 100px * 1 / 1000px 即 1/10 -> 缩小 10px
       C 占的比重 100px * 2 / 1000px 即 2/10 -> 缩小 20px
       D 占的比重 100px * 3 / 1000px 即 3/10 -> 缩小 30px
       E 占的比重 100px * 3 / 1000px 即 3/10 -> 缩小 30px

       注意: 这里取的宽度值 是 内容盒的宽度值 而非可视区的宽度值 (在这个案例中 虽然取可视区的宽度值来计算 也能得到正确的结果 但是这是错的 [请见下一个案例])
```

`实际参与加权的 并非可视区的宽度 而是 内容盒的宽度`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>flex-shrink</title>
    <style>
        .wrapper {
            width: 500px;
            height: 200px;
            border: 1px solid #ddd;
            display: flex;
        }

        .wrapper div {
            flex-basis: 300px;
            height: 100px;
            box-sizing: border-box;
        }

        .box1 {
            background-color: #008c8c;
            padding: 0 150px;
        }

        .box2 {
            background-color: #f40;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="box1"></div>
        <div class="box2"></div>
    </div>
</body>

</html>
```

![20210322171206](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210322171206.png)

**分析**

```
错误做法
    若宽度取的是盒子的可视区的宽度 那么 由于它们的父级的宽度值为 500px 它们自身的可视区宽度 开始都是 300px 而且它们的 flex-shrink 都是一开始的默认值 1
    所以 结合上述的计算公式 显然可以得知 它们应该平分溢出的这 100px 按这样的逻辑来看的话 .box1 和 .box2 它们应该都缩小 50px
    但是实际结果确实 .box1 没变 而 .box2 被压缩了 100px
正确做法
    由于 .box1 把左右的 padding 设置成了 150px 而且 .box1 和 .box2 都是 border-box
    这就意味着 .box1 的内容盒的宽度没有了 即 内容盒的宽度时 0px 所以此时计算加权值应该这么计算:
       (0 * 1) + (300px * 1) = 300px
        .box1       .box2
    .box1 的缩放值: (1 * 0 / 300px) * 100px 结果是 0
    .box2 的缩放值: (1 * 300 / 300px) * 100px 结果是 100px
```

### 2. `flex-basis` 和 `width`

```
弹性盒子若只写 flex-basis 表示的是这个弹性盒子的 宽度的下限值
width 表示的是该弹性盒子的 宽度的上限值
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>flex-basis</title>
    <style>
        .wrapper {
            margin: 100px auto;
            width: 400px;
            height: 200px;
            border: 1px solid #ddd;
            display: flex;
        }

        .wrapper div {
            height: 100px;
            /* 每个弹性盒子的宽度下限是 100px */
            flex-basis: 100px;
        }

        .wrapper .flex-box1 {
            /* 第一个弹性盒子的宽度上限是 200px */
            width: 200px;
        }

        .wrapper .flex-box2,
        .wrapper .flex-box3 {
            opacity: 0.9; /* 为了看到第一个盒子中溢出的内容 */
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="flex-box1" style="background-color: #999;">a</div>
        <div class="flex-box2" style="background-color: #666;"></div>
        <div class="flex-box3" style="background-color: #333;"></div>
    </div>
</body>

</html>
```

![20210322201540](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210322201540.png)

![20210322201637](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210322201637.png)

![20210322201645](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210322201645.png)

```
注意:
    若弹性盒子的宽度被内容(比如 长英文单词)撑开了 那么即便给它设置了 flex-shrink 它也是不会参与压缩的
    该问题可以通过 work-break: break-word; 来解决 让内容强制换行就行
```

### 3. `flex`

[flex mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)

```
felx             flex-grow   flex-shrink     flex-basis
1                1           1               0%
auto             1           1               auto
none             0           0               auto
0 auto(initial)  0           1               auto
```

- [flex 实现居中效果](../codes/15.%20flex-1/index.html)
- [flex 实现可动态增加的导航栏效果](../codes/16.%20flex-2/index.html)
- [flex 实现 3 栏布局 中间固定 两边自适应](../codes/17.%20flex-3/index.html)
> 伸缩比例的组合 我们可以自定义 可以让某一块固定不伸缩 也可以让某一块伸缩的多一些 或 少一些

- [flex 模拟 float](../codes/18.%20flex-4/index.html)
- [flex 实现 圣杯布局](../codes/19.%20flex-5/index.html)

![20210324111044](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210324111044.png)

![20210324111102](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210324111102.png)

![20210324111011](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210324111011.png)

![20210324112055](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210324112055.png)

![20210324114152](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210324114152.png)

## 5.4 homework

[flex homework](../codes/20.%20flex-homework/index.html)

`看着视频教程里头的图片 仿写了一下 上神马搜索查了一下 但是布局更新了... 所以没找到参考`

![20210324204458](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210324204458.png)

`这是最新的布局`

![20210324204828](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210324204828.png)

# 6. anothers

## 6.1 transition

[transition mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)

`transition CSS 属性是 transition-property，transition-duration，transition-timing-function 和 transition-delay 的一个简写属性。`

## 6.2 cubic-bezier

[cubic-bezier mdn](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/CSS/easing-function)

`B(t) = P₀(1 - t)³ + 3P₁t(1 - t)² + 3P₂t²(1 - t) + P₃t³ ,t ∈ [0,1]`

```
这是三次贝塞尔曲线的函数
P₀ P₃ 分别表示起点和终点
P₁ P₂ 表示的是两个控制点 (n 次贝塞尔曲线 有 n-1 个控制点)
```

![20210325084058](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210325084058.png)

![20210325084648](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210325084648.png)

```
cubic-bezier 是 transition-timing-function 属性的属性值
transition-timing-function 的属性值 如上表所示 也可以是关键字 但实际上 它们都有对应的 cubic-bezier 取值

它们实质上都是设置 过渡动画 的运动效果 这个运动效果我们也可以在控制台微调
```

![20210325085257](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210325085257.png)

```
1 表示 过渡动画 的运动效果
2 表示 cubic-bezier 的取值
P0 和 P3 是起点 (0, 0) 和 (1, 1)
P1 和 P2 是两个控制点(可拖拽) 它们的坐标是 cubic-bezier 的值 即: P1 (0.43, -0.27) P2 (0.54, 1.34)

只要将我们设置好的 cubic-bezier 的值复制到 transition-timing-funtion 中即可, 也就是 transition 的第三个属性值
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>cubic-bezier</title>
    <style>
        div {
            border: 1px solid #f40;
            border-radius: 10px;

            width: 100px;
            height: 50px;

            transition: all 1s cubic-bezier(0.43, -0.27, 0.54, 1.34);
        }

        div:hover {
            width: 500px;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![20210325085924](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210325085924.png)

```
当鼠标悬停上去的时候, 它首先会收缩一部分(小于 100px), 然后再伸, 并且会伸过头一部分(大于 500px), 最后再停留到设定值 500px
```

## 6.3 animation

```
transition 实现的过渡动画 仅能在两个状态之间来回切换 但是 animation 可以实现多个状态的动画
```

[animation mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/Animation)

`animation: name duration timing-function delay iteration-count direction fill-mode play-state;`

![20210325091834](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210325091834.png)

```
notes
    1. animation-timing-function 设置的是每一个状态切换的运动效果 而非一个完整动画的运动效果; (每一个状态切换的运动效果都一样 若想让它们不一样 可以借助 js 来实现)
    2. animation-delay 设置的是一个完整动画的延时 而非 每一个状态切换的延时;
    3. animation-play-state 兼容性不好 基本也用不到
    4. animation-fill-mode 可以设置动画的状态
       forwards 运动结束后 保留最后一帧的状态
       backwards 运动开始前 显示第一帧的状态
       both 就是 forwards + backwards
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>animation</title>
    <style>
        .box {
            position: absolute;
            top: 0;
            left: 0;

            border-radius: 50%;
            width: 100px;
            height: 100px;
            background-color: #008c8c;
            cursor: pointer;

            animation: run 4s, color-change 4s; /* 4s 指动画的总时长 */
        }

        /* @keyframes 关键帧容器
        run 关键帧容器的 名称 */
        @keyframes run {
            0%{ /* 0% 也可以写成 from */
                left: 0;
                top: 0;
            } /* 注意 多个运动状态之间 不需要添加 逗号 作为分隔 */
            25%{ /* 当动画的运动时长达到总时长的 25% 时 的状态值 */
                left: 100px;
                top: 0;
            }
            50%{
                left: 100px;
                top: 100px;
            }
            75%{
                left: 0;
                top: 100px;
            }
            100%{ /* 100% 也可以写成 to */
                left: 0;
                top: 0;
            }
        }

        @keyframes color-change {
            from {
                background-color: red;
            }
            50% {
                background-color: green;
            }
            to {
                background-color: blue;
            }
        }
    </style>
</head>

<body>
    <div class="box"></div>
</body>

</html>
```

```
notes
    当动画结束后, 元素的状态 默认 会回归到动画开始前的状态;
    可以同时给一个元素添加多个动画;
```

## 6.4 animation2

[日升日落 月升月落 效果](../codes/21.%20animation-1/index.html)

## 6.5 step

[timing-function mdn](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/CSS/easing-function)

```
steps() 定义了一个以等距步长划分值域的步长函数。
这个阶跃函数的子类有时也称为阶梯函数。

steps 和 cubic-bezier 一样 都是 timing-function 的属性值

notes
    end 保留当前帧状态, 直到这段动画时间结束 (默认值)
        解决最后一帧直接跳过的问题:
           animation: animation-name steps (num, end) forwards; /* forwards 用于保留最后一帧的状态 */
    start 保留下一帧状态, 直到这段动画时间结束
        注意: 第一帧的跳过无法使用 backwords 来解决 因为动画开始的时刻就是一个时间点 (同样的道理 若steps的第二个参数是 end 当这个动画运动次数为 infinite 时 那么最后一帧也会变为一个时间点 我们是否设置 forwards 属性 都不影响)
    steps(1, end) === step-end
    steps(1, start) === step-start
```

`end 和 start`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>steps</title>
    <style>
        @keyframes run {
            from {
                left: 0px;
            }

            20% {
                left: 50px;
            }

            40% {
                left: 100px;
            }

            60% {
                left: 150px;
            }

            80% {
                left: 200px;
            }

            to {
                left: 250px;
            }
        }

        .demo1,
        .demo2 {
            position: absolute;

            border-radius: 50%;

            width: 100px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            color: #fff;
            background-color: #008c8c;
        }

        .demo1 {
            animation: run 5s steps(1, end) forwards;
            /* animation: run 5s steps(1, end) infinite forwards; */
        }

        .demo2 {
            top: 150px;
            animation: run 5s steps(1, start);
        }
    </style>
</head>

<body>
    <div class="demo1">end</div>
    <div class="demo2">start</div>
</body>

</html>
```

## 6.6 step2

[打字效果](../codes/22.%20animation-2/index.html)
[钟表效果](../codes/23.%20animation-3/index.html)
[跑马效果](../codes/24.%20animation-4/index.html)

## 6.7 rotate

[rotate mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/rotate())

![20210325180713](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210325180713.png)

[rotate3d mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d())

[perspective mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective)

[transform-style mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-style)

[perspective-origin mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective-origin)

[图片前后来回摆动效果](../codes/25.%20animation-5/index.html)

## 6.8 scale

[scale mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/scale())

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>scale</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        div {
            position: absolute;
            top: 100px;
            left: 100px;

            border: 1px solid;
            box-sizing: border-box;
            height: 100px;
            width: 100px;
        }

        .demo1 {
            border-color: #008c8c;
        }

        .demo2 {
            border-color: #f40;
        }
    </style>
</head>

<body>
    <div class="demo1"></div>
    <div class="demo2"></div>
</body>

</html>
```

![20210326084945](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326084945.png)

```
注意点1:
    scale 缩放的并非元素的大小 而是 坐标轴的刻度
```

![20210326085611](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326085611.png)

![20210326085626](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326085626.png)

![20210326085637](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326085637.png)


```
注意点2:
    scale 可以实现叠加操作
```

![20210326090014](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326090014.png)

![20210326090023](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326090023.png)

```
注意点3:
    伸缩和旋转的顺序不同 可能会导致结果也不同
```

![20210326092200](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326092200.png)

![20210326092210](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326092210.png)

```
scaleZ 不易于演示
```

## 6.9 skew

[skew mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/skew())

```
注意点1
    skew 不仅具有倾斜效果 还具有拉伸效果
```

![20210326094230](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326094230.png)

```
注意点2
    skew 和 scale 一样 改变的都是坐标轴
    若先操作了 skew 那么也会对后续有关坐标轴的操作造成影响
```

![20210326093626](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326093626.png)

![20210326093618](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326093618.png)

## 6.10 translate+perspective

`未知尺寸元素的居中问题`

```css
/* 在自身的宽高不确定的前提下 若依旧想令该元素水平垂直居中 */
selector {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

[perspective mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective)

```
perspective 表示 景深 (可叠加)
    作用
        用于增强 3d 效果
    使用
       设置在父级上 (单人视角 一双眼睛)
          perspective: 800px;
          全局 一个 景深
          可以调节 origin 的值
          常用
       设置在每一个子元素上 (多人视角 多双眼睛)
          transform: perspective(800px); /* 注意 若不写在最前面 有一些浏览器就识别不了 */
          每一个子元素都有对应的 景深
          不能调节 origin 的值
          不常用
```

[perspective-origin mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective-origin)

![20210326123025](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326123025.png)

```
用户所能看到的物体的大小 实际上是该物体在屏幕上投影的大小
```

[demos perspective-1](../codes/26.%20perspective-1/index.html)

[transform-style mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-style)

```
transform-style 该属性要设置在直接父级上
```

[照片旋转效果](../codes/27.%20perspective-2/index.html)

## 6.11 perspective2

[backface-visibility mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backface-visibility)

[3D 旋转照片墙](../codes/28.%20perspective-3/index.html)

## 6.12 matrix

[matrix mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix())

```
matrix 矩阵计算规则 transform

矩阵的计算规则: 第一个矩阵的行 * 第二个矩阵的列
    | a, c, e |   | x |   | ax + cy + e |
    | b, d, f | * | y | = | bx + dy + f |
    | 0, 0, 1 |   | 1 |   | 0  + 0  + 1 |
参数说明:
    matrix (a, b, c, d, e, f)
    (x, y) 是变化元素上的每一个像素点的坐标
    结果矩阵就是经过 transform 变化之后的元素各像素点的坐标

eg:
    1. transform: translate(n, m); === transform: matrix(1, 0, 0, 1, n, m)
          | 1, 0, n |   | x |   | x + 0 + n |
          | 0, 1, m | * | y | = | 0 + y + m |
          | 0, 0, 1 |   | 1 |   | 0 + 0 + 1 |
       transform 之前 元素身上的所有像素点的坐标值是 (x, y)
       经过 transform: translate(n, m); 变化之后
       坐标变为 (x + n, y + m)
       notes:
          (1, 0, 0, 1, n, m) 这 6 个值是倒推出来的结果
    2. transform: scale(n, m); === transfor: matrix(n, 0, 0, m, 0, 0)
          | n, 0, 0 |   | x |   | nx + 0  + 0 |
          | 0, m, 0 | * | y | = | 0  + my + 0 |
          | 0, 0, 1 |   | 1 |   | 0  + 0  + 1 |
       原理: 同1
    3. rotate(θ) === matrix(cos(θ), sin(θ), -sin(θ), cos(θ), 0, 0)
    ...
PS: 上面介绍的仅仅是 transform 的二维变化原理 三维变化实际上原理也相同 也是通过矩阵来计算的 不过暂时没有研究的必要
```

```
利用掌握的 matrix 原理 实现图片的 左右翻转效果
思路:
    (x, y) -> (-x, y)

    | a, c, e |   | x |   | ax + cy + e |
    | b, d, f | * | y | = | bx + dy + f |
    | 0, 0, 1 |   | 1 |   | 0  + 0  + 1 |

    matrix (a, b, c, d, e, f);

    a 是 -1
    d 是 1
    其余都是 0

    matrix (-1, 0, 0, 1, 0, 0);
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>matrix</title>
    <style>
        body {
            background-color: #ddd;
        }

        div {
            position: absolute;
            top: 50%;
            left: 50%;
            /* 图片正常展示效果 */
            transform: translate(-50%, -50%);
            /* 图片水平翻转后的展示效果 */
            /* transform: translate(-50%, -50%) matrix(-1, 0, 0, 1, 0, 0); */

            width: 200px;
            height: 200px;
            background-image: url(./img/dahuyou.jpg); /* 路径也许会有误 得修改 */
            background-size: cover;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![20210326182644](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326182644.png)

![20210326182653](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326182653.png)

# 7. screen&px + gpu&layout

> 这一节课程主要讲解的是性能优化的相关问题... 先大致的看一遍 之后得找时间再看 因为有大部分的内容还不理解

## 7.1 screen&px

**CPU 和 GPU**

```
GPU 的算力 比 CPU 强很多 若我们的页面中有设计到图像处理的部分
能用 GPU 来做 就不要用 CPU

动画效果吃 GPU (耗性能) 能少用就尽量少用
```

**浏览器的渲染顺序**

```
...
```

**reflow 和 repaint**

```
reflow:
    改变窗口大小;
    改变字体大小;
    内容的改变, 输入框输入文字;
    激活伪类, 比如 :hover
    操作 class 属性
    脚本操作 DOM
    计算 offsetWidth offsetHeight
    设置元素的 style 属性

repaint:
    仅仅是改变某个元素的背景色 或 文字颜色 或 边框颜色 并且 不影响它周围或内部的布局的属性

repaint 速度快于 reflow
```

[will-change mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change)

`16.7ms`

```
浏览器刷新页面的频率是 1s 60次
平均下来 16.666666667ms 刷新一次页面
若 gpu 可以在一帧时间内渲染好页面, 那么当用户改变页面的元素或者实现动画效果的时候, 将会非常流畅
```

## 7.2 gpu&layout

> 讲解显示器的 成像原理

`空间混色法`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>空间混色法</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .wrapper {
            display: flex;
        }

        .demo {
            width: 0.1px;
            height: 80px;
        }

        .demo:nth-of-type(2n) {
            /* 偶数红色 */
            background-color: #f00;
        }

        .demo:nth-of-type(2n+1) {
            /* 奇数绿色 */
            background-color: #0f0;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <!-- .demo*1000 -->
    </div>
</body>

</html>
```

![20210326193152](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326193152.png)

`像素 & 像点 & 点距`

![20210326193519](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326193519.png)

![20210326193527](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326193527.png)

```
像素 --> 红 绿 蓝 --> 空间混色法
一个像素由 3 个像点构成
    有的公司出的显示器设备的像点 采用的是 图1 点状的 而有的公司采用的是后者 图2 条状的
点距 同色像点之间的距离
    DPI(ppi) 一英寸所能容纳的点距数量 (即: 像素点数量)
    1 in = 2.54 cm
    96dpi ≈  25.4mm / 100 = 0.254mm / 个
    DPI 一开始表示的是打印机在一英寸里面可以打印的墨点数量
    PPI 表示的是一英寸所能容纳的像素点数 (点距数)
        在描述屏幕的清晰度的时候 dpi 和 ppi 可以通用 表示的都是一个意思

ctr 显示屏 求点距的方法 几乎是所有屏幕都通用的
lcd 液晶屏
```

![20210326194407](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326194407.png)

`参照像素 & 设备像素比 dpr`

```
参照像素 (CSS像素 逻辑像素)
    为了解决在不同 dpi 的显示器上显示相同的效果 提出了 参照像素的概念

取值
    96dpi 一臂距离看 显示出来的具体大小

dpr
    物理像素 / CSS像素
    物理像素也就是设备的实际像素
    表示的含义: 一个逻辑像素 需要 多少个物理像素来实现

倘若用户的显示器就是 96dpi 那么显示显示器的实际像素和参照像素的比例为 1 : 1 (dpr = 1)
倘若用户的显示器是 200dpi 那么比例大致为 2 : 1 也就是用户显示器上的两个像素点 被 浏览器视作一个像素点 (dpr ≈ 2)
```

![20210326202041](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326202041.png)

```
美工给我们的 PSD 图 是按照 iPhone6 的标准来给的
```

# CSS3响应式布局

`viewport`

```html
<!-- 适应不同设备 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--
1. width=device-width
    令 viewport 的宽度值 width 等于设备的视口宽度值 device-width
    在 iphone 和 ipad 上, 不论是横屏显示还是竖屏显示
        宽度值 = 竖屏时的宽度 (宽度值都取竖屏时的宽度 不能自适应)

2. initial-scale=1.0
    初始的缩放比例为 1 (也就是不缩放)
    在 windows 和 phone ie 浏览器上, 不论是横屏显示还是竖屏显示
        宽度值 = 竖屏时的宽度 (宽度值都取竖屏时的宽度 不能自适应)

这两条属性设置后 作用的效果都是一样的
两个都写的目的就是因为存在兼容性的问题 (没怎么听懂)
大致的意思:
   有的设备上 1 不好使 而 2 好使, 但有的设备 2 不好使 而 1 好使;
   所以两个一起写 就都好使了
-->
```

![20210326213347](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210326213347.png)

```
移动端 若没有设置 user-scalable=no
那么当用户双击屏幕时 内容将会实现缩放切换
```

`百分比`

```
当我们给页面中的一个元素设置指定的百分比的尺寸时 它参照的是它的父级
倘若它的父级也没有设定指定的尺寸值 那么就会继续向上查找
最终会找到 body -> html -> viewport(设备的视口尺寸)
```

`响应式网页开发方法`

```
...
```

[响应式网页开发课件](../resources/CSS3所需资料/css3响应式资料/css3-lesson7-1.pptx)

