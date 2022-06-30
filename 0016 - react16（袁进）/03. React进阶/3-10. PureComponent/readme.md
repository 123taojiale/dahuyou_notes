# PureComponent

纯组件，用于避免不必要的渲染（运行 render 函数），从而提高效率。

优化：如果一个组件的属性和状态，都没有发生变化，重新渲染该组件是没有必要的。

PureComponent 是一个组件，如果某个组件继承自该组件，则该组件的 shouldComponentUpdate 会进行优化，对属性和状态进行浅比较，如果相等则不会重新渲染。

**注意**

1. PureComponent 进行的是浅比较
   1. 为了效率，应该尽量使用 PureComponent
   2. 要求不要改动之前的状态，永远是创建新的状态覆盖之前的状态（Immutable，不可变对象）
   3. 有一个第三方 JS 库，Immutable.js，它专门用于制作不可变对象
   本节不会介绍 Immutable.js 库的相关内容，后续课程中也许会介绍，先知道有这么一个库，它可以用于制作不可变对象即可。
2. 函数组件，使用 React.memo 函数制作纯组件