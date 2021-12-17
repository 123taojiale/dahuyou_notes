# 02-第一个 echarts 例子

## 前言

- 把官方文档到处都点一点，简单了解一下官方文档的各个组成部分，知道 xxx 在 xxx 位置即可，以便后续查阅。

- echarts 的基本使用，使用 echarts 做一个图表。

## 图表的主要组成部分

参考文章：[慕课 ECharts 图表组成](http://www.imooc.com/wiki/echarts/components#ECharts%20%E5%9B%BE%E8%A1%A8%E7%BB%84%E6%88%90)

为了更好地应用 ECharts 做可视化开发，有必要在深入学习前对图表的组成做一次简单的总览。完整的 ECharts 图表包含如下部分：

<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211217131556827.png" alt="image-20211217131556827" style="zoom:80%;" />

- 标题 title
  title 组件用于渲染图表的标题，含主标题、副标题两部分。 title 组件支持配置位置、文本样式、链接模式等。

- 提示框 tooltip
  当鼠标悬停在图表的某点或坐标轴的某个值上时，以浮层方式展示该点数据信息的组件。提示框内提示的信息还可以通过格式化函数动态指定。

- 图例 legend
  图例是图表的辅助视觉引导组件，用以解释说明图表中各数据序列的含义及图表中数据的筛选。

- 工具栏 toolbox
  图表操作工具栏，内置导出图片、数据视图、动态图表类型切换、数据区域缩放、重置五种工具，但不支持自定义扩展。

- 视觉映射 visualMap
  视觉映射组件可将图表数据投影到视觉通道上，例如通过连续变化的颜色反应图表的数值变化。
  visualMap 组件还支持用户选定指定范围的数据进行展示。

- 时间线 timeline
  timeline 组件提供了一种在多个 option 间连续切换，重新渲染图表视图的能力。
  通常用在图表基本配置不变，但图表数据持续变动的场景。

- 数据范围 dataZoom
  dataZoom 组件用于实现图表区域缩放功能，让用户能够自由聚焦在某片数据区域，又或是概览全局数据。
  dataZoom 组件分内置型、滑动条型、框选型三种。

> 慕课上的 Echarts 入门教程，感觉还是比较全面的，在学习完「陈学辉」老师讲解的 echarts 课程后，再去看一下 慕课 [ECharts 入门教程](http://www.imooc.com/wiki/echarts/echarts.html)，查漏补缺。

## Echarts Enhanced Completion

### 在线链接

- [vscode 插件](https://marketplace.visualstudio.com/items?itemName=ren-wei.echarts-enhanced-completion)
- [github](https://github.com/ren-wei/echarts-enhanced-completion/blob/HEAD/README_en.md)



Echarts Enhanced Completion 是在 vscode 中编辑 echarts 配置项时，提供智能提示的插件。

### 配置

- 在 vscode 中搜索插件名 echarts enhanced completion，然后安装即可。
- 配置
  - `cmd + ,`
  - 搜索 echarts，根据自己的需求编辑好配置即可；

<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211217163657149.png" alt="image-20211217163657149" style="zoom:50%;" />

```json
// settings.json
"echarts-enhanced-completion.language": "中文",
"echarts-enhanced-completion.init.enabled": true,
"echarts-enhanced-completion.init.onlyInit": false,
"echarts-enhanced-completion.init.showPictures": true
// 也可以在 settings.json 中进行配置
```



## [Download](https://echarts.apache.org/handbook/zh/basics/download)

- 从 GitHub 获取
- 从 npm 获取
- 从 CDN 获取
- 在线定制

```html
<!-- 通过 cdn 的方式来引入 echarts
https://www.jsdelivr.com/package/npm/echarts
第一个例子，我们先使用 cdn 的方式来引入 echarts，引入方式很简单，进入上边的链接，复制地址即可。-->
<script src="https://cdn.jsdelivr.net/npm/echarts@5.2.2/dist/echarts.min.js"></script>
```

![image-20211217104940787](https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211217104940787.png)

## Examples

- [demo cxh](../codes/cxh/02-第一个echarts例子.html)
- [demo dahuyou](../codes/dahuyou/test.html)

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
    div {
      width: 500px;
      height: 400px;
      float: left;
    }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/echarts@5.2.2/dist/echarts.min.js"></script>
</head>

<body>
  <div id="chart1"></div>
  <div id="chart2"></div>
  <script>
    // 。。。
  </script>
</body>

</html>
```

- 在页面中写俩 div 作为图表的容器，设定好尺寸；
- 通过 cnd 引入 echarts；

### 柱状图

```js
var myChiart1 = echarts.init(document.getElementById('chart1')); //生成了一个echarts实例

myChiart1.setOption({ //配置图表的参数
  title: {
    text: '柱状图',
  },
  legend: { //图例
    data: ['销量']
  },
  xAxis: { //x轴的配置
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: { //y轴的配置
  },
  series: { // 系列列表
    name: '销量',
    type: 'bar', // 图表的类型
    data: [5, 20, 36, 10, 19, 24] // 图表的数据
  }
});
```



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211217133219503.png" alt="image-20211217133219503" style="zoom:50%;" />

### 饼图

```js
var myChiart2 = echarts.init(document.getElementById('chart2')); //生成了一个echarts实例

myChiart2.setOption({ // 配置图表的参数
  title: {
    text: '饼图',
  },
  series: { // 系列列表
    name: '访问来源',
    type: 'pie',
    roseType: 'angle',
    data: [ // 图表的数据
      {
        value: 235,
        name: '视频广告'
      },
      {
        value: 274,
        name: '联盟广告'
      },
      {
        value: 310,
        name: '邮件营销'
      },
      {
        value: 335,
        name: '直接访问'
      },
      {
        value: 400,
        name: '搜索引擎'
      },
    ]
  }
});
```



<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211217133209974.png" alt="image-20211217133209974" style="zoom:50%;" />

