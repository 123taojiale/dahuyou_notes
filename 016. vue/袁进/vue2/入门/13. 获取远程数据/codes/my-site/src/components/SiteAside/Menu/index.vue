<template>
  <ul class="menu-container">
    <li v-for="(item, i) in menuItems" :key="i">
      <router-link exact-active-class="" active-class="selected" :exact="item.exact" :to="{name: item.name}">
        <div class="icon">
          <Icon :type="item.type" />
        </div>
        <div class="title">{{ item.title }}</div>
      </router-link>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.menu-container {
  color: @gray;

  a {
    display: flex;
    align-items: center;
    padding-left: 45px;
    line-height: 40px;
    cursor: pointer;

    &:hover {
      color: #fff;
    }

    &.selected {
      background-color: darken(@words, 3%);
    }
  }

  .icon {
    font-size: 16px;
    width: 26px;
  }
}
</style>

<script>
import Icon from "@/components/Icon";

export default {
  data() {
    return {
      menuItems: [
        { name: "Home", title: "主页", exact: true, type: "home" },
        { name: "Blog", title: "文章", exact: false, type: "blog" },
        { name: "About", title: "关于我", exact: true, type: "about" },
        { name: "Projects", title: "项目&效果", exact: true, type: "code" },
        { name: "Messages", title: "留言板", exact: true, type: "msg" },
      ],
    };
  },
  components: {
    Icon,
  },
};
</script>