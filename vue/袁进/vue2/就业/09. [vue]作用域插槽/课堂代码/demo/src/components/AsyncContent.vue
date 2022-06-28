<template>
  <div>
    <slot name="loading" v-if="isLoading">默认加载中的效果...</slot>
    <slot name="error" v-else-if="error" :error="error">{{ error }}</slot>
    <!-- 通过 v-bind 将子组件的插槽数据绑定到了父组件插槽的位置 -->
    <slot name="default" v-else :content="content">{{ content }}</slot>
  </div>
</template>

<script>
// 由 AsyncContent 组件来识别当前的请求状态，决定显示哪块插槽
export default {
  name: "AsyncContent",
  props: {
    contentPromise: Promise,
  },
  data() {
    return {
      isLoading: true,
      content: null,
      error: null,
    };
  },
  async created() {
    try {
      this.content = await this.contentPromise;
      this.error = null;
    } catch (err) {
      this.content = null;
      this.error = err;
      // ⚠️ error 对象没法成为一个响应式数据
    } finally {
      this.isLoading = false;
    }
  },
  mounted() {
    console.log("$slots", this.$slots);
    console.log("$scopedSlots", this.$scopedSlots);
  },
};
</script>