<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<style lang="less" scoped>
.test-container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid #ddd;
  margin: 3em auto;
}
</style>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>