<template>
  <div class="check-editor">
    <div class="check-editor-inner">
      <div class="checkbox" :class="{ checked: sell }" @click="statusChanged(!sell)"></div>
      <input type="text" class="editor" v-model="modelValue" />
    </div>
  </div>
</template>

<script>
import { watchEffect } from "vue";

export default {
  props: ["modelValue", 'sell'],
  setup(props, ctx) {
    watchEffect(() => {
      ctx.emit("update:modelValue", props.modelValue);
    });
    const statusChanged = (newStatus) => {
      ctx.emit("update:sell", newStatus);
    };
    return {
      statusChanged
    }
  },
};
</script>

<style scoped lang="less">
.check-editor {
  cursor: pointer;

  .check-editor-inner {
    display: flex;
    align-items: center;

    .checkbox {
      width: 15px;
      height: 15px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      border-radius: 3px;
      transition: 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover,
      &.checked {
        border-color: #409eff;
      }

      &.checked::after {
        content: "";
        border-radius: 2px;
        width: 9px;
        height: 9px;
        background: #409eff;
      }
    }

    .editor {
      border: none;
      outline: none;
      margin-left: 5px;
      border-bottom: 1px solid #dcdfe6;
      font-size: inherit;
    }
  }
}
</style>
