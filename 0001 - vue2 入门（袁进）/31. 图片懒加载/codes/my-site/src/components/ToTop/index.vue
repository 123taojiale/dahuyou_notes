<template>
  <div class="to-top-container" v-show="show" @click="handleClick">ToTop</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    console.log("totop created");
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (dom && dom.scrollTop > 500) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    // 发生滚动的容器回归到顶部
    handleClick() {
       this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.to-top-container {
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  color: #fff;
  background-color: @primary;
  cursor: pointer;
}
</style>