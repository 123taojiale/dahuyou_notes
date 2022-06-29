<template>
  <div class="test-container">
    <Empty text="empty"/>
  </div>
</template>

<style lang="less" scoped>
.test-container {
  width: 200px;
  height: 200px;
  margin: 3em auto;
  border: 1px solid #ddd;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script>
import Empty from "./";

export default {
  components: {
    Empty,
  },
}
</script>