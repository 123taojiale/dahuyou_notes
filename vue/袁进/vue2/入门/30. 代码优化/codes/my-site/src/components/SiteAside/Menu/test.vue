<template>
<div class="test-container">
  <Menu />
</div>
</template>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.test-container {
  box-sizing: border-box;
  width: 250px;
  height: 600px;
  padding-top: 200px;
  margin: 3em auto;
  background-color: @dark;
}
</style>

<script>
import "@/styles/global.less";
import Menu from "./";

export default {
  components: {
    Menu,
  },
}
</script>