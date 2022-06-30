<template>
  <div class="test-container">
    <Avatar url="https://dahuyou.top/avatar.jpg" />
  </div>
</template>

<style lang="less" scoped>
.test-container {
  width: 300px;
  height: 300px;
  border: 1px solid #ddd;
  margin: 3em auto;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
}
</style>

<script>
import Avatar from "./";

export default {
  components: {
    Avatar,
  },
}
</script>