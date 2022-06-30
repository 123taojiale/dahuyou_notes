<template>
  <div class="carousel-item-box">
    <h1 class="title">第{{ no }}张轮播图</h1>
  </div>
</template>

<script>
export default {
  props: {
    no: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.carousel-item-box {
  width: 100%;
  height: 100%;
  background-color: #999;
}

/* 居中显示 */
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
