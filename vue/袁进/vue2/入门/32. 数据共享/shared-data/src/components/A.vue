<template>
  <div class="a-container">
    <p>
      the number is
    </p>
    <h1>{{$store.state.count}}</h1>
    <button @click="decrease">减少</button>
    <button @click="asyncIncrease">异步增加</button>
  </div>
</template>

<script>
export default {
  name: "A",
  methods: {
    decrease() {
      this.$store.commit("decrease");
    },
    asyncIncrease() {
      this.$store.dispatch("asyncIncrease");
    }
  },
}
</script>