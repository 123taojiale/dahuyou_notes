<template>
  <ul class="menu-container">
    <li v-for="(item, i) in menuLists" :key="i">
      <router-link class="link" :to="{name: item.name}" active-class="active" exact-active-class="" :exact="item.exact">
        <div class="icon">
          <Icon :type="item.type" />
        </div>
        <span class="title">
          {{ item.title }}
        </span>
      </router-link>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.menu-container {
  list-style: none;
  margin: 24px 0;
  padding: 0;
  color: @gray;

  li {
    line-height: 40px;
    cursor: pointer;

    .link {
      padding-left: 45px;
      display: flex;
      .icon {
        width: 25px;
      }

      &:hover {
        color: #fff;
      }
      &.active {
        background-color: darken(@words, 3%);
      }
    }
  }
}
</style>

<script>
import Icon from "@/components/Icon";

export default {
  data() {
    return {
      menuLists: [
        {
          name: "Home", // 页面组件
          type: "home", // 图标类型
          title: "首页", // 文本
          exact: true,
        },
        {
          name: "Blog",
          type: "blog",
          title: "文章",
          exact: false,
        },
        {
          name: "About",
          type: "about",
          title: "关于我",
          exact: true,
        },
        {
          name: "Demo",
          type: "code",
          title: "项目&效果",
          exact: true,
        },
        {
          name: "Message",
          type: "msg",
          title: "留言板",
          exact: true,
        },
      ],
    };
  },
  components: {
    Icon,
  },
};
</script>