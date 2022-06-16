<template>
  <div @click="handleClick">
    <h1>Hello World</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    handleClick() {
      // console.log('helloworld is clicked');
      this.$emit('click', 123);
    }
  }
}
</script>