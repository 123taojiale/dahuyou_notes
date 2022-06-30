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

## Empty

![image-20210719105430637](https://gitee.com/dahuyou_top/pic-bed/raw/master/imgs/20210719105440.png)

### 属性

| 属性名 | 含义     | 数据类型 | 是否必填 | 默认值 |
| ------ | -------- | -------- | -------- | ------ |
| text   | 提示文本 | String   | 否       | 无数据 |

## ImageLoader

渐变背景图组件。

![alt tag](http://mdrs.yuanjin.tech/img/20201115132049.gif)

### 属性

| 属性名      | 含义                                           | 数据类型 | 是否必填 | 默认值 |
| ----------- | ---------------------------------------------- | -------- | -------- | ------ |
| original    | 原图路径                                       | String   | 是       | 无     |
| placeholder | 占位图的路径                                   | String   | 是       | 无     |
| duration    | 原图加载完后，透明度由0变为1所持续的时间（ms） | Number   | 否       | 500    |



### 事件

| 事件名 | 含义       | 事件参数 | 参数类型 |
| ------ | ---------- | -------- | -------- |
| load   | 原图加载完 | 无       | 无       |



### 示例

```html
<ImageLoader
  original="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
/>
```



## SiteAside

网站侧边栏组件，宽度和高度要求撑满外层容器。

Contact、Menu 作为 SiteAside 的子组件。

![image-20210719204016350](https://gitee.com/dahuyou_top/pic-bed/raw/master/imgs/20210719204016.png)

### Contact

背景色透明，横向撑满父容器。

![image-20210719152954929](https://gitee.com/dahuyou_top/pic-bed/raw/master/imgs/20210719152954.png)

```
1. 如何实现点击弹出QQ对话？
   设置超链接为：tencent://message/?Menu=yes&uin=要对话的QQ号&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45
2. 如何实现点击弹出发送邮件？
   设置超链接为：mailto:邮件地址
```

### Menu

菜单组件，文章的选中规则采用模糊匹配，只要路径以 /blog 开头即可。

![image-20210719204332502](https://gitee.com/dahuyou_top/pic-bed/raw/master/imgs/20210719204332.png)