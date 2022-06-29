# CSS3 考试题

**考试题**

[click me](https://www.yuque.com/docs/share/8e8d1991-4419-436e-aba6-556821cacfa2?#)

**考试题答案**

[click me](https://duyiedu.yuque.com/docs/share/c4f81629-27d5-484c-954d-480564577117?#)

`1. 如何实现一个自适应圆形，下列样式设置正确得是（D） √`

```
A. width：100px;height:100px;border-radius:50px;
B. width：30%;height:30%;border-radius:50%;
C. width：30%;height:0;padding:30%;border-radius:50%;
D. width：30%;height:0;padding-top:30%;border-radius:50%;
```

![20210401201305](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401201305.png)

`2. 在设置渐变背景过程中设置_____角度创建竖直方向渐变，________创建水平方向渐变。( C D ) ×`

```
A. 90deg 0deg
B. 0deg 90deg
C. top to bottom
D. left to right
```

![20210401201347](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401201347.png)

`3. [多选] 如何去掉图片之间的默认空隙（ A D ） √`

```
A. font-size:0;
B. padding:0;
C. margin:0;
D. float:left;
```

![20210401201542](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401201542.png)

`4. [多选] 关于渐进增强与优雅降级下列说法正确的是 （ A B ）。`

```
A. 渐进增强: 针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行处理
B. 优雅降级: 一开始就构建完整的功能，然后再针对低版本浏览器进行兼容处理
C. 渐进增强: 一开始就构建完整的功能，然后再针对低版本浏览器进行兼容
D. 优雅降级: 针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行处理
```

![20210401201721](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401201721.png)

`5. 关于盒模型，下列说法错误的是( C ) `

```
A. 盒子模型有两种：IE6混杂模式盒子模型、标准W3C盒子模型；
B. IE6混杂模式的content部分包含了border和pading；
C. IE6混杂模式的content部分不包含了border和pading；
D. 可以通过box-sizing属性切换盒模型
```

![20210401201812](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401201812.png)

`6. 描述一下伪类与伪元素的区别？`

```
伪类 (pseudo-classes)
    用来选择那些不能够被普通选择器选择的文档之外的元素，比如:hover。
伪元素 (Pseudo-elements)
    用来创建通常不存在于文档中的元素，比如::before。
```

[伪类与伪元素的区别 掘金](https://juejin.cn/post/6844903810951806989)

![20210401201911](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401201911.png)

`7. 实现一个上三角形。`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>上三角</title>
    <style>
        div {
            width: 0;
            height: 0;
            border: 50px solid transparent;
            border-bottom-color: #f40;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

![20210401165559](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401165559.png)

![20210401201934](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401201934.png)

`8. 除了rgb在css3中还可以使用hsl来设置颜色，hsl分别代表什么含义，h() s() l()？`

- H 色调 (Hue)
- S 饱和度 (Saturation)
- L 亮度 (Lightness)

![20210401202004](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401202004.png)

`9. 实现文字溢出打点`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>文字溢出打点显示</title>
    <style>
        div {
            border: 1px solid #ddd;

            width: 200px;
            height: 20px;
            line-height: 20px;
            text-align: center;

            /* 单行文本溢出打点显示 */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    </style>
</head>

<body>
    <div>Lorem ipsum dolor sit amet.</div>
</body>

</html>
```

![20210401170418](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401170418.png)

![20210401202033](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401202033.png)

`10. 利用简易css代码实现以下图形变换`

![20210401170503](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401170503.png)

上图html结构如下：

```html
<div class="box">
    <div class="red"></div>
    <div class="green"></div>
</div>
```

==没看懂==

![20210401172549](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401172549.png)

`11. class名为box的div为class名为wrapper的子级，wrapper的宽为100px,现在为box设置css样式width:calc(50% - 10px);最终box样式为多少(  ) √`

- `40px`

![20210401202122](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401202122.png)

`12. 列举三个css3中新增的选择器。`

- `selector1 > selector2`
- `selector1 + selector2`
- `selector1 ~ selector2`

![20210401202313](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401202313.png)

`13. 一个元素先进行沿着y轴平移再绕着z轴旋转和先绕着z轴旋转再沿着y轴平移，最后的位置显示相同嘛？`

`答: 不相同`

![20210401202424](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401202424.png)

![20210401202535](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401202535.png)

`14. display:none、visibility:hidden:、opacity:0之间的区别`

- display:none，隐藏之后不占位置；visibility:hidden、opacity:0，隐藏后任然占据位置。

![20210401202610](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401202610.png)

`15. 实现居中的四种方式`

```html
<!-- 令 .box 在 .wrapper 中居中显示 -->
<div class="wrapper">
    <div class="box"></div>
</div>
```

- `display: flex;`

```css
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

- `position: absolute;`

```css
.box {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: - width / 2;
    margin-top: - height / 2;
}
```

```css
.box {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
```

```css
.box {
    position: absolute;
    left: calc(50% - width / 2);
    top: calc(50% - height / 2);
}
```

```css
.box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}
```

![20210401202652](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401202652.png)

`16. 浮动会造成哪些问题，为什么要清除浮动`

**问题**

- 父元素看不到浮动元素 造成 height 为 0

**为什么要清除浮动**

- 为了让父级能看到浮动元素 让浮动的子元素来撑开父级的 height

![20210401202742](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401202742.png)

`17. 清除浮动利用伪元素的实现方式`

```css
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
```

![20210401205122](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401205122.png)

`18. 介绍一下css的盒子模型？盒模型分几种类型？如何切换盒模型？`

**CSS 盒模型**

![盒模型](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401183236.png)

- 盒模型 由内到外 依次是
  - contentBox 存放的是内容 用户可见
  - paddingBox 表示内边距 用户可见
  - borderBox 表示的是边框 用户可见 背景会填充到该区域
  - marginBox 表示的是外边距 用户不可见

**盒模型的分类 及 切换**

- 标准盒模型 `box-sizing: content-box;`
- 怪异盒模型 `box-sizing: border-box;`

![20210401205138](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401205138.png)

`19. transition和animation的区别？`

- transition 实现的过渡动画 仅能在两个状态之间来回切换 但是 animation 可以实现多个状态的动画

![20210401205236](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401205236.png)

`20. 前端页面有哪三层构成，分别是什么？作用是什么？`

- HTML 结构
- CSS 样式
- JavaScript 行为

![20210401205319](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401205319.png)

`21. 如何使文本溢出边界显示为省略号？`

```css
selector {
    /* 单行文本溢出打点显示 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

![20210401205357](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401205357.png)

`22. 如何使连续的长字符串自动换行？`

```css
selector {
    word-break: break-all;
}
```

![20210401205423](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401205423.png)

`23. box-shadow传入参数分别代表的含义？`

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

![20210401205611](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401205611.png)

[CSS3 box-shadow 阴影 DUYI](https://duyiedu.yuque.com/docs/share/1a3a659a-6018-4a76-b4bb-4988ec24540e?#)

`24. 元素设置display:inline-block属性基于元素的哪条基准线对齐？如果我们想让元素居中对齐如何设置？`

- `baseline`
- `vertical-align: middle;`

![20210401205634](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401205634.png)

`25. 利用css3弹性盒子进行布局，需要为父级设置___a___属性与属性值，子元素默认呈行级元素排列，如果想让子元素竖直排列，可以设置___b___属性与属性值。`

- `display: flex;`
- `flex-direction: column;`

![20210401205701](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401205701.png)

`26. css3中渐变设置包括__ a___和___b___,如何实现渐变背景45deg，渐变颜色从红到绿到蓝____c____。`

- `linear-gradient 线性渐变`
- `radial-gradient 径向渐变`
- `linear-gradient(45deg, red, green, blue);`

![20210401205801](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401205801.png)

`27. 我们可以通过给一个元素设置__ a___属性实现过渡效果，过渡属性由那几个属性组成？`

- `transition`
- `transition-property` `transition-duration` `transition-timing-function` `transition-delay`

![20210401205840](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401205840.png)

`28. 页面上有一个利用transition实现的div元素的过渡动画，现在想在过渡动画结束出发btn的点击事件，如何实现？可以用简略代码实现。`

```js
btn.ontransitionend = function () {
    // ...
}
```

![20210401205932](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401205932.png)

`29. 如何实现一个元素的倒影，利用____属性实现。`

- `box-shadow`

![20210401205948](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401205948.png)

`30. 什么是网页响应式设计？`

- 根据不同的设备尺寸 展示不同的页面效果

![20210401210006](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210401210006.png)