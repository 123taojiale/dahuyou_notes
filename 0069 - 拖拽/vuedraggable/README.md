# vuedraggable

**背景介绍：**

工作需求，需要实现页面自定义的功能，其中有一部分需要配置页面的层级，越靠上的 `z-index` 越大，位于靠下的控件之上显示。页面层级区域，就好比图层，这些图层需要支持拖拽。该需求计划使用 vuedraggable 来实现。

先搭建一个简单的 vue2 工程，自行体验一下该组件的效果，能够选配的功能，再将其添加到业务中。

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202209161520428.png)

## 0. 参考资料

- npm：https://www.npmjs.com/package/vuedraggable
- github：https://github.com/SortableJS/Vue.Draggable#readme
- 在线示例：https://sortablejs.github.io/Vue.Draggable/#/simple
- 中文文档（属性和事件都有对应的表格，很直观）：https://www.itxst.com/vue-draggable/tutorial.html

## 1. 安装

- yarn add vuedraggable
- npm i -S vuedraggable

## 2. 属性

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202209161507323.png)

## 3. 事件

![](https://raw.githubusercontent.com/123taojiale/dahuyou_picture/main/blogs/202209161508499.png)