<template>
  <ul class="test-container">
    <li v-for="(type, i) in types" :key="i">
      <div class="icon">
        <Icon :type="type" />
      </div>
      <div class="txt">{{ type }}</div>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.test-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 800px;
  margin: 3em auto;
  border: 1px solid #ddd;
  padding: 30px;

  li {
    flex: none;
    padding: 20px;
    text-align: center;
    color: @gray;

    .icon {
      font-size: 2em;
      padding: 10px;
    }
  }
}
</style>

<script>
import Icon, { types } from "./";
import "@/styles/global.less";

export default {
  data() {
    return {
      types,
    };
  },
  components: {
    Icon,
  },
};
</script>