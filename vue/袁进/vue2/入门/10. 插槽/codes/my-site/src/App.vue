<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="left">
          <SiteAside />
        </div>
      </template>
      <template #main>
        <div class="main">main</div>
      </template>
      <template #right>
        <div class="right">right</div>
      </template>
    </Layout>
  </div>
</template>

<style lang="less" scoped>
@import url(~@/styles/var.less);

#app {
  width: 100%;
  height: 100%;

  .left,
  .right,
  .main {
    height: 100%;
  }

  .right {
    width: 150px;
    background-color: lightgreen;
  }

  .left {
    width: 250px;
    background-color: @dark;
  }

  .main {
    width: 100%;
    background-color: lightcyan;
  }
}
</style>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";

export default {
  name: "App",
  components: {
    Layout,
    SiteAside,
  },
};
</script>