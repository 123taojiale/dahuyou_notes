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
  margin: 3em auto;
  background-color: @dark;

}
</style>

<script>
import SiteAside from "./index.vue";
import "@/styles/global.less";

export default {
  components: {
    SiteAside,
  },
};
</script>