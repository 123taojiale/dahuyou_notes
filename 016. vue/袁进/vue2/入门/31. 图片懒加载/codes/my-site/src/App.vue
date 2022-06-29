<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="left">
          <SiteAside />
        </div>
      </template>
      <template #main>
        <div class="main">
          <router-view />
        </div>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<style lang="less" scoped>
@import url(~@/styles/var.less);

#app {
  width: 100%;
  height: 100%;

  .left,
  .main {
    height: 100%;
    overflow: hidden;
  }

  .left {
    width: 250px;
    background-color: @dark;
    overflow-y: auto;
  }

  .main {
    position: relative;
    width: 100%;
    // background-color: lightcyan;
  }
}
</style>

<script>
import "@/styles/global.less"; // 初始化样式
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import ToTop from "@/components/ToTop";

export default {
  name: "App",
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>