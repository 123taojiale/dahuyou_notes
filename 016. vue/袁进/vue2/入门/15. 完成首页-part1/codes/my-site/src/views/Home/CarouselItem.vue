<template>
  <div class="carousel-item-container">carousel-item-{{ no }}</div>
</template>

<style lang="less" scoped>
@import url(~@/styles/mixin.less);
.carousel-item-container {
  .self-center();
}
</style>

<script>
export default {
  props: ["no"],
};
</script>