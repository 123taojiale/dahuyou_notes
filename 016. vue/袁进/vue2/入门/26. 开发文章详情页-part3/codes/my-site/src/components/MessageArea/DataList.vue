<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <div class="left">
        <Avatar :url="item.avatar" :size="44" />
      </div>
      <div class="right">
        <div class="nickname">{{ item.nickname }}</div>
        <div class="comment">{{ item.content }}</div>
        <div class="time">{{ formatDate(item.createDate, true) }}</div>
      </div>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import url(~@/styles/var.less);

li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid lighten(@gray, 20%);
}

.left {
  margin-right: 15px;
}

.right {
  flex: auto;
  position: relative;

  .nickname {
    color: @success;
    margin-bottom: 10px;
  }

  .comment {
    font-size: 14px;
  }

  .time {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 12px;
    color: @gray;
  }
}
</style>

<script>
import Avatar from "@/components/Avatar";
import { formatDate } from "@/utils";

export default {
  components: {
    Avatar,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatDate,
  },
};
</script>