<template>
  <!-- 标题栏 -->
  <TitleBar />
  <div class="content">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import TitleBar from './components/TitleBar.vue'
export default {
  components: {
    TitleBar,
  }
}
</script>

<style lang="less">
.content {
  margin-top: 39px;
  overflow-y: auto;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
