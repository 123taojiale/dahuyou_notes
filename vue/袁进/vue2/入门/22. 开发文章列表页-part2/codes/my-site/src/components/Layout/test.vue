<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">left</div>
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
.test-container {
  width: 80%;
  height: 500px;

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
    background-color: lightblue;
  }

  .main {
    width: 100%;
    background-color: lightcyan;
  }
}
</style>

<script>
import Layout from "./";

export default {
  components: {
    Layout,
  },
};
</script>