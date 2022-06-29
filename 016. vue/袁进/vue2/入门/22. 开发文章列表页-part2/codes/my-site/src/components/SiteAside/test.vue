<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.test-container {
  width: 250px;
  height: 600px;
  border: 1px solid #ddd;

  margin: 0 auto;
  background-color: @dark;

  overflow-x: none;
  overflow-y: auto;
}
</style>

<script>
import SiteAside from "./";
import "@/styles/global.less";

export default {
  components: {
    SiteAside,
  },
}
</script>