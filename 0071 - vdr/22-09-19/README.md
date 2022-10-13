# 0. 参考资料

- [npm vue-draggable-resizable-gorkys](https://www.npmjs.com/package/vue-draggable-resizable-gorkys)
- [github](https://github.com/gorkys/vue-draggable-resizable-gorkys)
- [中文版演示地址](https://tingtas.com/vue-draggable-resizable-gorkys/?path=/story/%E5%9F%BA%E6%9C%AC--%E5%9F%BA%E6%9C%AC%E7%BB%84%E4%BB%B6)
- [vue-draggable-resizable-gorkys 组件属性、事件](https://github.com/gorkys/vue-draggable-resizable-gorkys/blob/HEAD/README_ZH.md)

# 1. 属性 Props

## className

- Type: `String`
- Required: `false`
- Default: `vdr`

用于设置可拖动可调整大小的组件的自定义`class`。

```html
<vue-draggable-resizable class-name="my-class">
```

## classNameDraggable

- Type: `String`
- Required: `false`
- Default: `draggable`

用于在启用`draggable`时设置可拖动可调整大小的组件的自定义`class`。

```html
<vue-draggable-resizable class-name-draggable="my-draggable-class">
```

## classNameResizable

- Type: `String`
- Required: `false`
- Default: `resizable`

当启用`resizable`时，用于设置可拖动可调整大小的组件的自定义`class`。

```html
<vue-draggable-resizable class-name-resizable="my-resizable-class">
```

## classNameDragging

- Type: `String`
- Required: `false`
- Default: `dragging`

用于在拖动时设置可拖动可调整大小的组件的自定义`class`。

```html
<vue-draggable-resizable class-name-dragging="my-dragging-class">
```

## classNameResizing

- Type: `String`
- Required: `false`
- Default: `resizing`

用于在调整大小时设置可拖动可调整大小的组件的自定义`class`。

```html
<vue-draggable-resizable class-name-resizing="my-resizing-class">
```

## classNameActive

- Type: `String`
- Required: `false`
- Default: `active`

用于在活动时设置可拖动可调整大小的组件的自定义`class`。

```html
<vue-draggable-resizable class-name-active="my-active-class">
```

## classNameHandle

- Type: `String`
- Required: `false`
- Default: `handle`

用于设置每个句柄元素的自定义公共`class`。 这样你就可以使用选择器`<your class> <handle code>`来单独设置每个句柄的样式，其中`handle code`标识`handle` prop提供的句柄之一。

例如，这个组件：

```html
<vue-draggable-resizable class-name-handle="my-handle-class"></vue-draggable-resizable>
```

呈现以下内容：

```html
<div ...>
  <div class="my-handle-class my-handle-class-tl"></div>
  <div class="my-handle-class my-handle-class-tm"></div>
  <div class="my-handle-class my-handle-class-tr"></div>
  [...]
</div>
```

## disableUserSelect

- Type: `Boolean`
- Required: `false`
- Default: `true`

默认情况下，组件将样式声明`user-select：none`添加到自身以防止在拖动期间选择文本。 您可以通过将此prop设置为`false`来禁用此行为。

```html
<vue-draggable-resizable :disable-user-select="false">
```

## enableNativeDrag

- Type: `Boolean`
- Required: `false`
- Default: `false`

默认情况下，浏览器的本机拖放功能（通常用于图像和其他一些元素）被禁用，因为它可能与组件提供的功能冲突。 如果您因任何原因需要恢复此功能，则可以将此道具设置为`true`。

```html
<vue-draggable-resizable :enable-native-drag="true">
```

## active

- Type: `Boolean`
- Required: `false`
- Default: `false`

确定组件是否应处于活动状态。 道具对变化作出反应，也可以与`sync` [modifier](https://vuejs.org/v2/guide/components.html#sync-Modifier)一起使用，以保持状态与父级同步。 您可以与`preventDeactivation` prop一起使用，以便完全控制组件外部的活动行为。

```html
<vue-draggable-resizable :active="true">
```

## preventDeactivation


- Type: `Boolean`
- Required: `false`
- Default: `false`

确定当用户在其外部单击/点击时是否应停用该组件。

```html
<vue-draggable-resizable :prevent-deactivation="true">
```

默认情况下，值为 false，当用户点击页面空白区域或其它位置时，原先聚焦激活的组件将不再聚焦激活。如果将 preventDeactivation 设置为 ture，那么用户点击空白区域或其它位置时，将不会对当前组件的状态（激活与否的状态）产生任何影响。

## draggable

- Type: `Boolean`
- Required: `false`
- Default: `true`

定义组件应该是否可拖动。

```html
<vue-draggable-resizable :draggable="false">
```

## resizable

- Type: `Boolean`
- Required: `false`
- Default: `true`

定义组件应该可以调整大小。

```html
<vue-draggable-resizable :resizable="false">
```

## w

- Type: `Number|String`
- Required: `false`
- Default: `200`

定义元素的初始宽度。它还支持`auto`，但是当您开始调整大小时，该值将退回到一个数字。

```html
<vue-draggable-resizable :w="200">
```

## h

- Type: `Number|String`
- Required: `false`
- Default: `200`

定义元素的初始高度。它还支持`auto`，但是当您开始调整大小时，该值将退回到一个数字。

```html
<vue-draggable-resizable :h="200">
```

## minWidth

- Type: `Number`
- Required: `false`
- Default: `50`

定义元素的最小宽度。

```html
<vue-draggable-resizable :min-width="50">
```

## minHeight

- Type: `Number`
- Required: `false`
- Default: `50`

定义元素的最小高度。

```html
<vue-draggable-resizable :min-height="50">
```

## maxWidth

- Type: `Number`
- Required: `false`
- Default: `null`

定义元素的最大宽度。

```html
<vue-draggable-resizable :max-width="400">
```

## maxHeight

- Type: `Number`
- Required: `false`
- Default: `null`

定义元素的最大高度。

```html
<vue-draggable-resizable :max-height="50">
```

## x

- Type: `Number`
- Required: `false`
- Default: `0`

定义元素的初始`x`位置。

```html
<vue-draggable-resizable :x="0">
```

## y

- Type: `Number`
- Required: `false`
- Default: `0`

定义元素的初始`y`位置。

```html
<vue-draggable-resizable :y="0">
```

## z

- Type: `Number|String`
- Required: `false`
- Default: `auto`

定义元素的`zIndex`。

```html
<vue-draggable-resizable :z="999">
```

## handles

- Type: `Array`
- Required: `false`
- Default: `['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']`

定义句柄数组以限制元素大小调整：
- `tl` - 左上角
- `tm` - 上方中间
- `tr` - 右上角
- `mr` - 右中角
- `br` - 右下角
- `bm` - 底部中间
- `bl` - 左下角
- `ml` - 左中角

```html
<vue-draggable-resizable :handles="['tm','bm','ml','mr']">
```

## axis

- Type: `String`
- Required: `false`
- Default: `both`

定义元素可拖动的轴。 可用值为`x`，`y`或`both`。

```html
<vue-draggable-resizable axis="x">
```

## grid

- Type: `Array`
- Required: `false`
- Default: `[1,1]`

定义捕捉元素的网格。

```html
<vue-draggable-resizable :grid="[1,1]">
```

相当于设置每次位置移动的步长。

## parent

- Type: `Boolean | String`
- Required: `false`
- Default: `false`

将组件的移动和尺寸限制为父组件（如果提供了就设置`true`），或者限制为由有效`CSS`选择器标识的元素。

```html
<vue-draggable-resizable :parent="true">
```

```html
<vue-draggable-resizable :parent=".selector">
```

## dragHandle

- Type: `String`
- Required: `false`

定义应该用于拖动组件的选择器。

```html
<vue-draggable-resizable drag-handle=".drag">
```

默认情况下，只要是在属性 w 和 h 构成的 w * h 的区域内，都是可以拖拽的。通过 dragHandle 配置，可以指定在某个元素上，才能拖拽。

## dragCancel

- Type: `String`
- Required: `false`

定义应该用于防止拖动初始化的选择器。

```html
<vue-draggable-resizable drag-cancel=".drag">
```

和 dragHandle 恰好对立。

## lockAspectRatio

- Type: `Boolean`
- Required: `false`
- Default: `false`

`lockAspectRatio`属性用于锁定宽高比。 此属性与`grid`不兼容，因此请确保一次只使用一个。

```html
<vue-draggable-resizable :lock-aspect-ratio="true">
```

## onDragStart

- Type: `Function`
- Required: `false`
- Default: `null`

拖动开始时调用（单击或触摸元素）。 如果任何处理程序返回`false`，则操作将取消。 您可以使用此功能来防止事件冒泡。

```html
<vue-draggable-resizable :onDragStart="onDragStartCallback">
```

```js
function onDragStartCallback(ev){
   ...
   // return false; — for cancel
}
```

## onDrag

- Type: `Function`
- Required: `false`
- Default: `null`

在拖动元素之前调用。该函数接收x和y的下一个值。如果任何处理程序返回了“ false”，则该操作将取消。

```html
<vue-draggable-resizable :onDrag="onDragCallback">
```

```js
function onDragCallback(x, y){
   ...
   // return false; — for cancel
}
```


## onResizeStart

- Type: `Function`
- Required: `false`
- Default: `null`

调整大小时启动（单击或触摸手柄）。 如果任何处理程序返回`false`，则操作将取消。

```html
<vue-draggable-resizable :onResizeStart="onResizeStartCallback">
```

```js

function onResizeStartCallback(handle, ev){
   ...
   // return false; — for cancel
}
```

## onResize

- Type: `Function`
- Required: `false`
- Default: `null`

在调整元素大小之前调用。该函数接收句柄和下一个值“ x”，“ y”，“ width”和“ height”。如果任何处理程序返回了“ false”，则该操作将取消。

```html
<vue-draggable-resizable :onResize="onResizeCallback">
```

```js
function onResizeCallback(handle, x, y, width, height){
   ...
   // return false; — for cancel
}
```

---

# 2. 事件 Event

## activated


**参数:** `-`

单击组件时调用，以显示句柄。

```html
<vue-draggable-resizable @activated="onActivated">
```

聚焦时调用

## deactivated


**参数:** `-`

每当用户单击组件外的任何位置时调用，以便停用它。

```html
<vue-draggable-resizable @deactivated="onDeactivated">
```

失去焦点时调用

## resizing


**参数:**
- `left` 元素的 X 位置
- `top` 元素的 Y 位置
- `width` 元素的宽度
- `height` 元素的高度

每当组件调整大小时调用。

```html
<vue-draggable-resizable @resizing="onResizing">
```

## resizestop


**参数:**
- `left` 元素的 X 位置
- `top` 元素的 Y 位置
- `width` 元素的宽度
- `height` 元素的高度

每当组件停止调整大小时调用。

```html
<vue-draggable-resizable @resizestop="onResizstop">
```

## dragging


**参数:**
- `left` 元素的 X 位置
- `top` 元素的 Y 位置

每当拖动组件时调用。

```html
<vue-draggable-resizable @dragging="onDragging">
```

## dragstop


**参数:**
- `left` 元素的 X 位置
- `top` 元素的 Y 位置

每当组件停止拖动时调用。

```html
<vue-draggable-resizable @dragstop="onDragstop">
```

# 3. 新增

## 新增 Props

### handleInfo

- 类型: `Object`
- 必需: `false`
- 默认: `{ size: 8, offset: -5, switch: true }`

当使用 `transform: scale()` 进行缩放操作时，其中 `switch` 为是否让 handle 始终保持视觉效果不变，`size` 为 handle 的大小（宽高相同），`offset` 为 handle 的位置偏移，通常在自定义 handle 样式时需要设置。

```html
<vue-draggable-resizable :handle-info="{ size: 14, offset: -5, switch: true }" />
```

没理解

### scaleRatio

- 类型: `Number`
- 必需: `false`
- 默认: `1`

当使用 `transform:scale()` 进行缩放操作时，用来修复操作组件时鼠标指针与移动缩放位置有所偏移的情况

详见:[Issues](https://github.com/gorkys/vue-draggable-resizable/issues/6)

```html
<vue-draggable-resizable :scale-ratio="0.6" />
```

### isConflictCheck

- 类型: `Boolean`
- 必需: `false`
- 默认: `false`

定义组件是否开启冲突检测。

```html
<vue-draggable-resizable :is-conflict-check="true" />
```

### snap

- 类型: `Boolean`
- 必需: `false`
- 默认: `false`

定义组件是否开启元素对齐。

```html
<vue-draggable-resizable :snap="true" />
```

### snapTolerance

- 类型: `Number`
- 必需: `false`
- 默认: `5`

当调用 `snap` 时，定义组件与元素之间的对齐距离，以像素（px）为单位。

```html
<vue-draggable-resizable :snap="true" :snap-tolerance="20" />
```

## 新增Events

### refLineParams

- **参数:** params


返回参数是一个 Object，里面包含 `vLine` 与 `hLine`，具体使用参考下面代码。

```html
<div>
  <vue-draggable-resizable :snap="true" :snap-tolerance="20" @refLineParams="getRefLineParams" />
  <vue-draggable-resizable :snap="true" :snap-tolerance="20" @refLineParams="getRefLineParams" />
  <span class="ref-line v-line"
      v-for="item in vLine"
      v-show="item.display"
      :style="{ left: item.position, top: item.origin, height: item.lineLength}"
  />
  <span class="ref-line h-line"
      v-for="item in hLine"
      v-show="item.display"
      :style="{ top: item.position, left: item.origin, width: item.lineLength}"
  />
</div>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'

export default {
  name: 'app',
  components: {
    VueDraggableResizable
  },
  data () {
    return {
      vLine: [],
      hLine: []
    }
  },
  methods: {
    getRefLineParams (params) {
      const { vLine, hLine } = params
      this.vLine = vLine
      this.hLine = hLine
    }
  }
}
</script>
```