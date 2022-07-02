<template>
  <div id="app">
    <nav>
      <h1>需要缓存的页面</h1>
      <template v-for="item in $store.state.pages.cachedRouterNameList">
        <a href="javascript: void();">
          {{ item }}
        </a>
        <span class="plus-icon" @click="handleRemove(item)">-</span>
      </template>
    </nav>

    <!-- router-link -->
    <nav>
      <h1>导航</h1>
      <template v-for="item in $router.options.routes">
        <template v-if="item.path !== '*'">
          <router-link :to="item.path">
            {{ item.name }}
          </router-link>
          <span class="plus-icon" @click="handleAdd(item.name)">+</span>
        </template>
      </template>
    </nav>

    <!-- router-view -->
    <keep-alive :include="$store.state.pages.cachedRouterNameList">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-left: 2em;
    text-decoration: none;
    transition: all 500ms;

    &:hover {
      color: #0088cc;
      font-size: 1.1em;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .plus-icon {
    font-size: 1.5em;
    transition: all 500ms;
    cursor: pointer;

    &:hover {
      color: #0088cc;
      font-size: 1.7em;
    }
  }
}
</style>

<script>
export default {
  name: "App",
  methods: {
    handleAdd(routerName) {
      this.$store.commit("pages/addPage", routerName);
    },
    handleRemove(routerName) {
      this.$store.commit("pages/removePage", routerName);
    },
  },
};
</script>
