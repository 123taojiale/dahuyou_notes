# 01-echarts 介绍

## 前言

- [ ] echarts 是什么？
- [ ] echarts 都有哪些特点？
- [ ] echarts 有什么用？
- [ ] 如何学习 echarts？



## echarts 是什么？

echarts 是一个使用 JavaScript 实现的开源可视化库。

- 是使用 js 写的
- 是开源的
- 是一个可视化库

## echarts 都有哪些特点？

echarts 官方文档：[特性](https://echarts.apache.org/zh/feature.html)。下面是个人对这些特性的理解。

- 丰富的可视化类型：它可以绘制的图表类型很多。
- 多种数据格式无需转换直接使用：还不理解啥意思，可能是指「对于不同图表，它们要求的数据格式会有所不同，但是，我们可以通过设置 echarts 内置的一些属性轻易地实现不同数据格式的转换，即：我们只要写一套数据，就可以应用于多个图表。」
- 千万数据的前端展示：它能够支持到的数据量很大，中国国家统计局也在用它，对于我国十多亿的人口，它能带得动。
- 移动端优化：在不同尺寸的移动端设备上，对交互体验做了一些优化。
- 多渲染方案，跨平台使用：最终生成的图表，可以使用 canvas、svg、vml 来渲染；除了 js，其它语言（比如 python、r）也可以用它。
  - vml 不了解
  - 在移动端的话 canvas 的性能不及 svg
- 深度的交互式数据探索 + 多维数据的支持以及丰富的视觉编码手段 + 动态数据 + 绚丽的特效：让用户更轻松地看到他们想要看到的数据。
  - 这些深度的交互体验，其实就是咋们后边要学习的重点，它们是通过图表中的各式各样的「交互组件」来实现的。
- 通过 GL 实现更多更强大绚丽的三维可视化：echarts 可以做 3d 效果的图表。
- 无障碍访问（4.0+）：对于一些残障人士更加友好，比如说视力障碍的人，他们是看不到图表的，但是可以通过语音的方式让他们接收到图表想要呈现的数据信息，echarts 4.0+ 在这一块做了优化。

## echarts 有什么用？

echarts 的作用就是用来绘制图表的。图表的作用就是让数据更加直观地呈现给用户。

## 如何学习 echarts？

### 重点

- 学习图表的各个组成部分，也就是图表的组件；（图表的身上的组件有很多，只要掌握常用的即可，如何分辨常用的，多写自然就知道了）
- 学习各种坐标系，不同的图表绘制在不同的坐标系上；
- 了解 echarts 都能绘制哪些图表，并掌握常见图表的绘制；（常见图表：柱状图、折线图、饼图）
- 实战，学会封装一个简单的 echarts 组件 MyChart.vue，以便后续复用；

### 核心

学习 echarts 的核心在于学习它的配置。其实就是学习图表的组件，一张图表的每个组成部分，都是可以配置的，我们要学习的就是如何通过代码来配置图表。

### 建议

1. 先看官方提供的「[术语速查手册](https://echarts.apache.org/zh/cheat-sheet.html)」，了解图表的组成，坐标系的种类，图表的种类。

   目的是为了让我们在开发的时候，能够更快地定位到配置项。<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211221084637508.png" alt="image-20211221084637508" style="zoom:50%;" />

2. 结合官方提供的「[示例](https://echarts.apache.org/examples/zh/index.html)」，挨个点进去，结合「[配置](https://echarts.apache.org/zh/api.html#echarts)」看源码。

   初学阶段，每种图表类型只要看开始的 1~4 个即可，看不懂的配置就去查文档，然后根据自己的理解在线修改配置，查看效果。<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211221085747597.png" alt="image-20211221085747597" style="zoom:50%;" />

   <img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211221085639190.png" alt="image-20211221085639190" style="zoom:50%;" />

3. 学习阶段，在此阶段，环境简单点即可，简单地新建个 html 文件，然后通过 cdn 的方式引入 echarts 直接用即可。[demo](../codes/index.html)，模板如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>图表示例</title>
  <style>
    .chart {
      width: 600px;
      height: 400px;
    }
  </style>
</head>
<body>
  <div class="chart"></div>
  <script src="https://cdn.jsdelivr.net/npm/echarts@5.2.2/dist/echarts.min.js"></script>
  <script>
  	const chartDom = document.querySelector(".chart");
    const myChart = echarts.init(chartDom); // 初始化 echarts 实例
    const option = {} // 官方示例提供的图表配置项
    option && myChart.setOption(option);
  </script>
</body>
</html>
```

4. 实战阶段，在项目中引入 echarts 并使用。

- [B站 【整理思路】从零开始封装Echarts的Vue组件](https://www.bilibili.com/video/BV1hQ4y127BV?from=search&seid=7525268761011186888&spm_id_from=333.337.0.0)
- [官方文档 快速上手 echarts](https://echarts.apache.org/handbook/zh/get-started/)