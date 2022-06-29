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