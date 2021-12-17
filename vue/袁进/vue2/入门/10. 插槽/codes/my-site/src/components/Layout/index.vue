<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot name="main"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;

  .left,
  .right {
    flex: none;
  }

  .main {
    flex: auto;
  }
}
</style>

<script>
export default {};
</script>