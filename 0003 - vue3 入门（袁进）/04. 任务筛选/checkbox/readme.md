**核心要点**

1. checkbox 默认样式的隐藏 `appearance: none`
2. checkbox 选中后，会带有的伪类 `:checked` 可以借助该伪类来区分当前是否是选中状态
3. 有效的点击区域 - 应该是点击左侧的 icon 和右侧的 label 都算是有效的，这个需求可以通过 label 标签来实现，给 label 标签设置 padding，让它的盒模型占满整块区域