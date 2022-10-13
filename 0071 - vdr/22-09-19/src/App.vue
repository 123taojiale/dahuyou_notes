<template>
  <div id="app">
    <vue-draggable-resizable
      className="my-class"
      class-name-draggable="my-draggable-class"
      class-name-resizable="my-resizable-class"
      class-name-dragging="my-dragging-class"
      class-name-resizing="my-resizing-class"
      class-name-active="my-active-class"
      class-name-handle="my-handle-class"
      :onDrag="onDragCallback"
    >
      <div style="width: 200px; height: 200px; background: #ddd">
        <vue-draggable-resizable
          class-name-draggable="my-draggable-class"
          class-name-resizable="my-resizable-class"
          class-name-dragging="my-dragging-class"
          class-name-resizing="my-resizing-class"
          class-name-active="my-active-class"
          class-name-handle="my-handle-class"
          :h="150"
          :w="150"
          :parent="true"
        >
          <div class="drag-box"></div>
        </vue-draggable-resizable>
      </div>
    </vue-draggable-resizable>
  </div>
</template>

<script>
import VueDraggableResizable from "vue-draggable-resizable-gorkys";
import "vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css";

export default {
  name: "App",
  data() {
    return {};
  },
  components: { VueDraggableResizable },
  methods: {
    onDragCallback(x, y) {
      console.log(x, y);
    },
  },
};
</script>

<style lang="less">
#app {
  .my-class {
    // 可拖拽
    &.my-draggable-class {
      border-top: 5px solid red;
    }

    // 可调节大小
    &.my-resizable-class {
      border-right: 5px solid blue;
    }

    // 拖动时
    &.my-dragging-class {
      border-bottom: 5px solid orange;
    }

    // 缩放时
    &.my-resizing-class {
      border-left: 5px solid purple;
    }

    // 激活时
    &.my-active-class {
      box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
    }

    // 调节激活时出现在周围的控制点
    .my-handle-class {
      position: absolute;
      background-color: #008c8c;
      border: 1px solid #000;

      // 一共 8 个点可供调节
      &.my-handle-class-tl {
        // top left
        background-color: red;
      }
    }
  }
  .drag-box {
    width: 100px;
    height: 100px;
    background-color: #008c8caa;
  }
}
</style>
