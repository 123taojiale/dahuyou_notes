<template>
  <div class="test-container">
    <ImageLoader
      original="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="2000"
      @load="handleLoad"
    />
  </div>
</template>

<style lang="less" scoped>
.test-container {
  width: 800px;
  height: 500px;
  border: 1px solid #ddd;
  margin: 3em auto;
}
</style>

<script>
import ImageLoader from "./";

export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoad() {
      console.log('图片加载完成了');
    }
  },
};
</script>
