<template>
  <div>
    <p ref="para">some paragraph</p>
    <ChildComp ref="comp" />
    <button @click="handleClick">change</button>
  </div>
</template>

<script>
import ChildComp from "./ChildComp";
export default {
  components: {
    ChildComp,
  },
  methods: {
    handleClick() {
      // 因为可以获取到子组件真实的 DOM，所以相关的纯 DOM 操作，就有很多可以做了。
      console.log(this.$refs);
      this.$refs.comp.a += 1;
      this.$refs.comp.b += 1;
      this.$refs.comp.m1();
      // this.$refs.comp.$el.innerHTML += " append..."; // 无效
      setTimeout(() => {
        this.$refs.comp.$el.innerHTML += " append...";
      }, 0);
    },
  },
};
/*
记录一个怪异行为，目前还不是很清楚原因，在测试的时候，感觉是因为异步导致的，也可能也事件队列那一块的知识相关。
因此，就把修改 innerHTML 的代码丢到 setTimeout 中，发现结果是 ok 的。
但是，如果放在外边的同步脚本中，那么数据响应式就会出问题。
而且，一旦修改了 innerHTML，那么，数据响应式将失效。
看过源码后，记得找明这一点的原因。
 */
</script>
