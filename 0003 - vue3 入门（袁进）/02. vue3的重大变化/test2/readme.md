在 vue3 中，vue2 这种传统的 options api 的写法，还是支持的。

```html
<template>
  <p>
    <button @click="increase">count：{{ count }}</button>
  </p>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increase() {
      console.log('this => ', this);
      this.count++;
    },
  },
};
</script>
```