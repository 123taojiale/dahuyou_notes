<template>
  <div class="AsyncContent-container">
    <slot name="loading" v-if="isLoading">
      Loaidng...（default slot value）
    </slot>
    <slot name="success" v-else-if="data" :data="data"> Data...（default slot value） </slot>
    <slot name="error" v-else :err="err"> Error...（default slot value） </slot>
  </div>
</template>

<script>
export default {
  name: "AsyncContent",
  props: ["fetchData"],
  data() {
    return {
      data: null, // 业务数据
      err: null, // 错误信息
      isLoading: true, // 是否正在加载中
    };
  },
  async created() {
    try {
      this.data = await this.fetchData();
      this.isLoading = false;
    } catch (err) {
      this.err = err;
      this.isLoading = false;
    }
  },
};
</script>
