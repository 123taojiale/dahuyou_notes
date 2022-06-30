<template>
  <div class="b-container">
    <p>
      the number is
    </p>
    <h1>{{$store.state.count}}</h1>
    <button @click="asyncDecrease">异步减少</button>
    <button @click="increase">增加</button>
  </div>
</template>

<script>
export default {
  name: "B",
  methods: {
    increase() {
      this.$store.commit('increase');
    },
    asyncDecrease() {
      this.$store.dispatch("asyncDecrease");
    }
  },
}
</script>