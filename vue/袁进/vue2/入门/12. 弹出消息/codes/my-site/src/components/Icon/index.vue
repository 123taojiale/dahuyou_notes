<template>
  <i class="icon-container iconfont" :class="getType"></i>
</template>

<style lang="less" scoped>
@import url(//at.alicdn.com/t/font_2668171_ckjbdupg005.css);
.icon-container {
  color: inherit;
  font-size: inherit;
}
</style>

<script>
const classMap = {
  gitee: "icon-gitee-fill-round",
  leetcode: "icon-leetcode",
  qq: "icon-logo-qq",
  github: "icon-github",
  home: "icon-zhuye",
  wx: "icon-weixin",
  msg: "icon-liuyan",
  arrowDown: "icon-xiajiantou",
  arrowUp: "icon-shangjiantou",
  error: "icon-cuowu",
  blog: "icon-blog",
  warn: "icon-jinggao",
  email: "icon-email",
  info: "icon-fl-xinxi",
  empty: "icon-empty",
  correct: "icon-zhengque-",
  about: "icon-set_about_hov",
  close: "icon-guanbi",
  code: "icon-Code",
};

export const types = Object.keys(classMap);

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    getType() {
      return classMap[this.type];
    },
  },
};
</script>