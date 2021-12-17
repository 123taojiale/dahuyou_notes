/** @type EChartsOption */
export const barOpts = {
  title: {
    text: 'bar',
  },
  legend: {
    data: ['销量'],
  },
  xAxis: {
    data: ['001', '002', '003', '004'],
  },
  yAxis: {},
  series: {
    type: 'bar',
    name: '销量', // 这里的 name 必须得和 legend 中的 data 值相同，都为 「销量」 否则图例将不显示。
    data: ['10', '23', '3', '7'],
  },
}

export const pieOpts = {
  title: {
    text: 'pie',
  },
  series: {
    name: '访问来源',
    type: 'pie',
    // roseType => https://echarts.apache.org/v4/zh/option.html#series-pie.roseType
    // roseType: 'angle',
    // roseType: 'radius', // 就展示效果而言，angle 和 radius 是一样的。官网没有提供 angle 选项，仅提供了 radius 和 area
    roseType: 'area',
    data: [{
        value: 200,
        name: '视频广告',
      },
      {
        value: 150,
        name: '邮件广告',
      },
      {
        value: 40,
        name: '直接访问'
      },
      {
        value: 400,
        name: '搜索引擎',
      }
    ]
  }
}