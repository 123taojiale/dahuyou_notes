<template>
  <ul class="menu-container">
    <li
      v-for="(item, i) in menuLists"
      :key="i"
      :class="{ active: isSelect(item) }"
    >
      <a :href="item.path">
        <div class="icon">
          <Icon :type="item.type" />
        </div>
        <span class="title">
          {{ item.title }}
        </span>
      </a>
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
    padding-left: 45px;
    cursor: pointer;

    a {
      display: flex;
      .icon {
        width: 25px;
      }

      &:hover {
        color: #fff;
      }
    }

    &.active {
      background-color: darken(@words, 3%);
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
          path: "/",
        },
        {
          name: "Blog",
          type: "blog",
          title: "文章",
          path: "/blog",
          isStart: true,
        },
        {
          name: "About",
          type: "about",
          title: "关于我",
          path: "/about",
        },
        {
          name: "Demos",
          type: "code",
          title: "项目&效果",
          path: "/code",
        },
        {
          name: "Message",
          type: "msg",
          title: "留言板",
          path: "/msg",
        },
      ],
    };
  },
  components: {
    Icon,
  },
  methods: {
    isSelect(item) {
      const menuPath = item.path.toLowerCase();
      const curPath = location.pathname.toLowerCase();
      if (item.isStart) {
        return curPath.startsWith(menuPath);
      } else {
        return menuPath === curPath;
      }
    },
  },
};
</script>
