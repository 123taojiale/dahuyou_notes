<template>
  <div class="test-container">
    <div class="box" v-for="(item, i) in classMapKeys" :key="i">
      <Icon :type="item" />
      <p class="txt">{{ item }}</p>
    </div>
  </div>
</template>

<script>
import { classMapKeys, default as Icon } from "./index.vue";

export default {
  data() {
    return {
      classMapKeys,
    };
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.test-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 800px;
  margin: 3em auto;
  border: 1px solid #ddd;
  color: @words;

  .box {
    text-align: center;
    padding: 20px 30px;
    cursor: pointer;

    .icon-container {
      font-size: 2em;
    }

    .txt {
      font-size: 1.2em;
      color: @gray;
    }
  }
}
</style>