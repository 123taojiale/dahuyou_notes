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
使用 component 这个内置组件，动态地切换 Comp1、Comp2、Comp3 这 3 个组件的显示/隐藏，会发现这种写法，压根就不需要在 components 字段中注册这三个组件就可以直接使用。

🤔 为什么需要使用 Object.freeze()

因为这 3 个组件，没必要将其设置为响应式的数据

Object.freeze([Comp1, Comp2, Comp3])

经过 Object.freeze() 包裹之后，vue 将不会把它们变为响应式数据，多少能优化一点性能。
*/
</script>

<style>
#app {
  width: 500px;
  margin: 0 auto;
  text-align: center;
}
</style>
