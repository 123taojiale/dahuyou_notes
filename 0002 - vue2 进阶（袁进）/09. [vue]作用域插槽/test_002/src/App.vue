<template>
  <ChildComp>
    <!-- <template v-slot:slot1="{ data1 }">
      <h1>父组件填 slot1 并获取到了子组件作用域中的数据：{{ data1 }}</h1>
    </template> -->
    <!-- 下面这种写法是上述写法的简写形式 -->
    <template #slot1="{ data1 }">
      <h1>父组件填 slot1 并获取到了子组件作用域中的数据：{{ data1 }}</h1>
    </template>
  </ChildComp>
</template>

<script>
import ChildComp from "./components/ChildComp.vue";

export default {
  name: "App",
  components: {
    ChildComp,
  },
};
</script>
