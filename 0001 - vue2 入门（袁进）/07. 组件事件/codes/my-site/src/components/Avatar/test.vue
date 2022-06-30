<template>
  <div class="test-container">
    <Avatar url="https://dahuyou.top/avatar.jpg" />
  </div>
</template>

<script>
import Avatar from "./index.vue";

export default {
  components: {
    Avatar,
  },
}
</script>

<style lang="less" scoped>
.test-container {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;
  margin: 3em auto;
  border: 1px solid #ddd;
  border-radius: 5px;

  background-color: aliceblue;
}
</style>