<template>
  <div class="site-aside-container">
    <header class="header">
      <Avatar url="https://dahuyou.top/avatar.jpg" />
      <h1 class="nickName">dahuyou</h1>
    </header>
    <div class="menu-section">
      <Menu />
    </div>
    <div class="contact-section">
      <Contact />
    </div>
    <footer class="footer">
      <p class="school">
        Gench University
      </p>
      <p class="name">
        taojiale
      </p>
    </footer>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";

export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.site-aside-container {
  box-sizing: border-box;
  padding: 20px 0;

  // 头像居中
  .avatar-container {
    margin: 0 auto;
  }

  .nickName {
    color: #fff;
    font-size: 1.2em;
    font-style: italic;
    font-weight: normal;
    cursor: pointer;
    margin: 10px 0;
    text-align: center;
  }

  .footer {
    margin: 0;
    text-align: center;
    color: @words;
  }
}
</style>