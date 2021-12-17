/**
 * 混合主区域的滚动逻辑
 */
export default function (refValue) {
  return {
    methods: {
      // mainScroll
      handleMainScroll() {
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      },
      // setMainScroll
      handleSetMainScroll(scrollTop) {
        this.$refs[refValue].scrollTop = scrollTop;
      }
    },
    mounted() {
      // mainScroll
      this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
      // setMainScroll
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
    },
    beforeDestroy() {
      // mainScroll
      this.$bus.$emit("mainScroll");
      this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
      // setMainScroll
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
    }
  }
}