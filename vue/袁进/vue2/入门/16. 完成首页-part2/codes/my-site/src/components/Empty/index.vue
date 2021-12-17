<template>
  <div class="empty-container">
    <div class="icon">
      <Icon type="empty" />
    </div>
    <div class="txt">{{ text }}</div>
  </div>
</template>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.empty-container {
  color: @gray;
  cursor: pointer;

  .icon {
    font-size: 72px;
  }

  .txt {
    padding-top: 5px;
    text-align: center;
  }
}
</style>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>