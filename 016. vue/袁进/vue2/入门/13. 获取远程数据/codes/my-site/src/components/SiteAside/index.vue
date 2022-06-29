<template>
  <div class="site-aside-container">
    <div class="header">
      <Avatar url="https://dahuyou.top/avatar.jpg" />
      <h1 class="title">dahuyou</h1>
    </div>
    <Menu />
    <Contact />
    <div class="footer">
      <p>Gench University</p>
      <p>taojiale</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.site-aside-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px 0;
  overflow-y: auto;
  overflow-x: none;

  .title {
    font-size: 1.2em;
    margin: 10px 0;
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-weight: normal;
    font-style: italic;
  }

  .avatar-container {
    margin: 0 auto;
  }

  .footer {
    font-size: 14px;
    text-align: center;
  }
}
</style>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";

export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
};
</script>