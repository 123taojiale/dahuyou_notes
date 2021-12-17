# 组件说明文档

## Avatar

头像组件

![image-20210718144037066](https://gitee.com/dahuyou_top/pic-bed/raw/master/imgs/20210718144037.png)

### 属性

| 属性名 | 含义     | 数据类型 | 是否必填 | 默认值 |
| ------ | -------- | -------- | -------- | ------ |
| url    | 头像地址 | String   | 是       | 无     |
| size   | 头像尺寸 | Number   | 否       | 150    |

## Icon

图标组件

图标的颜色和大小继承自父元素。

![20210726111947](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210726111947.png)

### 属性

| 属性名 | 含义     | 数据类型 | 是否必填 | 默认值 |
| ------ | -------- | -------- | -------- | ------ |
| type   | 图标类型 | String   | 是       | 无     |

## Pager

翻页组件

![20210713090654](https://gitee.com/dahuyou_top/pic-bed/raw/master/imgs/20210718152734.png)



### 属性

| 属性名        | 含义       | 数据类型 | 是否必填 | 默认值 |
| ------------- | ---------- | -------- | -------- | ------ |
| current       | 当前页码   | Number   | 否       | 1      |
| total         | 总数据量   | Number   | 否       | 0      |
| limit         | 页容量     | Number   | 否       | 10     |
| visibleNumber | 可见页码数 | Number   | 否       | 10     |



### 事件

| 事件名     | 含义     | 事件参数 | 参数类型 |
| ---------- | -------- | -------- | -------- |
| pageChange | 页码变化 | 新的页码 | Number   |
