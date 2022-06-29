# 03-title组件

## 前言

- 官方文档 [title](https://echarts.apache.org/v4/zh/option.html#title)

本节笔记没啥好记录的，都是很基础的一些内容，直接看官方文档即可。其中涉及到 css 的不少内容。

## Examples

- [demo](../codes/cxh/配置项title.html)

```js
myChiart1.setOption({ //配置图表的参数
  title: {
    id: '',
    show: true, // 是否显示标题组件
    text: '当月销售业绩清单',
    link: 'http://www.baidu.com/',
    target: 'self',
    textStyle: {
      color: 'gold',
      fontStyle: 'italic',
      fontWeight: 'normal',
      fontFamily: 'Microsoft YaHei',
      fontSize: 20,
      lineHeight: 30,
      textBorderColor: 'red',
      textBorderWidth: 2,
      textShadowColor: '#000',
      textShadowBlur: 2,
      textShadowOffsetX: 10,
      textShadowOffsetY: 10,
    },

    //幅标题
    subtext: '陈学辉',
    sublink: 'http://www.qq.com/',
    subtarget: 'self',
    subtextStyle: {

    },


    textAlign: 'left', //两个标题的内容不一样的话，有可能被截断
    padding: [10, 5, 20, 30],
    itemGap: 20,

    left: 10,
    top: 10,

    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: [5, 10, 20, 30],

    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10,
    shadowOffsetX: 5,
    shadowOffsetY: 5,
  },
  legend: { //图例
    data: ['销量']
  },
  xAxis: { //x轴的配置
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: { //y轴的配置
  },
  series: { //系列列表
    name: '销量',
    type: 'bar', //图表的类型
    data: [5, 20, 36, 10, 19, 24] //图表的数据
  }
});
```

<img src="https://gitee.com/dahuyou_top/pic-bed/raw/master/uPic/image-20211218113918495.png" alt="image-20211218113918495" style="zoom:50%;" />

> title 组件使用频率比较高，功能也比较完备，除了可以`自定义样式`、`位置`等基础功能外，还支持`超链接模式`，`主`标题、`副`标题功能等。
