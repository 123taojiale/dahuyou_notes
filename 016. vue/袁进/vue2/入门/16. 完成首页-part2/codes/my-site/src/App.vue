<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left-area">
          <SiteAside />
        </div>
      </template>
      <template #main>
        <div class="main-area">
          <router-view />
        </div>
      </template>
      <!-- <template #right>
        <div class="right-area">右边栏</div>
      </template> -->
    </Layout>
  </div>
</template>

<style lang="less" scoped>
@import url(~@/styles/mixin.less);
@import url(~@/styles/var.less);

.test-container {
  .self-fill(fixed);

  .main-area,
  .left-area,
  .right-area {
    height: 100%;
  }

  .left-area {
    width: 250px;
    background-color: @dark;
  }
  /* .right-area {
    width: 150px;
    background-color: lightcyan;
  } */
  .main-area {
    position: relative;
    width: 100%;
    // background-color: lightgray;
  }
}
</style>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import "@/styles/global.less";

export default {
  components: {
    Layout,
    SiteAside,
  },
};
</script>