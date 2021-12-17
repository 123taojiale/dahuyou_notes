<template>
  <div class="check-editor">
    <div class="check-editor-inner">
      <div class="checkbox" :class="{ checked: true }"></div>
      <input type="text" class="editor" />
    </div>
  </div>
</template>

<script>
export default {};
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
