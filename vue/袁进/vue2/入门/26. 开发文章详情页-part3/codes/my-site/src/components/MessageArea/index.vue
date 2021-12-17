<template>
  <div class="message-area-container">
    <!-- v-on="$listeners"
    将子组件 DataForm 抛出的事件继续往上抛
    v-on:"{submit: handleSubmit}" v-on:submit="handleSubmit"
    这两种写法其实是等效的。
    而 v-on="$listeners" 其实就是 v-on:"{submit: handleSubmit}"
    即：我们可以通过 v-on 一次性传递多个事件处理函数。 -->
    <DataForm v-on="$listeners" />
    <h3>
      <span class="title">{{ title }}</span>
      <span class="subTitle">{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<style lang="less" scoped>
.loading {
  height: 100px;
  position: relative;
}
</style>

<script>
import DataForm from "./DataForm.vue";
import DataList from "./DataList.vue";

export default {
  name: "MessageArea",
  components: {
    DataForm,
    DataList,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>