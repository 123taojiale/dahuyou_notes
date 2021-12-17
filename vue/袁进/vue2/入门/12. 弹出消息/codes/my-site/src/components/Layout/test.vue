<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left-area">左边栏</div>
      </template>
      <template #main>
        <div class="main-area">中间主区域</div>
      </template>
      <template #right>
        <div class="right-area">右边栏</div>
      </template>
    </Layout>
  </div>
</template>

<style lang="less" scoped>
.test-container {
  width: 80%;
  height: 600px;
  border: 1px solid #ddd;
  margin: 3em auto;

  .main-area,
  .left-area,
  .right-area {
    height: 100%;
  }

  .left-area {
    width: 250px;
    background-color: lightblue;
  }
  .right-area {
    width: 150px;
    background-color: lightcyan;
  }
  .main-area {
    width: 100%;
    background-color: lightgray;
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