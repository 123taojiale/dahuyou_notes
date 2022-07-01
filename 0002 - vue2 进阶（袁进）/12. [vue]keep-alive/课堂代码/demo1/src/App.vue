<template>
  <div id="app">
    <p>
      <button @click="curIndex = (curIndex + 1) % comps.length">
        switch
      </button>
    </p>
    <keep-alive>
      <component :is="comps[curIndex]"></component>
    </keep-alive>
  </div>
</template>

<script>
// 这 3 个组件，无需注册即可使用，它们将通过 component 内置组件来渲染
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
export default {
  data() {
    return {
      comps: Object.freeze([Comp1, Comp2, Comp3]),
      curIndex: 0,
    };
  },
};
/*
🤔 为什么需要使用 Object.freeze()

*/
</script>

<style>
#app {
  width: 500px;
  margin: 0 auto;
  text-align: center;
}
</style>
