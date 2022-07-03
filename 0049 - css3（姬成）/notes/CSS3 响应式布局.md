# CSS3 响应式布局 {ignore}

[toc]

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