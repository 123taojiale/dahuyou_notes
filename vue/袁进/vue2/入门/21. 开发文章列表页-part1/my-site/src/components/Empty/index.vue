<template>
  <div class="empty-continer">
    <Icon type="empty" />
    <p class="txt">
      {{ text }}
    </p>
  </div>
</template>

<style lang="less" scoped>
@import url(~@/styles/mixin.less);
@import url(~@/styles/var.less);

.empty-continer {
  .self-center();
  text-align: center;
  color: @gray;
  cursor: pointer;

  .icon-container {
    font-size: 5em;
  }

  .txt {
    font-size: 1.2em;
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

