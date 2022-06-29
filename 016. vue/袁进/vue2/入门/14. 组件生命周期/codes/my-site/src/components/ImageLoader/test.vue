<template>
  <div class="test-container">
    <ImageLoader
      original="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="3000"
      @load="handleLoaded"
    />
  </div>
</template>

<style lang="less" scoped>
.test-container {
  width: 500px;
  height: 300px;
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
    handleLoaded() {
      console.log('原图加载完成，并且已隐藏占位图。');
    }
  },
};
</script>