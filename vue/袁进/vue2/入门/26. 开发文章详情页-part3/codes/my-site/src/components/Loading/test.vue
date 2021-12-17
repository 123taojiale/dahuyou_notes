<template>
  <div class="test-container">
    <Loading />
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
import Loading from './index.vue';
export default {
  components: {
    Loading,
  },
}
</script>