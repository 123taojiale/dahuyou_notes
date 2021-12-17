<template>
  <h1>ChildComp {{ a }}、{{ b }}</h1>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
      b: 2,
    };
  },
  methods: {
    m1() {
      console.log("m1 运行了");
    },
  },
};
</script>
